const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const { createToken, verifyToken,authenticateToken } = require('./utils/jwt');

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
app.post("/signup", async (req, res) => {
  const { name, email, password, accessToken } = req.body;
  try {
    await UserModel.create({ name, email, password, accessToken });
    res.json("Success");
  } catch (err) {
    res.json(err);
  }
});



//Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      if (user.password === password) {
        const token = createToken(user);
        res.json({ Status: "Success", token });
      } else {
        res.json("The password is incorrect");
      }
    } else {
      console.log("No record exists..");
      res.json("No record exists...");
    }
  } catch (err) {
    res.status(500).json("An error occurred: " + err);
  }
});

// Token verification endpoint
// Verify Token
app.get("/verifyToken", (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      console.error('Authorization header missing');
      return res.status(403).json({ valid: false, message: "No token provided" });
    }

    const token = authHeader.split(' ')[1]; 
    if (!token) {
      console.error('Token missing in authorization header');
      return res.status(403).json({ valid: false, message: "No token provided" });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      console.error('Failed to verify token');
      return res.status(403).json({ valid: false, message: "Failed to authenticate token" });
    }

    res.json({ valid: true, user: decoded });
  } catch (error) {
    console.error('Error in /verifyToken endpoint:', error);
    res.status(500).json({ valid: false, message: "Internal server error" });
  }
});


// plaid Configuration

app.use("/tokens",)

//Testing protected route
app.get('/home', authenticateToken, (req, res) => {
  res.json("This is a protected route");
});
// server port setup


const PORT = 3001;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log("Server is Running " + PORT);
});
