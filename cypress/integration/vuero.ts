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

const buildUri = ({ path, query }: { path: string; query?: any }) => {
  let uri = path

  if (query) {
    const args = []
    for (const key of Object.keys(query)) {
      args.push(`${key}=${query[key]}`)
    }

    uri += `?${args.join('&')}`
  }

  console.log('uri:', uri)

  return uri
}

describe('Desktop - Viewport (1274*714)', () => {
  beforeEach(() => {
    cy.viewport(1274, 714)
  })

  for (const route of templates) {
    it(`Desktop - Templates - ${route.name}`, () => {
      cy.visit(buildUri(route))
      // cy.get('.default-layout, .navbar-layout')
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
      cy.visit(buildUri(route))
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
      cy.visit(buildUri(route))
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
      cy.visit(buildUri(route))
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
      cy.visit(buildUri(route))
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
