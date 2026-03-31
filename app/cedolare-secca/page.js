import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideCedolareContent from './GuideCedolareContent';

export const metadata = {
  title: 'Come Funziona la Cedolare Secca nel 2026: Aliquote, Calcolo e Quando Conviene',
  description: 'Cedolare secca 2026: cos\u2019\u00e8, come funziona, aliquote 21% e 10%, quando conviene rispetto all\u2019IRPEF, come si paga con F24, novit\u00e0 affitti brevi. Guida gratuita.',
  keywords: ['cedolare secca','cedolare secca 2026','aliquota cedolare secca','cedolare secca affitti brevi','cedolare secca 10%','quando conviene cedolare','F24 cedolare secca','canone concordato'],
  alternates: { canonical: 'https://zeroburocrazia.it/cedolare-secca' },
  openGraph: { title: 'Cedolare Secca 2026: Aliquote, Calcolo e Quando Conviene', url: 'https://zeroburocrazia.it/cedolare-secca', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogcedolaresecca.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogcedolaresecca.png'] },
};

const faqItems = [
  { q: "Cos\u2019\u00e8 la cedolare secca in parole semplici?", a: "\u00c8 una <strong>tassa piatta sugli affitti</strong>. Invece di sommare il canone al tuo reddito e pagare l\u2019IRPEF con le aliquote progressive (23-43%), paghi un\u2019imposta fissa del 21% o del 10% sul canone. In pi\u00f9 non paghi imposta di registro e bollo sul contratto." },
  { q: "Chi pu\u00f2 scegliere la cedolare secca?", a: "<strong>Solo le persone fisiche</strong> che affittano un immobile a uso abitativo, fuori dall\u2019attivit\u00e0 d\u2019impresa. Funziona anche se l\u2019inquilino \u00e8 una societ\u00e0, purch\u00e9 l\u2019immobile resti ad uso abitativo (Cassazione 12395/2024)." },
  { q: "La cedolare secca conviene sempre?", a: "<strong>No, dipende dal tuo reddito.</strong> Conviene quasi sempre a chi ha un reddito complessivo superiore a 28.000\u20ac, perch\u00e9 l\u2019aliquota IRPEF su quella fascia \u00e8 33%. Con redditi bassi (sotto i 15.000\u20ac), l\u2019IRPEF al 23% con la deduzione forfettaria del 5% potrebbe costare meno del 21%." },
  { q: "Posso passare alla cedolare secca su un contratto gi\u00e0 in corso?", a: "<strong>S\u00ec.</strong> Puoi optare nelle annualit\u00e0 successive alla registrazione, entro 30 giorni dalla scadenza dell\u2019annualit\u00e0. Devi comunicarlo all\u2019inquilino con raccomandata e presentare il modello RLI." },
  { q: "Come faccio a rinunciare alla cedolare secca?", a: "Puoi revocarla a ogni annualit\u00e0 successiva, sempre entro 30 giorni dalla scadenza. La revoca vale dalla nuova annualit\u00e0 e da quel momento torni a pagare IRPEF, imposta di registro e bollo." },
  { q: "La cedolare secca influisce sull\u2019ISEE?", a: "<strong>S\u00ec.</strong> Il reddito tassato con cedolare secca viene comunque conteggiato nel calcolo dell\u2019ISEE e per determinare se un familiare \u00e8 a carico. Non sfugge al conteggio, anche se non entra nel reddito complessivo IRPEF." },
  { q: "Quanti appartamenti posso affittare in affitto breve con cedolare secca?", a: "Dal 2026, massimo <strong>2 appartamenti</strong> (prima erano 4). Dal terzo, l\u2019attivit\u00e0 \u00e8 considerata imprenditoriale e serve la partita IVA." },
  { q: "Devo comunicare all\u2019inquilino che scelgo la cedolare secca?", a: "<strong>S\u00ec, con raccomandata</strong>. Con la cedolare rinunci ad aggiornare il canone (incluso adeguamento ISTAT), e l\u2019inquilino deve saperlo." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Cedolare secca 2026: aliquote, calcolo e quando conviene', description: 'Guida completa alla cedolare secca: aliquote 21% e 10%, confronto IRPEF, affitti brevi 2026.', url: '/cedolare-secca', image: 'ogcedolaresecca.png', datePublished: '2026-03-11', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];
  return (
    <>
      <SchemaOrg schemas={schemas} />
      <GuideCedolareContent faqItems={faqItems} />
    </>
  );
}
