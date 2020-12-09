FROM bitnami/node:14 AS build
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .
RUN yarn build


FROM bitnami/nginx:1.19 AS prod
WORKDIR /app

COPY --from=build /app/dist .
COPY ./nginx/vuejs.conf /opt/bitnami/nginx/conf/server_blocks/nginx.conf