"use client";

// IMPORTS -
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { SheetContent, SheetTrigger, Sheet } from "./ui/sheet";
import Sidebar from "./Sidebar";

const Mobile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0 bg-zinc-900 text-white border-none"
      >
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default Mobile;
