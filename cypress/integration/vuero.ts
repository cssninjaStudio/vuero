import {
  delay,
  disableTimersAndAnimations,
  minimal,
  auth,
  sidebar,
  navbar,
  templates,
} from '../fixtures/routes'

const buildUri = ({ path, query }: { path: string; query?: any }) => {
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

describe('Desktop - Viewport (1274*714)', () => {
  beforeEach(() => {
    cy.viewport(1274, 714)
    cy.clearLocalStorage()
  })

  for (const route of templates) {
    it(`Desktop - Templates - ${route.name}`, () => {
      cy.visit(buildUri(route))
      // cy.get('.default-layout, .navbar-layout')
      cy.get(route.checkVisibleSelector).should('be.exist')
      cy.wait(route.pageDelay)

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

      cy.get('body').then(($body) => {
        if ($body.find('.desktop-toolbar .dark-mode').length > 0) {
          cy.get('.desktop-toolbar .dark-mode').then(($button) => {
            if ($button.is(':visible')) {
              $button.trigger('click')
            } else {
              $body.addClass('is-dark')
            }
          })
        } else {
          $body.addClass('is-dark')
        }
      })
      cy.wait(delay)
      cy.wait(route.pageDelay)

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
      cy.visit(buildUri(route))
      // cy.get('.minimal-wrapper')
      cy.get(route.checkVisibleSelector).should('be.visible')
      cy.wait(route.pageDelay)

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

      cy.get('body').then(($body) => {
        if ($body.find('.desktop-toolbar .dark-mode').length > 0) {
          cy.get('.desktop-toolbar .dark-mode').then(($button) => {
            if ($button.is(':visible')) {
              $button.trigger('click')
            } else {
              $body.addClass('is-dark')
            }
          })
        } else {
          $body.addClass('is-dark')
        }
      })
      cy.wait(delay)
      cy.wait(route.pageDelay)

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
      cy.visit(buildUri(route))
      // cy.get('.auth-wrapper')
      cy.get(route.checkVisibleSelector).should('be.visible')
      cy.wait(route.pageDelay)

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

      cy.get('body').then(($body) => {
        if ($body.find('.desktop-toolbar .dark-mode').length > 0) {
          cy.get('.desktop-toolbar .dark-mode').then(($button) => {
            if ($button.is(':visible')) {
              $button.trigger('click')
            } else {
              $body.addClass('is-dark')
            }
          })
        } else {
          $body.addClass('is-dark')
        }
      })
      cy.wait(delay)
      cy.wait(route.pageDelay)

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
      cy.visit(buildUri(route))

      if (route.auth) {
        // should be redirected to /auth/login-1?redirect=
        cy.location('pathname').should('eq', '/auth/login-1')

        cy.get('[name="email"]')
          .should('be.visible')
          .type('erik.kovalsky@cssninja.io')

        cy.get('[name="password"]').should('be.visible').type('ada.lovelace')

        cy.get('#login-button').should('be.visible').click()
      }

      // cy.get('.default-layout')
      cy.get(route.checkVisibleSelector).should('be.visible')
      cy.wait(route.pageDelay)

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

      cy.get('body').then(($body) => {
        if ($body.find('.desktop-toolbar .dark-mode').length > 0) {
          cy.get('.desktop-toolbar .dark-mode').then(($button) => {
            if ($button.is(':visible')) {
              $button.trigger('click')
            } else {
              $body.addClass('is-dark')
            }
          })
        } else {
          $body.addClass('is-dark')
        }
      })
      cy.wait(delay)
      cy.wait(route.pageDelay)

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
      cy.visit(buildUri(route))

      if (route.auth) {
        // should be redirected to /auth/login-1?redirect=
        cy.log(`Check auth redirection`)
          .location('pathname')
          .should('eq', '/auth/login-1')

        cy.get('[name="email"]')
          .should('be.visible')
          .type('erik.kovalsky@cssninja.io')

        cy.get('[name="password"]').should('be.visible').type('ada.lovelace')

        cy.get('#login-button').should('be.visible').click()
      }

      cy.get(route.checkVisibleSelector).should('be.visible')
      cy.wait(route.pageDelay)

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

      cy.get('body').then(($body) => {
        if ($body.find('.desktop-toolbar .dark-mode').length > 0) {
          cy.get('.desktop-toolbar .dark-mode').then(($button) => {
            if ($button.is(':visible')) {
              $button.trigger('click')
            } else {
              $body.addClass('is-dark')
            }
          })
        } else {
          $body.addClass('is-dark')
        }
      })
      cy.wait(delay)
      cy.wait(route.pageDelay)

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
