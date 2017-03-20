import {src, dest, watch, parallel, series} from 'gulp'
import paths from './paths'
import {cleanCss} from './tasks/clean'
import {sassDev,sassBuild} from './tasks/styles'

export const cleanDev = parallel(cleanCss)

export const styles = series(cleanCss, sassDev)

export const dev = series(styles)

export default dev