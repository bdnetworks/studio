
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart, BookOpen, Search, ShieldCheck, Star, Palette, Code, Newspaper, Phone, ShoppingCart, LayoutDashboard, BarChart3 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { projectCategories, featuredProjects, testimonials } from '@/lib/data';
import ProjectCard from '@/components/project-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


export default function Home() {
    const graphicCategories = [
    { name: 'ব্লগার থিম', icon: BarChart3 },
    { name: 'ই-কমার্স', icon: ShoppingCart },
    { name: 'নিউজ সাইট', icon: Newspaper },
    { name: 'রিয়্যাক্ট প্রজেক্ট', icon: Code },
    { name: 'নেক্সট.জেএস', icon: LayoutDashboard },
    { name: 'UI/UX ডিজাইন', icon: Palette },
  ];
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0A0A0A] py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mx-auto max-w-4xl">
             <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                লার্নিং প্ল্যাটফর্ম
              </div>
            <h1 className="font-headline mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              <span className="bg-gradient-to-br from-[#b34fb3] to-[#091f6e] bg-clip-text text-transparent">স্কিল শিখুন,</span> নিজেকে গড়ুন
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              আপনার ব্যবসার জন্য আকর্ষণীয় ওয়েবসাইট থিম এবং ডিজিটাল পণ্য কিনুন। আজই আপনার অনলাইন যাত্রা শুরু করুন।
            </p>
             <div className="mx-auto mt-8 max-w-md">
              <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-4">
                      <p className="font-medium">কোর্স সম্পর্কিত যেকোনো তথ্যের জন্য কল করুন</p>
                      <Button variant="ghost" className="mt-2 text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 w-full h-14">
                          <Phone className="mr-2"/> 09613823645
                      </Button>
                  </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%]">
             <Image src="https://skill-shikhun.netlify.app/images/hero-graphics.png" alt="Hero Graphics" width={1152} height={384} className="w-full h-auto" />
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 md:py-24 pt-8">
        <div className="container mx-auto px-4">
            <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              জনপ্রিয় ক্যাটাগরি
            </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {graphicCategories.map((category) => (
              <Card
                key={category.name}
                className="group transform cursor-pointer text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-4 transition-colors duration-300 group-hover:bg-primary">
                    <category.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            বিশেষ প্রজেক্টসমূহ
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            আপনার ডিজিটাল যাত্রা শুরু করার জন্য আমাদের সেরা কিছু থিম এবং টেমপ্লেট।
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" style={{borderColor: 'var(--accent)', color: 'var(--accent)'}} className="hover:bg-accent/10 hover:text-accent">
              <Link href="/courses">সব প্রজেক্ট দেখুন <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Happy clients"
                width={600}
                height={600}
                className="rounded-xl shadow-lg"
                data-ai-hint="digital products developer"
              />
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                কেন ডিজিটাল হাব আপনার সেরা পছন্দ
              </h2>
              <p className="mt-4 text-muted-foreground">
                আমরা আপনার প্রয়োজন অনুযায়ী সেরা মানের ডিজিটাল পণ্য সরবরাহ করতে প্রতিশ্রুতিবদ্ধ।
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0"><Palette className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold">আধুনিক ও আকর্ষণীয় ডিজাইন</h3>
                    <p className="text-muted-foreground">আমাদের প্রতিটি ডিজাইন আধুনিক এবং ব্যবহারকারী-বান্ধব।</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0"><Code className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold">ক্লিন এবং অপ্টিমাইজড কোড</h3>
                    <p className="text-muted-foreground">আমাদের থিমগুলো দ্রুত লোড হয় এবং সহজেই কাস্টমাইজ করা যায়।</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0"><ShieldCheck className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold">আজীবন সাপোর্ট ও আপডেট</h3>
                    <p className="text-muted-foreground">যেকোনো প্রয়োজনে আমরা আপনাকে সাপোর্ট দিতে সর্বদা প্রস্তুত।</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            আমাদের ক্লায়েন্টরা যা বলে
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            ডিজিটাল হাবের সাথে কাজ করে যারা তাদের ব্যবসাকে নতুন উচ্চতায় নিয়ে গেছেন।
          </p>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="mx-auto mt-12 w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex h-full flex-col justify-between p-6">
                        <div>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                          </div>
                          <p className="mt-4 text-muted-foreground">"{testimonial.quote}"</p>
                        </div>
                        <div className="mt-6 flex items-center">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 py-16 md:grid-cols-2 md:py-24">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                আমাদের পার্টনার হন
              </h2>
              <p className="mt-4 text-muted-foreground">
                আপনি যদি একজন ডেভেলপার বা ডিজাইনার হন, আমাদের সাথে যোগ দিন। আপনার তৈরি পণ্য আমাদের প্ল্যাটফর্মে বিক্রি করে আয় করুন।
              </p>
              <Button asChild size="lg" className="mt-8" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)'}}>
                <Link href="/contact">যোগাযোগ করুন <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="relative hidden h-full min-h-[250px] md:block">
              <Image
                src="https://placehold.co/500x350.png"
                alt="A developer working on a project"
                width={500}
                height={350}
                className="rounded-xl shadow-lg"
                data-ai-hint="developer partner"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
