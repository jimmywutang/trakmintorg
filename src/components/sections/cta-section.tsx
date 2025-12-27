import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ParallaxWrapper, ScrollReveal } from "@/components/parallax-wrapper";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <ParallaxWrapper offset={80} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale opacity-40 mix-blend-overlay scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop')" }}
        />
      </ParallaxWrapper>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80 z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 z-10" />

      <div className="container relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-primary text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-lg shadow-accent/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Institutional Protocol</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tightest font-headline leading-tight mb-8 text-white">
              Authorize Your <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">Recovery Mandate</span> Today
            </h2>

            <p className="text-xl text-primary-foreground/70 leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
              Join the hundreds of institutional and private entities who have successfully reclaimed their digital sovereignty through our specialized forensic protocols.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="lg" className="h-16 px-10 bg-accent text-primary hover:bg-white hover:text-primary font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-xl shadow-accent/10 group">
                <Link href="/claim" className="flex items-center gap-2">
                  Initiate Intake Protocol
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Link href="/services" className="text-white/60 hover:text-accent font-bold uppercase tracking-widest text-xs transition-colors py-4 px-6 border border-white/10 rounded-xl hover:border-accent/30 backdrop-blur-sm">
                View Technical Capabilities
              </Link>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Global Asset Tracking</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Forensic Authentication</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white">End-to-End Encryption</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
