const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.SECRET_KEY;

module.exports = function tokenControl(email, token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    if (decoded.email === email) {
      return { valid: true, payload: decoded };
    }
  } catch (error) {
    return { valid: false, error: error.message };
  }
};
