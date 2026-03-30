'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

/* All searchable guides */
const guides = [
  { name: 'Dichiarazione 730', href: '/730', cat: 'Fisco' },
  { name: 'ISEE 2026', href: '/isee', cat: 'Fisco' },
  { name: 'Come fare lo SPID', href: '/spid', cat: 'Documenti' },
  { name: 'NASpI', href: '/naspi', cat: 'Lavoro' },
  { name: 'Legge 104', href: '/legge-104', cat: 'Salute' },
  { name: 'Bonus bollette', href: '/bonus-bollette', cat: 'Fisco' },
  { name: 'Partita IVA', href: '/piva', cat: 'Fisco' },
  { name: 'Dimissioni', href: '/dimissioni', cat: 'Lavoro' },
  { name: 'Assegno unico', href: '/assegno-unico', cat: 'Famiglia' },
  { name: 'Bonus Nido', href: '/bonus-nido', cat: 'Famiglia' },
  { name: 'CIE', href: '/cie', cat: 'Documenti' },
  { name: 'PEC', href: '/pec', cat: 'Documenti' },
  { name: 'Codice fiscale', href: '/codice-fiscale', cat: 'Documenti' },
  { name: 'Passaporto', href: '/passaporto', cat: 'Documenti' },
  { name: 'Cambio residenza', href: '/cambio-residenza', cat: 'Documenti' },
  { name: 'Regime forfettario', href: '/regime-forfettario', cat: 'Fisco' },
  { name: 'Fattura elettronica', href: '/fattura-elettronica', cat: 'Fisco' },
  { name: 'Cedolare secca', href: '/cedolare-secca', cat: 'Fisco' },
  { name: 'IMU', href: '/imu', cat: 'Fisco' },
  { name: 'Busta paga', href: '/busta-paga', cat: 'Lavoro' },
  { name: 'TFR', href: '/tfr', cat: 'Lavoro' },
  { name: 'Comprare casa', href: '/compro-casa', cat: 'Casa' },
  { name: 'Mutuo', href: '/mutuo', cat: 'Casa' },
  { name: 'Ristrutturare', href: '/ristrutturare', cat: 'Casa' },
  { name: 'Bonus mobili', href: '/bonus-mobili', cat: 'Casa' },
  { name: 'Aspetto un figlio', href: '/figlio', cat: 'Famiglia' },
  { name: 'Congedo parentale', href: '/congedo-parentale', cat: 'Famiglia' },
  { name: 'Spese mediche', href: '/spese-mediche', cat: 'Fisco' },
  { name: 'Assegno inclusione', href: '/assegno-inclusione', cat: 'Lavoro' },
  { name: 'Esenzione ticket', href: '/esenzione-ticket', cat: 'Salute' },
  { name: 'Bonus psicologo', href: '/bonus-psicologo', cat: 'Salute' },
  { name: 'Mi sposo', href: '/mi-sposo', cat: 'Famiglia' },
  { name: 'Successione', href: '/successione', cat: 'Famiglia' },
];

export default function HeroSearch({ tags = [] }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const results = q.length > 1
    ? guides.filter(g =>
        g.name.toLowerCase().includes(q.toLowerCase()) ||
        g.cat.toLowerCase().includes(q.toLowerCase())
      ).slice(0, 6)
    : [];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <div className="hero-search rv rv-d3" ref={ref}>
        <span className="hero-search-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Cosa devi fare? (es. SPID, 730, bonus bollette&hellip;)"
          value={q}
          onChange={e => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
        />
        {q && (
          <button className="hero-search-clear" onClick={() => { setQ(''); setOpen(false); }} aria-label="Cancella">
            &times;
          </button>
        )}
        {open && q.length > 1 && (
          <div className="hero-dropdown">
            {results.length > 0 ? results.map((g, i) => (
              <Link key={i} href={g.href} className="hero-result" onClick={() => { setQ(''); setOpen(false); }}>
                <div>
                  <div className="hero-result-name">{g.name}</div>
                  <div className="hero-result-cat">{g.cat}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9" /></svg>
              </Link>
            )) : (
              <div className="hero-empty">Nessun risultato per &ldquo;{q}&rdquo;</div>
            )}
          </div>
        )}
      </div>

      {tags.length > 0 && (
        <div className="hero-tags rv rv-d4">
          {tags.map((t, i) => (
            <Link key={i} href={t.href} className="hero-tag">{t.label}</Link>
          ))}
        </div>
      )}
    </>
  );
}
