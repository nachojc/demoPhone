(function() {
    'use strict';
    const gulp = require('gulp');
    const rimraf = require('rimraf');

    gulp.task('clean', function(cb) {
        rimraf('./www', cb);
    });
}());