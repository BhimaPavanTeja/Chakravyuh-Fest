import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Ready to Enter the Labyrinth?</h2>
      <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
        The gates to Chakravyuh '26 are opening soon. Secure your spot, join the legends, and create memories that will last a lifetime.
      </p>
      <Button size="lg" asChild>
        <Link href="/register">
          Register Now <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </>
  );
};

export default CtaSection;
