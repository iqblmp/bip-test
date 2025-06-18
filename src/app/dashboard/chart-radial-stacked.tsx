"use client";

import { EllipsisVertical } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent, CardHeader, CardAction, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export const description = "A radial chart with stacked sections";

const chartData = [{ month: "january", desktop: 20, mobile: 87.5 }];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#343842FF",
    },
    mobile: {
        label: "Mobile",
        color: "#31efb8FF",
    },
} satisfies ChartConfig;

export default function ChartRadialStacked() {
    const totalVisitors = chartData[0].desktop + chartData[0].mobile;

    return (
        <Card className="w-full h-72">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">Storage</CardTitle>

                <CardAction>
                    <EllipsisVertical />
                </CardAction>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="">
                    <RadialBarChart data={chartData} endAngle={180} innerRadius={80} outerRadius={130}>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                                <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 16} className="fill-foreground text-2xl font-bold">
                                                    {totalVisitors.toLocaleString() + "K"}
                                                </tspan>
                                                <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} className="fill-muted-foreground">
                                                    Yays Recieved
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                        <RadialBar dataKey="desktop" stackId="a" cornerRadius={5} fill="var(--color-desktop)" className="stroke-transparent stroke-2" />
                        <RadialBar dataKey="mobile" fill="var(--color-mobile)" stackId="a" cornerRadius={5} className="stroke-transparent stroke-2" />
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
