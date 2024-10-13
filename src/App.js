import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeCountryPage from "./pages/homeCountryPage";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import CountryBreadcrumbs from "./components/breadcum";
import PrivateRoute from "./routes/privateRoute";
import "./App.css";
import AdminLayout from "./layouts/admin/adminLayouts";
import StaffLayout from "./layouts/staff/staffLayouts";
import ManagerLayout from "./layouts/manager/managerLayouts";
import ManagerProfilePage from "./pages/manager/managerProfilePage";
import ManageRevenuePage from "./pages/manager/managerRevenuePage";
import ManagerAccountPage from "./pages/manager/managerAccount";
import TransactionsPage from "./pages/manager/managerTransaction";
import PayrollPage from "./pages/manager/managerPayroll";

function App() {
  return (
    <Router>
      <Header />
      <CountryBreadcrumbs />

      <div className="main-content">
        <div className="dashboard-layout">
          <div className="dashboard-content">
            <Routes>
              <Route path="/" element={<HomeCountryPage />} />

              <Route
                path="/contact"
                element={
                  <PrivateRoute>
                  </PrivateRoute>
                }
              />

              <Route path="/admin" element={<AdminLayout />}>
              </Route>
              <Route path="/manager" element={<ManagerLayout />}>
              <Route path="manager-profile" element={<ManagerProfilePage />} />
              <Route path="manager-revenue" element={<ManageRevenuePage />} />
              <Route path="manager-account" element={<ManagerAccountPage />} />
              <Route path="manager-transaction" element={<TransactionsPage />} />
              <Route path="manager-payroll" element={<PayrollPage />} />
              </Route>


              <Route path="/staff" element={<StaffLayout />}>
                {" "}
                //staff
                <Route path="staff-management" element={<HomeCountryPage />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
