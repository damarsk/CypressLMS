describe('Username and Password are True', () => {
    it('Visit Course Without Login', () => {
        cy.visit('https://skyone-academy.my.id');
        cy.wait(2000);
        cy.visit('https://skyone-academy.my.id/course', { failOnStatusCode: false });
        cy.url().should('include', '/course');
        cy.get('.alert').should('be.visible').and('contain', "You don't have permission to view this list of courses.");
        // cy.get('.continuebutton > form').should('be.visible').and('contain', 'Continue').click();
        cy.url().should('include', '/course');
    });
});