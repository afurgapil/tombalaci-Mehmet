import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

//mui
import { red } from "@mui/material/colors";
import { IconButton } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
function SignOutButton() {
  const navigate = useNavigate();
  const { signout } = useContext(UserContext);
  const handleSignout = () => {
    signout();
    navigate("/signin");
  };
  return (
    <div>
      <IconButton
        onClick={handleSignout}
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
