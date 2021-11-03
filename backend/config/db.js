import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://User0:User0Password@cluster0.pocsb.mongodb.net/test?authSource=admin&replicaSet=atlas-114xkw-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.log("MongoDB connection FAIL");
        process.exit(1);
    }
}

export default connectDB;