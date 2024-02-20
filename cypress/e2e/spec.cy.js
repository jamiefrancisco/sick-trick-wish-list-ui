describe('functionality for tricks displaying and adding', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', { fixture: 'tricks.json' }).as('getTricks');
    cy.visit('http://localhost:3000/');
  });

  it('ensures the form and its essential elements are present', () => {
    cy.get('form').should('exist');
    cy.get('form select[name="stance"]').should('exist');
    cy.get('form input[name="name"]').should('exist');
    cy.get('form select[name="obstacle"]').should('exist');
    cy.get('form input[name="tutorial"]').should('exist');
    cy.get('form button[type="submit"]').should('exist');
  });

  it('ensures the initial tricks are displayed correctly', () => {
    cy.wait('@getTricks');

    cy.get('.trick-card').first().within(() => {
      cy.get('h2').should('contain', 'goofy hardflip');
      cy.get('h3').should('contain', 'Obstacle: bank');
      cy.get('a').should('have.attr', 'href', 'https://www.youtube.com/watch?v=exampleHardflip');
    });

    cy.get('.trick-card').last().within(() => {
      cy.get('h2').should('contain', 'switch varial kickflip');
      cy.get('h3').should('contain', 'Obstacle: gap');
      cy.get('a').should('have.attr', 'href', 'https://www.youtube.com/watch?v=exampleVarialKickflip');
    });
  });
});

describe('functionality for adding new tricks into form and seeing the new tricks render on the page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', { fixture: 'tricks.json' }).as('getTricks');
    cy.visit('http://localhost:3000/');
    cy.wait('@getTricks');
  });

  it('ensures a user can add a new trick through the form and verifies it is displayed', () => {
    cy.get('select[name="stance"]').select('Regular').should('have.value', 'Regular');
    const trickName = 'Kickflip';
    cy.get('input[name="name"]').type(trickName).should('have.value', trickName);
    cy.get('select[name="obstacle"]').select('Rail').should('have.value', 'Rail');
    const tutorialLink = 'https://example.com/kickflip-tutorial';
    cy.get('input[name="tutorial"]').type(tutorialLink).should('have.value', tutorialLink);

    cy.get('form').submit();

    cy.get('.tricks-container').should('contain', trickName)
      .and('contain', 'Regular')
      .and('contain', 'Rail')
      .and('contain', tutorialLink);

  });
});
