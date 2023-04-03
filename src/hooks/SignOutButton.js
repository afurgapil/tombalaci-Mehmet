import React from "react";
import { useNavigate } from "react-router-dom";
//firebase
import { auth } from "../Firebase";
//mui
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { IconButton } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
function SignOutButton() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <IconButton
        onClick={handleSignOut}
        variant="contained"
        size="large"
        sx={{ bgcolor: red[500], color: "white" }}
      >
        <ExitToAppIcon></ExitToAppIcon>
      </IconButton>
    </div>
  );
}

export default SignOutButton;
