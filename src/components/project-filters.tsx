'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { projectCategories } from "@/lib/data";

const priceRanges = ['বিনামূল্যে', '$25 এর নিচে', '$25 - $50', '$50 - $100', '$100 এর বেশি'];

export default function ProjectFilters() {
    return (
        <Card className="sticky top-24">
            <CardHeader>
                <CardTitle className="font-headline">প্রজেক্ট ফিল্টার</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h4 className="font-semibold mb-3">ক্যাটাগরি</h4>
                    <div className="space-y-2">
                        {projectCategories.map((category) => (
                             <div key={category.name} className="flex items-center space-x-2">
                                <Checkbox id={`cat-${category.name}`} />
                                <Label htmlFor={`cat-${category.name}`} className="font-normal">{category.name}</Label>
                            </div>
                        ))}
                    </div>
                </div>

                 <div>
                    <h4 className="font-semibold mb-3">মূল্য</h4>
                    <div className="space-y-2">
                        {priceRanges.map((range) => (
                             <div key={range} className="flex items-center space-x-2">
                                <Checkbox id={`price-${range}`} />
                                <Label htmlFor={`price-${range}`} className="font-normal">{range}</Label>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
