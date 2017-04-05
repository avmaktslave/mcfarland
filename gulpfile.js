var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
    server:{
      baseDir: 'css_4e/app'
    }
  });
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('css_4e/**/*.html', browserSync.reload);
  gulp.watch('css_4e/**/*.css', browserSync.reload);
});
