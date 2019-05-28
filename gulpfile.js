var gulp        = require('gulp'),
    scss        = require('gulp-sass'),
    pug         = require('gulp-pug'),
    browserSync = require('browser-sync');

gulp.task('scss', async () => {
    return gulp.src('src/scss/style.scss')
        .pipe(scss())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('pug', async () => {
    return gulp.src('src/pug/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('src'))
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

gulp.task('scss-watch', async () => {
    gulp.watch('src/scss/*.scss', gulp.parallel('scss'));
});

gulp.task('pug-watch', async () => {
    gulp.watch('src/pug/*.pug', gulp.parallel('pug'));
});

gulp.task('default', gulp.parallel('scss', 'pug', 'browser-sync', 'scss-watch', 'pug-watch'));