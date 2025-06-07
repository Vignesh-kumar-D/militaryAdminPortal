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
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { FormData } from '../AddNewForm';

interface OfficerDetailsProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const OfficerDetails = ({ register, errors }: OfficerDetailsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Officer Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="icNo">IC No</Label>
            <Input id="icNo" placeholder="Enter IC No" {...register('icNo')} />
            {errors.icNo && (
              <p className="text-sm text-red-500">{errors.icNo.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="rank">Rank</Label>
            <Input id="rank" placeholder="Enter Rank" {...register('rank')} />
            {errors.rank && (
              <p className="text-sm text-red-500">{errors.rank.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter name" {...register('name')} />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="hons">Hons</Label>
            <Input id="hons" placeholder="Enter Hons" {...register('hons')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="haq">HAQ</Label>
            <Input id="haq" placeholder="Enter HAQ" {...register('haq')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="regt">Regt</Label>
            <Input id="regt" placeholder="Enter Regt" {...register('regt')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" {...register('dob')} />
            {errors.dob && (
              <p className="text-sm text-red-500">{errors.dob.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="doc">Date of Commission</Label>
            <Input id="doc" type="date" {...register('doc')} />
            {errors.doc && (
              <p className="text-sm text-red-500">{errors.doc.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="dos">Date of Service</Label>
            <Input id="dos" type="date" {...register('dos')} />
            {errors.dos && (
              <p className="text-sm text-red-500">{errors.dos.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="medCatMaint">MedCat(Maint)</Label>
            <Input
              id="medCatMaint"
              placeholder="Enter MedCat(Maint)"
              {...register('medCatMaint')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="medCatLastCR">MedCat(LastCR)</Label>
            <Input
              id="medCatLastCR"
              placeholder="Enter MedCat(LastCR)"
              {...register('medCatLastCR')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastCRDate">LastCR Date</Label>
            <Input id="lastCRDate" type="date" {...register('lastCRDate')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="critFP">Crit(F+P)</Label>
            <Input
              id="critFP"
              placeholder="Enter Crit(F+P)"
              {...register('critFP')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sb">SB</Label>
            <Input id="sb" placeholder="Enter SB" {...register('sb')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="appt">Appt</Label>
            <Input id="appt" placeholder="Enter Appt" {...register('appt')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="unit">Unit</Label>
            <Input id="unit" placeholder="Enter Unit" {...register('unit')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="typeOfEntry">Type of Entry</Label>
            <Input
              id="typeOfEntry"
              placeholder="Enter Type of Entry"
              {...register('typeOfEntry')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="homeTown">Home Town</Label>
            <Input
              id="homeTown"
              placeholder="Enter Home Town"
              {...register('homeTown')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              placeholder="Enter State"
              {...register('state')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="motherTongue">Mother Tongue</Label>
            <Input
              id="motherTongue"
              placeholder="Enter Mother Tongue"
              {...register('motherTongue')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select
              onValueChange={(value) =>
                register('gender').onChange({ target: { value } })
              }
            >
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && (
              <p className="text-sm text-red-500">{errors.gender.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Input
              id="language"
              placeholder="Enter Language"
              {...register('language')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobileNo">Mobile No</Label>
            <Input
              id="mobileNo"
              type="tel"
              placeholder="Enter Mobile No"
              {...register('mobileNo')}
            />
            {errors.mobileNo && (
              <p className="text-sm text-red-500">{errors.mobileNo.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="nicEmail">NIC Email</Label>
            <Input
              id="nicEmail"
              type="email"
              placeholder="Enter NIC Email"
              {...register('nicEmail')}
            />
            {errors.nicEmail && (
              <p className="text-sm text-red-500">{errors.nicEmail.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="personalEmail">Personal Email</Label>
            <Input
              id="personalEmail"
              type="email"
              placeholder="Enter Personal Email"
              {...register('personalEmail')}
            />
            {errors.personalEmail && (
              <p className="text-sm text-red-500">
                {errors.personalEmail.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cdaNo">CDA No</Label>
            <Input
              id="cdaNo"
              placeholder="Enter CDA No"
              {...register('cdaNo')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="aadhaarNo">Aadhaar No</Label>
            <Input
              id="aadhaarNo"
              placeholder="Enter Aadhaar No"
              {...register('aadhaarNo')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="height">Height</Label>
            <Input
              id="height"
              placeholder="Enter Height"
              {...register('height')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nrs">NRS</Label>
            <Input id="nrs" placeholder="Enter NRS" {...register('nrs')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="school">School</Label>
            <Input
              id="school"
              placeholder="Enter School"
              {...register('school')}
            />
          </div>

          <div className="space-y-2 col-span-full">
            <Label htmlFor="permanentAddress">Permanent Address</Label>
            <Input
              id="permanentAddress"
              placeholder="Enter Permanent Address"
              {...register('permanentAddress')}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OfficerDetails;
