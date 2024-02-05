"use client";

// IMPORTS -
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import routes from "@/app/partials/navContent";
import { usePathname } from "next/navigation";

// CONSTANTS -
const monserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full text-white">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <h1 className={cn("font-medium text-2xl", monserrat.className)}>
              Dynamo
            </h1>
          </div>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathName === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.Icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
