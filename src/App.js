import React from "react";
import { Container, Box, CssBaseline } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box sx={{ flexGrow: 1, mt: 8, ml: 25 }}>
        <Header />
        <Container sx={{ mt: 2 }} maxWidth={"100%"}>
          <Dashboard />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
