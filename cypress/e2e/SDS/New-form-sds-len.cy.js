Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
  });  

describe('Loan Bidding Site Automation', () => {
    it('Try Lendwyse/sf', () => {
        cy.visit('https://polymorphic:polymorphic2021@trylendwyse.polymorphic-sandbox.com/sf');

        cy.get('input[value="40000"]').click();
        cy.get('.step1 > .fieldset-content > .next-step').click();
        cy.wait(2000);

        cy.get('input[value="Debt Consolidation"]').click();
        cy.get('input[name="annual_income"]').type('65000');
        cy.get('input[value="Bi-Weekly"]').click();
        cy.get('.step3 > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('12121990');
        cy.get('.step4 > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('7436502222');
        cy.get('input[name="home_address"]').type('1st Good st');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('#state').select('NY');
        cy.get('input[name="zip_code"]').type('23234');
        cy.get('.step5 > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('a.show-additional-reviews').click()
        cy.get('div[class="review-content"]').should('be.visible');
        cy.get('.step6 > .fieldset-content > .next-step').click();
        cy.wait(25000);

        cy.get('.mt-2 > .pt-3').should('be.visible')
    });
})
