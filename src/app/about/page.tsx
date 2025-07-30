import Image from "next/image";
import { Target, Eye, Gem } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            আমরা কারা
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            আমরা ডেভেলপার এবং ডিজাইনারদের একটি টিম, যারা ডিজিটাল পণ্য তৈরি করতে ভালোবাসে। আমাদের লক্ষ্য হলো ব্যবসার জন্য সুন্দর, কার্যকরী এবং সাশ্রয়ী মূল্যের সমাধান তৈরি করা।
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                আমাদের গল্প
              </h2>
              <p className="mt-4 text-muted-foreground">
                ডিজিটাল হাব-এর যাত্রা শুরু হয় একটি সাধারণ চিন্তা থেকে: সবার জন্য মানসম্মত ডিজিটাল পণ্য সহজলভ্য করা। আমরা দেখেছি যে, অনেকেই ভালো মানের ওয়েবসাইট থিম বা ডিজিটাল পণ্যের জন্য অনেক বেশি খরচ করতে বাধ্য হন। 
              </p>
              <p className="mt-4 text-muted-foreground">
                এই সমস্যার সমাধান হিসেবে আমরা একটি প্ল্যাটফর্ম তৈরি করেছি, যেখানে সাশ্রয়ী মূল্যে আকর্ষণীয় এবং প্রফেশনাল ডিজিটাল পণ্য পাওয়া যায়। আজ আমরা হাজারো সন্তুষ্ট গ্রাহকের একটি পরিবার, যারা আমাদের পণ্যের মাধ্যমে তাদের ব্যবসাকে এগিয়ে নিয়ে যাচ্ছেন।
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
              <h3 className="font-headline text-2xl font-bold">আমাদের মিশন</h3>
              <p className="mt-2 text-muted-foreground">আমাদের লক্ষ্য হলো উচ্চ-মানের ডিজিটাল পণ্য তৈরি করা, যা ব্যবহার করা সহজ এবং দেখতে আকর্ষণীয়। আমরা গ্রাহকদের সেরা অভিজ্ঞতা দিতে প্রতিশ্রুতিবদ্ধ।</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold">আমাদের ভিশন</h3>
              <p className="mt-2 text-muted-foreground">ডিজিটাল পণ্যের জন্য একটি বিশ্বস্ত এবং নির্ভরযোগ্য মার্কেটপ্লেস হিসেবে নিজেদের প্রতিষ্ঠা করা, যেখানে গুণমান এবং গ্রাহক সন্তুষ্টিই প্রধান।</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Gem className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold">আমাদের মূল্যবোধ</h3>
              <p className="mt-2 text-muted-foreground">আমরা সৃজনশীলতা, সততা, গ্রাহক সেবা এবং উদ্ভাবনে বিশ্বাসী। আমরা প্রতিনিয়ত নিজেদের উন্নত করার চেষ্টা করি।</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
