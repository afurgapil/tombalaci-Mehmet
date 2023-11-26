const pool = require("../hooks/usePool");

module.exports = function updateStat(userId, game) {
  return new Promise((resolve, reject) => {
    const selectSql = `SELECT ${game} FROM stat WHERE user_id = ?`;
    const updateSql = `UPDATE stat SET ${game} = ? WHERE user_id = ?`;
    const selectAllSql = `SELECT * FROM stat WHERE user_id=?`;
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Failed to get MySQL connection: " + err.message);
        reject(err);
        return;
      }

      connection.query(selectSql, [userId], (queryErr, results) => {
        if (queryErr) {
          console.error("Error updating stat: " + queryErr.message);
          connection.release();
          reject(queryErr);
        } else {
          const actualStat = results[0][game];
          const newStat = actualStat + 1;
          connection.query(
            updateSql,
            [newStat, userId],
            (queryErr, results) => {
              if (queryErr) {
                console.error("Error updating stat: " + queryErr.message);
                reject(queryErr);
              } else {
                connection.query(
                  selectAllSql,
                  [userId],
                  (queryErr, results) => {
                    connection.release();
                    if (queryErr) {
                      console.error("Error updating stat: " + queryErr.message);
                      reject(queryErr);
                    } else {
                      resolve(results);
                    }
                  }
                );
              }
            }
          );
        }
      });
    });
  });
};
