import del from 'del'
import config from '../config'

export const clean = () => del([config.out])

export const cleanCss = () => del([`${config.out}/${config.sass.out}`])

export const cleanJs = () => del([`${config.out}/${config.scripts.out}`])
