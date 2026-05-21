'use client';

import React, { useEffect, useRef } from 'react';

interface RateRow {
    loanType: string;
    national: string;
    ledger: string;
    savings: string;
    highlight?: boolean;
}

const rates: RateRow[] = [
    { loanType: 'Auto Loan (new, 60 mo.)', national: '7.89%', ledger: '5.49%', savings: '2.40%', highlight: true },
    { loanType: 'Auto Loan (used, 48 mo.)', national: '8.62%', ledger: '5.99%', savings: '2.63%' },
    { loanType: 'Student Loan Refi', national: '7.15%', ledger: '4.99%', savings: '2.16%', highlight: true },
    { loanType: 'Personal Loan', national: '11.48%', ledger: '7.25%', savings: '4.23%' },
    { loanType: 'Home Equity Loan', national: '8.74%', ledger: '6.49%', savings: '2.25%' },
];

const RateComparison: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.querySelectorAll('.scroll-reveal').forEach((child, i) => {
                            setTimeout(() => {
                                (child as HTMLElement).classList.add('visible');
                            }, i * 80);
                        });
                        obs.disconnect();
                    }
                });
            },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 lg:px-10 bg-arctic-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
                    <div className="scroll-reveal">
                        <p className="text-xs font-bold uppercase tracking-widest text-sapphire mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            Rate Comparison
                        </p>
                        <h2 className="text-section-heading text-charcoal">
                            The numbers that national banks don&apos;t advertise to teachers.
                        </h2>
                    </div>
                    <div className="scroll-reveal scroll-reveal-delay-1">
                        <p className="text-slate-mid leading-relaxed text-base">
                            National banks price their loans on credit scores and zip codes. We price ours on something different: the fact that you chose a profession that shapes every other profession.
                        </p>
                        <div className="flex items-center gap-2 mt-5">
                            <div className="w-3 h-3 rounded-full bg-sapphire" />
                            <span className="text-sm font-semibold text-charcoal" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                Rates current as of February 2026
                            </span>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="scroll-reveal scroll-reveal-delay-2 rounded-2xl overflow-hidden border border-platinum">
                    {/* Table header */}
                    <div className="grid grid-cols-4 bg-charcoal px-6 py-4">
                        {['Loan Type', 'National Avg.', 'Ledger Rate', 'You Save'].map((h) => (
                            <div key={h} className="text-xs font-bold uppercase tracking-wider text-white/60" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                {h}
                            </div>
                        ))}
                    </div>

                    {/* Rows */}
                    {rates.map((row, i) => (
                        <div
                            key={i}
                            className={`rate-table-row grid grid-cols-4 px-6 py-5 ${row.highlight ? 'bg-sapphire/[0.03]' : 'bg-warm-white'
                                }`}
                        >
                            <div>
                                <p className="text-sm font-semibold text-charcoal" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    {row.loanType}
                                </p>
                                {row.highlight && (
                                    <span className="inline-block text-xs font-bold text-sapphire mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        Popular
                                    </span>
                                )}
                            </div>
                            <div className="rate-bank text-sm flex items-center">
                                {row.national}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="rate-ledger text-sm">{row.ledger}</span>
                                {row.highlight && (
                                    <span className="text-xs bg-sapphire/10 text-sapphire font-bold px-2 py-0.5 rounded-full">Best</span>
                                )}
                            </div>
                            <div className="flex items-center">
                                <span className="text-sm font-bold text-success-green" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    −{row.savings}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footnote */}
                <p className="text-xs text-slate-mid mt-4 text-center">
                    APR rates shown. National averages sourced from FRED & Bankrate, Feb 2026. Your rate may vary based on credit profile.
                </p>

                {/* CTA */}
                <div className="scroll-reveal scroll-reveal-delay-3 text-center mt-10">
                    <a href="#" className="btn-sapphire text-base py-4 px-8 inline-flex">
                        See My Educator Rate
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RateComparison;