import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideMutuoContent from './GuideMutuoContent';

export const metadata = {
  title: 'Come Richiedere il Mutuo Prima Casa nel 2026: Requisiti, Tassi e Garanzia',
  description: 'Mutuo prima casa 2026: come funziona, requisiti, garanzia Consap under 36, documenti, tassi fisso e variabile, quanto puoi chiedere. Guida gratuita.',
  keywords: ['mutuo prima casa','mutuo 2026','mutuo under 36','mutuo Consap','garanzia mutuo','mutuo tasso fisso','requisiti mutuo','mutuo 100%'],
  alternates: { canonical: 'https://zeroburocrazia.it/mutuo' },
  openGraph: { title: 'Mutuo Prima Casa 2026: Requisiti, Tassi e Garanzia Consap', url: 'https://zeroburocrazia.it/mutuo', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogmutuo.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogmutuo.png'] },
};

const faqItems = [
  { q: "Quanto anticipo serve per un mutuo prima casa?", a: "Di solito le banche finanziano l\u2019<strong>80% del valore</strong>, quindi serve il 20% come anticipo. Con la garanzia Consap under 36 puoi arrivare al <strong>100%</strong>. Oltre al prezzo servono soldi per notaio, imposta, perizia e agenzia (8\u201312% in pi\u00f9)." },
  { q: "Posso ottenere un mutuo con contratto a tempo determinato?", a: "\u00c8 <strong>pi\u00f9 difficile</strong>, ma non impossibile. Con la garanzia Consap diventa pi\u00f9 fattibile. Alcune banche accettano co-obbligati o valutano la continuit\u00e0 lavorativa." },
  { q: "Tasso fisso o variabile?", a: "Nel 2026, con tassi fissi attorno al <strong>2,8\u20133,1%</strong>, il fisso \u00e8 la scelta pi\u00f9 popolare. Il variabile pu\u00f2 partire pi\u00f9 basso ma sale se i tassi salgono. Regola: se non puoi permetterti aumenti della rata, vai sul fisso." },
  { q: "Posso detrarre gli interessi del mutuo?", a: "<strong>S\u00ec.</strong> Gli interessi passivi del mutuo prima casa sono detraibili al 19% nel 730, fino a <strong>4.000\u20ac/anno</strong>. Su 4.000\u20ac recuperi 760\u20ac." },
  { q: "Quanto tempo ci vuole per ottenere il mutuo?", a: "In media <strong>30\u201360 giorni</strong>. La banca fa l\u2019istruttoria, manda il perito, poi delibera. Con Consap servono fino a 20 giorni in pi\u00f9." },
  { q: "Cos\u2019\u00e8 la surroga?", a: "Il trasferimento del mutuo a un\u2019altra banca con condizioni migliori. \u00c8 <strong>gratuita per legge</strong>. Conviene se il tuo tasso \u00e8 almeno 0,5\u20131% pi\u00f9 alto di quelli attuali." },
  { q: "Cosa succede se non pago le rate?", a: "La banca cerca una soluzione (rinegoziazione, sospensione). Se continui a non pagare, pu\u00f2 avviare il <strong>pignoramento</strong>. Il mutuo \u00e8 un impegno serio." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Mutuo prima casa 2026: requisiti, tassi e garanzia Consap', description: 'Come richiedere il mutuo prima casa nel 2026.', url: '/mutuo', image: 'ogmutuo.png', datePublished: '2026-03-11', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];
  return (<><SchemaOrg schemas={schemas} /><GuideMutuoContent faqItems={faqItems} /></>);
}
