const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const webserver = require('gulp-webserver');
const less = require('gulp-less');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const historyFallback = require('connect-history-api-fallback');

gulp.task('build', () => {
  return browserify({
    entries: './index.js',
  })
    .transform('babelify', {
      presets: ['env', 'react'],
    })
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('compile-less', function() {
  gulp.src('./style.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch-less', function() {
  gulp.watch('./style.less' , ['compile-less']);
});

gulp.task('watch', ['build', 'watch-less'], () => {
  gulp.watch('./index.js', ['build']);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 3030,
      middleware: [
        historyFallback()
      ]
    }));
});