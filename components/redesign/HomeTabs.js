'use client';
import { useState } from 'react';
import Link from 'next/link';
import icons from '@/components/redesign/guideIcons';

const checkSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const tabsData = {
  fisco: {
    title: 'Tasse e bonus senza impazzire',
    desc: 'Dichiarazioni, detrazioni, bonus: tutto quello che lo Stato prevede per te, spiegato con esempi concreti e numeri reali.',
    points: [
      'Calcolatori interattivi per ogni guida',
      'Esempi con nomi e numeri reali',
      'Link diretti ai siti ufficiali',
    ],
    cards: [
      { href: '/730', name: 'Dichiarazione 730', sub: 'Precompilata, detrazioni, scadenze', ic: 'v8-ic-coral', stroke: '#E8724A' },
      { href: '/isee', name: 'ISEE 2026', sub: 'Documenti, procedura, simulazione', ic: 'v8-ic-coral', stroke: '#E8724A' },
      { href: '/bonus-bollette', name: 'Bonus Bollette', sub: 'Luce, gas, acqua \u2014 automatico con ISEE', ic: 'v8-ic-coral', stroke: '#E8724A' },
      { href: '/piva', name: 'Partita IVA', sub: 'Regime forfettario, costi, contributi', ic: 'v8-ic-coral', stroke: '#E8724A' },
    ],
  },
  documenti: {
    title: 'Documenti senza code',
    desc: 'SPID, CIE, passaporto, tessera sanitaria: le guide per ottenere tutto quello che ti serve dalla pubblica amministrazione.',
    points: [
      'Procedure aggiornate al 2026',
      'Confronto costi tra provider',
      'Trucchi per saltare la coda',
    ],
    cards: [
      { href: '/spid', name: 'SPID', sub: 'Provider, costi, riconoscimento CIE', ic: 'v8-ic-blue', stroke: '#5B7EC5' },
      { href: '/cie', name: 'CIE', sub: 'Prenotazione, costi, tempi', ic: 'v8-ic-blue', stroke: '#5B7EC5' },
      { href: '/passaporto', name: 'Passaporto', sub: 'Prenotazione, documenti, costi', ic: 'v8-ic-blue', stroke: '#5B7EC5' },
    ],
  },
  lavoro: {
    title: 'Lavoro e diritti, senza avvocato',
    desc: 'Dimissioni, disoccupazione, contratti, busta paga: le guide per capire cosa ti spetta e come ottenerlo.',
    points: [
      'Calcolo NASpI personalizzato',
      'Procedura dimissioni passo-passo',
      'Diritti che non sai di avere',
    ],
    cards: [
      { href: '/naspi', name: 'NASpI', sub: 'Calcolo, domanda, quanto dura', ic: 'v8-ic-gold', stroke: '#C49A2A' },
      { href: '/dimissioni', name: 'Dimissioni', sub: 'Procedura online, preavviso, TFR', ic: 'v8-ic-gold', stroke: '#C49A2A' },
      { href: '/assegno-inclusione', name: 'Assegno di Inclusione', sub: 'Requisiti, domanda, importi', ic: 'v8-ic-gold', stroke: '#C49A2A' },
    ],
  },
  famiglia: {
    title: 'Famiglia, casa, vita',
    desc: 'Figli, mutuo, ristrutturazione, separazione: le guide per le decisioni importanti della vita.',
    points: [
      'Bonus e agevolazioni per famiglie',
      'Guida mutuo prima casa',
      'Detrazioni ristrutturazione',
    ],
    cards: [
      { href: '/legge-104', name: 'Legge 104', sub: 'Permessi, congedo, agevolazioni', ic: 'v8-ic-violet', stroke: '#8B6CC1' },
      { href: '/bonus-nido', name: 'Bonus Nido', sub: 'Fino a 3.600\u20AC/anno per asilo', ic: 'v8-ic-violet', stroke: '#8B6CC1' },
      { href: '/compro-casa', name: 'Comprare casa', sub: 'Mutuo, notaio, imposte, agevolazioni', ic: 'v8-ic-violet', stroke: '#8B6CC1' },
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
  const data = tabsData[active];

  return (
    <>
      <div className="hp-tabs rv">
        {tabLabels.map(t => (
          <button
            key={t.key}
            className={`hp-tab${active === t.key ? ' active' : ''}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="hp-tab-content" key={active}>
        <div className="hp-tab-text rv-left">
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
          <ul className="hp-tab-list">
            {data.points.map((pt, i) => (
              <li key={i}>{checkSvg}{pt}</li>
            ))}
          </ul>
        </div>
        <div className="hp-tab-cards rv-right">
          {data.cards.map(c => (
            <Link key={c.href} href={c.href} className="hp-tab-card">
              <div className={`hp-tab-card-icon ${c.ic}`} style={{ color: c.stroke }}>
                {icons[c.href] || null}
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
