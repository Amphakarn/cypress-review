/// <reference types="cypress" />

describe('Locators', () => {
  beforeEach(() => {
    cy.visit('/elements'); // pick up url based on the "baseUrl" key in cypress.json file
  });

  it('locating elements with get', () => {});
});

//test
