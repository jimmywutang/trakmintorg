import { ClaimForm } from "@/components/claim-form";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ShieldCheck, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/parallax-wrapper";

export default function ClaimPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Claim Hero */}
        <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 pointer-events-none" />
          <div className="container relative z-10 text-center">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/20 text-accent text-xs font-black uppercase tracking-widest mb-6">
                <ShieldCheck className="w-3 h-3" />
                <span>Secure Intake Terminal</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black tracking-tightest font-headline text-white mb-6">
                Recovery <span className="text-accent underline decoration-accent/20 decoration-4 underline-offset-8">Intake</span> Protocol
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-primary-foreground/60 leading-relaxed font-medium">
                Initialize your recovery mandate by providing comprehensive details of the digital compromise. All data is processed through end-to-end encrypted forensic channels.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24 md:py-32 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/5 pointer-events-none" />
          <div className="container relative z-10">
            <ScrollReveal direction="up">
              <div className="mx-auto max-w-4xl">
                <ClaimForm />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Dynamic Trust Bar */}
        <section className="py-12 border-y border-primary/5 bg-white">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-8 md:gap-24 opacity-60">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-accent" />
                <span className="text-sm font-black uppercase tracking-widest">Encrypted Session</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-accent" />
                <span className="text-sm font-black uppercase tracking-widest">Global Jurisdictional Support</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-600">
                <div className="w-3 h-3 rounded-full bg-current animate-pulse" />
                <span className="text-sm font-black uppercase tracking-widest">Forensic Node Active</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
