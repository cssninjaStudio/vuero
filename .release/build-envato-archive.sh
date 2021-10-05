#!/bin/bash

DIRECTORY=`dirname $0`
PROJECT=$1
TAG=$2

if [ -z $PROJECT ] 
then
  echo "<project> missing"
  echo "Usage: ${0} <project> <tag>"
  exit 1
fi

if [ -z $TAG ] 
then
  echo "<tag> missing"
  echo "Usage: ${0} <project> <tag>"
  exit 1
fi

set -xe

# enable "rollupOptions.external" in vite.config.ts
sed -i "s#/// ##g" ./vite.config.ts

## remove demo assets
rm -rf public/demo

## build without artifacts
yarn build

# zip sources template-${PROJECT}-${TAG}.zip
zip -r .release/template-${PROJECT}-${TAG}.zip . \
  -x "*.zip" \
  -x "node_modules/*" \
  -x ".release/*" \
  -x ".scannerwork/*" \
  -x ".git/*" \
  -x ".github/*" \
  -x "pages-quickstart/*" \
  -x "layouts-quickstart/*" \
  -x "cypress/screenshots/*" \
  -x "sonar-project.properties" \
  -x "docker-compose.sonarqube.yml"\
  -x "docker-compose.yml"

$DIRECTORY/build-quickstarter.sh $PROJECT $TAG

# top level zip release-${PROJECT}-${TAG}.zip 
zip -j .release/release-${PROJECT}-${TAG}.zip \
  .release/template-${PROJECT}-${TAG}.zip \
  .release/quickstarter-${PROJECT}-${TAG}.zip

# remove build artifacts
rm -rf \
  .release/template-${PROJECT}-${TAG}.zip \
  .release/quickstarter-${PROJECT}-${TAG}.zip

# reset index
git checkout \
  src \
  public \
  vite.config.ts

git clean -fd src