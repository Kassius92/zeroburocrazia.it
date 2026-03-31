import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuidePivaContent from './GuidePivaContent';

export const metadata = {
  title: 'Come Aprire la Partita IVA nel 2026: Costi, Tasse e Forfettario',
  description: 'Come aprire partita IVA nel 2026: regime forfettario o ordinario, costi reali, tasse, contributi INPS, codice ATECO e procedura online. Guida gratuita.',
  keywords: ['partita IVA','aprire partita IVA','partita IVA 2026','regime forfettario','codice ATECO','contributi INPS','P.IVA costi'],
  alternates: { canonical: 'https://zeroburocrazia.it/piva' },
  openGraph: { title: 'Come Aprire la Partita IVA nel 2026: Costi, Tasse e Forfettario', url: 'https://zeroburocrazia.it/piva', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogpiva.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogpiva.png'] },
};

const faqItems = [
  { q: "Posso avere partita IVA e lavoro dipendente?", a: "S\u00ec. Il tuo reddito da dipendente non deve superare 35.000\u20ac annui per restare nel forfettario. Non serve il permesso del datore, ma non puoi fatturare pi\u00f9 del 50% allo stesso datore." },
  { q: "Quanto costa aprire la partita IVA?", a: "<strong>Zero.</strong> L\u2019apertura \u00e8 gratuita su agenziaentrate.gov.it con SPID. Se usi un servizio di gestione P.IVA, il costo dell\u2019apertura \u00e8 spesso incluso." },
  { q: "Devo per forza avere un commercialista?", a: "No, non \u00e8 obbligatorio. In forfettario la contabilit\u00e0 \u00e8 semplice. Per\u00f2 un servizio di gestione della partita IVA ti evita errori che costano molto di pi\u00f9." },
  { q: "Cosa succede se supero gli 85.000\u20ac?", a: "Tra 85.000 e 100.000\u20ac esci dal forfettario <strong>dall\u2019anno successivo</strong>. Sopra i 100.000\u20ac esci <strong>immediatamente</strong>." },
  { q: "Posso scaricare le spese in forfettario?", a: "No. Il reddito si calcola in modo forfettario: ricavi \u00d7 coefficiente. L\u2019unica deduzione possibile sono i contributi INPS versati." },
  { q: "Forfettario o ordinario?", a: "Per la grande maggioranza di chi inizia, il <strong>forfettario \u00e8 meglio</strong>: tasse pi\u00f9 basse, niente IVA, contabilit\u00e0 semplice. L\u2019ordinario conviene solo con molti costi deducibili." },
  { q: "Come chiudo la partita IVA?", a: "Con il modello AA9/12 all\u2019Agenzia delle Entrate, gratuito. Entro 30 giorni dalla fine dell\u2019attivit\u00e0." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Come aprire Partita IVA nel 2026', description: 'Costi, tasse, forfettario, contributi INPS e procedura.', url: '/piva', image: 'ogpiva.png', datePublished: '2026-03-04', dateModified: '2026-03-31' }),
    faqSchema(faqItems),
  ];
  return (<><SchemaOrg schemas={schemas} /><GuidePivaContent faqItems={faqItems} /></>);
}
