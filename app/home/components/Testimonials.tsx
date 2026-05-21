'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import AppImage from '../../components/ui/AppImage';

interface Testimonial {
    quote: string;
    name: string;
    role: string;
    district: string;
    years: string;
    saved: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "I spent seven years paying $340 a month on a car loan I took out the summer before my first classroom. Ledger got me down to $241. That $99 difference? That's my classroom budget for October.",
        name: "Deborah Okafor",
        role: "8th Grade Science Teacher",
        district: "Columbus City Schools, OH",
        years: "9 years teaching",
        saved: "$3,348 saved",
        avatar: "https://images.unsplash.com/photo-1698253150363-5288014743d0"
    },
    {
        quote: "I refinanced $34,000 in student loans at 5.1% when every private lender was quoting me 8 or 9. I didn't believe it was real until I saw the first statement. My loan will be gone before my pension kicks in.",
        name: "Marcus Whitfield",
        role: "High School History Department Head",
        district: "Denver Public Schools, CO",
        years: "18 years teaching",
        saved: "$6,120 saved",
        avatar: "https://images.unsplash.com/photo-1658728635063-1430588d9627"
    },
    {
        quote: "As an assistant principal, I finally got a mortgage rate that didn't assume I was a risk. The Ledger advisor knew what a district salary looks like — she didn't need me to explain the 12-month pay spread.",
        name: "Renata Solano",
        role: "Assistant Principal",
        district: "Tucson Unified School District, AZ",
        years: "14 years in education",
        saved: "$11,400 over loan term",
        avatar: "https://images.unsplash.com/photo-1593113616756-607b1955bf76"
    }];


const Testimonials: React.FC = () => {
    const [active, setActive] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.querySelectorAll('.scroll-reveal').forEach((child, i) => {
                            setTimeout(() => (child as HTMLElement).classList.add('visible'), i * 100);
                        });
                        obs.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const t = testimonials[active];

    return (
        <section ref={sectionRef} className="py-24 px-6 lg:px-10 bg-charcoal relative overflow-hidden">
            {/* Background texture */}
            <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(27,79,138,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(27,79,138,0.2) 0%, transparent 40%)`
                }} />


            <div className="max-w-6xl mx-auto relative z-10">
                {/* Heading */}
                <div className="mb-14 scroll-reveal">
                    <p className="text-xs font-bold uppercase tracking-widest text-sapphire-light mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Member Stories
                    </p>
                    <h2 className="text-section-heading text-white">
                        Real teachers.<br />Real classrooms.<br />Real savings.
                    </h2>
                </div>

                {/* Main testimonial */}
                <div className="scroll-reveal scroll-reveal-delay-1 grid lg:grid-cols-5 gap-8 items-start mb-10">
                    {/* Quote */}
                    <div className="lg:col-span-3">
                        <div className="relative">
                            <div className="absolute -top-3 -left-1 text-sapphire/20">
                                <Quote size={72} strokeWidth={1.5} />
                            </div>
                            <blockquote className="relative z-10 text-white/90 text-lg leading-relaxed font-medium pt-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                {t.quote}
                            </blockquote>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-sapphire/40 flex-shrink-0">
                                <AppImage
                                    src={t.avatar}
                                    alt={`${t.name}, ${t.role}`}
                                    width={56}
                                    height={56}
                                    className="w-full h-full object-cover grayscale" />

                            </div>
                            <div>
                                <p className="text-white font-bold text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>{t.name}</p>
                                <p className="text-white/50 text-sm">{t.role}</p>
                                <p className="text-white/40 text-xs mt-0.5">{t.district}</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats card */}
                    <div className="lg:col-span-2">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
                            <div className="space-y-5">
                                <div className="border-b border-white/10 pb-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>Experience</p>
                                    <p className="text-white font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>{t.years}</p>
                                </div>
                                <div className="border-b border-white/10 pb-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>District</p>
                                    <p className="text-white font-semibold text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>{t.district}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>Total Savings</p>
                                    <p className="text-sapphire-light font-bold text-2xl" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.02em' }}>{t.saved}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Selector tabs */}
                <div className="scroll-reveal scroll-reveal-delay-2 flex gap-3 flex-wrap">
                    {testimonials.map((item, i) =>
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${active === i ?
                                'bg-sapphire text-white' : 'bg-white/10 text-white/60 hover:bg-white/15 hover:text-white'}`
                            }
                            style={{ fontFamily: 'DM Sans, sans-serif' }}>

                            {item.name.split(' ')[0]}
                        </button>
                    )}
                </div>
            </div>
        </section>);

};

export default Testimonials;