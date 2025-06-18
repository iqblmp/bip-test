"use client";

import { Calendar, Archive, CircleArrowUp, Send, Bell, Clock3, Paperclip } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const menu = [
    { href: "/insight", icon: CircleArrowUp },
    { href: "/note", icon: Paperclip },
    { href: "/notification", icon: Bell },
    { href: "/calendar", icon: Calendar },
    { href: "/mail", icon: Send },
    { href: "/dashboard", icon: Archive },
    { href: "/history", icon: Clock3 },
];
export default function Sidebar() {
    const pathname = usePathname();
    return (
        <div className="flex flex-col h-full w-14 items-center py-4 gap-y-3 border-r border-primary">
            {menu.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link key={item.href} href={item.href} className={cn("p-2  cursor-pointer ", isActive && "text-[#31efb8FF]")}>
                        <item.icon className="size-5" />
                    </Link>
                );
            })}
        </div>
    );
}
