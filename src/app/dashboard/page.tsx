"use client";

import ChartArea from "./chart-area";
import ChartBar from "./chart-bar";
import ChartPie from "./chart-pie";
import ChartRadialShape from "./chart-radial-shape";
import ChartRadialStacked from "./chart-radial-stacked";
import CreateEvent from "./create-event";
import CreateTask from "./create-task";
import TableFile from "./table-file";
import CardArchive from "./card-archive";
import CardRate from "./card-rate";
import CardSocial from "./card-social";
import Notification from "./notification";

export default function DashboardPage() {
    return (
        <div className="h-full p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <ChartArea />
                        <ChartBar />
                    </div>
                    <Notification />
                    <CreateEvent />
                    <TableFile />
                    <ChartRadialShape />
                    <div className="flex flex-col sm:flex-row gap-4">
                        <CardArchive />
                        <ChartRadialStacked />
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <ChartPie />
                    <CreateTask />
                    <CardSocial />
                    <CardRate />
                </div>
            </div>
        </div>
    );
}
