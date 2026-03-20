import Nav from '@/components/Nav';import Footer from '@/components/Footer';import ScrollReveal from '@/components/ScrollReveal';import FAQ from '@/components/FAQ';import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
export const metadata = { title: 'Bonus TARI 2026: Sconto 25% sui Rifiuti, Chi Ne Ha Diritto e Come Funziona', description: 'Bonus TARI 2026: sconto 25% sulla tassa rifiuti per famiglie con ISEE basso. Requisiti, come funziona e quando arriva.', keywords: ['bonus TARI', 'bonus TARI 2026', 'bonus rifiuti', 'sconto TARI', 'TARI ISEE', 'bonus sociale rifiuti'], alternates: { canonical: 'https://zeroburocrazia.it/bonus-bollette/bonus-tari' }, openGraph: { title: 'Bonus TARI 2026: Sconto 25% sui Rifiuti', description: 'Bonus TARI 2026: sconto 25% sulla tassa rifiuti, requisiti e come funziona.', url: 'https://zeroburocrazia.it/bonus-bollette/bonus-tari', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogbonusbollette.png', width: 1200, height: 630 }] } };
const faqItems = [
  { q: "Cos\u2019\u00e8 il bonus TARI?", a: "\u00c8 uno <strong>sconto del 25%</strong> sulla tassa rifiuti (TARI). \u00c8 una novit\u00e0 del 2026, prevista dal DPCM 24/2025. Si affianca ai bonus luce, gas e acqua." },
  { q: "Chi ha diritto al bonus TARI?", a: "Le stesse famiglie che hanno diritto al bonus bollette: <strong>ISEE fino a 9.796\u20ac</strong> (fino a 3 figli) o <strong>fino a 20.000\u20ac</strong> (4+ figli)." },
  { q: "Devo fare domanda per il bonus TARI?", a: "<strong>No.</strong> Lo sconto viene applicato automaticamente. L\u2019INPS trasmette i dati ISEE ai gestori dei rifiuti. L\u2019unico adempimento \u00e8 avere la DSU presentata." },
  { q: "Quando arriva lo sconto TARI?", a: "L\u2019ARERA prevede l\u2019applicazione <strong>entro giugno 2026</strong>, suddiviso nelle rate previste dal Comune. Il bonus si basa sull\u2019ISEE del 2025 (presentato entro il 20 dicembre 2025)." },
  { q: "Se ho presentato l\u2019ISEE dopo il 20 dicembre 2025?", a: "Il bonus TARI 2026 <strong>slitta al 2027</strong>. Il sistema usa l\u2019attestazione rilasciata nell\u2019anno precedente. Per il bonus 2027, assicurati di presentare la DSU entro dicembre 2026." },
];
export default function Page() {
  const schemas = [ articleSchema({ title: 'Bonus TARI 2026: Sconto 25% sui Rifiuti', description: 'Bonus TARI 2026: come funziona, requisiti e tempi.', url: '/bonus-bollette/bonus-tari', image: 'ogbonusbollette.png', datePublished: '2026-03-20', dateModified: '2026-03-20' }), faqSchema(faqItems) ];
  return (
    <div className="cat-fisco"><><Nav variant="scheda" /><ScrollReveal /><SchemaOrg schemas={schemas} />
      <div className="layout" style={{paddingTop: '120px'}}><main className="main">
        <div className="perc r"><span className="perc-label">Guida principale</span><div className="perc-steps"><a href="/bonus-bollette" className="ps active">{'\uD83D\uDCA1'} Bonus Bollette</a><span className="pa">{'\u203A'}</span><a href="/bonus-bollette/bonus-tari" className="ps">{'\u267B\uFE0F'} Bonus TARI</a></div></div>
        <div className="sec r" id="intro"><div className="sec-tag">Novit&agrave; 2026</div>
          <h1 style={{fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '18px'}}>Bonus TARI 2026: sconto <em>25%</em> sui rifiuti</h1>
          <p>Dal 2026 esiste un <strong>bonus anche sulla tassa rifiuti</strong>. Si chiama bonus sociale rifiuti (o bonus TARI) e prevede uno sconto del <strong>25%</strong> sulla TARI per le famiglie con ISEE basso. &Egrave; stato introdotto dal DPCM 24/2025 e definito da ARERA. Funziona come i bonus luce e gas: <strong>automatico, senza domanda</strong>.</p>
          <div className="ib tip r"><div className="ib-t">{'\uD83D\uDCA1'} Quanto risparmi in pratica</div><p>Se la tua TARI &egrave; di 300&euro;/anno, il bonus ti fa risparmiare <strong>75&euro;</strong>. Se &egrave; di 400&euro;, risparmi <strong>100&euro;</strong>. Lo sconto viene applicato direttamente nel bollettino del Comune.</p></div>
        </div>
        <div className="sec r" id="requisiti"><div className="sec-tag">Requisiti</div><h2>Chi ne ha diritto</h2>
          <ul className="cl">
            <li className="cli r d1"><div className="ci">{'\uD83D\uDCCB'}</div><div className="clb"><strong>ISEE fino a 9.796&euro;</strong><span className="note">Famiglie con massimo 3 figli a carico. Stessi requisiti del bonus bollette.</span></div></li>
            <li className="cli r d2"><div className="ci">{'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66'}</div><div className="clb"><strong>ISEE fino a 20.000&euro;</strong><span className="note">Famiglie numerose con 4 o pi&ugrave; figli.</span></div></li>
            <li className="cli r d3"><div className="ci">{'\u26A0\uFE0F'}</div><div className="clb"><strong>DSU presentata entro il 20 dicembre dell&apos;anno precedente</strong><span className="note">Per il bonus 2026 serve l&apos;ISEE presentato nel 2025. Chi l&apos;ha fatto dopo il 20/12/2025 ricever&agrave; il bonus nel 2027.</span></div></li>
          </ul>
          <a href="/isee" className="xlink r"><span className="xlink-em">{'\uD83D\uDCCB'}</span><div className="xlink-t"><strong>Come fare l&apos;ISEE</strong> &mdash; Fallo subito per non perdere il bonus TARI 2027.</div><span className="xlink-ar">{'\u2192'}</span></a>
        </div>
        <div className="sec r" id="faq"><div className="sec-tag">Risposte rapide</div><h2>Domande frequenti</h2><FAQ items={faqItems} /></div>
        <div className="related r"><h2>Guide correlate</h2><div className="rg">
          <a href="/bonus-bollette" className="rc"><span className="rc-e">{'\uD83D\uDCA1'}</span><div className="rc-t">Bonus Bollette</div><div className="rc-d">Sconto luce e gas: guida completa.</div><span className="rc-ar">&rarr;</span></a>
          <a href="/bonus-bollette/decreto-2026" className="rc"><span className="rc-e">{'\uD83D\uDCDC'}</span><div className="rc-t">Decreto Bollette</div><div className="rc-d">115&euro; extra sulla bolletta elettrica.</div><span className="rc-ar">&rarr;</span></a>
          <a href="/isee" className="rc"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">ISEE</div><div className="rc-d">Serve ISEE aggiornato.</div><span className="rc-ar">&rarr;</span></a>
        </div></div>
      </main></div><Footer variant="scheda" /></></div>);
}
