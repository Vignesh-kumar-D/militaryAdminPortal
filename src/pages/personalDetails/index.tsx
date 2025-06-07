import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../../contexts/useFirebase';
import { getOfficerDetails } from '../../lib/firebaseUtils';
import { Button } from '../../components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Plus } from 'lucide-react';
import type { FormData } from './AddNewForm';

interface OfficerDetailsWithId extends FormData {
  id: string;
  createdAt: string;
}

const PersonalDetailsList = () => {
  const navigate = useNavigate();
  const { currentUser } = useFirebase();
  const [officerDetails, setOfficerDetails] = useState<OfficerDetailsWithId[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOfficerDetails = async () => {
      try {
        if (!currentUser) {
          setError('You must be logged in to view officer details');
          setLoading(false);
          return;
        }

        const details = await getOfficerDetails(currentUser.uid);
        setOfficerDetails(details);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching officer details:', error);
        setError('Failed to fetch officer details');
        setLoading(false);
      }
    };

    fetchOfficerDetails();
  }, [currentUser]);

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-7xl">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-7xl">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-7xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Officer Details</h1>
        <Button onClick={() => navigate('/personal-details/add')}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>

      <div className="grid gap-6">
        {officerDetails.length === 0 ? (
          <Card>
            <CardContent className="py-8">
              <p className="text-center text-muted-foreground">
                No officer details found. Click the "Add New" button to add
                details.
              </p>
            </CardContent>
          </Card>
        ) : (
          officerDetails.map((details) => (
            <Card key={details.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>
                    {details.rank} {details.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    IC No: {details.icNo}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium">Date of Birth</p>
                    <p className="text-sm text-muted-foreground">
                      {details.dob}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Date of Commission</p>
                    <p className="text-sm text-muted-foreground">
                      {details.doc}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Date of Service</p>
                    <p className="text-sm text-muted-foreground">
                      {details.dos}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Unit</p>
                    <p className="text-sm text-muted-foreground">
                      {details.unit}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Appointment</p>
                    <p className="text-sm text-muted-foreground">
                      {details.appt}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Medical Category</p>
                    <p className="text-sm text-muted-foreground">
                      {details.medCatMaint}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default PersonalDetailsList;
