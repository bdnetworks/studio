'use client';
import { useState } from 'react';
import type { Metadata } from 'next';
import { Hind_Siliguri } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const fontBody = Hind_Siliguri({ 
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

const fontHeadline = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['600', '700'],
  variable: '--font-headline',
});

// Metadata can't be exported from a client component.
// You can either move it to a server component or export it from a metadata.ts file.
// For now, we will comment it out.
// export const metadata: Metadata = {
//   title: 'ডিজিটাল হাব - আপনার ডিজিটাল পণ্যের বিশ্বস্ত ঠিকানা',
//   description: 'আপনার ব্যবসার জন্য আকর্ষণীয় ওয়েবসাইট থিম এবং ডিজিটাল পণ্য কিনুন।',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <html lang="bn" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <title>ডিজিটাল হাব - আপনার ডিজিটাল পণ্যের বিশ্বস্ত ঠিকানা</title>
        <meta name="description" content="আপনার ব্যবসার জন্য আকর্ষণীয় ওয়েবসাইট থিম এবং ডিজিটাল পণ্য কিনুন।" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(fontBody.variable, fontHeadline.variable, 'font-body antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            {isBannerVisible && (
              <div className="bg-primary text-primary-foreground text-center p-2 text-sm relative">
                  <Link href="/courses">
                      <Image src="https://placehold.co/1200x80.png" alt="special offer" width={1200} height={80} className="w-full h-auto" data-ai-hint="advertisement banner" />
                  </Link>
                   <Button variant="ghost" size="icon" className="absolute top-1/2 right-4 -translate-y-1/2 h-6 w-6 text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground" onClick={() => setIsBannerVisible(false)}>
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close banner</span>
                  </Button>
              </div>
            )}
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
