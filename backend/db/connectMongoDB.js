import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB is connected with the ${conn.connection.host}`);
    }
    catch(error) {
        console.log(`error connecting mongodb - ${error.message}` );
        process.exit(1);
    }
}


export default connectMongoDB;