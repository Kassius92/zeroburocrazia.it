import SchemaOrg, { articleSchema, faqSchema, howToSchema } from '@/components/SchemaOrg';
import PassaportoGuide from './PassaportoGuide';
export const metadata = {
  title: 'Come Fare il Passaporto nel 2026: Costi, Documenti e Tempi',
  description: 'Passaporto 2026: come richiederlo online, documenti necessari, costo 116,20\u20ac, tempi 10-15 giorni, come trovare appuntamenti e cosa fare in caso di urgenza.',
  keywords: ['passaporto 2026','come fare il passaporto','prenotare passaporto online','costo passaporto','documenti passaporto','passaporto tempi','agenda prioritaria passaporto'],
  alternates: { canonical: 'https://zeroburocrazia.it/passaporto' },
  openGraph: { title: 'Come Fare il Passaporto nel 2026: Costi, Documenti e Tempi', url: 'https://zeroburocrazia.it/passaporto', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogpassaporto.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogpassaporto.png'] },
};
const faqItems = [
  { q: "Quanto costa il passaporto nel 2026?", a: "<strong>116,20\u20ac in totale:</strong> 42,70\u20ac di contributo amministrativo (pagamento via PagoPA) + 73,50\u20ac di contrassegno telematico (in tabaccheria). Pi\u00f9 le foto tessera (~5-10\u20ac). Se vuoi la consegna a domicilio: +9,53\u20ac." },
  { q: "Quanto tempo ci vuole per avere il passaporto?", a: "In condizioni normali, <strong>10-15 giorni lavorativi</strong> dalla presentazione. Nei periodi di punta (estate, Natale) pu\u00f2 allungarsi a 3-4 settimane. Il problema vero \u00e8 trovare l\u2019appuntamento: nelle grandi citt\u00e0 pu\u00f2 servire prenotare con mesi di anticipo." },
  { q: "Il passaporto si rinnova?", a: "<strong>No, dal 2014 non esiste pi\u00f9 il rinnovo.</strong> Quando scade (o viene smarrito/rubato), devi fare un passaporto nuovo da zero: stessa procedura, stessi costi, stessi documenti. L\u2019unica differenza: consegni il vecchio passaporto." },
  { q: "Posso prenotare l\u2019appuntamento per qualcun altro?", a: "S\u00ec. Puoi accedere al portale con il tuo SPID e selezionare <strong>\u201caltro richiedente\u201d</strong>, inserendo i dati della persona. Utile per genitori, coniugi o familiari senza SPID." },
  { q: "Non trovo appuntamenti disponibili online, come faccio?", a: "Prova a collegarti <strong>nelle prime ore del mattino</strong> (6-8): \u00e8 quando vengono rilasciati i nuovi slot. Se hai urgenza documentata, puoi accedere all\u2019<strong>agenda prioritaria</strong> presentandoti in Questura con la documentazione." },
  { q: "Posso fare il passaporto in Posta?", a: "S\u00ec, dal 2024 con il <strong>Progetto Polis</strong>. Per ora disponibile nei comuni sotto 15.000 abitanti, ma si sta estendendo." },
  { q: "Serve il passaporto per viaggiare in Europa?", a: "<strong>No, per i Paesi UE basta la CIE</strong> valida per l\u2019espatrio. Il passaporto serve per i Paesi extra-UE: USA, UK, Giappone, Australia, ecc." },
  { q: "Il passaporto per i minori come funziona?", a: "Anche i minorenni devono avere un passaporto individuale. Servono entrambi i genitori presenti o l\u2019autorizzazione del giudice. Validit\u00e0: 3 anni (sotto i 3 anni), 5 anni (3-18 anni)." },
];
export default function Page() {
  const schemas = [
    articleSchema({ title: 'Passaporto 2026: come richiederlo, costi, documenti e tempi', description: 'Come fare il passaporto nel 2026: costi 116,20\u20ac, documenti, prenotazione online e tempi.', url: '/passaporto', image: 'ogpassaporto.png', datePublished: '2026-03-15', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
    howToSchema({ name: 'Come richiedere il passaporto', description: 'Procedura per richiedere il passaporto in Italia nel 2026.', totalTime: 'P20D', image: 'ogpassaporto.png', steps: [
      { name: 'Prenota online', text: 'Vai su agenda.poliziadistato.it con SPID e prenota un appuntamento.' },
      { name: 'Paga il contributo', text: 'Paga 42,70\u20ac via PagoPA al momento della prenotazione.' },
      { name: 'Compra il contrassegno', text: 'Acquista il contrassegno telematico da 73,50\u20ac in tabaccheria.' },
      { name: 'Presentati in Questura', text: 'Porta documenti, foto tessera e contrassegno. La pratica dura 10-15 minuti.' },
      { name: 'Ritira il passaporto', text: 'In 10-15 giorni lavorativi il passaporto \u00e8 pronto per il ritiro o la spedizione.' },
    ]}),
  ];
  return (<><SchemaOrg schemas={schemas} /><PassaportoGuide faqItems={faqItems} /></>);
}
