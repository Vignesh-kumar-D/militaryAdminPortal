import { Button } from '../../components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { useNavigate } from 'react-router-dom';

const PersonalDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Personal Details</CardTitle>
          <Button onClick={() => navigate('/personal-details/add')}>
            Add New
          </Button>
        </CardHeader>
        <CardContent>
          {/* List of personal details will be added here */}
          <div className="text-center text-muted-foreground">
            No personal details found. Click "Add New" to create one.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalDetails;
