'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Sparkles, BrainCircuit, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { getCourseRecommendations, RecommendationState } from '@/app/actions';
import { allCourses } from '@/lib/data';
import CourseCard from './course-card';

const initialState: RecommendationState = {};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)'}}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ভাবছে...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          সুপারিশ পান
        </>
      )}
    </Button>
  );
}

export default function AiRecommendationEngine() {
  const [state, formAction] = useFormState(getCourseRecommendations, initialState);

  const recommendedCourses = state.courses
    ? allCourses.filter(course =>
        state.courses?.some(recTitle => course.title.toLowerCase().includes(recTitle))
      )
    : [];

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
      <div className="lg:col-span-1">
        <Card className="sticky top-24">
          <CardHeader>
            <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <CardTitle className="font-headline">AI কোর্স নেভিগেটর</CardTitle>
                    <CardDescription>আমাদের AI আপনার জন্য সেরা কোর্স খুঁজে দেবে।</CardDescription>
                </div>
            </div>
          </CardHeader>
          <form action={formAction}>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="interests">আপনার আগ্রহ</Label>
                <Textarea
                  id="interests"
                  name="interests"
                  placeholder="যেমন, ওয়েব অ্যাপ তৈরি, ডেটা ভিজ্যুয়ালাইজেশন, মোবাইল গেম ডেভেলপমেন্ট"
                  required
                />
                 {state.error && <p className="mt-2 text-sm text-destructive">{state.error}</p>}
              </div>
              <div>
                <Label htmlFor="pastEnrollment">পূর্ববর্তী কোর্স (ঐচ্ছিক)</Label>
                <Input
                  id="pastEnrollment"
                  name="pastEnrollment"
                  placeholder="যেমন, পাইথনের ভূমিকা, এইচটিএমএল এবং সিএসএস বেসিকস"
                />
              </div>
              <div>
                <Label htmlFor="searchHistory">অনুসন্ধানের ইতিহাস (ঐচ্ছিক)</Label>
                <Input
                  id="searchHistory"
                  name="searchHistory"
                  placeholder="যেমন, জাভাস্ক্রিপ্ট ফ্রেমওয়ার্ক, সেরা ডিজাইন টুলস"
                />
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <h3 className="font-headline text-2xl font-bold">আপনার ব্যক্তিগতকৃত সুপারিশ</h3>
        {state.courses && recommendedCourses.length > 0 && (
            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                {recommendedCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        )}
        {state.courses && recommendedCourses.length === 0 && (
            <div className="mt-4 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                <p className="text-muted-foreground">আমাদের AI সরাসরি কোনো মিল খুঁজে পায়নি, তবে এখানে কিছু জনপ্রিয় সূচনা পয়েন্ট রয়েছে!</p>
                <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {allCourses.slice(0, 2).map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        )}
        {!state.courses && !state.error && (
            <div className="mt-4 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                <Sparkles className="mx-auto h-12 w-12 text-muted-foreground" />
                <h4 className="mt-4 text-lg font-semibold">সুপারিশগুলি এখানে প্রদর্শিত হবে</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                    শুরু করতে ফর্মটি পূরণ করুন।
                </p>
            </div>
        )}
      </div>
    </div>
  );
}
