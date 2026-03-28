import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MutuoGuide from './MutuoGuide';
export const metadata = {
  title: 'Come Richiedere il Mutuo Prima Casa nel 2026: Requisiti, Tassi e Garanzia Consap',
  description: 'Mutuo prima casa 2026: come funziona, requisiti, garanzia Consap per under 36, tassi fisso e variabile, come fare domanda. Guida gratuita aggiornata.',
  keywords: ['mutuo prima casa 2026','garanzia Consap','mutuo under 36','tassi mutuo 2026','tasso fisso variabile mutuo','requisiti mutuo prima casa','pre-delibera mutuo'],
  alternates: { canonical: 'https://zeroburocrazia.it/mutuo' },
  openGraph: { title: 'Mutuo Prima Casa 2026: Come Funziona, Requisiti, Consap e Tassi', url: 'https://zeroburocrazia.it/mutuo', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogmutuo.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogmutuo.png'] },
};
const faqItems = [
  { q: "Quanto anticipo serve per un mutuo prima casa?", a: "Di solito le banche finanziano l\u2019<strong>80% del valore</strong> dell\u2019immobile. Con la garanzia Consap (under 36, ISEE < 40.000\u20ac) puoi arrivare al <strong>100% senza anticipo</strong>. Ma servono comunque i soldi per notaio, imposta, perizia e agenzia (circa 8-12% extra)." },
  { q: "Posso ottenere un mutuo con contratto a tempo determinato?", a: "\u00c8 <strong>pi\u00f9 difficile</strong>, ma non impossibile. Con la garanzia Consap diventa pi\u00f9 fattibile. Alcune banche accettano co-obbligati (es. un genitore con reddito stabile)." },
  { q: "Tasso fisso o variabile: quale scelgo?", a: "Nel 2026, con tassi fissi attorno al <strong>2,8-3,1%</strong>, il fisso \u00e8 la scelta pi\u00f9 popolare. Il variabile pu\u00f2 partire pi\u00f9 basso ma sale se i tassi di mercato salgono. Regola: se non puoi permetterti aumenti della rata, vai sul fisso." },
  { q: "Posso detrarre gli interessi del mutuo?", a: "<strong>S\u00ec.</strong> Gli interessi passivi del mutuo prima casa sono detraibili al 19% nel 730, fino a un massimo di <strong>4.000\u20ac all\u2019anno</strong>. Su 4.000\u20ac di interessi recuperi 760\u20ac." },
  { q: "Quanto tempo ci vuole per ottenere il mutuo?", a: "In media <strong>30-60 giorni</strong> dalla domanda all\u2019erogazione. Con Consap servono fino a 20 giorni in pi\u00f9. Inizia la pratica appena trovi casa, non dopo il compromesso." },
  { q: "Cosa succede se non riesco a pagare le rate?", a: "La banca prima cerca una soluzione (rinegoziazione, sospensione). Se continui a non pagare, pu\u00f2 avviare la <strong>procedura di pignoramento</strong> e vendita all\u2019asta. Calcola bene la rata prima di firmare." },
  { q: "Cos\u2019\u00e8 la surroga e quando conviene?", a: "La surroga \u00e8 il trasferimento del mutuo a un\u2019altra banca con condizioni migliori. \u00c8 <strong>gratuita per legge</strong>. Conviene se il tuo tasso attuale \u00e8 almeno 0,5-1% pi\u00f9 alto di quelli di mercato." },
  { q: "Posso comprare casa senza mutuo?", a: "Certo, se hai i soldi. In Italia circa il <strong>53% delle compravendite</strong> avviene senza mutuo. La rata non dovrebbe superare il 30-35% del tuo reddito netto mensile." },
];
export default function Page() {
  const schemas = [articleSchema({ title: 'Mutuo prima casa 2026: come funziona, requisiti, Consap e tassi', description: 'Mutuo prima casa 2026: requisiti, garanzia Consap, tassi e procedura.', url: '/mutuo', image: 'ogmutuo.png', datePublished: '2026-03-15', dateModified: '2026-03-28' }), faqSchema(faqItems)];
  return (<><SchemaOrg schemas={schemas} /><MutuoGuide faqItems={faqItems} /></>);
}
