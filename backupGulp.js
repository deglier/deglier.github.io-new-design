'use-strict'

import gulp from 'gulp'
import babel from 'gulp-babel'
import tsc from 'gulp-typescript'
import concat from 'gulp-concat'
import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import sourcemap from 'gulp-sourcemaps'
import fs from 'fs'
import sass from 'gulp-sass'
import clean from 'gulp-clean'
import cssmin from 'gulp-cssmin'
import prefix from 'gulp-autoprefixer'

// Definindo a origem dos pacotes a serem incluidos
const origin = {
  bower: 'bower_components',
  node: 'node_modules'
}

// Definindo a saida final
const dirOut = {
  dir: 'dist',
  assets: 'dist/assets'
}

// Definindo a entrada inicial
const dirIn = {
  dir: 'src',
  assets: 'dist/assets'
}


// Tarefa que apaga (caso já exista) a pasta 'dist': diretorio onde ficam todos os arquivos finalizados/compilados
gulp.task('clean-all', () => {
  console.log('Deletando a o diretório ./dist')
  return gulp.src(dirOut.dir, {read: false})
    .pipe(clean())
})

// Limpa a pasta js do diretorio final afim de evitar cacheamento entre o desenvolvimento
gulp.task('clean-js', () => {
  return gulp.src(`${dirOut.assets}/js`, {read: false})
    .pipe(clean())
})

// Limpa a pasta css do diretorio final afim de evitar cacheamento entre o desenvolvimento
gulp.task('clean-css', () => {
  return gulp.src(`${dirOut.assets}/css`, {read: false})
    .pipe(clean())
})

// Limpa a pasta fonts do diretorio final afim de evitar cacheamento entre o desenvolvimento
gulp.task('clean-fonts', () => {
  return gulp.src(`${dirOut.assets}/fonts`, {read: false})
    .pipe(clean())
})


// Copia todos os aquivos html para a dist
gulp.task('copyHtml', () =>{
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest(dirOut.dir))
    .pipe(browserSync.reload({stream: true}))
})

// copia as fontes indicadas com seus repesctivos diretorios advindos da npm/bower
gulp.task('copyFonts',['clean-fonts'], () => {

  let dirs = [
    `${origin}/font-awesome/fonts/*`
  ]

  return gulp.src(dirs)
    .pipe(gulp.dest(`${dirOut.assets}/fonts/`))
    .pipe(browserSync.reload({stream: true}))
})


gulp.task('tsc', ['clean-js'], () => {
  return gulp.src(`${dirOut.assets}/js/**/*.ts`)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(tsc({
      target: 'ES5',
      module: 'amd'
    }))
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest(`${dirOut.assets}/js`))
    .pipe(browserSync.reload({stream: true}))
})


gulp.task('sass', gulp.series('clean-css', () => {
  let entry = [
    `${origin.bower}/bulma/bulma.sass`,
    `${origin.bower}/font-awesome/scss/font-awesome.scss`,
    `${dirIn.dir}/sass/main.sass`
  ]
  return gulp.src(entry)
    .pipe(sourcemap.init())
    .pipe(sass({style: 'compress',includePaths: ['scss'],onError: browserSync.notify}))
    .pipe(prefix(['last 15 versions','> 1%','ie 8','ie 7'],{cascade: true}))
    .pipe(cssmin())
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest(`${dirOut.assets}/css`))
    .pipe(browserSync.reload({stream:true}));

}))

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

gulp.task('server', ['copyHtml', 'copyFonts', 'tsc', 'sass'], () => {
  browserSync({
    server: {
      baseDir: `${dirOut.dir}`
    }
  })
})

gulp.task('watch', () => {
  gulp.watch(`${dirIn.dir}/**/*.html`, ['copyHtml'])
  gulp.watch(`${dirIn.assets}/js/**/*.ts`, ['tsc'])
  gulp.watch(`${dirIn.assets}/sass/**/*.{sass, scss, css}`, ['sass'])
})

gulp.task('build', gulp.series('clean-all', 'copyFonts', 'tsc', 'sass', 'copyHtml'))

gulp.task('default', ['clean-all', 'server', 'watch'])