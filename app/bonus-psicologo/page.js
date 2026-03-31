import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideBonusPsicologoContent from './GuideBonusPsicologoContent';
export const metadata = {
  title: 'Come Richiedere il Bonus Psicologo nel 2026: fino a 1.500\u20ac e Domanda INPS',
  description: 'Bonus psicologo 2026: contributo fino a 1.500\u20ac per sedute di psicoterapia. Chi pu\u00f2 richiederlo, importi per ISEE, come fare domanda INPS e come usarlo.',
  keywords: ['bonus psicologo 2026','bonus psicologo domanda','bonus psicologo importo','bonus psicologo ISEE','INPS psicologo','sedute psicoterapia gratis'],
  alternates: { canonical: 'https://zeroburocrazia.it/bonus-psicologo' },
  openGraph: { title: 'Bonus Psicologo 2026: fino a 1.500\u20ac e Domanda INPS', url: 'https://zeroburocrazia.it/bonus-psicologo', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogbonuspsicologo.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogbonuspsicologo.png'] },
};
const faqItems = [
  { q: "Quando si pu\u00f2 fare domanda per il bonus psicologo 2026?", a: "La data non \u00e8 ancora stata comunicata. Nel 2025 la finestra era dal 15 settembre al 14 novembre. Per il 2026 si stima un periodo simile. <strong>Monitora il sito INPS</strong> per l\u2019apertura ufficiale." },
  { q: "Serve una diagnosi medica per richiedere il bonus?", a: "<strong>No.</strong> Non serve nessuna prescrizione o diagnosi. Basta dichiarare un disagio psicologico (ansia, stress, depressione, fragilit\u00e0 emotiva) e avere un ISEE valido." },
  { q: "Il bonus vale anche per sedute online?", a: "<strong>S\u00ec.</strong> Il bonus copre anche sedute di psicoterapia online, purch\u00e9 il professionista sia iscritto all\u2019Albo e abbia aderito all\u2019iniziativa INPS." },
  { q: "Posso richiedere il bonus per mio figlio minorenne?", a: "<strong>S\u00ec.</strong> La domanda va presentata dal genitore o tutore legale. L\u2019ISEE utilizzato \u00e8 quello del nucleo familiare del minore." },
  { q: "Quanto tempo ho per usare il bonus dopo l\u2019ammissione?", a: "Hai <strong>270 giorni</strong> dall\u2019accoglimento per usare tutto l\u2019importo. Ma devi fare almeno una seduta entro 60 giorni, altrimenti il bonus decade." },
  { q: "Se non rientro in graduatoria, posso essere ammesso dopo?", a: "<strong>S\u00ec.</strong> L\u2019INPS procede allo scorrimento delle graduatorie quando qualcuno non usa il bonus o decade per mancato utilizzo nei 60 giorni." },
  { q: "Posso scegliere qualsiasi psicologo?", a: "<strong>No.</strong> Il professionista deve essere iscritto all\u2019Albo degli Psicologi e aver aderito all\u2019iniziativa. L\u2019elenco \u00e8 disponibile sul portale INPS e sul sito del CNOP." },
  { q: "Il bonus psicologo \u00e8 compatibile con la detrazione IRPEF?", a: "Le spese di psicoterapia <strong>non coperte dal bonus</strong> possono essere portate in detrazione al 19% nel 730. Le spese coperte dal bonus no, perch\u00e9 le ha gi\u00e0 pagate lo Stato." },
];
export default function Page() {
  const schemas = [articleSchema({ title: 'Bonus psicologo 2026: fino a 1.500\u20ac, requisiti ISEE e domanda INPS', description: 'Bonus psicologo 2026: come richiederlo, importi e come usarlo.', url: '/bonus-psicologo', image: 'ogbonuspsicologo.png', datePublished: '2026-03-15', dateModified: '2026-03-28' }), faqSchema(faqItems)];
  return (<><SchemaOrg schemas={schemas} /><GuideBonusPsicologoContent faqItems={faqItems} /></>);
}
