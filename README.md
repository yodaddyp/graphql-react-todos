# graphql-react-todos

## Requirements
* Node
* Npm
* Docker
* Docker Compose

## Startup
1. Create `.env` file and add environment variables based on `.env-sanple` file.
2. Up services with: `docker-compose up -d`.
3. Install and run application by running `npm i && npm start` in the `app` folder.

## Todo
* Properly authenticate the GraphQL enpoint
  * The current setup exposes the Hasura Admin secret which is obviously bad!
* User authentication with Firebase/Auth0 (other service)
  * The current implementation uses
* App localisation (react-redux)
* Offline PWA (Service Workers)
* Integration tests
  * Cucumber/Selenium
* Unit tests
  * Jest is running but code coverage is poor