import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import GuideAssegnoUnicoContent from './GuideAssegnoUnicoContent';

export const metadata = {
  title: "Assegno Unico Figli 2026: Importi, Requisiti e Come Fare Domanda",
  description: "Assegno Unico 2026: importi aggiornati per fascia ISEE, maggiorazioni, come fare domanda e novit\u00e0. Guida completa e gratuita.",
  keywords: ["assegno unico 2026","assegno unico figli","importi assegno unico","ISEE assegno unico","domanda assegno unico INPS","maggiorazioni assegno unico"],
  alternates: { canonical: 'https://zeroburocrazia.it/assegno-unico' },
  openGraph: { title: "Assegno Unico Figli 2026: Importi e Come Fare Domanda", url: 'https://zeroburocrazia.it/assegno-unico', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogassegnounico.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogassegnounico.png'] },
};

const faqItems = [
  { q: "Quanto prendo di Assegno Unico con ISEE basso?", a: "Con <strong>ISEE fino a 17.468,51\u20ac</strong> prendi l\u2019importo massimo: <strong>203,80\u20ac al mese per ogni figlio minorenne</strong>. Con 2 figli sono 407,60\u20ac al mese, quasi 4.900\u20ac all\u2019anno. A questo si aggiungono eventuali maggiorazioni per figli piccoli, disabilit\u00e0 o famiglie numerose che possono aumentare significativamente l\u2019importo." },
  { q: "E se non ho l\u2019ISEE?", a: "Ricevi comunque l\u2019Assegno Unico, ma <strong>al minimo</strong>: 58,30\u20ac al mese per ogni figlio minorenne. \u00c8 molto meno del possibile. Per questo conviene quasi sempre fare l\u2019ISEE \u2014 \u00e8 gratuito al CAF. Se lo presenti entro il <strong>30 giugno 2026</strong>, ricevi anche gli arretrati da marzo." },
  { q: "Devo rifare la domanda ogni anno?", a: "<strong>No.</strong> Se hai gi\u00e0 una domanda attiva, si rinnova in automatico ogni anno. Devi solo aggiornare l\u2019ISEE (entro febbraio per avere subito l\u2019importo corretto, entro giugno per gli arretrati). Devi rifare la domanda solo se \u00e8 stata respinta, revocata o rinunciata." },
  { q: "Quando arriva il pagamento a marzo 2026?", a: "L\u2019INPS paga tra il <strong>19 e il 20 marzo</strong> per chi gi\u00e0 riceveva l\u2019assegno a febbraio. Per le nuove domande presentate a febbraio, il primo pagamento arriva a <strong>fine marzo</strong> (30-31). Da marzo gli importi sono ricalcolati con l\u2019ISEE 2026." },
  { q: "Posso riceverlo dal 7\u00b0 mese di gravidanza?", a: "<strong>S\u00ec.</strong> L\u2019Assegno Unico spetta anche per i nascituri a partire dal settimo mese di gravidanza. Serve presentare la domanda con il certificato medico che attesta la gravidanza e la data presunta del parto." },
  { q: "Spetta anche ai genitori separati o divorziati?", a: "<strong>S\u00ec.</strong> In caso di affido condiviso, l\u2019assegno viene diviso al 50% tra i due genitori (oppure 100% a uno dei due su accordo o decisione del giudice). Chi fa la domanda pu\u00f2 indicare l\u2019altro genitore per la ripartizione dell\u2019importo." },
  { q: "L\u2019Assegno Unico fa reddito? Si paga l\u2019IRPEF?", a: "<strong>No.</strong> L\u2019Assegno Unico non concorre alla formazione del reddito ai fini IRPEF. Non lo dichiari nel 730 e non ci paghi le tasse. Dal 2026 \u00e8 inoltre <strong>escluso dal calcolo dell\u2019ISEE</strong>, quindi riceverlo non ti fa perdere altri bonus." },
  { q: "Fino a che et\u00e0 spetta?", a: "Fino ai <strong>21 anni</strong> se il figlio studia, lavora con reddito sotto 8.000\u20ac annui, \u00e8 disoccupato in cerca di lavoro o svolge il servizio civile. Per i <strong>figli con disabilit\u00e0</strong> certificata ai sensi della Legge 104 non c\u2019\u00e8 limite di et\u00e0." },
];


export default function Page() {
  const schemas = [
  articleSchema({ title: 'Assegno Unico Figli 2026: importi, requisiti e domanda', description: 'Assegno Unico 2026: importi per fascia ISEE, maggiorazioni, come fare domanda.', url: '/assegno-unico', image: 'ogassegnounico.png', datePublished: '2026-03-20', dateModified: '2026-03-27' }),
  faqSchema(faqItems),
];
  return (
    <>
      <SchemaOrg schemas={schemas} />
      <GuideAssegnoUnicoContent faqItems={faqItems} />
    </>
  );
}
