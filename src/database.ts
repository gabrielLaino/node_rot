import { knex as stupKnex, Knex } from "knex";
import env from './env';

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL
  },
  useNullAsDefault: true,
  migrations: {
    directory: './src/db/migrations',
    extension: 'ts'
  }
}

export const knex = stupKnex(config);