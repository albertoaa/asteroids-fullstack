import { Asteroid } from '../types';

export const AsteroidCard = (asteroid: Asteroid) => {
  return (
    <div className='flex flex-col w-3/12 h-32 bg-gray-50 border border-black p-4 m-2 justify-between rounded-md'>
      <div className='flex flex-row' key={asteroid.id}>
        <div className='flex flex-col w-full'>
          <div className='flex flex-row'>
            <h3 className='text-lg font-bold'>Asteroid ID</h3>
          </div>
          <div className='flex flex-row'>
            <p>{asteroid.id}</p>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <div className='flex flex-row'>
            <h3 className='text-lg font-bold'>Asteroid Name</h3>
          </div>
          <div className='flex flex-row'>
            <p>{asteroid.name}</p>
          </div>
        </div>
        {/* <h3 className='text-3xl font-bold underline'>
            {asteroid.id} - {asteroid.name}
            </h3>
          <p>{asteroid.nasa_jpl_url}</p> */}
      </div>
      <div className='flex flex-row'>
        <a href='{asteroid.nasa_jpl_url}' className='text-blue-500'>
          NASA JPL URL
        </a>
      </div>
    </div>
  );
};
