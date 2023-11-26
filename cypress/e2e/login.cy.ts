describe('Тестирование login', () => {
  it('Должен login', () => {
    cy.visit('http://localhost:3000/reg');



    cy.get('[data-testid="register"]').should('exist').click();

    cy.get('[data-testid="inputtext"]:eq(0)').type('255903');

    cy.get('[data-testid="inputtext"]:eq(1)').type('255903');

    cy.get('[data-testid="post"]').eq(1).click({ multiple: true });

    cy.get('[data-testid="post"]').eq(0).click({ multiple: true });
  });
});