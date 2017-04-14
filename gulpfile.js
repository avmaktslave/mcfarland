var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: 'css_4e/11/form'
    }
  });
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('css_4e/**/*.html', browserSync.reload);
  gulp.watch('css_4e/**/*.css', browserSync.reload);
});
