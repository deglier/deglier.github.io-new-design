import {src, dest} from 'gulp'
import paths from '../paths'
import {cleanCss} from './clean'

import compileSass from 'gulp-sass'
import concatCss from 'gulp-concat'
import minifyCss from 'gulp-cssmin'
import browserPefixer from 'gulp-autoprefixer'
import sourcemaps from 'gulp-sourcemaps'
import browserSync from 'browser-sync'

export const sassBuild = () => src(paths.sass.readPaths)
  .pipe(sourcemaps.init())
  .pipe(compileSass({includePaths:['sass'],onError: browserSync.notify}))
  .pipe(browserPefixer(['last 15 versions','> 1%','ie 8','ie 7',{cascade: true}]))
  .pipe(minifyCss())
  .pipe(sourcemaps.write('./'))
  .pipe(dest(`${paths.out}/${paths.sass.out}`))

export const sassDev = () => src(paths.sass.readPaths)
  .pipe(compileSass.sync().on('error', compileSass.logError))
  .pipe(concatCss("styles.css"))
  .pipe(browserPefixer({
    browsers: paths.sass.prefixscd,
    cascade: false
  }))
  .pipe(dest(`${paths.out}/${paths.sass.out}/`))
  .pipe(browserSync.reload({stream:true}))