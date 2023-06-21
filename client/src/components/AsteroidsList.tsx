import { AsteroidsListProps } from '../types';
import { AsteroidCard } from './AsteroidCard';

export const AsteroidsList = (props: AsteroidsListProps) => {
  return (
    <div>
      {props.asteroids.map((asteroid) => {
        return <AsteroidCard {...asteroid} />;
      })}
    </div>
  );
};
