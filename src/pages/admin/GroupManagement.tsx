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

const groups = [
  { id: 1, name: "Marketing", members: 5, leader: "John Doe" },
  { id: 2, name: "Engineering", members: 12, leader: "Jane Smith" },
  { id: 3, name: "Sales", members: 8, leader: "Bob Johnson" },
];

const GroupManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold">Group Management</h1>
          <p className="text-muted-foreground">Manage team groups and members</p>
        </div>
        <Button>Create Group</Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Members</TableHead>
              <TableHead>Leader</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {groups.map((group) => (
              <TableRow key={group.id}>
                <TableCell>{group.name}</TableCell>
                <TableCell>{group.members}</TableCell>
                <TableCell>{group.leader}</TableCell>
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

export default GroupManagement;