import React from "react";
import { AppBar, Typography, Avatar } from "@mui/material";
import Grid from "@mui/material/Grid2";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1200 }}>
      <Grid container>
        <Grid size={6} display={"flex"} alignItems={"center"} padding={2}>
          <Typography>Dashboard</Typography>
        </Grid>
        <Grid
          size={6}
          display={"flex"}
          justifyContent={"end"}
          alignItems={"center"}
          padding={1}
        >
          <NotificationsIcon />
          <Avatar sx={{ marginLeft: 2 }} />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
