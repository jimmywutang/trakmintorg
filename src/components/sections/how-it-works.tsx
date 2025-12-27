import { FileText, ClipboardCheck, Search, DollarSign } from "lucide-react"
import { ScrollReveal } from '@/components/parallax-wrapper';

const steps = [
    {
        icon: <FileText className="h-10 w-10 text-accent" />,
        title: "Submit Your Case",
        description: "Initiate our secure intake process with a comprehensive overview of your situation. Confidentiality is our baseline."
    },
    {
        icon: <ClipboardCheck className="h-10 w-10 text-accent" />,
        title: "Forensic Evaluation",
        description: "Our analysts perform advanced forensic tracing to determine the most effective recovery strategy at no initial cost."
    },
    {
        icon: <Search className="h-10 w-10 text-accent" />,
        title: "Strategic Execution",
        description: "Our team deploys proprietary methodologies to track, confront, and secure your digital assets globally."
    },
    {
        icon: <DollarSign className="h-10 w-10 text-accent" />,
        title: "Asset Restoration",
        description: "Finalized reclamation of funds followed by secure transfer to your verified destination with full reporting."
    }
]

export function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden"
        >
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: "url('/grid.svg')",
                    backgroundSize: "60px 60px"
                }}>
            </div>
            <div className="container relative z-10">
                <ScrollReveal className="text-center mb-20">
                    <h2 className="text-3xl font-extrabold tracking-tightest sm:text-5xl font-headline mb-6">
                        The <span className="text-accent">Protocol</span> for Recovery
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-primary-foreground/70 leading-relaxed">
                        Precision engineering meets legal expertise. Our four-stage methodology ensures transparency and maximal recovery potential.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    <div className="hidden lg:block absolute top-[45px] left-0 w-full h-px bg-white/10"></div>
                    {steps.map((step, index) => (
                        <ScrollReveal key={index} delay={index * 0.15} className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="mb-8 p-5 bg-primary border-2 border-accent/20 rounded-2xl shadow-xl transform transition-transform hover:scale-110 duration-500">
                                {step.icon}
                            </div>
                            <h3 className="font-extrabold text-xl mb-4 text-white tracking-tight">{step.title}</h3>
                            <p className="text-primary-foreground/60 leading-relaxed">{step.description}</p>
                            <div className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-accent/50">
                                Phase 0{index + 1}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
