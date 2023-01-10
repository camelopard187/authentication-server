import {
  Info,
  AbstractMigration,
  ClientPostgreSQL
} from 'https://deno.land/x/nessie@2.0.10/mod.ts'

export default class extends AbstractMigration<ClientPostgreSQL> {
  async up(_: Info): Promise<void> {
    await this.client.queryArray(`
      CREATE TABLE IF NOT EXISTS users (
        id       TEXT NOT NULL PRIMARY KEY,
        email    TEXT NOT NULL,
        name     TEXT NOT NULL,
        password TEXT NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS tokens (
        id            TEXT NOT NULL PRIMARY KEY,
        user_id       TEXT NOT NULL,
        refresh_token TEXT NOT NULL
      );
    `)
  }

  async down(_: Info): Promise<void> {
    await this.client.queryArray(`
      DROP TABLE IF EXISTS tokens;

      DROP TABLE IF EXISTS users;
    `)
  }
}
