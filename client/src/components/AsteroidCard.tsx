import { Asteroid } from '../types';

export const AsteroidCard = (asteroid: Asteroid) => {
  return (
    <div key={asteroid.id}>
      <h3>
        {asteroid.id} - {asteroid.name}
      </h3>
      <p>{asteroid.nasa_jpl_url}</p>
    </div>
  );
};
