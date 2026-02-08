import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center py-24 md:py-32">
        <Card className="w-full max-w-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-headline text-primary">Register for Chakravyuh '26</CardTitle>
            <CardDescription>Fill in your details to secure your spot in the labyrinth.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="college">College/University</Label>
                <Input id="college" placeholder="University of Innovation" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event">Choose Event</Label>
                <Select>
                  <SelectTrigger id="event">
                    <SelectValue placeholder="Select an event to register" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="codecrush">CodeCrush</SelectItem>
                    <SelectItem value="robowars">RoboWars</SelectItem>
                    <SelectItem value="hackathon">Hackathon</SelectItem>
                    <SelectItem value="rhythm-rumble">Rhythm Rumble</SelectItem>
                    <SelectItem value="futsal-fury">Futsal Fury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">Proceed to Payment</Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
