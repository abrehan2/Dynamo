import { LucideIcon } from "lucide-react";

// ROUTE PROPS -
export type routeProps = {
  label: string;
  Icon: LucideIcon;
  href: string;
  color: string;
};

// HYDRATE PROPS -
export type hydrateProps = {
  children: React.ReactNode
}