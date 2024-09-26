import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StudentDashboardProps {
  username: string;
  onLogout: () => void;
}

export default function StudentDashboard({
  username,
  onLogout,
}: StudentDashboardProps) {
  const [file, setFile] = useState<File | null>(null);
  const [applicationStatus, setApplicationStatus] = useState("Draft");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd upload the file and submit the application here
    setApplicationStatus("Submitted");
    alert("Application submitted successfully!");
  };

  return (
    <Card className="w-[800px] mx-auto">
      <CardHeader>
        <CardTitle>Welcome, {username}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="application">
          <TabsList>
            <TabsTrigger value="application">Application</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="status">Status</TabsTrigger>
          </TabsList>
          <TabsContent value="application">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Full Name" />
              <Input placeholder="Date of Birth" type="date" />
              <Input placeholder="Address" />
              <Input placeholder="Phone Number" type="tel" />
              <Input placeholder="Email" type="email" />
              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="documents">
            <div className="space-y-4">
              <Input type="file" onChange={handleFileChange} />
              <Button className="w-full">Upload Document</Button>
            </div>
          </TabsContent>
          <TabsContent value="status">
            <p>Current Application Status: {applicationStatus}</p>
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

