import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideCieContent from './GuideCieContent';

export const metadata = {
  title: 'Come Fare la CIE nel 2026: Carta d\u2019Identit\u00e0 Elettronica, Costi e Tempi',
  description: 'CIE 2026: come richiedere la carta d\u2019identit\u00e0 elettronica, documenti, costi (22,21\u20ac), tempi, app CieID e scadenza cartacea 3 agosto 2026. Guida gratuita.',
  keywords: ['carta identit\u00e0 elettronica','CIE','CIE 2026','come richiedere CIE','costo carta identit\u00e0','rinnovo carta identit\u00e0','CIE documenti','carta identit\u00e0 scaduta','prenotazione CIE','CieID app'],
  alternates: { canonical: 'https://zeroburocrazia.it/cie' },
  openGraph: { title: 'Carta d\u2019Identit\u00e0 Elettronica (CIE) 2026: Come Richiederla, Costi e Tempi', description: 'CIE 2026: come richiedere la carta d\u2019identit\u00e0 elettronica, costi 22,21\u20ac, tempi 6 giorni, scadenza cartacea agosto 2026.', url: 'https://zeroburocrazia.it/cie', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogcie.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogcie.png'] },
};

const faqItems = [
  { q: "Quanto costa la CIE?", a: "Il costo \u00e8 di <strong>22,21\u20ac</strong> (16,79\u20ac di diritti statali + 5,42\u20ac di diritti comunali). Alcuni Comuni arrotondano a 22\u20ac. Si paga allo sportello, in contanti o con carta." },
  { q: "Quanto tempo ci vuole per riceverla?", a: "La CIE viene prodotta dal Poligrafico dello Stato e spedita a casa entro <strong>6 giorni lavorativi</strong>. In alternativa puoi ritirarla in Comune dal 7\u00b0 giorno lavorativo. Nel frattempo hai il foglio sostitutivo." },
  { q: "La carta cartacea \u00e8 ancora valida?", a: "Solo fino al <strong>2 agosto 2026</strong>. Dal 3 agosto 2026, per il Regolamento UE 2019/1157, le carte cartacee non saranno pi\u00f9 valide per l\u2019espatrio. Per viaggiare in UE servir\u00e0 la CIE o il passaporto." },
  { q: "Posso usare la CIE al posto dello SPID?", a: "<strong>S\u00ec.</strong> La CIE funziona come identit\u00e0 digitale per accedere a tutti i servizi della PA: INPS, Agenzia Entrate, ANPR, e migliaia di altri. Ti serve l\u2019app <strong>CieID</strong> e il PIN ricevuto al rilascio. A differenza dello SPID, non ha costi annuali." },
  { q: "Ho perso il PIN della CIE, come faccio?", a: "Puoi recuperare met\u00e0 del PIN dalla <strong>lettera consegnata al rilascio</strong> e l\u2019altra met\u00e0 \u00e8 nella busta che arriva con la CIE. Se hai perso entrambi, puoi <strong>sbloccare il PIN</strong> dall\u2019app CieID usando il PUK. Se hai perso anche il PUK, devi tornare in Comune." },
  { q: "Posso prenotare l\u2019appuntamento online?", a: "<strong>S\u00ec, nella maggior parte dei Comuni.</strong> Usa la piattaforma <strong>Agenda CIE</strong> del Ministero dell\u2019Interno su prenotazionicie.interno.gov.it. Puoi scegliere giorno e ora, e caricare la foto in anticipo." },
  { q: "Serve la CIE per i minorenni?", a: "S\u00ec, anche i minorenni possono avere la CIE (fin dalla nascita). Servono <strong>entrambi i genitori</strong> presenti alla richiesta. La validit\u00e0 \u00e8 ridotta: 3 anni sotto i 3 anni, 5 anni tra 3 e 18 anni." },
  { q: "La CIE vale per andare all\u2019estero?", a: "S\u00ec, nei <strong>Paesi UE</strong> e in alcuni extra-UE (Svizzera, UK, Turchia, Egitto, ecc.), a patto che non riporti la dicitura \u201cNon valida per l\u2019espatrio\u201d. Controlla sempre su viaggiaresicuri.it prima di partire." },
];


export default function Page() {
  const schemas = [
  articleSchema({ title: 'CIE 2026: come richiedere la carta d\u2019identit\u00e0 elettronica', description: 'Come richiedere la CIE nel 2026: costi, tempi, documenti, app CieID e scadenza carta cartacea.', url: '/cie', image: 'ogcie.png', datePublished: '2026-03-11', dateModified: '2026-03-28' }),
  faqSchema(faqItems),
];
  return (
    <>
      <SchemaOrg schemas={schemas} />
      <GuideCieContent faqItems={faqItems} />
    </>
  );
}
