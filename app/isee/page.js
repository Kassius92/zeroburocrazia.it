import GuideIseeContent from './GuideIseeContent';
import { SchemaOrg, articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: "ISEE 2026: Come Farlo, Documenti Necessari e Simulazione",
  description: "ISEE 2026: come si fa, documenti necessari, dove farlo gratis, quanto vale e a cosa serve. Guida gratuita aggiornata.",
  alternates: { canonical: 'https://zeroburocrazia.it/isee' },
  openGraph: {
    title: "ISEE 2026: Come Farlo, Documenti Necessari e Simulazione",
    description: "ISEE 2026: come si fa, documenti necessari, dove farlo gratis e a cosa serve. Guida gratuita aggiornata.",
    url: 'https://zeroburocrazia.it/isee',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/og-isee.png', width: 1200, height: 630 }],
  },
};

const faqItems = [
  { q: "Quanto dura l'ISEE?", a: "Dal giorno in cui lo fai fino al 31 dicembre dello stesso anno. Se lo fai a gennaio vale 12 mesi, se lo fai a ottobre vale solo 3. Dal 1° gennaio serve un ISEE nuovo." },
  { q: "Vivo con i miei genitori, il mio ISEE include i loro redditi?", a: "Sì, se risulti nel loro stato di famiglia. Il nucleo familiare ISEE coincide con chi è nello stato di famiglia anagrafico. Per avere un ISEE indipendente devi cambiare residenza." },
  { q: "Posso fare l'ISEE da solo senza CAF?", a: "Sì, dal sito dell'INPS. La DSU precompilata ha già quasi tutti i dati. Devi solo controllare, aggiungere quello che manca e confermare. Serve lo SPID." },
  { q: "Ho sbagliato qualcosa nell'ISEE, posso correggerlo?", a: "Sì. Puoi presentare una nuova DSU quando vuoi — la nuova sostituisce la vecchia. Se hai già ricevuto bonus sulla base di un ISEE sbagliato, potresti dover restituire i soldi." },
  { q: "Cos'è l'ISEE corrente?", a: "È un ISEE aggiornato alla tua situazione di oggi. Serve se il tuo reddito è calato almeno del 25% rispetto a quello dichiarato. Va rinnovato ogni 6 mesi." },
  { q: "ISEE e 730 sono la stessa cosa?", a: "No. Il 730 serve a pagare le tasse e recuperare detrazioni. L'ISEE serve a chiedere bonus e agevolazioni. Sono indipendenti." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: "Guida completa all'ISEE 2026: come farlo e a cosa serve",
      description: "Come fare l'ISEE nel 2026: documenti necessari, dove farlo, quanto vale e a cosa serve.",
      url: '/isee',
      image: 'og-isee.png',
      datePublished: '2026-03-04',
      dateModified: '2026-03-31',
    }),
    faqSchema(faqItems),
  ];

  return (
    <>
      <SchemaOrg schemas={schemas} />
      <GuideIseeContent faqItems={faqItems} />
    </>
  );
}
