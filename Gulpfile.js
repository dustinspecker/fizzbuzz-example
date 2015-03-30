'use strict';
var gulp = require('gulp')
  , eslint = require('gulp-eslint')
  , istanbul = require('gulp-istanbul')
  , jscs = require('gulp-jscs')
  , jshint = require('gulp-jshint')
  , mocha = require ('gulp-mocha')

  , srcFiles = 'lib/*.js'
  , testFiles = 'test/*.js';

gulp.task('lint', function () {
  return gulp.src([srcFiles, testFiles])
    .pipe(eslint())
    .pipe(eslint.formatEach('./node_modules/eslint-path-formatter'))
    .pipe(eslint.failOnError())
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test', ['lint'], function (cb) {
  gulp.src([srcFiles, '!' + testFiles])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      gulp.src([testFiles])
        .pipe(mocha())
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});
