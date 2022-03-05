#!/bin/bash 

e2ehost="http://localhost:5000"

until $(curl --output /dev/null --silent --head --fail ${e2ehost}); do
  echo "Warning: ensure e2e server is runing on ${e2ehost}"
  echo " $ docker-compose -f docker-compose.e2e.yml up --build"
  echo ""
  echo "(retrying in 5 seconds)"

  sleep 5
done

set -xe

yarn cypress run
node  -r jiti/register ./scripts/create-screenshot-data.ts
./scripts/convert-screenshot-webp.sh
