const pool = require("../hooks/usePool");

module.exports = function updateScore(userId, value) {
  return new Promise((resolve, reject) => {
    const selectSql = `SELECT * FROM user WHERE id = ?`;
    const updateSql = `UPDATE user SET score = ? WHERE id = ?`;
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Failed to get MySQL connection: " + err.message);
        reject(err);
        return;
      }

      connection.query(selectSql, [userId], (queryErr, results) => {
        if (queryErr) {
          console.error("Error updating score: " + queryErr.message);
          connection.release();
          reject(queryErr);
        } else {
          const actualScore = results[0].score;
          const newScore = actualScore + value;
          connection.query(
            updateSql,
            [newScore, userId],
            (queryErr, results) => {
              // console.log(results);
              connection.release();
              if (queryErr) {
                console.error("Error updating score: " + queryErr.message);
                reject(queryErr);
              } else {
                resolve(newScore);
              }
            }
          );
        }
      });
    });
  });
};
