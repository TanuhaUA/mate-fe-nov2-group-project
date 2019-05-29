var gulp        = require('gulp'),
    scss        = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('scss', async () => {
    return gulp.src('src/scss/style.scss')
        .pipe(scss())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', async () => {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
});

gulp.task('html', async () => {
    return gulp.src('src/index.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('scss-watch', async () => {
    gulp.watch('src/scss/*.scss', gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('scss', 'browser-sync', 'html', 'scss-watch'));