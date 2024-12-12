describe('Username and Password are True', () => {
    it('Visits the login page & Login', () => {
        cy.visit('https://skyone-academy.my.id');
        cy.get('.login').contains('Log in').click();
        cy.wait(2000);
        cy.url().should('include', '/login');
        cy.get('#username').type('damar_17');
        cy.get('#password').type('Adamar123');
        cy.get('#loginbtn').click();
        cy.url().should('include', '/');
    });
});