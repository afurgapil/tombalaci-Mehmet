import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/reset.scss";
//firebase
import { auth } from "../Firebase";
import { sendPasswordResetEmail } from "firebase/auth";
//mui
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import LoginIcon from "@mui/icons-material/Login";
import { Helmet } from "react-helmet";
const Reset = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessMessage(
          "An email to reset your password has been sent to your email address."
        );
        setErrorMessage("");
        setEmail("");
        setIsVerified(true);
      })
      .catch((error) => {
        const userNotFound = "User not found :/";
        const fberror1 = "Firebase: Error (auth/user-not-found).";
        if (error.message === fberror1) {
          setErrorMessage(userNotFound);
        } else {
          setErrorMessage(error.message);
        }
        setSuccessMessage("");
      });
  };

  return (
    <div id="reset-container">
      <Helmet>
        <title>Reset| Tombalaci Mehmet</title>
        <meta
          name="description"
          content="reset password page for the Tombalaci Mehmet"
        />
      </Helmet>
      <div id="reset-container-items">
        <div id="reset-text">
          <p className="bold">😡Hey!😡</p>
          <p>The Council did not like this move.</p>
          <p>Be more careful next time.</p>
          <p>There may not be a second chance...</p>
        </div>
        <form onSubmit={handleResetPassword} id="reset-form">
          <TextField
            type="email"
            name="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <div id="button-container">
            <Button variant="contained" type="submit">
              Reset Password
            </Button>
            {isVerified ? (
              <Link to="/signin">
                <Button
                  className="button"
                  variant="contained"
                  color="secondary"
                  startIcon={<LoginIcon />}
                >
                  Sign In
                </Button>
              </Link>
            ) : null}
          </div>
        </form>
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </div>
    </div>
  );
};

export default Reset;
