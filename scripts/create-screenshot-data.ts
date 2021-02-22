import {
  admin,
  auth,
  minimal,
  webapp,
  templates,
} from '../cypress/fixtures/routes'
const fs = require('fs')
const path = require('path')

const projectRootDir = path.resolve(__dirname, '../')
const outputDir = path.resolve(projectRootDir, 'src/data/landing')

type Route = {
  name: string
  path: string
  category: string
  displayOrder: number
}

function writeData(filename: string, raw: any) {
  const data = JSON.stringify(raw, null, 2)
  if (data) {
    fs.writeFileSync(filename, data)
  }
}

function generateData(routes: Route[], prefix: string) {
  const data = []
  for (const route of routes) {
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

    data.push({
      name: route.name,
      category: route.category,
      displayOrder: route.displayOrder,
      route: {
        name: routeName.replace(/-$/, ''),
        path: route.path,
      },
      screenshot: {
        light: `/images/screenshots/${prefix}/${normalized}-light.webp`,
        dark: `/images/screenshots/${prefix}/${normalized}-dark.webp`,
      },
    })
  }

  return data
}

writeData(`${outputDir}/admin.json`, generateData(admin, 'admin'))
writeData(`${outputDir}/auth.json`, generateData(auth, 'auth'))
writeData(`${outputDir}/minimal.json`, generateData(minimal, 'minimal'))
writeData(`${outputDir}/webapp.json`, generateData(webapp, 'webapp'))
writeData(`${outputDir}/templates.json`, generateData(templates, 'templates'))
