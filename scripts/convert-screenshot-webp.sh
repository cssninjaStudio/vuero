#!/bin/bash 

if ! command -v cwebp &> /dev/null
then
  echo "cwebp could not be found, you may want to install it with 'sudo apt install webp'"
  exit
fi

base="./"
path="${base}cypress/screenshots/"
output="${base}public/images/screenshots/"

quality=100
width=736
height=412

for layout in sidebar auth minimal navbar starters; do
  echo "${layout}"

  rm -rf "${output}${layout}/"
  mkdir -p "${output}${layout}/"
    
  for d in ${path}${layout}.cy.ts/${layout}/*; do
    src=$d
    filename=${src/$path${layout}.cy.ts/}
    filename=${filename/".png"/}

    echo "$src"; 
    echo "$filename"; 
    cwebp -short -q $quality -resize $width $height $src -o "${output}${filename}.webp"
  done
done 