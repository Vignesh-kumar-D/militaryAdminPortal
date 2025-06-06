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

const CRStatusDetails = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>CR Status Details</CardTitle>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add CR Status
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="repNo">Rep No</Label>
            <Input id="repNo" placeholder="Enter Rep No" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="from">From</Label>
            <Input id="from" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="to">To</Label>
            <Input id="to" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rank">Rank</Label>
            <Input id="rank" placeholder="Enter Rank" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="appt">Appt</Label>
            <Input id="appt" placeholder="Enter Appt" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="crit">Crit</Label>
            <Input id="crit" placeholder="Enter Crit" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="unitFmnComd">Unit/Fmn/Comd</Label>
            <Input id="unitFmnComd" placeholder="Enter Unit/Fmn/Comd" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="peaceFdHighAlt">Peace/Fd/High Alt</Label>
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
            <Label htmlFor="medCat">Med Cat</Label>
            <Input id="medCat" placeholder="Enter Med Cat" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CRStatusDetails;
