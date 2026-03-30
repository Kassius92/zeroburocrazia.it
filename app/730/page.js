import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import Guide730Content from './Guide730Content';

export const metadata = {
  title: 'Come Fare il 730 nel 2026: Detrazioni, Scadenze e Rimborso',
  description: 'Guida completa al 730 precompilato 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze aggiornate e come ottenere il massimo rimborso. Gratis.',
  keywords: ['730', '730 2026', 'dichiarazione redditi', '730 precompilato', 'come fare 730', 'detrazioni fiscali', 'scadenza 730', 'modello 730', '730 online', 'CAF 730'],
  alternates: { canonical: 'https://zeroburocrazia.it/730' },
  openGraph: { type: 'article', title: '730 Precompilato 2026: Guida Completa Gratuita', description: 'Come fare il 730 nel 2026: detrazioni, documenti, scadenze e come ottenere il massimo rimborso.', url: 'https://zeroburocrazia.it/730', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/og730.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: '730 Precompilato 2026: Guida Completa', description: 'Detrazioni, documenti, scadenze e rimborso. Tutto sul 730 in una guida gratuita.', images: ['https://zeroburocrazia.it/og730.png'] },
};

const faqItems = [
  { q: "Se non faccio il 730, cosa succede?", a: "<strong>Non vai in prigione.</strong> Per\u00f2 perdi tutte le detrazioni a cui avresti diritto: centinaia o migliaia di euro ogni anno. Se eri obbligato a farlo (per esempio hai avuto due datori di lavoro) e non lo fai, l\u2019Agenzia delle Entrate pu\u00f2 inviarti un avviso di accertamento con sanzioni dal 120% al 240% delle imposte dovute. Conviene sempre farlo." },
  { q: "Posso scaricare Netflix o la palestra?", a: "<strong>Netflix no.</strong> I servizi di streaming non rientrano tra le spese detraibili. La palestra per te personalmente nemmeno, a meno che non sia prescritta dal medico come attivit\u00e0 riabilitativa. Per\u00f2 le <strong>attivit\u00e0 sportive dei figli tra 5 e 18 anni s\u00ec</strong>: sono detraibili al 19% fino a un massimo di 210\u20ac per figlio." },
  { q: "Il CU non mi arriva, che faccio?", a: "Il datore di lavoro \u00e8 <strong>obbligato per legge</strong> a consegnare la Certificazione Unica entro il 16 marzo. Se non la ricevi, sollecita per iscritto (email o PEC). Se il datore \u00e8 irreperibile, puoi scaricare la CU direttamente dal sito dell\u2019Agenzia delle Entrate accedendo con SPID alla tua area riservata." },
  { q: "Ho pagato in contanti, perdo la detrazione?", a: "<strong>Dipende dalla spesa.</strong> Dal 1\u00b0 gennaio 2025, tutte le spese detraibili al 19% devono essere pagate con metodi tracciabili: carta, bancomat, bonifico, assegno. Fanno eccezione i <strong>farmaci con ricetta medica</strong> e le <strong>prestazioni sanitarie presso strutture pubbliche o accreditate SSN</strong>." },
  { q: "Ho cambiato lavoro, devo fare due 730?", a: "<strong>No, fai un solo 730</strong> in cui inserisci entrambe le Certificazioni Uniche. Attenzione: \u00e8 molto probabile che dovrai pagare un conguaglio perch\u00e9 ogni datore ha calcolato le tasse come se fossi stato da lui per tutto l\u2019anno." },
  { q: "Posso fare il 730 congiunto con il mio partner?", a: "<strong>Solo se siete sposati o uniti civilmente.</strong> I conviventi non possono presentare il 730 congiunto. Il vantaggio principale: crediti e debiti si compensano automaticamente tra i due coniugi." },
  { q: "Ho fatto un errore nel 730, posso correggerlo?", a: "<strong>S\u00ec, in diversi modi.</strong> Entro il 30 settembre puoi inviare un nuovo 730 che sostituisce il precedente. Entro il 25 ottobre puoi presentare un 730 integrativo (solo se pi\u00f9 favorevole). Dopo, devi usare il Modello Redditi correttivo entro il 30 novembre. Oltre, dichiarazione integrativa entro 5 anni." },
  { q: "Ho ricevuto la NASpI o la cassa integrazione, devo fare il 730?", a: "<strong>S\u00ec, e ti conviene.</strong> La NASpI e la cassa integrazione sono redditi a tutti gli effetti. Se nello stesso anno hai avuto sia stipendio che NASpI, il 730 \u00e8 praticamente obbligatorio per ricalcolare correttamente le imposte dovute." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Guida completa al Modello 730 2026', description: 'Come fare il 730 nel 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze e come ottenere il massimo rimborso.', url: '/730', image: 'og730.png', datePublished: '2026-03-04', dateModified: '2026-03-27' }),
    faqSchema(faqItems),
  ];
  return (
    <>
      <SchemaOrg schemas={schemas} />
      <Guide730Content faqItems={faqItems} />
    </>
  );
}
