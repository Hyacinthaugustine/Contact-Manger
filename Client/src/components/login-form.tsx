import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:2020/", { email, password })
      .then((result) => {
        console.log(result);

        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-6 text-gray-900", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center ">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              to="/"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="w-full p-6 bg-purple-500 hover:bg-purple-600 text-lg font-semibold transition delay-200"
        >
          Login
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full p-7">
          <FcGoogle className="md:size-8 size-6" />
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          to="/welcome/register/sign-up"
          className="underline underline-offset-4n capitalize"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
}
