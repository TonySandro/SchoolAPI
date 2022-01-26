import express from 'express'
import { db } from './database/db'
import { router } from './routes'

const app = express()
const port = process.env.API_PORT

app.use(express.json())
app.use(router)

app.listen(port, async () => {
    await db.sync()
    console.log(`Server running on ${port}`)
})