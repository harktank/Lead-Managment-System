import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const AddUserModal = ({ open, handleClose, handleAddUser }) => {
  // Form state
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = () => {
    handleAddUser(userData);
    setUserData({ firstName: "", lastName: "", email: "", phone: "", role: "" });
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
          bgcolor: "#E6E6FA", // Soft lavender background
          borderRadius: 2,
          overflow: "hidden", // Prevents scrollbars
        }}
      >
        {/* Title */}
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "#4B0082" }}>
          Add New User
        </Typography>

        {/* Name Fields */}
        <Typography sx={{ fontWeight: "bold", mb: 1, color: "#4B0082" }}>User Name</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="firstName"
              label="First Name"
              value={userData.firstName}
              onChange={handleChange}
              margin="dense"
              variant="outlined"
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="lastName"
              label="Last Name"
              value={userData.lastName}
              onChange={handleChange}
              margin="dense"
              variant="outlined"
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />
          </Grid>
        </Grid>

        {/* Email Field */}
        <Typography sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#4B0082" }}>
          Email Id
        </Typography>
        <TextField
          fullWidth
          name="email"
          value={userData.email}
          onChange={handleChange}
          margin="dense"
          variant="outlined"
          sx={{ bgcolor: "white", borderRadius: 1 }}
        />

        {/* Contact Number */}
        <Typography sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#4B0082" }}>
          Contact Number
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

        {/* User Role Dropdown */}
        <Typography sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#4B0082" }}>
          Select User Role
        </Typography>
        <FormControl fullWidth margin="dense">
          <InputLabel>User Role</InputLabel>
          <Select
            name="role"
            value={userData.role}
            onChange={handleChange}
            sx={{ bgcolor: "white", borderRadius: 1 }}
          >
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Employee">Employee</MenuItem>
          </Select>
        </FormControl>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              bgcolor: "#FF6347", // Tomato Red
              color: "white",
              "&:hover": { bgcolor: "#E5533D" },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              bgcolor: "#32CD32", // Lime Green
              color: "white",
              "&:hover": { bgcolor: "#2EB82E" },
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
