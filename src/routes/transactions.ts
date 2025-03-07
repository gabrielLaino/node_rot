import { FastifyInstance } from "fastify";
import {z} from 'zod';
import { knex } from "../database";
import { title } from "process";
import crypto from 'node:crypto';

export const transactionsRoutes = async (app: FastifyInstance) => {
  app.get('/', async (req, res) => {
    const transactions = await knex('transactions').select('*');

    return res.status(200).send({transactions})
  });

  app.get('/:id', async (req, res) => {
    const getTransactionParamsSchema = z.object({
      id: z.string().uuid()
    });

    const {id} = getTransactionParamsSchema.parse(req.params);

    const transaction = await knex('transactions').where('id', id).first();

    return res.status(200).send({transaction});
  });

  app.get('/summary', async (req, res) => {
    const summary = await knex('transactions').sum('amount', {
      as: 'amount'
    }).first();

    return res.status(200).send({summary})
  });

  app.post('/', async (req, res) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit'])
    });

    const {title, amount, type} = createTransactionBodySchema.parse(req.body);

    let sessionId = req.cookies.sessionId

    if(!sessionId) {
      sessionId = crypto.randomUUID()
      res.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      })
    }

    await knex('transactions').insert({
      id: crypto.randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
      session_id: sessionId
    });

    res.status(201).send('feito');
  });
}
