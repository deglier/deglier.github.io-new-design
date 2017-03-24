import {src, dest} from 'gulp'
import config from '../config'
import browserSync from 'browser-sync'
import pug from 'gulp-pug'

export const copyHtml = () => src(`${config.in}/**/*.html`)
  .pipe(dest(config.out))
  .pipe(browserSync.reload({stream: true}))


export const compileViews = () => src(config.pug.readPaths)
  .pipe(pug({
    pretty: true
  }))
  .pipe(dest(config.out))
  .pipe(browserSync.reload({stream: true}))