import React, { useState, useEffect } from "react";
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
  Typography, // Added for section titles
  Box, // Added for structure
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs"; // Import dayjs itself

// --- Ideally, import these from a central types file ---
interface Lead {
  id: number;
  company: string;
  email: string;
  phone: string;
  source: string;
  address: string;
  designation: string;
  serviceType: string; // Expects a string
  meetDate: string; // Expects a string
  leadType: string;
  addedBy: string;
  remark: string;
}
type NewLeadData = Omit<Lead, 'id'>;
// --- End of types to centralize ---


interface AddLeadModalProps {
  open: boolean;
  handleClose: () => void;
  // Expect the type defined in AllLeads (or the central types file)
  handleAddLead: (leadData: NewLeadData) => void;
}

// Define the structure for service type checkboxes locally if needed
const serviceOptions = [
    { label: "Turn Key", key: "turnKey" },
    { label: "Consultancy", key: "consultancy" },
    { label: "DCS", key: "dcs" },
    { label: "AMC", key: "amc" },
    { label: "Kaye Validator", key: "kayeValidator" },
];

const AddLeadModal: React.FC<AddLeadModalProps> = ({
  open,
  handleClose,
  handleAddLead,
}) => {
  // State now uses NewLeadData structure
  const [formData, setFormData] = useState<NewLeadData>({
    company: "", // Changed from companyName
    email: "",
    phone: "",   // Changed from contactNo
    source: "",  // Changed from leadSource
    address: "",
    designation: "",
    serviceType: "", // Will be derived from checkboxes
    meetDate: "",    // Will be derived from DatePicker, formatted as string
    leadType: "",
    addedBy: "", // Assuming this maps directly
    remark: "",    // Changed from comment/meetingRemark
  });

  // State to manage the checkboxes separately before converting to string
  const [selectedServices, setSelectedServices] = useState<Record<string, boolean>>({
    turnKey: false,
    consultancy: false,
    dcs: false,
    amc: false,
    kayeValidator: false,
  });

  // State for the date picker value
  const [selectedMeetDate, setSelectedMeetDate] = useState<Dayjs | null>(null);

  // Effect to update the single serviceType string when checkboxes change
  useEffect(() => {
      const activeServices = serviceOptions
          .filter(option => selectedServices[option.key])
          .map(option => option.label);
      setFormData(prev => ({ ...prev, serviceType: activeServices.join(', ') }));
  }, [selectedServices]);

  // Effect to update the meetDate string when the date picker changes
   useEffect(() => {
        setFormData(prev => ({
            ...prev,
            meetDate: selectedMeetDate ? selectedMeetDate.format('YYYY-MM-DD') : ''
        }));
    }, [selectedMeetDate]);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Ensure the name matches keys in NewLeadData
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSelectedServices(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
      // formData is already in the NewLeadData format due to state structure and effects
      handleAddLead(formData);
      // Reset form after submission (optional)
      setFormData({ company: "", email: "", phone: "", source: "", address: "", designation: "", serviceType: "", meetDate: "", leadType: "", addedBy: "", remark: "" });
      setSelectedServices({ turnKey: false, consultancy: false, dcs: false, amc: false, kayeValidator: false });
      setSelectedMeetDate(null);
      // handleClose(); // handleClose is already called inside handleAddLead in AllLeads
  }

  // Reset form state when modal is closed externally
  useEffect(() => {
    if (!open) {
       setFormData({ company: "", email: "", phone: "", source: "", address: "", designation: "", serviceType: "", meetDate: "", leadType: "", addedBy: "", remark: "" });
       setSelectedServices({ turnKey: false, consultancy: false, dcs: false, amc: false, kayeValidator: false });
       setSelectedMeetDate(null);
    }
  }, [open]);


  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{
          bgcolor: "#1565C0", // MUI Blue 700
          color: "#fff",
          textAlign: "center",
          fontSize: "1.3rem",
          fontWeight: "bold",
          borderBottom: '1px solid #ccc'
        }}
      >
        Add New Lead
      </DialogTitle>

      <DialogContent
        sx={{
          bgcolor: "#F4F6F8", // Lighter background
          p: 3,
          maxHeight: "80vh", // Limit height
          overflowY: "auto", // Allow scrolling
          scrollbarWidth: "thin", // For Firefox
          '&::-webkit-scrollbar': { width: '8px' },
          '&::-webkit-scrollbar-thumb': { backgroundColor: '#bdbdbd', borderRadius: '4px' },
        }}
      >
        {/* Use Box for better structure and styling control */}
        <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={2.5}> {/* Slightly increased spacing */}
                {/* Basic Info Section */}
                <Grid item xs={12}> <Typography variant="subtitle1" gutterBottom sx={{fontWeight: 'bold', color: '#1565C0'}}>Basic Information</Typography> </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Company Name" name="company" value={formData.company} onChange={handleChange} variant="outlined" size="small" required/>
                </Grid>
                 <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} variant="outlined" size="small" type="email" required/>
                 </Grid>
                 <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Contact No." name="phone" value={formData.phone} onChange={handleChange} variant="outlined" size="small" required/>
                 </Grid>
                 <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Designation" name="designation" value={formData.designation} onChange={handleChange} variant="outlined" size="small"/>
                 </Grid>
                 <Grid item xs={12}>
                    <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleChange} variant="outlined" size="small" multiline rows={2}/>
                 </Grid>

                 {/* Lead Details Section */}
                 <Grid item xs={12} mt={2}> <Typography variant="subtitle1" gutterBottom sx={{fontWeight: 'bold', color: '#1565C0'}}>Lead Details</Typography> </Grid>
                 <Grid item xs={12} sm={6}>
                    <TextField select fullWidth label="Lead Source" name="source" value={formData.source} onChange={handleChange} variant="outlined" size="small">
                        {["Website", "Referral", "Social Media", "Cold Call", "Event", "Other"].map( (source) => ( <MenuItem key={source} value={source}>{source}</MenuItem> ))}
                    </TextField>
                 </Grid>
                 <Grid item xs={12} sm={6}>
                    <TextField select fullWidth label="Lead Type" name="leadType" value={formData.leadType} onChange={handleChange} variant="outlined" size="small">
                        {["Hot", "Warm", "Cold"].map((type) => ( <MenuItem key={type} value={type}>{type}</MenuItem> ))}
                    </TextField>
                 </Grid>

                {/* Service Type Section */}
                 <Grid item xs={12} mt={1}>
                     <Typography component="label" variant="subtitle2" sx={{ fontWeight: 'bold', display: 'block', mb: 1, color: '#555' }}> Service Type: </Typography>
                    <Grid container spacing={0}> {/* Reduced spacing for checkboxes */}
                    {serviceOptions.map((service) => (
                        <Grid item xs={6} sm={4} md={2.4} key={service.key}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                name={service.key} // Use key for state management
                                checked={selectedServices[service.key]}
                                onChange={handleCheckboxChange}
                                size="small"
                            />
                            }
                            label={service.label}
                            sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.9rem' } }} // Smaller label
                        />
                        </Grid>
                    ))}
                    </Grid>
                 </Grid>

                {/* Meeting & Follow-up Section */}
                 <Grid item xs={12} mt={2}> <Typography variant="subtitle1" gutterBottom sx={{fontWeight: 'bold', color: '#1565C0'}}>Meeting & Follow-up</Typography> </Grid>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                     <Grid item xs={12} sm={6}>
                        <DatePicker
                            label="Meeting Date"
                            value={selectedMeetDate}
                            onChange={(date) => setSelectedMeetDate(date)}
                            sx={{ width: '100%' }} // Make date picker full width
                            slotProps={{ textField: { size: 'small' } }} // Make input small
                         />
                     </Grid>
                 </LocalizationProvider>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Added By" name="addedBy" value={formData.addedBy} onChange={handleChange} variant="outlined" size="small" />
                 </Grid>
                 <Grid item xs={12}>
                    <TextField fullWidth label="Remark / Comment" name="remark" value={formData.remark} onChange={handleChange} variant="outlined" size="small" multiline rows={3}/>
                 </Grid>
            </Grid>
        </Box>
      </DialogContent>

      <DialogActions sx={{ bgcolor: "#F4F6F8", p: 2, borderTop: '1px solid #eee' }}>
        <Button onClick={handleClose} variant="outlined" color="secondary"> Cancel </Button>
        <Button onClick={handleSubmit} variant="contained" sx={{ bgcolor: "#0D47A1" }}> Add Lead </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddLeadModal;