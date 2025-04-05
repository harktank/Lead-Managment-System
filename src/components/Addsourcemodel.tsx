import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

const AddUserModal = ({ open, handleClose, handleAddUser }) => {
  // State for form inputs
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle submit to add new user
  const handleSubmit = () => {
    handleAddUser(userData);
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "",
    });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        component={Paper}
        sx={{
          width: 500,
          p: 3,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#E3F2FD", // Light blue background
          borderRadius: 2,
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "#0D47A1", // Dark blue
          }}
        >
          Add Lead Source
        </Typography>

        {/* Name Fields */}
        <Typography sx={{ fontWeight: "bold", mb: 1, color: "#1976D2" }}>
          {/* User Name */}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* <TextField
              fullWidth
              name="firstName"
              label="First Name"
              value={userData.firstName}
              onChange={handleChange}
              margin="dense"
              variant="outlined"
              sx={{
                bgcolor: "white",
                borderRadius: 1,
              }}
            /> */}
          </Grid>
          {/* <Grid item xs={6}>
            <TextField
              fullWidth
              name="lastName"
              label="Last Name"
              value={userData.lastName}
              onChange={handleChange}
              margin="dense"
              variant="outlined"
              sx={{
                bgcolor: "white",
                borderRadius: 1,
              }}
            />
          </Grid> */}
        </Grid>

        
        {/* <Typography sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#1565C0" }}>
          Email Id
        </Typography>
        <TextField
          fullWidth
          name="email"
          value={userData.email}
          onChange={handleChange}
          margin="dense"
          variant="outlined"
          sx={{
            bgcolor: "white",
            borderRadius: 1,
            border: "2px solid #1E88E5", // Blue border
          }}
        /> */}

        {/* Contact Number */}
        <Typography sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#1976D2" }}>
        Lead Source
        </Typography>
        <TextField
          fullWidth
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          margin="dense"
          variant="outlined"
          sx={{ bgcolor: "white", borderRadius: 1 }}
        />

        {/* User Role */}
        {/* <Typography sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#1976D2" }}>
          Select User Role
        </Typography> */}
        {/* <TextField
          fullWidth
          name="role"
          value={userData.role}
          onChange={handleChange}
          margin="dense"
          variant="outlined"
          sx={{ bgcolor: "white", borderRadius: 1 }}
        /> */}

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              bgcolor: "#1E88E5",
              color: "white",
              "&:hover": { bgcolor: "#1565C0" },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              bgcolor: "#1E88E5",
              color: "white",
              "&:hover": { bgcolor: "#1565C0" },
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
