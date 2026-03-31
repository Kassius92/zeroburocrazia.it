import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideLegge104Content from './GuideLegge104Content';

export const metadata = {
  title: "Come Richiedere la Legge 104 nel 2026: Permessi, Agevolazioni e Procedura",
  description: "Legge 104/1992: come richiederla, chi ne ha diritto, permessi 3 giorni, congedo 2 anni, agevolazioni auto e fiscali. Guida gratuita aggiornata 2026.",
  keywords: ["legge 104","legge 104 2026","permessi legge 104","come richiedere legge 104","agevolazioni legge 104","104 disabilit\u00e0","congedo straordinario 104"],
  alternates: { canonical: 'https://zeroburocrazia.it/legge-104' },
  openGraph: { title: "Legge 104 nel 2026: Permessi, Agevolazioni e Procedura", url: 'https://zeroburocrazia.it/legge-104', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/oglegge104.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/oglegge104.png'] },
};

const faqItems = [
  { q: "Quanto tempo ci vuole per ottenere la Legge 104?", a: "Dal certificato medico alla visita: di solito <strong>30-90 giorni</strong>. Per patologie oncologiche o gravissime la visita \u00e8 entro <strong>15 giorni</strong>. Il verbale arriva 1-2 settimane dopo la visita. In totale, dall\u2019inizio alla fine, servono mediamente 2-4 mesi. Il consiglio \u00e8 iniziare la procedura il prima possibile, perch\u00e9 i tempi dipendono anche dalla ASL della tua zona." },
  { q: "La Legge 104 scade?", a: "Dipende dalla patologia. Se la disabilit\u00e0 \u00e8 <strong>stabilizzata o ingravescente</strong> (ad esempio una malattia degenerativa), il verbale \u00e8 definitivo e non scade mai. Se invece la condizione \u00e8 rivedibile, nel verbale viene indicata una data di revisione. L\u2019INPS ti convocher\u00e0 per una nuova visita prima della scadenza. Nel frattempo i benefici restano attivi." },
  { q: "I permessi 104 si pagano meno dello stipendio?", a: "<strong>No, sono retribuiti al 100%.</strong> I 3 giorni di permesso mensili vengono pagati interamente dall\u2019INPS (che rimborsa il datore di lavoro). Non perdi un centesimo di stipendio e non devi recuperare le ore." },
  { q: "Posso usare i permessi 104 per me stesso?", a: "<strong>S\u00ec.</strong> Se sei un lavoratore dipendente con riconoscimento di handicap grave (art. 3 comma 3), hai diritto ai 3 giorni al mese per te stesso, senza bisogno di un referente. Puoi usarli per visite mediche, riabilitazione, riposo o qualsiasi necessit\u00e0 legata alla tua condizione." },
  { q: "Se lavoro part-time ho diritto ai permessi?", a: "<strong>S\u00ec</strong>, ma in misura proporzionale all\u2019orario di lavoro. Con un part-time al 50%, hai diritto a 1,5 giorni al mese (arrotondati per eccesso) oppure a 1 ora al giorno invece di 2. Il diritto resta, viene solo riproporzionato." },
  { q: "Il mio datore pu\u00f2 rifiutare i permessi 104?", a: "<strong>No, \u00e8 illegale.</strong> I permessi 104 sono un diritto previsto dalla legge. Il datore di lavoro non pu\u00f2 rifiutarli, condizionarli o penalizzarti per averli usati. Pu\u00f2 solo chiederti una programmazione preventiva (non vincolante) per organizzare il lavoro, ma non pu\u00f2 negarti il permesso." },
  { q: "Posso avere la 104 per un genitore anziano?", a: "<strong>S\u00ec</strong>, se il genitore ha una disabilit\u00e0 che la commissione riconosce come handicap grave. L\u2019et\u00e0 avanzata da sola non basta: serve una minorazione certificata come demenza senile, non autosufficienza totale, gravi patologie invalidanti. La commissione valuta caso per caso." },
  { q: "La 104 d\u00e0 diritto a soldi dall\u2019INPS?", a: "La 104 di per s\u00e9 <strong>non \u00e8 una prestazione economica</strong>. D\u00e0 diritto a permessi dal lavoro e agevolazioni fiscali, ma non a un assegno mensile. Per avere un assegno (pensione di invalidit\u00e0, indennit\u00e0 di accompagnamento) serve il riconoscimento dell\u2019<strong>invalidit\u00e0 civile</strong>, che \u00e8 una procedura parallela spesso fatta insieme alla 104." },
];


export default function Page() {
  const schemas = [
  articleSchema({ title: "Legge 104 nel 2026: Permessi, Agevolazioni e Procedura", description: "Come richiedere la Legge 104, chi ne ha diritto, permessi, congedo e agevolazioni.", url: '/legge-104', image: 'oglegge104.png', datePublished: '2026-03-20', dateModified: '2026-03-27' }),
  faqSchema(faqItems),
];
  return (
    <>
      <SchemaOrg schemas={schemas} />
      <GuideLegge104Content faqItems={faqItems} />
    </>
  );
}
