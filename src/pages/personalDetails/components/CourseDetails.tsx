import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Button } from '../../../components/ui/button';
import { Plus } from 'lucide-react';
import type { FormComponentProps } from '../AddNewForm';

const CourseDetails = ({ register, errors }: FormComponentProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Course Details</CardTitle>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Course
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="courseName">Course Name</Label>
            <Input
              id="courseName"
              placeholder="Enter Course Name"
              {...register('courseName')}
            />
            {errors.courseName && (
              <p className="text-sm text-red-500">
                {errors.courseName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="courseFrom">From</Label>
            <Input id="courseFrom" type="date" {...register('courseFrom')} />
            {errors.courseFrom && (
              <p className="text-sm text-red-500">
                {errors.courseFrom.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="courseTo">To</Label>
            <Input id="courseTo" type="date" {...register('courseTo')} />
            {errors.courseTo && (
              <p className="text-sm text-red-500">{errors.courseTo.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="courseGrade">Grade</Label>
            <Input
              id="courseGrade"
              placeholder="Enter Grade"
              {...register('courseGrade')}
            />
            {errors.courseGrade && (
              <p className="text-sm text-red-500">
                {errors.courseGrade.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="courseInstitute">Institute</Label>
            <Input
              id="courseInstitute"
              placeholder="Enter Institute"
              {...register('courseInstitute')}
            />
            {errors.courseInstitute && (
              <p className="text-sm text-red-500">
                {errors.courseInstitute.message}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseDetails;
