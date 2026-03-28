import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MiniGuide, { MgSection, MgPull, MgFaq } from '@/components/redesign/MiniGuide';

export const metadata = {
  title: 'Come Fare il 730 Precompilato nel 2026: Guida Passo per Passo',
  description: 'Come accedere e compilare il 730 precompilato 2026 su AgenziaEntrate.gov.it. Quando accettare, quando modificare e come evitare errori.',
  alternates: { canonical: 'https://zeroburocrazia.it/730/precompilato' },
};

const faq = [
  { q: "Il 730 precompilato è già pronto o devo compilarlo io?", a: "L'Agenzia lo prepara con i dati che ha (CU, spese sanitarie, mutui, assicurazioni). Devi <strong>controllare che sia tutto corretto</strong> e aggiungere quello che manca. Se accetti senza modifiche, non rischi controlli." },
  { q: "Quando è disponibile il 730 precompilato 2026?", a: "Di solito dal <strong>30 aprile</strong>. Da quella data puoi accedervi su agenziaentrate.gov.it. L'invio è possibile dal 20 maggio fino al <strong>30 settembre 2026</strong>." },
  { q: "Se accetto il 730 senza modifiche, evito i controlli?", a: "<strong>Sì.</strong> Se accetti il precompilato così com'è, l'Agenzia non effettua controlli documentali sulle spese già inserite. Se invece lo modifichi, i controlli restano possibili, ma solo sulle voci modificate." },
  { q: "Posso fare il 730 precompilato dal telefono?", a: "Sì, ma è scomodo. Il sito dell'Agenzia funziona da mobile ma è pensato per desktop. Meglio usare un computer per controllare bene tutti i dati." },
  { q: "Se trovo errori nel precompilato, cosa faccio?", a: "Lo <strong>modifichi direttamente online</strong>: aggiungi spese mancanti, correggi importi sbagliati, togli voci che non ti spettano. Poi invii la versione corretta. Se hai dubbi, il CAF può farlo per te." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={[
        articleSchema({ title: 'Come fare il 730 precompilato nel 2026', description: 'Guida passo per passo al 730 precompilato.', url: '/730/precompilato', image: 'og730.png', datePublished: '2026-03-15', dateModified: '2026-03-28' }),
        faqSchema(faq),
      ]} />
      <MiniGuide
        category="fisco"
        categoryLabel="Fisco"
        parentHref="/730"
        parentLabel="Faccio il 730"
        title="730 precompilato"
        titleEm="2026"
        subtitle="Come accedere, controllare e inviare il tuo 730 precompilato senza sbagliare. Tutto online, gratis, in 30 minuti."
        readTime="5 min"
        updated="marzo 2026"
      >
        <MgSection label="Come funziona" title="Il precompilato" titleEm="in breve" side="left">
          <p>Ogni anno l&apos;Agenzia delle Entrate prepara una bozza del tuo 730 con i dati che già possiede: la Certificazione Unica del tuo datore di lavoro, le spese sanitarie pagate con la tessera sanitaria, gli interessi del mutuo, le polizze assicurative. Non è un 730 già pronto e corretto: è un punto di partenza che <strong>devi controllare e integrare</strong>.</p>
          <p>La differenza fondamentale rispetto al 730 ordinario: se accetti il precompilato senza modifiche, l&apos;Agenzia non fa controlli documentali sulle spese già inserite. Questo ti salva da richieste di scontrini e ricevute anche anni dopo.</p>
          <MgPull>
            <strong>Disponibile dal 30 aprile.</strong> Puoi accedere su agenziaentrate.gov.it con SPID o CIE. Invio possibile dal 20 maggio al 30 settembre 2026.
          </MgPull>
        </MgSection>

        <MgSection label="Passo per passo" title="Come si fa" side="right">
          <p><strong>1. Accedi</strong> su agenziaentrate.gov.it con SPID o CIE. Vai in &ldquo;Dichiarazioni precompilate&rdquo;.</p>
          <p><strong>2. Controlla i dati preinsieriti</strong>: reddito da lavoro (CU), interessi mutuo, spese sanitarie, assicurazioni. Verifica che corrispondano a quello che hai effettivamente pagato.</p>
          <p><strong>3. Aggiungi quello che manca</strong>: spese paginate in contanti non tracciate, affitto (se hai diritto alla detrazione), spese scolastiche, spese veterinarie, erogazioni liberali. Queste non appaiono mai nel precompilato.</p>
          <p><strong>4. Accetta o modifica e invia</strong>: se tutto è corretto, accetti e invii. Se hai corretto qualcosa, invii la versione modificata. Ricevi la ricevuta di presentazione via email.</p>
          <MgPull warn>
            <strong>Non usare il cellulare.</strong> Il portale dell&apos;Agenzia su mobile è difficile da navigare. Usa un computer e prenditi 20-30 minuti senza fretta.
          </MgPull>
        </MgSection>

        <MgSection label="Cosa controllare" title="Le voci più spesso" titleEm="sbagliate" side="left">
          <p><strong>Spese sanitarie:</strong> l&apos;Agenzia inserisce solo quelle pagate con carta o bancomat (tracciate dal Sistema Tessera Sanitaria). Quelle pagate in contanti non ci sono. Verifica il totale e integra se necessario.</p>
          <p><strong>Affitto:</strong> quasi mai appare nel precompilato. Devi inserirlo tu con il codice del contratto e l&apos;importo annuo pagato (se hai diritto alla detrazione).</p>
          <p><strong>Spese per figli:</strong> asilo nido, scuole private, attività sportive dei figli. Queste detrazioni non vengono precompilate.</p>
          <p><strong>Spese funebri, veterinarie, per badanti:</strong> non vengono mai precompilate. Aggiungile manualmente se le hai sostenute.</p>
        </MgSection>

        <MgSection label="Domande frequenti" title="FAQ" side="right">
          <MgFaq items={faq} />
        </MgSection>
      </MiniGuide>
    </>
  );
}
