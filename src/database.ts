import { knex as stupKnex } from "knex";

export const config = {
  client: 'sqlite',
  connection: {
    filename: './temp/app.db'
  },
  useNullAsDefault: true
}

export const knex = stupKnex(config);