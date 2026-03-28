import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MiSposoGuide from './MiSposoGuide';
export const metadata = {
  title: 'Come Sposarsi nel 2026: Documenti, Costi e Procedura Completa',
  description: 'Matrimonio civile 2026: documenti necessari, pubblicazioni, costi, tempi e scelta tra comunione e separazione dei beni. Guida gratuita aggiornata.',
  keywords: ['sposarsi 2026','matrimonio civile documenti','pubblicazioni matrimonio','comunione separazione beni','costo matrimonio civile','congedo matrimoniale','nulla osta matrimonio straniero'],
  alternates: { canonical: 'https://zeroburocrazia.it/mi-sposo' },
  openGraph: { title: 'Come Sposarsi nel 2026: Documenti, Costi e Procedura Completa', url: 'https://zeroburocrazia.it/mi-sposo', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogmisposo.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogmisposo.png'] },
};
const faqItems = [
  { q: "Quanto tempo prima devo iniziare le pratiche?", a: "<strong>Almeno 2-3 mesi prima</strong> della data. Le pubblicazioni richiedono 8 giorni + 3 di attesa, e prima ancora devi raccogliere i documenti. Se uno dei due \u00e8 straniero, i tempi si allungano per il nulla osta." },
  { q: "Posso sposarmi in un Comune diverso da quello di residenza?", a: "<strong>S\u00ec.</strong> Le pubblicazioni si fanno nel Comune di residenza, ma la cerimonia pu\u00f2 essere in qualsiasi Comune d\u2019Italia. Serve una delega dal Comune di residenza a quello della cerimonia." },
  { q: "Quanti testimoni servono?", a: "<strong>Due testimoni</strong>, maggiorenni con documento d\u2019identit\u00e0 valido." },
  { q: "Posso revocare le pubblicazioni?", a: "<strong>S\u00ec</strong>, in qualsiasi momento prima della cerimonia. Le pubblicazioni scadono automaticamente dopo 180 giorni se il matrimonio non viene celebrato." },
  { q: "Il matrimonio religioso ha valore civile?", a: "<strong>S\u00ec, se \u00e8 concordatario.</strong> Il matrimonio cattolico secondo il Concordato ha effetti civili automatici. Anche alcune confessioni riconosciute (valdesi, ebrei) hanno effetti civili." },
  { q: "Cosa cambia tra comunione e separazione dei beni?", a: "<strong>In comunione:</strong> tutto quello che comprate dopo il matrimonio \u00e8 di entrambi al 50%. <strong>In separazione:</strong> ognuno resta proprietario di ci\u00f2 che compra. La scelta si pu\u00f2 cambiare dal notaio (500-1.000\u20ac)." },
  { q: "Ho diritto al congedo matrimoniale dal lavoro?", a: "<strong>S\u00ec, 15 giorni di calendario</strong> retribuiti al 100%, da usare entro 30 giorni dal matrimonio. Spetta anche per le unioni civili." },
  { q: "Devo aggiornare i documenti dopo il matrimonio?", a: "<strong>S\u00ec.</strong> Aggiorna carta d\u2019identit\u00e0 (se cambi cognome), codice fiscale, tessera sanitaria, patente. Il Comune aggiorna automaticamente stato civile e nucleo familiare." },
];
export default function Page() {
  const schemas = [articleSchema({ title: 'Sposarsi nel 2026: documenti, costi, procedura e regime patrimoniale', description: 'Come sposarsi nel 2026: documenti, pubblicazioni, costi e scelta del regime patrimoniale.', url: '/mi-sposo', image: 'ogmisposo.png', datePublished: '2026-03-15', dateModified: '2026-03-28' }), faqSchema(faqItems)];
  return (<><SchemaOrg schemas={schemas} /><MiSposoGuide faqItems={faqItems} /></>);
}
