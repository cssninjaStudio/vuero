import {
  waitTimeout,
  disableTimersAndAnimations,
  minimal,
  auth,
  admin,
  webapp,
} from '../fixtures/routes'

describe('Desktop - Viewport (1295*722)', () => {
  beforeEach(() => {
    cy.viewport(1295, 722)
  })

  for (const route of minimal) {
    it(`Desktop - Minimal Layout - ${route.name}`, () => {
      cy.visit(route.path)
      cy.get('.minimal-wrapper')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')
      cy.get('html').invoke('toggleClass', 'no-scroll')

      cy.screenshot(
        `${route.prefix}/${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      // cy.wait(waitTimeout)

      cy.screenshot(
        `${route.prefix}/${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )
    })
  }

  for (const route of auth) {
    it(`Desktop - Auth Layout - ${route.name}`, () => {
      cy.visit(route.path)
      cy.get('.auth-wrapper')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')
      cy.get('html').invoke('toggleClass', 'no-scroll')

      cy.screenshot(
        `${route.prefix}/${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      // cy.wait(waitTimeout)

      cy.screenshot(
        `${route.prefix}/${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )
    })
  }

  for (const route of admin) {
    it(`Desktop - Admin Layout - ${route.name}`, () => {
      cy.visit(route.path)
      cy.get('.default-layout')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')
      cy.get('html').invoke('toggleClass', 'no-scroll')

      cy.screenshot(
        `${route.prefix}/${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      // cy.wait(waitTimeout)

      cy.screenshot(
        `${route.prefix}/${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )
    })
  }

  for (const route of webapp) {
    it(`Desktop - Webapp Layout - ${route.name}`, () => {
      cy.visit(route.path)
      cy.get('.webapp-layout')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')
      cy.get('html').invoke('toggleClass', 'no-scroll')

      cy.screenshot(
        `${route.prefix}/${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      // cy.wait(waitTimeout)

      cy.screenshot(
        `${route.prefix}/${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )
    })
  }
})
