import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import BonusMobiliGuide from './BonusMobiliGuide';
export const metadata = {
  title: 'Come Ottenere il Bonus Mobili nel 2026: Detrazione 50% e Cosa Comprare',
  description: 'Bonus mobili 2026: detrazione 50% fino a 5.000\u20ac su mobili e grandi elettrodomestici. Come funziona, cosa comprare, come pagare e come detrarre nel 730.',
  keywords: ['bonus mobili 2026','detrazione mobili 50%','bonus mobili requisiti','cosa comprare bonus mobili','elettrodomestici bonus mobili','bonus mobili 730'],
  alternates: { canonical: 'https://zeroburocrazia.it/bonus-mobili' },
  openGraph: { title: 'Bonus Mobili 2026: Detrazione 50%, Cosa Comprare e Come Detrarre', url: 'https://zeroburocrazia.it/bonus-mobili', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogbonusmobili.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogbonusmobili.png'] },
};
const faqItems = [
  { q: "Posso avere il bonus mobili senza ristrutturazione?", a: "<strong>No.</strong> Il bonus mobili esiste solo se hai fatto (o stai facendo) lavori di ristrutturazione sull\u2019immobile. Deve essere almeno manutenzione straordinaria." },
  { q: "La manutenzione ordinaria conta?", a: "<strong>No per le singole unit\u00e0 abitative.</strong> Tinteggiare le pareti o cambiare i pavimenti non basta. Serve manutenzione straordinaria, restauro o ristrutturazione vera. Eccezione: la manutenzione ordinaria sulle parti comuni condominiali d\u00e0 diritto al bonus per gli arredi delle parti comuni." },
  { q: "Posso comprare i mobili prima di iniziare i lavori?", a: "<strong>No.</strong> La data di inizio lavori deve essere anteriore a quella dell\u2019acquisto dei mobili. Prima i lavori, poi i mobili." },
  { q: "Devo usare il bonifico parlante?", a: "<strong>No, non serve.</strong> Per il bonus mobili va bene un bonifico ordinario, una carta di credito o una carta di debito. Niente contanti." },
  { q: "Se ristruttura uno e compra l\u2019altro?", a: "Il bonus spetta a <strong>chi sostiene effettivamente la spesa</strong>. Se il coniuge paga i mobili ma la ristrutturazione \u00e8 intestata all\u2019altro, il bonus spetta a chi ha pagato i mobili, purch\u00e9 sia convivente o familiare del titolare." },
  { q: "Posso comprare mobili per una stanza diversa da quella ristrutturata?", a: "<strong>S\u00ec.</strong> I mobili possono essere destinati a qualsiasi ambiente dell\u2019immobile ristrutturato. Ristrutturi il bagno? Puoi comprare il divano per il soggiorno." },
  { q: "Il bonus vale anche per le seconde case?", a: "<strong>S\u00ec.</strong> Il bonus mobili si applica ugualmente a prima e seconda casa, con la stessa aliquota del 50% e lo stesso tetto di 5.000\u20ac." },
  { q: "Devo comunicare qualcosa all\u2019ENEA?", a: "Solo per alcuni elettrodomestici: forni, frigoriferi, lavatrici, lavastoviglie, piani cottura elettrici, lavasciuga. Ma la mancata comunicazione <strong>non fa perdere la detrazione</strong> (risoluzione AdE 46/E del 2019)." },
];
export default function Page() {
  const schemas = [articleSchema({ title: 'Bonus mobili 2026: come funziona, cosa comprare, come detrarre', description: 'Bonus mobili 2026: detrazione 50% su mobili e grandi elettrodomestici fino a 5.000\u20ac.', url: '/bonus-mobili', image: 'ogbonusmobili.png', datePublished: '2026-03-11', dateModified: '2026-03-28' }), faqSchema(faqItems)];
  return (<><SchemaOrg schemas={schemas} /><BonusMobiliGuide faqItems={faqItems} /></>);
}
