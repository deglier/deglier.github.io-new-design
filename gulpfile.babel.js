import {src, dest, watch, parallel, series} from 'gulp'
import paths from './config'
import {clean} from './tasks/clean'
import {devSass} from './tasks/styles'
import {devJs} from './tasks/javascript'

export const dev = series(clean, parallel(devJs))

export default dev