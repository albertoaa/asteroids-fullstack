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
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    setLoading(true);
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
  }, [date]);

  const handleDateValueChange = (date: DateValueType) => {
    const newDate = date as DateRange;

    const startDate = new Date(newDate.startDate);
    const endDate = new Date(newDate.endDate);
    const differenceInDays = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

    if (differenceInDays > 7) {
      alert('Date range must be less than 7 days');
    } else {
      setDate(newDate);
    }
  };

  const sortAsteroids = () => {
    setLoading(true);
    const sortedAsteroids = [...asteroids];
    sortedAsteroids.sort((a, b) => {
      if (sortDirection === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setAsteroids(sortedAsteroids);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    setLoading(false);
  };

  return (
    <div className='flex container my-12 mx-auto md:px-12 flex-col align-middle justify-center'>
      <h1 className='text-4xl font-bold flex flex-row w-full justify-center mb-12'>Asteroids</h1>
      <div className='w-full flex flex-row justify-start px-40'>
        <h3 className='w-1/5 text-xl font-bold flex flex-row justify-start pt-2'>Select a Date Range</h3>
        <div className='w-2/5 border border-black rounded-lg'>
          <DatePicker value={date} onChange={handleDateValueChange} />
        </div>
        <div className='flex w-2/5 justify-end'>
          <h4 className='mt-2 mr-2'>Sort by name:</h4>
          <button className='px-8 bg-sky-100 border border-black rounded-lg' onClick={sortAsteroids}>
            {sortDirection}
          </button>
        </div>
      </div>
      {loading ? (
        <div
          className='mx-auto my-12 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
          role='status'
        >
          <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
            Loading...
          </span>
        </div>
      ) : (
        <AsteroidsList asteroids={asteroids} />
      )}
    </div>
  );
}

export default App;
