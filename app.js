import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fileUpload from 'express-fileupload';
import { connectDatabase } from './database/database.js';
import { errorMiddleware } from './middlewares/error.js';

//routes import 

import messageRoutes from './router/messageRoutes.js';
import projectRouter from './router/projectRouter.js';
import skillRouter from './router/skillRouter.js';
import softwareApplicationRouter from './router/softwareApplicationRouter.js';
import timelineRouter from './router/timelineRoutes.js';
import userRoutes from './router/userRouters.js';
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


//Routes

app.use('/api/v1/message', messageRoutes)
app.use('/api/v1/user', userRoutes)
app.use("/api/v1/timeline", timelineRouter);
app.use("/api/v1/softwareapplication", softwareApplicationRouter);
app.use("/api/v1/skill", skillRouter);
app.use("/api/v1/project", projectRouter);


connectDatabase()


app.use(errorMiddleware)
export default app