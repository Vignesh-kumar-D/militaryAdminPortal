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

interface MiscCourseDetailsProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const MiscCourseDetails = ({ register, errors }: MiscCourseDetailsProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Miscellaneous Course Details</CardTitle>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Course
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="miscCourseName">Course Name</Label>
            <Input
              id="miscCourseName"
              placeholder="Enter Course Name"
              {...register('miscCourseName')}
            />
            {errors.miscCourseName && (
              <p className="text-sm text-red-500">
                {errors.miscCourseName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="miscCourseFrom">From</Label>
            <Input
              id="miscCourseFrom"
              type="date"
              {...register('miscCourseFrom')}
            />
            {errors.miscCourseFrom && (
              <p className="text-sm text-red-500">
                {errors.miscCourseFrom.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="miscCourseTo">To</Label>
            <Input
              id="miscCourseTo"
              type="date"
              {...register('miscCourseTo')}
            />
            {errors.miscCourseTo && (
              <p className="text-sm text-red-500">
                {errors.miscCourseTo.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="miscCourseGrade">Grade</Label>
            <Input
              id="miscCourseGrade"
              placeholder="Enter Grade"
              {...register('miscCourseGrade')}
            />
            {errors.miscCourseGrade && (
              <p className="text-sm text-red-500">
                {errors.miscCourseGrade.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="miscCourseInstitute">Institute</Label>
            <Input
              id="miscCourseInstitute"
              placeholder="Enter Institute"
              {...register('miscCourseInstitute')}
            />
            {errors.miscCourseInstitute && (
              <p className="text-sm text-red-500">
                {errors.miscCourseInstitute.message}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MiscCourseDetails;
