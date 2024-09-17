import type { iconPaths } from "@/components/IconPaths";

export const navItems: {
  title: string;
  href: string;
  icon: keyof typeof iconPaths;
}[] = [
  { title: "Dashboard", icon: "gauge", href: "/" },
  { title: "Settings", icon: "cog", href: "/settings" },
];

export const notifications: {
  id: number;
  message: string;
  time: string;
}[] = [
  { id: 1, message: "New report available", time: "5m ago" },
  { id: 2, message: "Meeting in 30 minutes", time: "30m ago" },
  { id: 3, message: "New user registered", time: "1h ago" },
];

export const messages: {
  id: number;
  user: string;
  message: string;
  time: string;
}[] = [
  {
    id: 1,
    user: "Alice",
    message: "Hi, can you check the latest report?",
    time: "10m ago",
  },
  {
    id: 2,
    user: "Bob",
    message: "Meeting rescheduled to 3 PM",
    time: "1h ago",
  },
  {
    id: 3,
    user: "Charlie",
    message: "New project requirements updated",
    time: "2h ago",
  },
];

export const userMenu: {
  title: string;
  icon: keyof typeof iconPaths;
  href: string;
}[] = [
  { title: "My Profile", icon: "user", href: "/profile" },
  { title: "Settings", icon: "cog", href: "/settings" },
  { title: "Log out", icon: "logout", href: "/logout" },
];
