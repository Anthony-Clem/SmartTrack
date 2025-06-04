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
import RegisterForm from "./components/register-form";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <Card className="max-w-[450px] w-full">
      <CardHeader className="flex flex-col items-center gap-4">
        <Logo />
        <div className="text-center">
          <CardTitle className="text-[22px] font-semibold">Create Account</CardTitle>
          <CardDescription>Sign up and start tracking your applications</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <div className="flex gap-4 w-full px-6">
        <div className="flex-1 h-px bg-gray-300 my-auto" />
        <p className="text-xs text-muted-foreground my-auto">OR</p>
        <div className="flex-1 h-px bg-gray-300 my-auto" />
      </div>
      <CardFooter className="flex flex-col items-center gap-3">
        <GoogleButton />
        <p className="text-sm">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-semibold text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
export default RegisterPage;
