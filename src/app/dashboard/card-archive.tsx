"use client";

import Image from "next/image";
import { EllipsisVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CardArchive = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">Archives</CardTitle>
                <CardAction>
                    <EllipsisVertical />
                </CardAction>
            </CardHeader>
            <CardContent className="flex justify-center">
                <Image src="/Illustration.svg" width={200} height={100} style={{ width: "auto", height: "auto" }} alt="Illustration" />
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button type="submit">BACK UP DATA</Button>
            </CardFooter>
        </Card>
    );
};

export default CardArchive;
