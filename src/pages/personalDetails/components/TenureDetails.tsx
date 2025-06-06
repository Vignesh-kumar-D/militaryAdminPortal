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
import type { FormComponentProps } from '../AddNewForm';

const TenureDetails = ({ register, errors }: FormComponentProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Tenure Details</CardTitle>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Tenure
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="from">From</Label>
            <Input id="from" type="date" {...register('from')} />
            {errors.from && (
              <p className="text-sm text-red-500">{errors.from.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="to">To</Label>
            <Input id="to" type="date" {...register('to')} />
            {errors.to && (
              <p className="text-sm text-red-500">{errors.to.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="tenureRank">Rank</Label>
            <Input
              id="tenureRank"
              placeholder="Enter Rank"
              {...register('tenureRank')}
            />
            {errors.tenureRank && (
              <p className="text-sm text-red-500">
                {errors.tenureRank.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="tenureAppt">Appointment</Label>
            <Input
              id="tenureAppt"
              placeholder="Enter Appointment"
              {...register('tenureAppt')}
            />
            {errors.tenureAppt && (
              <p className="text-sm text-red-500">
                {errors.tenureAppt.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="tenureUnit">Unit</Label>
            <Input
              id="tenureUnit"
              placeholder="Enter Unit"
              {...register('tenureUnit')}
            />
            {errors.tenureUnit && (
              <p className="text-sm text-red-500">
                {errors.tenureUnit.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Enter Location" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="peace">Peace</SelectItem>
                <SelectItem value="field">Field</SelectItem>
                <SelectItem value="high-altitude">High Altitude</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="command">Command</Label>
            <Input id="command" placeholder="Enter Command" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="inSituWeF">In Situ WeF</Label>
            <Input id="inSituWeF" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tos">TOS</Label>
            <Input id="tos" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sos">SOS</Label>
            <Input id="sos" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tenureMonths">Tenure (Months)</Label>
            <Input
              id="tenureMonths"
              type="number"
              placeholder="Enter tenure in months"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TenureDetails;
