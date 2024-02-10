// IMPORTS -
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageCircle,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import { routeProps } from "./types";

const routes: routeProps[] = [
  {
    label: "Dashboard",
    Icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-blue-600",
  },

  {
    label: "Conversation",
    Icon: MessageCircle,
    href: "/conversation",
    color: "text-green-600",
  },

  {
    label: "Visual",
    Icon: ImageIcon,
    href: "/img",
    color: "text-pink-600",
  },

  {
    label: "Video",
    Icon: VideoIcon,
    href: "/video",
    color: "text-orange-600",
  },

  {
    label: "Bop",
    Icon: MusicIcon,
    href: "/bop",
    color: "text-purple-600",
  },

  {
    label: "Code",
    Icon: Code,
    href: "/code",
    color: "text-red-600",
  },
 
];

export default routes;
