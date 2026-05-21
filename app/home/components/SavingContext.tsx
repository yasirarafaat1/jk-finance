'use client';

import React, { useEffect, useRef } from 'react';

const contextItems = [
    {
        amount: '$2,400',
        label: 'average Ledger member saves per year',
        subtext: "That\'s a semester of classroom supplies you\'ll never have to buy out-of-pocket again.",
        icon: '📚',
    },
    {
        amount: '$187',
        label: 'average monthly savings vs. national banks',
        subtext: "Enough to cover your July paycheck gap — the month you don't get paid.",
        icon: '📅',
    },
    {
        amount: '6,200+',
        label: 'educators already banking with Ledger',
        subtext: "From first-year teachers in Title I schools to 30-year department heads.",
        icon: '🏫',
    },
];

const SavingsContext: React.FC = () => {
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        itemRefs.current.forEach((el, i) => {
            if (!el) return;
            const obs = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                el.classList.add('visible');
                            }, i * 150);
                            obs.disconnect();
                        }
                    });
                },
                { threshold: 0.3 }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <section className="py-20 px-6 lg:px-10 bg-mist relative overflow-hidden">
            {/* Subtle background accent */}
            <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(27,79,138,0.05) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
            />

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-xs font-bold uppercase tracking-widest text-sapphire mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        What that number means
                    </p>
                    <h2 className="text-section-heading text-charcoal">
                        In a teacher&apos;s salary,<br />every dollar has a name.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {contextItems.map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => { itemRefs.current[i] = el; }}
                            className="context-item surface-card p-7"
                        >
                            <div className="text-3xl mb-4">{item.icon}</div>
                            <div className="font-display text-4xl font-bold text-sapphire mb-1" style={{ letterSpacing: '-0.03em' }}>
                                {item.amount}
                            </div>
                            <p className="text-sm font-semibold text-charcoal mb-3">{item.label}</p>
                            <p className="text-sm text-slate-mid leading-relaxed">{item.subtext}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SavingsContext;