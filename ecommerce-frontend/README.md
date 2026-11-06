# NovaNest frontend

The React + Vite frontend in this repository is a property-listing UI. It renders featured homes from local mock data and is deployed at [novanest-1.netlify.app](https://novanest-1.netlify.app/).

The current login and registration page is a visual prototype: submitting a valid-looking form waits briefly and returns to the home page. It does not create an account or call the e-commerce API in the sibling backend directory.

## Run locally

Requirements: Node.js 20+ and npm.

```sh
npm install
npm run dev
```

Create a production bundle with:

```sh
npm run build
npm run preview
```

## Structure

- `src/components/sections/` — landing-page sections such as the hero, featured properties and locations.
- `src/data/properties.js` — mock property records used by the listings.
- `src/pages/` — home and demonstration authentication screens.
- `src/services/api.js` — an API client scaffold; it is not currently used by the mock authentication flow.

## Current scope

The listing cards use static sample records rather than persisted data. Authentication is not implemented. The separate e-commerce API in `../ecommerce-backend` models a different domain and is not connected to these property records.
