import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ quiet: true });
const DataBaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL).then((res) => {
      console.log("DataBase Connected Successfully...!");
    });
  } catch (error) {
    console.log("Database Connect Error...!");
  }
};

export default DataBaseConnection;
