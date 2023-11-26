describe('Тестирование scroll', () => {
  it('Должен scroll', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-logout="scroll"]').click();
  })
})