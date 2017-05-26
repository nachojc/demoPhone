(function() {
    'use strict';
    const gulp = require('gulp');


    gulp.task('copy', ['clean'], function() {
        return gulp.src([
                // './src/**/*.{htm,html}',
                // './src/**/*.js',
                // './src/**/*.css',
                './src/**/*.{jpg,gif,png}',
                './src/manifest.json'
            ])
            .pipe(gulp.dest('./www', { overwrite: true }));
    });

    gulp.task('copy:libs', function(cb) {
        cb();
    });


}());