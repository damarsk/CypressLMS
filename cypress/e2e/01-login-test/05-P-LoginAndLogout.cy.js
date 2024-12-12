describe('Login and LogOut from LMS', () => {
    it('Visits the login page & login', () => {
        cy.visit('https://skyone-academy.my.id');
        cy.get('.login').contains('Log in').click();
        cy.wait(2000);
        cy.url().should('include', '/login');
        cy.get('#username').type('damar_17');
        cy.get('#password').type('Adamar123');
        cy.get('#loginbtn').click();
        cy.url().should('include', '/');
        cy.get('#user-menu-toggle').click();
        cy.get('#carousel-item-main').contains('Log out').click();
        cy.url().should('include', '/');
    });
});