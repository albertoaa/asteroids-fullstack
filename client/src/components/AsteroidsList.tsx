import { AsteroidsListProps } from '../types';
import { AsteroidCard } from './AsteroidCard';

export const AsteroidsList = (props: AsteroidsListProps) => {
  return (
    <div className='flex flex-row flex-wrap justify-center'>
      {props.asteroids.map((asteroid) => {
        return <AsteroidCard {...asteroid} />;
      })}
    </div>
  );
};
