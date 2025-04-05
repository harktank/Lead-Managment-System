import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = () => {
    // No actual login logic needed for this request
    // console.log("Attempting to navigate to dashboard...");
    navigate("/dashboard"); // Navigate to the dashboard route
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#EAEDED",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: { xs: '95vw', sm: '80vw', md: '70vw', lg: '60vw' }, // Responsive width
          maxWidth: '900px', // Max width
          height: "auto",    // Auto height
          maxHeight: '90vh', // Max height
          borderRadius: "12px",
          overflow: "hidden",
          display: 'flex', // Use flex for centering content in case image column is hidden
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          {/* Left Side - Background Image (Hidden on smaller screens if needed) */}
          <Grid
            item
            xs={0} // Hidden on xs screens
            md={6} // Takes half width on md and up
            sx={{
              backgroundImage: `url('https://www.eleapsoftware.com/wp-content/uploads/2021/10/the-evolution-of-the-modern-day-lms-2000x1358.jpg.webp')`, // Slightly larger image
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: { xs: '200px', md: '100%'}, // Minimum height especially for smaller views if shown
              display: { xs: 'none', md: 'block' } // Control visibility
            }}
          />

          {/* Right Side - Login Form */}
          <Grid
            item
            xs={12} // Takes full width on xs
            md={6} // Takes half width on md and up
            sx={{
              p: { xs: 3, sm: 4, md: 6 }, // Responsive padding
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              bgcolor: "white",
            }}
          >
            <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold", color: "#007bff" }}>
              Login
            </Typography>

            <TextField
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
              InputProps={{ sx: { borderRadius: 2 } }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              InputProps={{ sx: { borderRadius: 2 } }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Login Button now triggers navigation */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: "bold",
                bgcolor: "#007bff",
                "&:hover": { bgcolor: "#0056b3" },
              }}
              onClick={handleLogin} // Use the updated handler
            >
              Login
            </Button>

            <Typography variant="body2" sx={{ mt: 3, color: "#555" }}> {/* Increased margin top */}
              Don't have an account?{" "}
              <Link to="/signup" style={{ color: "#007bff", textDecoration: "none", fontWeight: 'bold' }}>
                Sign up
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;