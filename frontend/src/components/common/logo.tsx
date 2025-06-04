import { MdOutlineWorkHistory } from "react-icons/md";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <MdOutlineWorkHistory className="size-7 text-blue-600" />
      <p className="text-3xl font-bold tracking-wide">
        Smart<span className="text-blue-600">Track</span>
      </p>
    </div>
  );
};
export default Logo;
