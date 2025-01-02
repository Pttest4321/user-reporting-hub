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

const reports = [
  { id: 1, title: "Q1 Report", author: "John Doe", status: "Published" },
  { id: 2, title: "Q2 Report", author: "Jane Smith", status: "Draft" },
  { id: 3, title: "Annual Review", author: "Bob Johnson", status: "Published" },
];

const ReportManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold">Report Management</h1>
          <p className="text-muted-foreground">Manage and organize reports</p>
        </div>
        <Button>Create Report</Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.title}</TableCell>
                <TableCell>{report.author}</TableCell>
                <TableCell>{report.status}</TableCell>
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

export default ReportManagement;