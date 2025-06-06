import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';
import { Button } from '../../../components/ui/button';
import { Plus } from 'lucide-react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { FormData } from '../AddNewForm';

interface CivilQualificationDetailsProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const CivilQualificationDetails = ({
  register,
  errors,
}: CivilQualificationDetailsProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Civil Qualification Details</CardTitle>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Qualification
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="courseNo">Course No</Label>
            <Input id="courseNo" placeholder="Enter Course No" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="civilQualification">Qualification</Label>
            <Input
              id="civilQualification"
              placeholder="Enter Qualification"
              {...register('civilQualification')}
            />
            {errors.civilQualification && (
              <p className="text-sm text-red-500">
                {errors.civilQualification.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="civilSubject">Subject</Label>
            <Input
              id="civilSubject"
              placeholder="Enter Subject"
              {...register('civilSubject')}
            />
            {errors.civilSubject && (
              <p className="text-sm text-red-500">
                {errors.civilSubject.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="civilGrade">Grade</Label>
            <Input
              id="civilGrade"
              placeholder="Enter Grade"
              {...register('civilGrade')}
            />
            {errors.civilGrade && (
              <p className="text-sm text-red-500">
                {errors.civilGrade.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="civilFrom">From</Label>
            <Input id="civilFrom" type="date" {...register('civilFrom')} />
            {errors.civilFrom && (
              <p className="text-sm text-red-500">{errors.civilFrom.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="civilTo">To</Label>
            <Input id="civilTo" type="date" {...register('civilTo')} />
            {errors.civilTo && (
              <p className="text-sm text-red-500">{errors.civilTo.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="civilInstitute">Institute</Label>
            <Input
              id="civilInstitute"
              placeholder="Enter Institute"
              {...register('civilInstitute')}
            />
            {errors.civilInstitute && (
              <p className="text-sm text-red-500">
                {errors.civilInstitute.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technical">Technical</SelectItem>
                <SelectItem value="non-technical">Non-Technical</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CivilQualificationDetails;
