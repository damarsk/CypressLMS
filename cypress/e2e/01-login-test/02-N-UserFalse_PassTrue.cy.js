describe('Username is False and Password is True', () => {
    it('Visits the login page & Login', () => {
        cy.visit('https://skyone-academy.my.id');
        cy.get('.login').contains('Log in').click();
        cy.wait(2000);
        cy.url().should('include', '/login');
        cy.get('#username').type('UsernameSalah');
        cy.get('#password').type('Adamar123');
        cy.get('#loginbtn').click();
        cy.get('.alert').should('be.visible').and('contain', 'Invalid login, please try again');
    });
});