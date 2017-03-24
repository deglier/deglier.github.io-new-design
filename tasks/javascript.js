import {gulp, src, dest} from 'gulp'
import config from '../config'
import browserSync from 'browser-sync'

import plumber from 'gulp-plumber'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import concat from 'gulp-concat'

export const devJs = () => src(config.scripts.readPaths)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(uglify())
  // .pipe(concat('main.js'))
  // .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write('./'))
  .pipe(dest(`${config.out}/${config.scripts.out}/`))
  .pipe(browserSync.reload({stream: true}))

export const copyRequirejs = () => src(config.requirejs)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(dest(`${config.out}${config.scripts.out}`))
  .pipe(browserSync.reload({stream: true}))
