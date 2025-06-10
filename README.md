# ts-starter

A modern Express starter with TypeScript, ESM and Hot Reload.

## Author

- **Name:** Mateusz Hallala
- **Email:** mateuszhallala@gmail.com
- **URL:** https://github.com/hcsvnt

## License

This project is licensed under the ISC License.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/).

## Installation

To install the project dependencies, run the following command in your terminal:

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles TypeScript files in production mode.

### `npm run dev`

Runs the app in development mode with hot reloading using `nodemon`.
Open [http://localhost:8000](http://localhost:8000) (or the port specified in your `.env` file or `src/index.ts`) to view it in the browser.
The server will automatically reload if you make changes to the code.
You will see any lint errors in the console.

### `npm start`

Runs the built app from the `dist` folder.
This is the command you would typically use in a production environment after building the project.
It expects a `.env` file in the root directory for environment variables (e.g., `PORT`).

### `npm run publish`

Builds the project and publishes it to npm. Make sure you are logged in to npm and have the necessary permissions.

### `npm run update`

Increments the patch version of the package, builds the project, and then publishes it to npm.

### `npm test`

Currently, this script echoes an error message and exits. You should replace this with your actual test command.

## Project Structure

```
.
├── nodemon.json        # Nodemon configuration for development
├── package.json        # Project metadata and dependencies
├── README.md           # This file
├── tsconfig.json       # TypeScript compiler options
├── src/                # Source code
│   ├── index.ts        # Main entry point of the application
│   └── utils/          # Utility functions
│       └── helper.ts   # Example helper module
└── dist/               # Output directory for compiled code (after running npm run build)
```

## Technologies Used

*   **Node.js:** JavaScript runtime environment.
*   **Express:** Fast, unopinionated, minimalist web framework for Node.js.
*   **TypeScript:** Superset of JavaScript that adds static typing.
*   **ESM (ECMAScript Modules):** Modern module system for JavaScript.
*   **Nodemon:** Utility that monitors for any changes in your source and automatically restarts your server.
*   **ts-node:** TypeScript execution environment and REPL for Node.js.
