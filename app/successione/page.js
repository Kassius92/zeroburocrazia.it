import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideSuccessioneContent from './GuideSuccessioneContent';

export const metadata = {
  title: 'Come Fare la Successione nel 2026: Documenti, Costi, Imposte e Procedura',
  description: 'Dichiarazione di successione 2026: quando farla, documenti necessari, imposte, franchigie, costi del CAF e procedura telematica. Guida gratuita.',
  keywords: ['successione','dichiarazione successione','imposta successione','franchigia successione','successione costi','successione CAF','successione documenti'],
  alternates: { canonical: 'https://zeroburocrazia.it/successione' },
  openGraph: { title: 'Successione 2026: Documenti, Costi, Imposte e Procedura', url: 'https://zeroburocrazia.it/successione', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogsuccessione.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogsuccessione.png'] },
};

const faqItems = [
  { q: "Entro quanto tempo va fatta la successione?", a: "Entro <strong>12 mesi</strong> dalla data del decesso. Dopo scattano sanzioni dal 120% al 240% dell\u2019imposta dovuta, pi\u00f9 interessi." },
  { q: "Quanto costa fare la successione al CAF?", a: "Per una successione standard (coniuge + figli, qualche immobile): <strong>500-800\u20ac</strong> di parcella + imposte. Il notaio costa 1.000-3.000\u20ac+." },
  { q: "Se eredito meno di 1 milione pago qualcosa?", a: "Se sei <strong>figlio o coniuge</strong>, l\u2019imposta di successione \u00e8 zero sotto la franchigia di 1.000.000\u20ac. Per\u00f2 se ci sono immobili, paghi comunque le imposte ipotecarie e catastali (200+200\u20ac se \u00e8 prima casa)." },
  { q: "Posso rinunciare all\u2019eredit\u00e0?", a: "<strong>S\u00ec.</strong> Se i debiti superano i beni, puoi rinunciare con dichiarazione in Tribunale o dal notaio. Se convivi col defunto, hai 3 mesi. Altrimenti 10 anni." },
  { q: "La dichiarazione la posso fare da solo?", a: "<strong>No.</strong> Dal 2017 va presentata in via telematica tramite SuccessioniOnLine. Serve un intermediario: CAF, commercialista o notaio." },
  { q: "Le polizze vita rientrano nella successione?", a: "Le polizze vita con <strong>beneficiario designato</strong> sono escluse dalla successione e non pagano imposta." },
  { q: "Se il defunto aveva solo un conto sotto 100.000\u20ac?", a: "Se l\u2019eredit\u00e0 va a coniuge/figli, valore sotto 100.000\u20ac senza immobili, la dichiarazione <strong>non \u00e8 obbligatoria</strong>. La banca potrebbe chiederla comunque." },
  { q: "Cosa cambia dal 2025?", a: "Il sistema di <strong>autoliquidazione</strong>: le imposte si calcolano e pagano al momento della dichiarazione, senza aspettare l\u2019avviso dall\u2019Agenzia." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Successione 2026: documenti, costi, imposte e procedura', description: 'Come fare la dichiarazione di successione nel 2026.', url: '/successione', image: 'ogsuccessione.png', datePublished: '2026-03-20', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];
  return (<><SchemaOrg schemas={schemas} /><GuideSuccessioneContent faqItems={faqItems} /></>);
}
