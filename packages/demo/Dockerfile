FROM bitnami/node:20 AS build
WORKDIR /app

ARG VITE_API_BASE_URL=""
ARG VITE_MAPBOX_ACCESS_TOKEN=""

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install

COPY . .
RUN VITE_API_BASE_URL=$VITE_API_BASE_URL \
  VITE_MAPBOX_ACCESS_TOKEN=$VITE_MAPBOX_ACCESS_TOKEN \
  NODE_OPTIONS=--max-old-space-size=6144 \
  pnpm ssr:build

FROM bitnami/node:20 AS prod
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=build /app/dist ./dist
COPY --from=build /app/json-server ./json-server
COPY --from=build /app/server ./server
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 3000 8080

CMD ["pnpm", "ssr:serve"]