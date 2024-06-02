const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mockData = require("./mockData");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(
  process.env.MONGODB_URI ||
    // "mongodb+srv://tareqazizaustcse:VPxG9j49XWie3qnP@cluster0.qbn1fpg.mongodb.net/testMongo?retryWrites=true&w=majority&appName=Cluster0",
    "mongodb+srv://tanjir238:eG6WbARmfURDCfmy@cluster0.vfywo2m.mongodb.net/testMongo?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
// Person Schema and Model
const personSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dateOfBirth: Date,
  address: String,
});

const Person = mongoose.model("Person", personSchema, "person");

// Check if the connection is successful
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async function () {
  console.log("Connected to MongoDB");

  // Check if the 'persons' collection exists, if not create it with mock data
  const collections = await mongoose.connection.db.listCollections().toArray();
  const personCollection = collections.find((c) => c.name === "person");

  console.log(personCollection);
  if (!personCollection) {
    const Person = mongoose.model("Person", personSchema);
    await Person.insertMany(mockData);
    console.log("Mock data inserted into persons collection");
  }
});

// Routes
// List all persons
app.get("/persons", async (req, res) => {
  try {
    const query = {};
    Object.keys(req.query).forEach((key) => {
      if (req.query[key]) {
        query[key] = { $regex: req.query[key], $options: "i" };
      }
    });
    const persons = await Person.find(query);
    res.json(persons);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get person by ID
app.get("/persons/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) return res.status(404).send("Person not found");
    res.json(person);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create a new person
app.post("/persons", async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update a person
app.put("/persons/:id", async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPerson) return res.status(404).send("Person not found");
    res.json(updatedPerson);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a person
app.delete("/persons/:id", async (req, res) => {
  try {
    const deletedPerson = await Person.findByIdAndDelete(req.params.id);
    if (!deletedPerson) return res.status(404).send("Person not found");
    res.json(deletedPerson);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
