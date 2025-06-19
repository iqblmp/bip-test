"use client";

import { EllipsisVertical, ChevronDown } from "lucide-react";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CardRate = () => {
    return (
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
    );
};

export default CardRate;
