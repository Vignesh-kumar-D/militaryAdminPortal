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

const OfficerDetails = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Officer Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="icNo">IC No</Label>
            <Input id="icNo" placeholder="Enter IC No" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rank">Rank</Label>
            <Input id="rank" placeholder="Enter Rank" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="hons">Hons</Label>
            <Input id="hons" placeholder="Enter Hons" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="haq">HAQ</Label>
            <Input id="haq" placeholder="Enter HAQ" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="regt">Regt</Label>
            <Input id="regt" placeholder="Enter Regt" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="doc">Date of Commission</Label>
            <Input id="doc" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dos">Date of Service</Label>
            <Input id="dos" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="medCatMaint">MedCat(Maint)</Label>
            <Input id="medCatMaint" placeholder="Enter MedCat(Maint)" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="medCatLastCR">MedCat(LastCR)</Label>
            <Input id="medCatLastCR" placeholder="Enter MedCat(LastCR)" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastCRDate">LastCR Date</Label>
            <Input id="lastCRDate" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="critFP">Crit(F+P)</Label>
            <Input id="critFP" placeholder="Enter Crit(F+P)" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sb">SB</Label>
            <Input id="sb" placeholder="Enter SB" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="appt">Appt</Label>
            <Input id="appt" placeholder="Enter Appt" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="unit">Unit</Label>
            <Input id="unit" placeholder="Enter Unit" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="typeOfEntry">Type of Entry</Label>
            <Input id="typeOfEntry" placeholder="Enter Type of Entry" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="homeTown">Home Town</Label>
            <Input id="homeTown" placeholder="Enter Home Town" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" placeholder="Enter State" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="motherTongue">Mother Tongue</Label>
            <Input id="motherTongue" placeholder="Enter Mother Tongue" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Input id="language" placeholder="Enter Language" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobileNo">Mobile No</Label>
            <Input id="mobileNo" type="tel" placeholder="Enter Mobile No" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nicEmail">NIC Email</Label>
            <Input id="nicEmail" type="email" placeholder="Enter NIC Email" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="personalEmail">Personal Email</Label>
            <Input
              id="personalEmail"
              type="email"
              placeholder="Enter Personal Email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cdaNo">CDA No</Label>
            <Input id="cdaNo" placeholder="Enter CDA No" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="aadhaarNo">Aadhaar No</Label>
            <Input id="aadhaarNo" placeholder="Enter Aadhaar No" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="height">Height</Label>
            <Input id="height" placeholder="Enter Height" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nrs">NRS</Label>
            <Input id="nrs" placeholder="Enter NRS" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="school">School</Label>
            <Input id="school" placeholder="Enter School" />
          </div>

          <div className="space-y-2 col-span-full">
            <Label htmlFor="permanentAddress">Permanent Address</Label>
            <Input
              id="permanentAddress"
              placeholder="Enter Permanent Address"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OfficerDetails;
