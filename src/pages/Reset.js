import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="flex flex-col justify-start pt-20 items-center w-full min-h-screen bg-bg">
      <Helmet>
        <title>Reset| Tombalaci Mehmet</title>
        <meta
          name="description"
          content="reset password page for the Tombalaci Mehmet"
        />
      </Helmet>
      <div className="flex flex-col justify-center items-center border-3 border-black border-solid w-3/5 p-4 rounded-md">
        <div className="w-4/5 text-center">
          <p className="font-bold text-5xl py-2">😡Hey!😡</p>
          <p>The Council did not like this move.</p>
          <p>Be more careful next time.</p>
          <p>There may not be a second chance...</p>
        </div>
        <form
          onSubmit={handleResetPassword}
          className="flex flex-col items-center justify-center w-full"
        >
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
          <div className="flex flex-row justify-center items-center">
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
