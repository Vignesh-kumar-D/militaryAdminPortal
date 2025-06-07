import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFirebase } from '../../contexts/useFirebase';
import { toast } from 'sonner';
import { addOfficerDetails } from '../../lib/firebaseUtils';
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
import type {
  UseFormRegister,
  FieldErrors,
  Control,
  UseFormWatch,
} from 'react-hook-form';

// Define the form schema using zod
const formSchema = z.object({
  // Officer Details
  icNo: z.string().min(1, 'IC No is required'),
  rank: z.string().min(1, 'Rank is required'),
  name: z.string().min(1, 'Name is required'),
  hons: z.string().optional(),
  haq: z.string().optional(),
  regt: z.string().optional(),
  dob: z.string().min(1, 'Date of Birth is required'),
  doc: z.string().min(1, 'Date of Commission is required'),
  dos: z.string().min(1, 'Date of Service is required'),
  medCatMaint: z.string().optional(),
  medCatLastCR: z.string().optional(),
  lastCRDate: z.string().optional(),
  critFP: z.string().optional(),
  sb: z.string().optional(),
  appt: z.string().optional(),
  unit: z.string().optional(),
  typeOfEntry: z.string().optional(),
  homeTown: z.string().optional(),
  state: z.string().optional(),
  motherTongue: z.string().optional(),
  gender: z.string().min(1, 'Gender is required'),
  language: z.string().optional(),
  mobileNo: z.string().min(10, 'Valid mobile number is required'),
  nicEmail: z.string().email('Valid NIC email is required'),
  personalEmail: z.string().email('Valid personal email is required'),
  cdaNo: z.string().optional(),
  aadhaarNo: z.string().optional(),
  height: z.string().optional(),
  nrs: z.string().optional(),
  school: z.string().optional(),
  permanentAddress: z.string().optional(),

  // Spouse Details
  maritalStatus: z.string().min(1, 'Marital Status is required'),
  dateOfMarriage: z.string().optional(),
  spouseName: z.string().optional(),
  spouseOccupation: z.string().optional(),
  spouseQualification: z.string().optional(),
  spouseMobile: z.string().optional(),
  spouseEmail: z.string().optional(),
  spouseAddress: z.string().optional(),

  // Family Member Details
  familyMembers: z
    .array(
      z.object({
        name: z.string().optional(),
        relation: z.string().optional(),
        age: z.number().optional(),
        occupation: z.string().optional(),
        qualification: z.string().optional(),
        mobile: z.string().optional(),
        email: z.string().optional(),
        address: z.string().optional(),
      })
    )
    .optional(),

  // Tenure Details
  from: z.string().optional(),
  to: z.string().optional(),
  tenureRank: z.string().optional(),
  tenureAppt: z.string().optional(),
  tenureUnit: z.string().optional(),

  // Course Details
  courseName: z.string().optional(),
  courseFrom: z.string().optional(),
  courseTo: z.string().optional(),
  courseGrade: z.string().optional(),
  courseInstitute: z.string().optional(),

  // Dissertation Details
  dissertationTitle: z.string().optional(),
  dissertationFrom: z.string().optional(),
  dissertationTo: z.string().optional(),
  dissertationGrade: z.string().optional(),
  dissertationInstitute: z.string().optional(),

  // Misc Course Details
  miscCourseName: z.string().optional(),
  miscCourseFrom: z.string().optional(),
  miscCourseTo: z.string().optional(),
  miscCourseGrade: z.string().optional(),
  miscCourseInstitute: z.string().optional(),

  // Civil Qualification Details
  civilQualification: z.string().optional(),
  civilSubject: z.string().optional(),
  civilGrade: z.string().optional(),
  civilFrom: z.string().optional(),
  civilTo: z.string().optional(),
  civilInstitute: z.string().optional(),

  // CR Status Details
  repNo: z.string().optional(),
  crFrom: z.string().optional(),
  crTo: z.string().optional(),
  crRank: z.string().optional(),
  crAppt: z.string().optional(),
  crCrit: z.string().optional(),
  crUnit: z.string().optional(),
  crMedCat: z.string().optional(),
  crPeaceFdHighAlt: z.string().optional(),

  // Ops Profile Details
  peaceMonths: z.number().optional(),
  fieldMonths: z.number().optional(),
  highAltMonths: z.number().optional(),
  ciOpsMonths: z.number().optional(),

  // Command Profile Details
  ncPercentage: z.number().optional(),
  scPercentage: z.number().optional(),
  ecPercentage: z.number().optional(),
  wcPercentage: z.number().optional(),
  swPercentage: z.number().optional(),
  xcPercentage: z.number().optional(),
  sePercentage: z.number().optional(),
  sfPercentage: z.number().optional(),
  fcPercentage: z.number().optional(),
});

export type FormData = z.infer<typeof formSchema>;

export interface FormComponentProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  control?: Control<FormData>;
  watch?: UseFormWatch<FormData>;
}

const AddNewForm = () => {
  const navigate = useNavigate();
  const { currentUser } = useFirebase();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      familyMembers: [],
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    try {
      if (!currentUser) {
        toast.error('You must be logged in to submit this form');
        return;
      }

      await addOfficerDetails(data, currentUser.uid);
      toast.success('Officer details saved successfully');
      navigate('/personal-details');
    } catch (error) {
      console.error('Error saving officer details:', error);
      toast.error('Failed to save officer details');
    }
  };

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

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
        <OfficerDetails register={register} errors={errors} />
        <SpouseDetails register={register} errors={errors} watch={watch} />
        <FamilyMemberDetails
          register={register}
          errors={errors}
          control={control}
        />
        <TenureDetails register={register} errors={errors} />
        <CourseDetails register={register} errors={errors} />
        <DissertationDetails register={register} errors={errors} />
        <MiscCourseDetails register={register} errors={errors} />
        <CivilQualificationDetails register={register} errors={errors} />
        <CRStatusDetails register={register} errors={errors} />
        <OpsProfileDetails register={register} errors={errors} />
        <CommandProfileDetails register={register} errors={errors} />

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/personal-details')}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            <Save className="mr-2 h-4 w-4" />
            {isSubmitting ? 'Saving...' : 'Save Details'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewForm;
