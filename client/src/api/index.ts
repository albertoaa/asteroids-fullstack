import { AsteroidsList } from './../components/AsteroidsList';
import { Asteroid } from '../types';

const API_URL = process.env.REACT_APP_API_URL;

export interface GetAsteroidParams {
  start_date: string;
  end_date?: string;
}

const getParamsString = (params: GetAsteroidParams) => {
  const paramsString = Object.keys(params)
    .map((key) => `${key}=${params[key as keyof GetAsteroidParams]}`)
    .join('&');
  return paramsString;
};

export const getAsteroids = async (params?: GetAsteroidParams) => {
  const paramsString = params ? getParamsString(params) : '';
  const response = await fetch(`${API_URL}/asteroids/${params?.start_date}/${params?.end_date}`);
  const data = await response.json();
  return data;
};
