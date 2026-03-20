import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import FAQ from '@/components/FAQ';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Decreto Bollette 2026: Bonus 115\u20ac Extra, Chi Ne Ha Diritto e Quando Arriva',
  description: 'Decreto bollette 2026: bonus extra 115\u20ac per chi ha gi\u00e0 il bonus sociale. Requisiti ISEE, importo totale 315\u20ac, tempi di erogazione.',
  keywords: ['decreto bollette 2026', 'bonus 115 euro bollette', 'decreto energia 2026', 'bonus bollette extra', 'bonus sociale 315 euro'],
  alternates: { canonical: 'https://zeroburocrazia.it/bonus-bollette/decreto-2026' },
  openGraph: {
    title: 'Decreto Bollette 2026: Bonus 115\u20ac Extra',
    description: 'Decreto bollette 2026: bonus extra 115\u20ac, requisiti e quando arriva.',
    url: 'https://zeroburocrazia.it/bonus-bollette/decreto-2026',
    type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogbonusbollette.png', width: 1200, height: 630 }],
  },
};

const faqItems = [
  { q: "Quanto vale il decreto bollette 2026?", a: "<strong>115\u20ac una tantum</strong> sulla bolletta elettrica, che si somma ai 200\u20ac del bonus sociale ordinario. Totale: <strong>315\u20ac</strong> per chi ha i requisiti." },
  { q: "Chi ha diritto ai 115\u20ac extra?", a: "Solo chi gi\u00e0 riceve il <strong>bonus sociale elettrico</strong>: ISEE fino a 9.796\u20ac, o fino a 20.000\u20ac per famiglie con 4+ figli. Non serve fare domanda." },
  { q: "Devo fare domanda per il decreto bollette?", a: "<strong>No.</strong> Il bonus 115\u20ac viene applicato automaticamente in bolletta a chi ha gi\u00e0 il bonus sociale. L\u2019unica cosa da fare \u00e8 avere l\u2019ISEE aggiornato." },
  { q: "Quando arriva il bonus 115\u20ac in bolletta?", a: "L\u2019ARERA deve emanare una delibera operativa. Si prevede che lo sconto arrivi <strong>entro primavera 2026</strong>, suddiviso nelle fatture successive." },
  { q: "Il bonus 115\u20ac vale anche per il gas?", a: "<strong>No</strong>, il bonus extra da 115\u20ac \u00e8 solo sulla <strong>bolletta elettrica</strong>. Il bonus gas ordinario continua a parte, con importi che variano per zona climatica e composizione familiare." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Decreto Bollette 2026: Bonus Extra 115\u20ac', description: 'Decreto bollette 2026: bonus extra, requisiti e tempistiche.', url: '/bonus-bollette/decreto-2026', image: 'ogbonusbollette.png', datePublished: '2026-03-20', dateModified: '2026-03-20' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-fisco">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <SchemaOrg schemas={schemas} />
      <div className="layout" style={{paddingTop: '120px'}}>
        <main className="main">
          <div className="perc r"><span className="perc-label">Guida principale</span><div className="perc-steps"><a href="/bonus-bollette" className="ps active">{'\uD83D\uDCA1'} Bonus Bollette</a><span className="pa">{'\u203A'}</span><a href="/bonus-bollette/decreto-2026" className="ps">{'\uD83D\uDCDC'} Decreto 2026</a></div></div>

          <div className="sec r" id="intro">
            <div className="sec-tag">Guida specifica</div>
            <h1 style={{fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '18px'}}>Decreto Bollette 2026: <em>115&euro; extra</em></h1>
            <p>Il Governo ha approvato il <strong>decreto bollette (D.L. 21/2026)</strong> che introduce un contributo straordinario di <strong>115&euro; una tantum</strong> sulla bolletta elettrica per le famiglie che gi&agrave; ricevono il bonus sociale. Sommato ai 200&euro; ordinari, lo sconto totale arriva a <strong>315&euro;</strong>.</p>
          </div>

          <div className="sec r" id="chi">
            <div className="sec-tag">Chi ne ha diritto</div>
            <h2>Requisiti</h2>
            <p>Il bonus extra spetta a chi <strong>gi&agrave; percepisce il bonus sociale elettrico</strong>:</p>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCCB'}</div><div className="clb"><strong>ISEE fino a 9.796&euro;</strong><span className="note">Famiglie con massimo 3 figli a carico.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66'}</div><div className="clb"><strong>ISEE fino a 20.000&euro;</strong><span className="note">Famiglie con 4 o pi&ugrave; figli a carico.</span></div></li>
            </ul>
            <p><strong>Non serve fare domanda.</strong> Il bonus viene applicato automaticamente in bolletta da ARERA, una volta emanata la delibera operativa.</p>

            <div className="dark-block r">
              <h3>{'\uD83D\uDCA1'} Quanto riceve in totale una famiglia nel 2026</h3>
              <p>Famiglia di 3 persone con ISEE 8.000&euro;:</p>
              <p>Bonus sociale luce ordinario: <strong>~219&euro;/anno</strong></p>
              <p>Bonus extra decreto: <strong>+115&euro; una tantum</strong></p>
              <div className="db-row db-total"><span className="db-label">Totale sconto luce</span><span className="db-val">~334&euro;</span></div>
              <p>Pi&ugrave; il bonus gas (58-195&euro; in base alla zona) e il nuovo bonus TARI (25% di sconto).</p>
            </div>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Il bonus 115&euro; vale solo per il 2026</div>
              <p>Il decreto specifica che il contributo extra &egrave; <strong>una tantum per il 2026</strong>. Non &egrave; confermato per gli anni successivi. Il bonus sociale ordinario invece si rinnova ogni anno.</p>
            </div>
          </div>

          <div className="sec r" id="faq"><div className="sec-tag">Risposte rapide</div><h2>Domande frequenti</h2><FAQ items={faqItems} /></div>

          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/bonus-bollette" className="rc"><span className="rc-e">{'\uD83D\uDCA1'}</span><div className="rc-t">Bonus Bollette</div><div className="rc-d">Guida completa: requisiti ISEE, importi e come ottenerlo.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/bonus-bollette/bonus-tari" className="rc"><span className="rc-e">{'\u267B\uFE0F'}</span><div className="rc-t">Bonus TARI</div><div className="rc-d">Sconto 25% sui rifiuti: novit&agrave; 2026.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/isee" className="rc"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">ISEE</div><div className="rc-d">Serve l&apos;ISEE aggiornato per ricevere i bonus.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>
        </main>
      </div>
      <Footer variant="scheda" />
    </>
    </div>
  );
}
