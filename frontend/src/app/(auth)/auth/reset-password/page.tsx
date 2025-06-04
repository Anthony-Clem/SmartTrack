import Logo from "@/components/common/logo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ResetPasswordForm from "./reset-password-form";

const ResetPasswordPage = () => {
  return (
    <Card className="max-w-[450px] w-full">
      <CardHeader className="flex flex-col items-center gap-4">
        <Logo />
        <div className="text-center">
          <CardTitle className="text-[22px] font-semibold">Reset Password</CardTitle>
          <CardDescription>Enter your old password and choose a new password below</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResetPasswordForm />
      </CardContent>
    </Card>
  );
};
export default ResetPasswordPage;
