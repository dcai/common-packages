const request = require('supertest');
const app = require('./app');

describe('express app', () => {
  beforeEach(() => {});

  test('GET /', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '15')
      .expect(200);
    const { body } = response;
    expect(body.status).toEqual('ok');
  });
});
