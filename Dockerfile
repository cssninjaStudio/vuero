FROM bitnami/node:14 AS build
WORKDIR /app

RUN npm install --global pnpm

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY scripts/skip.js ./scripts/skip.js
RUN HUSKY=0 CYPRESS_INSTALL_BINARY=0 pnpm install

COPY . .
RUN pnpm run build


FROM bitnami/nginx:1.19 AS prod
WORKDIR /app

COPY --from=build /app/dist .
COPY ./nginx/vuejs.conf /opt/bitnami/nginx/conf/server_blocks/nginx.conf