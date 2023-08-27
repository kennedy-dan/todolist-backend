const mongoose = require("mongoose");
const env = require("dotenv");

exports.connect = () => {
  env.config();

  const uri = process.env.MONGO_URI;
  console.log(uri);

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
