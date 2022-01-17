describe('main page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('title text', () => {
    it('has the correct page title', () => {
      cy.title().should('equal', 'Logs Fechadura Digital');
    });
    it('has the correct header title', () => {
      cy.get('.toolbar span').should('contain.text', 'logs fechadura digital');
    });
  });
  describe('select properties', () => {
    it('has the correct select property', () => {
      cy.get('.mat-select-min-line').should('contain.text', 'ID do usuário');
    });
    it('has the correct select property', () => {
      cy.get('.mat-select-arrow-wrapper').click();
      cy.get('#mat-option-0').should('contain.text', 'ID da fechadura');
    });
  });

  describe('table properties', () => {
    it('has the correct header properties', () => {
      const allColumns = [
        'ID do Usuário',
        'Nome do usuário',
        'Tipo do Evento',
        'Estado da Fechadura',
        'Método de Abertura',
        'Data do Evento',
        'ID do Log',
        'Mac Adress',
      ];
      validateColumns('.mat-table thead th', allColumns);
    });
    it('has the correct header property when visualizing by lockId', () => {
      cy.get('.mat-select-arrow-wrapper').click();
      cy.get('#mat-option-0').click();
      cy.get('.mat-table thead th').should('contain.text', 'ID da fechadura');
    });
  });

  describe('filter properties', () => {
    it('it is not case sensitive', () => {
      cy.get('#mat-input-0').type('MARIA DOS SANTOS');
      cy.get('.cdk-column-userName').should('exist');
    });
    it('filters by userId', () => {
      cy.get('#mat-input-0').type('ffb2b0c8-c911-435e-b53d-1093aa774da1');
      cy.get('.cdk-column-userId').should('exist');
    });
    it('filters by lockId when visualizing table by lockId', () => {
      cy.get('.mat-select-arrow-wrapper').click();
      cy.get('#mat-option-0').click();
      cy.get('#mat-input-0').type('f062c159-749a-405d-88ec-55e54c783814');
      cy.get('.cdk-column-lockId').should('exist');
    });
    it('filters by mac adress when visualizing table by lockId', () => {
      cy.get('.mat-select-arrow-wrapper').click();
      cy.get('#mat-option-0').click();
      cy.get('#mat-input-0').type('74:D2:85:1D:64:D7');
      cy.get('.cdk-column-macAdress').should('exist');
    });
  });

  function validateColumns(columnsSelector: any, values: any[]) {
    cy.get(columnsSelector).should('have.length', values.length);
    for (let i = 0; i < values.length; i++) {
      cy.get(columnsSelector).eq(i).should('contain.text', values[i]);
    }
  }
});
