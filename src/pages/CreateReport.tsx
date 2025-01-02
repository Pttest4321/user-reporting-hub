import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle, MinusCircle } from "lucide-react";

const CreateReport = () => {
  const [findings, setFindings] = useState([{ id: 1, description: "" }]);
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState("step1");

  const addFinding = () => {
    setFindings([
      ...findings,
      { id: findings.length + 1, description: "" },
    ]);
  };

  const removeFinding = (id: number) => {
    if (findings.length > 1) {
      setFindings(findings.filter((finding) => finding.id !== id));
    }
  };

  const updateFinding = (id: number, description: string) => {
    setFindings(
      findings.map((finding) =>
        finding.id === id ? { ...finding, description } : finding
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the data to your server
    toast({
      title: "Success",
      description: "Report created successfully",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Create Report</h1>
        <p className="text-muted-foreground">Create a new report</p>
      </div>

      <Card className="p-6">
        <Tabs value={currentStep} onValueChange={setCurrentStep}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="step1">Technical Details</TabsTrigger>
            <TabsTrigger value="step2">Findings</TabsTrigger>
            <TabsTrigger value="step3">Additional Details</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <TabsContent value="step1">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Report Title</Label>
                  <Input id="title" placeholder="Enter report title" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project">Project Name</Label>
                  <Input id="project" placeholder="Enter project name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Report Date</Label>
                  <Input id="date" type="date" required />
                </div>
              </div>

              <Button
                type="button"
                className="mt-4"
                onClick={() => setCurrentStep("step2")}
              >
                Next Step
              </Button>
            </TabsContent>

            <TabsContent value="step2">
              <div className="space-y-4">
                {findings.map((finding) => (
                  <div key={finding.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Finding {finding.id}</Label>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFinding(finding.id)}
                      >
                        <MinusCircle className="h-4 w-4" />
                      </Button>
                    </div>
                    <Textarea
                      placeholder="Describe the finding"
                      value={finding.description}
                      onChange={(e) =>
                        updateFinding(finding.id, e.target.value)
                      }
                      required
                    />
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={addFinding}
                  className="w-full"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Finding
                </Button>
              </div>

              <div className="flex justify-between mt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep("step1")}
                >
                  Previous Step
                </Button>
                <Button
                  type="button"
                  onClick={() => setCurrentStep("step3")}
                >
                  Next Step
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="step3">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="summary">Executive Summary</Label>
                  <Textarea
                    id="summary"
                    placeholder="Enter executive summary"
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recommendations">Recommendations</Label>
                  <Textarea
                    id="recommendations"
                    placeholder="Enter recommendations"
                    className="min-h-[100px]"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep("step2")}
                >
                  Previous Step
                </Button>
                <Button type="submit">Create Report</Button>
              </div>
            </TabsContent>
          </form>
        </Tabs>
      </Card>
    </div>
  );
};

export default CreateReport;