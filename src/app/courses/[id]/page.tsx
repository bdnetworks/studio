import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle, Clock, BarChart2, Star, Users } from "lucide-react";

import { allCourses } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type CoursePageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
    return allCourses.map((course) => ({
      id: course.id.toString(),
    }));
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = allCourses.find((c) => c.id.toString() === params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-primary/5">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
                {/* Left Column */}
                <div className="lg:col-span-2">
                    <Badge className="mb-2" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)'}}>{course.category}</Badge>
                    <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">{course.title}</h1>
                    <p className="mt-4 text-lg text-muted-foreground">{course.description}</p>
                    
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                        <div className="flex items-center gap-2">
                            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                            <span className="font-semibold">{course.rating}</span>
                            <span className="text-muted-foreground">({course.reviewCount.toLocaleString()} রেটিং)</span>
                        </div>
                         <div className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-muted-foreground" />
                            <span>প্রশিক্ষক {course.instructor.name}</span>
                        </div>
                    </div>

                    <Card className="mt-8">
                        <CardHeader>
                            <h2 className="font-headline text-xl font-bold">আপনি যা শিখবেন</h2>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {course.learningOutcomes.map((outcome, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                        <span>{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                </div>

                {/* Right Column (Sticky) */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <Card className="overflow-hidden">
                            <div className="relative h-56 w-full">
                                <Image 
                                    src={course.imageUrl} 
                                    alt={course.title} 
                                    fill 
                                    className="object-cover" 
                                    data-ai-hint="online course cover"
                                />
                            </div>
                            <CardContent className="p-6">
                                <div className="mb-6 text-center">
                                    <p className="font-headline text-4xl font-bold">${course.price}</p>
                                </div>
                                <Button size="lg" className="w-full" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)'}}>এখনই ভর্তি হন</Button>
                                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-3">
                                        <Clock className="h-5 w-5" />
                                        <div><span className="font-medium text-foreground">সময়কাল:</span> {course.duration}</div>
                                    </li>
                                     <li className="flex items-center gap-3">
                                        <BarChart2 className="h-5 w-5" />
                                        <div><span className="font-medium text-foreground">দক্ষতার স্তর:</span> {course.level}</div>
                                    </li>
                                     <li className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5" />
                                        <div><span className="font-medium text-foreground">সমাপ্তি সার্টিফিকেট</span></div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
