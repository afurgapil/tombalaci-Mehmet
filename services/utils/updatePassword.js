const pool = require("../hooks/usePool");

module.exports = async function updatePassword(userId, newPassword) {
  return new Promise((resolve, reject) => {
    try {
      const selectSql = "SELECT id FROM user WHERE id = ?";
      const updateSql = "UPDATE user SET password = ? WHERE id = ?";

      pool.getConnection((err, connection) => {
        if (err) {
          console.error("Failed to get MySQL connection: " + err.message);
          reject(err);
          return;
        }

        connection.query(selectSql, [userId], (queryErr, results) => {
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

          connection.query(
            updateSql,
            [newPassword, userId],
            (updateQueryErr, updateResults) => {
              connection.release();

              if (updateQueryErr) {
                console.error(
                  "Error updating user password: " + updateQueryErr.message
                );
                reject(updateQueryErr);
                return;
              }

              resolve({
                success: true,
                message: "User password  updated successfully.",
              });
            }
          );
        });
      });
    } catch (error) {
      console.error("Error getting database connection:", error);
      reject({
        success: false,
        message: "Failed to get database connection.",
      });
    }
  });
};
