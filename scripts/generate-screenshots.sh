#!/bin/bash 

e2ehost="http://localhost:5000"

until $(curl --output /dev/null --silent --head --fail ${e2ehost}); do
  echo "Warning: ensure e2e server is runing on ${e2ehost}"
  echo " $ docker-compose -f docker-compose.e2e.yml up --build"
  echo "or"
  echo " $ pnpm build && pnpm preview"
  echo ""
  echo "(retrying in 5 seconds)"

  sleep 5
done

set -xe

DEBUG=cypress:server:util:process_profiler CYPRESS_SCREENSHOTS=true pnpm cypress run --e2e --browser chrome
npx jiti ./scripts/create-screenshot-data.ts
./scripts/convert-screenshot-webp.sh
