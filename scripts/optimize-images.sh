#!/bin/zsh

# required: https://virtubox.github.io/img-optimize/
find src/assets -type d -exec img-optimize --jpg --png {} +

# required: npm install -g svgo
for x in src/assets/**/*.svg; do svgo "$x"; done