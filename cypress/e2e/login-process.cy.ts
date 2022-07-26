const routeWithLogin = '/navbar/dashboards/company'

describe(`Authentification - Navigation Guards`, () => {
  it(`Should redirect to login page when not logged in`, () => {
    // register fakes timers
    // if you are performing a REST call, you should register a request intercepter insetead
    //   cy.intercept({ method: 'POST', url: '/api/auth/login', }, []).as('apiLogin')
    cy.clock()

    cy.visit(routeWithLogin, {
      onBeforeLoad(win: Cypress.AUTWindow) {
        // force language to be english
        Object.defineProperty(win.navigator, 'language', { value: 'en' })
      },
    })

    // auth required: should be redirected to /auth/login?redirect=
    cy.log(`Check auth redirection`).location('pathname').should('eq', '/auth/login')

    // perform login
    cy.get('[data-cy="email-input"]')
      .should('be.visible')
      .type('erik.kovalsky@cssninja.io')
    cy.get('[data-cy="password-input"]').should('be.visible').type('ada.lovelace')
    cy.get('[data-cy="login-form"]').submit()

    // the login has a sleep delay, so we need to wait for it
    // if you are performing a REST call, you should wait for the response instead
    //    cy.wait('@apiLogin')
    cy.tick(2000)

    // should be redirected back to the route after login
    cy.log(`Check auth redirection`).location('pathname').should('eq', routeWithLogin)
  })

  it(`Should access page directly when logged in`, () => {
    cy.visit(routeWithLogin, {
      onBeforeLoad(win: Cypress.AUTWindow) {
        // force language to be english
        Object.defineProperty(win.navigator, 'language', { value: 'en' })

        // force logged status
        win.localStorage.setItem('token', 'logged-in')
      },
    })

    // should not be redirected
    cy.log(`Check auth redirection`).location('pathname').should('eq', routeWithLogin)
  })
})
