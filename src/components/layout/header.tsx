"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Menu, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-1 overflow-hidden">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          <span>
            Latest News: Registrations for upcoming events are opening soon! Pay attention to secure your spot.
          </span>
          <span>
            Latest News: Registrations for upcoming events are opening soon! Pay attention to secure your spot.
          </span>
        </div>
      </div>
    </div>
  );
};


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
    <div className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"
    )}>
      <header className={cn(
        "w-full",
        isScrolled ? "border-b" : ""
      )}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-primary">
              <Image src="/logo.png" alt="Chakravyuh '26 Logo" width={50} height={50} />
              <span>Chakravyuh '26</span>
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
                    <Menu className="h-7 w-7" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full bg-background p-0">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Main navigation menu for mobile devices.
                  </SheetDescription>
                  <div className="flex flex-col h-full">
                    <div className="flex justify-start items-center p-4 border-b">
                       <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                          <Image src="/logo.png" alt="Chakravyuh '26 Logo" width={32} height={32} className="h-8 w-8" />
                          <span>Chakravyuh '26</span>
                        </Link>
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
      <AnnouncementBar />
    </div>
  );
};

export default Header;
