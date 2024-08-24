class HomePage {
    // Selektor loga
    logoSelector = 'img.w-full.h-full.object-cover';
  
    // Metóda na overenie viditeľnosti loga
    verifyLogoIsVisible() {
      cy.get(this.logoSelector).should('be.visible');
    }
  }
  
  export default HomePage;