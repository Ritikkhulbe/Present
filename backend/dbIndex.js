import mongoose from "mongoose";

const DB_NAME = "YoutubeVideo";

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDB connected || HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error: ", error);
        process.exit(1);
    }
}

export {connectDB};
