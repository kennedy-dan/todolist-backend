const env = require("dotenv");

require("./src/config/database").connect();
const express = require("express");

const cors = require("cors");
const app = express()

//import routes
const todosRoute = require('./src/routes/list') 

app.use(cors());
app.use(express.json());

env.config()

app.use('/api', todosRoute)


const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
