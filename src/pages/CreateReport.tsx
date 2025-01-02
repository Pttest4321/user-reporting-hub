import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CreateReport = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Create Report</h1>
        <p className="text-muted-foreground">Create a new report</p>
      </div>

      <Card className="p-6">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Report Title</Label>
            <Input id="title" placeholder="Enter report title" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter report description"
              className="min-h-[100px]"
            />
          </div>

          <Button type="submit">Create Report</Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateReport;