describe('Username and Password are True', () => {
    it('Open Index and Validate all Elements', () => {
        cy.visit('https://skyone-academy.my.id');
        cy.url().should('include', '/');    
        cy.get('.navbar').should('be.visible');
        cy.get('.navbar-brand').should('be.visible');
        cy.get('[data-key="home"] > .nav-link').should('be.visible');
        cy.get('[id^="drop-down-"]').should('be.visible');
        cy.get('.langbutton').should('be.visible');
        cy.get('#lang-menu-toggle').should('be.visible');
        cy.get('#lang-menu-toggle').should('be.visible');
        cy.get('#page').should('be.visible');
        cy.get('.active > .w-100').should('be.visible');
        cy.get('#feature').should('be.visible');
        cy.get('#numbers').should('be.visible');
        cy.get('#page-footer').should('be.visible');
    });
});