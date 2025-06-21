import { baseUrlTicket } from '../../support/BaseUrl';

describe('Validar ID tickets', () => {
  it('Deve retornar status 200', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrlTicket()}2`,
    }).then((response) => {
      console.log(response)
      expect(response.status).to.eq(200)
    })
  })
})

describe('Validar atualizar tickets', () => {
  it('Retornar status 200 e exibir o response', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrlTicket()}6/status`,
      body: {
        status: 'In Progress',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log(response)
      expect(response.status).to.eq(200)
    });
  });
});

describe('Validar criar e deletar Ticket', () => {
  let ticketId;

  it('Criar um novo ticket e armazenar o ID', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrlTicket()}`,
      body: {
        userId: 1,
        description: "My internet is not working.",
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      expect(response.status).to.eq(201)
      ticketId = response.body.id;
    })
  })

  it('Deletar o ticket criado', () => {
    cy.wrap(null).then(() => {

      cy.request({
        method: 'DELETE',
        url: `${baseUrlTicket()}${ticketId}`,
      }).then((response) => {
        console.log(response)
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Ticket deleted successfully.')
      })
    })
  })
})
