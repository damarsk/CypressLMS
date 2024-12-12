describe('Change Language', () => {
    it('Change to Indonesian Language & Back to default (English)', () => {
        cy.intercept("POST", "/lib/ajax/service.php?sesskey=*").as("getLanguage");
        cy.visit('https://skyone-academy.my.id');
        cy.url().should('include', '/');
        // Change to Indonesian Language
        cy.wait("@getLanguage");
        cy.get('.langmenu').click();
        cy.get('[href="https://www.skyone-academy.my.id/?lang=id"]').click();
        cy.url().should('include', '/?lang=id');
        // Change to English Language
        cy.wait(1000);
        cy.get('.langmenu').click();
        cy.get('[href="https://www.skyone-academy.my.id/?lang=en"]').click();
        cy.url().should('include', '/?lang=en');
    });
});