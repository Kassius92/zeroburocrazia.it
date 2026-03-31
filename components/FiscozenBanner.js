'use client';
import { useState, useEffect } from 'react';

const LINK = 'https://fiscozen.it/invitoZEROBUROCRAZIA50A';

export function FiscozenBanner() {
  return (
    <div className="fz2">
      <div className="fz2-badge">
        <img src="/fiscozen-logo.png" alt="Fiscozen" className="fz2-logo" />
      </div>
      <h3 className="fz2-title">Cerchi un servizio online per la gestione della partita IVA?</h3>
      <div className="fz2-perks">
        <span className="fz2-perk"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Fatture, tasse e F24 in un&apos;unica app</span>
        <span className="fz2-perk"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Consulenza fiscale illimitata inclusa</span>
        <span className="fz2-perk"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Tramite ZeroBurocrazia: <strong>50&euro; di sconto</strong></span>
      </div>
      <a href={LINK} target="_blank" rel="noopener noreferrer" className="fz2-btn">
        Prova Fiscozen &mdash; 50&euro; di sconto
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </a>
    </div>
  );
}

export function FiscozenSticky() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 800);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  if (!show) return null;
  return (
    <div className="fz2-sticky">
      <div className="fz2-sticky-inner">
        <span className="fz2-sticky-text"><strong>Fiscozen</strong> &mdash; 50&euro; di sconto tramite ZeroBurocrazia</span>
        <a href={LINK} target="_blank" rel="noopener noreferrer" className="fz2-sticky-btn">Scopri &rarr;</a>
      </div>
    </div>
  );
}
