import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import EsenzioneTicketGuide from './EsenzioneTicketGuide';
export const metadata = {
  title: 'Come Ottenere l\u2019Esenzione Ticket nel 2026: Requisiti, Codici e Procedura',
  description: 'Esenzione ticket sanitario 2026: chi non paga, codici E01-E04, esenzioni per patologia cronica e invalidit\u00e0, come richiederla alla ASL. Guida gratuita.',
  keywords: ['esenzione ticket 2026','codici esenzione ticket','esenzione ticket reddito','esenzione ticket patologia','E01 E02 E03 E04','chi non paga ticket','come ottenere esenzione ticket'],
  alternates: { canonical: 'https://zeroburocrazia.it/esenzione-ticket' },
  openGraph: { title: 'Esenzione Ticket Sanitario 2026: Chi Non Paga, Codici e Come Richiederla', url: 'https://zeroburocrazia.it/esenzione-ticket', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogesenzioneticket.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogesenzioneticket.png'] },
};
const faqItems = [
  { q: "Come faccio a sapere se ho diritto all\u2019esenzione?", a: "Il modo pi\u00f9 veloce: <strong>chiedi al tuo medico di base</strong>. Vede i codici esenzione nel sistema quando scrive la ricetta. Oppure controlla online sul Fascicolo Sanitario Elettronico della tua Regione con SPID." },
  { q: "L\u2019esenzione per reddito \u00e8 automatica?", a: "Per <strong>E01, E03 e E04 s\u00ec</strong> \u2014 il Sistema Tessera Sanitaria verifica i dati automaticamente. Per <strong>E02 (disoccupati) no</strong>: devi presentare un\u2019autocertificazione alla ASL ogni anno, entro il 31 marzo." },
  { q: "Per l\u2019esenzione serve l\u2019ISEE?", a: "<strong>No.</strong> L\u2019esenzione ticket si basa sul reddito complessivo lordo del nucleo familiare, non sull\u2019ISEE. Alcune Regioni prevedono esenzioni aggiuntive legate all\u2019ISEE \u2014 verifica con la tua ASL." },
  { q: "Quanto dura l\u2019esenzione?", a: "Per reddito: scade il 31 marzo di ogni anno. Per patologia cronica: dipende dalla malattia, alcune sono permanenti, altre richiedono rinnovo. Per invalidit\u00e0: segue la validit\u00e0 del verbale." },
  { q: "Ho una patologia cronica ma non ho l\u2019esenzione. Cosa faccio?", a: "Fatti rilasciare una certificazione da un medico specialista di struttura pubblica o accreditata. Portala alla ASL con la tessera sanitaria. La ASL rilascia l\u2019attestato di esenzione." },
  { q: "L\u2019esenzione vale in tutta Italia?", a: "I codici nazionali (E01-E04 e quelli per patologia) <strong>valgono in tutta Italia</strong>. Le esenzioni regionali aggiuntive valgono solo nella Regione che le prevede." },
  { q: "Posso avere pi\u00f9 esenzioni contemporaneamente?", a: "<strong>S\u00ec.</strong> Puoi avere sia l\u2019esenzione per reddito che quella per patologia. Il medico user\u00e0 il codice pi\u00f9 vantaggioso per ogni ricetta." },
  { q: "Il superticket esiste ancora?", a: "<strong>No.</strong> Il superticket di 10\u20ac sulle prestazioni specialistiche \u00e8 stato eliminato dal 1\u00b0 settembre 2020." },
];
export default function Page() {
  const schemas = [articleSchema({ title: 'Esenzione ticket sanitario 2026: chi non paga, codici e come richiederla', description: 'Esenzione ticket sanitario 2026: codici, requisiti e procedura.', url: '/esenzione-ticket', image: 'ogesenzioneticket.png', datePublished: '2026-03-15', dateModified: '2026-03-28' }), faqSchema(faqItems)];
  return (<><SchemaOrg schemas={schemas} /><EsenzioneTicketGuide faqItems={faqItems} /></>);
}
