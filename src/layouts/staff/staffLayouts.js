import React from 'react';
import { Outlet } from 'react-router-dom';
import StaffSidebar from './staffSidebar';

const StafffLayout = () => {
  return (
    <div>
      
      <div style={adminLayoutStyle}>
        <StaffSidebar />
        <div style={adminContentStyle}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};


const adminLayoutStyle = {
  display: 'flex',
  height: '100vh',
  
};

const adminContentStyle = {
  flex: 1, // Takes up the remaining space
  padding: '20px',
  backgroundColor: '#f1f1f1',
};

// Inline styles for the sidebar
const sidebarStyle = {
  width: '250px',
  height: '100vh',
  backgroundColor: '#343a40',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
};

export default StafffLayout;
