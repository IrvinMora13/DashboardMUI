import React from "react";
import { Box, Paper, Typography, Grid, IconButton, Badge } from "@mui/material";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import NotificationsIcon from "@mui/icons-material/Notifications";

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Datos de las gráficas
const barData = {
  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
  datasets: [
    {
      label: "Ventas Mensuales",
      data: [400, 700, 500, 900, 1200, 1500],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
  ],
};

const lineData = {
  labels: ["Abr 1", "Abr 5", "Abr 10", "Abr 15", "Abr 20", "Abr 25", "Abr 30"],
  datasets: [
    {
      label: "Sesiones",
      data: [1000, 2000, 4000, 7000, 11000, 15000, 20000],
      borderColor: "blue",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      fill: true,
    },
  ],
};

// Tarjetas de estadísticas
const stats = [
  { title: "Usuarios", value: "14k", percentage: "+25%", trend: "up" },
  { title: "Conversiones", value: "325", percentage: "-25%", trend: "down" },
  { title: "Eventos", value: "200k", percentage: "+5%", trend: "up" },
  { title: "Sesiones", value: "13,277", percentage: "+35%", trend: "up" },
];

const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Título del Dashboard */}
      <Typography variant="h5" mb={3}>
        Overview
      </Typography>

      {/* Tarjetas de estadísticas */}
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">{stat.title}</Typography>
              <Typography variant="h4">{stat.value}</Typography>
              <Typography
                variant="body2"
                sx={{
                  color: stat.trend === "up" ? "green" : "red",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {stat.trend === "up" ? (
                  <TrendingUpIcon sx={{ fontSize: 16, mr: 0.5 }} />
                ) : (
                  <TrendingDownIcon sx={{ fontSize: 16, mr: 0.5 }} />
                )}
                {stat.percentage}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Gráficas */}
      <Grid container spacing={2} mt={3}>
        {/* Gráfica de Sesiones */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" mb={2}>
              Sesiones en los últimos 30 días
            </Typography>
            <Line data={lineData} />
          </Paper>
        </Grid>

        {/* Gráfica de Ventas */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" mb={2}>
              Ventas Mensuales
            </Typography>
            <Bar data={barData} />
          </Paper>
        </Grid>
      </Grid>

      {/* Información adicional y notificaciones */}
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6">Explora tus datos</Typography>
            <Typography variant="body1" mt={1}>
              Descubre el rendimiento y las tendencias de los visitantes con
              nuestro análisis de datos.
            </Typography>
          </Paper>
        </Grid>

        {/* Notificaciones */}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton>
            <Badge color="error" variant="dot">
              <NotificationsIcon sx={{ fontSize: 40, color: "black" }} />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
