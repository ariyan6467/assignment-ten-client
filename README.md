# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





//Readme Code OverView
=> This is my Project  "AI-manage-Inventory".This service exposes a REST API for managing AI models, tracking purchases, and surfacing curated content to the client-side application.I have used severa technology (eg:javascript,react-router,firebase,mongodb backed management);

=>live site:https://friendly-manatee-1cb052.netlify.app/






=>key factor:
- MongoDB integration with queries for the `assign_ten` database, ensuring proper data storage and retrieval.
-  Framework-based discovery allowing clients to filter AI models by their associated framework for targeted browsing.
- Purchase Tracking that tracks each AI model bought and increases the purchase count.
- REST API that allows Create, Read, Update, and Delete (CRUD) operations for AI models.








=>Project Structure:
-index.js — Express server with routes and MongoDB setup.
-package.json — Project metadata, dependencies, and scripts.






=> star:
1.Clone the repo and install dependencies with npm install.
2.Create a .env file and add PORT, DB_USER, and DB_PASS for MongoDB.
3.Run the server with npm start and access the API at http://localhost:3000 (or your custom port).

