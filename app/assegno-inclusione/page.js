import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import AssegnoInclusioneGuide from './AssegnoInclusioneGuide';
export const metadata = {
  title: 'Come Richiedere l\u2019Assegno di Inclusione nel 2026: Requisiti, Importi e Domanda',
  description: 'Assegno di Inclusione 2026 (ex RdC): chi pu\u00f2 richiederlo, requisiti ISEE, importi, come fare domanda INPS e gli obblighi da rispettare. Guida gratuita.',
  keywords: ['assegno inclusione 2026','ADI requisiti','assegno inclusione domanda','assegno inclusione importo','ex reddito cittadinanza','ADI ISEE','carta ADI'],
  alternates: { canonical: 'https://zeroburocrazia.it/assegno-inclusione' },
  openGraph: { title: 'Assegno di Inclusione 2026: Requisiti, Importi e Come Fare Domanda', url: 'https://zeroburocrazia.it/assegno-inclusione', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogassegnoinclusione.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogassegnoinclusione.png'] },
};
const faqItems = [
  { q: "L\u2019Assegno di Inclusione ha sostituito il Reddito di Cittadinanza?", a: "<strong>S\u00ec.</strong> Dal 1\u00b0 gennaio 2024 il Reddito di Cittadinanza non esiste pi\u00f9. L\u2019ADI \u00e8 la misura che lo ha sostituito, ma con requisiti pi\u00f9 stretti: serve almeno un componente fragile nel nucleo." },
  { q: "Sono disoccupato senza figli. Ho diritto all\u2019ADI?", a: "<strong>No</strong>, a meno che tu non abbia almeno 60 anni, una disabilit\u00e0 o sia in un programma di cura certificato. Puoi richiedere il <strong>Supporto Formazione e Lavoro (SFL)</strong> da 350\u20ac/mese." },
  { q: "Quanto tempo ci vuole per ricevere il primo pagamento?", a: "L\u2019INPS ha 30 giorni per verificare la domanda. Poi devi firmare il PAD su SIISL. Il primo pagamento arriva il mese successivo alla firma. In totale: <strong>circa 2-3 mesi</strong> dalla domanda." },
  { q: "Posso lavorare mentre ricevo l\u2019ADI?", a: "<strong>S\u00ec.</strong> I primi 3.000\u20ac lordi annui di reddito da lavoro non riducono l\u2019assegno. Oltre questa soglia, l\u2019importo viene ricalcolato trimestralmente." },
  { q: "La Carta ADI funziona come il bancomat?", a: "S\u00ec, ma con limiti. Puoi fare spesa, pagare bollette, fare un bonifico per l\u2019affitto, prelevare contante fino a un limite mensile. <strong>Non puoi</strong> usarla per giochi, scommesse, acquisti online di beni non essenziali." },
  { q: "Devo rinnovare la domanda dopo 18 mesi?", a: "<strong>S\u00ec.</strong> L\u2019ADI dura massimo 18 mesi. Puoi rinnovarlo per altri 12 mesi presentando una nuova domanda." },
  { q: "L\u2019ISEE per l\u2019ADI \u00e8 quello normale?", a: "No, si usa l\u2019<strong>ISEE per prestazioni familiari e per l\u2019inclusione</strong>. Viene calcolato con le stesse regole ma con franchigie pi\u00f9 alte sulla prima casa. Chiedi al CAF di specificare questa tipologia." },
  { q: "Cosa succede se mi dimetto dal lavoro?", a: "Se ti dimetti <strong>volontariamente</strong> (senza giusta causa), perdi il diritto all\u2019ADI per i 12 mesi successivi." },
];
export default function Page() {
  const schemas = [articleSchema({ title: 'Assegno di Inclusione 2026: requisiti, importi e come fare domanda', description: 'ADI 2026: chi pu\u00f2 richiederlo, requisiti, importi e domanda INPS.', url: '/assegno-inclusione', image: 'ogassegnoinclusione.png', datePublished: '2026-03-15', dateModified: '2026-03-28' }), faqSchema(faqItems)];
  return (<><SchemaOrg schemas={schemas} /><AssegnoInclusioneGuide faqItems={faqItems} /></>);
}
