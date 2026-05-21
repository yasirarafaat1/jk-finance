import React from 'react';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
    ArrowRight,
    BadgeCheck,
    Briefcase,
    Car,
    CreditCard,
    Home,
    KeyRound,
    MapPin,
    PhoneCall,
    ShieldCheck,
    User,
    Wallet,
} from 'lucide-react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const services: { name: string; icon: LucideIcon; slug: string }[] = [
    { name: 'Personal Loan', icon: User, slug: 'personal-loan' },
    { name: 'Business Loan', icon: Briefcase, slug: 'business-loan' },
    { name: 'OD', icon: CreditCard, slug: 'od' },
    { name: 'CC', icon: Wallet, slug: 'cc' },
    { name: 'LAP', icon: Home, slug: 'lap' },
    { name: 'Mortgage Loan', icon: KeyRound, slug: 'mortgage-loan' },
    { name: 'Used Vehicle Loan', icon: Car, slug: 'used-vehicle-loan' },
];

const trustSignals: { icon: LucideIcon; text: string }[] = [
    { icon: BadgeCheck, text: 'Quick Approvals' },
    { icon: ShieldCheck, text: 'Secure & Trusted' },
    { icon: MapPin, text: 'Nagpur Based' },
];

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section
                    className="min-h-screen flex flex-col justify-center relative overflow-hidden"
                    style={{ background: 'linear-gradient(160deg, #F8FAFB 0%, #EDF1F7 50%, #F8FAFB 100%)' }}
                >
                    <div
                        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(27,79,138,0.07) 0%, transparent 65%)',
                            transform: 'translate(-20%, -20%)',
                        }}
                    />
                    <div
                        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(27,79,138,0.05) 0%, transparent 65%)',
                            transform: 'translate(20%, 20%)',
                        }}
                    />

                    <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-10 pt-28 pb-16">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 bg-sapphire/10 text-sapphire text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                <MapPin size={12} />
                                Nagpur, Maharashtra - India
                            </div>

                            <h1
                                className="font-bold text-charcoal mb-6"
                                style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.1, letterSpacing: '-0.03em', fontFamily: 'DM Sans, sans-serif' }}
                            >
                                JK Financial Services
                            </h1>

                            <p className="text-slate-mid text-lg leading-relaxed mb-8 max-w-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                Your trusted partner for personal loans, business loans, mortgage, and more. Fast approvals, competitive rates, and dedicated support across Nagpur.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 bg-sapphire text-white font-bold text-sm py-3.5 px-7 rounded-xl hover:bg-sapphire/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                                >
                                    Explore Services
                                    <ArrowRight size={16} />
                                </Link>
                                <a
                                    href="tel:93092569886"
                                    className="inline-flex items-center gap-2 border-2 border-sapphire/30 text-sapphire font-bold text-sm py-3.5 px-7 rounded-xl hover:border-sapphire transition-all duration-200"
                                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                                >
                                    <PhoneCall size={16} />
                                    Call Us Now
                                </a>
                            </div>

                            {/* Trust signals */}
                            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-10">
                                {trustSignals.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <item.icon size={16} className="text-sapphire" />
                                        <span className="text-sm font-semibold text-charcoal/70" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Overview */}
                <section className="py-20 px-6 lg:px-10 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-bold text-charcoal mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.02em' }}>
                                Our Loan Services
                            </h2>
                            <p className="text-slate-mid text-base max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                Tailored financial solutions for every need — from personal expenses to business growth.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {services?.map((service) => (
                                <Link
                                    key={service?.slug}
                                    href={`/services/${service?.slug}`}
                                    className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-platinum bg-warm-white hover:border-sapphire/40 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-sapphire/10 flex items-center justify-center group-hover:bg-sapphire/15 transition-colors">
                                        <service.icon size={22} className="text-sapphire" />
                                    </div>
                                    <span className="text-sm font-bold text-charcoal text-center group-hover:text-sapphire transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        {service?.name}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center mt-10">
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 text-sapphire font-bold text-sm hover:underline"
                                style={{ fontFamily: 'DM Sans, sans-serif' }}
                            >
                                View All Services
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section
                    className="py-20 px-6 lg:px-10 relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #1B4F8A 0%, #143D6B 100%)' }}
                >
                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <h2
                            className="font-bold text-white mb-4"
                            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.03em', fontFamily: 'DM Sans, sans-serif' }}
                        >
                            Ready to get started?
                        </h2>
                        <p className="text-white/70 text-base leading-relaxed mb-8 max-w-lg mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            Contact JK Financial Services today. We&apos;re here to help you find the right loan for your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 bg-white text-sapphire font-bold text-sm py-3.5 px-8 rounded-xl hover:bg-white/90 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                                style={{ fontFamily: 'DM Sans, sans-serif' }}
                            >
                                Browse Services
                                <ArrowRight size={16} />
                            </Link>
                            <a
                                href="tel:93092569886"
                                className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-bold text-sm py-3.5 px-8 rounded-xl hover:border-white transition-all duration-200"
                                style={{ fontFamily: 'DM Sans, sans-serif' }}
                            >
                                <PhoneCall size={16} />
                                93092569886
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}