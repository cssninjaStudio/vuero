import {
  waitTimeout,
  disableTimersAndAnimations,
  minimal,
  auth,
  admin,
  webapp,
} from '../fixtures/routes'

describe('Desktop - Viewport (1920*1080)', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })

  for (const route of minimal) {
    it(`Desktop - Minimal Layout - ${route.name}`, () => {
      cy.visit(route.path)
      cy.get('.minimal-wrapper')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')
      cy.get('html').invoke('toggleClass', 'no-scroll')

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-desktop-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      // cy.wait(waitTimeout)

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-desktop-dark`,
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
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-desktop-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      // cy.wait(waitTimeout)

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-desktop-dark`,
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
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-desktop-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      // cy.wait(waitTimeout)

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-desktop-dark`,
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
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-desktop-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      // cy.wait(waitTimeout)

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-desktop-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )
    })
  }
})

describe('Iphone 6 - Viewport (357*667)', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
  })

  for (const route of minimal) {
    it(`Iphone 6 - Minimal Layout - ${route.name}`, () => {
      cy.visit(route.path)
      cy.get('.minimal-wrapper')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')
      cy.get('html').invoke('toggleClass', 'no-scroll')

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-iphone-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      // cy.wait(waitTimeout)

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-iphone-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )
    })
  }

  for (const route of auth) {
    it(`Iphone 6 - Auth Layout - ${route.name}`, () => {
      cy.visit(route.path)
      cy.get('.auth-wrapper')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')
      cy.get('html').invoke('toggleClass', 'no-scroll')

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-iphone-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      // cy.wait(waitTimeout)

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-iphone-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )
    })
  }

  for (const route of admin) {
    it(`Iphone 6 - Admin Layout - ${route.name}`, () => {
      cy.visit(route.path)
      cy.get('.default-layout')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')
      cy.get('html').invoke('toggleClass', 'no-scroll')

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-iphone-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      // cy.wait(waitTimeout)

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-iphone-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )
    })
  }

  for (const route of webapp) {
    it(`Iphone 6 - Webapp Layout - ${route.name}`, () => {
      cy.visit(route.path)
      cy.get('.webapp-layout')
      cy.wait(waitTimeout)

      cy.title().should('not.contain', 'Page not found')
      cy.get('html').invoke('toggleClass', 'no-scroll')

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-iphone-light`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )

      cy.get('body').invoke('toggleClass', 'is-dark')
      // cy.wait(waitTimeout)

      cy.screenshot(
        `${route.name
          .toLowerCase()
          .replace('-', ' ')
          .replace('(', ' ')
          .replace(')', ' ')
          .replace(/[\s]+/g, '-')}-iphone-dark`,
        {
          capture: 'viewport',
          disableTimersAndAnimations,
        }
      )
    })
  }
})
