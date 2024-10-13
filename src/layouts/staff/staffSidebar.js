import React from "react";
import { Link } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const StaffSidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="staff-management">
            <GroupIcon /> Staff Management
          </Link>
        </li>
        <li>
          <Link to="account-management">
            <AccountCircleIcon /> Staff Management
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default StaffSidebar;
