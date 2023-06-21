import { useEffect, useState } from 'react';
import DatePicker from 'react-tailwindcss-datepicker';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';

import './App.css';

import { GetAsteroidParams, getAsteroids } from './api';
import { AsteroidsList } from './components/AsteroidsList';
import { Asteroid, DateRange } from './types';

function App() {
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [date, setDate] = useState<DateRange>({
    startDate: '2015-09-07',
    endDate: '2015-09-08',
  });

  useEffect(() => {
    const params: GetAsteroidParams = {
      start_date: date.startDate?.toString(),
      end_date: date.endDate,
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
            absolute_magnitude_h: asteroid.absolute_magnitude_h,
          };
          asteroids.push(foundAsteroid);
        });
      });

      setAsteroids(asteroids);
      setLoading(false);
    });
  }, []);

  const handleDateValueChange = (date: DateValueType) => {
    console.log('newValue:', date);
    const newDate = date as DateRange;
    setDate(newDate);
  };

  return (
    <div className='flex container my-12 mx-auto md:px-12 flex-col align-middle justify-center'>
      <h1 className='text-4xl font-bold flex flex-row w-full justify-center mb-12'>Asteroids</h1>
      <div className='w-1/2 flex flex-row align-middle justify-center ml-20'>
        <h3 className='w-1/2 text-xl font-bold flex flex-row justify-center pt-2'>Select a Date Range</h3>
        <div className='w-1/2 mx-auto border border-black rounded-lg'>
          <DatePicker value={date} onChange={handleDateValueChange} showShortcuts={true} />
        </div>
      </div>
      {loading ? <div>Loading...</div> : <AsteroidsList asteroids={asteroids} />}
    </div>
  );
}

export default App;
