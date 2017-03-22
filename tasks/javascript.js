import {gulp, src, dest} from 'gulp'
import paths from '../config'

import babel from 'gulp-babel'
import plumber from 'gulp-plumber'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import concat from 'gulp-concat'

import tsc from 'gulp-typescript'

export const devJs = () => src(paths.scripts.readPaths)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(babel({presets: ['es2015']}))
  // .pipe(uglify())
  .pipe(concat('main.js'))
  // .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write('./'))
  .pipe(dest(`${paths.out}/${paths.scripts.out}/`))


export const devTs = () => src(paths.scripts.readPaths)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(tsc({
    target: 'ES3',
    module: 'umd'
  }))
  .pipe(concat('index.js'))
  .pipe(sourcemaps.write('./'))
  .pipe(dest(`${paths.out}/${paths.scripts.out}`))