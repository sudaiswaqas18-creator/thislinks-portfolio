import React from 'react';
import Calendar from '../../components/dashboard/widgets/Calendar';
import TasksPanel from '../../components/dashboard/widgets/TasksPanel';
import FaultsManagement from '../../components/dashboard/widgets/FaultsManagement';
import '../../styles/dashboard/pages/Dashboard.css';

const Dashboard = () => {
  const statsData = [
    {
      id: 1,
      title: 'Active jobs',
      value: '0',
      icon: '/assets/dashboard/images/active-job-CEMZQX6Z.svg',
      gradient: 'linear-gradient(90deg, #00b09b, #06c328)',
    },
    {
      id: 2,
      title: 'Pending jobs',
      value: '0',
      icon: '/assets/dashboard/images/download.svg',
      gradient: 'linear-gradient(90deg, #00b09b, #06c328)',
    },
    {
      id: 3,
      title: 'Expired jobs',
      value: '0',
      icon: '/assets/dashboard/images/download (1).svg',
      gradient: 'linear-gradient(90deg, #00b09b, #06c328)',
    },
    {
      id: 4,
      title: 'Complete jobs',
      value: '0',
      icon: '/assets/dashboard/images/complete-job-CABcg6R4.svg',
      gradient: 'linear-gradient(90deg, #00b09b, #06c328)',
    },
  ];

  return (
    <div className="dashboard-page">
      {/* Page Title */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
      </div>

      {/* Stats Cards Grid */}
      <div className="dashboard-stats-grid">
        {statsData.map((stat) => (
          <div key={stat.id} className="dashboard-stat-card">
            {/* Icon Box with Gradient */}
            <div 
              className="stat-icon-box"
              style={{ background: stat.gradient }}
            >
              <img 
                src={stat.icon} 
                alt={stat.title}
                className="stat-icon"
              />
            </div>
  <div className="stat-content">
              <p className="stat-title">{stat.title}</p>
              <h2 className="stat-value">{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Calendar and Tasks Section */}
      <div className="dashboard-calendar-tasks">
        <Calendar />
        <TasksPanel />
      </div>
       {/* Faults Management Section */}
      <div className="dashboard-faults-section">
        <FaultsManagement />
      </div>
    </div>
  );
};

export default Dashboard;