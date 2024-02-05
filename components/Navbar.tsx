// IMPORTS -
import { UserButton } from "@clerk/nextjs";
import Mobile from "./Mobile";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <Mobile />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
