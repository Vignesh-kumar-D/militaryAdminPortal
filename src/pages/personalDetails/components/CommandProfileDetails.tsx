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

interface CommandProfileDetailsProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const CommandProfileDetails = ({
  register,
  errors,
}: CommandProfileDetailsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Command Profile Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="ncPercentage">NC %</Label>
            <Input
              id="ncPercentage"
              type="number"
              placeholder="Enter NC %"
              {...register('ncPercentage', { valueAsNumber: true })}
            />
            {errors.ncPercentage && (
              <p className="text-sm text-red-500">
                {errors.ncPercentage.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="scPercentage">SC %</Label>
            <Input
              id="scPercentage"
              type="number"
              placeholder="Enter SC %"
              {...register('scPercentage', { valueAsNumber: true })}
            />
            {errors.scPercentage && (
              <p className="text-sm text-red-500">
                {errors.scPercentage.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="ecPercentage">EC %</Label>
            <Input
              id="ecPercentage"
              type="number"
              placeholder="Enter EC %"
              {...register('ecPercentage', { valueAsNumber: true })}
            />
            {errors.ecPercentage && (
              <p className="text-sm text-red-500">
                {errors.ecPercentage.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="wcPercentage">WC %</Label>
            <Input
              id="wcPercentage"
              type="number"
              placeholder="Enter WC %"
              {...register('wcPercentage', { valueAsNumber: true })}
            />
            {errors.wcPercentage && (
              <p className="text-sm text-red-500">
                {errors.wcPercentage.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="swPercentage">SW %</Label>
            <Input
              id="swPercentage"
              type="number"
              placeholder="Enter SW %"
              {...register('swPercentage', { valueAsNumber: true })}
            />
            {errors.swPercentage && (
              <p className="text-sm text-red-500">
                {errors.swPercentage.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="xcPercentage">XC %</Label>
            <Input
              id="xcPercentage"
              type="number"
              placeholder="Enter XC %"
              {...register('xcPercentage', { valueAsNumber: true })}
            />
            {errors.xcPercentage && (
              <p className="text-sm text-red-500">
                {errors.xcPercentage.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="sePercentage">SE %</Label>
            <Input
              id="sePercentage"
              type="number"
              placeholder="Enter SE %"
              {...register('sePercentage', { valueAsNumber: true })}
            />
            {errors.sePercentage && (
              <p className="text-sm text-red-500">
                {errors.sePercentage.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="sfPercentage">SF %</Label>
            <Input
              id="sfPercentage"
              type="number"
              placeholder="Enter SF %"
              {...register('sfPercentage', { valueAsNumber: true })}
            />
            {errors.sfPercentage && (
              <p className="text-sm text-red-500">
                {errors.sfPercentage.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="fcPercentage">FC %</Label>
            <Input
              id="fcPercentage"
              type="number"
              placeholder="Enter FC %"
              {...register('fcPercentage', { valueAsNumber: true })}
            />
            {errors.fcPercentage && (
              <p className="text-sm text-red-500">
                {errors.fcPercentage.message}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommandProfileDetails;
