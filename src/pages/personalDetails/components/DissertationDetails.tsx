import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import type { FormComponentProps } from '../AddNewForm';

const DissertationDetails = ({ register, errors }: FormComponentProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dissertation Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dissertationTitle">Title</Label>
            <Input
              id="dissertationTitle"
              placeholder="Enter Title"
              {...register('dissertationTitle')}
            />
            {errors.dissertationTitle && (
              <p className="text-sm text-red-500">
                {errors.dissertationTitle.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="dissertationFrom">From</Label>
            <Input
              id="dissertationFrom"
              type="date"
              {...register('dissertationFrom')}
            />
            {errors.dissertationFrom && (
              <p className="text-sm text-red-500">
                {errors.dissertationFrom.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="dissertationTo">To</Label>
            <Input
              id="dissertationTo"
              type="date"
              {...register('dissertationTo')}
            />
            {errors.dissertationTo && (
              <p className="text-sm text-red-500">
                {errors.dissertationTo.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="dissertationGrade">Grade</Label>
            <Input
              id="dissertationGrade"
              placeholder="Enter Grade"
              {...register('dissertationGrade')}
            />
            {errors.dissertationGrade && (
              <p className="text-sm text-red-500">
                {errors.dissertationGrade.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="dissertationInstitute">Institute</Label>
            <Input
              id="dissertationInstitute"
              placeholder="Enter Institute"
              {...register('dissertationInstitute')}
            />
            {errors.dissertationInstitute && (
              <p className="text-sm text-red-500">
                {errors.dissertationInstitute.message}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DissertationDetails;
