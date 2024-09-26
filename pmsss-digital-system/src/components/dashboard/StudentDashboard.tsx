import React, { useEffect, useState } from "react";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { FileUpload } from "@/components/forms/FileUpload";
import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";

export const StudentDashboard: React.FC = () => {
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
      <h1 className="text-3xl font-bold">Student Dashboard</h1>
      <ApplicationForm />
      {applications.map((app) => (
        <Card key={app.id} title={`Application ${app.id}`}>
          <p>Status: {app.status}</p>
          <FileUpload applicationId={app.id} />
          <Timeline
            items={[
              {
                title: "Application Submitted",
                description: "Your application has been received",
                date: app.createdAt,
                status: "completed",
              },
              {
                title: "Document Verification",
                description: "Your documents are being verified",
                date: "",
                status: app.status === "UNDER_REVIEW" ? "current" : "upcoming",
              },
              {
                title: "Application Approved",
                description: "Your application has been approved",
                date: "",
                status: app.status === "APPROVED" ? "completed" : "upcoming",
              },
            ]}
          />
        </Card>
      ))}
    </div>
  );
};
