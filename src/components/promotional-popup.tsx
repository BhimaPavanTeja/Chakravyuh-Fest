
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const PromotionalPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const promoImage = PlaceHolderImages.find((p) => p.id === "promoted-app");

  useEffect(() => {
    // Show after a delay to not compete with pre-loader
    // Reset state on navigation
    setIsOpen(false);
    
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4500); // 4.5 seconds delay (PreLoader is 2.5s)

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] overflow-hidden p-0 border-none bg-transparent shadow-none">
        <div className="relative bg-background rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <DialogHeader className="p-6 text-center">
            <DialogTitle className="text-2xl font-bold font-headline text-primary">Discover Zenverse</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Experience tranquility like never before.
            </DialogDescription>
          </DialogHeader>
          
          <div className="px-6 pb-6 space-y-4 flex flex-col items-center">
            {promoImage && (
              <div className="relative h-full w-full aspect-video rounded-xl overflow-hidden shadow-inner bg-muted">
                <Image
                  src={promoImage.imageUrl}
                  alt={promoImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={promoImage.imageHint}
                />
              </div>
            )}
            
            <p className="text-center text-sm text-foreground/80">
              Download the Zenverse app now on Google Play Store to start your journey.
            </p>
            
            <Button 
              className="w-full h-12 text-lg font-semibold rounded-xl"
              asChild
            >
              <a 
                href="https://play.google.com/store/apps/details?id=com.maithri" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get it on Google Play
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              className="w-full text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Maybe later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromotionalPopup;
