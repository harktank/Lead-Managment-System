import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Signing up with:", { name, email, password });
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
          width: "90vw",
          height: "90vh",
          display: "flex",
          overflow: "hidden",
          borderRadius: 4,
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          {/* Left Side - Image */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              backgroundImage: `url('https://www.agilitysystem.net/wp-content/uploads/2023/06/management-system-featured-image-scaled.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          />

          {/* Right Side - Signup Form */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: 5,
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
              onClick={handleSignup}
            >
              Sign Up
            </Button>

            <Typography variant="body2" sx={{ mt: 2, color: "#555" }}>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#007bff", textDecoration: "none" }}>
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
