'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Landmark, Menu, PhoneCall, X } from 'lucide-react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'nav-glass shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1B4F8A 0%, #143D6B 100%)' }}>
                        <Landmark size={18} className="text-white" />
                    </div>
                    <div>
                        <span className="font-bold text-charcoal text-sm leading-tight block" style={{ fontFamily: 'DM Sans, sans-serif' }}>JK Financial</span>
                        <span className="text-xs text-slate-mid leading-tight block" style={{ fontFamily: 'DM Sans, sans-serif' }}>Services</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-semibold text-charcoal/70 hover:text-sapphire transition-colors duration-200"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="tel:93092569886"
                        className="flex items-center gap-2 text-sm font-semibold text-charcoal/70 hover:text-sapphire transition-colors"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                        <PhoneCall size={14} />
                        93092569886
                    </a>
                    <Link href="/services" className="btn-sapphire text-sm py-2.5 px-5">
                        Our Services
                        <ArrowRight size={14} />
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-platinum/60 transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={20} className="text-charcoal" /> : <Menu size={20} className="text-charcoal" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-warm-white border-t border-platinum px-6 py-4 space-y-3">
                    {navLinks.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="block py-2 text-sm font-semibold text-charcoal/80 hover:text-sapphire transition-colors"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                            onClick={() => setMobileOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href="tel:93092569886"
                        className="flex items-center gap-2 py-2 text-sm font-semibold text-sapphire"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                        onClick={() => setMobileOpen(false)}
                    >
                        <PhoneCall size={14} />
                        93092569886
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;