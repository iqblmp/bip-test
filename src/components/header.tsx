"use client";
import { ModeToggle } from "./mode-toggle";
import { Search, UserRound, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

function Header() {
    const data = [
        { name: "NEW", count: 162 },
        { name: "TODO", count: 38 },
        { name: "DISTRIBUTED", count: 926 },
    ];
    return (
        <header className="flex items-center justify-between px-4 py-2 border-b border-primary min-h-[56px]">
            <div className="flex items-center gap-6 overflow-x-auto">
                <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                    <Search className="size-5 shrink-0" />
                    <span className="hidden sm:inline">Search for files, messages, reports etc.</span>
                </div>

                <div className="hidden lg:flex items-center gap-3 ">
                    {data.map((item, index) => (
                        <div key={index} className="flex items-center gap-x-2 text-sm font-semibold whitespace-nowrap">
                            {item.name}
                            <Button variant="secondary" size="xs" className="font-bold">
                                {item.count}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
                <ModeToggle />
                <UserRound className="size-5" />
                <span className="hidden md:inline text-sm font-medium">LUCY EDWARDS</span>
                <ChevronDown className="size-4" />
            </div>
        </header>
    );
}

export default Header;
