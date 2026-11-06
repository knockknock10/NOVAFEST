# E-commerce REST API

A separate API experiment built with Node.js, Express and MongoDB. It includes authentication, user and category routes, product management, cart and order endpoints, request validation, rate limiting, logging and Swagger documentation.

This API is **not connected to the NovaNest property-listing frontend** in this repository. See the root README for that distinction.

## What is implemented

- Account registration and login using JWT access and refresh tokens.
- User and admin roles.
- Product and category CRUD with filtering, sorting, pagination and text search.
- Persistent shopping cart and order routes.
- Express middleware for HTTP security headers, rate limiting, request parsing and error handling.
- Swagger UI generated from the API schema.

This is a learning project, not a production-readiness claim. The repository currently has no automated backend test suite, and the example deployment setup should not be used as-is for a public production service.

## Requirements

- Node.js 20 or newer.
- Docker with Compose, or MongoDB running locally.
- Two independent secrets for access-token and refresh-token signing.

## Run with Docker Compose

From this directory:

```sh
cp .env.example .env
```

Generate separate local secrets:

```sh
openssl rand -hex 32
openssl rand -hex 32
```

Put the first result in `JWT_SECRET` and the second in `JWT_REFRESH_SECRET` in `.env`. Do not commit `.env` or reuse either value outside local development.

Then run:

```sh
docker compose up --build
```

The API listens on port 5000. Swagger UI is at [http://localhost:5000/api-docs](http://localhost:5000/api-docs).

## Run the API without Docker

Start MongoDB locally, set `MONGO_URI` in `.env` to `mongodb://127.0.0.1:27017/ecommerce`, then run:

```sh
npm install
npm run dev
```

## Configuration

See `.env.example` for the variables used by the server and Compose configuration. Compose uses the service hostname `mongo` for its database connection; a locally started Node process uses `127.0.0.1`.

## Main API routes

- `POST /api/v1/auth/register` — register an account.
- `POST /api/v1/auth/login` — log in.
- `GET /api/v1/products` — list products, with filtering and pagination.
- `GET /api/v1/cart` — read the current cart.
- `POST /api/v1/orders` — create an order.

The complete request and response schemas are available in Swagger UI.

## Before treating this as production software

The next engineering work should include automated tests for authentication, authorization, cart totals and order transitions; stricter environment validation; a deployment-specific CORS allowlist; and an operational review of token rotation, logging and database migrations. Those are not claimed as completed here.
