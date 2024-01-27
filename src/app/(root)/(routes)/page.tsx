import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SignInButton from "@/components/SignInButton";

export default async function Homepage() {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Exames 🔥!</CardTitle>
          <CardDescription>
            Exame is a platform for creating exames using AI!. Get started by
            loggin in below!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google" />
        </CardContent>
      </Card>
    </div>
  );
}
