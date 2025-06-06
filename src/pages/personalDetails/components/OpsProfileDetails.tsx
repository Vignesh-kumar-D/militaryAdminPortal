import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';

const OpsProfileDetails = () => {
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
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fieldMonths">Field Months</Label>
            <Input
              id="fieldMonths"
              type="number"
              placeholder="Enter Field Months"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="highAltMonths">High Alt Months</Label>
            <Input
              id="highAltMonths"
              type="number"
              placeholder="Enter High Alt Months"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ciOpsMonths">CI Ops Months</Label>
            <Input
              id="ciOpsMonths"
              type="number"
              placeholder="Enter CI Ops Months"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OpsProfileDetails;
