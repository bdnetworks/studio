import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, Clock, BarChart2, Star, Users, Eye, ShoppingCart } from "lucide-react";

import { allProjects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
    return allProjects.map((project) => ({
      id: project.id.toString(),
    }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = allProjects.find((p) => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  const features = [
    "সম্পূর্ণ রেসপন্সিভ ডিজাইন",
    "সহজেই কাস্টমাইজযোগ্য",
    "SEO অপ্টিমাইজড",
    "দ্রুত লোডিং গতি",
    "আজীবন বিনামূল্যে আপডেট",
    "৬ মাসের সাপোর্ট"
  ]

  return (
    <div className="bg-primary/5">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
                {/* Left Column */}
                <div className="lg:col-span-2">
                    <Badge className="mb-2" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)'}}>{project.category}</Badge>
                    <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">{project.title}</h1>
                    <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>

                    <Card className="mt-8">
                        <CardHeader>
                            <h2 className="font-headline text-xl font-bold">প্রজেক্টের বৈশিষ্ট্য</h2>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                        <span>{feature}</span>
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
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    fill 
                                    className="object-cover" 
                                    data-ai-hint="website theme cover"
                                />
                            </div>
                            <CardContent className="p-6">
                                <div className="mb-4 text-center">
                                    <p className="font-headline text-4xl font-bold">${project.price}</p>
                                    <p className="text-sm text-muted-foreground">এককালীন পেমেন্ট</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Button size="lg" className="w-full" asChild>
                                        <Link href={project.demoUrl} target="_blank">
                                            <Eye className="mr-2" />
                                            লাইভ ডেমো দেখুন
                                        </Link>
                                    </Button>
                                    <Button size="lg" className="w-full" asChild style={{backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)'}}>
                                        <Link href={`https://wa.me/1234567890?text=I'm%20interested%20in%20the%20project:%20${encodeURIComponent(project.title)}`} target="_blank">
                                            <ShoppingCart className="mr-2" />
                                            হোয়াটসঅ্যাপে কিনুন
                                        </Link>
                                    </Button>
                                </div>
                                <p className="mt-4 text-center text-xs text-muted-foreground">নিরাপদ পেমেন্ট এবং তাৎক্ষণিক ডাউনলোড।</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
