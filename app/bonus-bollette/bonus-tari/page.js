import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MiniGuide, { MgSection, MgPull, MgFaq } from '@/components/redesign/MiniGuide';

export const metadata = {
  title: 'Bonus TARI 2026: Sconto 25% sulla Tassa Rifiuti, Chi ne Ha Diritto',
  description: 'Bonus TARI 2026: sconto del 25% sulla tassa rifiuti per chi ha ISEE fino a 9.796€. Automatico, nessuna domanda. Come funziona.',
  alternates: { canonical: 'https://zeroburocrazia.it/bonus-bollette/bonus-tari' },
};

const faq = [
  { q: "Cos'è il bonus TARI?", a: "È uno <strong>sconto del 25%</strong> sulla tassa rifiuti (TARI). Novità del 2026, prevista dal DPCM 24/2025. Si affianca ai bonus luce, gas e acqua." },
  { q: "Chi ha diritto al bonus TARI?", a: "Le stesse famiglie che hanno diritto al bonus bollette: <strong>ISEE fino a 9.796€</strong> (fino a 3 figli) o <strong>fino a 20.000€</strong> (4+ figli)." },
  { q: "Devo fare domanda per il bonus TARI?", a: "<strong>No.</strong> Lo sconto viene applicato automaticamente. L'INPS trasmette i dati ISEE ai gestori dei rifiuti." },
  { q: "Quando arriva lo sconto TARI?", a: "L'ARERA prevede l'applicazione <strong>entro giugno 2026</strong>, suddiviso nelle rate previste dal Comune." },
  { q: "Se ho presentato l'ISEE dopo il 20 dicembre 2025?", a: "Il bonus TARI 2026 <strong>slitta al 2027</strong>. Il sistema usa l'attestazione rilasciata nell'anno precedente. Per il bonus 2027, assicurati di presentare la DSU entro dicembre 2026." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={[articleSchema({ title: 'Bonus TARI 2026: sconto 25% sulla tassa rifiuti', description: 'Bonus TARI 2026: chi ha diritto allo sconto del 25% sulla TARI e come funziona.', url: '/bonus-bollette/bonus-tari', image: 'ogbonusbollette.png', datePublished: '2026-03-01', dateModified: '2026-03-28' }), faqSchema(faq)]} />
      <MiniGuide
        category="fisco"
        categoryLabel="Fisco"
        parentHref="/bonus-bollette"
        parentLabel="Bonus bollette"
        title="Bonus"
        titleEm="TARI 2026"
        subtitle="Dal 2026 esiste anche lo sconto del 25% sulla tassa rifiuti per le famiglie con reddito basso. Automatico come il bonus luce e gas."
        readTime="3 min"
        updated="marzo 2026"
      >
        <MgSection label="La novità" title="Sconto 25%" titleEm="sulla TARI" side="left">
          <p>Dal 2026, grazie al DPCM 24/2025, le famiglie con ISEE basso hanno diritto anche a uno <strong>sconto del 25% sulla TARI</strong>, la tassa comunale sui rifiuti. È il quarto bonus utenze, dopo luce, gas e acqua.</p>
          <p>Lo sconto è <strong>automatico</strong>: l&apos;INPS trasmette i dati ai Comuni o ai gestori del servizio rifiuti, che applicano la riduzione sulle bollette/avvisi di pagamento. Non serve fare nessuna domanda separata.</p>
          <MgPull>
            <strong>Chi ne ha già diritto:</strong> le stesse famiglie che ricevono il bonus sociale luce e gas. Se hai già quei bonus con ISEE aggiornato, il bonus TARI arriva automaticamente.
          </MgPull>
        </MgSection>

        <MgSection label="Come funziona" title="Quando e come" titleEm="arriva lo sconto" side="right">
          <p>Lo sconto non appare su una bolletta separata: viene applicato direttamente sull&apos;<strong>avviso di pagamento TARI</strong> del tuo Comune. I tempi dipendono dal Comune: l&apos;ARERA prevede che la maggior parte delle famiglie riceva lo sconto entro giugno 2026.</p>
          <MgPull warn>
            <strong>ISEE scaduto = nessuno sconto.</strong> Il sistema usa l&apos;ISEE presentato entro il 20 dicembre dell&apos;anno precedente. Se non hai aggiornato l&apos;ISEE per il 2026, lo sconto slitta al 2027. Rinnova l&apos;ISEE ogni anno entro dicembre.
          </MgPull>
        </MgSection>

        <MgSection label="Domande frequenti" title="FAQ" side="left">
          <MgFaq items={faq} />
        </MgSection>
      </MiniGuide>
    </>
  );
}
