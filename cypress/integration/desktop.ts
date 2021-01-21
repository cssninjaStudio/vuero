import { waitTimeout, minimal, auth, admin, webapp } from '../fixtures/routes'

describe('Desktop viewport (1920*1080)', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })

  for (const route of minimal) {
    it(`Render desktop version of the minimal page "${route.name}"`, () => {
      cy.visit(route.path)
      cy.get('.minimal-wrapper')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace(/[\s]+/g, '-')}-light`,
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
          .replace(/[\s]+/g, '-')}-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations: true,
        }
      )
    })
  }

  for (const route of auth) {
    it(`Render desktop version of the auth page "${route.name}"`, () => {
      cy.visit(route.path)
      cy.get('.auth-wrapper')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace(/[\s]+/g, '-')}-desktop-light`,
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
          .replace(/[\s]+/g, '-')}-desktop-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations: true,
        }
      )
    })
  }

  for (const route of admin) {
    it(`Render desktop version of the admin page "${route.name}"`, () => {
      cy.visit(route.path)
      cy.get('.default-layout')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace(/[\s]+/g, '-')}-desktop-light`,
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
          .replace(/[\s]+/g, '-')}-desktop-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations: true,
        }
      )
    })
  }

  for (const route of webapp) {
    it(`Render desktop version of the webapp page "${route.name}"`, () => {
      cy.visit(route.path)
      cy.get('.webapp-layout')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace(/[\s]+/g, '-')}-desktop-light`,
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
          .replace(/[\s]+/g, '-')}-desktop-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations: true,
        }
      )
    })
  }
})
