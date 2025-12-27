import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Testimonials } from '@/components/sections/testimonials';
import { HomeFaq } from '@/components/sections/home-faq';
import { CtaSection } from '@/components/sections/cta-section';
import { MotionDiv } from '@/components/motion-div';
import { EducationalResources } from '@/components/sections/educational-resources';
import { ClaimForm } from '@/components/claim-form';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <EducationalResources />
        <HomeFaq />

        <section className="py-24 md:py-32 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <ClaimForm />
            </div>
          </div>
        </section>

        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
