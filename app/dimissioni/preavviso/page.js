import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MiniGuide, { MgSection, MgPull, MgFaq, MgTable } from '@/components/redesign/MiniGuide';

export const metadata = {
  title: 'Preavviso Dimissioni 2026: Quanti Giorni per CCNL e Cosa Succede',
  description: 'Preavviso dimissioni 2026: quanti giorni per i principali CCNL (commercio, metalmeccanico, terziario), cosa succede se non lo dai e come calcolarlo.',
  alternates: { canonical: 'https://zeroburocrazia.it/dimissioni/preavviso' },
};

const faq = [
  { q: "Quanti giorni di preavviso servono per dimettersi?", a: "Dipende dal <strong>CCNL, livello e anzianità</strong>. Non esiste un numero fisso. Nel commercio va da 15 a 120 giorni. Nel metalmeccanico da 10 a 90. Controlla il tuo CCNL." },
  { q: "Posso dimettermi senza preavviso?", a: "<strong>Sì</strong>, ma il datore può trattenere dall'ultima busta paga l'<strong>indennità di mancato preavviso</strong>: l'equivalente dello stipendio per i giorni di preavviso non lavorati." },
  { q: "Il preavviso si conta in giorni di calendario o lavorativi?", a: "Di solito in <strong>giorni di calendario</strong>, ma alcuni CCNL specificano diversamente. I giorni partono dal 1° o dal 16 del mese (a seconda del CCNL)." },
  { q: "Se sono in prova devo dare il preavviso?", a: "<strong>No.</strong> Durante il periodo di prova entrambi possono interrompere il rapporto senza preavviso e senza motivazione." },
  { q: "Le ferie non godute riducono il preavviso?", a: "<strong>No.</strong> Le ferie non godute vengono pagate nell'ultima busta paga, ma non accorciano il preavviso." },
  { q: "In caso di dimissioni per giusta causa serve il preavviso?", a: "<strong>No.</strong> Se ti dimetti per giusta causa (stipendio non pagato, mobbing, modifica unilaterale del contratto), non devi dare preavviso e hai diritto anche alla NASpI." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={[articleSchema({ title: 'Preavviso dimissioni 2026: giorni, CCNL e conseguenze', description: 'Preavviso dimissioni per CCNL, cosa succede senza preavviso.', url: '/dimissioni/preavviso', image: 'ogdimissioni.png', datePublished: '2026-02-01', dateModified: '2026-03-28' }), faqSchema(faq)]} />
      <MiniGuide
        category="lavoro"
        categoryLabel="Lavoro"
        parentHref="/dimissioni"
        parentLabel="Dimissioni"
        title="Preavviso"
        titleEm="dimissioni"
        subtitle="Quanti giorni di preavviso devi dare secondo il tuo contratto, cosa succede se non lo dai e quando invece puoi andartene senza preavviso."
        readTime="4 min"
        updated="febbraio 2026"
      >
        <MgSection label="I numeri" title="Preavviso per" titleEm="i principali CCNL" side="left">
          <p>Il preavviso non ha un numero di giorni uguale per tutti: dipende dal tuo <strong>CCNL, livello inquadramento e anzianità aziendale</strong>. La tabella qui sotto riporta i valori più comuni.</p>
          <MgTable
            headers={['CCNL', 'Livelli bassi', 'Livelli medi', 'Livelli alti']}
            rows={[
              ['Commercio (Confcommercio)', '15-30 gg', '30-45 gg', '60-120 gg'],
              ['Metalmeccanico (CCNL FIM)', '10-20 gg', '20-40 gg', '40-90 gg'],
              ['Terziario e servizi', '15-30 gg', '30-60 gg', '60-90 gg'],
              ['Bancario', '30 gg', '45-60 gg', '90 gg'],
              ['Edilizia', '15 gg', '20-30 gg', '30-45 gg'],
            ]}
          />
          <MgPull>
            <strong>Come trovare il tuo esatto preavviso:</strong> cerca il tuo CCNL su CCNL.it o sul sito del sindacato di categoria. La sezione si chiama di solito &ldquo;Risoluzione del rapporto&rdquo; o &ldquo;Recesso&rdquo;.
          </MgPull>
        </MgSection>

        <MgSection label="Conseguenze" title="Cosa succede se" titleEm="non dai il preavviso" side="right">
          <p>Puoi sempre dimetterti immediatamente, ma il datore di lavoro ha il diritto di trattenere dall&apos;ultima busta paga l&apos;<strong>indennità sostitutiva del preavviso</strong>: l&apos;equivalente dello stipendio per tutti i giorni di preavviso non lavorati.</p>
          <p>Esempio: preavviso di 30 giorni, stipendio 1.800€/mese → trattenuta di 1.800€.</p>
          <MgPull warn>
            <strong>Eccezione: dimissioni per giusta causa.</strong> Se ti dimetti per giusta causa (stipendio non pagato da oltre 60 giorni, mobbing documentato, modifica unilaterale del contratto), non devi dare preavviso, non perdi nulla dall&apos;ultima busta paga, e hai diritto alla NASpI.
          </MgPull>
        </MgSection>

        <MgSection label="Domande frequenti" title="FAQ" side="left">
          <MgFaq items={faq} />
        </MgSection>
      </MiniGuide>
    </>
  );
}
