"use client";

import Image from "next/image";
import { EllipsisVertical, Bell, CircleX, ChevronDown, Settings, UserRound } from "lucide-react";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import ChartArea from "./chart-area";
import ChartBar from "./chart-bar";
import ChartPie from "./chart-pie";
import ChartRadialShape from "./chart-radial-shape";
import ChartRadialStacked from "./chart-radial-stacked";
import CreateEvent from "./create-event";
import CreateTask from "./create-task";
import TableFile from "./table-file";

const comments = [
    { title: "Skydive with Jeff", time: "Jan 12 @ 6pm" },
    { title: "Sarah's 25th brithday - buy a nice present maybe something nice for her garden", time: "Jan 21 @ all day" },
    { title: "Doctor's appointment", time: "Jan 22 @ 11am" },
    { title: "Code Review", time: "Feb 1 @ 9am" },
    { title: "Marketing Sync", time: "Feb 5 @ 2pm" },
    { title: "Sprint Planning", time: "Feb 7 @ 8pm" },
];

export default function Home() {
    return (
        <div className="h-full p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <ChartArea />
                        <ChartBar />
                    </div>

                    <div className="flex w-full justify-between p-6 bg-card text-card-foreground  border border-primary  shadow-sm">
                        <div className="flex items-center gap-x-4">
                            <Bell className="text-main" />
                            System wide notification widget - please update this application, thank you.
                        </div>

                        <CircleX />
                    </div>
                    <CreateEvent />

                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold">Table FIle</CardTitle>
                            <CardAction>
                                <EllipsisVertical />
                            </CardAction>
                        </CardHeader>
                        <CardContent>
                            <TableFile />
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button>LOAD MORE</Button>
                        </CardFooter>
                    </Card>

                    <ChartRadialShape />

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold">Archives</CardTitle>
                                <CardAction>
                                    <EllipsisVertical />
                                </CardAction>
                            </CardHeader>
                            <CardContent className="flex justify-center">
                                <Image src="/Illustration.svg" width={100} height={100} alt="Illustration" />
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                <Button type="submit">BACK UP DATA</Button>
                            </CardFooter>
                        </Card>
                        <ChartRadialStacked />
                    </div>
                </div>

                <div className="flex flex-col gap-y-4">
                    <ChartPie />

                    <CreateTask />

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
                                            <div className="font-medium">{event.time}</div>
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
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold">Rate</CardTitle>
                            <CardAction>
                                <EllipsisVertical />
                            </CardAction>
                        </CardHeader>
                        <CardContent className="flex justify-center text-6xl font-bold">34%</CardContent>
                        <CardFooter className="flex flex-col justify-center">
                            Engagement rate
                            <span className="flex text-main mt-1">
                                <ChevronDown />
                                12%
                            </span>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
