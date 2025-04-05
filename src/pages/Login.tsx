import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", { email, password });
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#EAEDED", // Background color added
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: "90vw",
          height: "90vh",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          {/* Left Side - Background Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundImage: `url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=384,fit=crop/YNqJ7wao53Ca1DjX/compliance-A1aKpXL4okfevwWw.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100%",
            }}
          />

          {/* Right Side - Login Form */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              p: 6,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              bgcolor: "white", // Background color for the form
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
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
              onClick={handleLogin}
            >
              Login
            </Button>

            <Typography variant="body2" sx={{ mt: 2, color: "#555" }}>
              Don't have an account?{" "}
              <Link to="/signup" style={{ color: "#007bff", textDecoration: "none" }}>
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
