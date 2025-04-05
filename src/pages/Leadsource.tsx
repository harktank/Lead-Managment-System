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
import Addsourcemodel from "../components/Addsourcemodel"; // Modal Component

const UserList = () => {
  // Sample user data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "XYZ",
      email: "xyz@example.com",
      phone: "9876543210",
      source: "Website",
      address: "123, Street, City",
      remark: "Interested in services",
      date: "2025-03-25",
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
        bgcolor: "#E3E7F1", // Light Blue Gray Background
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
            boxShadow: 2,
            borderRadius: 2,
          }}
        >
          <h2 style={{ margin: 0, color: "#333" }}>Lead Source</h2>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#007bff", // Primary Blue
              color: "white",
              "&:hover": { bgcolor: "#0056b3" }, // Darker Blue on Hover
            }}
            onClick={handleOpenModal}
          >
            + Add New
          </Button>
        </Paper>

        {/* User Table */}
        <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
          <TableContainer>
            <Table>
              {/* Table Header with Grey Background */}
              <TableHead sx={{ bgcolor: "#dfe6e9" }}> {/* Grey Color */}
                <TableRow>
                  {[
                    "Lead Id",
                    "Name",
                    "Email Id",
                    "Phone",
                    "Source",
                    "Address",
                    "Remark",
                    "Meet Date",
                    "Action",
                  ].map((head, index) => (
                    <TableCell
                      key={index}
                      sx={{
                        color: "#34495e",
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
                    sx={{ "&:hover": { bgcolor: "#f8f9fa" } }} // Light Gray Hover
                  >
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">{row.source}</TableCell>
                    <TableCell align="center">{row.address}</TableCell>
                    <TableCell align="center">{row.remark}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>

                    {/* Action Buttons */}
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: "#007bff", // Blue
                          color: "#007bff",
                          "&:hover": { bgcolor: "#e6f0ff" },
                          mr: 1,
                        }}
                      >
                        ✏️
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: "red",
                          color: "red",
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
                    <TableCell colSpan={9} align="center" sx={{ py: 2, color: "#666" }}>
                      No users found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Modal for Adding New User */}
        <Addsourcemodel
          open={openModal}
          handleClose={handleCloseModal}
          handleAddUser={handleAddUser}
        />
      </Box>
    </Box>
  );
};

export default UserList;
