import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

interface LoginProps {
  onLogin: (
    username: string,
    role: "student" | "admin" | "sag" | "finance",
  ) => void;
  onRegister: () => void;
  onReset: () => void;
}

export default function Login({ onLogin, onRegister, onReset }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    let role: "student" | "admin" | "sag" | "finance" = "student";
    if (username === "admin") role = "admin";
    if (username === "sag") role = "sag";
    if (username === "finance") role = "finance";
    onLogin(username, role);
  };

  return (
    <Card className="w-[350px] mx-auto">
      <CardHeader>
        <CardTitle>PMSSS Login</CardTitle>
        <CardDescription>
          Use "admin", "sag", or "finance" as username for respective roles. Any
          other username logs in as a student.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" onClick={onRegister}>
          Register
        </Button>
        <Button variant="ghost" onClick={onReset}>
          Reset Password
        </Button>
      </CardFooter>
    </Card>
  );
}

