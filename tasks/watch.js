import {watch, series} from 'gulp'
import config from '../config'
import {devSass} from './styles'
import {copyRequirejs, devJs} from './javascript'
import {server} from './server'
import {compileViews} from './html'
import {copyFonts} from './fonts'
import {compressImages} from './images'
import {tsCompiler} from './typescript'


export const devWatch = () => {
  watch(config.ts.watch, series(tsCompiler, devJs))
  watch(config.sass.watch, series(devSass))
  watch(config.pug.watch, series(compileViews))
  // watch(`${paths.in}/**/*.html`, series(copyHtml))
}
