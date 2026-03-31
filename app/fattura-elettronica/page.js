import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideFatturaContent from './GuideFatturaContent';

export const metadata = {
  title: 'Come Fare la Fattura Elettronica nel 2026: Guida Completa',
  description: 'Fattura elettronica 2026: come funziona, software gratuiti, dati obbligatori, marca da bollo, conservazione e errori da evitare. Guida gratuita.',
  keywords: ['fattura elettronica','fattura elettronica 2026','come fare fattura','SDI','marca da bollo fattura','software fatturazione','fattura forfettario'],
  alternates: { canonical: 'https://zeroburocrazia.it/fattura-elettronica' },
  openGraph: { title: 'Fattura Elettronica 2026: Come Farla, Software e Obblighi', url: 'https://zeroburocrazia.it/fattura-elettronica', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogfattura.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogfattura.png'] },
};

const faqItems = [
  { q: "Devo fare la fattura elettronica anche se sono forfettario?", a: "<strong>S\u00ec, dal 2024 \u00e8 obbligatoria per tutti</strong>, compresi i forfettari. Ogni fattura deve essere in formato XML e inviata al SdI." },
  { q: "Posso fare la fattura elettronica gratis?", a: "<strong>S\u00ec.</strong> L\u2019Agenzia delle Entrate offre un servizio gratuito (Fatture e Corrispettivi). Funziona bene per poche fatture al mese." },
  { q: "Quanto tempo ho per emettere la fattura?", a: "Fatture <strong>immediate</strong>: 12 giorni. Fatture <strong>differite</strong>: entro il 15 del mese successivo." },
  { q: "La marca da bollo da 2\u20ac: quando serve?", a: "Sulle fatture <strong>esenti IVA superiori a 77,47\u20ac</strong>. In forfettario, tutte le fatture sopra 77,47\u20ac. Il bollo \u00e8 virtuale: si paga a fine trimestre." },
  { q: "Devo conservare le fatture? Per quanto?", a: "<strong>S\u00ec, per 10 anni.</strong> La conservazione deve essere digitale a norma. Il servizio AE la include gratuitamente." },
  { q: "Cosa succede se sbaglio una fattura?", a: "Emetti una <strong>nota di credito</strong> per annullarla, poi rifai la fattura corretta. Non si possono cancellare fatture gi\u00e0 inviate al SdI." },
  { q: "Il cliente privato senza P.IVA: come fatturo?", a: "Codice fiscale del cliente, codice destinatario <strong>0000000</strong> (sette zeri). La fattura va nel cassetto fiscale del cliente." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Fattura elettronica 2026: come farla e software', description: 'Come fare la fattura elettronica nel 2026.', url: '/fattura-elettronica', image: 'ogfattura.png', datePublished: '2026-03-04', dateModified: '2026-03-31' }),
    faqSchema(faqItems),
  ];
  return (<><SchemaOrg schemas={schemas} /><GuideFatturaContent faqItems={faqItems} /></>);
}
