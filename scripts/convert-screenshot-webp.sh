#!/bin/bash 

base="./"
path="${base}cypress/screenshots/vuero.ts/"
output="${base}public/images/screenshots/"

quality=100
width=364
height=204

for layout in admin auth minimal webapp; do
  # do something like: echo $databaseName
  echo "${layout}"

  rm -f "${output}${layout}/"
  mkdir -p "${output}${layout}/"
    
  for d in ${path}${layout}/*; do
    src=$d
    filename=${src/$path/}
    filename=${filename/".png"/}

    echo "$src"; 
    echo "$filename"; 
    cwebp -q $quality -resize $width $height $src -o "${output}${filename}.webp"
  done
done 