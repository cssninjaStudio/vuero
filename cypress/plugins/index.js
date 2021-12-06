/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const fs = require('fs')

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on /* , config*/) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('after:screenshot', (details) => {
    return new Promise((resolve, reject) => {
      if (details.testAttemptIndex === 0) {
        return resolve({})
      }

      const cleanPath = details.path.replace(/ \(attempt [0-9]+\)/, '')

      // fs.rename moves the file to the existing directory 'new/path/to'
      // and renames the image to 'screenshot.png'
      try {
        fs.renameSync(details.path, cleanPath)
      } catch (error) {
        return reject(err)
      }

      resolve({ path: cleanPath })
    })
  })
}
