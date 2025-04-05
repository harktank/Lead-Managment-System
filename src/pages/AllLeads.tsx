import React, { useState } from "react";
import {
  Box,
  Paper,
  Grid,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import Sidebar from "../components/Sidebar";
import AddLeadModal from "../components/AddLeadModal"; // Import modal

const AllLeads = () => {
  const [leads, setLeads] = useState([
    { id: 1, company: "XYZ", email: "", phone: "", source: "", address: "", designation: "", serviceType: "", meetDate: "", leadType: "", addedBy: "", remark: "" },
    { id: 2, company: "", email: "", phone: "", source: "", address: "", designation: "", serviceType: "", meetDate: "", leadType: "", addedBy: "", remark: "" },
    { id: 3, company: "", email: "", phone: "", source: "", address: "", designation: "", serviceType: "", meetDate: "", leadType: "", addedBy: "", remark: "" },
    { id: 4, company: "", email: "", phone: "", source: "", address: "", designation: "", serviceType: "", meetDate: "", leadType: "", addedBy: "", remark: "" },
  ]);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#F1F5F9",
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden", // Remove Scrollbar
      }}
    >
      <Sidebar />

      <Box sx={{ flexGrow: 1, p: 4 }}>
        {/* Filters Section */}
        <Paper
          sx={{
            p: 3,
            mb: 3,
            bgcolor: "#1E293B", // Dark Navy Blue
            color: "white",
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Lead Filters
          </Typography>

          <Grid container spacing={2}>
            {[
              "Company Name",
              "Contact No.",
              "Quick Feedback",
              "Email Address",
              "Lead Source",
              "Service Type",
              "Lead Type",
              "Added By",
              "City",
              "Meet Date",
            ].map((label, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <TextField
                  fullWidth
                  size="small"
                  label={label}
                  variant="outlined"
                  sx={{ bgcolor: "white", borderRadius: 1 }}
                />
              </Grid>
            ))}
          </Grid>

          {/* Filter Buttons */}
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button variant="contained" sx={{ bgcolor: "#2563EB", color: "white" }}>
              All
            </Button>
            <Button variant="contained" sx={{ bgcolor: "#10B981", color: "white" }}>
              Today
            </Button>
            <Button variant="contained" sx={{ bgcolor: "#E11D48", color: "white" }}>
              Missed Follow Up
            </Button>

            {/* Search Input */}
            <TextField
              size="small"
              placeholder="Search"
              variant="outlined"
              sx={{ ml: "auto", bgcolor: "#E2E8F0", borderRadius: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            {/* Add Lead Button */}
            <Button
              variant="contained"
              sx={{ bgcolor: "#2563EB", color: "white", "&:hover": { bgcolor: "#1D4ED8" } }}
              onClick={handleOpenModal}
            >
              Add New Lead
            </Button>
          </Box>
        </Paper>

        {/* Leads Table */}
        <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3, bgcolor: "white" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#1E3A8A" }}> {/* Dark Blue */}
                  {[
                    "Lead Id",
                    "Company Name",
                    "Email Id",
                    "Phone",
                    "Source",
                    "Address",
                    "Designation",
                    "Service Type",
                    "Meet Date",
                    "Lead Type",
                    "Added By",
                    "Remark",
                  ].map((head, index) => (
                    <TableCell key={index} sx={{ color: "white", fontWeight: "bold" }}>
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {leads.map((row, index) => (
                  <TableRow key={index} hover>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>
                      <TextField size="small" variant="outlined" defaultValue={row.company} sx={{ borderRadius: 1 }} />
                    </TableCell>
                    <TableCell>
                      <TextField size="small" variant="outlined" defaultValue={row.email} sx={{ borderRadius: 1 }} />
                    </TableCell>
                    <TableCell>
                      <TextField size="small" variant="outlined" defaultValue={row.phone} sx={{ borderRadius: 1 }} />
                    </TableCell>
                    <TableCell>
                      <TextField size="small" variant="outlined" defaultValue={row.source} sx={{ borderRadius: 1 }} />
                    </TableCell>
                    <TableCell>
                      <TextField size="small" variant="outlined" defaultValue={row.address} sx={{ borderRadius: 1 }} />
                    </TableCell>
                    <TableCell>
                      <TextField size="small" variant="outlined" defaultValue={row.designation} sx={{ borderRadius: 1 }} />
                    </TableCell>
                    <TableCell>
                      <TextField size="small" variant="outlined" defaultValue={row.serviceType} sx={{ borderRadius: 1 }} />
                    </TableCell>
                    <TableCell>
                      <TextField size="small" variant="outlined" defaultValue={row.meetDate} sx={{ borderRadius: 1 }} />
                    </TableCell>
                    <TableCell>
                      <TextField size="small" variant="outlined" defaultValue={row.leadType} sx={{ borderRadius: 1 }} />
                    </TableCell>
                    <TableCell>
                      <TextField size="small" variant="outlined" defaultValue={row.addedBy} sx={{ borderRadius: 1 }} />
                    </TableCell>
                    <TableCell>
                      <TextField size="small" variant="outlined" defaultValue={row.remark} sx={{ borderRadius: 1 }} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Modal Component */}
        <AddLeadModal open={openModal} handleClose={handleCloseModal} />
      </Box>
    </Box>
  );
};

export default AllLeads;
