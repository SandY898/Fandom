describe('Тестирование навигации по кнопке', () => {
  it('Должен перейти на /reg при клике на кнопку', () => {
    cy.visit('http://localhost:3000');

    // Добавляем ожидание рендеринга кнопки
    cy.get('[data-test="button"]').should('exist');

    // Имитируем клик на кнопку с атрибутом data-testid="button"
    cy.get('[data-test="button"]').eq(0).click();

    // Проверяем, что URL изменился на /reg
    cy.url().should('include', '/reg');
  });
});