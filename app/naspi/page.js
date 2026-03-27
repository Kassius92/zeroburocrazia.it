import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import NaspiGuide from './NaspiGuide';

export const metadata = {
  title: 'Come Richiedere la NASpI nel 2026: Requisiti, Importo e Durata',
  description: 'NASpI 2026: chi ne ha diritto, come si calcola, quanto dura, come fare domanda INPS entro 68 giorni. Guida gratuita aggiornata.',
  keywords: ['NASpI','NASpI 2026','disoccupazione','come richiedere NASpI','NASpI importo','NASpI durata','NASpI requisiti','NASpI anticipata'],
  alternates: { canonical: 'https://zeroburocrazia.it/naspi' },
  openGraph: { title: 'Come Richiedere la NASpI nel 2026', url: 'https://zeroburocrazia.it/naspi', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ognaspi.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ognaspi.png'] },
};

const faqItems = [
  { q: "Ho dato le dimissioni: ho diritto alla NASpI?", a: "<strong>Dipende.</strong> Dimissioni volontarie normali: no. Per <strong>giusta causa</strong> (stipendio non pagato, mobbing): sì. Durante maternità/paternità: sì." },
  { q: "Quanto tempo ho per fare domanda?", a: "<strong>68 giorni</strong> dalla cessazione. Dopo, perdi tutto. Entro 8 giorni la NASpI parte dall’8° giorno." },
  { q: "Quanto ci mette l’INPS a pagare?", a: "Primo pagamento in <strong>30-45 giorni</strong>. I successivi sono mensili." },
  { q: "Posso lavorare mentre prendo la NASpI?", a: "<strong>Sì, con limiti.</strong> Dipendente: max 8.500€/anno. Autonomo: max 5.500€. Devi comunicarlo con il NASpI-COM entro 30 giorni." },
  { q: "La NASpI conta per la pensione?", a: "<strong>Sì.</strong> Contribuzione figurativa gratuita e automatica." },
  { q: "Quanto dura?", a: "Metà delle settimane lavorate negli ultimi 4 anni. Massimo 24 mesi." },
  { q: "Cos’è la NASpI anticipata?", a: "Tutta la NASpI residua in anticipo per aprire un’attività. Dal 2026: 70% subito, 30% dopo." },
];

const schemas = [
  articleSchema({ title: 'NASpI 2026: requisiti, importo, durata e come fare domanda', description: 'NASpI 2026: chi ne ha diritto, come si calcola, quanto dura, come fare domanda INPS.', url: '/naspi', image: 'ognaspi.png', datePublished: '2026-03-07', dateModified: '2026-03-27' }),
  faqSchema(faqItems),
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={schemas} />
      <NaspiGuide faqItems={faqItems} />
    </>
  );
}
