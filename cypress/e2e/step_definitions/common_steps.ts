import 'cypress-mochawesome-reporter/cucumberSupport';
import { Given, When, Then, Step } from '@badeball/cypress-cucumber-preprocessor';
import { cypressDocPage } from '../../pages/cypress_doc_page';

const pageMapping = {
    cypress: () => cypressDocPage,
};
//#region Given
Given('Go to {string} page', (pageName: string) => {
    const page = pageMapping[pageName.toLowerCase()];
    if (page === undefined) throw new Error(`Page "${pageName}" is not defined.`);

    page().loadPage();
});
//#endregion

//#region When
When('In Cypress page, type {string} to seach bar', (keyword: string) => {
    cypressDocPage.searchWithKeyword(keyword);
});
//#endregion

//#region Then
Then('Cypress get command page is displayed', () => {
    cy.url().should('contain', 'commands/get');
});

Then('Capture screenshot', () => {
    cy.screenshot({ capture: 'viewport' });
});
//#endregion
