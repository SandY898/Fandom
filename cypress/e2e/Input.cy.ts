describe('Тестирование поиска', () => {
  it('Должен фильтровать фильмы', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="input"]').type('star wars');
  });
});