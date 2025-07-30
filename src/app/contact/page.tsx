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
            আপনার কোনো প্রশ্ন, মতামত বা কাস্টম প্রজেক্টের জন্য আমাদের সাথে যোগাযোগ করতে পারেন। আমরা আপনাকে সাহায্য করতে সর্বদা প্রস্তুত।
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
                  <p className="text-muted-foreground">সরাসরি ইমেইল করুন</p>
                  <a href="mailto:support@digitalhub.com" className="text-primary hover:underline">support@digitalhub.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-primary"><Phone className="h-6 w-6" /></div>
                <div>
                  <h3 className="text-lg font-semibold">হোয়াটসঅ্যাপ</h3>
                  <p className="text-muted-foreground">যেকোনো প্রয়োজনে মেসেজ দিন</p>
                  <a href="https://wa.me/1234567890" target="_blank" className="text-primary hover:underline">+১ (২৩৪) ৫৬৭-৮৯০</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-primary"><MapPin className="h-6 w-6" /></div>
                <div>
                  <h3 className="text-lg font-semibold">অফিস</h3>
                  <p className="text-muted-foreground">১২৩ ক্রিয়েটিভ রোড, স্যুট ১০০</p>
                  <p className="text-muted-foreground">ডিজিটাল সিটি, ডিজি ১২৩৪৫</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">আপনার নাম</Label>
                        <Input id="firstName" placeholder="আপনার পুরো নাম" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">আপনার ইমেইল</Label>
                        <Input id="email" type="email" placeholder="name@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">বিষয়</Label>
                      <Input id="subject" placeholder="আপনার বার্তার বিষয়" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">বার্তা</Label>
                      <Textarea id="message" placeholder="আপনার বার্তাটি এখানে লিখুন..." rows={5} />
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
