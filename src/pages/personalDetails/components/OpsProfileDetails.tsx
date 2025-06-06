import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { FormData } from '../AddNewForm';

interface OpsProfileDetailsProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const OpsProfileDetails = ({ register, errors }: OpsProfileDetailsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Operational Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="peaceMonths">Peace Months</Label>
            <Input
              id="peaceMonths"
              type="number"
              placeholder="Enter Peace Months"
              {...register('peaceMonths', { valueAsNumber: true })}
            />
            {errors.peaceMonths && (
              <p className="text-sm text-red-500">
                {errors.peaceMonths.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="fieldMonths">Field Months</Label>
            <Input
              id="fieldMonths"
              type="number"
              placeholder="Enter Field Months"
              {...register('fieldMonths', { valueAsNumber: true })}
            />
            {errors.fieldMonths && (
              <p className="text-sm text-red-500">
                {errors.fieldMonths.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="highAltMonths">High Alt Months</Label>
            <Input
              id="highAltMonths"
              type="number"
              placeholder="Enter High Alt Months"
              {...register('highAltMonths', { valueAsNumber: true })}
            />
            {errors.highAltMonths && (
              <p className="text-sm text-red-500">
                {errors.highAltMonths.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="ciOpsMonths">CI Ops Months</Label>
            <Input
              id="ciOpsMonths"
              type="number"
              placeholder="Enter CI Ops Months"
              {...register('ciOpsMonths', { valueAsNumber: true })}
            />
            {errors.ciOpsMonths && (
              <p className="text-sm text-red-500">
                {errors.ciOpsMonths.message}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OpsProfileDetails;
