import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';

const CommandProfileDetails = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Command Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nc">NC %</Label>
            <Input id="nc" type="number" placeholder="Enter NC %" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sc">SC %</Label>
            <Input id="sc" type="number" placeholder="Enter SC %" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ec">EC %</Label>
            <Input id="ec" type="number" placeholder="Enter EC %" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="wc">WC %</Label>
            <Input id="wc" type="number" placeholder="Enter WC %" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sw">SW %</Label>
            <Input id="sw" type="number" placeholder="Enter SW %" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="xc">XC %</Label>
            <Input id="xc" type="number" placeholder="Enter XC %" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="se">SE %</Label>
            <Input id="se" type="number" placeholder="Enter SE %" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sf">SF %</Label>
            <Input id="sf" type="number" placeholder="Enter SF %" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fc">FC %</Label>
            <Input id="fc" type="number" placeholder="Enter FC %" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommandProfileDetails;
