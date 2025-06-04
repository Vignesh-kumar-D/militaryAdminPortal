import { useEffect, useState, type ReactNode } from 'react';
import { onAuthStateChanged, type User, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase'; // Ensure this path is correct
import { firebaseContext } from './useFirebase';

interface FirebaseProviderProps {
  children: ReactNode;
}

export const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Start as true

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // Auth state has been determined
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  const value = {
    currentUser,
    loading,
    logout,
  };

  return (
    <firebaseContext.Provider value={value}>
      {children}
    </firebaseContext.Provider>
  );
};
