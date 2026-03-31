import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuidePassaportoContent from './GuidePassaportoContent';

export const metadata = {
  title: 'Come Fare il Passaporto nel 2026: Costi, Documenti e Tempi',
  description: 'Passaporto 2026: come richiederlo online, costo 116\u20ac, documenti necessari, tempi, prenotazione in Questura e novit\u00e0 PagoPA. Guida gratuita passo per passo.',
  keywords: ['passaporto','passaporto 2026','come fare passaporto','costo passaporto','rinnovo passaporto','passaporto elettronico','prenotazione passaporto','documenti passaporto'],
  alternates: { canonical: 'https://zeroburocrazia.it/passaporto' },
  openGraph: { title: 'Passaporto 2026: Come Richiederlo, Costi, Documenti e Tempi', url: 'https://zeroburocrazia.it/passaporto', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogpassaporto.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogpassaporto.png'] },
};

const faqItems = [
  { q: "Quanto costa il passaporto nel 2026?", a: "<strong>116,20\u20ac in totale:</strong> 42,70\u20ac di contributo amministrativo (via PagoPA) + 73,50\u20ac di contrassegno telematico (marca da bollo). Pi\u00f9 le foto tessera (~5-10\u20ac)." },
  { q: "Quanto tempo ci vuole per avere il passaporto?", a: "In condizioni normali, <strong>10-15 giorni lavorativi</strong>. Nei periodi di punta pu\u00f2 allungarsi a 3-4 settimane. Il problema vero \u00e8 trovare l\u2019appuntamento." },
  { q: "Il passaporto si rinnova?", a: "<strong>No, dal 2014 non esiste pi\u00f9 il rinnovo.</strong> Quando scade devi fare un passaporto nuovo da zero: stessa procedura, stessi costi." },
  { q: "Non trovo appuntamenti disponibili, come faccio?", a: "Collegati <strong>nelle prime ore del mattino</strong> (6-8): \u00e8 quando vengono rilasciati i nuovi slot. Se hai urgenza documentata, puoi accedere all\u2019agenda prioritaria." },
  { q: "Posso fare il passaporto in Posta?", a: "S\u00ec, dal 2024 con il <strong>Progetto Polis</strong>. Per ora nei comuni sotto 15.000 abitanti, ma si sta estendendo." },
  { q: "Serve il passaporto per viaggiare in Europa?", a: "<strong>No, per i Paesi UE basta la carta d\u2019identit\u00e0</strong> valida per l\u2019espatrio (CIE). Il passaporto serve per i Paesi extra-UE." },
  { q: "Il passaporto per i minori come funziona?", a: "Anche i minorenni devono avere un passaporto individuale. Servono <strong>entrambi i genitori</strong> presenti o l\u2019autorizzazione del giudice." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Passaporto 2026: come richiederlo, costi, documenti e tempi', description: 'Come richiedere il passaporto nel 2026.', url: '/passaporto', image: 'ogpassaporto.png', datePublished: '2026-03-11', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];
  return (
    <>
      <SchemaOrg schemas={schemas} />
      <GuidePassaportoContent faqItems={faqItems} />
    </>
  );
}
