#!/bin/bash

DIRECTORY=`dirname $0`
INPUT_PROJECT=$1
INPUT_TAG=$2

if [ -z $INPUT_PROJECT ] 
then
  echo "<project> missing"
  echo "Usage: ${0} <project> <tag>"
  exit 1
fi

if [ -z $INPUT_TAG ] 
then
  echo "<tag> missing"
  echo "Usage: ${0} <project> <tag>"
  exit 1
fi

ARCHIVE=release-${INPUT_PROJECT}-${INPUT_TAG}.zip

echo "::group::building ${ARCHIVE}"
echo "::debug::${ARCHIVE}"

# # enable "rollupOptions.external" in vite.config.ts
# sed -i "s#/// ##g" ./vite.config.ts

# ## remove demo assets
# rm -rf public/demo

# ## build without artifacts
# yarn build

# top level zip release-${INPUT_PROJECT}-${INPUT_TAG}.zip 
zip -r $ARCHIVE . \
  -x "public/demo/*" \
  -x "*.zip" \
  -x "node_modules/*" \
  -x ".git/*" \
  -x ".github/*" \
  -x "pages-quickstart/*" \
  -x "layouts-quickstart/*" \
  -x "cypress/downloads/*" \
  -x "cypress/screenshots/*" \
  -x "cypress/videos/*" \
  -x "docker-compose.yml"

# # reset index
git checkout \
  src \
  public \
  vite.config.ts

git clean -fd src

echo "$PWD"
echo "$DIRECTORY"
echo "$GITHUB_WORKSPACE"

ls -lh $ARCHIVE

echo "::endgroup::"

echo "- ${INPUT_PROJECT^} ${INPUT_TAG} template built :rocket:" >> $GITHUB_STEP_SUMMARY

echo "::set-output name=filepath::${ARCHIVE}"