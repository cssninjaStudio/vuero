import {
  waitTimeout,
  waitDarkTimeout,
  disableTimersAndAnimations,
  minimal,
  auth,
  sidebar,
  navbar,
  templates,
} from '../fixtures/routes'

describe('Desktop - Viewport (1274*714)', () => {
  beforeEach(() => {
    cy.viewport(1274, 714)
  })

  for (const route of templates) {
    it(`Desktop - Templates - ${route.name}`, () => {
      cy.visit(route.path)
      // cy.get('.navbar-layout')
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
      cy.wait(waitDarkTimeout)

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

  for (const route of minimal) {
    it(`Desktop - Minimal Layout - ${route.name}`, () => {
      cy.visit(route.path)
      // cy.get('.minimal-wrapper')
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
      cy.wait(waitDarkTimeout)

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
      // cy.get('.auth-wrapper')
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
      cy.wait(waitDarkTimeout)

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

  for (const route of sidebar) {
    it(`Desktop - Sidebar Layout - ${route.name}`, () => {
      cy.visit(route.path)
      // cy.get('.default-layout')
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
      cy.wait(waitDarkTimeout)

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

  for (const route of navbar) {
    it(`Desktop - Navbar Layout - ${route.name}`, () => {
      cy.visit(route.path)
      // cy.get('.navbar-layout')
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
      cy.wait(waitDarkTimeout)

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
