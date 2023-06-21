export type Asteroid = {
  id: string;
  name: string;
  nasa_jpl_url: string;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
};

export type AsteroidsListProps = {
  asteroids: Asteroid[];
};
