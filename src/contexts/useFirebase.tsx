import type { User } from 'firebase/auth';
import { createContext, useContext } from 'react';

interface FirebaseContextType {
  currentUser: User | null;
  loading: boolean; // To indicate if Firebase auth state is still being loaded
  logout: () => Promise<void>;
}

export const firebaseContext = createContext<FirebaseContextType | undefined>(
  undefined
);

export const useFirebase = () => {
  const context = useContext(firebaseContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
