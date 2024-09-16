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
        <button className="dark:text-gray-300 p-2 text-gray-700">
          <Menu size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-gray-800">
        <div className="flex items-center border-b px-4 py-[18px] leading-none dark:border-gray-700">
          <div className="dark:text-white flex items-center gap-2 text-2xl font-bold text-gray-800">
            {props.logo}
            {props.title}
          </div>
        </div>
        <aside className="fixed flex flex-col w-64 h-screen">
          <nav className="flex-grow">
            <ul className="py-4 space-y-2">{props.navItems}</ul>
          </nav>
        </aside>
      </SheetContent>
    </Sheet>
  );
}
