import { knex as stupKnex } from "knex";

export const knex = stupKnex({
  client: 'sqlite',
  connection: {
    filename: './temp/app.db'
  }
});