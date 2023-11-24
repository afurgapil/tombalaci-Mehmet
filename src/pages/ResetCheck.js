import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { USER_API } from "../urls";

const ResetCheck = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mail = searchParams.get("mail");

  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("");

  const handleResetCheck = async () => {
    try {
      const response = await fetch(USER_API.RESET_CHECK, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: mail,
          verificationCode: code,
          newPassword,
        }),
      });

      const data = await response.json();
      console.log(data);

      setMessage(data.error || data.message);
    } catch (error) {
      console.error("Error checking reset code:", error);
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex flex-col justify-start pt-8 items-center w-full min-h-screen bg-bg">
      <div className="flex flex-col justify-center items-center border-3 border-black border-solid w-3/5 p-4 rounded-md">
        <div className="w-4/5 text-center">
          <p className="font-bold text-5xl py-2">Reset Password</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleResetCheck();
          }}
          className="flex flex-col items-center justify-center w-full"
        >
          <TextField
            type="email"
            name="email"
            label="Email address"
            defaultValue={mail}
            disabled
            fullWidth
            margin="normal"
          />
          <TextField
            type="password"
            name="verificationCode"
            label="Verification Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            type="password"
            name="newPassword"
            label="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <div className="flex flex-row justify-center items-center">
            <Button
              variant="contained"
              type="submit"
              disabled={!code || !newPassword}
            >
              Set New Password
            </Button>
          </div>
        </form>
        {message && (
          <>
            <Alert severity="error" className="my-4">
              {message}
            </Alert>
            <Link to="/signin" className="bg-red-600 rounded text-white p-2 ">
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetCheck;
