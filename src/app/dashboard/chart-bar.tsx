import { CartesianGrid, XAxis, YAxis } from "recharts";
import { EllipsisVertical } from "lucide-react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { Bar, BarChart } from "recharts";

const chartDatas = [
    { name: "Xyz", value: 500 },
    { name: "Xyz", value: 900 },
    { name: "Xyz", value: 1800 },
    { name: "Xyz", value: 1600 },
    { name: "Yzx", value: 2900 },
    { name: "Yxz", value: 2400 },
];

const chartConfigs = {
    value: {
        label: "Value",
        color: "#31efb8FF",
    },
} satisfies ChartConfig;

function ChartBar() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardDescription>GRAPH TITLE</CardDescription>
                <CardTitle className="text-2xl font-semibold">36.25%</CardTitle>
                <CardAction>
                    <EllipsisVertical />
                </CardAction>
            </CardHeader>

            <CardContent>
                <ChartContainer config={chartConfigs}>
                    <BarChart
                        accessibilityLayer
                        data={chartDatas}
                        margin={{
                            left: -20,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} />
                        <YAxis tickLine={false} axisLine={false} tickMargin={8} tickCount={4} tickFormatter={(value) => `${value / 1000}K`} />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Bar
                            dataKey="value"
                            radius={8}
                            shape={(props) => {
                                const { x, y, width, height, index } = props;
                                const fill = index === 4 ? "#31efb8FF" : "#343842FF";
                                return <rect x={x} y={y} width={width} height={height} fill={fill} rx={4} ry={4} />;
                            }}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>

            <CardFooter></CardFooter>
        </Card>
    );
}

export default ChartBar;
