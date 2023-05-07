import { navbar } from '../fixtures/routes'

import { buildUri, buildScreenshotName, onBeforeLoad } from '../fixtures/utils'

const screenshots = Cypress.env('SCREENSHOTS') || false
const screenshotsString = screenshots ? ' (with screenshots)' : ''

describe(`Navbar Layout${screenshotsString}`, () => {
  for (const route of navbar) {
    it(`${buildUri(route)}`, () => {
      cy.visit(buildUri(route), {
        onBeforeLoad,
      })

      // disable scroll and animations
      cy.get('html').invoke('toggleClass', 'no-scroll')
      cy.get('html').invoke('toggleClass', 'disable-notyf')
      cy.get('body').invoke(
        'append',
        Cypress.$(`
          <style id="__cypress-animation-disabler">
            *, *:before, *:after {
              transition-duration: 0s !important;
              transition-property: none !important;
              animation: none !important;
            }
          </style>
        `)
      )

      // check that main content is visible
      cy.get(route.checkVisibleSelector).should('be.visible')
      cy.title().should('not.contain', 'Page not found')

      if (screenshots) {
        cy.wait(route.pageDelay)
        // wait external resources to load (e.g. images, maps, graphs, etc.)
        if (route.pageDelay) {
          cy.wait(route.pageDelay)
        }

        // take screenshot in light mode
        cy.screenshot(buildScreenshotName(route, `light`), {
          capture: 'viewport',
        })

        // take screenshot in dark mode
        cy.get('[data-cy="dark-mode-toggle"]').first().click({ force: true })

        // wait external resources to load (e.g. images, maps, graphs, etc.)
        if (route.pageDelay) {
          cy.wait(route.pageDelay)
        }

        cy.screenshot(buildScreenshotName(route, `dark`), {
          capture: 'viewport',
        })
      }
    })
  }
})
