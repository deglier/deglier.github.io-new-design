import config from '../config'
import browserSync from 'browser-sync'

export const server = () => {
  browserSync({
    server: {
      baseDir: config.out
    }
  })
}