// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import necessary components
import LoginPage from './pages/login';
import HomePage from './pages/dashboard';
import Header from './components/shared/Header';
import BottomNavbar from './components/Shared/BottomNavbar';

// Placeholder pages for the 5 options + Profile
const PersonalDetailsPage = () => (
  <div className="pt-10rem pb-10rem min-h-screen bg-background text-foreground flex items-center justify-center font-heading text-4xl">
    Personal Details Page
  </div>
);
const MedicalRecordPage = () => (
  <div className="pt-10rem pb-10rem min-h-screen bg-background text-foreground flex items-center justify-center font-heading text-4xl">
    Medical Record Page
  </div>
);
const ParadeStatePage = () => (
  <div className="pt-10rem pb-10rem min-h-screen bg-background text-foreground flex items-center justify-center font-heading text-4xl">
    Parade State Page
  </div>
);
const QueryPage = () => (
  <div className="pt-10rem pb-10rem min-h-screen bg-background text-foreground flex items-center justify-center font-heading text-4xl">
    Query Page
  </div>
);
const SchedulePage = () => (
  <div className="pt-10rem pb-10rem min-h-screen bg-background text-foreground flex items-center justify-center font-heading text-4xl">
    Schedule Page
  </div>
);
const ProfilePage = () => (
  <div className="pt-10rem pb-10rem min-h-screen bg-background text-foreground flex items-center justify-center font-heading text-4xl">
    Profile Page
  </div>
);

function App() {
  // You would typically manage authentication state here or via Context
  // For now, we'll just allow direct access to /login and /dashboard

  return (
    <>
      {/* Header for desktop/tablet */}
      <Header />

      {/* Main content area, adjusted for fixed header/footer */}
      <main className="pt-8rem pb-8rem md:pt-10rem md:pb-10rem">
        {' '}
        {/* Add padding to account for fixed headers */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/personal" element={<PersonalDetailsPage />} />
          <Route path="/medical" element={<MedicalRecordPage />} />
          <Route path="/parade" element={<ParadeStatePage />} />
          <Route path="/query" element={<QueryPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* Redirect any other path to the login page */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </main>

      {/* Bottom Navigation for mobile */}
      <BottomNavbar />
    </>
  );
}

export default App;
