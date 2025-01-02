import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your dashboard</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h3 className="font-medium mb-2">Total Users</h3>
          <p className="text-3xl font-bold">1,234</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-medium mb-2">Active Reports</h3>
          <p className="text-3xl font-bold">56</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-medium mb-2">Total Groups</h3>
          <p className="text-3xl font-bold">12</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;