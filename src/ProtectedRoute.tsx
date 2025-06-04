import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useFirebase } from './contexts/useFirebase';

interface ProtectedRouteProps {
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = () => {
  const { currentUser, loading } = useFirebase();
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-foreground">Loading authentication...</p>
      </div>
    );
  }

  if (currentUser) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
