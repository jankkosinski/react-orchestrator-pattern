# Orchestrator App 
The Orchestrator is a React-based application designed to manage and orchestrate various microfrontends.

## Description
 The Orchestrator serves as the main entry point for the application, responsible for routing and dynamically loading different microfrontends as needed. It leverages React Router for navigation and lazy loading to ensure efficient resource utilization.

 ## Node Version Manager
 This project specifies the required Node.js version using **.nvmrc** file. Make sure to install or select the correct version of Node.js before installing any dependencies or running scripts. Use NVM (Node Version Manager) by running `nvm install` or `nvm use` commands.

## Installation
```bash
$ npm install
```

## Running The App
```bash
$ npm run start
```

## Build Production
```bash
$ npm run build
```

## Tests
### Unit Tests
```bash
$ npm run test:unit
```
### Coverage
```bash
$ npm run test:coverage
```

## Usage
### Scripts

* `build`: Builds the project using webpack in production mode.
* `start`: Starts the webpack development server with hot reloading.
* `test`: Runs linting, formatting, and unit tests.
* `test:unit`: Runs unit tests using vitest.
* `test:watch`: Runs unit tests in watch mode.
* `test:update`: Updates unit test snapshots.
* `test:coverage`: Generates code coverage report.
* `format`: Checks code formatting using Prettier.
* `format:fix`: Fixes code formatting issues using Prettier.
* `lint`: Runs ESLint for code linting.
* `lint:fix`: Fixes linting issues using ESLint.
* `lint:style`: Runs StyleLint for styles linting.
* `lint:style:fix`: Fixes styles linting issues using StyleLint.
* `prepare`: Installs Husky hooks for pre-commit checks.

### Dev Dependencies
* **React**: JavaScript library for building user interfaces.
* **TypeScript**: Typed superset of JavaScript for enhanced development.
* **Webpack**: Module bundler for building the project.
* **ESLint**: Pluggable linting utility for JavaScript and TypeScript.
* **Prettier**: Opinionated code formatter.
* **Vitest**: Test runner for unit tests.
* **Husky**: Git hooks manager for running tasks on pre-commit.

### Dependencies
* **React**: JavaScript library for building user interfaces.
* **React DOM**: React-specific methods for working with the DOM.