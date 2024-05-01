Cypress.Commands.add('findDataMatch', (selector, ...args) => {
    return cy.get(`[data-test='${selector}']`, ...args);
});

Cypress.Commands.add('findDataContain', (selector, ...args) => {
    return cy.get(`[data-test*='${selector}']`, ...args);
});

Cypress.Commands.add('findChildDataMatch', { prevSubject: 'element' }, (subject, selector, ...args) => {
    return cy.wrap(subject).find(`[data-test='${selector}']`, ...args);
});

Cypress.Commands.add('findChildDataContain', { prevSubject: 'element' }, (subject, selector, ...args) => {
    return cy.wrap(subject).find(`[data-test*='${selector}']`, ...args);
});
