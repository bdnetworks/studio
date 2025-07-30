import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart, BookOpen, Search, ShieldCheck, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { courseCategories, featuredCourses, testimonials } from '@/lib/data';
import CourseCard from '@/components/course-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AiRecommendationEngine from '@/components/ai-recommendation-engine';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Navigate Your Skills, Master Your Future
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Discover thousands of courses to help you achieve your learning goals. What do you want to learn today?
            </p>
            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for a course, e.g. 'React'"
                  className="h-14 w-full rounded-full bg-background pl-12 pr-32 text-base"
                />
                <Button type="submit" className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)'}}>
                  Search
                </Button>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <span className="text-sm font-medium">Popular:</span>
                {['Design', 'Web Development', 'Marketing', 'Python'].map((tag) => (
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
            Explore Top Categories
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {courseCategories.map((category) => (
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
      
      {/* AI Recommendation Section */}
      <section id="ai-recommendations" className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AiRecommendationEngine />
        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="featured-courses" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Courses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Handpicked courses by our experts to get you started on your learning journey.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" style={{borderColor: 'var(--accent)', color: 'var(--accent)'}} className="hover:bg-accent/10 hover:text-accent">
              <Link href="/courses">Explore All Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative">
               <Image
                src="https://placehold.co/600x600.png"
                alt="Happy students learning"
                width={600}
                height={600}
                className="rounded-xl shadow-lg"
                data-ai-hint="learning students"
              />
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Skill Navigator is Your Best Choice
              </h2>
              <p className="mt-4 text-muted-foreground">
                We are dedicated to providing the best learning experience with features tailored for your success.
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0"><BookOpen className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold">Expert-Led Courses</h3>
                    <p className="text-muted-foreground">Learn from industry leaders and certified instructors.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0"><BarChart className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold">Flexible Learning Paths</h3>
                    <p className="text-muted-foreground">Learn at your own pace, anytime, anywhere.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0"><ShieldCheck className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold">Verified Certificates</h3>
                    <p className="text-muted-foreground">Earn certificates to showcase your new skills and achievements.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Real stories from learners who have transformed their careers with Skill Navigator.
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

      {/* Become an Instructor CTA */}
      <section className="bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 py-16 md:grid-cols-2 md:py-24">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Become an Instructor
              </h2>
              <p className="mt-4 text-muted-foreground">
                Join our community of expert instructors and share your knowledge with learners around the globe. Create an impact and earn on your terms.
              </p>
              <Button asChild size="lg" className="mt-8" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)'}}>
                <Link href="/teach">Start Teaching Today <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="relative hidden h-full min-h-[250px] md:block">
              <Image
                src="https://placehold.co/500x350.png"
                alt="An instructor teaching a class"
                width={500}
                height={350}
                className="rounded-xl shadow-lg"
                data-ai-hint="teacher classroom"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
