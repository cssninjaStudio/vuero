FROM bitnami/node:16 AS build
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

ARG VITE_API_BASE_URL
ARG VITE_MAPBOX_ACCESS_TOKEN*
ARG MINIFY
ARG GTM_ID

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY .npmrc ./
RUN CYPRESS_INSTALL_BINARY=0 pnpm install

COPY . .
RUN VITE_API_BASE_URL=$VITE_API_BASE_URL \
  VITE_MAPBOX_ACCESS_TOKEN=$VITE_MAPBOX_ACCESS_TOKEN \
  MINIFY=$MINIFY \
  GTM_ID=$GTM_ID \
  pnpm build

FROM bitnami/node:16-prod AS prod
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=build /app .

EXPOSE 5000 8080

CMD ["pnpm", "preview"]