import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface FileUploadProps {
  applicationId: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({ applicationId }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("applicationId", applicationId);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
        setFile(null);
      } else {
        alert("Error uploading file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    }
  };

  return (
    <Card title="Document Upload">
      <div className="space-y-4">
        <Input type="file" onChange={handleFileChange} />
        <Button onClick={handleUpload} disabled={!file}>
          Upload Document
        </Button>
      </div>
    </Card>
  );
};
