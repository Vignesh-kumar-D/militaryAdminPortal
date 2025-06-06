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

const MiscCourseDetails = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Miscellaneous Course Details</CardTitle>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Course
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="qualification">Qualification</Label>
            <Input id="qualification" placeholder="Enter Qualification" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Enter Subject" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="grade">Grade</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a">A</SelectItem>
                <SelectItem value="b">B</SelectItem>
                <SelectItem value="c">C</SelectItem>
                <SelectItem value="d">D</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fromDate">From Date</Label>
            <Input id="fromDate" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="toDate">To Date</Label>
            <Input id="toDate" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="institution">Institution</Label>
            <Input id="institution" placeholder="Enter Institution" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MiscCourseDetails;
