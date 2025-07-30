import Image from 'next/image';
import Link from 'next/link';
import { Eye, ShoppingCart } from 'lucide-react';

import type { Project } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from './ui/button';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
        <CardHeader className="p-0">
            <Link href={`/courses/${project.id}`} className="block">
                <div className="relative h-48 w-full">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="website theme"
                />
                <Badge className="absolute right-2 top-2" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)'}}>{project.category}</Badge>
                </div>
            </Link>
        </CardHeader>
        <CardContent className="p-4">
            <Link href={`/courses/${project.id}`}>
                <h3 className="font-headline text-lg font-semibold leading-tight hover:text-primary">{project.title}</h3>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground truncate">{project.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4 pt-0">
            <div className="font-bold text-lg text-primary">
                ${project.price}
            </div>
            <div className="flex items-center gap-2">
                 <Button asChild variant="outline" size="sm">
                    <Link href={project.demoUrl} target="_blank">
                        <Eye className="mr-2 h-4 w-4" />
                        ডেমো
                    </Link>
                </Button>
                <Button asChild size="sm" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)'}}>
                    <Link href={`https://wa.me/1234567890?text=I'm%20interested%20in%20the%20project:%20${encodeURIComponent(project.title)}`} target="_blank">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        কিনুন
                    </Link>
                </Button>
            </div>
        </CardFooter>
    </Card>
  );
}
