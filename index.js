import express from 'express'
import mongoose from 'mongoose'
import router from './routers/router.js'

const PORT = 6000
const URL = 'mongodb+srv://coldworld777:spellcraft1997@cluster0.xxcx85u.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use('/', router)

app.post('/pull', )

async function startApp() {
    try {
        await mongoose.connect(URL)
        app.listen(PORT, () => console.log('started on ', PORT))

    } catch (error) {
        console.log(error);
    }
}


startApp()