import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MiniGuide, { MgSection, MgPull, MgFaq } from '@/components/redesign/MiniGuide';

export const metadata = {
  title: "Quando Scade l'ISEE nel 2026 e Come Rinnovarlo: Guida Rapida",
  description: "ISEE scadenza 2026: l'ISEE scade il 31 dicembre. Cosa succede ai bonus, come rinnovarlo e quando farlo per non perdere agevolazioni.",
  alternates: { canonical: 'https://zeroburocrazia.it/isee/scadenza' },
};

const faq = [
  { q: "Quando scade l'ISEE?", a: "L'ISEE ordinario scade il <strong>31 dicembre</strong> di ogni anno. Quello fatto nel 2026 (con redditi e patrimoni 2024) vale fino al 31 dicembre 2026." },
  { q: "Se l'ISEE scade perdo i bonus?", a: "<strong>Dipende dal bonus.</strong> L'assegno unico continua con l'importo minimo in attesa del rinnovo. Il bonus bollette si sospende. L'ADI richiede un ISEE valido: senza, il pagamento si blocca." },
  { q: "Posso fare l'ISEE a gennaio per tutto l'anno?", a: "<strong>Sì.</strong> Puoi fare l'ISEE dal 1° gennaio e vale fino al 31 dicembre. Prima lo fai, prima accedi ai bonus. Non c'è motivo di aspettare." },
  { q: "Quanto tempo ci vuole per rinnovare l'ISEE?", a: "Al CAF: <strong>15-20 minuti</strong> di appuntamento, poi l'attestazione INPS arriva in <strong>4-10 giorni lavorativi</strong>." },
  { q: "Devo portare gli stessi documenti dell'anno scorso?", a: "No, i documenti devono essere <strong>aggiornati</strong>: giacenza media e saldo al 31/12/2024, patrimonio immobiliare aggiornato, eventuali nuovi redditi." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={[articleSchema({ title: "Scadenza ISEE 2026: quando scade e come rinnovarlo", description: "ISEE scade il 31 dicembre. Cosa succede ai bonus e come rinnovarlo.", url: '/isee/scadenza', image: 'ogisee.png', datePublished: '2026-01-01', dateModified: '2026-03-28' }), faqSchema(faq)]} />
      <MiniGuide
        category="fisco"
        categoryLabel="Fisco"
        parentHref="/isee"
        parentLabel="Faccio l'ISEE"
        title="Scadenza"
        titleEm="ISEE 2026"
        subtitle="L'ISEE scade ogni anno il 31 dicembre. Ecco cosa succede ai tuoi bonus quando scade e perché conviene rinnovarlo il prima possibile a gennaio."
        readTime="3 min"
        updated="gennaio 2026"
      >
        <MgSection label="Quando scade" title="31 dicembre," titleEm="ogni anno" side="left">
          <p>L&apos;ISEE ha validità <strong>annuale</strong>: scade il 31 dicembre di ogni anno, indipendentemente da quando lo hai fatto. L&apos;ISEE 2026 (basato sui redditi del 2024 e patrimoni al 31/12/2024) è valido dal momento in cui lo ottieni fino al 31 dicembre 2026.</p>
          <MgPull>
            <strong>Regola pratica:</strong> fai l&apos;ISEE a <strong>gennaio o febbraio</strong> di ogni anno. I CAF in quel periodo sono meno affollati, hai il documento pronto per tutto l&apos;anno e non rischi interruzioni dei bonus.
          </MgPull>
        </MgSection>

        <MgSection label="Cosa succede" title="Ai bonus quando" titleEm="l'ISEE scade" side="right">
          <p><strong>Assegno unico:</strong> non si interrompe. Continua ad essere erogato all&apos;importo minimo (57€/figlio) in attesa che tu presenti il nuovo ISEE. Una volta rinnovato, l&apos;INPS fa il conguaglio per i mesi con importo ridotto.</p>
          <p><strong>Bonus bollette:</strong> si interrompe automaticamente al 31 dicembre. Riparte solo dopo che hai presentato il nuovo ISEE e l&apos;INPS lo trasmette ai gestori.</p>
          <p><strong>ADI (Assegno di Inclusione):</strong> richiede un ISEE valido. Se scade e non lo rinnovi, il pagamento si blocca fino al rinnovo.</p>
          <p><strong>Bonus nido:</strong> devi aggiornare l&apos;ISEE ogni anno per mantenere l&apos;importo corretto. In assenza di ISEE aggiornato, ricevi il contributo minimo.</p>
        </MgSection>

        <MgSection label="Domande frequenti" title="FAQ" side="left">
          <MgFaq items={faq} />
        </MgSection>
      </MiniGuide>
    </>
  );
}
