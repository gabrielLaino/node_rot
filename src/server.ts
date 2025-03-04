import fastify from "fastify";

const app = fastify();

app.get('/', () => {
  return 'Hollo'
});

app.listen({
  port: 3003
}).then(() => {
  console.log('servidor rodando');
});