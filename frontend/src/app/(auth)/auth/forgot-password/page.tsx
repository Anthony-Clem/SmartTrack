import Logo from "@/components/common/logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import ForgotPasswordForm from "./components/forgot-password-form";

const ForgotPasswordPage = () => {
  return (
    <Card className="max-w-[450px] w-full">
      <CardHeader className="flex flex-col items-center gap-4">
        <Logo />
        <div className="text-center">
          <CardTitle className="text-[22px] font-semibold">Forgot Password?</CardTitle>
          <CardDescription>Enter your email below to reset your password</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ForgotPasswordForm />
      </CardContent>
      <CardFooter>
        <Link
          href="/auth/login"
          className="text-sm font-bold text-blue-600 hover:underline mx-auto"
        >
          <p>Back to login</p>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default ForgotPasswordPage;
