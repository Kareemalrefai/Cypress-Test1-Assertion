///<reference types="Cypress"/>

describe('Css Selector', () => {
     
    it(' Test Css Selector', () => {
        cy.visit("https://automationteststore.com/")

        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()

        cy.get("#ContactUsFrm_first_name").type("Kareemalrefai")

        // cy.get("#ContactUsFrm_email").type("TestAssertions@Cypress.com") //Another way Selector
        cy.get("input[id='ContactUsFrm_email']").type("TestAssertions@Cypress.com")


        // cy.get("textarea[name='enquiry']").type("Css Selector ")
        // cy.get("textarea[id='ContactUsFrm_enquiry']").type("Another Way Css Selector 1")
        cy.get("#ContactUsFrm_enquiry").type("Another way Css Selector 2 ")


        cy.get("button[title='Submit']").click()



    });




    it.only('Test Assertion', () => {
        cy.visit("https://automationteststore.com/")

        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.get("#ContactUsFrm_first_name").type("Kareemalrefai")
        cy.get("input[id='ContactUsFrm_email']").type("TestAssertions@Cypress.com")
        cy.get("#ContactUsFrm_enquiry").type("Another way Css Selector 2 ")
        cy.get("button[title='Submit']").click()

        cy.get('.mb40 > :nth-child(3)').should('have.text',"Your enquiry has been successfully sent to the store owner!")

    });


});