import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MiniGuide, { MgSection, MgPull, MgFaq, MgTable } from '@/components/redesign/MiniGuide';

export const metadata = {
  title: 'Quanto Costa lo SPID nel 2026: Poste 6€/anno, Alternative Gratis',
  description: 'SPID costo 2026: PosteID costa 6€/anno dal secondo anno. Lepida, InfoCamere e altri provider sono ancora gratis. Come non pagare.',
  alternates: { canonical: 'https://zeroburocrazia.it/spid/costo-2026' },
};

const faq = [
  { q: "Lo SPID di Poste è diventato a pagamento?", a: "<strong>Sì.</strong> Dal 1° gennaio 2026, PosteID costa <strong>6€/anno</strong> a partire dal secondo anno. Il primo anno resta gratuito. Sono esenti: minorenni, over 75, residenti all'estero e uso professionale." },
  { q: "Posso avere lo SPID gratis nel 2026?", a: "<strong>Sì.</strong> Provider come Lepida, InfoCamere e Namirial offrono ancora lo SPID senza canone annuale. Il costo è solo per l'eventuale riconoscimento (gratuito se usi CIE o firma digitale)." },
  { q: "Se non pago i 6€ di Poste perdo lo SPID?", a: "<strong>Non subito.</strong> Lo SPID viene sospeso, ma hai 24 mesi per pagare e riattivarlo. Dopo 24 mesi senza pagamento, l'identità viene revocata." },
  { q: "Posso passare da Poste a un provider gratuito?", a: "<strong>Sì.</strong> Attiva lo SPID con un provider gratuito, poi disattiva quello di Poste. Non c'è bisogno di 'trasferire' nulla: è come avere due account separati." },
  { q: "La CIE è un'alternativa allo SPID?", a: "<strong>Sì.</strong> La CIE permette di accedere a tutti gli stessi servizi dello SPID. Costa 22,21€ una tantum (dura 10 anni), nessun canone annuale." },
  { q: "Costa anche l'attivazione dello SPID?", a: "L'attivazione è <strong>gratuita</strong> con tutti i provider se fai il riconoscimento con CIE o firma digitale. Il riconoscimento via webcam può costare 10-25€." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={[articleSchema({ title: 'Costo SPID 2026: Poste a pagamento, alternative gratis', description: 'SPID costo 2026: PosteID 6€/anno, provider gratis alternativi.', url: '/spid/costo-2026', image: 'ogspid.png', datePublished: '2026-01-15', dateModified: '2026-03-28' }), faqSchema(faq)]} />
      <MiniGuide
        category="documenti"
        categoryLabel="Documenti"
        parentHref="/spid"
        parentLabel="Faccio lo SPID"
        title="Costo SPID"
        titleEm="2026"
        subtitle="Da gennaio 2026 PosteID costa 6€/anno. Ecco come non pagare nulla e quali provider sono ancora gratuiti."
        readTime="3 min"
        updated="gennaio 2026"
      >
        <MgSection label="Cosa è cambiato" title="PosteID a pagamento" titleEm="dal 2026" side="left">
          <p>Dal <strong>1° gennaio 2026</strong>, PosteID (lo SPID di Poste Italiane) ha introdotto un canone di <strong>6€/anno</strong> a partire dal secondo anno di utilizzo. Il primo anno dopo l&apos;attivazione resta gratuito. Sono esenti dal pagamento: minorenni, over 75, residenti all&apos;estero iscritti all&apos;AIRE, e utilizzi professionali tramite convenzioni.</p>
          <MgPull>
            <strong>Se hai già lo SPID con Poste:</strong> riceverai una comunicazione email con le istruzioni per rinnovare. Hai 24 mesi dalla scadenza per pagare prima che lo SPID venga revocato.
          </MgPull>
        </MgSection>

        <MgSection label="Le alternative" title="Provider ancora" titleEm="gratuiti nel 2026" side="right">
          <MgTable
            headers={['Provider', 'Costo annuale', 'Riconoscimento gratis']}
            rows={[
              ['Lepida', 'Gratis', 'Sì, con CIE (5 min da casa)'],
              ['InfoCamere', 'Gratis', 'Sì, con CIE o firma digitale'],
              ['Namirial', 'Gratis', 'Sì, con CIE'],
              ['Aruba', 'Gratis', 'Con CIE; senza CIE: 9,90€ una tantum'],
              ['PosteID', '6€/anno (dal 2° anno)', 'Gratis in ufficio postale'],
            ]}
          />
          <MgPull>
            <strong>Consiglio:</strong> se hai la CIE (carta d&apos;identità elettronica), attiva lo SPID con Lepida gratuitamente in 5 minuti. Se non hai la CIE, l&apos;alternativa più economica resta Poste all&apos;ufficio postale (gratis, ma devi andare di persona) oppure passare alla CIE stessa (22,21€ una tantum, dura 10 anni).
          </MgPull>
        </MgSection>

        <MgSection label="Domande frequenti" title="FAQ" side="left">
          <MgFaq items={faq} />
        </MgSection>
      </MiniGuide>
    </>
  );
}
