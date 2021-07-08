#!/bin/bash

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

cp .release/documentation/index.html ./documentation/index.html

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
  -x ".git/*" \
  -x ".github/*" \
  -x "cypress/screenshots/*" \
  -x "sonar-project.properties" \
  -x "docker-compose.sonarqube.yml"\
  -x "docker-compose.yml"

# zip preview ${PROJECT}-preview.zip
zip -j .release/${PROJECT}-preview.zip \
  .release/${PROJECT}-preview.png

# top level zip release-${PROJECT}-${TAG}.zip 
zip -j .release/release-${PROJECT}-${TAG}.zip \
  .release/template-${PROJECT}-${TAG}.zip \
  .release/${PROJECT}-preview.zip \
  .release/${PROJECT}-thumb.png \

# remove artifacts 
rm -rf ./documentation/index.html

# reset index
git checkout public/demo vite.config.ts