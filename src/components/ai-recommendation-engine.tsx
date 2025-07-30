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
          Thinking...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Get Recommendations
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
                    <CardTitle className="font-headline">AI Course Navigator</CardTitle>
                    <CardDescription>Let our AI find the perfect course for you.</CardDescription>
                </div>
            </div>
          </CardHeader>
          <form action={formAction}>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="interests">Your Interests</Label>
                <Textarea
                  id="interests"
                  name="interests"
                  placeholder="e.g., building web apps, data visualization, mobile game development"
                  required
                />
                 {state.error && <p className="mt-2 text-sm text-destructive">{state.error}</p>}
              </div>
              <div>
                <Label htmlFor="pastEnrollment">Past Courses (Optional)</Label>
                <Input
                  id="pastEnrollment"
                  name="pastEnrollment"
                  placeholder="e.g., Intro to Python, HTML & CSS Basics"
                />
              </div>
              <div>
                <Label htmlFor="searchHistory">Search History (Optional)</Label>
                <Input
                  id="searchHistory"
                  name="searchHistory"
                  placeholder="e.g., javascript frameworks, best design tools"
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
        <h3 className="font-headline text-2xl font-bold">Your Personalized Recommendations</h3>
        {state.courses && recommendedCourses.length > 0 && (
            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                {recommendedCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        )}
        {state.courses && recommendedCourses.length === 0 && (
            <div className="mt-4 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                <p className="text-muted-foreground">Our AI couldn't find a direct match, but here are some popular starting points!</p>
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
                <h4 className="mt-4 text-lg font-semibold">Recommendations will appear here</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                    Fill out the form to get started.
                </p>
            </div>
        )}
      </div>
    </div>
  );
}
