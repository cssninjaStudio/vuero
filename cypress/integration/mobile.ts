import { waitTimeout, admin, webapp, minimal, auth } from '../fixtures/routes'

describe('Iphone 6 viewport (357*667)', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
  })

  for (const route of minimal) {
    it(`Render iphone 6 version of the minimal page "${route.name}"`, () => {
      cy.visit(route.path)
      cy.get('.minimal-wrapper')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace(/[\s]+/g, '-')}-iphone-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations: true,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      cy.wait(waitTimeout)

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace(/[\s]+/g, '-')}-iphone-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations: true,
        }
      )
    })
  }

  for (const route of auth) {
    it(`Render iphone 6 version of the auth page "${route.name}"`, () => {
      cy.visit(route.path)
      cy.get('.auth-wrapper')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace(/[\s]+/g, '-')}-iphone-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations: true,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      cy.wait(waitTimeout)

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace(/[\s]+/g, '-')}-iphone-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations: true,
        }
      )
    })
  }

  for (const route of admin) {
    it(`Render iphone 6 version of the admin page "${route.name}"`, () => {
      cy.visit(route.path)
      cy.get('.default-layout')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace(/[\s]+/g, '-')}-iphone-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations: true,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      cy.wait(waitTimeout)

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace(/[\s]+/g, '-')}-iphone-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations: true,
        }
      )
    })
  }

  for (const route of webapp) {
    it(`Render iphone 6 version of the webapp page "${route.name}"`, () => {
      cy.visit(route.path)
      cy.get('.webapp-layout')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace(/[\s]+/g, '-')}-iphone-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations: true,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      cy.wait(waitTimeout)

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace(/[\s]+/g, '-')}-iphone-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations: true,
        }
      )
    })
  }
})
