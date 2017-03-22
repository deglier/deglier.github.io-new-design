import del from 'del'
import paths from '../config'

export const clean = () => del([paths.out])

export const cleanCss = () => del([`${paths.out}/${paths.sass.out}`])

export const cleanJs = () => del([`${paths.out}/${paths.scripts.out}`])
