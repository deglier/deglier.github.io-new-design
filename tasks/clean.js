import del from 'del'
import paths from '../paths'

export const cleanCss = () => del([`${paths.out}/${paths.sass.out}`])
