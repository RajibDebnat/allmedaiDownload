import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/joy";

function ErrorPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        textAlign: "center",
        background: "linear-gradient(45deg, #0f0c29, #302b63, #24243e)",
        color: "#fff",
        padding: 2,
      }}
    >
      {/* Neon glow 404 */}
      <Typography
        level="h1"
        sx={{
          fontSize: "10rem",
          mb: 2,
          color: "#0ff",
          textShadow: "0 0 20px #0ff, 0 0 40px #0ff, 0 0 60px #00f, 0 0 80px #0ff",
          fontWeight: "bold",
        }}
      >
        404
      </Typography>
      <Typography
        level="h2"
        sx={{
          fontSize: "2rem",
          color: "#fff",
          textShadow: "0 0 10px #fff, 0 0 20px #fff",
          mb: 2,
        }}
      >
        Oops! Page not found.
      </Typography>
      <Typography level="body1" sx={{ mb: 4 }}>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button
        component={Link}
        to="/"
        sx={{
          backgroundColor: "#0ff",
          color: "#000",
          fontWeight: "bold",
          padding: "0.75rem 1.5rem",
          textShadow: "0 0 10px #0ff, 0 0 20px #00f",
          '&:hover': {
            backgroundColor: "#00f",
            color: "#fff",
            textShadow: "0 0 10px #fff, 0 0 20px #0ff",
          }
        }}
      >
        Go Back Home
      </Button>
    </Box>
  );
}

export default ErrorPage;
