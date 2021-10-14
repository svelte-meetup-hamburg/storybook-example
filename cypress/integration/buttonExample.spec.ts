export {};

describe('Button Example', () => {
    it('kann Storybook nutzen', () => {
        cy.visit('http://localhost:6006/iframe.html?id=components-button--default');
        cy.contains('hallo', { matchCase: false }).should('be.visible');
    });
});
