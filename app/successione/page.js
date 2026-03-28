import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import SuccessioneGuide from './SuccessioneGuide';
export const metadata = {
  title: 'Come Fare la Successione nel 2026: Documenti, Costi, Imposte e Procedura',
  description: 'Dichiarazione di successione 2026: documenti necessari, imposte e franchigie, costi CAF vs notaio, scadenza 12 mesi, autoliquidazione. Guida gratuita.',
  keywords: ['dichiarazione successione 2026','imposta successione','franchigia successione','successione documenti','successione costi','successione entro 12 mesi','SuccessioniOnLine'],
  alternates: { canonical: 'https://zeroburocrazia.it/successione' },
  openGraph: { title: 'Come Fare la Successione nel 2026: Documenti, Costi, Imposte e Procedura', url: 'https://zeroburocrazia.it/successione', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogsuccessione.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogsuccessione.png'] },
};
const faqItems = [
  { q: "Entro quanto tempo va fatta la successione?", a: "Entro <strong>12 mesi</strong> dalla data del decesso. Dopo scattano sanzioni dal 120% al 240% dell\u2019imposta dovuta, pi\u00f9 interessi." },
  { q: "Quanto costa fare la successione al CAF?", a: "Per una successione standard (coniuge + figli, qualche immobile): <strong>500-800\u20ac</strong> di parcella + imposte. Il notaio costa 1.000-3.000\u20ac+." },
  { q: "Se eredito meno di 1 milione di euro pago qualcosa?", a: "Se sei <strong>figlio o coniuge</strong>, l\u2019imposta di successione \u00e8 zero sotto la franchigia di 1.000.000\u20ac. Per\u00f2 se ci sono immobili, paghi le imposte ipotecarie e catastali (200+200\u20ac se \u00e8 prima casa)." },
  { q: "Posso rinunciare all\u2019eredit\u00e0?", a: "<strong>S\u00ec.</strong> Se i debiti superano i beni, puoi rinunciare con dichiarazione in Tribunale o dal notaio. Se sei nel possesso dei beni del defunto, hai 3 mesi per rinunciare. Altrimenti 10 anni." },
  { q: "La dichiarazione di successione la posso fare da solo?", a: "<strong>No.</strong> Va presentata in via telematica tramite il software SuccessioniOnLine. Serve un intermediario abilitato: CAF, commercialista o notaio." },
  { q: "Le polizze vita rientrano nella successione?", a: "Le polizze vita con <strong>beneficiario designato</strong> sono escluse dalla successione e non pagano imposta. Vengono pagate direttamente al beneficiario dall\u2019assicurazione." },
  { q: "Se il defunto aveva solo un conto corrente sotto 100.000\u20ac?", a: "Se l\u2019eredit\u00e0 va a coniuge/figli e il valore totale \u00e8 <strong>sotto 100.000\u20ac senza immobili</strong>, la dichiarazione non \u00e8 obbligatoria. Per\u00f2 la banca potrebbe chiederla comunque per sbloccare il conto." },
  { q: "Cosa cambia dal 2025 nella successione?", a: "Il sistema di <strong>autoliquidazione</strong>: le imposte si calcolano e pagano al momento della dichiarazione, senza aspettare l\u2019avviso dall\u2019Agenzia. Pi\u00f9 veloce ma richiede pi\u00f9 precisione nel calcolo." },
];
export default function Page() {
  const schemas = [articleSchema({ title: 'Come fare la successione nel 2026: documenti, imposte e procedura', description: 'Dichiarazione di successione 2026: franchigie, imposte, costi e procedura passo per passo.', url: '/successione', image: 'ogsuccessione.png', datePublished: '2026-03-15', dateModified: '2026-03-28' }), faqSchema(faqItems)];
  return (<><SchemaOrg schemas={schemas} /><SuccessioneGuide faqItems={faqItems} /></>);
}
