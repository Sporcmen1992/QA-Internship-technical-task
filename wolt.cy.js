describe('Wolt ordering a burger', () => {
    it('Test scenario', () => {
        // Navigate to wolt.com and choose adress
        cy.visit('https://wolt.com/lt/discovery');
        cy.get('.sc-eec3bcfd-2').click();
        cy.get('.Lgs3k4').click();
        cy.get('.sc-6d2c77fc-7').click();
        cy.get('#address-query-input').type('Kauno Dokas');
        cy.wait(2000);
        cy.get('#address-query-input').type('{enter}');
        cy.get('#addressLocationForm > div > button').click();
        // Assertion
        cy.get('.sc-743d6469-2 > [style="opacity: 1;"] > .sc-93c731d3-5 > .sc-93c731d3-1 > .sc-93c731d3-3').should('be.visible').and('have.text', 'Kauno Dokas');
        // Choose a burger restaurant wich delivers to Kaunas Dokas
        cy.get(':nth-child(2) > .sc-96be9519-0 > .sc-be33da98-0 > .sc-be33da98-1 > .sc-be33da98-2 > :nth-child(2) > .sc-e4f94c87-0 > [aria-hidden="true"] > .sc-43223f4c-0 > .sc-2ed84140-1 > .sc-2ed84140-0 > .sc-c436b24b-0 > .sc-c436b24b-1').click();
        // Assertion
        cy.get('.sc-d5916a37-0').should('be.visible').and('have.text', 'Burgeriai netoliese');
        cy.get('[data-test-id="venueCard.mad-brothers"] > .sc-ef9a8307-44 > [aria-hidden="true"] > .sc-ef9a8307-0 > .sc-ef9a8307-2 > .sc-c436b24b-0 > .sc-c436b24b-1').click();
        // Choose a favorite burger and put in the cart
        cy.get(':nth-child(6) > .sc-ff3a5ea4-0 > .sc-ff3a5ea4-5 > :nth-child(6) > .sc-e9b5c5ba-2').click();
        cy.get('.sc-2d01a0b8-5').click();
        // Assertion
        cy.get('.sc-c1361b55-1 > :nth-child(1) > .sc-62ed5c8d-2 > .sc-62ed5c8d-3 > .sc-c1361b55-4 > .sc-c1361b55-7').should('be.visible').and('have.text', 'Peržiūrėti užsakymą');
        // Proceed to the checkout
        cy.get('#app > div.sc-f6452829-0.bSxcyz.rtl > div.sc-f6452829-1.bKyWxV > div.sc-e93a88cb-0.bIXWdg.sc-f6452829-2.fwoHqE > div > div > div > header > div.sc-e2c5a0a3-1.eNrJxc > div.sc-e2c5a0a3-5.kCMiIN > div > div > div > div > button').click();
        cy.get('#app > div.sc-f6452829-0.bSxcyz.rtl > div.sc-f6452829-12.fJolPy > div.sc-1e5c23e2-0.gJmCPv.rtl > div > aside > div.sc-84dc8a49-0.lcUZJw > div > div.sc-84dc8a49-5.fELMei > footer > div.sc-eba7a245-5.gZovMl > div.sc-eba7a245-6.ktJpIL > div > button').click();
        // Assertion
        cy.get('.sc-f40b8d6a-2').should('be.visible').and('have.text', 'Susikurkite paskyrą arba prisijunkite');


    })
})