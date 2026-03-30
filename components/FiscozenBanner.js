'use client';
import { useState, useEffect } from 'react';

const LINK = 'https://fiscozen.it/invitoZEROBUROCRAZIA50A';

export function FiscozenBanner() {
  return (
    <div className="fz-banner">
      <div className="fz-banner-inner">
        <img src="/fiscozen-logo.png" alt="Fiscozen" width="40" height="40" className="fz-logo" />
        <div className="fz-banner-text">
          <strong>Cerchi un commercialista online?</strong>
          <p>Con Fiscozen gestisci partita IVA, fatture e tasse da un&apos;unica piattaforma. Consulenza inclusa.</p>
        </div>
        <a href={LINK} target="_blank" rel="noopener noreferrer" className="fz-btn">
          Prova Fiscozen &mdash; 50&euro; di sconto
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>
      </div>
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
    <div className="fz-sticky">
      <div className="fz-sticky-inner">
        <img src="/fiscozen-logo.png" alt="Fiscozen" width="24" height="24" />
        <span>Commercialista online da 299&euro;/anno</span>
        <a href={LINK} target="_blank" rel="noopener noreferrer">Scopri Fiscozen &rarr;</a>
      </div>
    </div>
  );
}
