const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../controllers/authentication");

// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.sendStatus(403);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    console.log("token ", token);
    console.log("JWT_SECRET ", JWT_SECRET);
    console.log(err);
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;
