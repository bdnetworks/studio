'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Mail, MessageSquare, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Logo from './logo';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '/', label: 'হোম' },
  { href: '/courses', label: 'প্রজেক্টসমূহ' },
  { href: '/about', label: 'আমাদের সম্পর্কে' },
  { href: '/contact', label: 'যোগাযোগ' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center px-4">
        <div className="flex items-center gap-6">
          <Logo />
           <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-lg font-medium transition-colors hover:text-primary',
                    pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
        </div>

        <div className="hidden items-center gap-2 md:flex ml-auto">
          <Button variant="ghost" size="icon">
            <Search />
          </Button>
          <Button asChild size="icon" variant="ghost">
             <a href="mailto:support@digitalhub.com"><Mail /></a>
          </Button>
          <Button asChild size="icon" className="bg-transparent text-foreground hover:bg-[#25D366] hover:text-white">
            <a href="https://wa.me/1234567890" target="_blank"><MessageSquare /></a>
          </Button>
          <ThemeToggle />
        </div>

        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <div className="flex justify-between items-center">
                  <Logo />
                  <ThemeToggle />
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-4 flex flex-col gap-2">
                   <Button asChild variant="outline">
                      <a href="mailto:support@digitalhub.com"><Mail className="mr-2" /> ইমেইল করুন</a>
                  </Button>
                  <Button asChild style={{backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)'}} className="hover:bg-[#25D366!important] hover:text-white">
                     <a href="https://wa.me/1234567890" target="_blank"><MessageSquare className="mr-2" /> হোয়াটসঅ্যাপ</a>
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Search className="mr-2" /> অনুসন্ধান
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
