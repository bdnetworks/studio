import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            যোগাযোগ করুন
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            প্রশ্ন বা মতামত আছে? আমরা আপনার কাছ থেকে শুনতে চাই। আমাদের সাথে যোগাযোগ করুন, এবং আমরা যত তাড়াতাড়ি সম্ভব আপনার কাছে ফিরে আসব।
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-primary"><Mail className="h-6 w-6" /></div>
                <div>
                  <h3 className="text-lg font-semibold">ইমেইল</h3>
                  <p className="text-muted-foreground">আমাদের একটি ইমেল পাঠান</p>
                  <a href="mailto:support@skillnavigator.com" className="text-primary hover:underline">support@skillnavigator.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-primary"><Phone className="h-6 w-6" /></div>
                <div>
                  <h3 className="text-lg font-semibold">ফোন</h3>
                  <p className="text-muted-foreground">সোম-শুক্র সকাল ৯টা থেকে বিকাল ৫টা পর্যন্ত</p>
                  <a href="tel:+1234567890" className="text-primary hover:underline">+১ (২৩৪) ৫৬৭-৮৯০</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-primary"><MapPin className="h-6 w-6" /></div>
                <div>
                  <h3 className="text-lg font-semibold">অফিস</h3>
                  <p className="text-muted-foreground">১২৩ লার্নিং লেন, স্যুট ১০০</p>
                  <p className="text-muted-foreground">এডুকেশন সিটি, ইডি ৫৪৩২১</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">নামের প্রথম অংশ</Label>
                        <Input id="firstName" placeholder="জন" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">নামের শেষ অংশ</Label>
                        <Input id="lastName" placeholder="ডো" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">ইমেইল</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">বার্তা</Label>
                      <Textarea id="message" placeholder="আপনার বার্তা..." rows={5} />
                    </div>
                    <Button type="submit" className="w-full" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)'}}>বার্তা পাঠান</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
