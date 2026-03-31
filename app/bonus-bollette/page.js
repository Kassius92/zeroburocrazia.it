import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideBonusBolletteContent from './GuideBonusBolletteContent';

export const metadata = {
  title: 'Come Ottenere il Bonus Bollette nel 2026: Requisiti ISEE e Importi',
  description: 'Bonus bollette luce e gas 2026: chi ne ha diritto, quanto vale, come si ottiene. Guida completa con importi ARERA e soglie ISEE.',
  keywords: ['bonus bollette 2026','bonus luce e gas','bonus sociale elettrico','bonus sociale gas','ISEE bollette','sconto bollette','ARERA bonus'],
  alternates: { canonical: 'https://zeroburocrazia.it/bonus-bollette' },
  openGraph: { title: 'Bonus Bollette Luce e Gas 2026: requisiti ISEE e importi', url: 'https://zeroburocrazia.it/bonus-bollette', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogbonusbollette.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogbonusbollette.png'] },
};

const faqItems = [
  { q: "Come si richiede il bonus bollette 2026?", a: "<strong>Non serve fare nessuna domanda.</strong> Il bonus bollette \u00e8 completamente automatico dal 2021. L\u2019unica cosa che devi fare \u00e8 presentare la DSU per il calcolo dell\u2019ISEE, al CAF (gratis) o online su inps.it con SPID. Se il tuo ISEE risulta sotto la soglia (9.796 euro per famiglie con massimo 3 figli a carico, oppure 20.000 euro per famiglie con almeno 4 figli), il sistema fa tutto da solo: l\u2019INPS trasmette i tuoi dati all\u2019ARERA, l\u2019ARERA li incrocia con le bollette intestate a te tramite il Sistema Informativo Integrato, e il tuo fornitore applica lo sconto in bolletta. Il tutto impiega circa 3-4 mesi dalla presentazione dell\u2019ISEE." },
  { q: "Quanto vale il bonus bollette luce nel 2026?", a: "Il bonus elettrico ordinario vale circa <strong>168\u20ac/anno</strong> per famiglie di 1-2 persone, <strong>219\u20ac</strong> per 3-4 persone, e <strong>241\u20ac</strong> per oltre 4 componenti. A questi si aggiunge un contributo straordinario di 115\u20ac dal decreto bollette 2026. Il totale pu\u00f2 arrivare a circa 315\u20ac di risparmio sulla luce." },
  { q: "Qual \u00e8 il limite ISEE per il bonus bollette 2026?", a: "La soglia ISEE \u00e8 di <strong>9.796\u20ac</strong> per famiglie con massimo 3 figli a carico (salita da 9.530\u20ac nel 2025). Per famiglie numerose con almeno 4 figli, la soglia sale a <strong>20.000\u20ac</strong>." },
  { q: "Il bonus si perde se cambio fornitore di luce o gas?", a: "<strong>No.</strong> Il Sistema Informativo Integrato trasferisce automaticamente i dati al nuovo fornitore, che continuer\u00e0 ad applicare lo sconto dalla prima bolletta utile. Non devi fare nulla." },
  { q: "Vivo in affitto, ho diritto al bonus bollette?", a: "S\u00ec, ma solo se la bolletta \u00e8 intestata a te o a un componente del tuo nucleo familiare ISEE. Se il contratto \u00e8 intestato al proprietario della casa, <strong>non puoi ricevere il bonus</strong>. La soluzione: fai la voltura (cambio intestazione) della bolletta a tuo nome." },
  { q: "Il bonus bollette \u00e8 retroattivo?", a: "<strong>S\u00ec, \u00e8 retroattivo al 1\u00b0 gennaio.</strong> Se presenti l\u2019ISEE a giugno 2026, ricevi lo sconto anche per i mesi precedenti (da gennaio a maggio) in un\u2019unica soluzione nella prima bolletta utile dopo l\u2019attivazione del bonus. Questo significa che non perdi i mesi passati, ma devi comunque aspettare i tempi tecnici di attivazione (3-4 mesi dalla presentazione dell\u2019ISEE). Per questo conviene farlo il prima possibile: prima presenti l\u2019ISEE, prima inizi a vedere lo sconto in bolletta." },
  { q: "Come faccio a sapere se ho ricevuto il bonus?", a: "Controlla in bolletta la voce <strong>\u201cCompensazione Bonus Sociale\u201d</strong>. Puoi anche verificare online sul portale SGAte (sportellotelematicosgate.it) con SPID oppure chiamare il numero verde ARERA <strong>800.166.654</strong> gratuito da fisso e da mobile." },
  { q: "Il bonus bollette \u00e8 cumulabile con altri bonus?", a: "<strong>S\u00ec, tutti i bonus sociali sono cumulabili tra loro.</strong> Con un unico ISEE sotto soglia puoi ricevere contemporaneamente: il bonus elettrico (fino a ~315\u20ac/anno con contributo straordinario), il bonus gas (da 60 a 200\u20ac/anno a seconda della zona e dell\u2019uso), il bonus acqua (50 litri gratis al giorno per persona), e il nuovo bonus TARI 2026 (25% di sconto sulla tassa rifiuti). Si attivano tutti automaticamente senza fare domande separate. Il bonus bollette \u00e8 inoltre cumulabile con l\u2019Assegno Unico, la social card e tutte le altre agevolazioni ISEE." },
];

const schemas = [
  articleSchema({ title: 'Bonus Bollette 2026: requisiti ISEE, importi e come ottenerlo', description: 'Bonus bollette luce e gas 2026: chi ne ha diritto, quanto vale, come si ottiene.', url: '/bonus-bollette', image: 'ogbonusbollette.png', datePublished: '2026-03-20', dateModified: '2026-03-27' }),
  faqSchema(faqItems),
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={schemas} />
      <GuideBonusBolletteContent faqItems={faqItems} />
    </>
  );
}
