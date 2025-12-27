import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShieldCheck } from 'lucide-react';

export function Header() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/faq', label: 'FAQ' },
    { href: '/risk-assessment', label: 'Risk Assessment' },
    { href: '/about-us', label: 'About Us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/5 glass">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="p-1.5 rounded-lg bg-primary group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="h-6 w-6 text-background" />
            </div>
            <span className="font-extrabold tracking-tightest text-xl text-primary">TRAKMINT</span>
          </Link>

          <nav className="hidden items-center space-x-8 text-[13px] font-semibold uppercase tracking-widest md:flex">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-all hover:text-primary text-primary/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 px-6 h-11 rounded-lg">
            <Link href="/claim">Start a claim</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-dark border-none">
              <div className="flex flex-col p-6 h-full">
                <Link href="/" className="mb-12 flex items-center space-x-2">
                  <ShieldCheck className="h-8 w-8 text-accent" />
                  <span className="font-bold text-2xl text-white">TRAKMINT</span>
                </Link>
                <nav className="flex flex-col space-y-6">
                  {navLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-xl font-medium text-white/70 hover:text-accent transition-colors border-b border-white/5 pb-4"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-8 bg-accent text-white h-14 text-lg font-bold rounded-xl shadow-lg">
                    <Link href="/claim">Start a claim Now</Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
