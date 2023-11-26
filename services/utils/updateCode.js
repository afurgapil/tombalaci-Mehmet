const pool = require("../hooks/usePool");

module.exports = async function updateCode(userId, code) {
  return new Promise((resolve, reject) => {
    try {
      const selectSql = "SELECT id FROM user WHERE id = ?";
      const updateSql = "UPDATE user SET verificationCode = ?   WHERE id = ?";

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
            [code, userId],
            (updateQueryErr, updateResults) => {
              connection.release();

              if (updateQueryErr) {
                console.error(
                  "Error updating user verification status: " +
                    updateQueryErr.message
                );
                reject(updateQueryErr);
                return;
              }

              resolve({
                success: true,
                message: "User verification status updated successfully.",
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
