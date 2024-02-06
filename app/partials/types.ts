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
  children: React.ReactNode;
};

// TOOLS PROPS -
export type toolProps = {
  label: string;
  Icon: LucideIcon;
  href: string;
  color: string;
  bgColor: string;
};

// HEADING PROPS -
export type headingProps = {
  title: string;
  Icon: LucideIcon;
  description: string;
  iconColor?: string;
  bgColor?: string;
};

// EMPTY PROPS -
export type emptyState = {
  label: string
}