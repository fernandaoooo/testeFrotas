//importação das bibliotecas
const {test,it,expect, describe} = require ('@jest/globals');
const request = require ("supertest");

//carrega as variaveis para o projeto
require('dotenv').config();

//organiza os testes em um bloco
describe("Teste de Integração - Secretaria Frotas", () => {
    const BASE_URL = process.env.API_BASE_URL;
    const API_USER = process.env.API_USER;
    const API_PASS = process.env.API_PASS;
    const req = request(BASE_URL);
    let token;
//caso de teste
    it("Deve autenticar na API", async () => {
        const dados = await req
        .post('/login')
        .send({
            credencial: API_USER,
            senha: API_PASS
        })
        .set('Accept','application/json');
        console.log('Status login', dados.statusCode, '\nLogin body:', dados.body)

    });
})