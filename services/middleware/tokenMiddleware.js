const tokenControl = require("../utils/tokenControl");

module.exports = function tokenMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const email = req.body.email;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Token missing" });
  }

  const tokenResult = tokenControl(email, token);

  if (tokenResult.valid) {
    req.user = tokenResult.payload;
    next();
  } else {
    return res.status(403).json({ error: "Invalid token" });
  }
};
