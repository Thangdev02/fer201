import React from 'react';
import { Link } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="admin-managemer-staff">
            <GroupIcon /> Admin Manager Staff
          </Link>
        </li>
        <li>
          <Link to="admin-listuser">
            <AccountCircleIcon /> Admin Management
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
