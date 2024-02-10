"use client";

// IMPORTS -
import { Montserrat } from "next/font/google";
import { LinkedinIcon, Github } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

// COMPONENTS -
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const LandingNav = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav
      className="md:p-4 p-10 bg-transparent flex items-center 
  justify-between
  "
    >
      <Link className="flex items-center overflow-hidden" href={"/"}>
        <div className="relative h-fit w-fit mr-4">
          <h1 className={cn("font-medium text-3xl text-white", font.className)}>
            Dynamo
          </h1>
        </div>
      </Link>

      <div className="flex items-center gap-x-2">
        <Link href={"https://www.linkedin.com/in/abrehan/"}>
          <LinkedinIcon className={cn("w-6 h-6 text-white")} />
        </Link>

        <Link href={"https://github.com/abrehan2"}>
          <Github className={cn("w-6 h-6 text-white")} />
        </Link>
      </div>

      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant={"outline"} className="rounded-full">
            Get started
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNav;
