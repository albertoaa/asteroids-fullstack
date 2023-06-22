# Asteroids App

Simple project to show a list of Asteroids and their details from NASA API(https://api.nasa.gov/).

The project has two folders:

- client: React App with Typescript
- server: NodeJS with Express

## How to run the project

1. Clone the project into your local machine
2. Install dependencies on `client` and `server` folders with `npm install`
3. Create a `.env` file on both folders using `.env.example` as template.
4. Run the server with `npm start` on `server` folder
5. Run the client with `npm start` on `client` folder

### Improvements

- Add unit tests
- Add Typescript to server. It wasn't added because since it only one route that relies a request to NASA API, it was not necessary. But if some other routes are added and database persistance layer, it would be a good idea to add Typescript to server.
- Move some logic from `App.tsx` to the server to handle data extraction from the NASA API response.
- Adding database persistance layer to server. It would be a good idea to add a database to store the asteroids data and avoid making a request to NASA API every time the user wants to see the list of asteroids. It would be a good idea to add a cron job to update the database every day with the new asteroids. Also with this layer we can persist the user's favorite asteroids on the database