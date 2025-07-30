'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { courseCategories } from "@/lib/data";

const skillLevels = ['শিক্ষানবিশ', 'মধ্যবর্তী', 'উন্নত'];
const priceRanges = ['বিনামূল্যে', '$25 এর নিচে', '$25 - $50', '$50 - $100', '$100 এর বেশি'];

export default function CourseFilters() {
    return (
        <Card className="sticky top-24">
            <CardHeader>
                <CardTitle className="font-headline">কোর্স ফিল্টার করুন</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h4 className="font-semibold mb-3">বিভাগ</h4>
                    <div className="space-y-2">
                        {courseCategories.map((category) => (
                             <div key={category.name} className="flex items-center space-x-2">
                                <Checkbox id={`cat-${category.name}`} />
                                <Label htmlFor={`cat-${category.name}`} className="font-normal">{category.name}</Label>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">দক্ষতার স্তর</h4>
                    <RadioGroup defaultValue="all">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="all" id="level-all" />
                            <Label htmlFor="level-all" className="font-normal">সকল স্তর</Label>
                        </div>
                       {skillLevels.map((level) => (
                             <div key={level} className="flex items-center space-x-2">
                                <RadioGroupItem value={level.toLowerCase()} id={`level-${level.toLowerCase()}`} />
                                <Label htmlFor={`level-${level.toLowerCase()}`} className="font-normal">{level}</Label>
                            </div>
                        ))}
                    </RadioGroup>
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
