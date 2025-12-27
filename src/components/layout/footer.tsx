import Link from 'next/link';
import { ShieldCheck, Mail, Phone, Globe, ExternalLink, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050A15] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative pulse element */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5 space-y-10">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-accent p-2.5 rounded-xl transition-all group-hover:scale-110 group-hover:rotate-3 duration-500 shadow-lg shadow-accent/20">
                <ShieldCheck className="h-7 w-7 text-primary" />
              </div>
              <span className="text-2xl font-black tracking-tightest font-headline">TRAKMINT</span>
            </Link>

            <p className="text-white/40 text-lg leading-relaxed max-w-sm font-medium">
              The global benchmark for specialized asset recovery and digital forensic operations. Restoring security through technical excellence and institutional integrity.
            </p>

            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Global Operations Active</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs">Operation</h3>
            <ul className="space-y-4">
              <li><Link href="/claim" className="text-white/40 hover:text-accent transition-all text-sm font-bold flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent transition-all" />Intake Protocol</Link></li>
              <li><Link href="/services" className="text-white/40 hover:text-accent transition-all text-sm font-bold flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent transition-all" />Forensic Services</Link></li>
              <li><Link href="/faq" className="text-white/40 hover:text-accent transition-all text-sm font-bold flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent transition-all" />Intelligence Base</Link></li>
              <li><Link href="/about-us" className="text-white/40 hover:text-accent transition-all text-sm font-bold flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent transition-all" />Corporate Mandate</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-8">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs">Governance</h3>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-white/40 hover:text-accent transition-all text-sm font-bold flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent transition-all" />Data Sovereignty</Link></li>
              <li><Link href="/terms-of-service" className="text-white/40 hover:text-accent transition-all text-sm font-bold flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent transition-all" />Terms of Engagement</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs">Headquarters</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                  <Mail size={18} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/30 font-black uppercase tracking-tighter mb-1">Primary Intake</span>
                  <a href="mailto:support@trakmint.org" className="text-sm font-black text-white hover:text-accent transition-colors underline decoration-accent/20 decoration-2 underline-offset-4">
                    support@trakmint.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                  <Phone size={18} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/30 font-black uppercase tracking-tighter mb-1">Emergency Response</span>
                  <a href="https://wa.me/19498393391" target="_blank" rel="noopener noreferrer" className="text-sm font-black text-white hover:text-accent transition-colors flex items-center gap-1">
                    +1 (949) 839-3391 <ExternalLink size={10} className="inline opacity-30" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em]">
            © 2022 - {new Date().getFullYear()} TRAKMINT CORP. SECURED OPERATIONS. ALL DATA ENCRYPTED.
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
            <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent/40" />Layer 7 Encryption</span>
            <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent/40" />SOC2 Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
