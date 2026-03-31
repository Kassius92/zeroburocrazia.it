import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideRegimeForfettarioContent from './GuideRegimeForfettarioContent';

export const metadata = {
  title: 'Regime Forfettario 2026: Requisiti, Tasse e Coefficienti',
  description: 'Regime forfettario 2026: requisiti, tetto 85.000\u20ac, imposta 5-15%, coefficienti di redditivit\u00e0, obblighi e quando conviene. Guida gratuita aggiornata.',
  keywords: ['regime forfettario','regime forfettario 2026','forfettario requisiti','forfettario tasse','coefficiente redditivit\u00e0','forfettario limite','imposta sostitutiva'],
  alternates: { canonical: 'https://zeroburocrazia.it/regime-forfettario' },
  openGraph: { title: 'Regime Forfettario 2026: Requisiti, Tasse e Coefficienti', url: 'https://zeroburocrazia.it/regime-forfettario', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogforfettario.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogforfettario.png'] },
};

const faqItems = [
  { q: "Quanto si paga di tasse in forfettario?", a: "<strong>5% per i primi 5 anni</strong> se apri una nuova attivit\u00e0, poi <strong>15%</strong>. A queste si aggiungono i contributi INPS (dal 26% per professionisti, dal 24% per artigiani/commercianti)." },
  { q: "Qual \u00e8 il tetto di fatturato?", a: "<strong>85.000\u20ac di ricavi annui.</strong> Tra 85k e 100k esci dall\u2019anno successivo. Sopra 100k esci immediatamente." },
  { q: "Posso scaricare le spese in forfettario?", a: "<strong>No.</strong> Il reddito si calcola con un coefficiente forfettario. L\u2019unica deduzione ammessa sono i contributi INPS versati." },
  { q: "Devo gestire l\u2019IVA in forfettario?", a: "<strong>No.</strong> Non applichi l\u2019IVA sulle fatture e non la detrarre sugli acquisti. Codice natura N2.2." },
  { q: "Posso essere forfettario e dipendente?", a: "<strong>S\u00ec</strong>, se il reddito da lavoro dipendente non supera 35.000\u20ac annui. Non puoi fatturare pi\u00f9 del 50% allo stesso datore." },
  { q: "Il coefficiente di redditivit\u00e0: cos\u2019\u00e8?", a: "\u00c8 la percentuale del fatturato su cui paghi le tasse. Per i consulenti \u00e8 il 78%, per i commercianti di alimentari il 40%." },
  { q: "Quando conviene l\u2019ordinario?", a: "Se hai molti costi reali deducibili (ufficio, dipendenti, attrezzature) che superano la percentuale forfettaria." },
  { q: "Devo fare la fattura elettronica?", a: "<strong>S\u00ec, dal 2024 \u00e8 obbligatoria per tutti i forfettari.</strong> Fatture XML tramite il SdI." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Regime forfettario 2026: requisiti, tasse e coefficienti', description: 'Guida completa al regime forfettario.', url: '/regime-forfettario', image: 'ogforfettario.png', datePublished: '2026-03-04', dateModified: '2026-03-31' }),
    faqSchema(faqItems),
  ];
  return (<><SchemaOrg schemas={schemas} /><GuideRegimeForfettarioContent faqItems={faqItems} /></>);
}
