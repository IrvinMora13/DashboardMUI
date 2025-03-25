import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Badge,
} from "@mui/material";
import Grid from "@mui/material/Grid2"; // Usando Grid2 como pediste
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "white",
        color: "black",
        zIndex: 1100, // Debe estar debajo del Sidebar
        boxShadow: 2,
        width: { xs: "100%", md: "89vw" }, // Ajusta el ancho dependiendo del Sidebar
        ml: { md: "11vw" }, // Empuja el contenido para dejar espacio al Sidebar
      }}
    >
      <Toolbar>
        <Grid container alignItems="center" spacing={2}>
          {/* Breadcrumbs (Dashboard > Home) */}
          <Grid xs={12} sm={4}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="#">
                Dashboard
              </Link>
              <Typography color="text.primary">Home</Typography>
            </Breadcrumbs>
          </Grid>

          {/* Barra de búsqueda */}
          <Grid
            xs={12}
            sm={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <SearchIcon sx={{ color: "gray", mr: 1 }} />
            <InputBase
              placeholder="Search..."
              sx={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "5px 10px",
                width: "100%",
                maxWidth: "200px",
              }}
            />
          </Grid>

          {/* Selector de fecha y notificaciones */}
          <Grid
            xs={12}
            sm={4}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <IconButton
              sx={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                p: 1,
                mr: 2,
              }}
            >
              <CalendarTodayIcon sx={{ color: "black" }} />
            </IconButton>

            <IconButton>
              <Badge color="error" variant="dot">
                <NotificationsIcon sx={{ color: "black" }} />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
