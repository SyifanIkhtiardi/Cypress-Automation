class registerPage{

    elements = {
        ctaCreateAccount : () => cy.get('.panel > .header > :nth-child(3) > a'),
        firstNameInput : () => cy.get('#firstname'),
        lastNameInput : () => cy.get('#lastname'),
        emailInput : () => cy.get('#email_address'),
        passwordInput : () => cy.get('#password'),
        confirmPasswordInput : () => cy.get('#password-confirmation'),
        createAccountBtn : () => cy.get('#form-validate > .actions-toolbar > div.primary > .action')
    }

    accessCreateAccountPage() {
        this.elements.ctaCreateAccount().click();
    }

    enterFirstName(firstName)
    {
        this.elements.firstNameInput().clear();
        this.elements.firstNameInput().type(firstName);
    }

    enterLastName(lastName)
    {
        this.elements.lastNameInput().clear();
        this.elements.lastNameInput().type(lastName);
    }

    enterEmail(email)
    {
        this.elements.emailInput().clear();
        this.elements.emailInput().type(email);
    }

    enterPassword(password)
    {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }

    confirmPassword(password)
    {
        this.elements.confirmPasswordInput().clear();
        this.elements.confirmPasswordInput().type(password);
    }

    clickCreateAccount() {
        this.elements.createAccountBtn().click();
    }

}

export default registerPage;