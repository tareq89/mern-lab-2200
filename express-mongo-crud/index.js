const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const mockData = require("./mockData");

const { setupDB } = require("./setupDB");
const registerPersonControllers = require("./controllers/person");
const { registerAuthenticationControllers } = require("./controllers/authentication");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://tareqazizaustcse:VPxG9j49XWie3qnP@cluster0.qbn1fpg.mongodb.net/testMongo?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

setupDB();
registerAuthenticationControllers(app);
registerPersonControllers(app);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
