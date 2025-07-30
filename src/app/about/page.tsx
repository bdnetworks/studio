import Image from "next/image";
import { Target, Eye, Gem } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            স্কিল নেভিগেটর সম্পর্কে
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            আমরা সকলের জন্য, সর্বত্র মানসম্মত শিক্ষা সহজলভ্য করার মিশনে কাজ করছি। আমাদের সাথে শিখুন, বাড়ুন এবং আপনার লক্ষ্য অর্জন করুন।
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
                ২০২৪ সালে প্রতিষ্ঠিত, স্কিল নেভিগেটরের জন্ম একটি সাধারণ ধারণা থেকে: শেখা একটি জীবনব্যাপী অভিযান হওয়া উচিত, কোনো বোঝা নয়। আমরা প্রচলিত শিক্ষা এবং আধুনিক চাকরির বাজারের দ্রুত পরিবর্তনশীল চাহিদার মধ্যে একটি ফাঁক দেখেছি। আমাদের প্ল্যাটফর্মটি সেই ফাঁক পূরণ করার জন্য তৈরি করা হয়েছিল, যা শিল্প বিশেষজ্ঞদের দ্বারা ডিজাইন করা নমনীয়, আকর্ষক এবং বাস্তবসম্মত কোর্স সরবরাহ করে।
              </p>
              <p className="mt-4 text-muted-foreground">
                আজ, আমরা শিক্ষার্থী, প্রশিক্ষক এবং উদ্ভাবকদের একটি সমৃদ্ধ সম্প্রদায়, যারা সকলেই জ্ঞান ভাগ করে নিতে এবং ব্যক্তিদের তাদের পূর্ণ সম্ভাবনা বিকাশে ক্ষমতায়নের জন্য আগ্রহী।
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
              <p className="mt-2 text-muted-foreground">একটি গতিশীল এবং সহজলভ্য শিক্ষার পরিবেশ প্রদান করা যা ব্যক্তিদের ব্যক্তিগত এবং পেশাগত উন্নতির জন্য প্রয়োজনীয় দক্ষতা অর্জনে সক্ষম করে।</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold">আমাদের ভিশন</h3>
              <p className="mt-2 text-muted-foreground">দক্ষতা বিকাশের জন্য শীর্ষস্থানীয় বিশ্বব্যাপী প্ল্যাটফর্ম হওয়া, যা আমাদের মানসম্মত সামগ্রী, উদ্ভাবনী প্রযুক্তি এবং সহায়ক সম্প্রদায়ের জন্য স্বীকৃত।</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Gem className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold">আমাদের মূল্যবোধ</h3>
              <p className="mt-2 text-muted-foreground">আমরা জীবনব্যাপী শিক্ষা, শিক্ষাদানে শ্রেষ্ঠত্ব, সম্প্রদায় গঠন এবং সকলের জন্য একটি উন্নত ভবিষ্যৎ তৈরি করতে উদ্ভাবনকে আলিঙ্গন করায় বিশ্বাস করি।</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
