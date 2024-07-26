const mongoose = require("mongoose");
const colors = require("colors");

const MONGODB_URI= "mongodb+srv://sumbamraj3:hkiKH2PDvGZKmt3f@sbmraj03.o57fi0j.mongodb.net/ChatVoxDB";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);

     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;
