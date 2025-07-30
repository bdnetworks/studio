import ProjectCard from "@/components/project-card";
import ProjectFilters from "@/components/project-filters";
import { allProjects } from "@/lib/data";

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <header className="mb-12 text-center">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">সমস্ত প্রজেক্ট</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    আমাদের তৈরি করা থিম এবং টেমপ্লেটগুলোর সম্পূর্ণ ক্যাটালগ ব্রাউজ করুন। আপনার পছন্দের প্রজেক্টটি খুঁজে পেতে ফিল্টার ব্যবহার করুন।
                </p>
            </header>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                <aside className="lg:col-span-1">
                   <ProjectFilters />
                </aside>
                <main className="lg:col-span-3">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {allProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}
