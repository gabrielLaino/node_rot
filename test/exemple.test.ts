import {expect, test, beforeAll, afterAll} from 'vitest';
import request from 'supertest';
import { app } from '../src/app';

beforeAll(async () => {
  await app.ready();
});

afterAll(async () => {
  await app.close();
});

test("o usuario consegue criar uma nova transação", async () => {
  const response = await request(app.server).post('/transactions').send({
    title: 'transacao de test',
    amount: 100,
    type: 'credit'
  });

  expect(response.statusCode).toEqual(201);
});