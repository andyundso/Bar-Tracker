# Bar-Tracker

[![CI Status](https://andyundso.semaphoreci.com/badges/Bar-Tracker.svg)](https://andyundso.semaphoreci.com/projects/Bar-Tracker)
[![Maintainability](https://api.codeclimate.com/v1/badges/291f35be42ae98a1cc76/maintainability)](https://codeclimate.com/github/andyundso/Bar-Tracker/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/291f35be42ae98a1cc76/test_coverage)](https://codeclimate.com/github/andyundso/Bar-Tracker/test_coverage)

One day, this project should support simple user authentication and the ability to leave a review for a bar for 
your future self.

This README is currently for myself as a reminder on how to setup the project.

## Backend
The backend is written in Typescript and built with KoaJS. I chose TypeORM and Postgres for the database.

* Fire up a Postgres server on port 5432. TypeORM currently does not support PostgreSQL 12.
    * Alternative, you can use the docker-compose file in the directory.
    
````
cd backend
docker-compose up -d
````

* Install all the yarn dependencies.

````
yarn install
````

* There is a small set of seeds available. WARNING: The seeds will delete any existing data in the database!

````
yarn run db:fixtures:load
````

* Make sure to add a file named `.env` and add your Mapbox API key there:

````
MAP_BOX_API_KEY=soomekeysandstuff
````

* Fire up the development server. It starts itself on port 3001.

````
yarn run watch-server
````

* Tests can be run with Jest:

````
yarn run test
````

## Frontend
Install the dependencies and run the server.

````
yarn install
yarn run start
````
