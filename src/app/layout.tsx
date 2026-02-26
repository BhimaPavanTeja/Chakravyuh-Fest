import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import PreLoader from '@/components/pre-loader';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Chakravyuh Fest',
  description: 'The official website for Chakravyuh Fest 2026.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <PreLoader />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
