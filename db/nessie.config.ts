import {
  ClientPostgreSQL,
  NessieConfig
} from 'https://deno.land/x/nessie@2.0.10/mod.ts'
import 'https://deno.land/std@0.171.0/dotenv/load.ts'

const url = Deno.env.get('DATABASE_URL')

const client = new ClientPostgreSQL(url)

const config: NessieConfig = {
  client,
  migrationFolders: ['./migrations'],
  seedFolders: ['./seeds']
}

export default config
