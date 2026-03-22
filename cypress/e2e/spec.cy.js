describe('Testes E2E - Cypress', () => {

  it('Cenário positivo - acessar o site', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })

  it('Cenário positivo - clicar em comandos', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Commands').click()
    cy.contains('Commands')
  })

  it('Cenário negativo - validar elemento inexistente', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Texto que não existe').should('not.exist')
  })

})