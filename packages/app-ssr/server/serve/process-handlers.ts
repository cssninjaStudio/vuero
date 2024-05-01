import { isProduction, isDebug } from 'std-env'

export function registerProcessHandlers() {
  if (!isProduction || isDebug) {
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
}
