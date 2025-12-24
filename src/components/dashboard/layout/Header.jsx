import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../../styles/dashboard/layout/Header.css';

const Header = () => {
  const navigate = useNavigate();

  const navItems = [
    { id: 1, name: 'Home', path: '/dashboard', emoji: '🏠' },
    { id: 2, name: 'Work', path: '/dashboard/work', emoji: '💼' },
    { id: 3, name: 'Hire', path: '/dashboard/hire', emoji: '👤' },
    { id: 4, name: 'Site', path: '/dashboard/site', emoji: '🌐' },
    { id: 5, name: 'Logistics', path: '/dashboard/logistics', emoji: '🚚' },
    { id: 6, name: 'Office', path: '/dashboard/office', emoji: '🏢' },
    { id: 7, name: 'Library', path: '/dashboard/library', emoji: '📚' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="dashboard-header-new">
      <div className="header-container">
        {/* Left Side - Logo + Navigation */}
        <div className="header-left-section">
          {/* Logo */}
          <div className="header-logo">
            <img 
              src="/assets/dashboard/images/logo-dark--3oKpEx1.png" 
              alt="Logo" 
              className="logo-image"
            />
          </div>

          {/* Navigation Menu */}
          <nav className="header-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === '/dashboard'}
                className={({ isActive }) =>
                  isActive ? 'nav-item active' : 'nav-item'
                }
              >
                <span className="nav-emoji">{item.emoji}</span>
                <span className="nav-text">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Right Side - Actions + Logo */}
        <div className="header-right-section">
          {/* Action Icons - Vertical Stack */}
          <div className="header-actions">
            {/* Power/Logout Icon */}
            <button className="action-btn" onClick={handleLogout} title="Logout">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </button>

            {/* Settings Icon */}
            <button className="action-btn" title="Settings">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>

            {/* Mail Icon */}
            <button className="action-btn" title="Messages">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </button>

            {/* Notification Bell */}
            <button className="action-btn notification-btn" title="Notifications">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="notification-badge">3</span>
            </button>
          </div>

          {/* Right Logo */}
          <div className="header-brand">
            <img 
              src="/assets/dashboard/images/this-links-CL1fclfw.png" 
              alt="THIS-LINKS" 
              className="brand-logo"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;