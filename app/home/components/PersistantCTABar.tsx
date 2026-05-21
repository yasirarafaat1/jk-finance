'use client';

import React, { useEffect, useState } from 'react';

const PersistentCTABar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setVisible(scrollPct > 0.12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`cta-bar ${visible ? 'visible' : ''}`} role="complementary" aria-label="Persistent call to action">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <p className="text-white font-bold text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Ready to put that savings number to work?
          </p>
          <p className="text-white/50 text-xs mt-0.5">No hard credit pull · Educator-only rates · NCUA insured</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="#"
            className="text-xs text-white/60 hover:text-white transition-colors font-medium underline underline-offset-2"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Download Educator Guide
          </a>
          <a
            href="#"
            className="btn-sapphire text-sm py-3 px-6 whitespace-nowrap"
            style={{ borderRadius: '0.625rem' }}
          >
            See My Educator Rate →
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersistentCTABar;