import {src, dest} from 'gulp'
import paths from '../config'
import browserSync from 'browser-sync'

export const copyHtml = () => src(`${paths.in}/**/*.html`)
  .pipe(dest(paths.out))
  .pipe(browserSync.reload({stream: true}))