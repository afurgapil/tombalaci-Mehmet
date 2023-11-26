import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Helmet } from "react-helmet";
import { USER_API } from "../urls";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRequestReset = async (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    try {
      setLoading(true);

      const response = await fetch(USER_API.RESET_REQUEST, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error requesting password reset:", error);
      setMessage("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
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
          onSubmit={handleRequestReset}
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
            <Button variant="contained" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Reset Password"}
            </Button>
          </div>
        </form>
        {message && <Alert severity="error">{message}</Alert>}
      </div>
    </div>
  );
};

export default Reset;
