import React, { useState } from "react";
import {
  Box,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import AddUserModal from "../components/AddUserModal"; // Linked Add User Modal

const UserList = () => {
  // Sample user data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "XYZ",
      email: "xyz@example.com",
      phone: "9876543210",
      role: "Admin",
      status: "Active",
    },
  ]);

  // State for modal control
  const [openModal, setOpenModal] = useState(false);

  // Open and close modal
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Handle new user addition
  const handleAddUser = (newUser) => {
    const updatedUsers = [...users, { id: users.length + 1, ...newUser }];
    setUsers(updatedUsers);
    setOpenModal(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#f5f7fa", // Light Grayish Blue background
        minHeight: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Paper
          sx={{
            p: 3,
            mb: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: 3,
            borderRadius: 2,
            bgcolor: "#ffffff", // White background
          }}
        >
          <h2 style={{ margin: 0, color: "#34495e" }}>User List</h2>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#0984e3", // Bright Blue
              color: "white",
              borderRadius: 2,
              padding: "6px 16px",
              "&:hover": { bgcolor: "#74b9ff" }, // Light Blue on hover
            }}
            onClick={handleOpenModal}
          >
            + Add New
          </Button>
        </Paper>

        {/* User Table */}
        <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3, bgcolor: "white" }}>
          <TableContainer>
            <Table>
              {/* Table Header */}
              <TableHead sx={{ bgcolor: "#dfe6e9" }}> {/* Soft Gray */}
                <TableRow>
                  {[
                    "Sr No",
                    "Employee Name",
                    "Email Id",
                    "Contact Number",
                    "Role",
                    "Status",
                    "Action",
                  ].map((head, index) => (
                    <TableCell
                      key={index}
                      sx={{
                        color: "#34495e", // Dark Blue for headers
                        fontWeight: "bold",
                        textAlign: "center",
                        padding: "12px",
                      }}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              {/* Table Body */}
              <TableBody>
                {users.map((row, index) => (
                  <TableRow
                    key={index}
                    hover
                    sx={{
                      "&:hover": { bgcolor: "#f1f2f6" }, // Light Cream on hover
                    }}
                  >
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">{row.role}</TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: row.status === "Active" ? "#27ae60" : "#e74c3c", // Green for Active, Red for Inactive
                        fontWeight: "bold",
                      }}
                    >
                      {row.status}
                    </TableCell>

                    {/* Action Buttons */}
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: "#6c5ce7", // Vibrant Purple
                          color: "#6c5ce7",
                          "&:hover": { bgcolor: "#eae6fd" },
                        }}
                      >
                        ✏️
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: "#d63031", // Bright Red
                          color: "#d63031",
                          ml: 1,
                          "&:hover": { bgcolor: "#fdecea" },
                        }}
                      >
                        🗑️
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}

                {/* No Data Message */}
                {users.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} align="center" sx={{ py: 2, color: "#666" }}>
                      No users found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Modal for Adding New User */}
        <AddUserModal
          open={openModal}
          handleClose={handleCloseModal}
          handleAddUser={handleAddUser}
        />
      </Box>
    </Box>
  );
};

export default UserList;
