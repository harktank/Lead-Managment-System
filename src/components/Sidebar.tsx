import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
  Box,
  Divider,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Dashboard,
  People,
  Business,
  Source,
  Feedback,
  BarChart,
  Assignment,
  AccountCircle,
  Settings,
  Person,
  Build, // Services Icon
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [openMaster, setOpenMaster] = React.useState(false);
  const [openReports, setOpenReports] = React.useState(false);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        bgcolor: "#1E293B", // Dark Navy Blue
        color: "white",
        "& .MuiDrawer-paper": {
          width: 260,
          bgcolor: "#1E293B",
          color: "white",
          borderRight: "none",
          overflowX: "hidden",
          overflowY: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        },
      }}
    >
      <List sx={{ width: "100%", bgcolor: "#1E293B", color: "white", paddingTop: 2, marginBottom: "auto" }}>
        {/* Dashboard */}
        <ListItemButton component={Link} to="/dashboard" sx={{ "&:hover": { bgcolor: "#2563EB", color: "white" } }}>
          <ListItemIcon sx={{ color: "white" }}>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        {/* Master Dropdown */}
        <ListItemButton onClick={() => setOpenMaster(!openMaster)} sx={{ "&:hover": { bgcolor: "#2563EB", color: "white" } }}>
          <ListItemIcon sx={{ color: "white" }}>
            <People />
          </ListItemIcon>
          <ListItemText primary="Master" />
          {openMaster ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMaster} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/master/user" sx={{ pl: 4, "&:hover": { bgcolor: "#2563EB", color: "white" } }}>
              <ListItemIcon sx={{ color: "white" }}>
                <Person />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItemButton>
            <ListItemButton component={Link} to="/master/services" sx={{ pl: 4, "&:hover": { bgcolor: "#2563EB", color: "white" } }}>
              <ListItemIcon sx={{ color: "white" }}>
                <Build />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItemButton>
            <ListItemButton component={Link} to="/master/lead-sources" sx={{ pl: 4, "&:hover": { bgcolor: "#2563EB", color: "white" } }}>
              <ListItemIcon sx={{ color: "white" }}>
                <Source />
              </ListItemIcon>
              <ListItemText primary="Lead Sources" />
            </ListItemButton>
            <ListItemButton component={Link} to="/master/quick-feedback" sx={{ pl: 4, "&:hover": { bgcolor: "#2563EB", color: "white" } }}>
              <ListItemIcon sx={{ color: "white" }}>
                <Feedback />
              </ListItemIcon>
              <ListItemText primary="Quick Feedback" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* All Leads */}
        <ListItemButton component={Link} to="/allleads" sx={{ "&:hover": { bgcolor: "#2563EB", color: "white" } }}>
          <ListItemIcon sx={{ color: "white" }}>
            <Business />
          </ListItemIcon>
          <ListItemText primary="All Leads" />
        </ListItemButton>

        {/* Reports Dropdown */}
        <ListItemButton onClick={() => setOpenReports(!openReports)} sx={{ "&:hover": { bgcolor: "#2563EB", color: "white" } }}>
          <ListItemIcon sx={{ color: "white" }}>
            <BarChart />
          </ListItemIcon>
          <ListItemText primary="Reports" />
          {openReports ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openReports} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/reports/leads" sx={{ pl: 4, "&:hover": { bgcolor: "#2563EB", color: "white" } }}>
              <ListItemIcon sx={{ color: "white" }}>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Lead Reports" />
            </ListItemButton>
            <ListItemButton component={Link} to="/reports/meetings" sx={{ pl: 4, "&:hover": { bgcolor: "#2563EB", color: "white" } }}>
              <ListItemIcon sx={{ color: "white" }}>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Meeting Reports" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      {/* Bottom Section - Profile & Settings */}
      <Box sx={{ mb: 4 }}>
        <Divider sx={{ bgcolor: "white", my: 1 }} />

        {/* Profile */}
        <ListItemButton component={Link} to="/profile" sx={{ "&:hover": { bgcolor: "#2563EB", color: "white" } }}>
          <ListItemIcon sx={{ color: "white" }}>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>

        {/* Settings */}
        <ListItemButton component={Link} to="/settings" sx={{ "&:hover": { bgcolor: "#2563EB", color: "white" } }}>
          <ListItemIcon sx={{ color: "white" }}>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
