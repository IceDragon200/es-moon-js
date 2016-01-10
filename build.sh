#!/usr/bin/env bash
owd=$(pwd)
tsc && (
cd $owd/build/js &&
browserify ./application.js -o "${owd}/public/js/application.js"
)
