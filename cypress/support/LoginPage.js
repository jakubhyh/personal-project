class LoginPage {
    visitPage(page) {
        cy.visit(page)
    }

    fillEmail(email) {
        cy.get('#email').click().type(email)
    }

    fillPassword(password) {
        cy.get('#password').click().type(password)
    }

    submit() {
        cy.get('[data-cy="submit-button"]').click()
    }
}

export default LoginPage;
