import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Button } from '../../../components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';
import type { FormComponentProps } from '../AddNewForm';

const FamilyMemberDetails = ({
  register,
  errors,
  control,
}: FormComponentProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'familyMembers',
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Family Member Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 border rounded-lg"
            >
              <div className="space-y-2">
                <Label htmlFor={`familyMembers.${index}.name`}>Name</Label>
                <Input
                  id={`familyMembers.${index}.name`}
                  placeholder="Enter Name"
                  {...register(`familyMembers.${index}.name`)}
                />
                {errors.familyMembers?.[index]?.name && (
                  <p className="text-sm text-red-500">
                    {errors.familyMembers[index]?.name?.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`familyMembers.${index}.relation`}>
                  Relation
                </Label>
                <Input
                  id={`familyMembers.${index}.relation`}
                  placeholder="Enter Relation"
                  {...register(`familyMembers.${index}.relation`)}
                />
                {errors.familyMembers?.[index]?.relation && (
                  <p className="text-sm text-red-500">
                    {errors.familyMembers[index]?.relation?.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`familyMembers.${index}.age`}>Age</Label>
                <Input
                  id={`familyMembers.${index}.age`}
                  type="number"
                  placeholder="Enter Age"
                  {...register(`familyMembers.${index}.age`, {
                    valueAsNumber: true,
                  })}
                />
                {errors.familyMembers?.[index]?.age && (
                  <p className="text-sm text-red-500">
                    {errors.familyMembers[index]?.age?.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`familyMembers.${index}.occupation`}>
                  Occupation
                </Label>
                <Input
                  id={`familyMembers.${index}.occupation`}
                  placeholder="Enter Occupation"
                  {...register(`familyMembers.${index}.occupation`)}
                />
                {errors.familyMembers?.[index]?.occupation && (
                  <p className="text-sm text-red-500">
                    {errors.familyMembers[index]?.occupation?.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`familyMembers.${index}.qualification`}>
                  Qualification
                </Label>
                <Input
                  id={`familyMembers.${index}.qualification`}
                  placeholder="Enter Qualification"
                  {...register(`familyMembers.${index}.qualification`)}
                />
                {errors.familyMembers?.[index]?.qualification && (
                  <p className="text-sm text-red-500">
                    {errors.familyMembers[index]?.qualification?.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`familyMembers.${index}.mobile`}>Mobile</Label>
                <Input
                  id={`familyMembers.${index}.mobile`}
                  type="tel"
                  placeholder="Enter Mobile"
                  {...register(`familyMembers.${index}.mobile`)}
                />
                {errors.familyMembers?.[index]?.mobile && (
                  <p className="text-sm text-red-500">
                    {errors.familyMembers[index]?.mobile?.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`familyMembers.${index}.email`}>Email</Label>
                <Input
                  id={`familyMembers.${index}.email`}
                  type="email"
                  placeholder="Enter Email"
                  {...register(`familyMembers.${index}.email`)}
                />
                {errors.familyMembers?.[index]?.email && (
                  <p className="text-sm text-red-500">
                    {errors.familyMembers[index]?.email?.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`familyMembers.${index}.address`}>
                  Address
                </Label>
                <Input
                  id={`familyMembers.${index}.address`}
                  placeholder="Enter Address"
                  {...register(`familyMembers.${index}.address`)}
                />
                {errors.familyMembers?.[index]?.address && (
                  <p className="text-sm text-red-500">
                    {errors.familyMembers[index]?.address?.message}
                  </p>
                )}
              </div>

              <div className="flex items-end">
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            onClick={() =>
              append({
                name: '',
                relation: '',
                age: 0,
                occupation: '',
                qualification: '',
                mobile: '',
                email: '',
                address: '',
              })
            }
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Family Member
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FamilyMemberDetails;
