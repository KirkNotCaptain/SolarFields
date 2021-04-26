# SolarFields

## Instructions to Start

- `npm install` - Install Dependencies
- Create `.env` file in root directory
- Navigate to [https://account.mapbox.com/](!https://account.mapbox.com/) and to obtain a public Mapbox Access Token
- Add `ACCESS_TOKEN={your access token}` to `.env`
- `npm run start` - to build webpack and start server
- Navigate to [http://localhost:3000/](!http://localhost:3000/)

## Notes

The application currently serves up the specified endpoints given a particular solar farm id. The front-end client is set to a 10 second interval that refreshes the map with the next 'id', simulating a 'live update' of the technician's locations. Unfortunately there is a bug here where the counter variable in Dashboard.js seems to restart from 0 and count upward to the current solar farm id on every refresh, causing each refresh to take longer and longer to load. I was not able to resolve this bug before the time limit.
