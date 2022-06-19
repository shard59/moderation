import 'dotenv/config'
import express, { Express } from 'express'

import { database } from './database/database'
import { noop } from './utils/noop'

const app: Express = express()

async function start (): Promise<void> {
  app.listen(3000, () => console.log('Server runs'))
  await database.connect()
}

start().then(noop).catch(noop)
