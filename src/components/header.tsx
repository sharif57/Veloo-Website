import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="flex lg:h-24 items-center justify-between border-b !bg-[#059669] mt-4 rounded-lg px-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-medium text-[#FFFFFF]">Welcome, Sharif Mahamud</h1>
        <p className="text-lg font-normal text-[#F3F4F6] hidden sm:block">Let's get to work. Here's what's on your plate today.</p>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar>
          <AvatarImage src="/user-avatar.png" />
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
