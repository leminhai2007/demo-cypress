import './commands';
import 'cypress-mochawesome-reporter/register';

declare global {
    namespace Cypress {
        interface Chainable {
            findDataMatch(value: string): Chainable<JQuery<HTMLElement>>;
            findDataContain(value: string): Chainable<JQuery<HTMLElement>>;
            findChildDataMatch(value: string): Chainable<JQuery<HTMLElement>>;
            findChildDataContain(value: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
