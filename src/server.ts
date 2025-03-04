import fastify from "fastify";
import { knex } from "./database";
import crypto from 'node:crypto';

const app = fastify();

app.get('/', async () => {
  const transactions = await knex('transactions').select('*')

  return transactions;
});

app.listen({
  port: 3003
}).then(() => {
  console.log('servidor rodando');
});