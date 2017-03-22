import {src, dest, watch, parallel, series} from 'gulp'
import paths from './config'
import {clean} from './tasks/clean'
import {devSass} from './tasks/styles'
import {devTs} from './tasks/javascript'
import {server} from './tasks/server'
import {copyHtml} from './tasks/html'

export const devWatch = () => {
  watch(paths.scripts.watch, series(devTs))
  watch(paths.sass.watch, series(devSass))
  watch(`${paths.in}/**/*.html`, series(copyHtml))
}

export const dev = series(clean, parallel(devTs, copyHtml, devSass), parallel(server, devWatch))

export default dev