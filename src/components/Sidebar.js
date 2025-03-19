import React from "react";
import { Box, Typography } from "@mui/material";

function Sidebar() {
  return (
    <Box
      sx={{
        width: "11vw",
        bgcolor: "primary.main",
        height: "100vh",
        color: "white",
        p: 2,
        position: "fixed",
        zIndex: 1201,
      }}
    >
      <Typography variant="h5" mb={3}>
        BEXT IQ
      </Typography>
      <Typography mb={3}>Dashboard</Typography>
      <Typography mb={3}>Analytics</Typography>
      <Typography mb={3}>Projects</Typography>
      <Typography mb={3}>About</Typography>
      <Box>
        <Typography>Name</Typography>
        <Typography>Email</Typography>
      </Box>
    </Box>
  );
}

export default Sidebar;
