FROM bitnami/node:14 AS build
WORKDIR /app

COPY package.json ./
COPY scripts/skip.js ./scripts/skip.js
RUN HUSKY=0 CYPRESS_INSTALL_BINARY=0 npm install --unsafe-perm=true

COPY . .
RUN npm run build


FROM bitnami/nginx:1.19 AS prod
WORKDIR /app

COPY --from=build /app/dist .
COPY ./nginx/vuejs.conf /opt/bitnami/nginx/conf/server_blocks/nginx.conf