"use client";

// IMPORTS -
import tools from "@/app/partials/tools";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  return (
    <div>
      <div className="my-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the features of Dynamo with AI
        </h2>

        <p
          className="text-muted-foreground font-light text-sm md:text-lg
        text-center       
        "
        >
          We promise the experience you deserve
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 py-[3rem] grid md:grid-cols-2 gap-3 ">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            className="p-4
                  border-black/5 flex items-center
                  justify-between hover:shadow-md
                  transition cursor-pointer flex-row"
            onClick={() => router.push(tool.href)}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.Icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
