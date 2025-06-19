"use client";

import { UserRound, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const comments = [
    { title: "Skydive with Jeff", time: "JEFF CAPP" },
    { title: "Doctor's appointment", time: "WILSON CHILL" },
    { title: "Code Review", time: "WILSON CHILL" },
    { title: "Marketing Sync", time: "TREFOR BALD" },
    { title: "Sprint Planning", time: "ALICE KAYY" },
    { title: "Nice work!", time: "ALICE KAYY" },
];
function CardSocial() {
    return (
        <Card className="w-full">
            <CardHeader className="flex justify-between items-center border-b border-primary">
                <div className="flex items-center gap-x-3">
                    <UserRound size={25} />
                    <div className="flex flex-col  font-semibold ">
                        LUCY EDWARDS
                        <span className="text-muted-foreground font-normal">
                            <button className="size-2 rounded-full bg-main mr-1" /> online
                        </span>
                    </div>
                </div>
                <Settings />
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4">
                    {comments.map((event, index) => (
                        <div key={index} className="flex gap-2 items-center py-3 px-3.5 border border-primary bg-muted">
                            <UserRound className="shrink-0" size="20" />
                            <div>
                                <div className="font-medium">
                                    {event.time} <span className="text-xs font-light">52 minutes ago</span>
                                </div>
                                <div className="text-sm text-muted-foreground">{event.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-center">
                <div className="relative w-full border border-primary">
                    <Input type="text" placeholder="Send Message" className="pr-16" />
                    <Button variant="ghost" type="submit" className="absolute top-1/2 right-1 -translate-y-1/2 px-3 py-1 h-auto text-sm">
                        Send
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}

export default CardSocial;
