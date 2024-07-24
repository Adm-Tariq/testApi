import mongoose, { Mongoose } from "mongoose";
import express from 'express'
import cors from 'cors'
import contraction from "./config/contraction.js";

import coursesRoute from './routers/coursesRoute.js'


const app = express()
const port = 3000
contraction()
app.use(express.json())

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))




app.use('/api/courses', coursesRoute)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

mongoose.connection.once('open', () => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
    console.log('Connected DB');
})