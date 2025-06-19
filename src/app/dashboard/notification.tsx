import { Bell, CircleX } from "lucide-react";

const Notification = () => {
    return (
        <div className="flex w-full justify-between items-center p-6 bg-card text-card-foreground  border border-primary  shadow-sm">
            <div className="flex md:items-center  gap-x-4">
                <Bell size={20} className="text-main shrink-0 mt-1 md:mt-0 " />
                System wide notification widget - please update this application, thank you.
            </div>
            <CircleX size={20} className=" shrink-0" />
        </div>
    );
};

export default Notification;
