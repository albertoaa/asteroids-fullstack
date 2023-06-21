import { useEffect, useState } from 'react';

import './App.css';

import { GetAsteroidParams, getAsteroids } from './api';
import { AsteroidsList } from './components/AsteroidsList';
import { Asteroid } from './types';

function App() {
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const params: GetAsteroidParams = {
      start_date: '2015-09-07',
      end_date: '2015-09-08',
    };

    getAsteroids(params).then((res) => {
      const { near_earth_objects } = res;
      const asteroids: Asteroid[] = [];
      Object.keys(near_earth_objects).map((key) => {
        near_earth_objects[key].map((asteroid: Asteroid) => {
          const foundAsteroid: Asteroid = {
            id: asteroid.id,
            name: asteroid.name,
            nasa_jpl_url: asteroid.nasa_jpl_url,
            is_potentially_hazardous_asteroid: asteroid.is_potentially_hazardous_asteroid,
            is_sentry_object: asteroid.is_sentry_object,
          };
          asteroids.push(foundAsteroid);
        });
      });

      setAsteroids(asteroids);
      setLoading(false);
    });
  }, []);

  return (
    <div className='App'>
      <h1>Asteroids</h1>
      {loading ? <div>Loading...</div> : <AsteroidsList asteroids={asteroids} />}
    </div>
  );
}

export default App;
