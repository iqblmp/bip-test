import { EllipsisVertical } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
    { month: "Xyz", desktop: 0 },
    { month: "Xyz", desktop: 1.4 },
    { month: "Xyz", desktop: 1.2 },
    { month: "Xyz", desktop: 1.8 },
    { month: "Yzx", desktop: 1.4 },
    { month: "Yxz", desktop: 3 },
];

const chartConfig = {
    desktop: {
        label: "Value",
        color: "#31efb8FF",
    },
} satisfies ChartConfig;

const ChartArea = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardDescription>GRAPH TITLE</CardDescription>
                <CardTitle className="text-2xl font-semibold">28.49%</CardTitle>
                <CardAction>
                    <EllipsisVertical />
                </CardAction>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: -20,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />

                        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />

                        <YAxis tickLine={false} axisLine={false} tickMargin={8} tickCount={4} tickFormatter={(value) => `${value}K`} />

                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

                        <Area dataKey="desktop" type="natural" fill="#31efb8FF" fillOpacity={0.4} stroke="#31efb8FF" stackId="a" />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    );
};

export default ChartArea;
