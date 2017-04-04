var gulp = require('gulp');

gulp.task('default', function() {
    gulp.src('./*.js')
        .pipe(gulp.dest('dist'));
});
