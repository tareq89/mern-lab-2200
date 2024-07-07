const mongoose = require("mongoose");

// Person Schema and Model

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

const personSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dateOfBirth: Date,
  address: String,
});

const Person = mongoose.model("Person", personSchema, "person");

const setupDB = () => {
  const db = mongoose.connection;
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
};

module.exports = {
  User,
  Person,
  setupDB,
};
