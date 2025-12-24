import React from 'react';
import '../../../styles/dashboard/components/FaultsManagement.css';

const FaultsManagement = () => {
  const faultStats = [
    { id: 1, label: 'Reported', value: '0' },
    { id: 2, label: 'Under Assessment', value: '0' },
    { id: 3, label: 'In Repair', value: '0' },
    { id: 4, label: 'Resolved', value: '0' },
  ];

  const handleViewFaults = () => {
    console.log('View Assigned Faults clicked');
    // Add navigation logic here
  };

  return (
    <div className="faults-management">
      {/* Section Title */}
      <h2 className="faults-title">Faults Management</h2>

      {/* Fault Stats Grid */}
      <div className="faults-grid">
        {faultStats.map((stat) => (
          <div key={stat.id} className="fault-stat-card">
            <p className="fault-label">{stat.label}</p>
            <h3 className="fault-value">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* View Button */}
      <button className="view-faults-btn" onClick={handleViewFaults}>
        View Assigned Faults
      </button>
    </div>
  );
};

export default FaultsManagement;