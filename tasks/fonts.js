import {src, dest} from 'gulp'
import config from '../config'
import browserSync from 'browser-sync'

export const copyFonts = () => src(config.fonts.readPaths)
  .pipe(dest(`${config.out}/${config.fonts.out}`))
  .pipe(browserSync.reload({stream: true}))