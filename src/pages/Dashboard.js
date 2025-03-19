import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Datos para la gráfica de barras
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril"],
    datasets: [
      {
        label: "Ventas Mensuales",
        data: [400, 300, 500, 700],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Box sx={{ p: 0 }}>
      <Typography variant="h6" mb={3}>
        Dashboard
      </Typography>

      <Grid container spacing={2} justifyContent={"space-between"} mb={2}>
        {["Usuarios", "Ventas", "Ingresos", "Proyectos"].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={index}>
            <Paper
              elevation={3}
              sx={{ p: 3, textAlign: "center", width: "20vw", height: "17vh" }}
            >
              <Typography variant="h6">{item}</Typography>
              <Typography variant="h4">
                {Math.floor(Math.random() * 1000)}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent={"space-evenly"} mb={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" mb={2}>
              Ventas Mensuales
            </Typography>
            <Bar data={data} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" mb={2}>
              Ventas Mensuales
            </Typography>
            <Bar data={data} />
          </Paper>
        </Grid>
      </Grid>

      {/* Información adicional */}
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6">Resumen</Typography>
          <Typography variant="body1" mt={1}>
            Este mes las ventas han aumentado en un 20% comparado con el mes
            anterior.
          </Typography>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Dashboard;
