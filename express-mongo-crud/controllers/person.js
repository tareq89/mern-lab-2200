const authenticateJWT = require("../middlewares/authenticateJWT");
const { Person } = require("../setupDB");

// Routes
// List all persons
const registerPersonControllers = (app) => {
  app.get("/persons", authenticateJWT, async (req, res) => {
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
  app.get("/persons/:id", authenticateJWT, async (req, res) => {
    try {
      const person = await Person.findById(req.params.id);
      if (!person) return res.status(404).send("Person not found");
      res.json(person);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  // Create a new person
  app.post("/persons", authenticateJWT, async (req, res) => {
    try {
      const newPerson = new Person(req.body);
      const savedPerson = await newPerson.save();
      res.status(201).json(savedPerson);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  // Update a person
  app.put("/persons/:id", authenticateJWT, async (req, res) => {
    try {
      const updatedPerson = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedPerson) return res.status(404).send("Person not found");
      res.json(updatedPerson);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  // Delete a person
  app.delete("/persons/:id", authenticateJWT, async (req, res) => {
    try {
      const deletedPerson = await Person.findByIdAndDelete(req.params.id);
      if (!deletedPerson) return res.status(404).send("Person not found");
      res.json(deletedPerson);
    } catch (error) {
      res.status(500).send(error);
    }
  });
};

module.exports = registerPersonControllers;
