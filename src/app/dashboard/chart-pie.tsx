"use client";

import { EllipsisVertical } from "lucide-react";
import { Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import { Card, CardContent, CardFooter, CardHeader, CardAction, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export const description = "A donut chart with an active sector";

const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chart-1)" },
    { browser: "safari", visitors: 200, fill: "var(--color-chart-2)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-chart-3)" },
    { browser: "edge", visitors: 373, fill: "var(--color-chart-4)" },
];

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "var(--chart-1)",
    },
    safari: {
        label: "Safari",
        color: "var(--chart-2)",
    },
    firefox: {
        label: "Firefox",
        color: "var(--chart-3)",
    },
    edge: {
        label: "Edge",
        color: "var(--chart-4)",
    },
} satisfies ChartConfig;

export default function ChartPie() {
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">Segments</CardTitle>
                <CardAction>
                    <EllipsisVertical />
                </CardAction>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
                    <PieChart>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Pie data={chartData} dataKey="visitors" nameKey="browser" strokeWidth={5} activeIndex={3} activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => <Sector {...props} outerRadius={outerRadius + 10} />} />
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 leading-none font-medium">
                        <button className="size-4 rounded-full bg-chart-4" /> 41% Segment One
                    </div>
                    <div className="flex items-center gap-2 leading-none font-medium">
                        <button className="size-4 rounded-full bg-chart-1" /> 27% Segment Two
                    </div>
                    <div className="flex items-center gap-2 leading-none font-medium">
                        <button className="size-4 rounded-full bg-chart-2" /> 19% Segment Three
                    </div>
                    <div className="flex items-center gap-2 leading-none font-medium">
                        <button className="size-4 rounded-full bg-chart-3" /> 13% Segment Four
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
