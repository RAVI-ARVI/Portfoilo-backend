import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fileUpload from 'express-fileupload';
import { connectDatabase } from './database/database.js';
import { errorMiddleware } from './middlewares/error.js';
const app = express();

dotenv.config({ path: './config/config.env' })

app.use(cors({
    origin: [process.env.PORTFOLIO_URL, process.env.DASHBOARD_URL],
   credentials:true
    
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir:'/tmp/'
}))


connectDatabase()


app.use(errorMiddleware)
export default app