import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { eventsData } from '@/lib/events-data';

export default function RegisterPage() {
  const competitionEvents = eventsData.filter(e => e.eventType && (e.eventType.includes('Competition') || e.eventType.includes('Exhibition')));

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center py-24 md:py-32">
        <Card className="w-full max-w-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-headline text-primary">Register for Chakravyuh '26</CardTitle>
            <CardDescription>Welcome to the registration page!</CardDescription>
          </CardHeader>
          <CardContent>
            <p>registrations will opening soon!</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
