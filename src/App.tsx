import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import CreateReport from "./pages/CreateReport";
import UserManagement from "./pages/admin/UserManagement";
import ReportManagement from "./pages/admin/ReportManagement";
import GroupManagement from "./pages/admin/GroupManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<CreateReport />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/reports" element={<ReportManagement />} />
            <Route path="/admin/groups" element={<GroupManagement />} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;