import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import AllLeads from "./pages/AllLeads";
import UserList from "./pages/UserList"; // Import UserList component
import LeadReport from "./pages/LeadReport"; // Import UserList component
import Leadsource from "./pages/Leadsource"; // Import UserList component
import Meetingreport from "./pages/Meetingreport"; // Import UserList component


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/allleads" element={<AllLeads />} />
        <Route path="/master/user" element={<UserList />} /> {/* Add this line */}
        <Route path="/reports/leads" element={<LeadReport />} /> {/* Add this line */}
        <Route path="/master/lead-sources" element={<Leadsource/>} /> {/* Add this line */}
        <Route path="/reports/meetings" element={<Meetingreport/>} /> {/* Add this line */}
        
      </Routes>
    </Router>
  );
};

export default App;
