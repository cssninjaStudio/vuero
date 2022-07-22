FROM bitnami/node:16 AS build
WORKDIR /app

ARG VITE_API_BASE_URL
ARG VITE_MAPBOX_ACCESS_TOKEN*
ARG MINIFY
ARG GTM_ID

COPY package.json ./
COPY yarn.lock ./
RUN CYPRESS_INSTALL_BINARY=0 yarn --frozen-lockfile

COPY . .
RUN VITE_API_BASE_URL=$VITE_API_BASE_URL \
  VITE_MAPBOX_ACCESS_TOKEN=$VITE_MAPBOX_ACCESS_TOKEN \
  MINIFY=$MINIFY \
  GTM_ID=$GTM_ID \
  SILENT=1 \
  yarn run build

FROM bitnami/node:16-prod AS prod
WORKDIR /app

COPY --from=build /app .

EXPOSE 5000 8080

CMD ["yarn", "preview"]