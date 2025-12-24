import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Dashboard imports
import DashboardLayout from './components/dashboard/layout/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Work from './pages/dashboard/Work';
import Hire from './pages/dashboard/Hire';
import Site from './pages/dashboard/Site';
import Logistics from './pages/dashboard/Logistics';
import Office from './pages/dashboard/Office';
import Library from './pages/dashboard/Library';
import Users from './pages/dashboard/Users';
import Projects from './pages/dashboard/Projects';
import Analytics from './pages/dashboard/Analytics';
import Settings from './pages/dashboard/Settings';
import Profile from './pages/dashboard/Profile';

function App() {
  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* DASHBOARD ROUTES */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="work" element={<Work />} />
          <Route path="hire" element={<Hire />} />
          <Route path="site" element={<Site />} />
          <Route path="logistics" element={<Logistics />} />
          <Route path="office" element={<Office />} />
          <Route path="library" element={<Library />} />
          <Route path="users" element={<Users />} />
          <Route path="projects" element={<Projects />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;