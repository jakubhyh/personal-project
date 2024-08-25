describe('Testovanie stránkovania produktov podľa ceny v Make Up sekcii', () => {
    const minPrice = 1; // Minimálna cena
    const maxPrice = 100; // Maximálna cena
    
    it('by mal správne zoradiť produkty podľa ceny od najvyššej po najnižšiu a overiť, že všetky ceny sú v požadovanom rozsahu', () => {
        cy.viewport(1920,1080);
    
        // Návšteva demo stránky
        cy.visit("https://demo.spreecommerce.org");

        // Kliknutie na kategóriu Make Up
        cy.get('[data-title="make up"]').first().click();

        cy.wait(1000);

        // Kliknutie na dropdown pre zoradenie
        cy.get('#dropdown-button').click();
        
        // Kliknutie na možnosť "Price (high-low)"
        cy.contains('Price (high-low)').click();

        cy.wait(3000);

        // Scrollovanie nadol ktoré zobrazí všetky produkty
        cy.scrollTo('bottom', { ensureScrollable: false });

        cy.wait(4000);
        
        // Získanie a kontrola cien produktov
        cy.get('.product-card-price p').then($prices => {
            // Získa ceny a prevedie ich na číselné hodnoty
            const actualPrices = $prices.toArray().map(price => parseFloat(price.innerText.replace('$', '').replace(',', '')));
        
            // Výpis cien do konzoly
            cy.log('Actual Prices:', JSON.stringify(actualPrices));
        
            // Skontrolovanie, že všetky ceny sú v rámci stanoveného cenového rozsahu
            actualPrices.forEach(price => {
                expect(price).to.be.gte(minPrice); // Cena by mala byť väčšia alebo rovná minimálnej cene
                expect(price).to.be.lte(maxPrice); // Cena by mala byť menšia alebo rovná maximálnej cene
            });
        });
    });
});

