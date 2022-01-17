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
    it('has the correct select propery when visualizing by lockId', () => {
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
  });

  function validateColumns(columnsSelector: any, values: any[]) {
    cy.get(columnsSelector).should('have.length', values.length);
    for (let i = 0; i < values.length; i++) {
      cy.get(columnsSelector).eq(i).should('contain.text', values[i]);
    }
  }
});
