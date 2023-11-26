describe('Тестирование golink', () => {
  it('Должен golink', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-logout="golink"]').click();
  });
});