describe('Test tangthuvien', () => {
  it('Open, Login with wrong username', () => {
    cy.visit('https://truyen.tangthuvien.vn/')
    cy.get('#numero2').click()
    cy.get('#username').type("abcd")
    cy.get('#password').type("abcd")
    cy.get('body > div.qdlogin-wrap > div > div.login-switch-wrap > div > div.login-box.q-login.yw-login > div.login-common-wrap > a.red-btn.go-login.btnLogin.login-button').click()
    cy.get('body > div.qdlogin-wrap > div > div.login-switch-wrap > div > div.login-box.q-login.yw-login > div.error-tip').should('be.visible')
  })
})