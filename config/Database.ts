import mongoose from 'mongoose';

let connected:boolean = false;
const connectDB = async () => {
    mongoose.set('strictQuery', true);

    if(connected){
        console.log("Mongo DB is already to use!");
        return;
    }

    try {
        // @ts-ignore
        await mongoose.connect(process.env.MONGO_URL);
        connected = true;
        console.log("Mongo DB is successfully Connected");
    }catch (err){
        console.log(err);
    }
}

export default connectDB;