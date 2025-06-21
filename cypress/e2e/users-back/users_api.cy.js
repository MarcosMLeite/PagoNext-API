import { GerarIdentifier } from '../../support/IdentifierName';
import { baseUrlUsers } from '../../support/BaseUrl';
import { gerarEmailUnico } from '../../support/GerarEmail';

const email = gerarEmailUnico();
const name = GerarIdentifier();
let userId = null;

describe('Testes completos de API /users', () => {

  it('Deve listar os usuários - GET', () => {
    cy.request({
      method: 'GET',
      url: baseUrlUsers(),
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(200)
    })
  })

  it('Deve criar um novo usuário - POST', () => {
    cy.request({
      method: 'POST',
      url: baseUrlUsers(),
      failOnStatusCode: false,
      body: {
        name: 'teste ' + name,
        email: email,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log(response);

      if (response.status === 409) {
        throw new Error('Usuário já existe. E-mail em uso.');
      }

      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.name).to.eq('teste ' + name);
      expect(response.body.email).to.eq(email);

      userId = response.body.id;
    })
  })


  it('Deve atualizar o usuário criado - PUT', () => {
    const novoNome = `atualizado-${name}`;
    const novoEmail = gerarEmailUnico();

    cy.request({
      method: 'PUT',
      url: `${baseUrlUsers()}${userId}`,
      body: {
        name: novoNome,
        email: novoEmail,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(200)

    })
  })

  it('Deve deletar o usuário criado - DELETE', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrlUsers()}${userId}`,
    }).then((response) => {
      console.log(response)
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('User deleted successfully.')
    })
  })

})
