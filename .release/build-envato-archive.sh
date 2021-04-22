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

cp .release/documentation.pdf .

# zip sources template-${PROJECT}-${TAG}.zip
zip -r template-${PROJECT}-${TAG}.zip . \
  -x "*.zip" \
  -x "node_modules/*" \
  -x ".release/*" \
  -x ".git/*" \
  -x ".github/*" \
  -x "cypress/screenshots/*" \
  -x "public/demo/*" \
  -x "dist/demo/*" \
  -x "docker-compose.yml"

# zip preview ${PROJECT}-preview.zip
zip -j ${PROJECT}-preview.zip \
  .release/${PROJECT}-preview.png

# top level zip release-${PROJECT}-${TAG}.zip 
zip -j release-${PROJECT}-${TAG}.zip \
  template-${PROJECT}-${TAG}.zip \
  ${PROJECT}-preview.zip \
  .release/${PROJECT}-thumb.png
