# Angular Independent Boilerplate

This is a angular boilerplate independent from bower, gulp, grunt, etc.

It only uses npm to handle package management and build tasks.

## Features

1. ESLINT
1. Karma Unit Testing
1. Uglify and concat libs and application
1. Template cache
1. SASS Preprocessor
1. Imagemin
1. Browserify
1. Browsersync

## tasks


1. `start` Start watchers and test
1. `test` Start karma testing units
1. `css:watch` Watches css for changes
1. `css:build` Builds your SASS files
1. `js:build:app` Builds your application files
1. `js:lint:app` Lints your application files
1. `js:build:libs` Builds your libs.js file using browserify
1. `js:watch:app` Watches your application files
1. `js:watch:libs` Watches your libs.js file
1. `js:watch Watches` both libs and app files
1. `angular:watch` Watches your angular template files
1. `angular:build` Builds your angular template files
1. `browser:sync` It opens a server with browsersync
1. `img:watch` It watches your image files
1. `img:build` It minifies your image files
1. `watch Run` all watch tasks
