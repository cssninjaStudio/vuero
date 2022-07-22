export const onBeforeLoad = (win: Cypress.AUTWindow) => {
  // force language to be english
  Object.defineProperty(win.navigator, 'language', { value: 'en' })

  // force logged status
  win.localStorage.setItem('token', 'logged-in')
}

export const buildUri = ({ path, query }: { path: string; query?: any }) => {
  let uri = path

  if (query) {
    const args = []
    for (const key of Object.keys(query)) {
      args.push(`${key}=${query[key]}`)
    }

    uri += `?${args.join('&')}`
  }

  return uri
}

export const buildScreenshotName = (
  route: { prefix: string; name: string },
  suffix?: string
) => {
  return `${route.prefix}/${route.name
    .toLowerCase()
    .replace('-', ' ')
    .replace('(', ' ')
    .replace(')', ' ')
    .trim()
    .replace(/[\s]+/g, '-')}${suffix ? `-${suffix}` : ''}`
}
