FROM bitnami/node:20 AS build
WORKDIR /app

ARG VITE_API_BASE_URL=""
ARG VITE_MAPBOX_ACCESS_TOKEN=""

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json ./
RUN pnpm install --no-lockfile

COPY . .
RUN VITE_API_BASE_URL=$VITE_API_BASE_URL \
  VITE_MAPBOX_ACCESS_TOKEN=$VITE_MAPBOX_ACCESS_TOKEN \
  NODE_OPTIONS=--max-old-space-size=6144 \
  pnpm ssr:build

FROM bitnami/node:20 AS prod
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json ./
RUN pnpm install --no-lockfile --prod

COPY --from=build /app/dist ./dist
COPY --from=build /app/json-server ./json-server
COPY --from=build /app/server ./server

EXPOSE 3000 8080

ENV NODE_ENV=production

CMD ["pnpm", "ssr:start"]