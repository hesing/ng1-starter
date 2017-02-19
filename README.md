# Gulp build with Angular JS

## Install 

```
npm i browser-sync del gulp-autoprefixer gulp-concat gulp-htmlclean gulp-imagemin gulp-jshint gulp-newer gulp-ng-annotate gulp-notify gulp-preprocess gulp-rename gulp-sass gulp-size gulp-sourcemaps gulp-strip-debug gulp-uglify gulp-uncss jshint -D
```

Modular gulp build each task in it's own fles, Modular Angular App

- clean build directory
- concatenation js & css
- copy extra stuff like fonts, images, favicon.ico to build directory
- css minification
- js minification
- image minification
- js code linting 
- watching js, css, html, sass file changes
- code versioning
- Angular JS code annotation

## Setup

```
// Install dev dependencies
npm i browser-sync del gulp-sourcemaps gulp-newer gulp-jshint gulp-uglify gulp-concat gulp-strip-debug gulp-ng-annotate gulp-notify gulp-size gulp-sass gulp-uncss gulp-rename gulp-preprocess gulp-htmlclean gulp-newer gulp-imagemin gulp-autoprefixer -D

// Install prod dependencies
npm i bootstrap
```


## Run Application

```
gulp or npm run dev
// http://localhost:3000
```

## How to use

- all html changes inside `components/` corresponding folder
- all js in `components/`
- all 3rd party module in `vendor` folder
- all common css inside `css` folder
- all component specific css inside corresponding `components/` folder 

## Build Step

```
npm run build ( production )
```

## Run generator

```
npm run apt -- --name mydemo
gulp apt --name mydemo
```






