describe('template spec', () => {

 it('cadastro', () => {
    cy.visit('https://conta.olx.com.br/cadastro/')

    cy.get('#nickname').type('Aline');
    cy.get('.sc-bNQFlB > .sc-cgHJcJ').type("aline@gmail.com")
    cy.get('.sc-hgeeVt > .sc-cgHJcJ').type('20040504@Aline')

    cy.get('.sc-jbKcbu').click();

  }
  )
  

it('login', () => {
  cy.visit("https://conta.olx.com.br/acesso?returnToToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2NvbnRhLm9seC5jb20uYnIvYW51bmNpb3MiLCJpYXQiOjE2NzU3OTg0OTg1MTl9.T-OR2CTSnI09YWdk69CMDOJftR8BS7r7NwGKhNUa1ss")

  cy.get('#input-1').type('aline@gmail.com')

  cy.get('#password-input').type("20040504@Aline")
  cy.get('.sc-ijhsb > [data-testid="button-wrapper"]').click();

  cy.get('.sc-kVfTjK').click();

})



})