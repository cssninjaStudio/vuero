FROM bitnami/node:16 AS build
WORKDIR /app

ARG SITEMAP_HOST
ARG VITE_API_BASE_URL
ARG VITE_MAPBOX_ACCESS_TOKEN

COPY package.json ./
COPY yarn.lock ./
RUN CYPRESS_INSTALL_BINARY=0 yarn --frozen-lockfile

COPY . .
RUN SITEMAP_HOST=$SITEMAP_HOST \
  VITE_API_BASE_URL=$VITE_API_BASE_URL \
  VITE_MAPBOX_ACCESS_TOKEN=$VITE_MAPBOX_ACCESS_TOKEN \
  SILENT=1 \
  yarn run build

FROM bitnami/node:16-prod AS prod
WORKDIR /app

COPY --from=build /app .

EXPOSE 5000 8080

CMD ["yarn", "preview"]