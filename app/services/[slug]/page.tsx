'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
    ArrowRight,
    BadgeCheck,
    Briefcase,
    Car,
    Check,
    CreditCard,
    Home,
    KeyRound,
    Loader2,
    PhoneCall,
    User,
    Wallet,
    X,
} from 'lucide-react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

interface Service {
    slug: string;
    name: string;
    icon: LucideIcon;
    tagline: string;
    description: string;
    fullDescription: string;
    highlights: string[];
}

const services: Service[] = [
    {
        slug: 'personal-loan',
        name: 'Personal Loan',
        icon: User,
        tagline: 'Quick funds for personal needs',
        description: 'Get instant personal loans for medical emergencies, travel, education, weddings, or any personal expense. Minimal documentation, fast disbursal.',
        fullDescription: `A Personal Loan from JK Financial Services is designed to meet your immediate financial needs without the hassle of lengthy paperwork or collateral requirements. Whether you're planning a wedding, dealing with a medical emergency, funding your child's education, or simply need funds for home renovation — we've got you covered.

Our personal loan comes with flexible repayment options ranging from 12 to 60 months, competitive interest rates, and a quick approval process. We understand that financial needs can arise unexpectedly, which is why our team works diligently to ensure fast disbursal of funds.

With JK Financial Services, you get a dedicated relationship manager who guides you through the entire process, from application to disbursal. We believe in transparent dealings with no hidden charges.`,
        highlights: ['Minimal documentation', 'Fast disbursal within 48 hours', 'Flexible repayment tenure', 'No collateral required', 'Competitive interest rates', 'Dedicated relationship manager'],
    },
    {
        slug: 'business-loan',
        name: 'Business Loan',
        icon: Briefcase,
        tagline: 'Fuel your business growth',
        description: 'Expand your business with our tailored business loan solutions. Whether you need working capital, equipment, or expansion funds — we have you covered.',
        fullDescription: `JK Financial Services offers comprehensive business loan solutions designed to help entrepreneurs and business owners achieve their growth objectives. Whether you're a startup looking for seed capital or an established business planning expansion, our business loans are structured to meet your unique requirements.

Our business loans cover a wide range of needs including working capital requirements, purchase of machinery and equipment, business expansion, inventory financing, and more. We work closely with you to understand your business model and design a loan structure that aligns with your cash flow.

With quick processing times and minimal documentation requirements, we ensure that your business never misses an opportunity due to lack of funds. Our experienced team has helped hundreds of businesses in Nagpur grow and thrive.`,
        highlights: ['Working capital support', 'Equipment & machinery financing', 'Business expansion funding', 'Competitive interest rates', 'Flexible repayment options', 'Quick processing'],
    },
    {
        slug: 'od',
        name: 'OD (Overdraft)',
        icon: CreditCard,
        tagline: 'Flexible credit when you need it',
        description: 'Overdraft facility gives you the flexibility to withdraw funds beyond your account balance up to a pre-approved limit. Pay interest only on the amount used.',
        fullDescription: `An Overdraft (OD) facility from JK Financial Services provides you with a revolving credit line that you can draw from whenever needed. Unlike a traditional loan where you receive a lump sum, an overdraft allows you to withdraw funds up to a pre-approved limit and repay at your convenience.

The biggest advantage of an OD facility is that you only pay interest on the amount you actually use, not on the entire sanctioned limit. This makes it an extremely cost-effective financial tool for managing short-term cash flow gaps.

Our overdraft facility is ideal for businesses and individuals who face periodic cash flow mismatches. The facility is renewable annually and can be secured against property, fixed deposits, or other assets.`,
        highlights: ['Pay interest only on usage', 'Revolving credit facility', 'Instant access to funds', 'Flexible repayment', 'Renewable annually', 'Secured & unsecured options'],
    },
    {
        slug: 'cc',
        name: 'CC (Cash Credit)',
        icon: Wallet,
        tagline: 'Working capital for businesses',
        description: 'Cash Credit is a short-term loan facility for businesses to meet day-to-day operational expenses. Ideal for managing inventory, raw materials, and working capital.',
        fullDescription: `Cash Credit (CC) is a specialized short-term credit facility offered by JK Financial Services to help businesses manage their working capital requirements efficiently. It is one of the most popular forms of business financing, particularly for trading and manufacturing businesses.

Under a Cash Credit facility, a business can withdraw funds up to the sanctioned limit to meet day-to-day operational needs such as purchasing raw materials, managing inventory, paying wages, and covering other operational expenses. The facility operates like a current account with a credit limit.

The interest is charged only on the amount utilized, making it a cost-effective solution for businesses with fluctuating working capital needs. The facility is typically secured against inventory, book debts, or other current assets.`,
        highlights: ['Short-term credit facility', 'Inventory & raw material financing', 'Operational expense support', 'Renewable annually', 'Interest on utilized amount only', 'Secured against current assets'],
    },
    {
        slug: 'lap',
        name: 'LAP (Loan Against Property)',
        icon: Home,
        tagline: 'Unlock the value of your property',
        description: 'Leverage your residential or commercial property to get a high-value loan at attractive interest rates. Use the funds for any purpose — business or personal.',
        fullDescription: `Loan Against Property (LAP) from JK Financial Services allows you to unlock the latent value of your property to meet large financial requirements. Whether you own a residential or commercial property, you can use it as collateral to avail a substantial loan at attractive interest rates.

LAP is one of the most versatile financial products as the funds can be used for any purpose — business expansion, debt consolidation, education, medical expenses, or any other personal or professional need. The loan amount is typically a percentage of the property's market value.

With longer repayment tenures compared to personal loans and lower interest rates due to the secured nature of the loan, LAP offers an excellent balance of affordability and flexibility. Our team of experts will help you get the best valuation for your property and the maximum possible loan amount.`,
        highlights: ['High loan amount up to 70% of property value', 'Lower interest rates', 'Residential & commercial property accepted', 'Long repayment tenure up to 15 years', 'Funds for any purpose', 'Expert property valuation support'],
    },
    {
        slug: 'mortgage-loan',
        name: 'Mortgage Loan',
        icon: KeyRound,
        tagline: 'Own your dream home today',
        description: 'Realize your dream of owning a home with our mortgage loan solutions. We offer competitive rates and flexible tenures to make homeownership accessible.',
        fullDescription: `JK Financial Services helps you turn your dream of homeownership into reality with our comprehensive mortgage loan solutions. We understand that buying a home is one of the most significant financial decisions of your life, and we're here to make the process as smooth and transparent as possible.

Our mortgage loans come with competitive interest rates, flexible repayment tenures of up to 20 years, and high loan-to-value ratios. We assist with both new home purchases and construction loans, as well as balance transfer of existing home loans at better rates.

Our dedicated home loan advisors will guide you through the entire process — from property selection and legal verification to loan sanctioning and registration. We work with multiple lenders to ensure you get the best possible deal tailored to your financial profile.`,
        highlights: ['Competitive interest rates', 'Repayment tenure up to 20 years', 'High loan-to-value ratio', 'New purchase & construction loans', 'Balance transfer facility', 'End-to-end assistance'],
    },
    {
        slug: 'used-vehicle-loan',
        name: 'Used Vehicle Loan',
        icon: Car,
        tagline: 'Drive your dream vehicle',
        description: 'Finance your pre-owned car or two-wheeler with our used vehicle loan. Get quick approval and drive home your vehicle without financial stress.',
        fullDescription: `JK Financial Services makes it easy and affordable to own a pre-owned vehicle with our Used Vehicle Loan. Whether you're looking to buy a second-hand car, SUV, or two-wheeler, we provide quick financing solutions that fit your budget.

Our used vehicle loans come with competitive interest rates, flexible EMI options, and minimal documentation requirements. We finance vehicles up to a certain age and provide loans for both private and commercial vehicles.

The loan approval process is quick and hassle-free. Our team will help you with vehicle valuation, RC verification, and all necessary documentation. We work with a network of trusted dealers and can also finance private purchases.`,
        highlights: ['Quick approval process', 'Flexible EMI options', 'Cars, SUVs & two-wheelers', 'Minimal documentation', 'Competitive interest rates', 'Private & dealer purchases'],
    },
];

const allServiceNames = services.map((s) => s.name);

interface FormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    address: string;
}

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const service = services.find((s) => s.slug === slug);

    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [form, setForm] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        service: service?.name || '',
        address: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setShowModal(false);
            setShowToast(true);
            setForm({ name: '', email: '', phone: '', service: service?.name || '', address: '' });
            setTimeout(() => setShowToast(false), 4000);
        }, 1000);
    };

    const openModal = () => {
        setForm((prev) => ({ ...prev, service: service?.name || '' }));
        setShowModal(true);
    };

    if (!service) {
        return (
            <>
                <Header />
                <main className="pt-16 min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>Service not found</h1>
                        <Link href="/services" className="text-sapphire font-semibold hover:underline" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            ← Back to Services
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="pt-16">
                {/* Breadcrumb + Hero */}
                <section
                    className="py-16 px-6 lg:px-10 relative overflow-hidden"
                    style={{ background: 'linear-gradient(160deg, #F8FAFB 0%, #EDF1F7 60%, #F8FAFB 100%)' }}
                >
                    <div
                        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(27,79,138,0.06) 0%, transparent 65%)',
                            transform: 'translate(20%, -20%)',
                        }}
                    />
                    <div className="relative z-10 max-w-4xl mx-auto">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-slate-mid mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            <Link href="/" className="hover:text-sapphire transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/services" className="hover:text-sapphire transition-colors">Services</Link>
                            <span>/</span>
                            <span className="text-charcoal font-semibold">{service.name}</span>
                        </nav>

                        <div className="flex items-start gap-5">
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(27,79,138,0.1)' }}>
                                <service.icon size={28} className="text-sapphire" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-sapphire mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    {service.tagline}
                                </p>
                                <h1
                                    className="font-bold text-charcoal"
                                    style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.03em', fontFamily: 'DM Sans, sans-serif' }}
                                >
                                    {service.name}
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 px-6 lg:px-10 bg-white">
                    <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-10">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h2 className="font-bold text-charcoal text-xl mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>About {service.name}</h2>
                            <div className="space-y-4">
                                {service.fullDescription.split('\n\n').map((para, i) => (
                                    <p key={i} className="text-slate-mid leading-relaxed text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        {para}
                                    </p>
                                ))}
                            </div>

                            <button
                                onClick={openModal}
                                className="mt-10 inline-flex items-center gap-2 bg-sapphire text-white font-bold text-sm py-3.5 px-8 rounded-xl hover:bg-sapphire/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                                style={{ fontFamily: 'DM Sans, sans-serif' }}
                            >
                                Enquire Now
                                <ArrowRight size={16} />
                            </button>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="rounded-2xl border border-platinum bg-warm-white p-6 sticky top-24">
                                <h3 className="font-bold text-charcoal text-base mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>Key Highlights</h3>
                                <ul className="space-y-3">
                                    {service.highlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(27,79,138,0.1)' }}>
                                                <Check size={12} className="text-sapphire" />
                                            </div>
                                            <span className="text-sm text-slate-mid" style={{ fontFamily: 'DM Sans, sans-serif' }}>{h}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 pt-6 border-t border-platinum">
                                    <p className="text-xs text-slate-mid mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>Have questions? Call us directly</p>
                                    <a
                                        href="tel:93092569886"
                                        className="flex items-center gap-2 text-sapphire font-bold text-sm hover:underline"
                                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                                    >
                                        <PhoneCall size={14} />
                                        93092569886
                                    </a>
                                </div>

                                <button
                                    onClick={openModal}
                                    className="mt-4 w-full btn-sapphire text-sm py-3 justify-center"
                                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                                >
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Enquiry Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.5)' }}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-platinum">
                            <div>
                                <h3 className="font-bold text-charcoal text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>Enquiry Form</h3>
                                <p className="text-sm text-slate-mid mt-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>JK Financial Services — we&apos;ll get back to you shortly</p>
                            </div>
                            <button
                                onClick={() => setShowModal(false)}
                                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-platinum/60 transition-colors"
                                aria-label="Close modal"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-semibold text-charcoal mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full border border-platinum rounded-xl px-4 py-3 text-sm text-charcoal placeholder-slate-mid/60 focus:outline-none focus:border-sapphire transition-colors"
                                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-charcoal mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                    className="w-full border border-platinum rounded-xl px-4 py-3 text-sm text-charcoal placeholder-slate-mid/60 focus:outline-none focus:border-sapphire transition-colors"
                                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-semibold text-charcoal mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your phone number"
                                    className="w-full border border-platinum rounded-xl px-4 py-3 text-sm text-charcoal placeholder-slate-mid/60 focus:outline-none focus:border-sapphire transition-colors"
                                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                                />
                            </div>

                            {/* Service Dropdown */}
                            <div>
                                <label className="block text-sm font-semibold text-charcoal mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    Service Interested In <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-platinum rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sapphire transition-colors bg-white"
                                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                                >
                                    <option value="" disabled>Select a service</option>
                                    {allServiceNames.map((name) => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Address */}
                            <div>
                                <label className="block text-sm font-semibold text-charcoal mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    Full Address <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    placeholder="Enter your complete address"
                                    className="w-full border border-platinum rounded-xl px-4 py-3 text-sm text-charcoal placeholder-slate-mid/60 focus:outline-none focus:border-sapphire transition-colors resize-none"
                                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-sapphire text-white font-bold text-sm py-3.5 rounded-xl hover:bg-sapphire/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                style={{ fontFamily: 'DM Sans, sans-serif' }}
                            >
                                {submitting ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit Enquiry'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Success Toast */}
            {showToast && (
                <div className="fixed bottom-6 right-6 z-50 flex items-start gap-3 bg-white border border-green-200 shadow-xl rounded-2xl px-5 py-4 max-w-sm animate-in slide-in-from-bottom-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BadgeCheck size={16} className="text-green-600" />
                    </div>
                    <div className="flex-1">
                        <p className="font-bold text-charcoal text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>Enquiry Submitted!</p>
                        <p className="text-slate-mid text-xs mt-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            Thank you! Our team will contact you shortly.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowToast(false)}
                        className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-platinum/60 transition-colors flex-shrink-0"
                        aria-label="Close notification"
                    >
                        <X size={12} />
                    </button>
                </div>
            )}
        </>
    );
}
