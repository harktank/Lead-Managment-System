import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  MenuItem,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

interface LeadData {
  city: string;
  companyName: string;
  address: string;
  contactNo: string;
  designation: string;
  email: string;
  leadSource: string;
  addedBy: string;
  addedOn: string;
  leadDate: Dayjs | null;
  leadType: string;
  comment: string;
  meetingRemark: string;
  meetingDate: Dayjs | null;
  serviceTypes: {
    turnKey: boolean;
    consultancy: boolean;
    dcs: boolean;
    amc: boolean;
    kayeValidator: boolean;
  };
}

interface AddLeadModalProps {
  open: boolean;
  handleClose: () => void;
  handleAddLead: (leadData: LeadData) => void;
}

const AddLeadModal: React.FC<AddLeadModalProps> = ({
  open,
  handleClose,
  handleAddLead,
}) => {
  const [leadData, setLeadData] = useState<LeadData>({
    city: "",
    companyName: "",
    address: "",
    contactNo: "",
    designation: "",
    email: "",
    leadSource: "",
    addedBy: "",
    addedOn: "",
    leadDate: null,
    leadType: "",
    comment: "",
    meetingRemark: "",
    meetingDate: null,
    serviceTypes: {
      turnKey: false,
      consultancy: false,
      dcs: false,
      amc: false,
      kayeValidator: false,
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLeadData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setLeadData((prev) => ({
      ...prev,
      serviceTypes: {
        ...prev.serviceTypes,
        [name]: checked,
      },
    }));
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{
          bgcolor: "#1565C0",
          color: "#fff",
          textAlign: "center",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        Add New Lead
      </DialogTitle>

      <DialogContent
        sx={{
          bgcolor: "#E3F2FD",
          p: 3,
          maxHeight: "80vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            bgcolor: "#FFFFFF",
            p: 3,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={leadData.city}
              onChange={handleChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Company Name"
              name="companyName"
              value={leadData.companyName}
              onChange={handleChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={leadData.address}
              onChange={handleChange}
              variant="outlined"
              size="small"
              multiline
              rows={2}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Contact No."
              name="contactNo"
              value={leadData.contactNo}
              onChange={handleChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Designation"
              name="designation"
              value={leadData.designation}
              onChange={handleChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={leadData.email}
              onChange={handleChange}
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: 5,
                color: "#1565C0",
              }}
            >
              Service Type:
            </label>
            <Grid container spacing={1}>
              {[
                { label: "Turn Key", name: "turnKey" },
                { label: "Consultancy", name: "consultancy" },
                { label: "DCS", name: "dcs" },
                { label: "AMC", name: "amc" },
                { label: "Kaye Validator", name: "kayeValidator" },
              ].map((service, index) => (
                <Grid item xs={6} sm={2.4} key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={service.name}
                        checked={
                          leadData.serviceTypes[
                            service.name as keyof typeof leadData.serviceTypes
                          ]
                        }
                        onChange={handleCheckboxChange}
                      />
                    }
                    label={service.label}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Lead Source"
              name="leadSource"
              value={leadData.leadSource}
              onChange={handleChange}
              variant="outlined"
              size="small"
            >
              {["Website", "Referral", "Social Media", "Cold Call"].map(
                (source, index) => (
                  <MenuItem key={index} value={source}>
                    {source}
                  </MenuItem>
                )
              )}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Added By"
              name="addedBy"
              value={leadData.addedBy}
              onChange={handleChange}
              variant="outlined"
              size="small"
            />
          </Grid>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid item xs={12} sm={6}>
              <DatePicker
                label="Lead Date"
                value={leadData.leadDate}
                onChange={(date) =>
                  setLeadData((prev) => ({ ...prev, leadDate: date }))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                label="Meeting Date"
                value={leadData.meetingDate}
                onChange={(date) =>
                  setLeadData((prev) => ({ ...prev, meetingDate: date }))
                }
              />
            </Grid>
          </LocalizationProvider>

          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label="Lead Type"
              name="leadType"
              value={leadData.leadType}
              onChange={handleChange}
              variant="outlined"
              size="small"
            >
              {["Hot", "Warm", "Cold"].map((type, index) => (
                <MenuItem key={index} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Comment"
              name="comment"
              value={leadData.comment}
              onChange={handleChange}
              variant="outlined"
              size="small"
              multiline
              rows={2}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Meeting Remark"
              name="meetingRemark"
              value={leadData.meetingRemark}
              onChange={handleChange}
              variant="outlined"
              size="small"
              multiline
              rows={2}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ bgcolor: "#E3F2FD", p: 2 }}>
        <Button
          onClick={() => handleAddLead(leadData)}
          variant="contained"
          sx={{ bgcolor: "#0D47A1", color: "#fff", mx: 2 }}
        >
          Add
        </Button>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{ bgcolor: "#D32F2F", color: "#fff" }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddLeadModal;
