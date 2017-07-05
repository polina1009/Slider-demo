var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync');


gulp.task('sass', function () {
    return gulp.src('app/style/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/style'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('app/style/**/*.sass', ['sass']);
    gulp.watch('app/*.html');
});
