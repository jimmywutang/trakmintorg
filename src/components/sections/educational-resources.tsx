import { Landmark, Heart, Smartphone, ShieldAlert, Check, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/parallax-wrapper';
import { Card, CardContent } from '@/components/ui/card';

const scamTypes = [
  {
    icon: <Landmark className="h-10 w-10" />,
    title: "Investment Schemes",
    description: "Sophisticated fraudulent operations promising unrealistic returns through opaque financial instruments.",
    details: ["Ponzi & Pyramid Structures", "Unregulated Asset Classes", "Pressure Tactics"]
  },
  {
    icon: <Heart className="h-10 w-10" />,
    title: "Social Engineering",
    description: "Exploiting human psychology to establish manufactured trust for financial extraction.",
    details: ["Relationship Fabrication", "Emotional Manipulation", "Urgent Crises Scenarios"]
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Digital Infiltration",
    description: "Technical vectors designed to compromise security credentials and sensitive data.",
    details: ["Deceptive Phishing Links", "Malicious Attachments", "Credential Harvesting"]
  },
  {
    icon: <ShieldAlert className="h-10 w-10" />,
    title: "Corporate Mimicry",
    description: "Impersonation of established regulatory or financial institutions to authorize illegal transfers.",
    details: ["Tax Authority Fraud", "Banking Security Alerts", "Law Enforcement Scams"]
  },
];

export function EducationalResources() {
  return (
    <section id="services" className="py-24 md:py-32 bg-primary/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                <BookOpen className="w-3 h-3" />
                <span>Intellectual Defense</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tightest font-headline leading-tight mb-6">
                Forensic Analysis of <span className="text-accent">Modern Fraud</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                The first line of defense is technical literacy. We analyze emerging vectors to provide our clients with the intelligence necessary to prevent future compromises.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-premium border border-primary/5 items-start">
                  <div className="bg-accent/10 p-2 rounded-lg text-accent mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Vector Identification</h4>
                    <p className="text-sm text-muted-foreground">Isolating the technical and psychological triggers used in the attack.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-premium border border-primary/5 items-start">
                  <div className="bg-accent/10 p-2 rounded-lg text-accent mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Preemptive Countermeasures</h4>
                    <p className="text-sm text-muted-foreground">Implementing rigorous protocols to shield assets from sophisticated adversaries.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {scamTypes.map((scam, index) => (
                <ScrollReveal
                  key={index}
                  delay={index * 0.1}
                  direction="up"
                >
                  <Card className="h-full border-primary/5 shadow-premium hover:shadow-premium-hover transition-all duration-500 group overflow-hidden bg-white/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/5 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                        {scam.icon}
                      </div>
                      <h3 className="text-xl font-extrabold mb-3 font-headline tracking-tight">{scam.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {scam.description}
                      </p>
                      <ul className="space-y-2">
                        {scam.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-[13px] font-semibold text-primary/70">
                            <div className="w-1 h-1 rounded-full bg-accent" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
