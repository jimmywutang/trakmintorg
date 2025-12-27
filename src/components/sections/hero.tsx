import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ParallaxWrapper, ScrollReveal } from '@/components/parallax-wrapper';

export function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-48 bg-background overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "url('/grid.svg')",
            backgroundSize: "60px 60px"
          }}>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
              SECURE FUND RECOVERY
            </div>
            <h1 className="text-5xl font-extrabold tracking-tightest sm:text-6xl md:text-7xl lg:text-8xl font-headline text-primary leading-[1.1]">
              Reclaim Your <span className="text-accent">Funds</span>. <br />
              <span className="text-primary/70">Protect Your Future.</span>
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground md:text-xl leading-relaxed">
              Precision-driven asset recovery for the modern era. We combine legal expertise with technical forensics to reclaim what belongs to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="shimmer-button bg-primary text-primary-foreground hover:bg-primary/90 shadow-premium hover:shadow-premium-hover transform transition-all duration-300 font-bold text-lg py-8 px-10 rounded-xl">
                <Link href="/claim">Start Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg py-8 px-10 rounded-xl border-primary/10 hover:bg-primary/5 transition-colors">
                <Link href="/faq">Methodology</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-primary/5">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">$120M+</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Recovered</span>
              </div>
              <div className="h-10 w-px bg-primary/10"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">98%</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Success Rate</span>
              </div>
            </div>
          </ScrollReveal>

          <ParallaxWrapper offset={30} className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-20"></div>
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1374&auto=format&fit=crop"
                alt="Corporate professionals"
                width={800}
                height={1000}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative blobs for parallax */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0"></div>
          </ParallaxWrapper>
        </div>
      </div>
    </section>
  );
}
