import Nav from '@/components/Nav';import Footer from '@/components/Footer';import ScrollReveal from '@/components/ScrollReveal';import FAQ from '@/components/FAQ';import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
export const metadata = { title: 'Giorni di Preavviso Dimissioni 2026: Tabella per CCNL, Livello e Anzianit\u00e0', description: 'Preavviso dimissioni 2026: quanti giorni servono per CCNL (commercio, metalmeccanico, turismo), livello e anzianit\u00e0. Tabella completa.', keywords: ['preavviso dimissioni','giorni preavviso','preavviso dimissioni CCNL','preavviso commercio','preavviso metalmeccanico','dimissioni senza preavviso'], alternates: { canonical: 'https://zeroburocrazia.it/dimissioni/preavviso' }, openGraph: { title: 'Giorni Preavviso Dimissioni: Tabella per CCNL 2026', description: 'Preavviso dimissioni: tabella per CCNL, livello e anzianit\u00e0.', url: 'https://zeroburocrazia.it/dimissioni/preavviso', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogdimissioni.png', width: 1200, height: 630 }] } };
const faqItems = [
  { q: "Quanti giorni di preavviso servono per dimettersi?", a: "Dipende dal <strong>CCNL, livello e anzianit\u00e0</strong>. Non esiste un numero fisso. Nel commercio va da 15 a 120 giorni. Nel metalmeccanico da 10 a 90. Controlla il tuo CCNL nella tabella sopra." },
  { q: "Posso dimettermi senza preavviso?", a: "<strong>S\u00ec</strong>, ma il datore pu\u00f2 trattenerti dall\u2019ultima busta paga l\u2019<strong>indennit\u00e0 di mancato preavviso</strong>: l\u2019equivalente dello stipendio per i giorni di preavviso non lavorati." },
  { q: "Il preavviso si conta in giorni di calendario o lavorativi?", a: "Di solito in <strong>giorni di calendario</strong>, ma alcuni CCNL specificano diversamente. Verifica il tuo contratto. I giorni partono dal 1\u00b0 o dal 16 del mese (a seconda del CCNL)." },
  { q: "Se sono in prova devo dare il preavviso?", a: "<strong>No.</strong> Durante il periodo di prova, sia tu che il datore potete interrompere il rapporto senza preavviso e senza motivazione." },
  { q: "Le ferie non godute riducono il preavviso?", a: "<strong>No.</strong> Le ferie non godute vengono pagate nell\u2019ultima busta paga, ma non accorciano il preavviso. Durante il preavviso puoi usare ferie residue solo con l\u2019accordo del datore." },
  { q: "In caso di dimissioni per giusta causa serve il preavviso?", a: "<strong>No.</strong> Se ti dimetti per giusta causa (stipendio non pagato, mobbing, modifica unilaterale del contratto), non devi dare preavviso e hai diritto anche alla NASpI." },
];
export default function Page() {
  const schemas = [ articleSchema({ title: 'Preavviso Dimissioni: Tabella per CCNL 2026', description: 'Giorni di preavviso per dimissioni: tabella per CCNL e livello.', url: '/dimissioni/preavviso', image: 'ogdimissioni.png', datePublished: '2026-03-20', dateModified: '2026-03-20' }), faqSchema(faqItems) ];
  return (
    <div className="cat-lavoro"><><Nav variant="scheda" /><ScrollReveal /><SchemaOrg schemas={schemas} />
      <div className="layout" style={{paddingTop: '120px'}}><main className="main">
        <div className="perc r"><span className="perc-label">Guida principale</span><div className="perc-steps"><a href="/dimissioni" className="ps active">{'\u270D\uFE0F'} Dimissioni</a><span className="pa">{'\u203A'}</span><a href="/dimissioni/preavviso" className="ps">{'\uD83D\uDCC5'} Preavviso</a></div></div>
        <div className="sec r" id="intro"><div className="sec-tag">Guida specifica</div>
          <h1 style={{fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '18px'}}>Giorni di <em>preavviso</em> per le dimissioni</h1>
          <p>Vuoi dimetterti ma non sai quanti giorni di preavviso dare? La risposta dipende da <strong>tre fattori</strong>: il tuo CCNL (contratto collettivo), il tuo livello di inquadramento e la tua anzianit&agrave; in azienda. Ecco le tabelle dei CCNL pi&ugrave; diffusi.</p>
        </div>
        <div className="sec r" id="commercio"><div className="sec-tag">CCNL pi&ugrave; diffuso</div><h2>CCNL Commercio (Confcommercio)</h2>
          <div className="tw r"><table><thead><tr><th>Livello</th><th>Fino a 5 anni</th><th>5-10 anni</th><th>Oltre 10 anni</th></tr></thead><tbody>
            <tr><td className="cv">Quadri e 1&deg;</td><td className="cv">60 gg</td><td className="cv">90 gg</td><td className="cv">120 gg</td></tr>
            <tr><td className="cv">2&deg; e 3&deg;</td><td className="cv">30 gg</td><td className="cv">45 gg</td><td className="cv">60 gg</td></tr>
            <tr className="hl"><td className="cv cfr">4&deg; e 5&deg;</td><td className="cv">20 gg</td><td className="cv">30 gg</td><td className="cv">45 gg</td></tr>
            <tr><td className="cv">6&deg; e 7&deg;</td><td className="cv">15 gg</td><td className="cv">20 gg</td><td className="cv">30 gg</td></tr>
          </tbody></table></div>
        </div>
        <div className="sec r" id="metalmeccanico"><div className="sec-tag">Industria</div><h2>CCNL Metalmeccanico (Federmeccanica)</h2>
          <div className="tw r"><table><thead><tr><th>Livello</th><th>Fino a 5 anni</th><th>5-10 anni</th><th>Oltre 10 anni</th></tr></thead><tbody>
            <tr><td className="cv">Quadri, 7&deg; e 8&deg;</td><td className="cv">2 mesi</td><td className="cv">3 mesi</td><td className="cv">4 mesi</td></tr>
            <tr><td className="cv">6&deg;</td><td className="cv">1,5 mesi</td><td className="cv">2 mesi</td><td className="cv">3 mesi</td></tr>
            <tr className="hl"><td className="cv cfr">4&deg; e 5&deg;</td><td className="cv">1 mese</td><td className="cv">1,5 mesi</td><td className="cv">2 mesi</td></tr>
            <tr><td className="cv">1&deg;, 2&deg; e 3&deg;</td><td className="cv">10 gg</td><td className="cv">15 gg</td><td className="cv">20 gg</td></tr>
          </tbody></table></div>
        </div>
        <div className="sec r" id="altri"><div className="sec-tag">Altri CCNL</div><h2>Turismo, Pubblici esercizi, Studi professionali</h2>
          <div className="tw r"><table><thead><tr><th>CCNL</th><th>Range tipico</th></tr></thead><tbody>
            <tr><td className="cv">Turismo (Federalberghi)</td><td className="cv">15-60 giorni</td></tr>
            <tr><td className="cv">Pubblici esercizi (FIPE)</td><td className="cv">15-45 giorni</td></tr>
            <tr><td className="cv">Studi professionali</td><td className="cv">15-60 giorni</td></tr>
            <tr><td className="cv">Edilizia</td><td className="cv">10-30 giorni</td></tr>
          </tbody></table></div>
          <div className="ib tip r"><div className="ib-t">{'\uD83D\uDCA1'} Come trovare il tuo CCNL</div><p>Guarda la <strong>busta paga</strong>: in alto c&apos;&egrave; scritto il codice CCNL applicato. Oppure chiedi alle risorse umane. Il livello di inquadramento &egrave; sempre indicato in busta paga.</p></div>
        </div>
        <div className="sec r" id="mancato"><div className="sec-tag">Se non dai il preavviso</div><h2>Indennit&agrave; di mancato preavviso</h2>
          <p>Se non lavori i giorni di preavviso, il datore pu&ograve; trattenerti dall&apos;ultima busta paga l&apos;equivalente dello stipendio per quei giorni. &Egrave; l&apos;<strong>indennit&agrave; di mancato preavviso</strong>.</p>
          <div className="dark-block r">
            <h3>{'\uD83D\uDCA1'} Esempio: Sara, livello 4&deg; commercio, 3 anni</h3>
            <p>Sara deve dare <strong>20 giorni di calendario</strong>. Stipendio lordo: 1.600&euro;/mese.</p>
            <p>Se si dimette senza preavviso, il datore le trattiene: 1.600 &divide; 30 &times; 20 = <strong>~1.067&euro;</strong>.</p>
            <div className="db-row db-total"><span className="db-label">Trattenuta</span><span className="db-val">~1.067&euro; dall&apos;ultima busta paga</span></div>
          </div>
        </div>
        <div className="sec r" id="faq"><div className="sec-tag">Risposte rapide</div><h2>Domande frequenti</h2><FAQ items={faqItems} /></div>
        <div className="related r"><h2>Guide correlate</h2><div className="rg">
          <a href="/dimissioni" className="rc"><span className="rc-e">{'\u270D\uFE0F'}</span><div className="rc-t">Dimissioni</div><div className="rc-d">Procedura telematica completa.</div><span className="rc-ar">&rarr;</span></a>
          <a href="/tfr" className="rc"><span className="rc-e">{'\uD83D\uDCB0'}</span><div className="rc-t">TFR</div><div className="rc-d">Quanto ti spetta di liquidazione.</div><span className="rc-ar">&rarr;</span></a>
          <a href="/naspi" className="rc"><span className="rc-e">{'\uD83D\uDCC9'}</span><div className="rc-t">NASpI</div><div className="rc-d">Con dimissioni per giusta causa hai diritto alla disoccupazione.</div><span className="rc-ar">&rarr;</span></a>
        </div></div>
      </main></div><Footer variant="scheda" /></></div>);
}
