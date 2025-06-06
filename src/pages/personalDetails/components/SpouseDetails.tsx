import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { useState } from 'react';

const SpouseDetails = () => {
  const [maritalStatus, setMaritalStatus] = useState('');
  const [dateOfMarriage, setDateOfMarriage] = useState('');

  const handleMaritalStatusChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setMaritalStatus(value);
    if (value.toLowerCase() === 'single') {
      setDateOfMarriage('');
    }
  };

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
            <Input id="spouseName" placeholder="Enter Spouse Name" />
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
              value={maritalStatus}
              onChange={handleMaritalStatusChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfMarriage">Date of Marriage</Label>
            <Input
              id="dateOfMarriage"
              type="date"
              value={dateOfMarriage}
              onChange={(e) => setDateOfMarriage(e.target.value)}
              disabled={maritalStatus.toLowerCase() === 'single'}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="spouseOccupation">Spouse Occupation</Label>
            <Input
              id="spouseOccupation"
              placeholder="Enter Spouse Occupation"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="spouseQualification">Spouse Qualification</Label>
            <Input
              id="spouseQualification"
              placeholder="Enter Spouse Qualification"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="spouseMobile">Spouse Mobile</Label>
            <Input
              id="spouseMobile"
              type="tel"
              placeholder="Enter Spouse Mobile"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="spouseEmail">Spouse Email</Label>
            <Input
              id="spouseEmail"
              type="email"
              placeholder="Enter Spouse Email"
            />
          </div>

          <div className="space-y-2 col-span-full">
            <Label htmlFor="spouseAddress">Spouse Address</Label>
            <Input id="spouseAddress" placeholder="Enter Spouse Address" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpouseDetails;
