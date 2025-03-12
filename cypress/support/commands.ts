// cypress/support/commands.ts

// / <reference types="cypress" />

import { eq } from "lodash";

Cypress.Commands.add('getByData', (selector: string) => {
    return cy.get(`[data-test=${selector}]`);
});

/// <reference types="cypress" />

Cypress.Commands.add('pathname', (expectedpathname: string) => {
    return cy.location('pathname').should('eq', expectedpathname);
});
