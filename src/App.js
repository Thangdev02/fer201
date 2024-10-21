import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layouts/header";
import CountryBreadcrumbs from "./components/breadcum";
import PrivateRoute from "./routes/privateRoute";  // Import PrivateRoute
import "./App.css";
import AdminLayout from "./layouts/admin/adminLayouts";
import StaffLayout from "./layouts/staff/staffLayouts";
import ManagerLayout from "./layouts/manager/managerLayouts";
import ManagerProfilePage from "./pages/manager/managerProfilePage";
import ManageRevenuePage from "./pages/manager/managerRevenuePage";
import ManagerAccountPage from "./pages/manager/managerAccount";
import TransactionsPage from "./pages/manager/managerTransaction";
import PayrollPage from "./pages/manager/managerPayroll";
import Login from "./pages/login";
import HomePage from "./pages/homePage";
import ManageOrchid from "./pages/manager/manageOrchid";
import Signup from "./pages/signupPage";
import ExamComponent from "./pages/examPage";

function App() {
  return (
    <Router>
      <Header />
      <CountryBreadcrumbs />

      <div className="main-content">
        <div className="dashboard-layout">
          <div className="dashboard-content">
            <Routes>
              {/* Public routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/exam" element={<ExamComponent />} />

              {/* Admin routes */}
              <Route path="/admin" element={<AdminLayout />} />

              {/* Manager routes - Protected with PrivateRoute */}
              <Route
                path="/manager"
                element={
                  <PrivateRoute>
                    <ManagerLayout />
                  </PrivateRoute>
                }
              >
                <Route path="manager-profile" element={<PrivateRoute><ManagerProfilePage /></PrivateRoute>} />
                <Route path="manager-revenue" element={<ManageRevenuePage />} />
                <Route path="manager-account" element={<ManagerAccountPage />} />
                <Route path="manager-transaction" element={<TransactionsPage />} />
                <Route path="manager-payroll" element={<PayrollPage />} />
                <Route path="manager-orchid" element={<ManageOrchid />} />
              </Route>

              {/* Staff routes */}
              <Route path="/staff" element={<StaffLayout />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
