var gulp = require('gulp'),
    sass = require('gulp-sass'),
    broS = require('browser-sync');

gulp.task('browser-sync', function() {
  broS({
    server:{
      baseDir: 'css_4e/02'
    }
  });
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('css_4e/**/*.html', broS.reload);
  gulp.watch('css_4e/**/*.css', broS.reload);
});
