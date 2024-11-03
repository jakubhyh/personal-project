describe('Product Sorting Verification', () => {
  
    it('should verify that products in the Skin Care section are sorted alphabetically from A to Z', () => {
      cy.viewport(1920, 1080);
      cy.visit('https://demo.spreecommerce.org');
      
      // Klik na sekciu "Skin Care"
      cy.get('[data-title="skin care"]').first().click();
  
      // Kliknutie na dropdown pre zoradenie
      cy.get('#dropdown-button').click();
  
      // Kliknutie na možnosť "Alphabetically, A-Z"
      cy.contains('Alphabetically, A-Z').click();
  
      // Počkať na načítanie zoradených produktov
      cy.wait(3000);
  
      // Scrollovanie nadol kým nie sú načítané všetky produkty
      cy.scrollTo('bottom', { ensureScrollable: false });
      cy.wait(2000);
      cy.scrollTo('bottom', { ensureScrollable: false });
      cy.wait(2000); // Opakuje sa podľa potreby
  
      // Overenie zoradenia názvov produktov
      cy.get('.product-card-title').then($titles => {
        const productTitles = $titles.toArray().map(el => el.innerText.trim());
  
        cy.log('Original Product Titles:', JSON.stringify(productTitles));
  
        const sortedTitles = [...productTitles].sort((a, b) =>
          a.localeCompare(b, undefined, { sensitivity: 'base' })
        );
  
        cy.log('Sorted Product Titles:', JSON.stringify(sortedTitles));
  
        // Overenie zoradenia
        expect(productTitles).to.deep.equal(sortedTitles);
    });
    });
  
});