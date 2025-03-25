import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ConstructionIcon from "@mui/icons-material/Construction";
import InfoIcon from "@mui/icons-material/Info";

function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItems = [
    { text: "Dashboard", icon: <SpaceDashboardIcon /> },
    { text: "Analytics", icon: <AnalyticsIcon /> },
    { text: "Projects", icon: <ConstructionIcon /> },
    { text: "About", icon: <InfoIcon /> },
  ];

  return (
    <Box
      sx={{
        width: { xs: "15vw", md: "11vw" },
        bgcolor: "#f5f6fa",
        height: "100vh",
        color: "#333",
        p: 2,
        position: "fixed",
        zIndex: 1201,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h6" mb={2} fontWeight="bold">
          BEXT IQ
        </Typography>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => setSelectedIndex(index)}
              sx={{
                mb: 1,
                borderRadius: "8px",
                transition: "0.3s",
                textAlign: "left",
                bgcolor: selectedIndex === index ? "#dcdde1" : "transparent",
                "&:hover": {
                  bgcolor: "#e0e0e0",
                  color: "#333",
                  cursor: "pointer",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit", minWidth: "10px", mr: 1 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: { xs: "12px", md: "15px" }, // Texto responsivo
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body2">John Doe</Typography>
        <Typography variant="caption">john.doe@email.com</Typography>
      </Box>
    </Box>
  );
}

export default Sidebar;
