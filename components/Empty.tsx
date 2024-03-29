// IMPORTS -
import { emptyState } from "@/app/partials/types";
// import Image from "next/image";

const Empty = ({ label }: emptyState) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      {/* <div className="relative h-72 w-72">
        <Image alt="Empty" fill src="https://iili.io/J12f9kl.jpg" />
      </div> */}
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

export default Empty;
