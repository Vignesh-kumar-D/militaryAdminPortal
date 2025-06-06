import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { db } from './firebase';
import type { FormData } from '../pages/personalDetails/AddNewForm';

interface OfficerDetailsWithId extends FormData {
  id: string;
  createdAt: string;
}

// Add a new officer's personal details
export const addOfficerDetails = async (data: FormData, userId: string) => {
  try {
    const formData = {
      ...data,
      userId,
      createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, 'officerDetails'), formData);
    return { id: docRef.id, ...formData };
  } catch (error) {
    console.error('Error adding officer details:', error);
    throw error;
  }
};

// Get all officer details for a user
export const getOfficerDetails = async (
  userId: string
): Promise<OfficerDetailsWithId[]> => {
  try {
    const q = query(
      collection(db, 'officerDetails'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as OfficerDetailsWithId[];
  } catch (error) {
    console.error('Error getting officer details:', error);
    throw error;
  }
};

// Get a specific officer's details by ID
export const getOfficerDetailsById = async (
  id: string
): Promise<OfficerDetailsWithId | null> => {
  try {
    const q = query(collection(db, 'officerDetails'), where('id', '==', id));

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }

    const doc = querySnapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data(),
    } as OfficerDetailsWithId;
  } catch (error) {
    console.error('Error getting officer details by ID:', error);
    throw error;
  }
};
