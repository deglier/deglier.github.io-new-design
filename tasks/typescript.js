import {src, dest} from 'gulp'
import config from '../config'

import tsc from 'gulp-typescript'
import plumber from 'gulp-plumber'

let tsConfig = tsc.createProject('tsconfig.json')

export const tsCompiler = () => src(config.ts.readPaths)
    .pipe(tsc({
      target: 'es5',
      module: 'amd'
    }))
    .pipe(dest(`${config.in}${config.ts.out}`))
