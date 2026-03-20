import Nav from '@/components/Nav';import Footer from '@/components/Footer';import ScrollReveal from '@/components/ScrollReveal';import FAQ from '@/components/FAQ';import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
export const metadata = { title: 'Assegno Unico 2026: Tabella Importi per ISEE e Numero Figli', description: 'Tabella importi assegno unico 2026 per fascia ISEE e numero figli. Da 57\u20ac a 200\u20ac/figlio, maggiorazioni disabilit\u00e0 e famiglie numerose.', keywords: ['assegno unico importi','tabella assegno unico 2026','assegno unico ISEE','assegno unico quanto spetta','importo assegno unico per figlio'], alternates: { canonical: 'https://zeroburocrazia.it/assegno-unico/importi-tabella' }, openGraph: { title: 'Assegno Unico 2026: Tabella Importi per ISEE', description: 'Tabella importi assegno unico 2026 per fascia ISEE.', url: 'https://zeroburocrazia.it/assegno-unico/importi-tabella', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogassegnounico.png', width: 1200, height: 630 }] } };
const faqItems = [
  { q: "Quanto spetta di assegno unico per figlio nel 2026?", a: "Da <strong>57\u20ac/mese</strong> (ISEE sopra 45.574\u20ac o senza ISEE) a <strong>200\u20ac/mese</strong> (ISEE fino a 17.090\u20ac). L\u2019importo sale con le maggiorazioni per disabilit\u00e0, famiglie numerose ed et\u00e0 del figlio." },
  { q: "Se non presento l\u2019ISEE quanto prendo?", a: "Prendi l\u2019importo minimo: <strong>57\u20ac per figlio</strong>. Se presenti l\u2019ISEE entro giugno, l\u2019INPS fa il conguaglio e recuperi la differenza dei mesi arretrati." },
  { q: "L\u2019assegno unico vale anche per i figli maggiorenni?", a: "<strong>S\u00ec, fino a 21 anni</strong>, a condizione che il figlio studi, faccia un tirocinio, sia disoccupato iscritto al centro per l\u2019impiego, o faccia il servizio civile. L\u2019importo \u00e8 ridotto (max 96,90\u20ac)." },
  { q: "Le maggiorazioni si cumulano?", a: "<strong>S\u00ec.</strong> Disabilit\u00e0 + mamma under 21 + famiglia numerosa si sommano. Una famiglia con 4 figli di cui 1 disabile pu\u00f2 superare i 1.000\u20ac/mese totali." },
  { q: "Quando vengono aggiornati gli importi?", a: "Ogni anno a marzo, con la rivalutazione ISTAT. Gli importi 2026 sono rivalutati dello 0,8% rispetto al 2025." },
];
export default function Page() {
  const schemas = [ articleSchema({ title: 'Assegno Unico 2026: Tabella Importi per ISEE', description: 'Tabella importi assegno unico per fascia ISEE e numero figli.', url: '/assegno-unico/importi-tabella', image: 'ogassegnounico.png', datePublished: '2026-03-20', dateModified: '2026-03-20' }), faqSchema(faqItems) ];
  return (
    <div className="cat-fisco"><><Nav variant="scheda" /><ScrollReveal /><SchemaOrg schemas={schemas} />
      <div className="layout" style={{paddingTop: '120px'}}><main className="main">
        <div className="perc r"><span className="perc-label">Guida principale</span><div className="perc-steps"><a href="/assegno-unico" className="ps active">{'\uD83D\uDC68\u200D\uD83D\uDC67'} Assegno Unico</a><span className="pa">{'\u203A'}</span><a href="/assegno-unico/importi-tabella" className="ps">{'\uD83D\uDCCA'} Importi</a></div></div>
        <div className="sec r" id="intro"><div className="sec-tag">Guida specifica</div>
          <h1 style={{fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '18px'}}>Assegno unico 2026: <em>tabella importi</em></h1>
          <p>L&apos;importo dell&apos;assegno unico dipende da due cose: <strong>ISEE</strong> e <strong>composizione familiare</strong>. Pi&ugrave; l&apos;ISEE &egrave; basso, pi&ugrave; prendi. Senza ISEE, prendi il minimo (57&euro;/figlio). Ecco la tabella aggiornata al 2026.</p>
        </div>
        <div className="sec r" id="tabella"><div className="sec-tag">Importi base</div><h2>Importo per figlio minorenne</h2>
          <div className="tw r"><table><thead><tr><th>ISEE</th><th>Importo/figlio/mese</th></tr></thead><tbody>
            <tr className="hl"><td className="cv cfr">Fino a 17.090&euro;</td><td className="cv"><strong>200,00&euro;</strong> <span className="badge">Massimo</span></td></tr>
            <tr><td className="cv">20.000&euro;</td><td className="cv">~186&euro;</td></tr>
            <tr><td className="cv">25.000&euro;</td><td className="cv">~162&euro;</td></tr>
            <tr><td className="cv">30.000&euro;</td><td className="cv">~136&euro;</td></tr>
            <tr><td className="cv">35.000&euro;</td><td className="cv">~111&euro;</td></tr>
            <tr><td className="cv">40.000&euro;</td><td className="cv">~86&euro;</td></tr>
            <tr><td className="cv">Oltre 45.574&euro; o senza ISEE</td><td className="cv">57,00&euro;</td></tr>
          </tbody></table></div>
          <div className="ib tip r"><div className="ib-t">{'\uD83D\uDCA1'} L&apos;importo scende gradualmente</div><p>Non ci sono &ldquo;gradini&rdquo;: l&apos;importo scende in modo continuo tra 17.090&euro; e 45.574&euro; di ISEE. Ogni euro di ISEE in pi&ugrave; riduce l&apos;assegno di qualche centesimo.</p></div>
        </div>
        <div className="sec r" id="maggiorazioni"><div className="sec-tag">Bonus extra</div><h2>Maggiorazioni</h2>
          <ul className="cl">
            <li className="cli r d1"><div className="ci">{'\u267F'}</div><div className="clb"><strong>Figlio con disabilit&agrave;</strong><span className="note">+91,20&euro;/mese (non autosufficiente), +80,40&euro; (grave), +25,80&euro; (media). Senza limiti di et&agrave;.</span></div></li>
            <li className="cli r d2"><div className="ci">{'\uD83D\uDC76'}</div><div className="clb"><strong>Figlio sotto 1 anno</strong><span className="note">+57\u20ac/mese per ISEE fino a 45.574\u20ac.</span></div></li>
            <li className="cli r d3"><div className="ci">{'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66'}</div><div className="clb"><strong>3 o pi&ugrave; figli</strong><span className="note">+96,90\u20ac/mese per ogni figlio dal 3&deg; in poi (ISEE basso). Bonus forfettario aggiuntivo per 4+ figli: +157\u20ac/mese.</span></div></li>
            <li className="cli r d4"><div className="ci">{'\uD83D\uDC69'}</div><div className="clb"><strong>Mamma under 21</strong><span className="note">+22,80\u20ac/mese per figlio.</span></div></li>
          </ul>
          <div className="dark-block r">
            <h3>{'\uD83D\uDCA1'} Esempio: famiglia con 2 figli, ISEE 22.000&euro;</h3>
            <p>Due figli di 5 e 8 anni. ISEE: 22.000&euro;.</p>
            <p>Importo base per figlio: circa <strong>175&euro;/mese</strong></p>
            <p>Nessuna maggiorazione applicabile.</p>
            <div className="db-row db-total"><span className="db-label">Totale mensile</span><span className="db-val">~350&euro;/mese (175&euro; &times; 2)</span></div>
          </div>
        </div>
        <div className="sec r" id="faq"><div className="sec-tag">Risposte rapide</div><h2>Domande frequenti</h2><FAQ items={faqItems} /></div>
        <div className="related r"><h2>Guide correlate</h2><div className="rg">
          <a href="/assegno-unico" className="rc"><span className="rc-e">{'\uD83D\uDC68\u200D\uD83D\uDC67'}</span><div className="rc-t">Assegno Unico</div><div className="rc-d">Guida completa: domanda, requisiti, pagamento.</div><span className="rc-ar">&rarr;</span></a>
          <a href="/isee" className="rc"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">ISEE</div><div className="rc-d">L&apos;ISEE determina l&apos;importo.</div><span className="rc-ar">&rarr;</span></a>
          <a href="/bonus-nido" className="rc"><span className="rc-e">{'\uD83C\uDFEB'}</span><div className="rc-t">Bonus Nido</div><div className="rc-d">Fino a 3.600&euro;/anno per l&apos;asilo nido.</div><span className="rc-ar">&rarr;</span></a>
        </div></div>
      </main></div><Footer variant="scheda" /></></div>);
}
