import React from 'react';
import { Outlet } from 'react-router-dom';
import ManagerSidebar from './managerSidebar';

const ManagerLayout = () => {
  return (
    <div style={mainWrapperStyle}>
      <div style={managerLayoutStyle}>
        <ManagerSidebar />
        <div style={managerContentStyle}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

// Styles for the main layout
const mainWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};


// Sidebar and content layout
const managerLayoutStyle = {
  display: 'flex',
  flex: 1, // Ensures the sidebar and content fill the screen
  overflow: 'hidden', // Prevents content overflow
};

const managerContentStyle = {
  flex: 1,
  padding: '20px',
  backgroundColor: '#ECECEC',
  overflowY: 'auto', // Enables scrolling if content exceeds height
};

export default ManagerLayout;
