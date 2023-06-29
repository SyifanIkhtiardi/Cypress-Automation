context('Demoblase e2e test',() => {
    
    it('Get login sessions', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
        cy.get('#email').type('testqa@email.com');
        cy.get('#pass').type('account');
        cy.get('#send2').click();

    })
})