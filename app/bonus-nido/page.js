import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideBonusNidoContent from './GuideBonusNidoContent';
export const metadata = {
  title: 'Come Richiedere il Bonus Nido nel 2026: fino a 3.600\u20ac e Domanda INPS',
  description: 'Bonus asilo nido 2026: importi fino a 3.600\u20ac/anno per fascia ISEE, come fare domanda INPS, requisiti e differenza con la detrazione IRPEF. Guida gratuita.',
  keywords: ['bonus nido 2026','bonus asilo nido','domanda INPS bonus nido','importo bonus nido ISEE','bonus nido requisiti','rimborso retta asilo'],
  alternates: { canonical: 'https://zeroburocrazia.it/bonus-nido' },
  openGraph: { title: 'Bonus Nido 2026: fino a 3.600\u20ac e Domanda INPS', url: 'https://zeroburocrazia.it/bonus-nido', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogbonusnido.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogbonusnido.png'] },
};
const faqItems = [
  { q: "Quanto vale il bonus nido 2026?", a: "Dipende dall\u2019ISEE minorenni. Il massimo \u00e8 <strong>3.600\u20ac/anno</strong> per i nati dal 2024 in poi con ISEE sotto 25.000\u20ac e un fratello under 10. Senza ISEE si riceve il minimo: 1.500\u20ac/anno." },
  { q: "Posso avere il bonus nido senza ISEE?", a: "<strong>S\u00ec, ma ricevi solo 1.500\u20ac/anno</strong> (136\u20ac/mese). Se presenti l\u2019ISEE in ritardo, l\u2019adeguamento non \u00e8 retroattivo: i mesi gi\u00e0 pagati al minimo restano al minimo." },
  { q: "Il bonus nido \u00e8 compatibile con le detrazioni fiscali per l\u2019asilo?", a: "<strong>No.</strong> Il bonus nido e la detrazione IRPEF per la frequenza degli asili nido sono alternativi. Non puoi avere entrambi per lo stesso bambino nello stesso anno." },
  { q: "Il bonus nido \u00e8 compatibile con l\u2019Assegno unico?", a: "<strong>S\u00ec, sono cumulabili.</strong> Puoi ricevere sia il bonus nido che l\u2019Assegno unico per lo stesso figlio." },
  { q: "Devo rifare la domanda ogni anno?", a: "<strong>Dal 2026 no.</strong> Se la domanda viene accolta, resta valida fino ad agosto dell\u2019anno in cui il bambino compie 3 anni. Devi per\u00f2 ogni anno confermare le mensilit\u00e0 di frequenza e aggiornare l\u2019ISEE." },
  { q: "Vale anche per i nidi privati?", a: "<strong>S\u00ec</strong>, purch\u00e9 siano autorizzati. Funziona per asili nido pubblici, nidi privati autorizzati, micronidi, sezioni primavera e nidi in famiglia. Sono esclusi centri ricreativi, pre-scuola e post-scuola." },
  { q: "Mio figlio ha una patologia cronica e non pu\u00f2 andare al nido. Posso avere il bonus?", a: "<strong>S\u00ec.</strong> Il bonus copre anche forme di assistenza domiciliare per bambini con gravi patologie croniche certificate. L\u2019importo viene erogato in un\u2019unica soluzione." },
  { q: "Quanto tempo ci mette l\u2019INPS a pagare?", a: "Dopo la validazione della domanda e il caricamento delle ricevute, l\u2019INPS paga entro <strong>30 giorni</strong>." },
];
export default function Page() {
  const schemas = [articleSchema({ title: 'Bonus Nido 2026: come richiederlo, importi e requisiti ISEE', description: 'Bonus asilo nido 2026: importi, requisiti ISEE e come fare domanda INPS.', url: '/bonus-nido', image: 'ogbonusnido.png', datePublished: '2026-03-11', dateModified: '2026-03-28' }), faqSchema(faqItems)];
  return (<><SchemaOrg schemas={schemas} /><GuideBonusNidoContent faqItems={faqItems} /></>);
}
