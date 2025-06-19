"use client";

import * as React from "react";
import { EllipsisVertical, CirclePlus } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardAction, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const markDates = [new Date(2025, 5, 16), new Date(2025, 6, 1)];

const dummyEvents = [
    { title: "Skydive with Jeff", time: "Jan 12 @ 6pm" },
    { title: "Sarah's 25th brithday - buy a nice present maybe something nice for her garden", time: "Jan 21 @ all day" },
    { title: "Doctor's appointment", time: "Jan 22 @ 11am" },
    { title: "Code Review", time: "Feb 1 @ 9am" },
    { title: "Marketing Sync", time: "Feb 5 @ 2pm" },
    { title: "Sprint Planning", time: "Feb 7 @ 8pm" },
];

export default function CreateEvent() {
    const [isClient, setIsClient] = React.useState<boolean>(false);
    const [date, setDate] = React.useState<Date | undefined>();

    React.useEffect(() => {
        setIsClient(true);
    }, [isClient]);

    return (
        isClient && (
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold">Events</CardTitle>

                    <CardAction>
                        <EllipsisVertical />
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col w-full justify-center">
                            <Button variant="ghost" className=" text-main mb-6">
                                <CirclePlus size={18} />
                                NEW EVENT
                            </Button>
                            <ScrollArea className="h-[360px] w-full pr-4">
                                <div className="flex flex-col gap-4">
                                    {dummyEvents.map((event, index) => (
                                        <div key={index} className="py-3 px-3.5 border border-primary  bg-muted">
                                            <div className="font-medium">{event.time}</div>
                                            <div className="text-sm text-muted-foreground">{event.title}</div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="w-full"
                            buttonVariant="ghost"
                            modifiers={{
                                highlight: markDates,
                            }}
                            modifiersClassNames={{
                                highlight: "bg-primary text-background rounded-full",
                            }}
                        />
                    </div>
                </CardContent>
            </Card>
        )
    );
}
