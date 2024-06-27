import testData from '../../fixtures/TestData.json'

class BasePage {

    basePageElements = {
        logoutBtn:()=> cy.get(`a[href='logout.cshtml']`),
        breadCrumbs:()=> cy.get(`#breadcrumbs li:last-child`)
    }

    logout() {
        this.basePageElements.logoutBtn().click()
        cy.contains(testData.messages.accountLogout)
    }

    openPageFromHeader(nameDropDown, nameOption) {
        cy.xpath(`//div[@id='fade-menu']//li/a[text()='${nameDropDown}']`).trigger('mouseover')
        cy.xpath(`//div[@id='fade-menu']//li[contains(.,'${nameDropDown}')]//li[contains(.,'${nameOption}')]`).click()
        this.basePageElements.breadCrumbs().should('have.text', nameOption)
    }

}

export const basePage = new BasePage()