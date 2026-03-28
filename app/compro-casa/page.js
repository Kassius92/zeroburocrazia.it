import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import ComproCasaGuide from './ComproCasaGuide';

export const metadata = {
  title: 'Come Comprare Casa nel 2026: Mutuo, Bonus Prima Casa e Costi',
  description: 'Comprare casa nel 2026: come funziona il mutuo, bonus prima casa, imposte, notaio, costi nascosti e documenti necessari. Guida gratuita completa.',
  keywords: ['comprare casa','acquisto prima casa','bonus prima casa','mutuo prima casa','imposte acquisto casa','notaio compravendita','compromesso rogito','agevolazioni prima casa 2026'],
  alternates: { canonical: 'https://zeroburocrazia.it/compro-casa' },
  openGraph: { title: 'Come Comprare Casa nel 2026: Mutuo, Bonus Prima Casa e Costi', description: 'Comprare casa nel 2026: mutuo, bonus prima casa, imposte, notaio e costi. Guida gratuita.', url: 'https://zeroburocrazia.it/compro-casa', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogcomprocasa.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogcomprocasa.png'] },
};

const faqItems = [
  { q: "Posso avere le agevolazioni prima casa se ho gi\u00e0 un immobile?", a: "<strong>Dipende.</strong> Se l\u2019hai ereditato o ricevuto in donazione, puoi usare le agevolazioni. Se l\u2019hai comprato senza agevolazioni prima casa, puoi usarle. Se le hai gi\u00e0 usate e non hai ancora venduto, non puoi \u2014 a meno che tu non venda entro un anno dal rogito del nuovo acquisto." },
  { q: "Quanto tempo ho per trasferire la residenza?", a: "<strong>18 mesi dal rogito.</strong> Se non lo fai, perdi tutte le agevolazioni e ricevi un avviso dall\u2019Agenzia delle Entrate con la differenza d\u2019imposta, sanzioni (30%) e interessi." },
  { q: "Chi sceglie il notaio?", a: "<strong>L\u2019acquirente, che \u00e8 anche chi lo paga.</strong> Se compri tramite agenzia, ti proporranno il loro notaio \u2014 non sei obbligato ad accettarlo. Hai tutto il diritto di scegliere il tuo." },
  { q: "Cosa succede se il venditore si tira indietro dopo il compromesso?", a: "<strong>Ti deve restituire il doppio della caparra confirmatoria.</strong> Se hai versato 20.000\u20ac, il venditore deve restituirti 40.000\u20ac. Vale solo se nel compromesso \u00e8 indicata come \u201ccaparra confirmatoria\u201d (non \u201cacconto\u201d)." },
  { q: "Posso detrarre i costi del notaio dal 730?", a: "<strong>No, i costi notarili per la compravendita non sono detraibili.</strong> Per\u00f2 la parte dell\u2019atto di mutuo pu\u00f2 rientrare tra gli oneri detraibili. Chiedi al notaio due fatture separate." },
  { q: "Quanto anticipo devo avere?", a: "La banca finanzia massimo l\u201980% del valore dell\u2019immobile. Devi avere almeno il <strong>20% del prezzo + i costi accessori</strong> (notaio, imposte, agenzia). Su 200.000\u20ac servono almeno 50-55.000\u20ac di risparmi." },
  { q: "Tasso fisso o variabile?", a: "Il <strong>tasso fisso</strong> \u00e8 quasi sempre la scelta migliore per chi compra la prima casa: la rata resta uguale per tutta la durata. Il variabile pu\u00f2 convenire solo se prevedi di estinguere il mutuo in meno di 10 anni." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Comprare casa nel 2026: guida completa e gratuita', description: 'Comprare casa in Italia nel 2026: mutuo, notaio, imposte, bonus prima casa e costi nascosti.', url: '/compro-casa', image: 'ogcomprocasa.png', datePublished: '2026-03-04', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];
  return (<><SchemaOrg schemas={schemas} /><ComproCasaGuide faqItems={faqItems} /></>);
}
