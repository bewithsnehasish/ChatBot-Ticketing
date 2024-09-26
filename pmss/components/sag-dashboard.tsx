import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SAGDashboardProps {
  username: string;
  onLogout: () => void;
}

export default function SAGDashboard({
  username,
  onLogout,
}: SAGDashboardProps) {
  const applications = [
    { id: 1, student: "John Doe", status: "Pending Verification" },
    { id: 2, student: "Jane Smith", status: "Verified" },
    { id: 3, student: "Bob Johnson", status: "Rejected" },
  ];

  return (
    <Card className="w-[800px] mx-auto">
      <CardHeader>
        <CardTitle>SAG Bureau Dashboard - Welcome, {username}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="verification">
          <TabsList>
            <TabsTrigger value="verification">
              Document Verification
            </TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
          </TabsList>
          <TabsContent value="verification">
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
                      <Button size="sm">Verify</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabsContent>
          <TabsContent value="statistics">
            <p>Verification statistics would go here.</p>
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
