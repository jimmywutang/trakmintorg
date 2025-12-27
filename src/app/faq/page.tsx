import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Faq } from '@/components/sections/faq';
import { CtaSection } from '@/components/sections/cta-section';
import { Phone, Mail, MessageSquare, ShieldCheck, Globe } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/parallax-wrapper';

const FAQPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section for FAQ */}
        <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 pointer-events-none" />
          <div className="container relative z-10 text-center">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/20 text-accent text-xs font-black uppercase tracking-widest mb-6">
                <Globe className="w-3 h-3" />
                <span>Knowledge Base</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black tracking-tightest font-headline text-white mb-6">
                Operational <span className="text-accent underline decoration-accent/20 decoration-4 underline-offset-8">Intelligence</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-primary-foreground/60 leading-relaxed">
                Strategic insights into our asset recovery protocols, digital forensic procedures, and institutional governance.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24 md:py-32 relative">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 space-y-10">
                <ScrollReveal direction="left">
                  <div className="p-8 rounded-3xl bg-primary/5 border border-primary/5 shadow-premium">
                    <h2 className="text-2xl font-black font-headline mb-6 tracking-tight">Technical Support</h2>
                    <p className="text-muted-foreground leading-relaxed mb-8 font-medium">
                      If your query is not addressed in our intelligence base, initialize contact with our forensic support teams for immediate assistance.
                    </p>

                    <ul className="space-y-6">
                      <li className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-premium border border-primary/5 hover:border-accent/30 transition-all group">
                        <div className="bg-accent/10 p-3 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 mb-1">Direct Line</span>
                          <a href="https://wa.me/19498393391" target="_blank" rel="noopener noreferrer" className="text-lg font-black text-primary hover:text-accent transition-colors">
                            +1 (949) 839-3391
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-premium border border-primary/5 hover:border-accent/30 transition-all group">
                        <div className="bg-accent/10 p-3 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 mb-1">Secure Intake</span>
                          <a href="mailto:support@trakmint.org" className="text-lg font-black text-primary hover:text-accent transition-colors">
                            support@trakmint.org
                          </a>
                        </div>
                      </li>
                    </ul>

                    <div className="mt-10 pt-8 border-t border-primary/5 flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                      <span className="text-xs font-black uppercase tracking-widest text-primary/60">Verified Secure Connection</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-8">
                <Faq />
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
