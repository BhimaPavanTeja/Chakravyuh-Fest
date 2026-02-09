"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Bus Routes', href: '/bus-routes' },
    { name: 'Team', href: '/team' },
    { name: 'Sponsors', href: '/sponsors' },
  ];
  
  const NavItems = () => (
    <>
      {navLinks.map((link) => (
        <Button key={link.name} variant="link" asChild className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
          <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold font-headline text-primary">
            Chakravyuh '26
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            <NavItems />
            <Button asChild>
              <Link href="/register">Register Now</Link>
            </Button>
          </nav>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                     <Link href="/" className="text-xl font-bold font-headline text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        Chakravyuh '26
                      </Link>
                    <SheetTrigger asChild>
                       <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex flex-col items-center justify-center flex-1 gap-6">
                    <NavItems />
                    <Button asChild size="lg" className="w-4/5">
                      <Link href="/register">Register Now</Link>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
