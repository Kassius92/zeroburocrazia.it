import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MiniGuide, { MgSection, MgPull, MgFaq } from '@/components/redesign/MiniGuide';

export const metadata = {
  title: "Scadenza Carta d'Identità Cartacea: Dal 3 Agosto 2026 Non Vale per l'Espatrio",
  description: "Dal 3 agosto 2026 la carta d'identità cartacea non è più valida per viaggiare in UE. Cosa fare, quando richiedere la CIE e quanto costa.",
  alternates: { canonical: 'https://zeroburocrazia.it/cie/scadenza-cartacea' },
};

const faq = [
  { q: "La carta d'identità cartacea scade nel 2026?", a: "Per l'<strong>espatrio sì</strong>: dal 3 agosto 2026 le carte cartacee non sono più valide per viaggiare in UE. Per l'<strong>identificazione in Italia</strong> restano valide fino alla scadenza naturale." },
  { q: "Se ho la carta cartacea ancora in corso, devo cambiarla?", a: "Per <strong>viaggiare all'estero dopo il 3 agosto 2026</strong>: sì, devi passare alla CIE o usare il passaporto. Per uso in Italia: no, resta valida fino alla scadenza stampata." },
  { q: "Quanto costa passare alla CIE?", a: "<strong>22,21€</strong> (16,79€ diritti statali + 5,42€ comunali). Si paga allo sportello. La CIE dura 10 anni." },
  { q: "Quanto tempo ci vuole per avere la CIE?", a: "La CIE viene spedita a casa in <strong>6 giorni lavorativi</strong>. Nel frattempo ricevi un foglio sostitutivo." },
  { q: "Posso usare il passaporto al posto della CIE in UE?", a: "<strong>Sì.</strong> Il passaporto è sempre valido per viaggiare in UE e ovunque. Se hai già un passaporto valido, non sei obbligato a fare la CIE." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={[articleSchema({ title: "Scadenza carta cartacea agosto 2026: cosa fare", description: "Dal 3 agosto 2026 la carta cartacea non vale per l'espatrio. Come richiedere la CIE.", url: '/cie/scadenza-cartacea', image: 'ogcie.png', datePublished: '2026-01-01', dateModified: '2026-03-28' }), faqSchema(faq)]} />
      <MiniGuide
        category="documenti"
        categoryLabel="Documenti"
        parentHref="/cie"
        parentLabel="CIE"
        title="Scadenza carta"
        titleEm="cartacea"
        subtitle="Dal 3 agosto 2026 la carta d'identità cartacea non è più valida per viaggiare in Europa. Hai ancora tempo per richiedere la CIE, ma non aspettare estate."
        readTime="3 min"
        updated="gennaio 2026"
      >
        <MgSection label="La deadline" title="3 agosto 2026:" titleEm="cosa cambia" side="left">
          <p>Il <strong>Regolamento UE 2019/1157</strong> stabilisce che dal 3 agosto 2026 tutte le carte d&apos;identità cartacee cessano la loro validità per l&apos;espatrio nei Paesi dell&apos;Unione Europea e nei Paesi convenzionati (Svizzera, UK, Turchia, Egitto e altri).</p>
          <p>Per viaggiare in Europa dopo quella data servirà la <strong>CIE (Carta d&apos;Identità Elettronica)</strong> o il passaporto. La carta cartacea rimane valida come documento di riconoscimento in Italia fino alla sua scadenza naturale.</p>
          <MgPull warn>
            <strong>Non aspettare giugno-luglio.</strong> Milioni di italiani hanno ancora la cartacea. Quando si avvicinerà la scadenza i Comuni saranno sommersi di richieste e i tempi di attesa si allungheranno. Prenota adesso.
          </MgPull>
        </MgSection>

        <MgSection label="Le tue opzioni" title="Cosa fare" titleEm="adesso" side="right">
          <p><strong>Opzione 1 — Richiedi la CIE:</strong> prenota su prenotazionicie.interno.gov.it (Agenda CIE), presentati in Comune con documento e fototessera, paga 22,21€. La CIE arriva a casa in 6 giorni lavorativi. Dura 10 anni e funziona anche come identità digitale (app CieID).</p>
          <p><strong>Opzione 2 — Usa il passaporto:</strong> se hai già un passaporto valido, non devi fare nulla. Il passaporto è valido per tutti i Paesi del mondo, non solo l&apos;UE.</p>
          <MgPull>
            <strong>Consiglio:</strong> se non hai né CIE né passaporto, richiedi la CIE — dura 10 anni, costa meno del passaporto (22€ vs 116€) e ha molti usi aggiuntivi come identità digitale.
          </MgPull>
        </MgSection>

        <MgSection label="Domande frequenti" title="FAQ" side="left">
          <MgFaq items={faq} />
        </MgSection>
      </MiniGuide>
    </>
  );
}
