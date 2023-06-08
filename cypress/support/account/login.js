class loginPage {

    elements= {
        ctaLogin : () => cy.get('.panel > .header > .authorization-link > a'),
        emailInput : () => cy.get('#email'),
        passwordInput : () => cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'),
        loginButton : () => cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2')
    }

    accessLoginPage() {
        this.elements.ctaLogin().click();
    }

    enterEmail(email) {
        this.elements.emailInput().clear();
        this.elements.emailInput().type(email);
    }

    enterPassword(password) {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }
    clickSignInButton() {
        this.elements.loginButton().click();
    }

}

export default loginPage;