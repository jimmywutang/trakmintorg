import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/parallax-wrapper";

const faqs = [
  {
    question: "What is the standard duration for asset recovery?",
    answer: "The timeline for successful asset recovery is contingent upon the complexity of the digital trail and the jurisdiction of the involved financial entities. Standard forensic operations typically conclude within 45 to 90 days."
  },
  {
    question: "How are technical fees structured?",
    answer: "Our operations are structured on a performance-based model. We prioritize recovery success, with technical fees calculated as a predefined percentage of the secured assets, ensuring alignment with client objectives."
  },
  {
    question: "Can encrypted digital assets be tracked?",
    answer: "Yes. Our forensic teams utilize advanced blockchain analysis and proprietary nodes to track the movement of assets across distributed ledgers, even through sophisticated obfuscation layers."
  },
  {
    question: "Is the recovery process legally recognized?",
    answer: "All recovery protocols are conducted within the framework of international financial regulations and cyber-forensic standards, providing clients with comprehensive documentation for legal or insurance purposes."
  },
  {
    question: "What documentation is required to initiate intake?",
    answer: "To initialize the forensic protocol, we require transaction IDs (TXIDs), communication logs, and any official reports filed with regulatory bodies. Comprehensive data accelerates the initial discovery phase."
  },
];

export function Faq() {
  return (
    <ScrollReveal direction="up">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-primary/5 rounded-xl px-6 bg-white shadow-premium hover:shadow-premium-hover transition-all duration-300"
          >
            <AccordionTrigger className="text-lg font-black font-headline text-left hover:no-underline py-6">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollReveal>
  );
}
