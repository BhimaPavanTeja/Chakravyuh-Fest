import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { eventsData } from '@/lib/events-data';
import Link from 'next/link';


export default function RegisterPage() {
  const competitionEvents = eventsData.filter(e => e.eventType && (e.eventType.includes('Competition') || e.eventType.includes('Exhibition')));

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center py-24 md:py-32">
        <Card className="w-full max-w-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-headline text-primary">Register for Events in Chakravyuh '26</CardTitle>
            <CardDescription>Welcome to the events registration page!</CardDescription>
          </CardHeader>
          <CardContent className='text-center'>
            <p>Registrations are open now for TECH EVENTS!</p>
            <Link href="/events" className='text-blue-500 hover:underline'>click here to register & grab your spot</Link>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
