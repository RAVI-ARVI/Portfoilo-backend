import mongoose from "mongoose";

export const connectDatabase = async () => {
    try {
        const dbhost = await mongoose.connect(`${process.env.MONGO_URI}/portfolio`)
        // console.log(`database connect successfully on ${dbhost.connection.}`)
        console.log('data base connected database successfully ')
        
    } catch (error) {
        console.log(`some thing went wrong while connecting the database ${error}`)
        
    }
}