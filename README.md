# Bar-Tracker
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

* Fire up the development server. It starts itself on port 3001.

````
yarn run watch-server
````

## Frontend
Since I wanted to try out the React Concurrent Mode features, the frontend currently uses the experimental build of 
React. Means, type-safety is not given and bugs could happen (and incompatibility with other libraries). But performance
should be great?

To install it, run yarn install and startup the dev server afterwards.

````
yarn install
yarn run start
````
