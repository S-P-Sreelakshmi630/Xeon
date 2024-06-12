const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const { createToken, verifyToken,authenticateToken } = require('./utils/jwt');

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

const { Configuration, PlaidApi, PlaidEnvironments } = require("plaid");

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET,
    },
  },
});

const plaidclient = new PlaidApi(configuration);

app.post("/create_link_token", async function (req, res) {
  // Get the client_user_id by searching for the current user
  /* const clientUser = null;
  const { email} = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      clientUser = user.email;
    }
  }); */

  const request = {
    user: {
      // This should correspond to a unique id for the current user.
      client_user_id: "user",
    },
    client_name: "Plaid Test App",
    products: ["auth"],
    language: "en",
    redirect_uri: "http://localhost:3000/",
    country_codes: ["US"],
  };
  try {
    const createTokenResponse = await plaidclient.linkTokenCreate(request);
    res.json(createTokenResponse.data);
  } catch (error) {
    res.status(500).send("failure");
    // handle error
  }
});

app.post("/exchange_public_token", async function (req, res, next) {
  const publicToken = req.body.public_token;
  try {
    const response = await plaidclient.itemPublicTokenExchange({
      public_token: publicToken,
    });

    // These values should be saved to a persistent database and
    // associated with the currently signed-in user
    const accessToken = response.data.access_token;
    res.json({ accessToken });
  } catch (error) {
    // handle error
    res.status(500).send("Failed to access token: " + error.message);
  }
});

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
