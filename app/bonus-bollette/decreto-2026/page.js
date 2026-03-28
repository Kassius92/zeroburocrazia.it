import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MiniGuide, { MgSection, MgPull, MgFaq } from '@/components/redesign/MiniGuide';

export const metadata = {
  title: 'Decreto Bollette 2026: Bonus 115€ Extra, Chi Ne Ha Diritto e Quando Arriva',
  description: 'Decreto bollette 2026: bonus una tantum di 115€ aggiuntivi sulla bolletta elettrica. Chi ne ha diritto, quando arriva e come funziona.',
  alternates: { canonical: 'https://zeroburocrazia.it/bonus-bollette/decreto-2026' },
};

const faq = [
  { q: "Quanto vale il decreto bollette 2026?", a: "<strong>115€ una tantum</strong> sulla bolletta elettrica, che si somma ai ~200€ del bonus sociale ordinario. Totale: <strong>~315€</strong> per chi ha i requisiti." },
  { q: "Chi ha diritto ai 115€ extra?", a: "Solo chi già riceve il <strong>bonus sociale elettrico</strong>: ISEE fino a 9.796€, o fino a 20.000€ per famiglie con 4+ figli. Non serve fare domanda." },
  { q: "Devo fare domanda per il decreto bollette?", a: "<strong>No.</strong> Il bonus 115€ viene applicato automaticamente in bolletta a chi ha già il bonus sociale. L'unica cosa da fare è avere l'ISEE aggiornato." },
  { q: "Quando arriva il bonus 115€ in bolletta?", a: "L'ARERA deve emanare una delibera operativa. Si prevede che lo sconto arrivi <strong>entro primavera 2026</strong>, suddiviso nelle fatture successive." },
  { q: "Il bonus 115€ vale anche per il gas?", a: "<strong>No</strong>, il bonus extra da 115€ è solo sulla <strong>bolletta elettrica</strong>. Il bonus gas ordinario continua a parte, con importi che variano per zona climatica." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={[articleSchema({ title: 'Decreto bollette 2026: bonus 115€ extra', description: 'Decreto bollette 2026: chi ha diritto ai 115€ aggiuntivi e quando arrivano.', url: '/bonus-bollette/decreto-2026', image: 'ogbonusbollette.png', datePublished: '2026-02-15', dateModified: '2026-03-28' }), faqSchema(faq)]} />
      <MiniGuide
        category="fisco"
        categoryLabel="Fisco"
        parentHref="/bonus-bollette"
        parentLabel="Bonus bollette"
        title="Decreto bollette"
        titleEm="2026"
        subtitle="Il governo ha aggiunto 115€ una tantum sul bonus bollette elettrico. Chi ce l'ha già lo riceve automaticamente. Ecco i dettagli."
        readTime="3 min"
        updated="febbraio 2026"
      >
        <MgSection label="Cos'è" title="Il bonus extra" titleEm="da 115€" side="left">
          <p>Il decreto bollette 2026 ha aggiunto un <strong>contributo una tantum di 115€</strong> sulla bolletta elettrica per le famiglie che già ricevono il bonus sociale. Non è un bonus separato: è uno sconto aggiuntivo che appare direttamente nella bolletta, senza fare nessuna domanda.</p>
          <MgPull>
            <strong>Automatico e cumulabile.</strong> Si somma al bonus elettrico ordinario (~200€ per una famiglia di 3) e al bonus gas. Se hai già il bonus sociale, ricevi in automatico anche questo, non appena l&apos;ARERA emette la delibera operativa.
          </MgPull>
        </MgSection>

        <MgSection label="Chi ha diritto" title="Requisiti per" titleEm="i 115€ extra" side="right">
          <p>Ha diritto al bonus extra chi soddisfa già i requisiti del <strong>bonus sociale elettrico ordinario</strong>: ISEE non superiore a 9.796€ (famiglie fino a 3 figli), oppure ISEE non superiore a 20.000€ per famiglie numerose con 4 o più figli a carico.</p>
          <p>Non è necessario fare nulla di aggiuntivo. L&apos;INPS trasmette automaticamente i dati ISEE ai gestori dell&apos;energia. L&apos;unico requisito pratico: avere <strong>l&apos;ISEE 2026 aggiornato e valido</strong>.</p>
          <MgPull warn>
            <strong>Senza ISEE aggiornato non ricevi il bonus.</strong> Se il tuo ISEE 2025 è scaduto e non hai ancora fatto quello del 2026, i gestori non hanno i dati per applicare lo sconto. Rinnova l&apos;ISEE il prima possibile.
          </MgPull>
        </MgSection>

        <MgSection label="Domande frequenti" title="FAQ" side="left">
          <MgFaq items={faq} />
        </MgSection>
      </MiniGuide>
    </>
  );
}
