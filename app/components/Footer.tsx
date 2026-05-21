import React from 'react';
import Link from 'next/link';
import { Landmark, MapPin, PhoneCall } from 'lucide-react';

const Footer: React.FC = () => {
    const year = 2026;
    return (
        <footer className="border-t border-platinum bg-warm-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1B4F8A 0%, #143D6B 100%)' }}>
                                <Landmark size={18} className="text-white" />
                            </div>
                            <span className="font-bold text-charcoal text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>JK Financial Services</span>
                        </div>
                        <p className="text-sm text-slate-mid leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            Trusted financial partner for all your loan needs. Serving individuals and businesses across Nagpur.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-charcoal text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>Quick Links</h4>
                        <nav className="flex flex-col gap-2">
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'Services', href: '/services' },
                                { label: 'Contact', href: '/contact' },
                            ].map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm font-medium text-slate-mid hover:text-charcoal transition-colors"
                                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-charcoal text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>Contact Us</h4>
                        <div className="flex flex-col gap-2">
                            <a href="tel:93092569886" className="flex items-center gap-2 text-sm text-slate-mid hover:text-sapphire transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                <PhoneCall size={14} />
                                93092569886
                            </a>
                            <div className="flex items-start gap-2 text-sm text-slate-mid" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                                Nagpur, Maharashtra - India
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-platinum pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-sm text-slate-mid" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        © {year} JK Financial Services. All rights reserved.
                    </span>
                    <div className="flex items-center gap-4 text-sm text-slate-mid" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        <a href="#" className="hover:text-charcoal transition-colors font-medium">Privacy</a>
                        <span>·</span>
                        <a href="#" className="hover:text-charcoal transition-colors font-medium">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
