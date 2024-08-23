import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  // If database is already connected then dont connect again
  if (connected) {
    console.log("Mongo DB is Connected");
    return;
  }
  // If database not connected, try to connect again
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
