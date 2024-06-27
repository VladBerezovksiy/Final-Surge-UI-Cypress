import testData from '../fixtures/TestData.json'
import { faker } from '@faker-js/faker'

import { loginPage } from '../support/pages/LoginPage'

describe('Login Tests', () => {

  before(()=>{
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
  })
  
  it('Login with valid credentials', () => {
    cy.login(testData.email, testData.password, testData.messages.accountLogin)
  })

  it('Login with invalid credentials', () => {
    cy.login("dodl.com", "121e", testData.messages.errorInvalidEmailField)
  })

  it('Login with non-existence credentials', () => {
    cy.login(faker.internet.email(), faker.internet.password(), testData.messages.accountNonExisting)
  })

  it('Login with empty fields', () => {
    cy.login("", "", testData.messages.errorEmptyEmailField)
  })

  it('Forgot Password', () => {
      loginPage.checkForgotPassword(testData.email2)
  })

})