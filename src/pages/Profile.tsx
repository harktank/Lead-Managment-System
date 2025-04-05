import React, { useState } from "react";
import { Box, Typography, Paper, Avatar, Grid, Button, TextField, IconButton } from "@mui/material";
import Sidebar from "../components/Sidebar";
import EditIcon from "@mui/icons-material/Edit";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    address: "123, Main Street, Mumbai, India",
    bio: "Digital marketer and AI enthusiast.",
    profilePic: "https://via.placeholder.com/150",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newProfilePic, setNewProfilePic] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewProfilePic(imageUrl);
    }
  };

  const handleUpdate = () => {
    if (newProfilePic) {
      setProfileData((prev) => ({ ...prev, profilePic: newProfilePic }));
    }
    setIsEditing(false);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden", bgcolor: "#f7f7f7" }}>
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
          elevation={4}
          sx={{
            p: 3,
            width: "75%",
            maxWidth: 650, // Reduced card width
            textAlign: "center",
            bgcolor: "#ffffff",
            borderRadius: "12px",
            height: "auto", // Dynamic height based on content
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.12)",
          }}
        >
          {/* Title */}
          <Typography variant="h5" fontWeight="bold" mb={2} color="primary">
            Profile
          </Typography>

          {/* Profile Picture Upload */}
          <Box sx={{ position: "relative", display: "inline-block", mb: 2 }}>
            <label htmlFor="profile-pic-upload">
              <input type="file" accept="image/*" id="profile-pic-upload" style={{ display: "none" }} onChange={handleProfilePicChange} />
              <Box sx={{ position: "relative", width: 120, height: 120, mx: "auto" }}>
                <Avatar
                  src={newProfilePic || profileData.profilePic}
                  sx={{
                    width: 120, // Reduced avatar size
                    height: 120,
                    border: "3px solid #1976D2",
                    cursor: "pointer",
                  }}
                />
                {/* Camera Icon Inside Avatar */}
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 5,
                    right: 5,
                    bgcolor: "white",
                    width: 30,
                    height: 30,
                    boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
                    "&:hover": { bgcolor: "#eeeeee" },
                  }}
                  component="span"
                >
                  <CameraAltIcon fontSize="small" color="primary" />
                </IconButton>
              </Box>
            </label>
          </Box>

          {/* Profile Details */}
          <Grid container spacing={1.5}>
            {["name", "email", "phone", "address", "bio"].map((field, index) => (
              <Grid item xs={12} key={index} sx={{ position: "relative" }}>
                <TextField
                  fullWidth
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  value={profileData[field]}
                  onChange={handleChange}
                  variant="outlined"
                  size="small" // Reduced input field size
                  multiline={field === "address" || field === "bio"}
                  rows={field === "bio" ? 2 : 1}
                  disabled={field === "email" || !isEditing}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "#f9f9f9",
                      borderRadius: "6px",
                      "& fieldset": {
                        borderColor: isEditing ? "#1976D2" : "#E0E0E0",
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
                {isEditing && field !== "email" && (
                  <IconButton sx={{ position: "absolute", right: 8, top: 8 }} onClick={() => setIsEditing(true)}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                )}
              </Grid>
            ))}
          </Grid>

          {/* Action Buttons */}
          <Box mt={3}>
            {isEditing ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdate}
                sx={{ mr: 1.5, fontSize: "14px", fontWeight: "bold" }}
              >
                Update
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setIsEditing(true)}
                sx={{ fontSize: "14px", fontWeight: "bold" }}
              >
                Edit Profile
              </Button>
            )}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Profile;
