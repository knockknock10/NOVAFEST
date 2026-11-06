# NovaFest

NovaFest is the repository name for two related-looking prototypes that are not integrated into one working full-stack application yet.

The deployed site is the **NovaNest property-listing frontend**: [open the live UI](https://novanest-1.netlify.app/). It shows a real-estate landing page and featured property cards backed by local mock data. The sign-in / sign-up screen is a frontend demonstration; it currently uses a timed client-side transition and does not authenticate against the API.

The separate **e-commerce backend** is an Express and MongoDB REST API with account, product, category, cart and order routes, plus Swagger documentation. The property-listing UI does not currently consume this API. The frontend API client still has a local e-commerce API base URL, but the displayed auth flow is not wired to it.

I keep both experiments here because they are useful pieces of work, but they should be evaluated separately rather than described as one completed e-commerce product.

## Repository layout

```text
ecommerce-frontend/   React + Vite property-listing UI (NovaNest)
ecommerce-backend/    Express + MongoDB e-commerce REST API
screenshot/           Screenshots and related assets
```

## Run the frontend

Requirements: Node.js 20+ and npm.

```sh
cd ecommerce-frontend
npm install
npm run dev
```

Vite prints the local URL after startup. Create a production bundle with `npm run build`.

## Run the backend

Requirements: Node.js 20+, Docker with Compose, or a local MongoDB instance.

```sh
cd ecommerce-backend
cp .env.example .env
```

Replace the two JWT values in `.env` with separate random secrets:

```sh
openssl rand -hex 32
openssl rand -hex 32
```

Then start the API and MongoDB:

```sh
docker compose up --build
```

Swagger UI is available at `http://localhost:5000/api-docs`.

For a local Node process without Docker, set `MONGO_URI=mongodb://127.0.0.1:27017/ecommerce` in the backend `.env` and make sure MongoDB is running locally.

## Current limitations

- The frontend property cards use mock data; they are not loaded from the e-commerce API.
- The frontend authentication screen is a mock interaction, not a working account flow.
- The backend is a separate e-commerce API experiment and is not connected to the property-listing UI.
- The backend package does not currently include an automated test suite.
- The deployed URL points to the frontend UI, not to a deployed backend API.

These boundaries are intentional to document clearly. I would rather show what is working and what is still separate than imply the integration is finished.
