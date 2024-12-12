describe('Username is False and Password is True', () => {
    it('Visits the login page & Login', () => {
        cy.visit('https://skyone-academy.my.id');
        cy.get('.login').contains('Log in').click();
        cy.wait(2000);
        cy.url().should('include', '/login');
        cy.get('#username').type('damar_17');
        cy.get('#password').type('PasswordSalah');
        cy.get('#loginbtn').click();
        cy.get('.alert').should('be.visible').and('contain', 'Invalid login, please try again');
    });
});