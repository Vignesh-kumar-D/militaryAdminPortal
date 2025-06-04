// src/pages/ProfilePage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Mail, KeyRound, LogOut, User as UserIcon } from 'lucide-react'; // Renamed User to UserIcon to avoid conflict

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator'; // Assuming you have this (from Shadcn)
import { Skeleton } from '../../components/ui/skeleton'; // Assuming you have this (from Shadcn)

import { useFirebase } from '../../contexts/useFirebase'; // To get currentUser and logout function
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../lib/firebase'; // Ensure this path is correct

const ProfilePage: React.FC = () => {
  const { currentUser, loading, logout } = useFirebase(); // Get auth state and logout function
  const navigate = useNavigate();
  const [isSendingResetEmail, setIsSendingResetEmail] = useState(false);

  const handleSendPasswordReset = async () => {
    if (!currentUser || !currentUser.email) {
      toast.error('No user found or email not available.');
      return;
    }

    setIsSendingResetEmail(true);
    try {
      await sendPasswordResetEmail(auth, currentUser.email);
      toast.success(
        `Password reset link sent to ${currentUser.email}. Check your inbox!`
      );
    } catch (err) {
      const error = err as Error;
      console.error('Error sending password reset email:', error);
      toast.error(
        `Failed to send reset link: ${
          error.message || 'Please try again later.'
        }`
      );
    } finally {
      setIsSendingResetEmail(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); // Redirect to login page after logout
      toast.success('Successfully logged out!');
    } catch (error) {
      console.error('Failed to log out:', error);
      toast.error('Failed to log out. Please try again.');
    }
  };

  // Show a loading state if auth context is still loading
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] p-4">
        <Skeleton className="w-full max-w-md h-[400px] rounded-lg" />
      </div>
    );
  }

  // If for some reason currentUser is null after loading, redirect
  if (!currentUser) {
    navigate('/', { replace: true });
    return null; // Don't render anything if redirecting
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-4 sm:p-6 shadow-xl backdrop-blur-sm bg-card/80 border-border transition-all duration-300 ease-in-out">
        <CardHeader className="text-center mb-6">
          <CardTitle className="text-3xl sm:text-4xl font-heading text-primary font-bold tracking-tight leading-tight">
            User Profile
          </CardTitle>
          <CardDescription className="text-sm sm:text-base text-muted-foreground font-body mt-2">
            Manage your account settings.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Profile Picture Placeholder */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative size-32 rounded-full bg-muted flex items-center justify-center text-muted-foreground border-2 border-primary/20 shadow-lg overflow-hidden">
              {currentUser.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <UserIcon className="size-20 text-muted-foreground/60" />
              )}
              {/* Optional: Edit button for profile pic */}
              {/* <Button
                variant="ghost"
                size="icon"
                className="absolute bottom-0 right-0 bg-background/80 rounded-full border border-border"
                onClick={() => toast.success('Upload profile pic functionality here!')}
              >
                <Pencil className="size-4" />
              </Button> */}
            </div>
            <p className="text-lg sm:text-xl font-heading text-foreground font-semibold flex items-center gap-2">
              <Mail className="size-5 text-primary" />
              {currentUser.email || 'N/A'}
            </p>
            {currentUser.displayName && (
              <p className="text-md sm:text-lg font-body text-muted-foreground">
                {currentUser.displayName}
              </p>
            )}
          </div>

          <Separator className="my-6 bg-border" />

          {/* Actions */}
          <div className="space-y-4">
            <Button
              className="w-full py-3 sm:py-3.5 font-heading tracking-wide text-base sm:text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors duration-200 flex items-center justify-center gap-2"
              onClick={handleSendPasswordReset}
              disabled={isSendingResetEmail || !currentUser.email}
            >
              {isSendingResetEmail ? (
                <>
                  <span className="animate-spin mr-2">⚙️</span> Sending Link...
                </>
              ) : (
                <>
                  <KeyRound className="size-5" /> Change Password
                </>
              )}
            </Button>

            <Button
              className="w-full py-3 sm:py-3.5 font-heading tracking-wide text-base sm:text-lg transition-colors duration-200 flex items-center justify-center gap-2"
              onClick={handleLogout}
            >
              <LogOut className="size-5" /> Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
