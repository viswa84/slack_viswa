import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInFlow } from "../types";
import { TriangleAlert } from "lucide-react";

interface SignInCardProps {
  setState: (state: SignInFlow) => void
}
const SignInCard = ({ setState }: SignInCardProps) => {
  const { signIn } = useAuthActions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("")

  const onPasswordSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPending(true);
    signIn("password", { email, password, flow: "signIn" }).catch(() => {
      setError("Invalid email or password") // Correct state
    }).finally(() => {
      setPending(false)
    })
  }
  const onProviderSign = (value: "github" | "google") => {
    setPending(true)
    signIn(value).finally(() => {
      setPending(false)
    })
  }
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        Login to continue
        <CardDescription>
          use Your email or another service to continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
          <TriangleAlert className="size-4" />
          <p>{error}</p>
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5" onSubmit={onPasswordSignIn}>
          <Input
            disabled={pending}
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={pending}
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            placeholder="Password"
            type="password"
            required
          />
          <Button type="submit" className="w-full" size={"lg"} disabled={pending}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={pending}
            onClick={() => { onProviderSign("google") }}
            variant={"outline"}
            size={"lg"}
            className="w-full relative"
          >
            <FcGoogle className="size-5 absolute top-3 left-2.5" />
            Continue With Google</Button>
          <Button
            disabled={pending}
            onClick={() => { onProviderSign("github") }}
            variant={"outline"}
            size={"lg"}
            className="w-full relative"
          >
            <FaGithub className="size-5 absolute top-3 left-2.5" />
            Continue With Github</Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Don&apos;t have an account ? <span onClick={() => setState("signUp")} className=" text-sky-700 hover:underline cursor-pointer">Sign up</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
