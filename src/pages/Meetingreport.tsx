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

// Define interface for lead data
interface Lead {
  id: number | string;
  companyName: string;
  email: string;
  phone: string;
  source: string;
  address: string;
  designation: string;
  serviceType: string;
  meetingDate: string;
  leadType: string;
  addedBy: string;
  remark: string;
}

const LeadReport: React.FC = () => {
  // Sample lead data with TypeScript typing
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: 1,
      companyName: "XYZ",
      email: "",
      phone: "",
      source: "",
      address: "",
      designation: "",
      serviceType: "",
      meetingDate: "",
      leadType: "",
      addedBy: "",
      remark: "",
    },
  ]);

  // Function to generate empty rows for a total of 12 rows
  const generateEmptyRows = (rows: Lead[], total: number): Lead[] => {
    const emptyRow: Lead = {
      id: "",
      companyName: "",
      email: "",
      phone: "",
      source: "",
      address: "",
      designation: "",
      serviceType: "",
      meetingDate: "",
      leadType: "",
      addedBy: "",
      remark: "",
    };

    return rows.length < total
      ? Array(total - rows.length).fill(emptyRow)
      : [];
  };
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [darkMode, setDarkMode] = useState(false);

  // Create empty rows if less than 12
  const emptyRows = generateEmptyRows(leads, 12);

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#E3E7F1",
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
          <h2 style={{ margin: 0 }}>Meeting Report</h2>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#007bff",
              color: "white",
              "&:hover": { bgcolor: "#0056b3" },
            }}
          >
            Export To Excel
          </Button>
        </Paper>

        {/* Lead Table */}
        <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
          <TableContainer>
            <Table>
              {/* Table Header */}
              <TableHead sx={{ bgcolor: "black" }}>
                <TableRow>
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
                    <TableCell
                      key={index}
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              {/* Table Body */}
              <TableBody>
                {/* Populated Data */}
                {leads.map((row, index) => (
                  <TableRow key={index} hover>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.companyName}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">{row.source}</TableCell>
                    <TableCell align="center">{row.address}</TableCell>
                    <TableCell align="center">{row.designation}</TableCell>
                    <TableCell align="center">{row.serviceType}</TableCell>
                    <TableCell align="center">{row.meetingDate}</TableCell>
                    <TableCell align="center">{row.leadType}</TableCell>
                    <TableCell align="center">{row.addedBy}</TableCell>
                    <TableCell align="center">{row.remark}</TableCell>
                  </TableRow>
                ))}

                {/* Empty Rows to Fill 12 Rows */}
                {emptyRows.map((_, index) => (
                  <TableRow key={`empty-${index}`}>
                    <TableCell colSpan={12} sx={{ height: "40px" }} />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default LeadReport;
