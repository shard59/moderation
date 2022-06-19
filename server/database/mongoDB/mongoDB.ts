import { IDriver } from '../driver-interface'
import mongoose from 'mongoose'
import { databaseConstants } from '../database-constants'

class MongoDB implements IDriver {
    private db: mongoose.Connection;

    public async connect (): Promise<void> {
      try {
        const res = await mongoose.connect(String(process.env.MONGOURI), { useNewUrlParser: true, useUnifiedTopology: true })
        this.db = res.connection
        this.onConnect()
      } catch (err) {
        this.onError(err)
      }
    }

    private onConnect (): void {
      console.log(databaseConstants.ConnectionMsg)
    }

    private onError (error: mongoose.Error): void {
      console.log(error.message)
    }
}

export const driver = new MongoDB()
