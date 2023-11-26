const crypto = require("crypto");

module.exports = function generateCode() {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(3, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        const code = buffer.readUIntBE(0, 3);
        const sixDigitCode = code % 1000000;
        resolve(sixDigitCode);
      }
    });
  });
};
