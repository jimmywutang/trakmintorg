import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { DollarSign, Search, Briefcase, GraduationCap, ShieldCheck, ArrowRight, Zap, Database, Scale } from 'lucide-react';
import { ScrollReveal, ParallaxWrapper } from '@/components/parallax-wrapper';

const services = [
  {
    icon: <Database className="h-8 w-8" />,
    title: "Digital Asset Tracing",
    description: "Deep-layer forensic analysis of blockchain transactions and digital footprints. We identify destination wallets and intermediary hopping points with surgical precision.",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1470&auto=format&fit=crop",
    details: ["Blockchain Forensics", "Wallet Identification", "Transaction Mapping"]
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Threat Vector Analysis",
    description: "Deconstructing the attack methodology to isolate technical vulnerabilities and social engineering triggers used by the adversary.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
    details: ["Phishing Analysis", "Malware Deconstruction", "Infrastructure Mapping"]
  },
  {
    icon: <Scale className="h-8 w-8" />,
    title: "Regulatory Compliance",
    description: "Liaising with international financial authorities and legal entities to ensure all recovery protocols adhere to global jurisdictional standards.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1470&auto=format&fit=crop",
    details: ["KYC/AML Alignment", "Legal Documentation", "Institutional Liaison"]
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Rapid Response Intake",
    description: "Time-critical intervention protocols designed to freeze assets and prevent further dissemination through criminal networks.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop",
    details: ["Asset Freezing", "Real-time Monitoring", "Emergency Coordination"]
  }
];

const ServicesPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Services Hero */}
        <section className="relative py-24 md:py-36 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 pointer-events-none" />
          <div className="container relative z-10 text-center">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/20 text-accent text-xs font-black uppercase tracking-widest mb-6">
                <Zap className="w-3 h-3" />
                <span>Technical Capabilities</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black tracking-tightest font-headline text-white mb-6">
                Forensic <span className="text-accent underline decoration-accent/20 decoration-4 underline-offset-8">Excellence</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-primary-foreground/60 leading-relaxed">
                Our suite of specialized services is engineered to dismantle fraudulent operations and secure your digital assets through technical superiority.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container">
            <div className="space-y-32">
              {services.map((service, index) => (
                <div key={index} className={`grid lg:grid-cols-12 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                      <div className="mb-6 inline-flex p-3 rounded-xl bg-accent/10 text-accent">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black tracking-tightest font-headline mb-6">{service.title}</h2>
                      <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-medium">
                        {service.description}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm font-bold text-primary/80">
                            <ShieldCheck className="w-5 h-5 text-accent" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </ScrollReveal>
                  </div>
                  <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <ScrollReveal direction={index % 2 === 0 ? "right" : "left"}>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                        <ParallaxWrapper offset={20}>
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={700}
                            height={500}
                            className="rounded-3xl shadow-premium border border-primary/5 relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                          />
                        </ParallaxWrapper>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tactical Advantage Section */}
        <section className="py-24 bg-[#050A15] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal direction="up">
                <ShieldCheck className="mx-auto h-20 w-20 mb-10 text-accent animate-pulse" />
                <h2 className="text-4xl md:text-5xl font-black tracking-tightest font-headline mb-8">
                  The TRAKMINT Tactical Advantage
                </h2>
                <p className="text-xl text-white/40 leading-relaxed mb-12 font-medium">
                  We don't just trace assets; we deploy a comprehensive forensic architecture designed to outmaneuver sophisticated adversaries. Your case is our primary directive.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button asChild size="lg" className="h-16 px-10 bg-accent text-primary hover:bg-white hover:text-primary font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-xl shadow-accent/10">
                    <Link href="/claim" className="flex items-center gap-2">
                      Initialize Intake Protocol
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
