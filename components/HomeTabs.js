'use client';
import { useState } from 'react';
import Link from 'next/link';

const check = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const data = {
  fisco: {
    title: 'Tasse e bonus senza impazzire',
    desc: 'Dichiarazioni, detrazioni, bonus: tutto quello che lo Stato prevede per te, spiegato con esempi concreti e numeri reali.',
    points: ['Calcolatori interattivi per ogni guida', 'Esempi con nomi e numeri reali', 'Link diretti ai siti ufficiali'],
    cards: [
      { href: '/730', name: 'Dichiarazione 730', sub: 'Precompilata, detrazioni, scadenze', ic: 'ic-coral' },
      { href: '/isee', name: 'ISEE 2026', sub: 'Documenti, procedura, simulazione', ic: 'ic-coral' },
      { href: '/bonus-bollette', name: 'Bonus Bollette', sub: 'Luce, gas, acqua \u2014 automatico con ISEE', ic: 'ic-coral' },
      { href: '/piva', name: 'Partita IVA', sub: 'Regime forfettario, costi, contributi', ic: 'ic-coral' },
    ],
  },
  documenti: {
    title: 'Documenti senza code',
    desc: 'SPID, CIE, passaporto: le guide per ottenere tutto quello che ti serve dalla pubblica amministrazione.',
    points: ['Procedure aggiornate al 2026', 'Confronto costi tra provider', 'Trucchi per saltare la coda'],
    cards: [
      { href: '/spid', name: 'SPID', sub: 'Provider, costi, riconoscimento CIE', ic: 'ic-blue' },
      { href: '/cie', name: 'CIE', sub: 'Prenotazione, costi, tempi', ic: 'ic-blue' },
      { href: '/passaporto', name: 'Passaporto', sub: 'Prenotazione, documenti, costi', ic: 'ic-blue' },
    ],
  },
  lavoro: {
    title: 'Lavoro e diritti, senza avvocato',
    desc: 'Dimissioni, disoccupazione, contratti, busta paga: le guide per capire cosa ti spetta e come ottenerlo.',
    points: ['Calcolo NASpI personalizzato', 'Procedura dimissioni passo-passo', 'Diritti che non sai di avere'],
    cards: [
      { href: '/naspi', name: 'NASpI', sub: 'Calcolo, domanda, quanto dura', ic: 'ic-gold' },
      { href: '/dimissioni', name: 'Dimissioni', sub: 'Procedura online, preavviso, TFR', ic: 'ic-gold' },
      { href: '/assegno-inclusione', name: 'Assegno di Inclusione', sub: 'Requisiti, domanda, importi', ic: 'ic-gold' },
    ],
  },
  famiglia: {
    title: 'Famiglia, casa, vita',
    desc: 'Figli, mutuo, ristrutturazione: le guide per le decisioni importanti della vita.',
    points: ['Bonus e agevolazioni per famiglie', 'Guida mutuo prima casa', 'Detrazioni ristrutturazione'],
    cards: [
      { href: '/legge-104', name: 'Legge 104', sub: 'Permessi, congedo, agevolazioni', ic: 'ic-violet' },
      { href: '/bonus-nido', name: 'Bonus Nido', sub: 'Fino a 3.600\u20AC/anno per asilo', ic: 'ic-violet' },
      { href: '/compro-casa', name: 'Comprare casa', sub: 'Mutuo, notaio, imposte', ic: 'ic-violet' },
    ],
  },
};

const tabLabels = [
  { key: 'fisco', label: 'Fisco' },
  { key: 'documenti', label: 'Documenti' },
  { key: 'lavoro', label: 'Lavoro' },
  { key: 'famiglia', label: 'Famiglia' },
];

export default function HomeTabs() {
  const [active, setActive] = useState('fisco');
  const tab = data[active];

  return (
    <>
      <div className="tabs rv">
        {tabLabels.map(t => (
          <button
            key={t.key}
            className={`tab-btn${active === t.key ? ' active' : ''}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="tab-content" key={active}>
        <div className="tab-text">
          <h3>{tab.title}</h3>
          <p>{tab.desc}</p>
          <ul className="tab-list">
            {tab.points.map((pt, i) => <li key={i}>{check}{pt}</li>)}
          </ul>
        </div>
        <div className="tab-cards">
          {tab.cards.map(c => (
            <Link key={c.href} href={c.href} className="tab-card">
              <div className={`tab-card-icon ${c.ic}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <h4>{c.name}</h4>
                <p>{c.sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
