import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "../style/hooks.scss";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
function DisplayNameUtils() {
  const [displayName, setDisplayName] = useState(null);
  const auth = getAuth();
  const user = auth.currentUser;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (user) {
      try {
        const userId = user.uid;
        const firestore = getFirestore();
        const userRef = doc(firestore, "users", userId);
        getDoc(userRef)
          .then((doc) => {
            if (doc.exists()) {
              const userData = doc.data();
              const upperName = userData.displayName.toUpperCase();
              setDisplayName(upperName);
            } else {
              console.log("Something went wrong :(");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

  return (
    <div>
      {displayName ? (
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            onMouseOver={handleClick}
            className="profile-name"
          >
            {displayName}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="stats">İstatistikler</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="swap">Takas</Link>
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default DisplayNameUtils;
