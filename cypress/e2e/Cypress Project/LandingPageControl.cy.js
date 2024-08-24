import HomePage from "../../support/Page Objects/HomePage";

describe('Test Description', () => {
  const homePage = new HomePage();
    
  it('should perform some action', () => {
    cy.viewport(1920,1080)


      cy.visit("https://demo.spreecommerce.org")
      
      // Kontrola či som správne na demo verzii webu
      cy.contains('This is a demo website running on Vendo (Spree Enterprise edition)')
      .should('be.visible') 

      //Kontrola data-title
      cy.get('[data-title="make up"]').should('be.visible')
      cy.get('[data-title="skin care"]').should('be.visible')
      cy.get('[data-title="bath & feelgood"]').should('be.visible')

      // Overenie, či je logo viditeľné
      homePage.verifyLogoIsVisible();

      // Kontrola funkcie Search
      cy.get('#open-search').click()
      cy.get('#search-suggestions > div > form > div > button').click();




      
    
    });
  });
  