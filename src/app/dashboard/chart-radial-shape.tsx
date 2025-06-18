"use client";

import { EllipsisVertical } from "lucide-react";
import { PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent, CardTitle, CardHeader, CardAction } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

export const description = "A radial chart with a custom shape";

const chartData = [{ browser: "safari", visitors: 1260, fill: "var(--color-chart-5)" }];

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig;

export default function ChartRadialShape() {
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">Progress</CardTitle>

                <CardAction>
                    <EllipsisVertical />
                </CardAction>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col justify-center">
                    <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full h-full max-h-[250px]">
                        <RadialBarChart data={chartData} endAngle={100} innerRadius={80} outerRadius={140}>
                            <PolarGrid gridType="circle" radialLines={false} stroke="none" className="first:fill-second last:fill-card" polarRadius={[86, 74]} />
                            <RadialBar dataKey="visitors" background />
                            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}></PolarRadiusAxis>
                        </RadialBarChart>
                    </ChartContainer>
                    <div className="space-y-1 text-sm text-center">
                        <p className="text-2xl font-bold">12/19</p>
                        <p className="text-muted-foreground leading-none">TASK COMPLETE</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full h-full max-h-[250px]">
                        <RadialBarChart data={chartData} endAngle={100} innerRadius={80} outerRadius={140}>
                            <PolarGrid gridType="circle" radialLines={false} stroke="none" className="first:fill-second last:fill-card" polarRadius={[86, 74]} />
                            <RadialBar dataKey="visitors" background />
                            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}></PolarRadiusAxis>
                        </RadialBarChart>
                    </ChartContainer>
                    <div className="space-y-1 text-sm text-center">
                        <p className="text-2xl font-bold">60%</p>
                        <p className="text-muted-foreground leading-none">FUNDS MET</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full h-full max-h-[250px]">
                        <RadialBarChart data={chartData} endAngle={100} innerRadius={80} outerRadius={140}>
                            <PolarGrid gridType="circle" radialLines={false} stroke="none" className="first:fill-second last:fill-card" polarRadius={[86, 74]} />
                            <RadialBar dataKey="visitors" background />
                            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}></PolarRadiusAxis>
                        </RadialBarChart>
                    </ChartContainer>
                    <div className="space-y-1 text-sm text-center">
                        <p className="text-2xl font-bold">Bacon</p>
                        <p className="text-muted-foreground leading-none">TARGET CONSUMPTIONS</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
