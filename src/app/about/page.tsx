import Image from "next/image";
import { Target, Eye, Gem } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            About Skill Navigator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            We are on a mission to make quality education accessible to everyone, everywhere. Learn, grow, and achieve your goals with us.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-muted-foreground">
                Founded in 2024, Skill Navigator was born from a simple idea: learning should be a lifelong adventure, not a chore. We saw a gap between traditional education and the fast-paced demands of the modern job market. Our platform was built to bridge that gap, offering flexible, engaging, and practical courses designed by industry experts.
              </p>
              <p className="mt-4 text-muted-foreground">
                Today, we are a thriving community of learners, instructors, and innovators, all passionate about sharing knowledge and empowering individuals to reach their full potential.
              </p>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="Team working together"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="team collaboration"
                />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold">Our Mission</h3>
              <p className="mt-2 text-muted-foreground">To provide a dynamic and accessible learning ecosystem that empowers individuals to acquire in-demand skills for personal and professional growth.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold">Our Vision</h3>
              <p className="mt-2 text-muted-foreground">To be the leading global platform for skill development, recognized for our quality content, innovative technology, and supportive community.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Gem className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold">Our Values</h3>
              <p className="mt-2 text-muted-foreground">We believe in lifelong learning, excellence in teaching, fostering community, and embracing innovation to create a better future for all.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
