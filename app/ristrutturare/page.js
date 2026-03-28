import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import RistrutturareGuide from './RistrutturareGuide';
export const metadata = {
  title: 'Come Ristrutturare Casa nel 2026: Bonus, Detrazioni e Permessi',
  description: 'Ristrutturare casa nel 2026: bonus ristrutturazione 50%, ecobonus, permessi comunali, bonifico parlante e detrazioni fiscali. Guida gratuita aggiornata.',
  keywords: ['bonus ristrutturazione 2026','ristrutturare casa','detrazione ristrutturazione 50%','ecobonus','CILA','bonifico parlante','permessi ristrutturazione'],
  alternates: { canonical: 'https://zeroburocrazia.it/ristrutturare' },
  openGraph: { title: 'Come Ristrutturare Casa nel 2026: Bonus, Detrazioni e Permessi', url: 'https://zeroburocrazia.it/ristrutturare', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogristrutturare.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogristrutturare.png'] },
};
const faqItems = [
  { q: "Posso detrarre la ristrutturazione se sono in affitto?", a: "<strong>S\u00ec, ma al 36% (non al 50%).</strong> Inquilini e comodatari possono detrarre, a condizione di avere il consenso del proprietario e di pagare con bonifico parlante." },
  { q: "Il bonus mobili \u00e8 indipendente dal bonus ristrutturazione?", a: "<strong>No, \u00e8 collegato.</strong> Puoi accedere al bonus mobili (50% fino a 5.000\u20ac) solo se hai lavori di ristrutturazione in corso con regolare pratica edilizia." },
  { q: "Se vendo la casa, perdo le detrazioni residue?", a: "<strong>Di default passano al nuovo proprietario.</strong> Per\u00f2 puoi accordarti nell\u2019atto di vendita per mantenerle tu. Mettilo per iscritto dal notaio." },
  { q: "Posso cumulare bonus ristrutturazione ed Ecobonus?", a: "<strong>S\u00ec, ma non sullo stesso intervento.</strong> Esempio: bonus ristrutturazione per il bagno, Ecobonus per gli infissi. Per lo stesso lavoro devi sceglierne uno solo." },
  { q: "Posso sostituire la caldaia a gas e detrarre?", a: "<strong>No, dal 2025 \u00e8 esclusa.</strong> La sostituzione di caldaie a combustibili fossili non \u00e8 pi\u00f9 agevolabile. Puoi detrarre pompe di calore, caldaie ibride o sistemi a biomassa." },
  { q: "Quanto costa ristrutturare casa al metro quadro?", a: "<strong>Tra 500 e 1.600\u20ac/mq</strong> per una ristrutturazione completa. Un rifacimento parziale (bagno + cucina + impianti) si aggira sui 15.000\u201335.000\u20ac per 80 mq." },
  { q: "Dal 2027 le aliquote calano?", a: "<strong>S\u00ec.</strong> Nel 2027 si scende al 36% (prima casa) e 30% (altre). Dal 2028 al 30% per tutti. Se puoi, conviene sostenere le spese entro il 31 dicembre 2026." },
];
export default function Page() {
  const schemas = [articleSchema({ title: 'Ristrutturare casa 2026: bonus, detrazioni e permessi', description: 'Ristrutturare casa nel 2026: bonus 50%, ecobonus, permessi e bonifico parlante.', url: '/ristrutturare', image: 'ogristrutturare.png', datePublished: '2026-03-04', dateModified: '2026-03-28' }), faqSchema(faqItems)];
  return (<><SchemaOrg schemas={schemas} /><RistrutturareGuide faqItems={faqItems} /></>);
}
