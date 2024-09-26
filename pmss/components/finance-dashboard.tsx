import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FinanceDashboardProps {
  username: string;
  onLogout: () => void;
}

export default function FinanceDashboard({
  username,
  onLogout,
}: FinanceDashboardProps) {
  const applications = [
    { id: 1, student: "John Doe", status: "Pending Approval" },
    { id: 2, student: "Jane Smith", status: "Approved" },
    { id: 3, student: "Bob Johnson", status: "Rejected" },
  ];

  return (
    <Card className="w-[800px] mx-auto">
      <CardHeader>
        <CardTitle>Finance Bureau Dashboard - Welcome, {username}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="approvals">
          <TabsList>
            <TabsTrigger value="approvals">Scholarship Approvals</TabsTrigger>
            <TabsTrigger value="disbursements">Disbursements</TabsTrigger>
          </TabsList>
          <TabsContent value="approvals">
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
                      <Button size="sm">Approve</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabsContent>
          <TabsContent value="disbursements">
            <p>Disbursement statistics would go here.</p>
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
