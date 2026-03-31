import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuidePecContent from './GuidePecContent';

export const metadata = {
  title: 'Come Attivare la PEC nel 2026: Costi, Obblighi e Domicilio Digitale',
  description: 'PEC 2026: cos\u2019\u00e8 la posta elettronica certificata, come attivarla, costi da 1,40\u20ac/anno, quando \u00e8 obbligatoria e come usarla come domicilio digitale su INAD.',
  keywords: ['PEC','posta elettronica certificata','come attivare PEC','costo PEC','PEC obbligatoria','domicilio digitale','INAD','PEC privati','PEC Aruba','PEC Poste'],
  alternates: { canonical: 'https://zeroburocrazia.it/pec' },
  openGraph: { title: 'PEC 2026: Come Attivarla, Costi e Domicilio Digitale', description: 'PEC 2026: cos\u2019\u00e8, come attivarla, costi e domicilio digitale INAD. Guida gratuita.', url: 'https://zeroburocrazia.it/pec', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogpec.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogpec.png'] },
};

const faqItems = [
  { q: "Quanto costa una PEC?", a: "Dipende dal provider. Si parte da circa <strong>1,40-7\u20ac/anno</strong> per i piani base (Aruba ~1,40\u20ac+IVA, Poste Italiane ~5,50\u20ac+IVA). Esistono anche soluzioni gratuite con formula pay-per-email: non paghi l\u2019abbonamento ma paghi ogni singola PEC inviata." },
  { q: "Un privato cittadino \u00e8 obbligato ad avere la PEC?", a: "<strong>No.</strong> La PEC \u00e8 obbligatoria solo per imprese, professionisti iscritti ad albi e PA. Per i privati \u00e8 facoltativa ma molto utile per inviare raccomandate digitali, comunicare con la PA e registrare il domicilio digitale su INAD." },
  { q: "Posso usare la PEC per inviare a un\u2019email normale?", a: "S\u00ec, ma <strong>perdi il valore legale</strong>. La certificazione funziona solo quando sia mittente che destinatario usano la PEC. Se invii a un\u2019email normale, hai solo la ricevuta di accettazione, non quella di consegna." },
  { q: "Cos\u2019\u00e8 il domicilio digitale INAD?", a: "\u00c8 l\u2019indirizzo PEC che registri volontariamente sul portale <strong>INAD</strong> (domiciliodigitale.gov.it). Una volta registrato, la PA pu\u00f2 inviarti comunicazioni ufficiali l\u00ec invece che per posta cartacea. \u00c8 gratuito." },
  { q: "Quanto dura una PEC?", a: "L\u2019abbonamento \u00e8 <strong>annuale</strong>. Se non lo rinnovi, la casella viene disattivata e dopo un periodo perdi i messaggi. Alcuni provider offrono piani biennali o triennali con sconto." },
  { q: "La PEC sostituisce la raccomandata?", a: "<strong>S\u00ec, ha lo stesso valore legale.</strong> Una PEC inviata da casella PEC a casella PEC equivale a una raccomandata con ricevuta di ritorno. \u00c8 istantanea e costa molto meno (pochi centesimi vs 5-8\u20ac di una raccomandata)." },
  { q: "Come faccio a trovare la PEC di un\u2019azienda o di un professionista?", a: "Cerca su <strong>INI-PEC</strong> (inipec.gov.it): \u00e8 l\u2019elenco ufficiale di tutte le PEC di imprese e professionisti italiani. Basta inserire nome, codice fiscale o partita IVA." },
  { q: "Cosa succede se non leggo una PEC ricevuta?", a: "La PEC si considera <strong>consegnata nel momento in cui arriva</strong> nella tua casella, anche se non la leggi. Come una raccomandata depositata in cassetta. Per questo \u00e8 importante controllarla regolarmente." },
];

const schemas = [
  articleSchema({ title: 'PEC 2026: cos\u2019\u00e8, come attivarla, costi e domicilio digitale', description: 'PEC 2026: come attivarla, costi, quando \u00e8 obbligatoria e domicilio digitale INAD.', url: '/pec', image: 'ogpec.png', datePublished: '2026-03-15', dateModified: '2026-03-28' }),
  faqSchema(faqItems),
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={schemas} />
      <GuidePecContent faqItems={faqItems} />
    </>
  );
}
