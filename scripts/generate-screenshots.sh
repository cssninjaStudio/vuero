#!/bin/bash 

e2ehost="http://localhost:8080"

until $(curl --output /dev/null --silent --head --fail ${e2ehost}); do
  echo "Warning: ensure e2e server is runing on ${e2ehost}"
  echo " $ docker-compose -f docker-compose.e2e.yml up --build"
  echo ""
  echo "(retrying in 5 seconds)"

  sleep 5
done

set -xe

npx tsc ./cypress/fixtures/routes.ts
npx tsc ./scripts/create-screenshot-data.ts

yarn e2e
node ./scripts/create-screenshot-data.js
./scripts/convert-screenshot-webp.sh

rm -f ./cypress/fixtures/routes.js
rm -f ./scripts/create-screenshot-data.js