// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom'; // Import necessary components
import LoginPage from './pages/login';
import HomePage from './pages/dashboard';
import Header from './components/shared/Header';
import BottomNavbar from './components/shared/BottomNavbar';
import { useFirebase } from './contexts/useFirebase';
import ProfilePage from './pages/profile';
import PersonalDetails from './pages/personalDetails';
import AddNewForm from './pages/personalDetails/AddNewForm';
import ProtectedRoute from './ProtectedRoute';
import { Toaster } from 'sonner';
// Placeholder pages for the 5 options + Profile

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

function App() {
  const { currentUser } = useFirebase();
  return (
    <>
      {/* Header for desktop/tablet */}
      {!!currentUser && <Header />}

      {/* Main content area, adjusted for fixed header/footer */}
      <main className="pt-8rem pb-8rem md:pt-10rem md:pb-10rem bg-background">
        {' '}
        {/* Add padding to account for fixed headers */}
        <Routes>
          <Route
            path="/login"
            element={currentUser ? <Navigate to="/dashboard" /> : <LoginPage />}
          />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<HomePage />} />
            <Route path="/personal-details" element={<PersonalDetails />} />
            <Route path="/personal-details/add" element={<AddNewForm />} />
            <Route path="/medical" element={<MedicalRecordPage />} />
            <Route path="/parade" element={<ParadeStatePage />} />
            <Route path="/query" element={<QueryPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* Redirect any other path to the login page */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </main>

      {/* Bottom Navigation for mobile */}
      {!!currentUser && <BottomNavbar />}
      <Toaster richColors position="top-center" />
    </>
  );
}

export default App;
