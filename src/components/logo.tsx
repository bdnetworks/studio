import { Gem } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
        <Gem className="h-7 w-7 text-primary" />
        <span className="text-xl font-bold font-headline text-foreground">
            ডিজিটাল হাব
        </span>
    </Link>
  );
}
