const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const tokens = require('./routes/tokens');

// const port =3001;
const UserModel = require("./models/User");

const http = require("http");
const app = express();
app.use(express.json());
app.use(
  cors({
    //Link of the main origin from where it can be requested
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());

//DataBase connection
mongoose.connect(
  "mongodb+srv://saikrishnachintha06:sai123krishna@cluster0.i1yyaz8.mongodb.net/xeon?retryWrites=true&w=majority&appName=Cluster0"
);
console.log("mongodb connected");

//Registration
app.post("/signup", (req, res) => {
  const { name, email, password, accessToken } = req.body;
  UserModel.create({ name, email, password, accessToken })
    .then((user) => res.json("Success"))
    .catch((err) => res.json(err));
});

//Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({ Status: "Success" });
      } else if (user.password !== password) {
        return res.json("The password is incorrect");
      }
    } else if (!user) {
      console.log("No record exists..");
      return res.json("No record exists...");
    }
  });
});


// plaid Configuration

app.use("/tokens",)



// server port setup


const PORT = 3001;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log("Server is Running " + PORT);
});
