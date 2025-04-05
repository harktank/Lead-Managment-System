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

// Define a type for the Lead object (good practice)
interface Lead {
  id: number;
  company: string;
  email: string;
  phone: string;
  source: string;
  address: string;
  designation: string;
  serviceType: string;
  meetDate: string;
  leadType: string;
  addedBy: string;
  remark: string;
}

// Define a type for the data passed from the modal (adjust based on AddLeadModal's actual structure)
// Assuming AddLeadModal passes back an object without the 'id'
type NewLeadData = Omit<Lead, 'id'>;


const AllLeads = () => {
  const [leads, setLeads] = useState<Lead[]>([ // Add type annotation
    { id: 1, company: "XYZ Corp", email: "contact@xyz.com", phone: "123-456-7890", source: "Website", address: "123 Main St", designation: "Manager", serviceType: "Consulting", meetDate: "2024-07-26", leadType: "Hot", addedBy: "John Doe", remark: "Initial contact" },
    { id: 2, company: "ABC Inc", email: "info@abc.com", phone: "987-654-3210", source: "Referral", address: "456 Oak Ave", designation: "CEO", serviceType: "Software Dev", meetDate: "2024-07-27", leadType: "Warm", addedBy: "Jane Smith", remark: "Follow up needed" },
    { id: 3, company: "Test Co", email: "test@testco.io", phone: "555-123-4567", source: "Cold Call", address: "789 Pine Rd", designation: "Engineer", serviceType: "Support", meetDate: "2024-07-28", leadType: "Cold", addedBy: "John Doe", remark: "Sent brochure" },
    { id: 4, company: "Sample Ltd", email: "sample@sltd.net", phone: "111-222-3333", source: "Event", address: "101 Maple Dr", designation: "VP Sales", serviceType: "Consulting", meetDate: "2024-07-29", leadType: "Hot", addedBy: "Jane Smith", remark: "Meeting scheduled" },
  ]);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Function to handle adding a new lead
  const handleAddLead = (newLeadData: NewLeadData) => {
    setLeads((prevLeads) => [
      ...prevLeads,
      {
        id: prevLeads.length > 0 ? Math.max(...prevLeads.map(l => l.id)) + 1 : 1, // Simple ID generation
        ...newLeadData,
      },
    ]);
    handleCloseModal(); // Close modal after adding
  };


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [darkMode, setDarkMode] = useState(false);


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

      <Box sx={{ flexGrow: 1, p: 4, overflowY: 'auto' }}> {/* Allow vertical scroll here if content exceeds height */}
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
                  InputLabelProps={{ style: { color: '#94A3B8' } }} // Lighter label for dark bg
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': { // Style input field text
                      color: '#000',
                    },
                  }}
                 />
              </Grid>
            ))}
          </Grid>

          {/* Filter Buttons */}
          <Box sx={{ display: "flex", flexWrap: 'wrap', gap: 2, mt: 3, alignItems: 'center' }}> {/* Added flexWrap and alignItems */}
            <Button variant="contained" sx={{ bgcolor: "#2563EB", color: "white", '&:hover': { bgcolor: "#1D4ED8" } }}>
              All
            </Button>
            <Button variant="contained" sx={{ bgcolor: "#10B981", color: "white", '&:hover': { bgcolor: "#059669" } }}>
              Today
            </Button>
            <Button variant="contained" sx={{ bgcolor: "#E11D48", color: "white", '&:hover': { bgcolor: "#BE123C" } }}>
              Missed Follow Up
            </Button>

            {/* Search Input */}
            <TextField
              size="small"
              placeholder="Search"
              variant="outlined"
              sx={{ ml: "auto", bgcolor: "#E2E8F0", borderRadius: 1, width: { xs: '100%', sm: 'auto' } }} // Responsive width
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
              sx={{ bgcolor: "#2563EB", color: "white", "&:hover": { bgcolor: "#1D4ED8" }, width: { xs: '100%', sm: 'auto' } }} // Responsive width
              onClick={handleOpenModal}
            >
              Add New Lead
            </Button>
          </Box>
        </Paper>

        {/* Leads Table */}
        <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3, bgcolor: "white" }}>
          <TableContainer>
            <Table stickyHeader> {/* Added stickyHeader */}
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
                    <TableCell key={index} sx={{ color: "white", fontWeight: "bold", whiteSpace: 'nowrap' }}> {/* Added nowrap */}
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {leads.map((row) => ( // Use unique row.id for key
                  <TableRow key={row.id} hover sx={{ '&:nth-of-type(odd)': { backgroundColor: '#F8FAFC' } }}> {/* Alternate row color */}
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.company}</TableCell> {/* Display data directly */}
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.source}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell>{row.designation}</TableCell>
                    <TableCell>{row.serviceType}</TableCell>
                    <TableCell>{row.meetDate}</TableCell>
                    <TableCell>{row.leadType}</TableCell>
                    <TableCell>{row.addedBy}</TableCell>
                    <TableCell>{row.remark}</TableCell>
                     {/* Removed TextFields from table cells - typically you display data, not inputs */}
                     {/* If inline editing is needed, that's a more complex feature */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Modal Component - Pass the handleAddLead function */}
        <AddLeadModal
          open={openModal}
          handleClose={handleCloseModal}
          handleAddLead={handleAddLead} // Pass the function here
        />
      </Box>
    </Box>
  );
};

export default AllLeads;