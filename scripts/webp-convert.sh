#!/bin/bash 

path="./cypress/screenshots/vuero.ts/"
output="./public/screenshoots/"
 
for d in $path*; do
  filepath=$d
  filename=${filepath/$path/}
  filename=${filename/".png"/}

  echo "$filepath"; 
  echo "$filename"; 
  cwebp -q 80 -resize 364 204 $filepath -o "./public/screenshoots/$filename.webp"
done