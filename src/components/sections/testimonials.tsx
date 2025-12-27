import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { ScrollReveal } from '@/components/parallax-wrapper';

const testimonials = [
  {
    name: "Sarah L.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80",
    aiHint: "woman portrait",
    title: "A light in the darkness",
    quote: "Precision and empathy. The team at TRAKMINT treated me with unmatched respect and delivered results beyond my expectations.",
  },
  {
    name: "Mike P.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    aiHint: "man portrait",
    title: "Corporate Security Lead",
    quote: "Our firm was compromised, and TRAKMINT's rapid response was the decisive factor in our asset restoration. Truly elite forensic specialists.",
  },
  {
    name: "Emily R.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    aiHint: "professional woman",
    title: "Financial Consultant",
    quote: "Transparency is rare in this industry. TRAKMINT provided clear milestones and constant communication. They are the gold standard.",
  },
  {
    name: "David B.",
    avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&q=80",
    aiHint: "man thinking",
    title: "Crypto Investor",
    quote: "I thought my digital assets were permanently lost. TRAKMINT's blockchain analysis proved otherwise. They are magicians of the ledger.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop"
          alt="Abstract tech background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary"></div>
      </div>

      <div className="container relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tightest sm:text-5xl font-headline text-white mb-6">
            Client <span className="text-accent">Success</span> Mandates
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/60 leading-relaxed">
            Our reputation is built on recovered assets and restored peace of mind. Here is why industry leaders trust TRAKMINT.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-4">
                    <Card className="h-full flex flex-col bg-white/5 border-white/10 backdrop-blur-xl shadow-premium rounded-2xl overflow-hidden group hover:border-accent/30 transition-colors duration-500">
                      <CardHeader className="flex flex-row items-center gap-5 pb-6">
                        <div className="relative">
                          <Avatar className="h-20 w-20 border-2 border-accent/20">
                            <Image src={testimonial.avatar} alt={testimonial.name} width={80} height={80} data-ai-hint={testimonial.aiHint} className="object-cover" />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-2 -right-2 bg-accent text-white p-1.5 rounded-full shadow-lg">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16C10.9124 16 10.017 16.8954 10.017 18L10.017 21H14.017ZM14.017 21V18C14.017 16.8954 14.9124 16 16.017 16C17.1216 16 18.017 16.8954 18.017 18V21H14.017ZM10.017 21V18C10.017 16.8954 9.12157 16 8.01699 16C6.91241 16 6.01699 16.8954 6.01699 18V21H10.017ZM20 2V6C20 6.55228 19.5523 7 19 7H16C15.4477 7 15 6.55228 15 6V2M9 2V6C9 6.55228 8.55228 7 8 7H5C4.44772 7 4 6.55228 4 6V2M1 10V14C1 14.5523 1.44772 15 2 15H5C5.55228 15 6 14.5523 6 14V10M18 10V14C18 14.5523 18.4477 15 19 15H22C22.5523 15 23 14.5523 23 14V10" /></svg>
                          </div>
                        </div>
                        <div>
                          <p className="font-extrabold text-xl text-white">{testimonial.name}</p>
                          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{testimonial.title}</p>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow pt-4">
                        <p className="text-primary-foreground/80 text-lg leading-relaxed italic">&ldquo;{testimonial.quote}&rdquo;</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="relative inset-0 translate-y-0 h-12 w-12 bg-white/5 border-white/10 text-white hover:bg-white/10" />
              <CarouselNext className="relative inset-0 translate-y-0 h-12 w-12 bg-white/5 border-white/10 text-white hover:bg-white/10" />
            </div>
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
}
