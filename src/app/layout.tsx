import type { Metadata } from 'next';
import { Hind_Siliguri } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

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
  title: 'স্কিল নেভিগেটর',
  description: 'আপনার নতুন দক্ষতা অর্জনের পথ প্রদর্শক।',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(fontBody.variable, fontHeadline.variable, 'font-body antialiased')}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
