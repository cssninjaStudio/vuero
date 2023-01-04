FROM bitnami/node:18 AS build
WORKDIR /app

ARG VITE_API_BASE_URL
ARG VITE_MAPBOX_ACCESS_TOKEN
ARG GTM_ID

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY .npmrc ./
RUN CYPRESS_INSTALL_BINARY=0 pnpm install

COPY . .
RUN VITE_API_BASE_URL=$VITE_API_BASE_URL \
  VITE_MAPBOX_ACCESS_TOKEN=$VITE_MAPBOX_ACCESS_TOKEN \
  GTM_ID=$GTM_ID \
  NODE_OPTIONS=--max-old-space-size=4096 \
  pnpm ssr:build

FROM bitnami/node:18 AS prod
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=build /app .

EXPOSE 3000 8080

CMD ["pnpm", "ssr:serve"]