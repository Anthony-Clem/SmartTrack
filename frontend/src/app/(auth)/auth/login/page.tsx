import Logo from "@/components/common/logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GoogleButton from "../../components/google-button";
import Link from "next/link";
import LoginForm from "./components/login-form";

const LoginPage = () => {
  return (
    <Card className="max-w-[450px] w-full">
      <CardHeader className="flex flex-col items-center gap-4">
        <Logo />
        <div className="text-center">
          <CardTitle className="text-[22px] font-semibold">Welcome Back</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <div className="flex gap-4 w-full px-6">
        <div className="flex-1 h-px bg-gray-300 my-auto" />
        <p className="text-xs text-muted-foreground my-auto">OR</p>
        <div className="flex-1 h-px bg-gray-300 my-auto" />
      </div>
      <CardFooter className="flex flex-col items-center gap-3">
        <GoogleButton />
        <p className="text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="font-semibold text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
export default LoginPage;
