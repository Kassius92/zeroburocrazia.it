import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MiniGuide, { MgSection, MgPull, MgFaq, MgTable } from '@/components/redesign/MiniGuide';

export const metadata = {
  title: "Come Detrarre l'Affitto nel 730: Importi, Requisiti e Codici 2026",
  description: "Detrazione affitto nel 730 2026: importi fino a 991€, codici contratto, chi può detrarre e come inserirla nel modello.",
  alternates: { canonical: 'https://zeroburocrazia.it/730/detrazioni-affitto' },
};

const faq = [
  { q: "Quanto posso recuperare con la detrazione affitto?", a: "Dipende dalla categoria. <strong>Lavoratori dipendenti fuori sede</strong>: fino a 991€. <strong>Under 31 prima casa</strong>: fino a 991€. <strong>Redditi bassi (sotto 15.494€)</strong>: 300€. <strong>Redditi fino a 30.987€</strong>: 150€. Studenti fuori sede: fino a 2.633€ di spesa detraibile al 19% = circa 500€." },
  { q: "Serve il contratto registrato per detrarre l'affitto?", a: "<strong>Sì, sempre.</strong> Senza un contratto regolarmente registrato all'Agenzia delle Entrate, la detrazione non spetta. Vale per tutti i tipi di detrazione affitto." },
  { q: "Se pago l'affitto in contanti posso detrarlo?", a: "<strong>Sì.</strong> A differenza di altre detrazioni, per l'affitto non è obbligatorio il pagamento tracciabile. Puoi pagare anche in contanti, purché il contratto sia registrato." },
  { q: "L'affitto è già nel 730 precompilato?", a: "Di solito <strong>no</strong>. L'Agenzia non ha i dati dei contratti nel precompilato. Devi inserirlo tu manualmente, indicando il codice del contratto e l'importo." },
  { q: "Posso detrarre l'affitto se vivo con i miei genitori?", a: "<strong>No</strong>, a meno che il contratto di affitto sia intestato a te. Se è intestato ai tuoi genitori, la detrazione spetta a loro." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={[
        articleSchema({ title: "Detrarre l'affitto nel 730 2026: importi e requisiti", description: "Come detrarre l'affitto nel 730: importi, codici e requisiti.", url: '/730/detrazioni-affitto', image: 'og730.png', datePublished: '2026-03-15', dateModified: '2026-03-28' }),
        faqSchema(faq),
      ]} />
      <MiniGuide
        category="fisco"
        categoryLabel="Fisco"
        parentHref="/730"
        parentLabel="Faccio il 730"
        title="Detrazione affitto"
        titleEm="nel 730"
        subtitle="Quante tasse recuperi sull'affitto, chi ha diritto, quali codici usare e come inserirla nel 730 anche se non appare nel precompilato."
        readTime="4 min"
        updated="marzo 2026"
      >
        <MgSection label="Chi può detrarre" title="Le 5 categorie" titleEm="con importi diversi" side="left">
          <p>L&apos;affitto non ha una detrazione unica: esistono <strong>5 categorie diverse</strong>, ognuna con il suo importo e i suoi requisiti. Il codice da inserire nel 730 cambia a seconda della tua situazione.</p>
          <MgTable
            headers={['Categoria', 'Detrazione', 'Reddito max']}
            rows={[
              ['Contratto agevolato (canone concordato)', '495€ o 247,90€', 'Fino a 30.987€'],
              ['Lavoratore dipendente trasferito fuori sede', '991€ o 495,80€', 'Fino a 30.987€'],
              ['Under 31, prima casa', '991€ o 495,80€', 'Fino a 30.987€'],
              ['Redditi molto bassi', '300€ fisso', 'Fino a 15.494€'],
              ['Studente fuori sede', '19% su max 2.633€', 'Nessun limite'],
            ]}
          />
          <MgPull>
            <strong>Come si legge la tabella:</strong> l&apos;importo più alto spetta se il reddito è nella fascia bassa, quello più basso nella fascia alta. Se superi il reddito massimo, non hai diritto alla detrazione.
          </MgPull>
        </MgSection>

        <MgSection label="Come si fa" title="Inserirla" titleEm="nel 730" side="right">
          <p>La detrazione affitto va nel <strong>Quadro E del 730</strong>, righe E71-E76. Non appare quasi mai nel precompilato: devi aggiungerla tu.</p>
          <p>Ti servono: il <strong>codice del contratto di locazione</strong> (quello con cui è stato registrato all&apos;Agenzia delle Entrate, che trovi nella ricevuta di registrazione o sul contratto stesso), l&apos;<strong>importo annuo del canone</strong>, e la <strong>durata del contratto</strong> (se hai abitato nell&apos;immobile solo parte dell&apos;anno, metti i mesi effettivi).</p>
          <MgPull warn>
            <strong>Contratto non registrato = nessuna detrazione.</strong> Anche se paghi regolarmente l&apos;affitto, senza registrazione all&apos;Agenzia delle Entrate non hai diritto alla detrazione. Il contratto in nero non conta.
          </MgPull>
        </MgSection>

        <MgSection label="Domande frequenti" title="FAQ" side="left">
          <MgFaq items={faq} />
        </MgSection>
      </MiniGuide>
    </>
  );
}
