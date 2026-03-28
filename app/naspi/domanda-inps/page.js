import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MiniGuide, { MgSection, MgPull, MgFaq } from '@/components/redesign/MiniGuide';

export const metadata = {
  title: 'Come Fare Domanda NASpI nel 2026: Procedura INPS Passo per Passo',
  description: 'Domanda NASpI 2026: come presentarla online su INPS entro 68 giorni, documenti necessari, DID e primi pagamenti.',
  alternates: { canonical: 'https://zeroburocrazia.it/naspi/domanda-inps' },
};

const faq = [
  { q: "Entro quanto tempo devo fare domanda NASpI?", a: "<strong>68 giorni</strong> dalla cessazione del rapporto di lavoro. Dopo, perdi il diritto. I primi 8 giorni sono i migliori perché la NASpI parte subito dalla cessazione." },
  { q: "Posso fare la domanda NASpI da solo?", a: "<strong>Sì.</strong> Si fa online su inps.it con SPID, CIE o CNS. Il percorso è: Prestazioni e servizi > NASpI > Invio domanda. In alternativa: patronato (gratis) o Contact Center INPS (803 164)." },
  { q: "Quanto tempo passa dalla domanda al primo pagamento?", a: "L'INPS ha <strong>30 giorni</strong> per esaminare la domanda. Il primo pagamento arriva entro <strong>30-45 giorni</strong> dalla presentazione. In totale: circa 1-2 mesi." },
  { q: "Cosa succede se faccio domanda dopo 8 giorni?", a: "La NASpI parte dal <strong>giorno dopo la presentazione</strong>, non dal giorno del licenziamento. Perdi i giorni tra la cessazione e la domanda." },
  { q: "Devo iscrivermi al centro per l'impiego?", a: "<strong>Sì.</strong> Devi rilasciare la DID (Dichiarazione di Immediata Disponibilità) e iscriverti al SIISL. Senza DID, la NASpI non parte." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={[articleSchema({ title: 'Domanda NASpI 2026: procedura INPS passo per passo', description: 'Come fare domanda NASpI 2026 su INPS: documenti, DID e tempi.', url: '/naspi/domanda-inps', image: 'ognaspi.png', datePublished: '2026-02-01', dateModified: '2026-03-28' }), faqSchema(faq)]} />
      <MiniGuide
        category="lavoro"
        categoryLabel="Lavoro"
        parentHref="/naspi"
        parentLabel="NASpI"
        title="Domanda NASpI"
        titleEm="su INPS"
        subtitle="Come presentare la domanda NASpI online entro 68 giorni, quali documenti servono, come fare la DID e quando arriva il primo pagamento."
        readTime="5 min"
        updated="febbraio 2026"
      >
        <MgSection label="Tempi critici" title="68 giorni:" titleEm="non aspettare" side="left">
          <p>Hai <strong>68 giorni dalla cessazione del rapporto di lavoro</strong> per presentare la domanda. Dopo questo termine, perdi definitivamente il diritto alla NASpI per quel periodo di disoccupazione.</p>
          <MgPull>
            <strong>Falla entro i primi 8 giorni.</strong> Se presenti la domanda entro 8 giorni dalla cessazione, la NASpI parte dal giorno successivo alla fine del rapporto. Se aspetti di più, parti dal giorno dopo la domanda e perdi quei giorni.
          </MgPull>
        </MgSection>

        <MgSection label="Procedura online" title="Come si fa" titleEm="su INPS" side="right">
          <p><strong>1. Accedi</strong> a inps.it con SPID o CIE. Vai in &ldquo;Prestazioni e servizi&rdquo; → cerca &ldquo;NASpI&rdquo; → &ldquo;Invio domanda di NASpI&rdquo;.</p>
          <p><strong>2. Compila il modulo</strong>: motivo della cessazione, data fine rapporto, ultime buste paga (spesso precompilate), IBAN del tuo conto corrente intestato o cointestato a te.</p>
          <p><strong>3. Rilascia la DID</strong> (Dichiarazione di Immediata Disponibilità al lavoro) direttamente nel modulo INPS oppure separatamente su SIISL. Senza DID la NASpI non parte.</p>
          <p><strong>4. Invia e conserva la ricevuta</strong>. Ricevi un numero di protocollo via email. Il primo pagamento arriva in 30-45 giorni.</p>
          <MgPull warn>
            <strong>Non hai SPID?</strong> Puoi andare a un <strong>patronato</strong> (CGIL, CISL, UIL, ACLI): fanno la domanda al posto tuo, gratuitamente per legge. Oppure chiama il Contact Center INPS al <strong>803 164</strong> (gratis da fisso).
          </MgPull>
        </MgSection>

        <MgSection label="Domande frequenti" title="FAQ" side="left">
          <MgFaq items={faq} />
        </MgSection>
      </MiniGuide>
    </>
  );
}
