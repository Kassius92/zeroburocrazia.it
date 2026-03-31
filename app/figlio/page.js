import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideFiglioContent from './GuideFiglioContent';

export const metadata = {
  title: 'Come Prepararsi a un Figlio nel 2026: Bonus, Congedo e Documenti',
  description: 'Aspetti un figlio nel 2026? Congedo maternit\u00e0 e paternit\u00e0, assegno unico, bonus nuovi nati 1.000\u20ac, bonus nido e tutti i documenti da fare. Guida gratuita aggiornata.',
  keywords: ['figlio 2026','congedo maternit\u00e0','congedo paternit\u00e0','assegno unico','bonus nuovi nati','bonus nido','documenti nascita','INPS maternit\u00e0','bonus bebè'],
  alternates: { canonical: 'https://zeroburocrazia.it/figlio' },
  openGraph: { title: 'Come Prepararsi a un Figlio nel 2026: Bonus, Congedo e Documenti', description: 'Aspetti un figlio nel 2026? Tutti i bonus e i congedi spiegati semplice. Guida gratuita.', url: 'https://zeroburocrazia.it/figlio', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogfiglio.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogfiglio.png'] },
};

const faqItems = [
  { q: "Sono lavoratrice autonoma \u2014 ho diritto al congedo?", a: "<strong>S\u00ec, ma con regole diverse.</strong> Le lavoratrici in gestione separata INPS hanno diritto a 5 mesi di indennit\u00e0 all\u201980% del reddito, con almeno 1 mese di contributi nei 12 mesi precedenti. Le libere professioniste con cassa propria ricevono l\u2019indennit\u00e0 dalla loro cassa." },
  { q: "Il pap\u00e0 pu\u00f2 prendere il congedo parentale al posto della mamma?", a: "<strong>S\u00ec.</strong> Gli 11 mesi di congedo parentale si dividono tra i due genitori come preferiscono. I 3 mesi all\u201980% spettano a ciascun genitore individualmente \u2014 in teoria la coppia pu\u00f2 avere 6 mesi totali all\u201980%." },
  { q: "Posso lavorare durante il congedo parentale?", a: "<strong>No.</strong> Durante il congedo parentale non puoi lavorare. Se lo fai, perdi l\u2019indennit\u00e0 per quei giorni. Per\u00f2 puoi prendere il congedo anche a ore o a giorni \u2014 non deve essere per forza continuativo." },
  { q: "Serve il matrimonio per i diritti del padre?", a: "<strong>No.</strong> Congedo di paternit\u00e0, congedo parentale e assegno unico spettano al padre indipendentemente dal matrimonio, purch\u00e9 il figlio sia riconosciuto." },
  { q: "Sono straniera residente in Italia \u2014 ho diritto ai bonus?", a: "<strong>S\u00ec, nella maggior parte dei casi.</strong> L\u2019assegno unico richiede residenza in Italia e cittadinanza UE (o permesso di soggiorno di lungo periodo). Bonus nuovi nati e bonus nido seguono le stesse regole." },
  { q: "Posso essere licenziata durante la gravidanza?", a: "<strong>No, salvo eccezioni rarissime.</strong> Il divieto di licenziamento copre tutta la gravidanza fino al compimento di 1 anno del bambino. Un licenziamento in violazione \u00e8 nullo." },
  { q: "L\u2019assegno unico va dichiarato nel 730?", a: "<strong>No, \u00e8 esente.</strong> L\u2019assegno unico non fa reddito e non va dichiarato. Anche il bonus nuovi nati e il bonus nido sono esenti da IRPEF." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Aspetto un figlio nel 2026: tutti i bonus e le pratiche', description: 'Aspetti un figlio nel 2026? Guida completa su congedi, assegno unico, bonus nido e documenti.', url: '/figlio', image: 'ogfiglio.png', datePublished: '2026-03-04', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];
  return (<><SchemaOrg schemas={schemas} /><GuideFiglioContent faqItems={faqItems} /></>);
}
