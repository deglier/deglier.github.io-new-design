import {gulp, src, dest} from 'gulp'
import paths from '../config'

import babel from 'gulp-babel'
import plumber from 'gulp-plumber'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import concat from 'gulp-concat'

import duo from 'gulp-duo'
import duoBabel from 'duo-babel'

export const devJs = () => src(paths.scripts.readPaths)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(babel({presets: ['es2015']}))
  // .pipe(uglify())
  .pipe(concat())
  .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write('./'))
  .pipe(dest(`${paths.out}/${paths.scripts.out}/`))


export const duoJs = () => src(paths.scripts.readPaths)
  .pipe(plumber())
  .pipe(duo({
    plugins: [
      duoBabel()
    ]
  }))
  .pipe(rename('main.js'))
  .pipe(gulp.dest(`${paths.out}/${paths.scripts.out}/`))