const pool = require("../hooks/usePool");

module.exports = function getUser(type, value) {
  return new Promise((resolve, reject) => {
    const selectSql = `SELECT * FROM user WHERE ${type} = ?`;

    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Failed to get MySQL connection: " + err.message);
        reject(err);
        return;
      }

      connection.query(selectSql, [value], (queryErr, results) => {
        if (queryErr) {
          connection.release();
          console.error("Error querying user: " + queryErr.message);
          reject(queryErr);
          return;
        }

        if (results.length === 0) {
          connection.release();
          reject(new Error("User not found"));
          return;
        }

        const user = results[0];
        resolve(user);
      });
    });
  });
};
