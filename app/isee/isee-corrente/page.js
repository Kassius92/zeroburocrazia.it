import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MiniGuide, { MgSection, MgPull, MgFaq } from '@/components/redesign/MiniGuide';

export const metadata = {
  title: "Come Fare l'ISEE Corrente nel 2026: Quando Serve e Procedura",
  description: "ISEE corrente 2026: quando conviene farlo, requisiti, documenti e procedura. Serve se il reddito è calato di almeno il 25% rispetto a 2 anni fa.",
  alternates: { canonical: 'https://zeroburocrazia.it/isee/isee-corrente' },
};

const faq = [
  { q: "Quando conviene fare l'ISEE corrente?", a: "Quando la tua situazione economica <strong>è peggiorata rispetto a 2 anni fa</strong>: hai perso il lavoro, il reddito è calato di almeno il 25%, hai perso un trattamento assistenziale. L'ISEE ordinario usa i dati del 2024 — se nel 2026 la tua situazione è molto diversa, l'ISEE corrente la riflette meglio." },
  { q: "Quanto dura l'ISEE corrente?", a: "<strong>6 mesi</strong> se aggiorna solo i redditi. <strong>2 mesi</strong> se aggiorna anche i patrimoni. Poi va rinnovato se le condizioni persistono." },
  { q: "L'ISEE corrente sostituisce quello ordinario?", a: "<strong>Sì</strong>, per il periodo di validità. Viene usato al posto dell'ISEE ordinario per tutte le prestazioni che lo richiedono." },
  { q: "Posso fare l'ISEE corrente online?", a: "Sì, tramite il sito INPS con SPID. Però è più complesso dell'ISEE ordinario perché devi dimostrare il calo di reddito con documenti. Il CAF è la scelta più sicura." },
  { q: "Serve prima l'ISEE ordinario?", a: "<strong>Sì.</strong> L'ISEE corrente si basa sull'ISEE ordinario già in corso. Prima fai l'ordinario, poi, se serve, richiedi il corrente." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={[articleSchema({ title: "ISEE corrente 2026: quando serve e come farlo", description: "ISEE corrente 2026: requisiti, documenti e procedura.", url: '/isee/isee-corrente', image: 'ogisee.png', datePublished: '2026-03-01', dateModified: '2026-03-28' }), faqSchema(faq)]} />
      <MiniGuide
        category="fisco"
        categoryLabel="Fisco"
        parentHref="/isee"
        parentLabel="Faccio l'ISEE"
        title="ISEE"
        titleEm="corrente"
        subtitle="Se hai perso il lavoro o il tuo reddito è calato, l'ISEE corrente aggiorna il calcolo ai dati recenti invece di usare quelli di 2 anni fa."
        readTime="4 min"
        updated="marzo 2026"
      >
        <MgSection label="Cos'è" title="ISEE corrente vs" titleEm="ISEE ordinario" side="left">
          <p>L&apos;ISEE ordinario usa i redditi del <strong>2024</strong> (due anni prima). Se nel 2026 la tua situazione economica è peggiorata significativamente, l&apos;ISEE ordinario non la riflette: risulteresti più &ldquo;ricco&rdquo; di quanto sei realmente, perdendo bonus e agevolazioni.</p>
          <p>L&apos;ISEE corrente permette di <strong>aggiornare il calcolo con i redditi attuali</strong> (ultimi 12 mesi o ultimi 2 mesi per i patrimoni). Sostituisce l&apos;ISEE ordinario per tutto il periodo di validità.</p>
          <MgPull>
            <strong>Quando ha senso:</strong> reddito calato di almeno il 25%, perdita del lavoro, cassa integrazione, fine di un trattamento assistenziale, variazione del nucleo familiare. Se la tua situazione è migliorata rispetto al 2024, l&apos;ISEE corrente non ti conviene.
          </MgPull>
        </MgSection>

        <MgSection label="Come si fa" title="Procedura e" titleEm="documenti" side="right">
          <p><strong>Documenti che servono in più rispetto all&apos;ISEE ordinario:</strong> buste paga degli ultimi 12 mesi (o 2 mesi se aggiorni anche il patrimonio), eventuale lettera di licenziamento o comunicazione di cassa integrazione, estratti conto bancari aggiornati.</p>
          <p>La domanda si presenta al <strong>CAF</strong> (consigliato) o online su INPS.it con SPID. Il CAF verifica che tu abbia i requisiti e compila il modello DSU aggiuntivo. L&apos;attestazione ISEE corrente arriva in 4-10 giorni.</p>
          <MgPull warn>
            <strong>Prima fai l&apos;ISEE ordinario.</strong> L&apos;ISEE corrente si sovrappone a quello ordinario: se non hai ancora quello ordinario del 2026, il CAF deve prima farlo e poi aggiungere il corrente.
          </MgPull>
        </MgSection>

        <MgSection label="Domande frequenti" title="FAQ" side="left">
          <MgFaq items={faq} />
        </MgSection>
      </MiniGuide>
    </>
  );
}
