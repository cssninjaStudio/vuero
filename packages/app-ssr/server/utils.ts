import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const root = process.cwd()
export const isProd = process.env.NODE_ENV === 'production'

export const routeParamRe = /(\[.*?\])/g

export const resolve = (p: string) =>
  path.resolve(path.dirname(fileURLToPath(import.meta.url)), p)
