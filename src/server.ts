import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

app.get('/', async () => {
  const test = await knex('sqlite_schema').select('*');

  return test
});

app.listen({
  port: 3003
}).then(() => {
  console.log('servidor rodando');
});