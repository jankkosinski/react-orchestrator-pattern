# Example Microfrontend Architecture Project

This repository demonstrates a microfrontend architecture using a simple setup with two parts:

`main-app`: The orchestrator application that dynamically loads and integrates the microfrontend.
`micro-fe`: A standalone microfrontend that is bundled and consumed as a library in the `main-app`.
The repository is an example implementation of Microfrontend Architecture, which allows for modular development and deployment of independent frontend applications.

## Features and Architecture

Architecture Pattern
This project implements the Microfrontend Architecture using the following principles:

- Independence: Each microfrontend can be developed, built, and deployed independently.
- Integration: The main application dynamically loads microfrontends at runtime using module federation and lazy loading.
- Scalability: This pattern supports a modular approach, enabling teams to work on separate microfrontends with minimal interference.

## Tech Stack

`main-app`
- React: For building the orchestrator application.
- Webpack: Bundles the application and handles dynamic imports of microfrontends.
- React Lazy + Suspense: Used to dynamically load and render microfrontends.
- Microfrontend Integration: Includes importing the micro-fe package as a module.

`micro-fe`
- React: For building the microfrontend.
- SCSS + CSS Modules: Scoped styles for components.
- Rollup: Used for bundling the microfrontend into a library for consumption.
- PostCSS: Processes SCSS styles into standard CSS.
- TypeScript: Provides strong typing and generates declaration files for the library.

## Building and Running the Project

### Building the Microfrontend Library
The micro-fe folder contains the microfrontend application, which is built into a library for use in the main-app.

**Building the Library:**
- Rollup: Bundles the React components and SCSS into a consumable library.
- TypeScript Compiler: Generates .d.ts files for TypeScript type definitions.
- Generated Output: The output is stored in the lib/ folder: index.js: The entry point for the library.
- Additional chunk files: For dynamically loaded components.

The main-app folder contains the orchestrator that dynamically imports and renders the microfrontend.


**Integration:**
- The main-app has specific dependency for importing micro-fe as a package from micro-fe directory: `"@jk/micro-fe": "../micro-fe"`
- The main-app imports the microfrontend library using: `const MicroFE = lazy(() => import('@jk/micro-fe'));`
- Webpack in main-app ensures compatibility with the dynamically loaded chunks from the microfrontend.

**How to run the project:**

1. Go to directory `./micro-fe`
2. Choose proper version of Node with `nvm use`
3. Install packages `npm install`
4. Crete library package `npm run package`
5. Go to directory `./main-app`
6. Install packages `npm install` - it will also add `micro-fe` to `node_modiles` in `main-app`
7. Run dev application `npm run start`
8. For building prd version run: `npm run build`


**Summary:**

This example project provides a foundation for creating scalable, independent, and reusable frontend applications using the microfrontend architecture. It demonstrates how to build and consume a microfrontend as a library, integrate it into an orchestrator, and handle dependencies effectively.
