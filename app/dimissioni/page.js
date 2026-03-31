import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideDimissioniContent from './GuideDimissioniContent';

export const metadata = {
  title: 'Come Dare le Dimissioni nel 2026: Procedura Online, Preavviso e TFR',
  description: 'Dimissioni volontarie 2026: procedura telematica, preavviso per CCNL, TFR, ultima busta paga e giusta causa. Guida gratuita passo per passo.',
  keywords: ['dimissioni','dimissioni volontarie','dimissioni online','preavviso dimissioni','TFR dimissioni','dimissioni giusta causa','procedura dimissioni 2026'],
  alternates: { canonical: 'https://zeroburocrazia.it/dimissioni' },
  openGraph: { title: 'Come Dare le Dimissioni nel 2026: Procedura, Preavviso e TFR', url: 'https://zeroburocrazia.it/dimissioni', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogdimissioni.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogdimissioni.png'] },
};

const faqItems = [
  { q: "Posso revocare le dimissioni?", a: "<strong>S\u00ec, entro 7 giorni</strong> dall\u2019invio del modulo telematico. Accedi di nuovo al portale e revoca. Dopo i 7 giorni non \u00e8 pi\u00f9 possibile." },
  { q: "Cosa succede se non rispetto il preavviso?", a: "Il datore pu\u00f2 <strong>trattenerti dall\u2019ultima busta paga</strong> l\u2019indennit\u00e0 sostitutiva del preavviso. Per\u00f2 puoi accordarti per rinunciarci." },
  { q: "Le ferie non godute vengono pagate?", a: "<strong>S\u00ec.</strong> Nell\u2019ultima busta paga ricevi: stipendio, ferie e permessi non goduti, ratei di tredicesima, e il TFR." },
  { q: "Le dimissioni durante il periodo di prova?", a: "Durante il periodo di prova <strong>non serve la procedura telematica</strong>. Basta una comunicazione scritta, anche un\u2019email." },
  { q: "Posso dimettermi se sono in malattia?", a: "<strong>S\u00ec</strong>, ma la malattia <strong>sospende il preavviso</strong>: la data di fine rapporto slitta di tanti giorni quanti sono quelli di malattia." },
  { q: "Ho diritto alla NASpI se mi dimetto?", a: "<strong>No</strong>, le dimissioni volontarie non danno diritto alla NASpI. Fanno eccezione le dimissioni per <strong>giusta causa</strong> e durante il primo anno di vita del figlio." },
  { q: "Chi \u00e8 escluso dalla procedura telematica?", a: "Dipendenti pubblici, lavoratori domestici, chi \u00e8 in periodo di prova, chi si dimette in sede conciliativa. I genitori con figli sotto 3 anni devono convalidare all\u2019Ispettorato." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Come dare le dimissioni nel 2026', description: 'Procedura telematica, preavviso, TFR e giusta causa.', url: '/dimissioni', image: 'ogdimissioni.png', datePublished: '2026-03-04', dateModified: '2026-03-31' }),
    faqSchema(faqItems),
  ];
  return (<><SchemaOrg schemas={schemas} /><GuideDimissioniContent faqItems={faqItems} /></>);
}
