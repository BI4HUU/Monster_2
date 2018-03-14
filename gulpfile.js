var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var livereload = require('gulp-livereload');
 
gulp.task('pug', function buildHTML() {
  return gulp.src('Source/*.pug')
  .pipe(pug())
    .pipe(gulp.dest('Build'))
    .pipe(livereload())
});
gulp.task('styl', function () {
  return gulp.src('Source/*.styl')
    .pipe(stylus({
      // compress: true
    }))
    .pipe(gulp.dest('Build'));
});
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('Source/*.pug', ['pug']);
  gulp.watch('Source/*.styl', ['styl']);
});
gulp.task('default', ['watch', 'pug', 'styl']);