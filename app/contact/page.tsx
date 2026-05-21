'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, Mail, MapPin, PhoneCall } from 'lucide-react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

function formatServiceLabel(value: string) {
    const trimmed = value.trim();
    if (!trimmed) return '';

    const lower = trimmed.toLowerCase();
    const acronyms: Record<string, string> = {
        od: 'OD',
        cc: 'CC',
        lap: 'LAP',
    };

    if (acronyms[lower]) return acronyms[lower];

    return trimmed
        .split('-')
        .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ''))
        .join(' ');
}

export default function ContactPage() {
    const searchParams = useSearchParams();
    const serviceParam = useMemo(() => searchParams.get('service') || '', [searchParams]);
    const [service, setService] = useState('');

    useEffect(() => {
        if (serviceParam) {
            setService(formatServiceLabel(serviceParam));
        }
    }, [serviceParam]);
    return (
        <>
            <Header />
            <main className="pt-20">
                <section className="py-14 px-6 lg:px-10 bg-white">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-sapphire mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                Contact Us
                            </p>
                            <h1
                                className="font-bold text-charcoal"
                                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', fontFamily: 'DM Sans, sans-serif' }}
                            >
                                Let us match you with the right loan
                            </h1>
                            <p className="text-slate-mid mt-4 max-w-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                Share a few details and our advisors will reach out with options tailored to your needs. You can also call or visit us directly.
                            </p>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center gap-3 text-sm text-charcoal" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    <div className="w-10 h-10 rounded-xl bg-sapphire/10 flex items-center justify-center">
                                        <PhoneCall size={18} className="text-sapphire" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-mid">Phone</p>
                                        <a href="tel:93092569886" className="font-semibold hover:text-sapphire transition-colors">93092569886</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-charcoal" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    <div className="w-10 h-10 rounded-xl bg-sapphire/10 flex items-center justify-center">
                                        <Mail size={18} className="text-sapphire" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-mid">Email</p>
                                        <a href="mailto:hello@jkfinancialservices.in" className="font-semibold hover:text-sapphire transition-colors">hello@jkfinancialservices.in</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-charcoal" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    <div className="w-10 h-10 rounded-xl bg-sapphire/10 flex items-center justify-center">
                                        <MapPin size={18} className="text-sapphire" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-mid">Office</p>
                                        <p className="font-semibold">Nagpur, Maharashtra - India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link href="/services" className="inline-flex items-center gap-2 text-sapphire font-bold text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    Browse services
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        <div className="border border-platinum rounded-2xl bg-warm-white p-6">
                            <h2 className="font-bold text-charcoal text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>Enquiry Form</h2>
                            <p className="text-sm text-slate-mid mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>We will get back within 24 hours.</p>

                            <form className="mt-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-charcoal mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Enter your full name"
                                        className="w-full border border-platinum rounded-xl px-4 py-3 text-sm text-charcoal placeholder-slate-mid/60 focus:outline-none focus:border-sapphire transition-colors"
                                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-charcoal mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Enter your email"
                                        className="w-full border border-platinum rounded-xl px-4 py-3 text-sm text-charcoal placeholder-slate-mid/60 focus:outline-none focus:border-sapphire transition-colors"
                                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-charcoal mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="Enter your phone number"
                                        className="w-full border border-platinum rounded-xl px-4 py-3 text-sm text-charcoal placeholder-slate-mid/60 focus:outline-none focus:border-sapphire transition-colors"
                                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-charcoal mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        Service Interested In
                                    </label>
                                    <input
                                        type="text"
                                        name="service"
                                        value={service}
                                        onChange={(event) => setService(event.target.value)}
                                        placeholder="e.g., Personal Loan"
                                        className="w-full border border-platinum rounded-xl px-4 py-3 text-sm text-charcoal placeholder-slate-mid/60 focus:outline-none focus:border-sapphire transition-colors"
                                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-charcoal mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={3}
                                        placeholder="Tell us what you are looking for"
                                        className="w-full border border-platinum rounded-xl px-4 py-3 text-sm text-charcoal placeholder-slate-mid/60 focus:outline-none focus:border-sapphire transition-colors resize-none"
                                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-sapphire text-sm py-3 justify-center"
                                >
                                    Submit Enquiry
                                    <ArrowRight size={16} />
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
