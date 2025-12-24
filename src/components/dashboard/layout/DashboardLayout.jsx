import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import '../../../styles/dashboard/layout/DashboardLayout.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Header />
      <main className="dashboard-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;