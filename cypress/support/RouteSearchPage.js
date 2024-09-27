class RouteSearchPage {
    clickSearchRoutesButton() {
        cy.get('button.relative.inline-flex').click();
    }

    searchForRoute(routeName) {
        cy.get('div.ring-inset input[name="searchQuery"]').click().type(routeName);
    }

    selectRoute(routeName) {
        cy.contains(routeName).click();
    }

    verifyRoutePageUrl(routeUrl) {
        cy.url().should('eq', routeUrl);
    }

    clickRoutesInMenu() {
        cy.get('[data-cy="navigation-routes"]').click();
    }
}

export default RouteSearchPage
