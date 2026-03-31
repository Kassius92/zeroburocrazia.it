import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideCodiceFiscaleContent from './GuideCodiceFiscaleContent';

export const metadata = {
  title: 'Come Richiedere il Codice Fiscale 2026: Duplicato Online, Neonati e Stranieri',
  description: 'Codice fiscale: come richiederlo per la prima volta, duplicato online con SPID, neonati, stranieri, tessera sanitaria. Guida gratuita aggiornata.',
  keywords: ['codice fiscale','codice fiscale online','richiesta codice fiscale','duplicato codice fiscale','codice fiscale neonato','codice fiscale stranieri','tessera sanitaria','codice fiscale smarrito'],
  alternates: { canonical: 'https://zeroburocrazia.it/codice-fiscale' },
  openGraph: { title: 'Come Richiedere il Codice Fiscale: Duplicato Online, Neonati e Stranieri', description: 'Codice fiscale: come richiederlo, duplicato online, neonati, stranieri. Guida gratuita.', url: 'https://zeroburocrazia.it/codice-fiscale', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogcodicefiscale.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogcodicefiscale.png'] },
};

const faqItems = [
  { q: "Come faccio a sapere qual \u00e8 il mio codice fiscale?", a: "\u00c8 stampato sulla <strong>tessera sanitaria</strong>. Se non ce l'hai, accedi all'area riservata dell'Agenzia delle Entrate con SPID o calcolalo online (risultato indicativo)." },
  { q: "Posso calcolare il codice fiscale online?", a: "S\u00ec, ci sono molti siti che lo calcolano dai tuoi dati anagrafici. Per\u00f2 il risultato \u00e8 indicativo: in caso di omocodia l'Agenzia assegna un codice diverso. Per quello ufficiale, verifica con l'Agenzia delle Entrate." },
  { q: "Il codice fiscale cambia se cambio residenza?", a: "<strong>No.</strong> Il codice fiscale \u00e8 legato ai dati di nascita e non cambia mai, neanche trasferendosi all'estero." },
  { q: "Quanto tempo ci vuole per ricevere il duplicato?", a: "Il numero della nuova tessera \u00e8 disponibile online entro <strong>24-48 ore</strong>. La tessera fisica arriva per posta entro <strong>15-20 giorni</strong>." },
  { q: "Il codice fiscale per i neonati arriva automaticamente?", a: "<strong>S\u00ec.</strong> Il Comune lo assegna al momento dell'iscrizione all'anagrafe (sistema ANPR). La prima tessera sanitaria arriva a casa entro 60 giorni. Se hai urgenza, puoi richiederlo online con SPID sul sito dell'Agenzia delle Entrate." },
  { q: "Sono straniero e non ho il codice fiscale. Cosa faccio?", a: "Se stai richiedendo il permesso di soggiorno, il codice ti viene assegnato dalla <strong>Questura</strong>. Se hai una domanda di lavoro in corso, lo assegna lo Sportello Unico per l'Immigrazione." },
  { q: "Codice fiscale e tessera sanitaria sono la stessa cosa?", a: "No. Il <strong>codice fiscale</strong> \u00e8 il numero di 16 caratteri. La <strong>tessera sanitaria</strong> \u00e8 la tessera fisica che lo contiene e d\u00e0 accesso al SSN. Puoi avere il codice anche senza la tessera." },
];


export default function Page() {
  const schemas = [
  articleSchema({ title: 'Come richiedere il codice fiscale 2026', description: 'Codice fiscale: come richiederlo, duplicato online, neonati, stranieri.', url: '/codice-fiscale', image: 'ogcodicefiscale.png', datePublished: '2026-03-20', dateModified: '2026-03-28' }),
  faqSchema(faqItems),
];
  return (
    <>
      <SchemaOrg schemas={schemas} />
      <GuideCodiceFiscaleContent faqItems={faqItems} />
    </>
  );
}
