import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MiniGuide, { MgSection, MgPull, MgFaq, MgTable } from '@/components/redesign/MiniGuide';

export const metadata = {
  title: 'Importi Assegno Unico 2026: Tabella per ISEE, Maggiorazioni e Novità',
  description: 'Tabella importi assegno unico 2026: da 57€ a 200€/mese per figlio secondo ISEE, maggiorazioni per disabilità e famiglie numerose aggiornate marzo 2026.',
  alternates: { canonical: 'https://zeroburocrazia.it/assegno-unico/importi-tabella' },
};

const faq = [
  { q: "Quanto spetta di assegno unico per figlio nel 2026?", a: "Da <strong>57€/mese</strong> (ISEE sopra 45.574€ o senza ISEE) a <strong>200€/mese</strong> (ISEE fino a 17.090€). L'importo sale con le maggiorazioni per disabilità, famiglie numerose ed età del figlio." },
  { q: "Se non presento l'ISEE quanto prendo?", a: "Prendi l'importo minimo: <strong>57€ per figlio</strong>. Se presenti l'ISEE entro giugno, l'INPS fa il conguaglio e recuperi la differenza dei mesi arretrati." },
  { q: "L'assegno unico vale anche per i figli maggiorenni?", a: "<strong>Sì, fino a 21 anni</strong>, a condizione che il figlio studi, faccia un tirocinio, sia disoccupato iscritto al CPI, o faccia il servizio civile. L'importo è ridotto (max 96,90€)." },
  { q: "Le maggiorazioni si cumulano?", a: "<strong>Sì.</strong> Disabilità + mamma under 21 + famiglia numerosa si sommano. Una famiglia con 4 figli di cui 1 disabile può superare i 1.000€/mese totali." },
  { q: "Quando vengono aggiornati gli importi?", a: "Ogni anno a marzo, con la rivalutazione ISTAT. Gli importi 2026 sono rivalutati dello 0,8% rispetto al 2025." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={[articleSchema({ title: 'Importi assegno unico 2026: tabella per ISEE e maggiorazioni', description: 'Tabella importi assegno unico 2026: da 57€ a 200€/mese per figlio.', url: '/assegno-unico/importi-tabella', image: 'ogassegnounico.png', datePublished: '2026-03-01', dateModified: '2026-03-28' }), faqSchema(faq)]} />
      <MiniGuide
        category="famiglia"
        categoryLabel="Famiglia"
        parentHref="/assegno-unico"
        parentLabel="Assegno unico"
        title="Importi assegno unico"
        titleEm="2026"
        subtitle="Quanto spetta per ogni figlio secondo il tuo ISEE: la tabella completa con gli importi base, le maggiorazioni e i nuovi importi rivalutati."
        readTime="4 min"
        updated="marzo 2026"
      >
        <MgSection label="Importi base" title="Quanto spetta" titleEm="per figlio minorenne" side="left">
          <MgTable
            headers={['ISEE familiare', 'Importo/mese per figlio']}
            rows={[
              ['Fino a 17.090€', '200,00€'],
              ['17.090€ – 25.000€', 'Da 200€ a ~150€ (scala graduale)'],
              ['25.000€ – 40.000€', 'Da ~150€ a ~96,90€'],
              ['40.000€ – 45.574€', '~96,90€'],
              ['Sopra 45.574€ o senza ISEE', '57,00€ (minimo)'],
            ]}
          />
          <MgPull>
            <strong>Rivalutazione 2026:</strong> gli importi sono stati aumentati dello 0,8% rispetto al 2025 per adeguamento ISTAT. L&apos;importo massimo è passato da 199,40€ a 200,00€ mensili.
          </MgPull>
        </MgSection>

        <MgSection label="Maggiorazioni" title="Importi extra" titleEm="che si sommano" side="right">
          <MgTable
            headers={['Condizione', 'Maggiorazione mensile']}
            rows={[
              ['Figlio con disabilità grave (Legge 104 art.3 c.3)', '+105,00€'],
              ['Figlio con disabilità media', '+95,00€'],
              ['Figlio con disabilità lieve (non autosufficiente)', '+85,00€'],
              ['4° figlio e successivi', '+10,00€ cadauno'],
              ['Mamma under 21', '+20,00€'],
              ['Entrambi i genitori lavoratori', '+fino a 30,00€'],
            ]}
          />
          <MgPull>
            <strong>Si cumulano tutte.</strong> Una famiglia con 4 figli (uno con disabilità grave, mamma under 21, entrambi i genitori lavoratori) può ricevere significativamente di più del solo importo base.
          </MgPull>
        </MgSection>

        <MgSection label="Figli maggiorenni" title="Da 18 a 21 anni:" titleEm="importo ridotto" side="left">
          <p>Per i figli tra 18 e 21 anni, l&apos;assegno spetta con importo ridotto (massimo <strong>96,90€/mese</strong>) a condizione che il figlio sia a carico e: frequenti un corso di studi, faccia un tirocinio o stage, sia disoccupato iscritto al CPI, faccia il servizio civile universale, oppure abbia una disabilità (in questo caso senza limiti d&apos;età).</p>
        </MgSection>

        <MgSection label="Domande frequenti" title="FAQ" side="right">
          <MgFaq items={faq} />
        </MgSection>
      </MiniGuide>
    </>
  );
}
