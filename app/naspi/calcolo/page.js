import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MiniGuide, { MgSection, MgPull, MgFaq, MgTable } from '@/components/redesign/MiniGuide';

export const metadata = {
  title: 'Come Calcolare la NASpI nel 2026: Importo, Massimale e Decalage',
  description: 'Calcolo NASpI 2026: formula, massimale 1.584,70€, decalage dal 6° mese, esempi pratici per diversi livelli di stipendio.',
  alternates: { canonical: 'https://zeroburocrazia.it/naspi/calcolo' },
};

const faq = [
  { q: "Qual è l'importo massimo della NASpI nel 2026?", a: "<strong>1.584,70€ lordi al mese</strong> (circa 1.250€ netti). È il tetto massimo, indipendentemente da quanto guadagnavi." },
  { q: "Come si calcola la NASpI?", a: "Si prende la <strong>retribuzione media degli ultimi 4 anni</strong> e si divide per le settimane lavorate, poi si moltiplica per 4,33. Se il risultato è sotto 1.456,72€: NASpI = 75%. Se è sopra: 75% di 1.456,72€ + 25% della parte eccedente. Massimo 1.584,70€." },
  { q: "Quanto prendo di NASpI con uno stipendio di 1.500€?", a: "Con 1.500€ lordi/mese: la NASpI è circa <strong>1.103€ lordi</strong> (75% di 1.456,72 + 25% della differenza). Al netto delle tasse, circa <strong>950-1.000€</strong>." },
  { q: "Il decalage come funziona?", a: "Dal <strong>6° mese</strong> (151° giorno) l'importo si riduce del 3% ogni mese. Per gli over 55, parte dall'8° mese. Esempio: se prendi 1.200€, dal 6° mese scendi a 1.164€, poi 1.129€, e così via." },
  { q: "Quanto dura la NASpI?", a: "Metà delle settimane di contribuzione degli ultimi 4 anni. Se hai lavorato 2 anni (104 settimane): NASpI per 52 settimane = <strong>12 mesi</strong>. Massimo 24 mesi." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={[articleSchema({ title: 'Calcolo NASpI 2026: importo, massimale e decalage', description: 'Come calcolare la NASpI 2026: formula, esempi pratici e decalage.', url: '/naspi/calcolo', image: 'ognaspi.png', datePublished: '2026-01-28', dateModified: '2026-03-28' }), faqSchema(faq)]} />
      <MiniGuide
        category="lavoro"
        categoryLabel="Lavoro"
        parentHref="/naspi"
        parentLabel="NASpI"
        title="Calcolo"
        titleEm="NASpI 2026"
        subtitle="Quanto ti spetta di NASpI: la formula di calcolo, il massimale aggiornato a 1.584,70€ e come funziona il decalage dal 6° mese."
        readTime="5 min"
        updated="gennaio 2026"
      >
        <MgSection label="La formula" title="Come si calcola" titleEm="l'importo" side="left">
          <p>Il calcolo parte dalla tua <strong>retribuzione media settimanale</strong> degli ultimi 4 anni (dividendo la retribuzione imponibile per le settimane di contribuzione). Si moltiplica per 4,33 per avere quella mensile media (RM).</p>
          <p>Se RM è <strong>uguale o sotto 1.456,72€</strong>: la NASpI è il 75% di RM.</p>
          <p>Se RM è <strong>sopra 1.456,72€</strong>: la NASpI è 75% × 1.456,72€ + 25% × (RM − 1.456,72€). Con il massimale assoluto di 1.584,70€ lordi.</p>
          <MgPull>
            <strong>In pratica:</strong> chi guadagnava fino a 1.900€ lordi/mese prende circa il 75% dello stipendio. Chi guadagnava di più si avvicina al tetto di 1.584,70€.
          </MgPull>
        </MgSection>

        <MgSection label="Esempi" title="Quanto prendo" titleEm="con il mio stipendio" side="right">
          <MgTable
            headers={['Stipendio lordo', 'NASpI lorda', 'NASpI netta (stima)']}
            rows={[
              ['1.200€/mese', '900€', '~770€'],
              ['1.500€/mese', '1.103€', '~940€'],
              ['1.800€/mese', '1.242€', '~1.050€'],
              ['2.200€/mese', '1.452€', '~1.210€'],
              ['2.500€ o più', '1.584€ (max)', '~1.250€'],
            ]}
          />
          <MgPull warn>
            <strong>Dal 6° mese: il decalage.</strong> A partire dal 151° giorno l&apos;importo si riduce del 3% al mese. Se prendi 1.200€, al 7° mese scendi a 1.164€, all&apos;8° a 1.129€, al 9° a 1.095€. Per gli over 55 il decalage parte dall&apos;8° mese.
          </MgPull>
        </MgSection>

        <MgSection label="Durata" title="Per quanti mesi" titleEm="dura la NASpI" side="left">
          <p>La durata è pari alla <strong>metà delle settimane di contribuzione</strong> degli ultimi 4 anni. Massimo 24 mesi (104 settimane = 2 anni di contributi). Le settimane già usate per una NASpI precedente non si contano.</p>
          <p>Esempio: hai lavorato 3 anni con contributi regolari = 156 settimane → NASpI per 78 settimane = <strong>18 mesi</strong>.</p>
        </MgSection>

        <MgSection label="Domande frequenti" title="FAQ" side="right">
          <MgFaq items={faq} />
        </MgSection>
      </MiniGuide>
    </>
  );
}
