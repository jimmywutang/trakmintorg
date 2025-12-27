import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal, ParallaxWrapper } from '@/components/parallax-wrapper';
import Image from "next/image";
import Link from 'next/link';

const faqs = [
  {
    question: "What is the typical timeframe for asset recovery?",
    answer: "Each case is distinct. While some resolutions occur within 14 business days, more complex cross-border or crypto-based recoveries may require 60-90 days of forensic execution."
  },
  {
    question: "How are consultation fees structured?",
    answer: "TRAKMINT prioritizes alignment with our clients. We operate primarily on a success-fee basis, ensuring our objectives are perfectly synced with your recovery outcome."
  },
  {
    question: "Do you handle international fraud cases?",
    answer: "Yes. Our legal and technical operations extend across major financial jurisdictions globally, allowing us to trace and reclaim assets across multiple borders."
  },
  {
    question: "What documentation is required to begin?",
    answer: "Initial requirements include all relevant transaction hashes, communication logs with the adversary, and any prior law enforcement reports."
  },
];

export function HomeFaq() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <ParallaxWrapper offset={20} className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-premium group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-colors group-hover:bg-primary/10"></div>
              <Image
                src="https://images.unsplash.com/photo-1559526324-c1f275fbfa32?q=80&w=1470&auto=format&fit=crop"
                alt="Intelligence analysis"
                width={600}
                height={800}
                data-ai-hint="questions answers"
                className="object-cover h-[600px] w-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-accent/20 rounded-full z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl z-0"></div>
          </ParallaxWrapper>

          <div className="space-y-12">
            <ScrollReveal>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
                INTELLECTUAL RESOURCES
              </div>
              <h2 className="text-3xl font-extrabold tracking-tightest sm:text-5xl font-headline text-primary mb-6">
                Frequently Asked <span className="text-accent">Protocols</span>
              </h2>
              <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                Clarity is essential in complex recovery operations. Explore our standardized responses to critical inquiries.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-primary/5 rounded-xl px-6 bg-white shadow-premium hover:shadow-premium-hover transition-all duration-300">
                    <AccordionTrigger className="text-lg font-bold text-left hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-10 pt-10 border-t border-primary/5">
                <p className="text-sm font-semibold text-primary/60">
                  Require deeper analysis? <Link href="/faq" className="text-accent hover:underline decoration-2 underline-offset-4">View Technical FAQ &rarr;</Link>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
