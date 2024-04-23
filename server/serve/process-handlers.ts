import { isProd } from '../utils'

if (!isProd) {
  process.on('unhandledRejection', error =>
    console.error('[dev] [unhandledRejection]', error),
  )
  process.on('uncaughtException', error =>
    console.error('[dev] [uncaughtException]', error),
  )
}
else {
  process.on('unhandledRejection', error =>
    console.error('[unhandledRejection] ' + error),
  )
  process.on('uncaughtException', error =>
    console.error('[uncaughtException] ' + error),
  )
}
