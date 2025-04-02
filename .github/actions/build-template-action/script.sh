#!/bin/bash

DIRECTORY=`dirname $0`
INPUT_PROJECT=$1
INPUT_TAG=$2
INPUT_PACKAGE=$3

if [ -z $INPUT_PROJECT ] 
then
  echo "<project> missing"
  echo "Usage: ${0} <project> <tag> <package>"
  exit 1
fi

if [ -z $INPUT_TAG ] 
then
  echo "<tag> missing"
  echo "Usage: ${0} <project> <tag> <package>"
  exit 1
fi

if [ -z $INPUT_PACKAGE ] 
then
  echo "<package> missing"
  echo "Usage: ${0} <project> <tag> <package>"
  exit 1
fi

CWD=`pwd`
DOCUMENTATION_PATH=./documentation
PACKAGE_PATH=./packages/${INPUT_PACKAGE}
ARCHIVE=${INPUT_PROJECT}-${INPUT_PACKAGE}-${INPUT_TAG}.zip
ARCHIVE_PATH=$CWD/$ARCHIVE

if [ ! -d $PACKAGE_PATH ]
then
  echo "Package ${PACKAGE_PATH} not found"
  exit 1
fi

echo "::group::building ${ARCHIVE}"
echo "::debug::${ARCHIVE}"

# top level zip release-${INPUT_PROJECT}-${INPUT_TAG}.zip 
cd $PACKAGE_PATH
zip -r $ARCHIVE_PATH . \
  -x "*.zip" \
  -x "node_modules/*" \
  -x "dist/*" \
  -x "dist-electron/*" \
  -x "release/*" \
  -x ".output/*" 

# add /documentation to the zip
cd $CWD
if [ -d $DOCUMENTATION_PATH ]; then
  zip -r $ARCHIVE_PATH $DOCUMENTATION_PATH
fi

# human readable size
ARCHIVE_SIZE=$(du -h $ARCHIVE_PATH | cut -f1)

echo "$PWD"
echo "$DIRECTORY"
echo "$GITHUB_WORKSPACE"

ls -lh $ARCHIVE_PATH

echo "::endgroup::"

echo "${ARCHIVE} built (${ARCHIVE_SIZE})" >> $GITHUB_STEP_SUMMARY

# echo "::set-output name=filepath::${ARCHIVE_PATH}"
echo "filepath=${ARCHIVE_PATH}" >> "$GITHUB_OUTPUT"