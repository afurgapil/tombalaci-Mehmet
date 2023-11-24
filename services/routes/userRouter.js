/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const pool = require("../hooks/usePool");
//utils
const updateScore = require("../utils/updateScore");
const updateStat = require("../utils/updateStat");
const useUser = require("../utils/useUser");
const generateCode = require("../utils/generateCode");
const updateCode = require("../utils/updateCode");
const updatePassword = require("../utils/updatePassword");
const resetMail = require("../mailOptions/reset");
const sendMail = require("../utils/sendMail");
dotenv.config();

const secretKey = process.env.SECRET_KEY;
const table = "user";
router.post("/signup", async (req, res) => {
  try {
    console.log(table);
    const { name, lastname, email, password } = req.body;
    const sqlInsertUser = `INSERT INTO ${table} (name, lastname, email, password) VALUES (?, ?, ?, ?)`;
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Failed to get MySQL connection: " + err.message);
        return res
          .status(500)
          .json({ error: "Failed to get database connection." });
      }
      connection.query(
        sqlInsertUser,
        [name, lastname, email, password, 0],
        (queryErr, results) => {
          console.log(queryErr);
          if (queryErr) {
            console.error(
              "Error adding a record to the user table: " + queryErr.message
            );
          } else {
            res.status(201).json({
              message: "User saved succesfully",
            });
          }
        }
      );
    });
  } catch (error) {
    console.error("An unexpected error occurred: " + error.message);
    res.status(500).json({ error: "Error adding a register" });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const selectUserSql = `SELECT * FROM user WHERE email = ?`;
    const selectStatSql = `SELECT * FROM stat WHERE user_id = ?`;
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Failed to get MySQL connection: " + err.message);
        return res
          .status(500)
          .json({ error: "Failed to get database connection." });
      }

      connection.query(selectUserSql, [email], (queryErr, userResults) => {
        if (queryErr) {
          connection.release();
          console.error(
            "An error occurred while querying user: " + queryErr.message
          );
          return res.status(500).json({ error: "Failed to sign in." });
        }

        if (userResults.length === 0) {
          connection.release();
          return res.status(401).json({ error: "User Not Found." });
        }

        const user = userResults[0];
        if (user.password !== password) {
          connection.release();
          return res.status(401).json({ error: "Wrong Password." });
        }

        connection.query(selectStatSql, [user.id], (queryErr, statResults) => {
          if (queryErr) {
            connection.release();
            console.error(
              "An error occurred while querying user: " + queryErr.message
            );
            return res.status(500).json({ error: "Failed to sign in." });
          }
          const token = jwt.sign({ email }, secretKey);
          console.log("Logined successfully");
          res.status(201).json({
            user,
            score: userResults[0].score,
            stats: {
              correctCoinFlip: statResults[0].correctCoinFlip,
              correctDice: statResults[0].correctDice,
              correctJackpot: statResults[0].correctJackpot,
              correctRoulette: statResults[0].correctRoulette,
              correctRps: statResults[0].correctRps,
              correctSlot: statResults[0].correctSlot,
            },
            token,
          });
        });
      });
    });
  } catch (error) {
    console.error("An unexpected error occurred: " + error.message);
    res.status(500).json({ error: "Failed to sign in." });
  }
});

router.get("/get/score/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sql = `SELECT score FROM user WHERE id = ?`;
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Failed to get MySQL connection: " + err.message);
        return res
          .status(500)
          .json({ error: "Failed to get database connection." });
      }

      connection.query(sql, [id], (queryErr, results) => {
        connection.release();

        if (queryErr) {
          console.error(
            "An error occurred while querying: " + queryErr.message
          );
          return res.status(500).json({ error: "Failed to sign in." });
        }
        res.status(200).json(results[0]);
      });
    });
  } catch (error) {
    console.error("An unexpected error occurred: " + error.message);
    res.status(500).json({ error: "Failed to sign in." });
  }
});
router.get("/get/scoreboard/", async (req, res) => {
  try {
    const sql = `SELECT id,name,score  FROM user ;
`;
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Failed to get MySQL connection: " + err.message);
        return res
          .status(500)
          .json({ error: "Failed to get database connection." });
      }

      connection.query(sql, (queryErr, results) => {
        connection.release();

        if (queryErr) {
          console.error(
            "An error occurred while querying: " + queryErr.message
          );
          return res.status(500).json({ error: "Failed to sign in." });
        }
        res.status(200).json({ results });
      });
    });
  } catch (error) {
    console.error("An unexpected error occurred: " + error.message);
    res.status(500).json({ error: "Failed to sign in." });
  }
});
router.put("/set/score", async (req, res) => {
  try {
    const { userId, value } = req.body;
    const result = await updateScore(userId, value);
    if (result) {
      res
        .status(200)
        .json({ message: "Score updated successfully.", result: result });
    } else {
      res.status(500).json({ error: "Failed to update score" });
    }
  } catch (error) {
    console.error("An unexpected error occurred: " + error.message);
    res.status(500).json({ error: "Error updating score" });
  }
});
router.put("/set/stat", async (req, res) => {
  try {
    const { userId, game } = req.body;
    const result = await updateStat(userId, game);
    if (result) {
      res
        .status(200)
        .json({ message: "Score updated successfully.", result: result });
    } else {
      res.status(500).json({ error: "Failed to update score" });
    }
  } catch (error) {
    console.error("An unexpected error occurred: " + error.message);
    res.status(500).json({ error: "Error updating score" });
  }
});
router.put("/reset-password/request", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Invalid request body." });
    }
    try {
      const user = await useUser("email", email);
      if (user) {
        const code = await generateCode();
        const updateResult = await updateCode(user.id, code);
        if (updateResult.success) {
          try {
            const mailOptions = resetMail(email, code);
            await sendMail(mailOptions);
            res.status(200).json({
              message: "Reset password instructions sent to your email.",
            });
          } catch (error) {
            console.log(error);
            res.status(404).json({
              message: error,
            });
          }
        } else {
          res
            .status(500)
            .json({ message: "Error updating verification code and status." });
        }
      } else {
        res.status(404).json({ message: "User not found." });
      }
    } catch (error) {
      res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    console.error("An unexpected error occurred: " + error.message);
    res.status(500).json({ error: "Error resetting the password." });
  }
});
router.put("/reset-password/check", async (req, res) => {
  const { email, verificationCode, newPassword } = req.body;

  if (!email || !verificationCode || !newPassword) {
    return res.status(400).json({ error: "Invalid request body." });
  }

  try {
    const user = await useUser("email", email);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    if (user.verificationCode == verificationCode) {
      const bool = await updatePassword(user.id, newPassword);
      console.log(bool);
      if (bool.success) {
        return res
          .status(200)
          .json({ error: "Password updated successfully." });
      } else {
        return res
          .status(500)
          .json({ error: "Ann unexpected error occurred." });
      }
    } else {
      return res.status(401).json({ error: "Invalid verification code." });
    }
  } catch (error) {
    console.error("An unexpected error occurred: " + error.message);
    return res.status(500).json({ error: "An unexpected error occurred." });
  }
});
module.exports = router;
