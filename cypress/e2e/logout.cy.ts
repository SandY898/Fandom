describe('Тестирование logout', () => {
  it('Должен logout', () => {;
    cy.visit('http://localhost:3000');

    // Добавляем ожидание рендеринга кнопки
    cy.get('[data-test="button"]').should('exist');

    // Имитируем клик на кнопку с атрибутом data-testid="button"
    cy.get('[data-test="button"]').eq(0).click();

    // Проверяем, что URL изменился на /reg
    cy.url().should('include', '/reg');

    cy.get('[data-testid="register"]').should('exist').click();

    cy.get('[data-testid="inputtext"]:eq(0)').type('255903');

    cy.get('[data-testid="inputtext"]:eq(1)').type('255903');

    cy.get('[data-testid="post"]').eq(1).click({ multiple: true });

    cy.get('[data-testid="post"]').eq(0).click({ multiple: true });

    cy.wait(1000);

    cy.get('[data-test="button"]').eq(2).click({ multiple: true });

    cy.wait(1000);

    cy.get('[data-test="button"]').eq(0).click();
  });
});