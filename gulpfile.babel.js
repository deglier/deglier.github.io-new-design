'use-strict'

import gulp from 'gulp'
import babel from 'gulp-babel'
import tsc from 'gulp-typescript'
import concat from 'gulp-concat'
import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import sourcemap from 'gulp-sourcemaps'
import sass from 'gulp-sass'
import cssmin from 'gulp-cssmin'
import prefix from 'gulp-autoprefixer'

gulp.task('copyHtml', () =>{
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('tsc', () => {
  return gulp.src('src/assets/js/**/*.ts')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(tsc({
      target: 'ES5',
      module: 'amd'
    }))
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest('dist/assets/js/'))
    .pipe(browserSync.reload({stream: true}))
})


gulp.task('sass', () => {
  return gulp.src('src/assets/sass/main.sass')
    .pipe(sourcemap.init())
    .pipe(sass({style: 'compress',includePaths: ['scss'],onError: browserSync.notify}))
    .pipe(prefix(['last 15 versions','> 1%','ie 8','ie 7'],{cascade: true}))
    .pipe(cssmin())
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest('dist/assets/css/'))
    .pipe(browserSync.reload({stream:true}));

});

// gulp.task('js', () => {
//   return gulp.src('src/assets/js/main.js')
//     .pipe(plumber())
//     .pipe(sourcemap.init())
//     .pipe(babel({
//       presets: ['es2015']
//     }))
//     .pipe(sourcemap.write())
//     .pipe(gulp.dest('dist/assets/js/'))
//     .pipe(browserSync.reload({stream: true}))
// })

gulp.task('server', () => {
  browserSync({
    server: {
      baseDir: './dist'
    }
  })
})

gulp.task('watch', () => {
  gulp.watch('src/**/*.html', ['copyHtml'])
  gulp.watch('src/assets/js/**/*.ts', ['tsc'])
  gulp.watch('src/assets/sass/**/*.{sass, scss, css}', ['sass'])
})

gulp.task('default', ['copyHtml', 'tsc', 'sass', 'server', 'watch'])