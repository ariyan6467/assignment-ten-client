# AI Manage Inventory (React + Vite)

A concise overview of the AI Manage Inventory client built with React and Vite. The app focuses on browsing and tracking AI models, managing purchases, and surfacing curated content with a modern, responsive UI.

## Live Demo and Assets
- Netlify Live Link : [url - "https://friendly-manatee-1cb052.netlify.app/"]
- Live site: https://friendly-manatee-1cb052.netlify.app/
- Preview screenshot:
 <img width="1920" height="1080" alt="Screenshot 2025-11-19 062342" src="https://github.com/user-attachments/assets/c89a624b-3bb7-48ff-a031-7525a2ec6f59" />


## Core Technologies
- **Vite** for lightning-fast dev/build tooling with HMR.
- **React 19** for the component-driven UI.
- **React Router 7** for client-side routing.
- **Tailwind CSS 4** (with DaisyUI) for utility-first styling.
- **Styled Components** for scoped, themeable styles where needed.
- **Firebase** for authentication and backend integrations.
- **Framer Motion** for motion and interaction polish.

## Key Features
- Browse AI models with framework-based filtering and rich detail views.
- Track purchases and increment model purchase counts.
- Full CRUD flows for managing AI model entries.
- Responsive layout with animated UI states and iconography via `lucide-react`/`react-icons`.
- Client-side routing for dashboard-style navigation.
- Alerts and confirmations with SweetAlert2.

## Dependencies
Runtime dependencies (see `package.json` for full list and versions):
- `react`, `react-dom`
- `react-router`, `react-router-dom`
- `tailwindcss`, `@tailwindcss/vite`, `daisyui`
- `styled-components`
- `firebase`
- `framer-motion`
- `lucide-react`, `react-icons`
- `sweetalert2`

Dev tooling:
- `vite`
- `eslint` with React hooks/refresh plugins
- TypeScript-ready typings for React/DOM

## Getting Started (Local)
1. **Install dependencies**: `npm install`
2. **Start the dev server**: `npm run dev`
   - If you need a specific port or LAN access: `npm run dev -- --host --port 4173`
3. **Open the app**: Visit the URL printed by Vite (default `http://localhost:5173`).
4. **Build for production**: `npm run build`
5. **Preview the build**: `npm run preview`

## Links and References
- Backend/service overview and API structure are described in the previous server docs (e.g., `index.js`, `.env` usage for `PORT`, `DB_USER`, `DB_PASS`).
- Vite + React guide: https://vitejs.dev/guide/
- React documentation: https://react.dev/
