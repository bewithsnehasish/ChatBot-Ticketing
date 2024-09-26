import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AdminDashboardProps {
  username: string;
  onLogout: () => void;
}

export default function AdminDashboard({
  username,
  onLogout,
}: AdminDashboardProps) {
  const applications = [
    { id: 1, student: "John Doe", status: "Pending" },
    { id: 2, student: "Jane Smith", status: "Approved" },
    { id: 3, student: "Bob Johnson", status: "Rejected" },
  ];

  return (
    <Card className="w-[800px] mx-auto">
      <CardHeader>
        <CardTitle>Admin Dashboard - Welcome, {username}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="applications">
          <TabsList>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="applications">
            <table className="w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Student</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td>{app.id}</td>
                    <td>{app.student}</td>
                    <td>{app.status}</td>
                    <td>
                      <Button size="sm">Review</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabsContent>
          <TabsContent value="users">
            <p>User management functionality would go here.</p>
          </TabsContent>
          <TabsContent value="reports">
            <p>Reporting functionality would go here.</p>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" onClick={onLogout} className="w-full">
          Logout
        </Button>
      </CardFooter>
    </Card>
  );
}

