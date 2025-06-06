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
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { FormData } from '../AddNewForm';

interface CRStatusDetailsProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const CRStatusDetails = ({ register, errors }: CRStatusDetailsProps) => {
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
            <Input
              id="repNo"
              placeholder="Enter Rep No"
              {...register('repNo')}
            />
            {errors.repNo && (
              <p className="text-sm text-red-500">{errors.repNo.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="crFrom">From</Label>
            <Input id="crFrom" type="date" {...register('crFrom')} />
            {errors.crFrom && (
              <p className="text-sm text-red-500">{errors.crFrom.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="crTo">To</Label>
            <Input id="crTo" type="date" {...register('crTo')} />
            {errors.crTo && (
              <p className="text-sm text-red-500">{errors.crTo.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="crRank">Rank</Label>
            <Input
              id="crRank"
              placeholder="Enter Rank"
              {...register('crRank')}
            />
            {errors.crRank && (
              <p className="text-sm text-red-500">{errors.crRank.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="crAppt">Appt</Label>
            <Input
              id="crAppt"
              placeholder="Enter Appt"
              {...register('crAppt')}
            />
            {errors.crAppt && (
              <p className="text-sm text-red-500">{errors.crAppt.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="crCrit">Crit</Label>
            <Input
              id="crCrit"
              placeholder="Enter Crit"
              {...register('crCrit')}
            />
            {errors.crCrit && (
              <p className="text-sm text-red-500">{errors.crCrit.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="crUnit">Unit/Fmn/Comd</Label>
            <Input
              id="crUnit"
              placeholder="Enter Unit/Fmn/Comd"
              {...register('crUnit')}
            />
            {errors.crUnit && (
              <p className="text-sm text-red-500">{errors.crUnit.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="crMedCat">Med Cat</Label>
            <Input
              id="crMedCat"
              placeholder="Enter Med Cat"
              {...register('crMedCat')}
            />
            {errors.crMedCat && (
              <p className="text-sm text-red-500">{errors.crMedCat.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="crPeaceFdHighAlt">Peace/Fd/High Alt</Label>
            <Input
              id="crPeaceFdHighAlt"
              placeholder="Enter Peace/Fd/High Alt"
              {...register('crPeaceFdHighAlt')}
            />
            {errors.crPeaceFdHighAlt && (
              <p className="text-sm text-red-500">
                {errors.crPeaceFdHighAlt.message}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CRStatusDetails;
