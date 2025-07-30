import Image from 'next/image';
import Link from 'next/link';
import { Star, User, Clock } from 'lucide-react';

import type { Course } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`} className="group block">
        <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                <Image
                    src={course.imageUrl}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="online course"
                />
                <Badge className="absolute right-2 top-2" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)'}}>{course.category}</Badge>
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <h3 className="font-headline text-lg font-semibold leading-tight">{course.title}</h3>
                <div className="mt-2 flex items-center text-sm text-muted-foreground">
                    <Avatar className="h-6 w-6">
                        <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                        <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="ml-2">{course.instructor.name}</span>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between p-4 pt-0 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span>{course.rating}</span>
                    <span>({course.reviewCount.toLocaleString()})</span>
                </div>
                <div className="font-bold text-lg text-primary">
                    ${course.price}
                </div>
            </CardFooter>
        </Card>
    </Link>
  );
}
