import express from 'express'
import { gradesModel } from './database/models/gradesModel'
import { studentModel } from './database/models/studentModel'
import { router } from './routes'

const app = express()
const port = process.env.API_PORT

app.use(express.json())
app.use(router)

app.listen(port, async () => {
    await studentModel.sync()
    await gradesModel.sync()
    console.log(`Server running on ${port}`)
})