import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideMiSposoContent from './GuideMiSposoContent';

export const metadata = {
  title: 'Come Sposarsi nel 2026: Documenti, Costi e Procedura Completa',
  description: 'Sposarsi nel 2026: documenti necessari, pubblicazioni, costi burocratici, comunione o separazione dei beni, congedo matrimoniale. Guida gratuita.',
  keywords: ['sposarsi','matrimonio 2026','documenti matrimonio','pubblicazioni matrimonio','comunione dei beni','separazione dei beni','congedo matrimoniale','matrimonio civile'],
  alternates: { canonical: 'https://zeroburocrazia.it/mi-sposo' },
  openGraph: { title: 'Come Sposarsi nel 2026: Documenti, Costi e Procedura', url: 'https://zeroburocrazia.it/mi-sposo', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogmisposo.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogmisposo.png'] },
};

const faqItems = [
  { q: "Quanto tempo prima devo iniziare le pratiche?", a: "<strong>Almeno 2-3 mesi prima.</strong> Le pubblicazioni richiedono 8 giorni di affissione + 3 giorni di attesa, e prima servono i documenti e l\u2019appuntamento in Comune." },
  { q: "Posso sposarmi in un Comune diverso da quello di residenza?", a: "<strong>S\u00ec.</strong> Le pubblicazioni si fanno nel Comune di residenza, ma la cerimonia pu\u00f2 essere ovunque. Serve una delega tra i Comuni." },
  { q: "Quanti testimoni servono?", a: "<strong>Due testimoni</strong>, maggiorenni e con documento d\u2019identit\u00e0 valido." },
  { q: "Il matrimonio religioso ha valore civile?", a: "<strong>S\u00ec, se concordatario.</strong> Il matrimonio cattolico celebrato secondo il Concordato ha effetti civili automatici. Anche alcune confessioni riconosciute (valdesi, ebrei, ecc.) hanno effetti civili." },
  { q: "Cosa cambia tra comunione e separazione dei beni?", a: "In <strong>comunione</strong> (default): tutto ci\u00f2 che comprate dopo il matrimonio \u00e8 di entrambi al 50%. In <strong>separazione</strong>: ognuno resta proprietario di ci\u00f2 che compra. Si pu\u00f2 cambiare dopo dal notaio (500-1.000\u20ac)." },
  { q: "Ho diritto al congedo matrimoniale?", a: "<strong>S\u00ec, 15 giorni di calendario</strong> retribuiti al 100%, da usare entro 30 giorni dal matrimonio. Spetta anche per le unioni civili." },
  { q: "Devo aggiornare i documenti dopo il matrimonio?", a: "<strong>S\u00ec.</strong> Carta d\u2019identit\u00e0, codice fiscale, tessera sanitaria, patente. Comunica al datore e alla banca. Il Comune aggiorna stato civile e nucleo automaticamente." },
  { q: "Esistono bonus per chi si sposa?", a: "Nel 2026 <strong>non esiste un bonus matrimonio statale</strong>. L\u2019unica agevolazione \u00e8 il congedo retribuito di 15 giorni. Sposarsi apre per\u00f2 la porta a: 730 congiunto, ISEE familiare, detrazioni per coniuge a carico." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Come sposarsi nel 2026: documenti, costi e procedura', description: 'Guida completa al matrimonio in Italia.', url: '/mi-sposo', image: 'ogmisposo.png', datePublished: '2026-03-11', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];
  return (<><SchemaOrg schemas={schemas} /><GuideMiSposoContent faqItems={faqItems} /></>);
}
