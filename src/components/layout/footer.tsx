import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    // { icon: <Twitter />, href: '#' },
    // { icon: <Facebook />, href: '#' },
    { icon: <Instagram />, href: 'https://www.instagram.com/chakravyuh_official_' },
    // { icon: <Linkedin />, href: '#' },
  ];

  return (
    <footer className="bg-primary/90 backdrop-blur-sm text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-headline">Chakravyuh '26</h3>
            <p className="text-sm text-primary-foreground/80 mt-1">The Campus Techno-Cultural symposium awaits.</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-primary-foreground/80">Follow us</p>
            {socialLinks.map((link, index) => (
              <Button key={index} variant="ghost" size="icon" asChild>
                <a href={link.href} aria-label={`Social media link ${index + 1}`} className='hover:bg-black hover:text-white'>
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-sm text-black">
          <p>&copy; {new Date().getFullYear()} Chakravyuh Fest. All rights reserved.</p>
          <p className="mt-1">Designed with passion by Chakravyuh '26 Team
            {/* <a href="https://linkedin.com/in/pavantejabhima" className='text-primary-foreground hover:underline'> Pavan Teja</a> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
