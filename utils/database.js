import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  try {
    mongoose.set("strictQuery", true);
  } catch (error) {
    console.log(error);
  }
  if (isConnected) {
    console.log("mangoDB connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGOOSE_URL, {
      dbName: "Share_prompt",
    });
    isConnected = true;
    console.log("mangoDB connected");
  } catch (error) {
    console.log(error);
  }
};
