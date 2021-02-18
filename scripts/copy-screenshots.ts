import { admin, auth, minimal, webapp } from '../cypress/fixtures/routes'
const fs = require('fs')

const all = [...admin, ...auth, ...minimal, ...webapp]
const routes = []
console.log(all)

for (const route of all) {
  const normalized = route.name
    .toLowerCase()
    .replace('-', ' ')
    .replace('(', ' ')
    .replace(')', ' ')
    .replace(/[\s]+/g, '-')

  const routeName =
    route.path === '/'
      ? 'index'
      : route.path.replace(/^\//, '').replace(/\//g, '-')

  routes.push({
    name: route.name.split(' - ')[0],
    layout: route.name.split(' - ').splice(1).join(' - '),
    route: {
      name: routeName.replace(/-$/, ''),
      path: route.path,
    },
    screenshot: {
      light: `/public/screenshoots/${normalized}-desktop-light.webp`,
      dark: `/public/screenshoots/${normalized}-desktop-dark.webp`,
    },
  })
}

const data = JSON.stringify(routes, null, 2)
fs.writeFileSync('screenshoots.json', data)

console.log(data)
