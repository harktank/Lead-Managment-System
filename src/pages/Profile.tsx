import React, { useState, ChangeEvent } from "react"; // Import ChangeEvent
import { Box, Typography, Paper, Avatar, Grid, Button, TextField, IconButton } from "@mui/material";
import Sidebar from "../components/Sidebar";
import EditIcon from "@mui/icons-material/Edit";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

// Define an interface for the profile data structure
interface ProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
  bio: string;
  profilePic: string;
}

const Profile = () => {
  const [profileData, setProfileData] = useState<ProfileData>({ // Add type annotation
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    address: "123, Main Street, Mumbai, India",
    bio: "Digital marketer and AI enthusiast.",
    profilePic: "https://via.placeholder.com/150", // Default placeholder
  });

  const [isEditing, setIsEditing] = useState(false);
  // Fix: Explicitly type the state to allow string or null
  const [newProfilePic, setNewProfilePic] = useState<string | null>(null);

  // Add type annotation for the event
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  // Add type annotation for the event
  const handleProfilePicChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Use optional chaining for safety
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewProfilePic(imageUrl); // Now allowed because state type is string | null

      // Optional: Clean up the object URL when the component unmounts or the image changes again
      // This prevents memory leaks, but requires more complex handling (e.g., using useEffect)
      // For simplicity, we'll omit it here, but be aware of it for larger applications.
      // return () => URL.revokeObjectURL(imageUrl);
    }
  };

  const handleUpdate = () => {
    // Update the main profile data only if a new picture was selected
    if (newProfilePic) {
      setProfileData((prev) => ({ ...prev, profilePic: newProfilePic }));
      setNewProfilePic(null); // Reset the temporary new pic state after update
    }
    // Potentially send updated profileData (excluding newProfilePic) to an API here
    setIsEditing(false); // Exit editing mode
  };

  const handleEditToggle = () => {
     setIsEditing((prev) => !prev);
     if(isEditing) {
        // If exiting edit mode without saving, you might want to reset changes
        // or reset newProfilePic if it wasn't saved
        setNewProfilePic(null);
     }
  }

  // Determine the source for the Avatar
  const avatarSrc = newProfilePic || profileData.profilePic;

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
          p: 3, // Add some padding
          overflowY: 'auto', // Allow scrolling if content overflows vertically
          width: "calc(100% - 240px)" // Adjust width based on Sidebar width if fixed
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: { xs: 2, sm: 3 }, // Responsive padding
            width: "100%", // Take available width
            maxWidth: 650, // Max width constraint
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
              {/* Hide input visually but keep it accessible */}
              <input
                type="file"
                accept="image/*"
                id="profile-pic-upload"
                style={{ display: 'none' }}
                onChange={handleProfilePicChange}
                disabled={!isEditing} // Only allow upload when editing
               />
              <Box sx={{ position: "relative", width: 120, height: 120, mx: "auto" }}>
                <Avatar
                  src={avatarSrc}
                  alt={profileData.name}
                  sx={{
                    width: 120,
                    height: 120,
                    border: `3px solid ${isEditing ? '#1976D2' : '#bdbdbd'}`, // Border changes in edit mode
                    cursor: isEditing ? "pointer" : "default", // Cursor changes
                  }}
                />
                {/* Show Camera Icon only when editing */}
                {isEditing && (
                    <IconButton
                        component="span" // Makes the button activate the label -> input
                        sx={{
                            position: "absolute",
                            bottom: 5,
                            right: 5,
                            bgcolor: "rgba(255, 255, 255, 0.8)", // Slightly transparent background
                            width: 30,
                            height: 30,
                            p: '4px', // Adjust padding
                            boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
                            "&:hover": { bgcolor: "#eeeeee" },
                        }}
                    >
                        <CameraAltIcon fontSize="small" color="primary" />
                    </IconButton>
                )}
              </Box>
            </label>
          </Box>

          {/* Profile Details */}
          <Grid container spacing={2}> {/* Increased spacing slightly */}
            {(Object.keys(profileData) as Array<keyof ProfileData>)
              .filter(field => field !== 'profilePic') // Exclude profilePic from text fields
              .map((field) => (
              <Grid item xs={12} key={field} sx={{ position: "relative", textAlign: 'left' }}> {/* Align label left */}
                <TextField
                  fullWidth
                  // Capitalize label nicely
                  label={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                  name={field}
                  value={profileData[field]}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  multiline={field === "address" || field === "bio"}
                  rows={field === "bio" ? 2 : 1}
                  // Email is often non-editable, keep it disabled or conditionally enable
                  disabled={field === "email" || !isEditing}
                  InputLabelProps={{ shrink: true }} // Keep label floated
                  sx={{
                    "& .MuiInputBase-root": { // Target InputBase for background
                      bgcolor: !isEditing || field === "email" ? "#f0f0f0" : "#ffffff", // Different background when disabled/not editing
                      borderRadius: "6px",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: isEditing && field !== "email" ? "#1976D2" : "#E0E0E0",
                      },
                      "&:hover fieldset": {
                        borderColor: isEditing && field !== "email" ? "#1976D2" : "#E0E0E0", // Only change hover border if editable
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: isEditing && field !== "email" ? "#1976D2" : "#E0E0E0", // Only change focus border if editable
                      },
                      // Style disabled state explicitly
                      "&.Mui-disabled": {
                          backgroundColor: "#f0f0f0",
                           "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#E0E0E0"
                           }
                       }
                    },
                  }}
                />
                {/* Edit icon is generally not needed per field if there's a global Edit button */}
                {/* If needed:
                {isEditing && field !== "email" && (
                  <IconButton sx={{ position: "absolute", right: 8, top: '50%', transform: 'translateY(-50%)' }} size="small">
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                )} */}
              </Grid>
            ))}
          </Grid>

          {/* Action Buttons */}
          <Box mt={3} display="flex" justifyContent="center" gap={2}>
            {isEditing ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpdate}
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Save Changes
                </Button>
                 <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleEditToggle} // Use toggle to cancel
                  sx={{ fontSize: "14px" }}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                startIcon={<EditIcon />} // Add icon to button
                onClick={handleEditToggle} // Use toggle to enter edit mode
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