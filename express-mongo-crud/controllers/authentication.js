const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../setupDB");

const JWT_SECRET = "your_jwt_secret";
const JWT_REFRESH_SECRET = "your_jwt_refresh_secret";

const registerAuthenticationControllers = (app) => {
  app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.sendStatus(201);
  });

  // Login
  app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.sendStatus(401);
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.sendStatus(401);

    const accessToken = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: "20m" });
    const refreshToken = jwt.sign({ username: user.username }, JWT_REFRESH_SECRET, { expiresIn: "1d" });

    res.json({ accessToken, refreshToken });
  });

  // Refresh Token
  app.post("/token", (req, res) => {
    const { token } = req.body;
    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_REFRESH_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: "20m" });
      res.json({ accessToken });
    });
  });
};

module.exports = { JWT_SECRET, JWT_REFRESH_SECRET, registerAuthenticationControllers };
