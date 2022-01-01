#!/usr/bin/bash 

set -e 

yarn build 

cd dist

git init
git add -A
git commit -m "New site deploy"
git push -f git@github.com:jaolejnik/personal-site.git master:gh-pages

cd -
