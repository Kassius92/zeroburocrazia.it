import GuideSpidContent from './GuideSpidContent';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Come Fare lo SPID nel 2026: Gratis con CIE in 15 Minuti',
  description: 'Come fare lo SPID nel 2026: gratis con CIE, quale provider scegliere, riconoscimento online. Guida passo passo gratuita.',
  alternates: { canonical: 'https://zeroburocrazia.it/spid' },
  openGraph: {
    title: 'Come Fare lo SPID nel 2026: Gratis con CIE in 15 Minuti',
    description: 'Come fare lo SPID nel 2026: gratis con CIE, quale provider scegliere. Guida passo passo gratuita.',
    url: 'https://zeroburocrazia.it/spid',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/og-spid.png', width: 1200, height: 630 }],
  },
};

const faqItems = [
  { q: "Lo SPID è obbligatorio?", a: "Tecnicamente no. Ma senza SPID (o CIE) non accedi a quasi nessun servizio online della PA: precompilata, bonus, ISEE, certificati. Costa 0€ e ci metti 15 minuti." },
  { q: "Lo SPID scade?", a: "Lo SPID in sé non scade. La password va cambiata ogni 6-12 mesi (dipende dal provider), ma il tuo account resta attivo per sempre." },
  { q: "Posso avere più SPID con provider diversi?", a: "Sì. Puoi avere SPID con Poste, Aruba e Lepida contemporaneamente. Utile come backup." },
  { q: "SPID e CIE sono la stessa cosa?", a: "No, ma fanno quasi le stesse cose. Lo SPID è più pratico (non cerchi la carta ogni volta), la CIE è più sicura. Il consiglio: fatti entrambi." },
  { q: "Cosa sono i 3 livelli dello SPID?", a: "Livello 1: username + password. Livello 2: password + conferma dall'app (quello che usi nel 99% dei casi). Livello 3: serve un dispositivo fisico, rarissimo." },
  { q: "Quanto costa fare lo SPID?", a: "Da 0€ a 9,90€. Con CIE o ufficio postale: gratis. Videochiamata da casa: circa 9,90€ una tantum." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Come fare lo SPID nel 2026: guida completa e gratuita',
      description: 'Come fare lo SPID nel 2026: quale provider scegliere, come fare il riconoscimento, quanto costa.',
      url: '/spid',
      image: 'og-spid.png',
      datePublished: '2026-03-04',
      dateModified: '2026-03-31',
    }),
    faqSchema(faqItems),
  ];

  return (
    <>
      <SchemaOrg schemas={schemas} />
      <GuideSpidContent faqItems={faqItems} />
    </>
  );
}
