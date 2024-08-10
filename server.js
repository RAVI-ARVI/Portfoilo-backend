import { v2 as cloudinary } from 'cloudinary';
import app from "./app.js";

cloudinary.config({
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME
})
app.listen(process.env.PORT, () => {
    console.log(`server is listening on ${process.env.PORT}`)
})