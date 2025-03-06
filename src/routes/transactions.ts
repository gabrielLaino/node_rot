import { FastifyInstance } from "fastify";
import {z} from 'zod';
import { knex } from "../database";
import { title } from "process";
import crypto from 'node:crypto';

export const transactionsRoutes = async (app: FastifyInstance) => {
  app.post('/', async (req, res) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit'])
    });

    const {title, amount, type} = createTransactionBodySchema.parse(req.body);

    await knex('transactions').insert({
      id: crypto.randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
      type
    });

    res.status(201).send('feito');
  });
}
