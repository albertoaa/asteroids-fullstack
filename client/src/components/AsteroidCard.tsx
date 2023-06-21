import { useState } from 'react';
import { Asteroid } from '../types';

export const AsteroidCard = (asteroid: Asteroid) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`w-1/4 h-48 bg-gray-50 border border-black p-4 m-2 cursor-pointer rounded-xl shadow-xl transform transition-transform ${
        isFlipped ? 'rotate-y-180 bg-sky-100' : ''
      }`}
      key={asteroid.id}
      onClick={flipCard}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {!isFlipped ? (
        <div className='card-front'>
          <div className='flex flex-row w-full'>
            <div className='flex flex-col w-28'>
              <h3 className='text-lg font-bold'>ID</h3>
            </div>
            <div className='flex flex-col'>
              <p>{asteroid.id}</p>
            </div>
          </div>
          <div className='flex flex-row w-full'>
            <div className='flex flex-col w-28'>
              <h3 className='text-lg font-bold'>Name</h3>
            </div>
            <div className='flex flex-col'>
              <p>{asteroid.name}</p>
            </div>
          </div>
          <div className='flex flex-row w-full'>
            <div className='flex flex-col w-28'>
              <h3 className='text-lg font-bold'>Magnitude</h3>
            </div>
            <div className='flex flex-col'>
              <p>{asteroid.absolute_magnitude_h}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className='card-back'>
          <div className='flex flex-row w-full'>
            <h3 className='text-xl font-bold'>Details</h3>
          </div>
          <div className='flex flex-row w-full'>
            <div className='flex flex-col w-28'>
              <h3 className='text-lg font-bold'>NASA URL</h3>
            </div>
            <div className='flex flex-col'>
              <a href={asteroid.nasa_jpl_url} target='blank'>
                Click Here
              </a>
            </div>
          </div>
          <div className='flex flex-row w-full'>
            <div className='flex flex-col w-28'>
              <h3 className='text-lg font-bold'>Hazardous</h3>
            </div>
            <div className='flex flex-col'>
              <p>{asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
            </div>
          </div>
          <div className='flex flex-row w-full'>
            <div className='flex flex-col w-28'>
              <h3 className='text-lg font-bold'>Sentry</h3>
            </div>
            <div className='flex flex-col'>
              <p>{asteroid.is_sentry_object ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
