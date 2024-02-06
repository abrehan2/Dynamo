// IMPORTS -
import { Code, ImageIcon, MusicIcon, VideoIcon } from "lucide-react";
import { toolProps } from "./types";

const tools: Array<toolProps> = [
  {
    label: "Bop",
    Icon: MusicIcon,
    href: "/bop",
    color: "text-purple-600",
    bgColor: "bg-purple-600/10",
  },

  {
    label: "Visual",
    Icon: ImageIcon,
    href: "/img",
    color: "text-pink-600",
    bgColor: "bg-pink-600/10",
  },

  {
    label: "Video",
    Icon: VideoIcon,
    href: "/video",
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
  },

  {
    label: "Code",
    Icon: Code,
    href: "/code",
    color: "text-red-600",
    bgColor: "bg-red-600/10",
  },
];

export default tools;
