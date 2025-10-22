# Site-QHosp

Monorepo with `frontend/` (React + Vite) and `backend/` (Node.js + Express).

## Run locally

1. Install dependencies:

```bash
cd frontend && npm install
cd ../backend && npm install
```

2. Start servers (two terminals):

```bash
cd frontend && npm start
cd backend && npm run server
```

Or from project root (requires concurrently):

```bash
npm install --save-dev concurrently
npm run dev
```
