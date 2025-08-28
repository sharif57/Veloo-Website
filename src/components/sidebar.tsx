// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";
// import { LayoutDashboard, Tag, Calendar, Settings, LogOut } from "lucide-react";

// const navigation = [
//   { name: "Dashboard", href: "/demo", icon: LayoutDashboard },
//   { name: "Offers", href: "/offers", icon: Tag },
//   { name: "Calendar", href: "/calendar", icon: Calendar },
//   { name: "Settings", href: "/settings", icon: Settings },
// ];

// export function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <div className="flex h-screen w-64 flex-col bg-[#2d7d5f] text-white">
//       {/* Logo */}
//       <div className="flex h-16 items-center px-6">
//         <h1 className="text-2xl font-bold">VetGo</h1>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 space-y-1 px-3 py-4">
//         {navigation.map((item) => {
//           const isActive = pathname === item.href;
//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={cn(
//                 "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
//                 isActive
//                   ? "bg-[#1e5a42] text-white"
//                   : "text-green-100 hover:bg-[#1e5a42] hover:text-white"
//               )}
//             >
//               <item.icon className="h-5 w-5" />
//               {item.name}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Logout */}
//       <div className="border-t border-green-600 p-3">
//         <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-green-100 transition-colors hover:bg-[#1e5a42] hover:text-white">
//           <LogOut className="h-5 w-5" />
//           Log Out
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Tag, Calendar, Settings, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import DashboardLogo from "./icon/dashboardLogo";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Offers", href: "/offers", icon: Tag },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 flex-col bg-[#059669] text-white transition-transform duration-300 ease-in-out md:static md:flex md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center  justify-center mt-16">
          <DashboardLogo />
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4 mt-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-3 text-lg font-semibold transition-colors",
                  isActive
                    ? "bg-[#D1FAE5] text-[#047857]"
                    : "text-green-100 hover:bg-[#1e5a42] hover:text-white"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-green-600 p-3">
          <button
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-green-100 transition-colors hover:bg-[#1e5a42] hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <LogOut className="h-5 w-5" />
            Log Out
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}