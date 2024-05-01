import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const resolve = (p: string) =>
  path.resolve(path.dirname(fileURLToPath(import.meta.url)), p)
