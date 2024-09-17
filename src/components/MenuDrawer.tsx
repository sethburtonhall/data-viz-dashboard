import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface MenuDrawerProps {
  title?: string;
  logo?: React.ReactNode;
  navItems?: React.ReactNode;
}

export default function MenuDrawer(props: MenuDrawerProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <button className="p-2 text-gray-700 dark:text-gray-300">
          <Menu size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-background">
        <div className="flex items-center border-b px-4 py-[18px] leading-none dark:border-gray-700">
          <div className="flex items-center gap-2 text-2xl font-bold text-foreground">
            {props.logo}
            {props.title}
          </div>
        </div>
        <aside className="fixed flex h-screen w-64 flex-col">
          <nav className="flex-grow">
            <ul className="space-y-2 py-4">{props.navItems}</ul>
          </nav>
        </aside>
      </SheetContent>
    </Sheet>
  );
}
