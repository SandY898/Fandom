describe('Тестирование goback', () => {
  it('Должен goback', () => {
    cy.visit('http://localhost:3000/reg');
    cy.get('[data-test="button"]').eq(2).click({ multiple: true });

  })
})