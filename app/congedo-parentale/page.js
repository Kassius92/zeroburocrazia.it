import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideCongedoContent from './GuideCongedoContent';

export const metadata = {
  title: 'Come Richiedere il Congedo Parentale nel 2026: Mesi, 80% e Domanda INPS',
  description: 'Congedo parentale 2026: quanti mesi spettano, indennit\u00e0 80% e 30%, novit\u00e0 fino a 14 anni, come fare domanda INPS. Guida gratuita per mamme e pap\u00e0.',
  keywords: ['congedo parentale','congedo parentale 2026','indennit\u00e0 congedo parentale','mesi congedo parentale','domanda INPS congedo','congedo parentale 80%','congedo parentale a ore'],
  alternates: { canonical: 'https://zeroburocrazia.it/congedo-parentale' },
  openGraph: { title: 'Congedo Parentale 2026: Mesi, Indennit\u00e0 80%, Come Fare Domanda INPS', description: 'Congedo parentale 2026: quanti mesi, indennit\u00e0 80%, domanda INPS. Guida gratuita.', url: 'https://zeroburocrazia.it/congedo-parentale', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogcongedoparentale.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogcongedoparentale.png'] },
};

const faqItems = [
  { q: "Il congedo parentale \u00e8 obbligatorio?", a: "<strong>No, \u00e8 facoltativo.</strong> Quello obbligatorio \u00e8 il congedo di maternit\u00e0 (5 mesi per la mamma) e il congedo di paternit\u00e0 (10 giorni per il pap\u00e0). Il congedo parentale \u00e8 un diritto che puoi scegliere di usare o no." },
  { q: "Posso prenderlo a ore invece che a giorni?", a: "<strong>S\u00ec.</strong> Il congedo parentale pu\u00f2 essere fruito a giornate intere oppure a ore. La modalit\u00e0 oraria ti permette di lavorare mezza giornata e stare con il bambino l\u2019altra met\u00e0. Verifica con il tuo datore di lavoro le modalit\u00e0 specifiche del tuo CCNL." },
  { q: "Mamma e pap\u00e0 possono prendere il congedo nello stesso periodo?", a: "<strong>S\u00ec.</strong> Entrambi i genitori possono assentarsi contemporaneamente. I mesi si contano separatamente: se la mamma prende 1 mese e il pap\u00e0 1 mese nello stesso periodo, ne hanno usati 2 in totale." },
  { q: "Ho un contratto a tempo determinato, mi spetta?", a: "S\u00ec, ti spetta <strong>durante la validit\u00e0 del contratto</strong>. Per\u00f2 l\u2019indennit\u00e0 non viene anticipata dal datore di lavoro: devi chiederla direttamente all\u2019INPS." },
  { q: "Quanto preavviso devo dare al datore di lavoro?", a: "<strong>Almeno 5 giorni</strong> prima dell\u2019inizio del congedo (2 giorni se lo prendi a ore). Comunica le date per iscritto, via email o PEC." },
  { q: "Il congedo parentale incide sulla pensione?", a: "I periodi di congedo sono coperti da <strong>contribuzione figurativa</strong>. Significa che ai fini della pensione \u00e8 come se avessi lavorato: non perdi anzianit\u00e0 contributiva." },
  { q: "Sono un genitore single, quanti mesi ho?", a: "Se sei genitore <strong>unico o affidatario esclusivo</strong>, hai diritto fino a <strong>11 mesi</strong> di congedo parentale, di cui 9 indennizzati." },
  { q: "E se il bambino si ammala?", a: "<strong>No, sono due cose diverse.</strong> Il congedo per malattia del figlio \u00e8 un diritto separato. Dal 2026: illimitato sotto i 3 anni, 10 giorni/anno per genitore tra 3 e 14 anni. Non \u00e8 retribuito ma \u00e8 coperto da contributi figurativi." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Congedo parentale 2026: mesi, indennit\u00e0, domanda INPS', description: 'Come funziona il congedo parentale nel 2026: durata, indennit\u00e0 80% e 30%, novit\u00e0, domanda INPS.', url: '/congedo-parentale', image: 'ogcongedoparentale.png', datePublished: '2026-03-11', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];
  return (<><SchemaOrg schemas={schemas} /><GuideCongedoContent faqItems={faqItems} /></>);
}
