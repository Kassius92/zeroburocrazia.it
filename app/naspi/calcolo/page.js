import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import FAQ from '@/components/FAQ';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Come Calcolare la NASpI nel 2026: Importo, Massimale e Decalage',
  description: 'Calcolo NASpI 2026: formula, massimale 1.584\u20ac, soglia 1.456\u20ac, decalage 3% dal 6\u00b0 mese. Esempi pratici per ogni fascia di stipendio.',
  keywords: ['calcolo NASpI', 'calcolo NASpI 2026', 'NASpI importo', 'NASpI quanto spetta', 'massimale NASpI 2026', 'NASpI netto', 'NASpI decalage'],
  alternates: { canonical: 'https://zeroburocrazia.it/naspi/calcolo' },
  openGraph: {
    title: 'Come Calcolare la NASpI nel 2026: Importo e Massimale',
    description: 'Calcolo NASpI 2026: formula, massimale, decalage ed esempi pratici.',
    url: 'https://zeroburocrazia.it/naspi/calcolo',
    type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ognaspi.png', width: 1200, height: 630 }],
  },
};

const faqItems = [
  { q: "Qual \u00e8 l\u2019importo massimo della NASpI nel 2026?", a: "<strong>1.584,70\u20ac lordi al mese</strong> (circa 1.250\u20ac netti). \u00c8 il tetto massimo, indipendentemente da quanto guadagnavi. Aggiornato con la Circolare INPS n. 4 del 28 gennaio 2026." },
  { q: "Come si calcola la NASpI?", a: "Si prende la <strong>retribuzione media degli ultimi 4 anni</strong> e si divide per le settimane lavorate, poi si moltiplica per 4,33. Se il risultato \u00e8 sotto 1.456,72\u20ac: NASpI = 75%. Se \u00e8 sopra: 75% di 1.456,72\u20ac + 25% della parte eccedente. Massimo 1.584,70\u20ac." },
  { q: "Quanto prendo di NASpI con uno stipendio di 1.500\u20ac?", a: "Con 1.500\u20ac lordi/mese: la NASpI \u00e8 circa <strong>1.103\u20ac lordi</strong> (75% di 1.456,72 + 25% della differenza). Al netto delle tasse, circa <strong>950-1.000\u20ac</strong>." },
  { q: "Il decalage come funziona?", a: "Dal <strong>6\u00b0 mese</strong> (151\u00b0 giorno) l\u2019importo si riduce del 3% ogni mese. Per gli over 55, parte dall\u20198\u00b0 mese. Esempio: se prendi 1.200\u20ac, dal 6\u00b0 mese scendi a 1.164\u20ac, poi 1.129\u20ac, e cos\u00ec via." },
  { q: "Quanto dura la NASpI?", a: "Met\u00e0 delle settimane di contribuzione degli ultimi 4 anni. Se hai lavorato 2 anni (104 settimane): NASpI per 52 settimane = <strong>12 mesi</strong>. Massimo 24 mesi." },
  { q: "La NASpI \u00e8 lorda o netta?", a: "<strong>Lorda.</strong> Sull\u2019importo si applicano le ritenute IRPEF e addizionali. L\u2019importo netto \u00e8 circa il <strong>20-25% in meno</strong> del lordo." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Come Calcolare la NASpI nel 2026: Importo, Massimale e Decalage',
      description: 'Calcolo NASpI 2026: formula, massimale, decalage ed esempi.',
      url: '/naspi/calcolo', image: 'ognaspi.png',
      datePublished: '2026-03-20', dateModified: '2026-03-20',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-lavoro">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <SchemaOrg schemas={schemas} />

      <div className="layout" style={{paddingTop: '120px'}}>
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Guida principale</span>
            <div className="perc-steps">
              <a href="/naspi" className="ps active">{'\uD83D\uDCC9'} NASpI</a>
              <span className="pa">{'\u203A'}</span>
              <a href="/naspi/calcolo" className="ps">{'\uD83E\uDDEE'} Calcolo importo</a>
            </div>
          </div>

          <div className="sec r" id="intro">
            <div className="sec-tag">Guida specifica</div>
            <h1 style={{fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '18px'}}>Come calcolare la <em>NASpI</em> nel 2026</h1>
            <p>Hai perso il lavoro e vuoi sapere <strong>quanto ti spetta di disoccupazione</strong>. La formula non &egrave; complicata, ma ha delle soglie che cambiano ogni anno. Ecco i numeri aggiornati al 2026 (Circolare INPS n. 4 del 28/01/2026).</p>
          </div>

          <div className="sec r" id="formula">
            <div className="sec-tag">La formula</div>
            <h2>Come si calcola</h2>
            <div className="steps r">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Calcola la retribuzione media mensile</strong><p>Prendi il totale delle retribuzioni imponibili degli ultimi 4 anni, dividilo per le settimane di contribuzione, poi moltiplica per 4,33 (settimane in un mese).</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Applica le percentuali</strong><p>Se la media &egrave; <strong>&le; 1.456,72&euro;</strong>: NASpI = 75% della media. Se la media &egrave; <strong>&gt; 1.456,72&euro;</strong>: NASpI = 75% di 1.456,72&euro; + 25% della parte eccedente.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Verifica il tetto massimo</strong><p>L&apos;importo non pu&ograve; superare <strong>1.584,70&euro; lordi/mese</strong>. Se il calcolo d&agrave; di pi&ugrave;, prendi il massimale.</p></div></div>
            </div>
          </div>

          <div className="sec r" id="esempi">
            <div className="sec-tag">Esempi pratici</div>
            <h2>Quanto prendi in base allo stipendio</h2>
            <div className="tw r">
              <table>
                <thead><tr><th>Stipendio lordo</th><th>NASpI lorda</th><th>NASpI netta (stima)</th><th>Durata (2 anni lavoro)</th></tr></thead>
                <tbody>
                  <tr><td className="cv">1.200&euro;/mese</td><td className="cv">900&euro;</td><td className="cv">~770&euro;</td><td>12 mesi</td></tr>
                  <tr><td className="cv">1.500&euro;/mese</td><td className="cv">1.103&euro;</td><td className="cv">~950&euro;</td><td>12 mesi</td></tr>
                  <tr className="hl"><td className="cv">1.800&euro;/mese</td><td className="cv cfr">1.178&euro;</td><td className="cv">~1.000&euro;</td><td>12 mesi</td></tr>
                  <tr><td className="cv">2.000&euro;/mese</td><td className="cv">1.228&euro;</td><td className="cv">~1.050&euro;</td><td>12 mesi</td></tr>
                  <tr><td className="cv">2.500&euro;/mese</td><td className="cv">1.354&euro;</td><td className="cv">~1.150&euro;</td><td>12 mesi</td></tr>
                  <tr><td className="cv">3.000&euro;+ /mese</td><td className="cv">1.584&euro; (max)</td><td className="cv">~1.250&euro;</td><td>12 mesi</td></tr>
                </tbody>
              </table>
            </div>

            <div className="dark-block r">
              <h3>{'\uD83D\uDCA1'} Esempio: Giulia, licenziata dopo 3 anni</h3>
              <p>Giulia guadagnava <strong>1.800&euro; lordi/mese</strong>. Ha lavorato 3 anni (156 settimane di contribuzione).</p>
              <p>Retribuzione media: 1.800&euro;. Sopra la soglia di 1.456,72&euro;.</p>
              <p>NASpI = 75% di 1.456,72 + 25% di (1.800 - 1.456,72) = 1.092,54 + 85,82 = <strong>1.178&euro; lordi/mese</strong></p>
              <p>Netto (stima): <strong>~1.000&euro;/mese</strong></p>
              <p>Durata: 156 &divide; 2 = 78 settimane = <strong>~18 mesi</strong></p>
              <div className="db-row db-total"><span className="db-label">Dal 6&deg; mese</span><span className="db-val">-3%/mese (decalage)</span></div>
            </div>
          </div>

          <div className="sec r" id="decalage">
            <div className="sec-tag">La riduzione</div>
            <h2>Il decalage: come scende l&apos;importo</h2>
            <p>La NASpI non resta uguale per tutta la durata. Dal <strong>6&deg; mese</strong> (151&deg; giorno) l&apos;importo si riduce del 3% ogni mese. Per gli <strong>over 55</strong>, il decalage parte dall&apos;8&deg; mese.</p>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Dopo un anno l&apos;importo cala parecchio</div>
              <p>Se parti da 1.200&euro;, dopo 12 mesi sei a circa <strong>960&euro;</strong>. Dopo 18 mesi a circa <strong>800&euro;</strong>. Pianifica le spese considerando la riduzione, non l&apos;importo iniziale.</p>
            </div>
          </div>

          <div className="sec r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/naspi" className="rc"><span className="rc-e">{'\uD83D\uDCC9'}</span><div className="rc-t">NASpI</div><div className="rc-d">Guida completa: requisiti, domanda e durata.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/naspi/domanda-inps" className="rc"><span className="rc-e">{'\uD83D\uDCDD'}</span><div className="rc-t">Domanda NASpI</div><div className="rc-d">Come fare domanda entro 68 giorni.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/isee/isee-corrente" className="rc"><span className="rc-e">{'\u26A1'}</span><div className="rc-t">ISEE Corrente</div><div className="rc-d">Se il reddito \u00e8 crollato, aggiorna l&apos;ISEE.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>
      </div>
      <Footer variant="scheda" />
    </>
    </div>
  );
}
