import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import type { FormComponentProps } from '../AddNewForm';

const SpouseDetails = ({ register, errors, watch }: FormComponentProps) => {
  const maritalStatus = watch('maritalStatus');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spouse Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="persNo">Pers No</Label>
            <Input id="persNo" placeholder="Enter Pers No" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service</Label>
            <Input id="service" placeholder="Enter Service" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="spouseName">Spouse Name</Label>
            <Input
              id="spouseName"
              placeholder="Enter Spouse Name"
              {...register('spouseName')}
            />
            {errors.spouseName && (
              <p className="text-sm text-red-500">
                {errors.spouseName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="spouseDOB">Date of Birth</Label>
            <Input id="spouseDOB" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="spouseAge">Age</Label>
            <Input id="spouseAge" type="number" placeholder="Enter Age" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="maritalStatus">Marital Status</Label>
            <Input
              id="maritalStatus"
              placeholder="Enter Marital Status"
              {...register('maritalStatus')}
            />
            {errors.maritalStatus && (
              <p className="text-sm text-red-500">
                {errors.maritalStatus.message}
              </p>
            )}
          </div>

          {maritalStatus !== 'single' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="dateOfMarriage">Date of Marriage</Label>
                <Input
                  id="dateOfMarriage"
                  type="date"
                  {...register('dateOfMarriage')}
                />
                {errors.dateOfMarriage && (
                  <p className="text-sm text-red-500">
                    {errors.dateOfMarriage.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="spouseOccupation">Spouse Occupation</Label>
                <Input
                  id="spouseOccupation"
                  placeholder="Enter Spouse Occupation"
                  {...register('spouseOccupation')}
                />
                {errors.spouseOccupation && (
                  <p className="text-sm text-red-500">
                    {errors.spouseOccupation.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="spouseQualification">
                  Spouse Qualification
                </Label>
                <Input
                  id="spouseQualification"
                  placeholder="Enter Spouse Qualification"
                  {...register('spouseQualification')}
                />
                {errors.spouseQualification && (
                  <p className="text-sm text-red-500">
                    {errors.spouseQualification.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="spouseMobile">Spouse Mobile</Label>
                <Input
                  id="spouseMobile"
                  type="tel"
                  placeholder="Enter Spouse Mobile"
                  {...register('spouseMobile')}
                />
                {errors.spouseMobile && (
                  <p className="text-sm text-red-500">
                    {errors.spouseMobile.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="spouseEmail">Spouse Email</Label>
                <Input
                  id="spouseEmail"
                  type="email"
                  placeholder="Enter Spouse Email"
                  {...register('spouseEmail')}
                />
                {errors.spouseEmail && (
                  <p className="text-sm text-red-500">
                    {errors.spouseEmail.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 col-span-full">
                <Label htmlFor="spouseAddress">Spouse Address</Label>
                <Input
                  id="spouseAddress"
                  placeholder="Enter Spouse Address"
                  {...register('spouseAddress')}
                />
                {errors.spouseAddress && (
                  <p className="text-sm text-red-500">
                    {errors.spouseAddress.message}
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SpouseDetails;
