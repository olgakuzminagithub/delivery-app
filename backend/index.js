import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routers/Router.js';


const PORT = 5000; 
const DB_URL = 'mongodb+srv://olgakuzmina1989:hO65cgy7EuhhH9lq@cluster0.avu2ztv.mongodb.net/?retryWrites=true&w=majority';


const app = express()

app.use(cors());
app.use(express.json())
app.use('/api', router)


async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('Server started on port ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp();

