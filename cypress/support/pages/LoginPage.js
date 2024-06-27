import testData from '../../fixtures/TestData.json'

class LoginPage {

    elements = {
        forgotPasswordLink: () => cy.xpath(`//a[@id='pass_login']`),
        emailInputField: () => cy.xpath(`//input[@id='FEmail']`),
        requestNewPassButton: () => cy.get(`form[id='forgot-validate'] button[type='submit']`)
    }

    checkForgotPassword(email) {
        cy.visit(testData.url)
        this.elements.forgotPasswordLink().click()
        cy.contains(testData.messages.forgotPassword)

        this.elements.emailInputField().type(email)
        this.elements.requestNewPassButton().click()

        cy.contains(testData.messages.passwordReset)
    }

}

export const loginPage = new LoginPage()