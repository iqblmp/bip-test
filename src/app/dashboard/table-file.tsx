import { EllipsisVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
const datas = [
    {
        name: "briefing-notes-with-apple.pdf",
        size: "56 MB",
        from: "Ben Andrews",
        date: "Jan 23",
    },
    {
        name: "image.png",
        size: "4 MB",
        from: "Alice Kay",
        date: "Jan 21",
    },
    {
        name: "website_persentation_and_discussion.doc",
        size: "104 MB",
        from: "Lewis Smith",
        date: "Jan 17",
    },
    {
        name: "Promotional Video",
        size: "2.4 GB",
        from: "Benedict Cumberbatch",
        date: "Jan 12",
    },
];

export default function TableFile() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">Manage File</CardTitle>
                <CardAction>
                    <EllipsisVertical />
                </CardAction>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>FILE NAME</TableHead>
                            <TableHead>SIZE</TableHead>
                            <TableHead>FROM</TableHead>
                            <TableHead>DATE</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {datas.map((data) => (
                            <TableRow key={data.name}>
                                <TableCell className="font-medium">{data.name}</TableCell>
                                <TableCell>{data.size}</TableCell>
                                <TableCell>{data.from}</TableCell>
                                <TableCell>{data.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button>LOAD MORE</Button>
            </CardFooter>
        </Card>
    );
}
