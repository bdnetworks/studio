import CourseCard from "@/components/course-card";
import CourseFilters from "@/components/course-filters";
import { allCourses } from "@/lib/data";

export default function CoursesPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <header className="mb-12 text-center">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">All Courses</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Browse our full catalog of expert-led courses. Use the filters to find the perfect one for you.
                </p>
            </header>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                <aside className="lg:col-span-1">
                   <CourseFilters />
                </aside>
                <main className="lg:col-span-3">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {allCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}