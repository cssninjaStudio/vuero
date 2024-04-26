import path from 'node:path'
import fg from 'fast-glob'

export async function scanRoutes(cwd: string) {
  const files = await fg([path.resolve(cwd, 'src/pages/**/*.vue').replace(/\\/g, '/')])

  return files
    .filter(path => !path.includes('src/pages/[...all].vue')) // ignore root catch-all route
    .map((file) => {
      const name = file
        .replace(/\.vue$/, '')
        .replace(cwd.replace(/\\/g, '/'), '')
        .replace(/\/+/g, '/')
        .replace('/src/pages/', '')
        .toLowerCase()

      return '/' + name.replace(/index$/, '')
    })
}
