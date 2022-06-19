import { IDatabase } from './database-interface'
import { IDriver } from './driver-interface'
import { driver } from './mongoDB/mongoDB'

class Database implements IDatabase {
  constructor (private readonly driver: IDriver) {}

  public async connect (): Promise<void> {
    await this.driver.connect()
  }
}

export const database = new Database(driver)
