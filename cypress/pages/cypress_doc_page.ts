class CypressDocPage {
    url = '/';
    elements = {
        acceptAllCookieButton: () => cy.get('.osano-cm-accept-all'),
        searchBox: () => cy.get('div.searchBox_H2mL'),
        searchBar: () => cy.get('#docsearch-input'),
        searchedItems: (order: number) => cy.get(`#docsearch-item-${order} > a`),
    };

    loadPage() {
        cy.visit(this.url);
        const waitTime = Cypress.env('defaultPageLoadingTime');
        this.elements.acceptAllCookieButton().click();
        cy.wait(waitTime);
    }

    searchWithKeyword(keyword: string) {
        this.elements
            .searchBox()
            .click()
            .then(() => {
                this.elements.searchBar().type(keyword);
                cy.wait(1000);
                this.elements.searchedItems(1).click();
            });
    }
}

export const cypressDocPage: CypressDocPage = new CypressDocPage();
