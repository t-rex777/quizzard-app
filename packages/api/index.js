require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT =  process.env.PORT || 4000;
const app = express();

//middlewares
app.use(bodyParser.json());
app.use(cors());

const uri = process.env.URI;

// connecting to server
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("DB CONNECTED!!!!!!!!!!!"))
  .catch((err) => console.log(err));

// middlewares
app.use(bodyParser.json());
app.use(cors());

// default page
app.get("/", (req, res) => {
  res.send("I am John Doe!!");
});

// // wrong route
// app.get("*",(req,res)=>{
//  res.status(500).send("invalid route! please check your route again!")
// })

// routes
const quizRoutes = require("./routes/quiz");
const userRoutes = require("./routes/user");

// API
app.use("/api", quizRoutes);
app.use("/api", userRoutes);

// listen
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port : ${PORT}`);
});
