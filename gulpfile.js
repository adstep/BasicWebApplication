var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    config = require('./gulp.config'),
    browserSync = require('browser-sync'),
    superstatic = require('superstatic'),
    config = require('./gulp.config')();


gulp.task('ts-lint', function() {
    return gulp.src([config.allTs])
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }));
});

gulp.task('compile-ts', function() {
    var sourceTsFiles = [
        config.allTs,
        config.typings
    ];

    var tsResult = gulp
        .src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc({ sortOutput: true }));

    return tsResult.js
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./wwwroot/app'));
});

gulp.task('serve', ['ts-lint', 'compile-ts'], function() {
    gulp.watch([config.allTs, config.view, config.css], ['ts-lint', 'compile-ts']);

    browserSync({
        port: 3000,
        files: ['index.html', '**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: './wwwroot/',
            middleware: superstatic({ debug: false })
        }
    });
});

gulp.task('default', ['serve']);