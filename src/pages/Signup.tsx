import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignup = () => {
    // No actual signup logic needed for this request
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
        bgcolor: "#f0f2f5",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: { xs: '95vw', sm: '85vw', md: '75vw', lg: '65vw' }, // Responsive width
          maxWidth: '1000px', // Max width
          height: "auto",     // Auto height
          maxHeight: '90vh',  // Max height
          display: "flex",
          overflow: "hidden",
          borderRadius: 4,
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          {/* Left Side - Image (Hidden on smaller screens) */}
          <Grid
            item
            xs={0} // Hidden on xs
            md={7} // Takes more space on md and up
            sx={{
              backgroundImage: `url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=600,fit=crop/YNqJ7wao53Ca1DjX/compliance-A1aKpXL4okfevwWw.png')`, // Slightly larger image
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: { xs: '200px', md: '100%'}, // Minimum height especially for smaller views if shown
              display: { xs: 'none', md: 'block' } // Control visibility
            }}
          />

          {/* Right Side - Signup Form */}
          <Grid
            item
            xs={12} // Takes full width on xs
            md={5} // Takes less space on md and up
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: { xs: 3, sm: 4, md: 5 }, // Responsive padding
              py: 4, // Add vertical padding
              bgcolor: "#fff",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#007bff", mb: 2 }}>
              Sign Up
            </Typography>

            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              variant="outlined"
              InputProps={{ sx: { borderRadius: 2 } }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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

            {/* Signup Button now triggers navigation */}
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
              onClick={handleSignup} // Use the updated handler
            >
              Sign Up
            </Button>

            <Typography variant="body2" sx={{ mt: 3, color: "#555" }}> {/* Increased margin top */}
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#007bff", textDecoration: "none", fontWeight: 'bold' }}>
                Login
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Signup;