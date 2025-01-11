import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const findings = [
  { 
    id: 1, 
    title: "Security Vulnerability", 
    severity: "High", 
    status: "Open",
    dateFound: "2024-02-20" 
  },
  { 
    id: 2, 
    title: "Performance Issue", 
    severity: "Medium", 
    status: "In Progress",
    dateFound: "2024-02-19" 
  },
  { 
    id: 3, 
    title: "UI Bug", 
    severity: "Low", 
    status: "Closed",
    dateFound: "2024-02-18" 
  },
];

const FindingsManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold">Findings Management</h1>
          <p className="text-muted-foreground">Track and manage security findings</p>
        </div>
        <Button>Add Finding</Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date Found</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {findings.map((finding) => (
              <TableRow key={finding.id}>
                <TableCell>{finding.title}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded text-sm ${
                    finding.severity === 'High' ? 'bg-red-100 text-red-800' :
                    finding.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {finding.severity}
                  </span>
                </TableCell>
                <TableCell>{finding.status}</TableCell>
                <TableCell>{finding.dateFound}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">Edit</Button>
                  <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default FindingsManagement;