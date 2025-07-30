import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from './logo';

export default function Footer() {
  const navLinks = [
    { title: 'কোম্পানি', links: ['আমাদের সম্পর্কে', 'কোর্সসমূহ', 'যোগাযোগ'] },
    { title: 'প্ল্যাটফর্ম', links: ['লাইব্রেরি ব্রাউজ করুন', 'সদস্য হন', 'সাইন ইন করুন'] },
    { title: 'সাপোর্ট', links: ['সাধারণ প্রশ্নাবলী', 'সহায়তা কেন্দ্র', 'আমাদের সাথে যোগাযোগ করুন'] },
  ];

  return (
    <footer className="bg-primary/5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-muted-foreground">
              আপনার নতুন দক্ষতা অর্জন এবং আপনার ক্যারিয়ার উন্নত করার জন্য চূড়ান্ত গাইড।
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          {navLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-headline font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} স্কিল নেভিগেটর। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}
