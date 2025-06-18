"use client";

import { EllipsisVertical } from "lucide-react";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CreateTask = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">Create Task</CardTitle>
                <CardAction>
                    <EllipsisVertical />
                </CardAction>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Task name</Label>
                            <Input id="name" type="text" placeholder="e.g watch Games of Thrones, again..." required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Send email reminder</Label>
                            <Input id="email" type="email" placeholder="email@dom" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="details">Details</Label>
                            <Textarea id="details" placeholder="add some dets here..." required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="details">Due date</Label>
                            <Select>
                                <SelectTrigger id="details" className="w-full">
                                    <SelectValue placeholder="Next Friday" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="system">Next Friday</SelectItem>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button type="submit" className="w-full">
                    CREATE TASK
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CreateTask;
