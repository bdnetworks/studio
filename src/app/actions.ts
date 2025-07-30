'use server';

import { z } from 'zod';
import { recommendCourses, RecommendCoursesInput } from '@/ai/flows/course-recommendations';
import { allCourses } from '@/lib/data';

const formSchema = z.object({
    interests: z.string().min(3, { message: 'Please tell us at least one interest.' }),
    pastEnrollment: z.string().optional(),
    searchHistory: z.string().optional(),
});

export type RecommendationState = {
    courses?: string[];
    error?: string;
    message?: string;
};

export async function getCourseRecommendations(
    prevState: RecommendationState,
    formData: FormData
): Promise<RecommendationState> {
    const validatedFields = formSchema.safeParse({
        interests: formData.get('interests'),
        pastEnrollment: formData.get('pastEnrollment'),
        searchHistory: formData.get('searchHistory'),
    });

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors.interests?.[0] || "Invalid input."
        };
    }

    try {
        const input: RecommendCoursesInput = validatedFields.data;
        const result = await recommendCourses(input);
        
        const recommendedCourseTitles = result.courses.split(',').map(c => c.trim().toLowerCase());
        
        // For demonstration, we'll just return the titles. In a real app, you might fetch full course objects.
        return { courses: recommendedCourseTitles };

    } catch (e) {
        console.error(e);
        return { error: 'Our AI is taking a break. Please try again later.' };
    }
}
