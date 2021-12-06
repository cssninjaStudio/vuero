FROM bitnami/node:14 AS build
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN CYPRESS_INSTALL_BINARY=0 yarn --frozen-lockfile

COPY . .
RUN SILENT=1 yarn run build

FROM bitnami/node:14-prod AS prod
WORKDIR /app

COPY --from=build /app .

EXPOSE 5000 8080

CMD ["yarn", "preview"]