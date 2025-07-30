
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart, BookOpen, Search, ShieldCheck, Star, Palette, Code, Newspaper } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { projectCategories, featuredProjects, testimonials } from '@/lib/data';
import ProjectCard from '@/components/project-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative bg-[#0A0A0A] py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[150%] h-[150%] rounded-full bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-3xl" />

          <div className="container mx-auto px-4 text-center relative">
            <div className="mx-auto max-w-3xl">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#B34FB3] to-[#091F6E] md:text-6xl">
                আপনার দক্ষতা বাড়ান, ভবিষ্যৎ গড়ুন
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80">
                আপনার ব্যবসার জন্য আকর্ষণীয় ওয়েবসাইট থিম এবং ডিজিটাল পণ্য কিনুন। আজই আপনার অনলাইন যাত্রা শুরু করুন।
              </p>
              <div className="mx-auto mt-8 max-w-xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="একটি থিম খুঁজুন, যেমন 'ই-কমার্স'"
                    className="h-14 w-full rounded-full bg-background pl-12 pr-32 text-base"
                  />
                  <Button type="submit" className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)'}}>
                    অনুসন্ধান
                  </Button>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <span className="text-sm font-medium text-white">জনপ্রিয়:</span>
                  {['ব্লগার', 'রিয়্যাক্ট', 'নিউজ', 'ই-কমার্স'].map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              জনপ্রিয় ক্যাটাগরি
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {projectCategories.map((category) => (
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
                              <AvatarFallback>{testimonial.name.charAt(0)}</Fallback>
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
    </>
  );
}
