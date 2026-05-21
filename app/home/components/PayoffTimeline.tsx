'use client';

import React, { useEffect, useRef, useState } from 'react';

interface TimelineItem {
    label: string;
    standardMonths: number;
    ledgerMonths: number;
    standardPct: number;
    ledgerPct: number;
    saving: string;
}

const timelineData: TimelineItem[] = [
    {
        label: '$18,500 Auto Loan @ 7.89%',
        standardMonths: 72,
        ledgerMonths: 60,
        standardPct: 100,
        ledgerPct: 83,
        saving: '12 months sooner',
    },
    {
        label: '$34,000 Student Loan Refi',
        standardMonths: 120,
        ledgerMonths: 96,
        standardPct: 100,
        ledgerPct: 80,
        saving: '24 months sooner',
    },
    {
        label: '$12,000 Personal Loan',
        standardMonths: 60,
        ledgerMonths: 48,
        standardPct: 100,
        ledgerPct: 80,
        saving: '12 months sooner',
    },
];

const PayoffTimeline: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [animated, setAnimated] = useState(false);

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
                        setTimeout(() => setAnimated(true), 400);
                        obs.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 lg:px-10 bg-arctic-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: copy */}
                    <div>
                        <div className="scroll-reveal">
                            <p className="text-xs font-bold uppercase tracking-widest text-sapphire mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                Payoff Acceleration
                            </p>
                            <h2 className="text-section-heading text-charcoal mb-6">
                                Finish faster.<br />Retire on your terms.
                            </h2>
                            <p className="text-slate-mid leading-relaxed text-base mb-8">
                                Lower rates don&apos;t just save money — they compress timelines. When you pay less in interest, more of every payment chips away at the principal. The math compounds in your favor, not the bank&apos;s.
                            </p>
                        </div>

                        <div className="scroll-reveal scroll-reveal-delay-1 space-y-4">
                            {[
                                { label: 'Average months saved per loan', value: '14' },
                                { label: 'Average interest saved per loan', value: '$2,400' },
                                { label: 'Members debt-free within 5 years', value: '68%' },
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center justify-between py-4 border-b border-platinum">
                                    <span className="text-sm text-slate-mid" style={{ fontFamily: 'DM Sans, sans-serif' }}>{stat.label}</span>
                                    <span className="font-display text-2xl font-bold text-sapphire" style={{ letterSpacing: '-0.02em' }}>{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: visual bars */}
                    <div className="scroll-reveal scroll-reveal-delay-2 space-y-10">
                        {timelineData.map((item, i) => (
                            <div key={i}>
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-sm font-semibold text-charcoal" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.label}</p>
                                    <span className="text-xs font-bold text-sapphire bg-sapphire/8 px-3 py-1 rounded-full" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        {item.saving}
                                    </span>
                                </div>

                                {/* Standard bank bar */}
                                <div className="mb-2">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs text-slate-mid font-medium">National Bank</span>
                                        <span className="text-xs text-slate-mid font-semibold">{item.standardMonths} months</span>
                                    </div>
                                    <div className="timeline-bar-bg">
                                        <div
                                            className="timeline-bar-fill timeline-bar-standard"
                                            style={{
                                                backgroundColor: '#E2E5EA',
                                                width: animated ? `${item.standardPct}%` : '0%',
                                                transition: `width 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15}s`,
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Ledger bar */}
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs text-sapphire font-bold">Ledger</span>
                                        <span className="text-xs text-sapphire font-bold">{item.ledgerMonths} months</span>
                                    </div>
                                    <div className="timeline-bar-bg">
                                        <div
                                            className="timeline-bar-fill"
                                            style={{
                                                background: 'linear-gradient(90deg, #1B4F8A, #2563B0)',
                                                width: animated ? `${item.ledgerPct}%` : '0%',
                                                transition: `width 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15 + 0.1}s`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                        <p className="text-xs text-slate-mid">
                            Payoff timelines assume same monthly payment amount. Actual results vary. Illustrative only.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PayoffTimeline;