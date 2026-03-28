import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MiniGuide, { MgSection, MgPull, MgFaq, MgTable } from '@/components/redesign/MiniGuide';

export const metadata = {
  title: 'Tassi Mutuo 2026: Fisso vs Variabile, Euribor e Rate Aggiornate',
  description: 'Tassi mutuo 2026: tasso fisso al 2,8-3,1%, Euribor in calo, confronto fisso vs variabile e rate aggiornate per importi comuni.',
  alternates: { canonical: 'https://zeroburocrazia.it/mutuo/tassi-2026' },
};

const faq = [
  { q: "Conviene il tasso fisso o variabile nel 2026?", a: "Con tassi fissi intorno al <strong>2,8-3,1%</strong>, il fisso è competitivo e protegge da futuri rialzi. Il variabile parte più basso grazie all'Euribor in calo, ma può risalire. Per chi vuole sicurezza: fisso. Per chi prevede di estinguere in 10 anni: valuta il variabile." },
  { q: "Quanto costa un mutuo di 150.000€ a 25 anni?", a: "Con tasso fisso 3%: rata mensile circa <strong>710€</strong>. Con variabile al 2,5%: rata iniziale circa <strong>672€</strong>, ma può cambiare." },
  { q: "L'Euribor sta scendendo?", a: "Sì. La BCE ha tagliato i tassi nel 2025 e l'Euribor 3 mesi è sceso rispetto ai picchi del 2023-2024. Questo rende i mutui variabili più convenienti rispetto a un anno fa." },
  { q: "Posso rinegoziare il mutuo per avere un tasso migliore?", a: "<strong>Sì.</strong> Puoi chiedere alla tua banca di rinegoziare, oppure fare una <strong>surroga</strong> (trasferimento a un'altra banca a costo zero). La surroga è un diritto e la banca non può rifiutarla." },
  { q: "Il Fondo Consap è ancora attivo nel 2026?", a: "<strong>Sì.</strong> Il Fondo Consap copre fino all'80% del mutuo per under 36 con ISEE sotto 40.000€. Permette di ottenere il mutuo anche senza anticipo." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={[articleSchema({ title: 'Tassi mutuo 2026: fisso vs variabile e rate aggiornate', description: 'Tassi mutuo 2026: confronto fisso e variabile, Euribor, rate per importi comuni.', url: '/mutuo/tassi-2026', image: 'ogmutuo.png', datePublished: '2026-01-15', dateModified: '2026-03-28' }), faqSchema(faq)]} />
      <MiniGuide
        category="casa"
        categoryLabel="Casa"
        parentHref="/mutuo"
        parentLabel="Mutuo prima casa"
        title="Tassi mutuo"
        titleEm="2026"
        subtitle="Fisso al 2,8-3,1%, variabile in calo grazie alla BCE. Il confronto aggiornato e le rate reali per capire quanto pagheresti ogni mese."
        readTime="4 min"
        updated="gennaio 2026"
      >
        <MgSection label="Il quadro" title="Tassi 2026:" titleEm="fisso vs variabile" side="left">
          <p>Nel 2026 il mercato dei mutui si trova in una situazione più favorevole rispetto al 2023-2024. La BCE ha tagliato i tassi di riferimento nel corso del 2025, portando l&apos;Euribor (l&apos;indice su cui si basano i mutui variabili) in netto calo rispetto ai picchi del 4%+ del 2023.</p>
          <p>I <strong>tassi fissi</strong> si aggirano attorno al <strong>2,8-3,1%</strong> (TAEG, incluse le spese). I <strong>tassi variabili</strong> partono da circa il <strong>2,3-2,7%</strong> ma possono variare nel tempo.</p>
          <MgPull>
            <strong>Regola 2026:</strong> con tassi fissi sotto il 3%, bloccare il tasso adesso è una scelta difensiva sensata. Il variabile è tornato competitivo ma introduce incertezza sulla rata futura.
          </MgPull>
        </MgSection>

        <MgSection label="Le rate" title="Quanto paghi" titleEm="ogni mese" side="right">
          <MgTable
            headers={['Importo mutuo', '20 anni (fisso 3%)', '25 anni (fisso 3%)', '30 anni (fisso 3%)']}
            rows={[
              ['100.000€', '555€/mese', '474€/mese', '421€/mese'],
              ['150.000€', '832€/mese', '711€/mese', '632€/mese'],
              ['200.000€', '1.109€/mese', '948€/mese', '843€/mese'],
              ['250.000€', '1.387€/mese', '1.185€/mese', '1.054€/mese'],
            ]}
          />
          <MgPull warn>
            <strong>La rata non dovrebbe superare il 30-35% del reddito netto mensile.</strong> Con 2.000€/mese netti, la rata sostenibile è massimo 600-700€. Supera questa soglia e la banca potrebbe richiedere garanzie aggiuntive.
          </MgPull>
        </MgSection>

        <MgSection label="Hai già un mutuo?" title="La surroga:" titleEm="cambia banca gratis" side="left">
          <p>Se hai un mutuo con tasso fisso sopra il 3,5% o un variabile che sta pesando troppo, puoi fare la <strong>surroga</strong>: trasferire il mutuo a un&apos;altra banca con condizioni migliori. È completamente gratuita (zero spese di notaio, perizia, istruttoria) e la banca non può rifiutarla.</p>
          <p>Una differenza di 0,5% su un mutuo da 200.000€ a 20 anni vale circa <strong>10.000€ di interessi in meno</strong>. Vale la pena confrontare le offerte almeno ogni 2-3 anni.</p>
        </MgSection>

        <MgSection label="Domande frequenti" title="FAQ" side="right">
          <MgFaq items={faq} />
        </MgSection>
      </MiniGuide>
    </>
  );
}
