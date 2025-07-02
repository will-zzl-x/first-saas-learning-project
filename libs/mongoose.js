import mongoose from "mongoose";
import User from "@/models/User";
import Board from "@/models/Board";

const connectMongo = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
  } catch (e) {
    console.error("Mongoose Error: " + e.message);
  }
};

export default connectMongo;
// This function connects to the MongoDB database using Mongoose.
// It reads the connection URI from the environment variable MONGO_URI.
// If an error occurs during the connection, it logs the error message to the console. // The function is exported as the default export of the module.
// This allows other parts of the application to import and use the connectMongo function to establish a connection to the database.
// The connection is established using the mongoose.connect method, which takes the MONGO_URI as an argument.
