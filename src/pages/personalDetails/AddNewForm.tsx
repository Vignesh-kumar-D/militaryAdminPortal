import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import OfficerDetails from './components/OfficerDetails';
import SpouseDetails from './components/SpouseDetails';
import FamilyMemberDetails from './components/FamilyMemberDetails';
import TenureDetails from './components/TenureDetails';
import CourseDetails from './components/CourseDetails';
import DissertationDetails from './components/DissertationDetails';
import MiscCourseDetails from './components/MiscCourseDetails';
import CivilQualificationDetails from './components/CivilQualificationDetails';
import CRStatusDetails from './components/CRStatusDetails';
import OpsProfileDetails from './components/OpsProfileDetails';
import CommandProfileDetails from './components/CommandProfileDetails';

const AddNewForm = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-7xl">
      <div className="flex items-center gap-4 mb-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/personal-details')}
          className="h-8 w-8"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          Add New Officer Details
        </h1>
      </div>

      <div className="grid gap-8">
        <OfficerDetails />
        <SpouseDetails />
        <FamilyMemberDetails />
        <TenureDetails />
        <CourseDetails />
        <DissertationDetails />
        <MiscCourseDetails />
        <CivilQualificationDetails />
        <CRStatusDetails />
        <OpsProfileDetails />
        <CommandProfileDetails />

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <Button
            variant="outline"
            onClick={() => navigate('/personal-details')}
          >
            Cancel
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Save className="mr-2 h-4 w-4" />
            Save Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddNewForm;
