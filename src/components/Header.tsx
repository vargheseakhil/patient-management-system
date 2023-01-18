import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { LOGOUT_LABEL } from "../constants/strings";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/logout";
import Logo from '../assets/orion_logo.png'

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };
  return (
    <AppBar position="relative" sx={{ backgroundColor: '#FFFFFF'}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
            component="img"
            sx={{
            height: 40,
            }}
            alt="Home Logo"
            src={Logo}
        />
        <Button
          variant="text"
          onClick={() => handleLogout()}
        >
          {LOGOUT_LABEL}
          <LogoutIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
