'use client';
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {

  const pathname = usePathname()

  if (pathname === '/offers/message') {
    return null; // Don't render the header on the dashboard page
  }

  return (
    <div className="flex lg:h-24 h-20 items-center justify-between border-b !bg-[#059669] lg:mt-4 lg:rounded-lg px-6 ">
      <div className="space-y-2">
        <h1 className="text-2xl font-medium text-[#FFFFFF]">Welcome, Sharif Mahamud</h1>
        <p className="text-lg font-normal text-[#F3F4F6] hidden sm:block">Let's get to work. Here's what's on your plate today.</p>
      </div>

      <div className="flex items-center gap-4">
   
        {/* <Button variant="ghost" className="bg-red-50" size="icon"> */}
          <Bell className="size-6 text-white cursor-pointer"  />
        {/* </Button> */}
        <Avatar>
          <AvatarImage src="/user-avatar.png" />
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
