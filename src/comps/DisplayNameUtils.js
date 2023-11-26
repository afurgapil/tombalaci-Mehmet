import React, { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";
function DisplayNameUtils() {
  const [displayName, setDisplayName] = useState(null);
  const user = useUser();
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
      if (user.name) {
        const upperName = user.name.toUpperCase();
        setDisplayName(upperName);
      } else {
        setDisplayName(user.name);
      }
    }
  }, [user]);

  return (
    <div>
      {displayName ? (
        <div>
          <button
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            onMouseOver={handleClick}
            className="relative px-3 py-5 color text-white no-underline transition-all duration-200 p-0 font-[Teko] "
          >
            {displayName}
          </button>
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
              <Link to="stats">Stats</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="swap">Trade</Link>
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
