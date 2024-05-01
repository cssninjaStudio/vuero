import type { ResolvedConfig } from 'vite'
import colors from 'picocolors'
import { generateStaticParams } from '../config'

export const routeParamRe = /(\[.*?\])/g

interface PrerenderPage {
  url: string
  logPrefix: string
}

export async function populateRouteParams({
  routes,
  config,
}: {
  config: ResolvedConfig
  routes: string[]
}) {
  const staticParams = generateStaticParams()
  const pages: PrerenderPage[] = []

  for (const index in routes) {
    const url: string
      = routes[index] === '/' ? '/' : routes[index].replace(/\/$/, '') // remove trailing slash

    const logCount = `${1 + parseInt(index, 10)}/${routes.length}`

    if (url.includes('[')) {
      const routeStaticParamsFn
        = url in staticParams ? staticParams[url as keyof typeof staticParams] : undefined

      if (!routeStaticParamsFn) {
        config.logger.warn(
          `dynamic route (${logCount}) ${colors.yellow(
            url,
          )} - missing static config - update ${colors.cyan(
            './build-ssg.config.ts',
          )} to generate static params for this route.`,
        )
        continue
      }

      // extract route params from url (e.g. /[id] or /[[slug]] or /[...all])
      const params = (url.match(routeParamRe) || []).map((p: string) => {
        const required = !p.includes('[[')
        const array = p.includes('...')
        const name = p.replaceAll(/\[/g, '').replaceAll(/\]/g, '').replaceAll(/\./g, '')

        return {
          required,
          array,
          name,
          param: p,
        }
      })
      const routeStaticParams = await staticParams[url as keyof typeof staticParams]()

      if (!routeStaticParams || !Array.isArray(routeStaticParams)) {
        config.logger.warn(
          `dynamic route (${logCount}) ${colors.yellow(
            url,
          )} - static params must be an array`,
        )
        continue
      }

      // check if static params are valid
      const invalidParams = routeStaticParams.filter((param) => {
        return params.some((p) => {
          if (p.required && !(p.name in param)) {
            config.logger.warn(
              `dynamic route (${logCount}) ${colors.yellow(
                url,
              )} - missing required param ${colors.cyan(p.name)}`,
            )
            return true
          }

          if (p.array && p.name in param) {
            const value = param[p.name as keyof typeof param]
            const valid = Array.isArray(value)
            if (!valid) {
              config.logger.warn(
                `dynamic route (${logCount}) ${colors.yellow(url)} - param ${colors.cyan(
                  p.name,
                )} must be an array, got string "${colors.cyan(value)}"`,
              )
              return true
            }
          }
          else if (!p.array && p.name in param) {
            const value = param[p.name as keyof typeof param]
            const valid = !Array.isArray(value)
            if (!valid) {
              const values = `[${value.join(', ')}]`
              config.logger.warn(
                `dynamic route (${logCount}) ${colors.yellow(url)} - param ${colors.cyan(
                  p.name,
                )} must be string, got array ${colors.cyan(values)}`,
              )
              return true
            }
          }
        })
      })

      if (invalidParams.length) {
        continue
      }

      // render each static param
      for (const subindex in routeStaticParams) {
        const logSubCount = `${1 + parseInt(subindex, 10)}/${routeStaticParams.length}`
        const param = routeStaticParams[subindex]

        const paramUrl = params.reduce((url, p) => {
          if (p.name in param) {
            const value = param[p.name as keyof typeof param]
            if (Array.isArray(value)) {
              return url.replace(p.param, value.join('/'))
            }
            else {
              return url.replace(p.param, value)
            }
          }
          else {
            return url.replace(p.param, '')
          }
        }, url)

        pages.push({
          url: paramUrl,
          logPrefix: logSubCount,
        })
      }

      continue
    }
    pages.push({
      url,
      logPrefix: logCount,
    })
  }

  return pages
}
