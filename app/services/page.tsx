import React from 'react';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Briefcase, Car, CreditCard, Home, KeyRound, PhoneCall, User, Wallet } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Service {
    slug: string;
    name: string;
    icon: LucideIcon;
    tagline: string;
    description: string;
    highlights: string[];
}

const services: Service[] = [
    {
        slug: 'personal-loan',
        name: 'Personal Loan',
        icon: User,
        tagline: 'Quick funds for personal needs',
        description: 'Get instant personal loans for medical emergencies, travel, education, weddings, or any personal expense. Minimal documentation, fast disbursal.',
        highlights: ['Fast disbursal within 48 hours', 'Flexible repayment tenure', 'No collateral required'],
    },
    {
        slug: 'business-loan',
        name: 'Business Loan',
        icon: Briefcase,
        tagline: 'Fuel your business growth',
        description: 'Expand your business with tailored loan solutions for working capital, equipment, or expansion funds.',
        highlights: ['Working capital support', 'Equipment financing', 'Quick processing'],
    },
    {
        slug: 'od',
        name: 'OD (Overdraft)',
        icon: CreditCard,
        tagline: 'Flexible credit when you need it',
        description: 'Withdraw beyond your balance up to a limit and pay interest only on the amount used.',
        highlights: ['Pay interest only on usage', 'Flexible repayment', 'Renewable annually'],
    },
    {
        slug: 'cc',
        name: 'CC (Cash Credit)',
        icon: Wallet,
        tagline: 'Working capital for businesses',
        description: 'Short-term facility to meet day-to-day operational needs like inventory and raw materials.',
        highlights: ['Operational expense support', 'Interest on utilized amount only', 'Secured against current assets'],
    },
    {
        slug: 'lap',
        name: 'LAP (Loan Against Property)',
        icon: Home,
        tagline: 'Unlock the value of your property',
        description: 'Use residential or commercial property to get higher-value loans at attractive rates.',
        highlights: ['Lower interest rates', 'Long repayment tenure', 'Funds for any purpose'],
    },
    {
        slug: 'mortgage-loan',
        name: 'Mortgage Loan',
        icon: KeyRound,
        tagline: 'Own your dream home today',
        description: 'Competitive home loan rates with flexible tenures and assistance through the process.',
        highlights: ['High loan-to-value ratio', 'Repayment tenure up to 20 years', 'End-to-end assistance'],
    },
    {
        slug: 'used-vehicle-loan',
        name: 'Used Vehicle Loan',
        icon: Car,
        tagline: 'Drive your dream vehicle',
        description: 'Finance a pre-owned car or two-wheeler with quick approval and simple documentation.',
        highlights: ['Flexible EMI options', 'Minimal documentation', 'Private & dealer purchases'],
    },
];

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <section className="section-pad px-6 lg:px-10 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-10">
                            <p className="text-xs font-bold uppercase tracking-widest text-sapphire mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                Our Services
                            </p>
                            <h1
                                className="font-bold text-charcoal"
                                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', fontFamily: 'DM Sans, sans-serif' }}
                            >
                                All loan products in one list
                            </h1>
                            <p className="text-slate-mid mt-3 max-w-2xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                Compare every service at a glance. Each option links to its full detail page with requirements and highlights.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {services.map((service) => (
                                <div
                                    key={service.slug}
                                    className="border border-platinum rounded-2xl bg-warm-white p-6 flex flex-col lg:flex-row lg:items-center gap-6"
                                >
                                    <div className="flex items-start gap-4 flex-1">
                                        <div className="w-12 h-12 rounded-2xl bg-sapphire/10 flex items-center justify-center">
                                            <service.icon size={22} className="text-sapphire" />
                                        </div>
                                        <div>
                                            <div className="flex flex-wrap items-center gap-3">
                                                <h2 className="text-lg font-bold text-charcoal" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                                    {service.name}
                                                </h2>
                                                <span className="text-xs font-semibold text-sapphire bg-sapphire/10 px-2.5 py-1 rounded-full" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                                    {service.tagline}
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-mid mt-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                                {service.description}
                                            </p>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {service.highlights.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="text-xs font-semibold text-charcoal/70 bg-platinum/60 px-2.5 py-1 rounded-full"
                                                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="inline-flex items-center gap-2 text-sapphire font-bold text-sm"
                                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                                        >
                                            View details
                                            <ArrowRight size={14} />
                                        </Link>
                                        <Link
                                            href={`/contact?service=${service.slug}`}
                                            className="btn-sapphire text-sm py-2.5 px-5"
                                        >
                                            Enquire
                                            <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-pad px-6 lg:px-10 bg-arctic-white">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <h2 className="text-section-heading text-charcoal">Need help choosing the right loan?</h2>
                            <p className="text-slate-mid mt-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                Speak with our advisors for a quick recommendation based on your needs.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="tel:93092569886"
                                className="inline-flex items-center gap-2 border-2 border-sapphire/30 text-sapphire font-bold text-sm py-3 px-6 rounded-xl hover:border-sapphire transition-all duration-200"
                                style={{ fontFamily: 'DM Sans, sans-serif' }}
                            >
                                <PhoneCall size={16} />
                                Call Now
                            </a>
                            <Link
                                href="/contact"
                                className="btn-sapphire text-sm py-3 px-6"
                            >
                                Contact Us
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
