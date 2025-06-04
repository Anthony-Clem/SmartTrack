import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
  return (
    <Button variant="outline" size="lg" className="w-full">
      <FcGoogle className="size-4" />
      Google
    </Button>
  );
};
export default GoogleButton;
