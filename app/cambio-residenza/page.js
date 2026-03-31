import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideCambioResidenzaContent from './GuideCambioResidenzaContent';

export const metadata = {
  title: 'Come Fare il Cambio di Residenza nel 2026: Online, Documenti e Tempi',
  description: 'Cambio di residenza 2026: come farlo online su ANPR con SPID, documenti necessari, tempi, cosa succede a patente, libretto auto e tessera sanitaria. Gratuito.',
  keywords: ['cambio residenza','cambio residenza online','ANPR','cambio indirizzo','cambio residenza documenti','cambio residenza patente','cambio residenza auto','residenza comune'],
  alternates: { canonical: 'https://zeroburocrazia.it/cambio-residenza' },
  openGraph: { title: 'Come Fare il Cambio di Residenza nel 2026: Online, Documenti e Tempi', description: 'Cambio di residenza online su ANPR: documenti, tempi e cosa cambia dopo. Guida gratuita.', url: 'https://zeroburocrazia.it/cambio-residenza', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogcambioresidenza.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogcambioresidenza.png'] },
};

const faqItems = [
  { q: "Quanto costa il cambio di residenza?", a: "<strong>Zero.</strong> La dichiarazione di cambio di residenza \u00e8 completamente gratuita, sia online su ANPR che allo sportello del Comune. Nessun bollo, nessun diritto di segreteria." },
  { q: "Da quando decorre la nuova residenza?", a: "La residenza decorre <strong>dalla data in cui presenti la dichiarazione</strong>, non dalla data in cui il Comune la accetta. Se presenti la domanda il 10 marzo, la tua residenza ufficiale \u00e8 dal 10 marzo." },
  { q: "Posso fare il cambio di residenza senza contratto di affitto?", a: "S\u00ec, puoi dichiarare la residenza anche senza contratto formale. Il Comune mander\u00e0 i vigili per verificare che tu abiti effettivamente l\u00ec. Allegare il contratto velocizza tutto." },
  { q: "Se non faccio il cambio, cosa rischio?", a: "<strong>Dichiarare il falso sulla residenza \u00e8 reato</strong> (falso in atto pubblico). In pratica: multe per il mancato aggiornamento dei documenti auto, problemi con le agevolazioni prima casa, rischio di non ricevere comunicazioni importanti." },
  { q: "La patente si aggiorna da sola?", a: "<strong>S\u00ec.</strong> Dal momento in cui il Comune registra il cambio, la patente si aggiorna automaticamente negli archivi della Motorizzazione. Il documento fisico resta valido fino alla scadenza." },
  { q: "Devo aggiornare il libretto dell\u2019auto?", a: "Non ricevi pi\u00f9 il tagliandino adesivo. L\u2019aggiornamento avviene <strong>automaticamente negli archivi digitali</strong> (ANV e PRA). Puoi scaricare un\u2019attestazione aggiornata dal Portale dell\u2019Automobilista." },
  { q: "Cambio residenza nello stesso comune: stessa procedura?", a: "<strong>S\u00ec, identica.</strong> Sia il cambio tra comuni diversi che il cambio di indirizzo nello stesso comune si fanno con la stessa procedura su ANPR." },
  { q: "Posso delegare qualcuno a fare il cambio per me?", a: "S\u00ec, ma <strong>solo allo sportello</strong>. Online su ANPR devi accedere tu con il tuo SPID o CIE. Per lo sportello serve una delega scritta con la tua firma, copia del tuo documento e documento del delegato." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Cambio di residenza 2026: come farlo online, documenti e tempi', description: 'Come fare il cambio di residenza online su ANPR con SPID nel 2026.', url: '/cambio-residenza', image: 'ogcambioresidenza.png', datePublished: '2026-03-15', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];
  return (
    <>
      <SchemaOrg schemas={schemas} />
      <GuideCambioResidenzaContent faqItems={faqItems} />
    </>
  );
}
