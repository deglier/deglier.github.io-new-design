import {src, dest, watch, parallel, series} from 'gulp'
import config from './config'
import {clean} from './tasks/clean'
import {devSass} from './tasks/styles'
import {copyRequirejs, devJs} from './tasks/javascript'
import {server} from './tasks/server'
import {compileViews} from './tasks/html'
import {copyFonts} from './tasks/fonts'
import {compressImages} from './tasks/images'
import {devWatch} from './tasks/watch'
import {tsCompiler} from './tasks/typescript'

export const dev = series(clean, parallel(copyRequirejs, series(tsCompiler, devJs), compileViews, devSass, copyFonts, series(compressImages)), parallel(server, devWatch))

export default dev