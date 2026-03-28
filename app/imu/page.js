import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import ImuGuide from './ImuGuide';

export const metadata = {
  title: 'Come Calcolare e Pagare l\u2019IMU nel 2026: Aliquote, Esenzioni e Scadenze',
  description: 'IMU 2026: chi paga, chi \u00e8 esente, come si calcola, aliquote, scadenze 16 giugno e 16 dicembre, F24. Prima casa esente, seconda casa, comodato. Guida gratuita.',
  keywords: ['IMU 2026','calcolo IMU','IMU prima casa','IMU seconda casa','esenzione IMU','scadenze IMU','IMU comodato','aliquote IMU','F24 IMU','IMU agevolazioni'],
  alternates: { canonical: 'https://zeroburocrazia.it/imu' },
  openGraph: { title: 'IMU 2026: Calcolo, Aliquote, Esenzioni e Scadenze', description: 'IMU 2026: chi paga, esenzioni, calcolo, aliquote, scadenze. Guida gratuita.', url: 'https://zeroburocrazia.it/imu', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogimu.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogimu.png'] },
};

const faqItems = [
  { q: "La prima casa paga l\u2019IMU?", a: "<strong>No, se ci abiti.</strong> L\u2019abitazione principale (dove hai residenza anagrafica e dimora abituale) \u00e8 esente dall\u2019IMU, tranne se \u00e8 di lusso (categorie A/1, A/8, A/9). L\u2019esenzione vale anche per una pertinenza per tipo (un garage C/6, una cantina C/2, una tettoia C/7)." },
  { q: "Come trovo la rendita catastale del mio immobile?", a: "Nella <strong>visura catastale</strong>, che puoi richiedere gratis online sul sito dell\u2019Agenzia delle Entrate con SPID/CIE. La trovi anche nell\u2019atto di compravendita o nelle bollette IMU degli anni precedenti." },
  { q: "Cosa succede se non pago l\u2019IMU?", a: "Puoi usare il <strong>ravvedimento operoso</strong>: paghi con una sanzione ridotta che cresce col ritardo. Entro 14 giorni: 0,1%/giorno. Entro 30 giorni: 1,25%. Entro 90 giorni: 1,67%. Oltre 1 anno: 3,75%." },
  { q: "Ho una sola casa ma non ci abito: pago l\u2019IMU?", a: "<strong>S\u00ec.</strong> L\u2019esenzione prima casa richiede residenza + dimora abituale. Se possiedi una casa ma vivi altrove, quella casa \u00e8 tassata come seconda casa, anche se \u00e8 l\u2019unica che hai." },
  { q: "Due coniugi con due case diverse: pagano?", a: "Dopo la sentenza della Corte Costituzionale 209/2022, <strong>ognuno pu\u00f2 avere la propria abitazione principale esente</strong>, a patto che ci risieda e dimori. Non conta pi\u00f9 il vincolo del nucleo familiare." },
  { q: "Come funziona il comodato al figlio?", a: "Se presti la casa a un figlio (o genitore) che la usa come abitazione principale, la <strong>base imponibile si riduce del 50%</strong>. Condizioni: contratto di comodato registrato, proprietario residente nello stesso Comune, non possedere altri immobili in Italia." },
  { q: "Le aliquote sono uguali in tutta Italia?", a: "<strong>No, ogni Comune decide le proprie aliquote</strong> entro limiti di legge. L\u2019aliquota base per la seconda casa \u00e8 8,6\u2030, ma il Comune pu\u00f2 portarla fino al 10,6\u2030. Controlla sul Portale del Federalismo Fiscale." },
  { q: "L\u2019IMU si pu\u00f2 detrarre dal 730?", a: "<strong>S\u00ec, ma solo per gli immobili a uso produttivo (categoria D).</strong> Per le abitazioni no. Tuttavia, se affitti l\u2019immobile, l\u2019IMU pagata riduce la base imponibile ai fini IRPEF in certi casi." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'IMU 2026: calcolo, aliquote, esenzioni e scadenze', description: 'Come calcolare l\u2019IMU nel 2026: chi paga, chi \u00e8 esente, formula, aliquote, scadenze e F24.', url: '/imu', image: 'ogimu.png', datePublished: '2026-03-11', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];
  return (<><SchemaOrg schemas={schemas} /><ImuGuide faqItems={faqItems} /></>);
}
