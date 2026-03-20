import Nav from '@/components/Nav';import Footer from '@/components/Footer';import ScrollReveal from '@/components/ScrollReveal';import FAQ from '@/components/FAQ';import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
export const metadata = { title: 'Tassi Mutuo 2026: Fisso vs Variabile, Euribor e Previsioni', description: 'Tassi mutuo 2026: quanto costa un mutuo oggi, fisso vs variabile, Euribor, previsioni BCE e come scegliere. Guida aggiornata.', keywords: ['tassi mutuo 2026','mutuo tasso fisso 2026','mutuo tasso variabile 2026','Euribor 2026','IRS 2026','mutuo prima casa tassi'], alternates: { canonical: 'https://zeroburocrazia.it/mutuo/tassi-2026' }, openGraph: { title: 'Tassi Mutuo 2026: Fisso vs Variabile e Previsioni', description: 'Tassi mutuo 2026: fisso, variabile, previsioni e come scegliere.', url: 'https://zeroburocrazia.it/mutuo/tassi-2026', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogmutuo.png', width: 1200, height: 630 }] } };
const faqItems = [
  { q: "Conviene il tasso fisso o variabile nel 2026?", a: "Dipende dalla tua tolleranza al rischio. Il <strong>fisso</strong> ti protegge da aumenti futuri (rata costante per tutta la durata). Il <strong>variabile</strong> parte pi\u00f9 basso ma pu\u00f2 salire. Con l\u2019Euribor in calo, il variabile \u00e8 tornato competitivo, ma il fisso resta la scelta pi\u00f9 sicura per chi vuole dormire tranquillo." },
  { q: "Quanto costa un mutuo di 150.000\u20ac a 25 anni?", a: "Con un tasso fisso intorno al 2,8-3,2%: rata mensile circa <strong>690-720\u20ac</strong>. Con variabile al 2,5%: rata iniziale circa <strong>670\u20ac</strong>, ma pu\u00f2 cambiare." },
  { q: "L\u2019Euribor sta scendendo?", a: "S\u00ec. La BCE ha tagliato i tassi nel 2025 e l\u2019Euribor 3 mesi \u00e8 sceso rispetto ai picchi del 2023-2024. Questo rende i mutui variabili pi\u00f9 convenienti rispetto a un anno fa." },
  { q: "Posso rinegoziare il mutuo per avere un tasso migliore?", a: "<strong>S\u00ec.</strong> Puoi chiedere alla tua banca di rinegoziare le condizioni, oppure fare una <strong>surroga</strong> (trasferimento a un\u2019altra banca a costo zero). La surroga \u00e8 un diritto e la banca non pu\u00f2 rifiutarla." },
  { q: "Il Fondo Consap \u00e8 ancora attivo nel 2026?", a: "<strong>S\u00ec.</strong> Il Fondo di Garanzia Consap copre fino all\u201980% del mutuo per under 36, famiglie numerose e giovani coppie. Permette di ottenere il mutuo anche senza un grande anticipo." },
];
export default function Page() {
  const schemas = [ articleSchema({ title: 'Tassi Mutuo 2026: Fisso, Variabile e Previsioni', description: 'Tassi mutuo 2026: guida ai tassi, fisso vs variabile e come scegliere.', url: '/mutuo/tassi-2026', image: 'ogmutuo.png', datePublished: '2026-03-20', dateModified: '2026-03-20' }), faqSchema(faqItems) ];
  return (
    <div className="cat-casa"><><Nav variant="scheda" /><ScrollReveal /><SchemaOrg schemas={schemas} />
      <div className="layout" style={{paddingTop: '120px'}}><main className="main">
        <div className="perc r"><span className="perc-label">Guida principale</span><div className="perc-steps"><a href="/mutuo" className="ps active">{'\uD83C\uDFE6'} Mutuo</a><span className="pa">{'\u203A'}</span><a href="/mutuo/tassi-2026" className="ps">{'\uD83D\uDCC8'} Tassi 2026</a></div></div>
        <div className="sec r" id="intro"><div className="sec-tag">Guida specifica</div>
          <h1 style={{fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '18px'}}>Tassi mutuo <em>2026</em>: fisso vs variabile</h1>
          <p>I tassi dei mutui nel 2026 sono <strong>in discesa rispetto ai picchi del 2023-2024</strong>. La BCE ha tagliato i tassi e l&apos;Euribor &egrave; sceso. Ma quanto conviene davvero? E meglio fisso o variabile? Ecco i numeri aggiornati.</p>
        </div>
        <div className="sec r" id="confronto"><div className="sec-tag">I numeri</div><h2>Fisso vs variabile: confronto</h2>
          <div className="tw r"><table><thead><tr><th>Tipo</th><th>Tasso indicativo</th><th>Rata per 150.000&euro;/25 anni</th><th>Pro</th><th>Contro</th></tr></thead><tbody>
            <tr className="hl"><td className="cv cfr">Fisso</td><td className="cv">2,8-3,2%</td><td className="cv">690-720&euro;</td><td>Rata stabile per sempre</td><td>Pi&ugrave; alto del variabile oggi</td></tr>
            <tr><td className="cv">Variabile</td><td className="cv">2,3-2,8%</td><td className="cv">650-690&euro;</td><td>Parte pi&ugrave; basso</td><td>Pu&ograve; salire se i tassi risalgono</td></tr>
            <tr><td className="cv">Variabile con cap</td><td className="cv">2,5-3,0%</td><td className="cv">670-700&euro;</td><td>Tetto massimo garantito</td><td>Spread pi&ugrave; alto del variabile puro</td></tr>
          </tbody></table></div>
          <div className="ib tip r"><div className="ib-t">{'\uD83D\uDCA1'} Il consiglio di ZeroBurocrazia</div><p>Se vuoi <strong>certezza sulla rata</strong> per 20-30 anni: scegli il fisso. La differenza di 30-50&euro;/mese rispetto al variabile &egrave; il prezzo della tranquillit&agrave;. Se sei disposto a correre qualche rischio e hai un reddito flessibile: il variabile con cap &egrave; un buon compromesso.</p></div>
        </div>
        <div className="sec r" id="surroga"><div className="sec-tag">Hai gi&agrave; un mutuo?</div><h2>Surroga: cambia banca gratis</h2>
          <p>Se hai un mutuo a tasso fisso stipulato nel 2023-2024 (quando i tassi erano al 4-5%), oggi puoi fare la <strong>surroga</strong>: trasferisci il mutuo a un&apos;altra banca con condizioni migliori. <strong>&Egrave; gratis, &egrave; un tuo diritto, la banca non pu&ograve; rifiutare.</strong></p>
          <div className="dark-block r">
            <h3>{'\uD83D\uDCA1'} Esempio: Marco surroga il mutuo</h3>
            <p>Marco ha un mutuo da <strong>120.000&euro;</strong> residui a tasso fisso <strong>4,2%</strong> (stipulato nel 2023). Rata: <strong>730&euro;/mese</strong>.</p>
            <p>Con la surroga a una banca che offre il <strong>2,9%</strong>, la rata scende a <strong>630&euro;/mese</strong>.</p>
            <div className="db-row db-total"><span className="db-label">Risparmio</span><span className="db-val">100&euro;/mese = 1.200&euro;/anno</span></div>
          </div>
        </div>
        <div className="sec r" id="faq"><div className="sec-tag">Risposte rapide</div><h2>Domande frequenti</h2><FAQ items={faqItems} /></div>
        <div className="related r"><h2>Guide correlate</h2><div className="rg">
          <a href="/mutuo" className="rc"><span className="rc-e">{'\uD83C\uDFE6'}</span><div className="rc-t">Mutuo Prima Casa</div><div className="rc-d">Guida completa: requisiti, Consap e documenti.</div><span className="rc-ar">&rarr;</span></a>
          <a href="/compro-casa" className="rc"><span className="rc-e">{'\uD83C\uDFE1'}</span><div className="rc-t">Compro Casa</div><div className="rc-d">Tutto il percorso: dalla ricerca al rogito.</div><span className="rc-ar">&rarr;</span></a>
          <a href="/cedolare-secca" className="rc"><span className="rc-e">{'\uD83E\uDDFE'}</span><div className="rc-t">Cedolare Secca</div><div className="rc-d">Se invece vuoi affittare un immobile.</div><span className="rc-ar">&rarr;</span></a>
        </div></div>
      </main></div><Footer variant="scheda" /></></div>);
}
