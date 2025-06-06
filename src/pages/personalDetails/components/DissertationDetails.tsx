import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Button } from '../../../components/ui/button';
import { Plus } from 'lucide-react';

const DissertationDetails = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Dissertation Details</CardTitle>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Dissertation
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="group">Group</Label>
            <Input id="group" placeholder="Enter Group" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subGroup">Sub Group</Label>
            <Input id="subGroup" placeholder="Enter Sub Group" />
          </div>

          <div className="space-y-2 col-span-full">
            <Label htmlFor="topic">Topic</Label>
            <Input id="topic" placeholder="Enter Topic" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DissertationDetails;
