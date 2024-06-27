// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import testData from '../fixtures/TestData.json'

Cypress.Commands.add('login', (email, password, messageText) => {
    cy.visit(testData.url)

    console.log(`Email: ${email}`)
    cy.get('#login_name').then(e => {
        if(email !== '') {
            cy.get(e).type(email)
        }
    })

    console.log(`Password: ${password}`)
    cy.get('#login_password').then(e => {
        if(password !== '') {
            cy.get(e).type(password)
        }
    })

    cy.get(`form[id='login-validate'] button[type='submit']`).click()
    cy.contains(messageText)
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
})
