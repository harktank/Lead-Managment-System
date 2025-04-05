import React, { useState } from "react";
import { Box, Typography, Paper, TextField, Button, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";

const Settings = () => {
  const [settingsData, setSettingsData] = useState({
    siteName: "My Website",
    siteURL: "https://mywebsite.com",
    adminEmail: "admin@example.com",
    smtpServer: "smtp.example.com",
    apiKey: "1234-5678-91011",
    analyticsID: "UA-123456-7",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettingsData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw", bgcolor: "#e3f2fd" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            p: 4,
            width: "75%",
            maxWidth: 650, // Adjusted width
            textAlign: "center",
            bgcolor: "white",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
            borderLeft: "6px solid #1976D2", // Blue accent border
          }}
        >
          {/* Title */}
          <Typography variant="h5" fontWeight="bold" mb={3} color="primary">
            ⚙️ Settings
          </Typography>

          {/* Settings Fields with More Spacing */}
          <Grid container spacing={2}>
            {[
              { label: "Site Name", name: "siteName" },
              { label: "Site URL", name: "siteURL" },
              { label: "Admin Email", name: "adminEmail" },
              { label: "SMTP Server", name: "smtpServer" },
              { label: "API Key", name: "apiKey" },
              { label: "Google Analytics ID", name: "analyticsID" },
            ].map((field, index) => (
              <Grid item xs={12} key={index}>
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  value={settingsData[field.name]}
                  onChange={handleChange}
                  variant="outlined"
                  size="medium"
                  disabled={field.name === "adminEmail" || !isEditing}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "#f1f8ff",
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: isEditing ? "#1976D2" : "#B0BEC5",
                      },
                      "&:hover fieldset": {
                        borderColor: "#1976D2",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#1976D2",
                      },
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>

          {/* Action Buttons */}
          <Box mt={4}>
            {isEditing ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                sx={{
                  mr: 1.5,
                  fontSize: "14px",
                  fontWeight: "bold",
                  borderRadius: "6px",
                  padding: "8px 20px",
                }}
              >
                Save Changes
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setIsEditing(true)}
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  borderRadius: "6px",
                  padding: "8px 20px",
                }}
              >
                Edit Settings
              </Button>
            )}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Settings;
