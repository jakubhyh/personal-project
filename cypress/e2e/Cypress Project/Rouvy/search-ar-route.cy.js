import LoginPage  from '../../../support/LoginPage';
import RouteSearchPage  from '../../../support/RouteSearchPage';

describe('Searching for an AR route', () => {
    
    beforeEach(() => {
        Cypress.on("uncaught:exception", (err) => {
            if (err.message.includes("Minified React error #345")) {
                return false; 
            }
            if (err.message.includes("Minified React error #418")) {
                return false; 
            }
            if (err.message.includes("Minified React error #423")) {
                return false; 
            }
        })
    })
    
    it('should search for an AR route, open it, and verify its details', () => {
     const loginPage = new LoginPage();
     const routeSearchPage = new RouteSearchPage();

     // Get the email and password from the environment variables from the cypress.env.json file
     const email = Cypress.env('email')
     const password = Cypress.env('password')
     cy.viewport(1920, 1080)
     
     // Visit the Rouvy login page
     loginPage.visitPage('https://riders.rouvy.dev/')
     
     // Fill in the email and password
     loginPage.fillEmail(email)
     
    //  Fill in the password
     loginPage.fillPassword(password)
     
     // Submit the login form
     loginPage.submit()

     // Click on the Routes in the menu    
     routeSearchPage.clickRoutesInMenu()

     // Verify the URL of the page
     routeSearchPage.verifyRoutePageUrl('https://riders.rouvy.dev/routes')
     
     // Click on the Search Routes button
     routeSearchPage.clickSearchRoutesButton()

     // Verify the URL of the page
     routeSearchPage.verifyRoutePageUrl('https://riders.rouvy.dev/routes/search')
     
     cy.wait(2000)

     // Search for the route with the name "Obergesteln"
     routeSearchPage.searchForRoute('Obergesteln')
         
     // Click on the Route with the name "Obergesteln"
     cy.contains('Obergesteln').click()

     // Verify the URL of the page
     routeSearchPage.verifyRoutePageUrl('https://riders.rouvy.dev/new-route/77190')

     // Check if the word "Švýcarsko" is present on the page
     cy.contains('Švýcarsko').should('be.visible')

     // Check if the word "AR, 2K" is present on the page
     cy.contains('AR, 2K').should('be.visible')
    });
});