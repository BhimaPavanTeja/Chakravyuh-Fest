import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

const busRoutes = [
  {
    routeNo: "1",
    startPoint: "RTC Complex",
    via: "MVP Colony, Isukathota, Anandapuram",
    timing: "7:00 AM",
  },
  {
    routeNo: "2",
    startPoint: "Gajuwaka",
    via: "NAD Kotha Road, Kancharapalem, Asilmetta",
    timing: "7:15 AM",
  },
  {
    routeNo: "3",
    startPoint: "Maddilapalem",
    via: "Pithapuram Colony, Siripuram, Jagadamba",
    timing: "7:30 AM",
  },
  {
    routeNo: "4",
    startPoint: "Pendurthi",
    via: "Vepagunta, Simhachalam, Gopalapatnam",
    timing: "7:00 AM",
  },
  {
    routeNo: "5",
    startPoint: "Anakapalle",
    via: "Lankelapalem, Aganampudi, Steel Plant",
    timing: "6:45 AM",
  },
];

const BusRoutesSection = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">
        Bus Routes
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-12">
        We've arranged transportation from major points in the city to ensure you
        reach the fest without any hassle.
      </p>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Route No.</TableHead>
                <TableHead className="font-bold">Starting Point</TableHead>
                <TableHead className="font-bold">Via</TableHead>
                <TableHead className="text-right font-bold">Timing</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {busRoutes.map((route) => (
                <TableRow key={route.routeNo}>
                  <TableCell className="font-medium">{route.routeNo}</TableCell>
                  <TableCell>{route.startPoint}</TableCell>
                  <TableCell>{route.via}</TableCell>
                  <TableCell className="text-right">{route.timing}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusRoutesSection;
