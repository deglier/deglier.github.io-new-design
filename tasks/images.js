import {src, dest} from 'gulp'
import config from '../config'

import imagemin from 'gulp-imagemin'
import browserSync from 'browser-sync'
import sprites from 'gulp-svg-sprites'
import svg2png from 'gulp-svg2png'
import filter from 'gulp-filter'

export const compressImages = () => src(config.images.readPaths)
  .pipe(imagemin(config.images.options))
  .pipe(dest(`${config.out}${config.images.out}`))
  .pipe(browserSync.reload({stream: true}))

// export const spriteSvg = () => src(config.svg.readPaths)
//   .pipe(sprites(config.svg.options))
//   .pipe(dest(config.svg.out))
//   .pipe(filter(config.svg.svgFile))
//   .pipe(svg2png())
//   .pipe(dest(config.svg.out))
//   .pipe(browserSync.reload({stream: true}))