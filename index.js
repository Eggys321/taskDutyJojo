require("dotenv/config");
const express = require("express");
const app = express();
const port = process.env.PORT || 6767;
const connect = require("./config/db");
const TASKS = require("./model/taskModel");
const taskRouter = require('./routes/taskRouter');
const cors = require('cors')

// middleware
app.use(cors())
app.use(express.json());

// API's

app.use('/api',taskRouter)





// server and DB
connect()
  .then(() => {
    try {
      app.listen(
        port,
        console.log(`server is connected to http://localhost:${port}`)
      );
    } catch (error) {
      console.log("cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection..!", error);
  });

// routes
app.get("/", function (req, res) {
  res.status(200).send("Hello World");
});

app.use((req, res) => {
  res.status(404).send("route not found");
});
