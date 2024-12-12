describe('Username and Password are True', () => {
    it('Visit Course With Login First', () => {
        cy.visit('https://skyone-academy.my.id');
        cy.get('.login').contains('Log in').click();
        cy.url().should('include', '/login');
        cy.get('#username').type('damar_17');
        cy.wait(500);
        cy.get('#password').type('Adamar123');
        cy.get('#loginbtn').click();
        cy.url().should('include', '/');
        cy.visit('https://skyone-academy.my.id/course');
        cy.url().should('include', '/course');
        cy.get('.collapseexpand').click();
    });
});