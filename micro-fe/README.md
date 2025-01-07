# Micro FE
React-based micro-frontend app. It is building the library into `/lib`.

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

## Build Package
```bash
$ npm run package
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

* `package`: Creates the package, building the library bundles and generating TS declaration files.
* `build:lib`: Builds the library bundle using Rollup.
* `build:types`: Generates TypeScript declaration files.
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

### Main Dev Dependencies
* **React**: JavaScript library for building user interfaces.
* **TypeScript**: Typed superset of JavaScript for enhanced development.
* **Webpack**: Module bundler for building the project.
* **ESLint**: Pluggable linting utility for JavaScript and TypeScript.
* **Prettier**: Opinionated code formatter.
* **Vitest**: Test runner for unit tests.
* **Husky**: Git hooks manager for running tasks on pre-commit.
* **Rollup**: Package builder.

### Dependencies
* **React**: JavaScript library for building user interfaces.
* **React DOM**: React-specific methods for working with the DOM.
* **i18next**: Package library required for translations. 
* **React i18next**: React initialization for i18next.
