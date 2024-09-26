import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const SAGDashboard: React.FC = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const response = await fetch("/api/application");
      if (response.ok) {
        const data = await response.json();
        setApplications(data.applications);
      }
    };
    fetchApplications();
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">SAG Dashboard</h1>
      {applications.map((app) => (
        <Card key={app.id} title={`Application ${app.id}`}>
          <p>Status: {app.status}</p>
          <p>Applicant: {app.user.name}</p>
          <Button>Verify Documents</Button>
        </Card>
      ))}
    </div>
  );
};
