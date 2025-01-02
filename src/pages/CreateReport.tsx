import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle, MinusCircle } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addDays } from "date-fns";

const CreateReport = () => {
  const [findings, setFindings] = useState([
    { 
      id: 1, 
      name: "", 
      riskLevel: "",
      cvssVector: "",
      cvssScore: ""
    }
  ]);
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState("step1");
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: addDays(new Date(), 7)
  });

  const addFinding = () => {
    setFindings([
      ...findings,
      { 
        id: findings.length + 1, 
        name: "", 
        riskLevel: "",
        cvssVector: "",
        cvssScore: ""
      }
    ]);
  };

  const removeFinding = (id: number) => {
    if (findings.length > 1) {
      setFindings(findings.filter((finding) => finding.id !== id));
    }
  };

  const updateFinding = (id: number, field: string, value: string) => {
    setFindings(
      findings.map((finding) =>
        finding.id === id ? { ...finding, [field]: value } : finding
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Report created successfully",
    });
  };

  const riskLevels = [
    "Critical",
    "High",
    "Medium",
    "Low",
    "Informative"
  ];

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
                  <Label>Project Date Range</Label>
                  <div className="flex space-x-4">
                    <div>
                      <Label>From</Label>
                      <Calendar
                        mode="single"
                        selected={dateRange.from}
                        onSelect={(date) => date && setDateRange({ ...dateRange, from: date })}
                        className="rounded-md border"
                      />
                    </div>
                    <div>
                      <Label>To</Label>
                      <Calendar
                        mode="single"
                        selected={dateRange.to}
                        onSelect={(date) => date && setDateRange({ ...dateRange, to: date })}
                        className="rounded-md border"
                      />
                    </div>
                  </div>
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
                  <div key={finding.id} className="space-y-4 p-4 border rounded-lg">
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
                    
                    <div className="space-y-4">
                      <div>
                        <Label>Finding Name</Label>
                        <Input
                          placeholder="Search for finding..."
                          value={finding.name}
                          onChange={(e) => updateFinding(finding.id, "name", e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label>Risk Level</Label>
                        <Select 
                          value={finding.riskLevel}
                          onValueChange={(value) => updateFinding(finding.id, "riskLevel", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select risk level" />
                          </SelectTrigger>
                          <SelectContent>
                            {riskLevels.map((level) => (
                              <SelectItem key={level} value={level.toLowerCase()}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>CVSS Vector</Label>
                        <Input
                          placeholder="Enter CVSS vector"
                          value={finding.cvssVector}
                          onChange={(e) => updateFinding(finding.id, "cvssVector", e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label>CVSS Score</Label>
                        <Input
                          type="number"
                          min="0"
                          max="10"
                          step="0.1"
                          placeholder="Enter CVSS score"
                          value={finding.cvssScore}
                          onChange={(e) => updateFinding(finding.id, "cvssScore", e.target.value)}
                          required
                        />
                      </div>
                    </div>
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