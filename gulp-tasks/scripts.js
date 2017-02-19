var config = require('./config');
var newer = require('gulp-newer');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var stripdebug = require('gulp-strip-debug');
var ngAnnotate = require('gulp-ng-annotate');
var getFilesList = require('./getFilesList');
var notify = require('gulp-notify');
var del = require('del');
var size = require('gulp-size');
var componentsJS = require('./componentsJS');

module.exports = function(gulp) {

    gulp.task('scripts', ['componentsJS'], function () {
    });

};
