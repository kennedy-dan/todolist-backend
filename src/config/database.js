const mongoose = require("mongoose");
const env = require("dotenv");

exports.connect = () => {
  env.config();

  const uri = process.env.MONGO_URI;
  console.log(uri);
  // Connecting to the database
  // mongodb+srv://mom:<password>@cluster0.8gbdb.mongodb.net/?retryWrites=true&w=majority
  //localhost:27017/bill

  // mongodb+srv://mom:mommy@cluster0.8gbdb.mongodb.net/fintech?retryWrites=true&w=majority
  mongodb: mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
