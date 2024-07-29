import mongoose from "mongoose";

const port = process.env.PORT || 3000;


const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB2");
  } catch (error) {
    console.log("Error connecting mongodb", error);
  }
}
export default connectMongoDB;