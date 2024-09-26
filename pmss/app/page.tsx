"use client";

import { useState } from "react";
import Login from "@/components/login";
import StudentDashboard from "@/components/student-dashboard";
import AdminDashboard from "@/components/admin-dashboard";
import SAGDashboard from "@/components/sag-dashboard";
import FinanceDashboard from "@/components/finance-dashboard";
import Registration from "@/components/registration";
import PasswordReset from "@/components/password-reset";

type UserRole = "student" | "admin" | "sag" | "finance";

export default function Home() {
  const [user, setUser] = useState<{ username: string; role: UserRole } | null>(
    null,
  );
  const [currentView, setCurrentView] = useState<
    "login" | "register" | "reset" | "dashboard"
  >("login");

  const handleLogin = (username: string, role: UserRole) => {
    setUser({ username, role });
    setCurrentView("dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView("login");
  };

  const renderDashboard = () => {
    switch (user?.role) {
      case "student":
        return (
          <StudentDashboard username={user.username} onLogout={handleLogout} />
        );
      case "admin":
        return (
          <AdminDashboard username={user.username} onLogout={handleLogout} />
        );
      case "sag":
        return (
          <SAGDashboard username={user.username} onLogout={handleLogout} />
        );
      case "finance":
        return (
          <FinanceDashboard username={user.username} onLogout={handleLogout} />
        );
      default:
        return null;
    }
  };

  if (!user) {
    switch (currentView) {
      case "login":
        return (
          <Login
            onLogin={handleLogin}
            onRegister={() => setCurrentView("register")}
            onReset={() => setCurrentView("reset")}
          />
        );
      case "register":
        return (
          <Registration
            onSubmit={() => setCurrentView("login")}
            onCancel={() => setCurrentView("login")}
          />
        );
      case "reset":
        return (
          <PasswordReset
            onSubmit={() => setCurrentView("login")}
            onCancel={() => setCurrentView("login")}
          />
        );
      default:
        return null;
    }
  }

  return renderDashboard();
}
