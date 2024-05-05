FROM bitnami/node:20 AS build
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json ./
# /!\ note: use your own package manager,
# and remove the `--no-lockfile` flag (don't forget to create lockfile)
RUN pnpm install --no-lockfile

COPY . .
RUN pnpm build

FROM bitnami/node:20 AS prod
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json ./
# /!\ note: use your own package manager,
# and remove the `--no-lockfile` flag (don't forget to create lockfile)
RUN pnpm install --no-lockfile --prod

COPY --from=build /app/dist ./dist
COPY --from=build /app/server ./server

EXPOSE 3000

ENV NODE_ENV=production

CMD ["pnpm", "start"]