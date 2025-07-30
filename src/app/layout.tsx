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

export const metadata: Metadata = {
  title: 'ডিজিটাল হাব - আপনার ডিজিটাল পণ্যের বিশ্বস্ত ঠিকানা',
  description: 'আপনার ব্যবসার জন্য আকর্ষণীয় ওয়েবসাইট থিম এবং ডিজিটাল পণ্য কিনুন।',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="!scroll-smooth" suppressHydrationWarning>
      <head>
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
            <div className="bg-primary text-primary-foreground text-center p-2 text-sm">
                <Link href="/courses">
                    <Image src="https://placehold.co/1200x80.png" alt="special offer" width={1200} height={80} className="w-full h-auto" data-ai-hint="advertisement banner" />
                </Link>
            </div>
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
