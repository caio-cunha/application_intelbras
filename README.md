
## Description

Simple CRUD application in nest.js.

## Requirements

- Node.js
- Nest.js
- Docker

## Installation

- git clone https://github.com/caio-cunha/application_intelbras.git
```bash
$ npm install
```

## Database

Up database:
```bash
docker-compose up -d
```

## Running the app

Up application in terminal (CMD):
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test application

Run the endpoints in postman (or others):
 - Import the template (in ./postman dir) in the postman.
 - Test endpoints.
