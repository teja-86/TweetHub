import express from "express";

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

import dotenv from 'dotenv';
import connectMongoDB from './db/connectMongoDB.js';
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from 'cloudinary'
import postRoutes from './routes/post.routes.js'

dotenv.config();

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET

})

const app = express();
const PORT = process.env.PORT ||8000;


app.use(express.json()) // to parse the req.body
app.use(express.urlencoded({extended : true})) // to parse the form data
app.use(cookieParser()) // for cookie parser 


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

app.get('/', (req,res) => {
    res.send('server is ready')
})

app.listen(PORT, () => {
    console.log(`server is running on the port number ${PORT}`);
    connectMongoDB();
})


