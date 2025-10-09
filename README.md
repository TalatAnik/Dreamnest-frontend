# DreamNest Frontend (Mock Phase)

This is the mock frontend implementation for DreamNest. It uses React React (Vite) + Tailwind CSS and serves as a UI prototype. All data & interactions are presently static or simulated.

## Stack
- React 18 + Vite
- React Router
- Tailwind CSS
- ESLint + Prettier

## Scripts
- dev: Start dev server
- build: Production build
- preview: Preview production
- lint: Run ESLint
- format: Prettier format

## Getting Started
```powershell
npm install
npm run dev
```
Then open http://localhost:5173

## Project Structure (early)
```
src/
  components/      # Reusable pieces (NavBar, Footer, etc.)
  pages/           # Route pages
  layout/          # Layout wrappers
  data/            # (future) mock JSON
  context/         # (future) React Context providers
  hooks/           # (future) custom hooks
  styles/          # Tailwind entry & global styles
```

## Environment Variables
Copy `.env.example` to `.env` when backend integration starts.

## Notes
- Dark mode planned Phase 8.
- Mock data & context layer will be added in Phase 5.

Refer to `docs/frontend_dev_plan.md` for full roadmap.
