// IMPORTS -
import { Button } from "@/components/ui/button";
import Link from "next/link";


const Root = () => {
  return (
    <>
      <div>This is the root page (Unprotected route)</div>
      <Link href={"/sign-in"}>
        <Button variant={"default"}>Sign In</Button>
      </Link>
      <Link href={"/sign-up"}>
        <Button variant={"secondary"}>Sign Up</Button>
      </Link>
    </>
  );
};

export default Root;
