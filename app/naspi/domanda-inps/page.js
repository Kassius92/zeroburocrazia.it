import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import FAQ from '@/components/FAQ';
import SchemaOrg, { articleSchema, faqSchema, howToSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Come Fare Domanda NASpI nel 2026: Procedura INPS Passo per Passo',
  description: 'Domanda NASpI 2026: come presentarla su INPS, documenti necessari, scadenza 68 giorni, tempi di pagamento. Guida passo per passo.',
  keywords: ['domanda NASpI', 'domanda NASpI INPS', 'come fare domanda NASpI', 'NASpI domanda online', 'NASpI 68 giorni', 'NASpI documenti'],
  alternates: { canonical: 'https://zeroburocrazia.it/naspi/domanda-inps' },
  openGraph: {
    title: 'Come Fare Domanda NASpI nel 2026: Procedura INPS',
    description: 'Domanda NASpI 2026: procedura online, documenti e scadenze.',
    url: 'https://zeroburocrazia.it/naspi/domanda-inps',
    type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ognaspi.png', width: 1200, height: 630 }],
  },
};

const faqItems = [
  { q: "Entro quanto tempo devo fare domanda NASpI?", a: "<strong>68 giorni</strong> dalla cessazione del rapporto di lavoro. Dopo, perdi il diritto. Non aspettare: i primi 8 giorni sono i migliori perch\u00e9 la NASpI parte subito." },
  { q: "Posso fare la domanda NASpI da solo?", a: "<strong>S\u00ec.</strong> Si fa online su inps.it con SPID, CIE o CNS. Il percorso \u00e8: Prestazioni e servizi > NASpI > Invio domanda. In alternativa, puoi andare al patronato (gratis) o chiamare il Contact Center INPS (803 164)." },
  { q: "Quanto tempo passa dalla domanda al primo pagamento?", a: "L\u2019INPS ha <strong>30 giorni</strong> per esaminare la domanda. Se accolta, il primo pagamento arriva entro <strong>30-45 giorni</strong> dalla presentazione. In totale: circa 1-2 mesi." },
  { q: "Cosa succede se faccio domanda dopo 8 giorni?", a: "La NASpI parte dal <strong>giorno dopo la presentazione</strong>, non dall\u20198\u00b0 giorno. Perdi i giorni tra il licenziamento e la domanda. Per questo conviene farla subito." },
  { q: "Devo iscrivermi al centro per l\u2019impiego?", a: "<strong>S\u00ec.</strong> Dopo la domanda devi rilasciare la DID (Dichiarazione di Immediata Disponibilit\u00e0) e iscriverti al SIISL. Senza DID, la NASpI non parte." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Come Fare Domanda NASpI nel 2026',
      description: 'Domanda NASpI INPS: procedura online, documenti e scadenza 68 giorni.',
      url: '/naspi/domanda-inps', image: 'ognaspi.png',
      datePublished: '2026-03-20', dateModified: '2026-03-20',
    }),
    faqSchema(faqItems),
    howToSchema({
      name: 'Come fare domanda NASpI nel 2026',
      description: 'Procedura per presentare la domanda di disoccupazione NASpI su INPS.',
      totalTime: 'PT30M', image: 'ognaspi.png',
      steps: [
        { name: 'Raccogli i documenti', text: 'Documento d\u2019identit\u00e0, codice fiscale, ultima busta paga, lettera di licenziamento, IBAN per l\u2019accredito.' },
        { name: 'Accedi su inps.it con SPID', text: 'Vai su inps.it, accedi con SPID/CIE/CNS. Cerca "NASpI" nella barra di ricerca e clicca "Invio domanda".' },
        { name: 'Compila la domanda online', text: 'Inserisci i dati del rapporto di lavoro cessato, la motivazione, l\u2019IBAN. Verifica che i dati precompilati siano corretti.' },
        { name: 'Rilascia la DID e iscriviti a SIISL', text: 'La Dichiarazione di Immediata Disponibilit\u00e0 si pu\u00f2 fare contestualmente alla domanda. Poi iscriviti alla piattaforma SIISL.' },
      ],
    }),
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
              <a href="/naspi/domanda-inps" className="ps">{'\uD83D\uDCDD'} Domanda INPS</a>
            </div>
          </div>

          <div className="sec r" id="intro">
            <div className="sec-tag">Guida specifica</div>
            <h1 style={{fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '18px'}}>Come fare <em>domanda NASpI</em> nel 2026</h1>
            <p>Hai <strong>68 giorni</strong> dalla fine del rapporto di lavoro per presentare la domanda. Se la fai entro i primi 8 giorni, la NASpI parte subito dall&apos;8&deg; giorno. Dopo, perdi giorni di pagamento. Ecco come farla.</p>
          </div>

          <div className="sec r" id="documenti">
            <div className="sec-tag">Cosa serve</div>
            <h2>Documenti necessari</h2>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCB3'}</div><div className="clb"><strong>Documento d&apos;identit&agrave; e codice fiscale</strong><span className="note">Servono per accedere al portale INPS (con SPID basta lo SPID).</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCDC'}</div><div className="clb"><strong>Lettera di licenziamento / cessazione</strong><span className="note">O comunicazione di fine contratto. Serve la data esatta di cessazione.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83E\uDDFE'}</div><div className="clb"><strong>Ultima busta paga</strong><span className="note">Per verificare i dati del rapporto di lavoro e la retribuzione.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83C\uDFE6'}</div><div className="clb"><strong>IBAN del tuo conto corrente</strong><span className="note">L&apos;INPS accredita la NASpI su conto corrente. Deve essere intestato a te.</span></div></li>
            </ul>
          </div>

          <div className="sec r" id="come">
            <div className="sec-tag">Passo per passo</div>
            <h2>Procedura online su INPS</h2>
            <div className="steps r">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Accedi su inps.it con SPID</strong><p>Vai su <strong>inps.it</strong>, clicca &ldquo;Accedi&rdquo;, usa SPID/CIE/CNS. Nella barra di ricerca scrivi &ldquo;NASpI&rdquo; e clicca &ldquo;NASpI: invio domanda&rdquo;.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Verifica i dati precompilati</strong><p>L&apos;INPS ha gi&agrave; i dati del tuo ultimo rapporto di lavoro (dalla comunicazione del datore). Controlla: date, tipo di cessazione, retribuzione.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Completa e invia</strong><p>Inserisci l&apos;IBAN, conferma i dati, allega eventuali documenti richiesti. Spunta la DID (Dichiarazione di Immediata Disponibilit&agrave;) e invia.</p></div></div>
              <div className="step r d4"><div className="stepn">4</div><div className="stepb"><strong>Iscriviti a SIISL</strong><p>Dopo l&apos;invio, registrati sulla piattaforma SIISL (Sistema Informativo per l&apos;Inclusione Sociale e Lavorativa). &Egrave; obbligatorio per mantenere la NASpI.</p></div></div>
            </div>

            <div className="ib mon r">
              <div className="ib-t">{'\uD83D\uDCB6'} Alternativa: vai al patronato</div>
              <p>Se non te la senti di farlo da solo, il <strong>patronato</strong> (CGIL, CISL, UIL, INCA, ENAS...) fa la domanda per te <strong>gratuitamente</strong>. Porta i documenti e loro compilano tutto. &Egrave; la scelta migliore se hai dubbi.</p>
            </div>

            <a href="/spid" className="xlink r"><span className="xlink-em">{'\uD83D\uDD10'}</span><div className="xlink-t"><strong>Come fare lo SPID</strong> &mdash; Serve per accedere al portale INPS.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          <div className="sec r" id="tempi">
            <div className="sec-tag">Tempistiche</div>
            <h2>Quando arriva il primo pagamento</h2>
            <div className="tw r">
              <table>
                <thead><tr><th>Quando fai domanda</th><th>NASpI parte dal</th><th>Primo pagamento</th></tr></thead>
                <tbody>
                  <tr className="hl"><td className="cv cfr">Entro 8 giorni dal licenziamento</td><td className="cv">8&deg; giorno dalla cessazione</td><td>30-45 giorni dalla domanda</td></tr>
                  <tr><td>Dopo 8 giorni</td><td className="cv">Giorno dopo la domanda</td><td>30-45 giorni dalla domanda</td></tr>
                  <tr><td>Dopo 68 giorni</td><td className="cv" style={{color: '#DC2626'}}>Diritto perso</td><td>&mdash;</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} I 68 giorni non aspettano</div>
              <p>Se perdi la scadenza, perdi la NASpI. Non c&apos;&egrave; proroga, non c&apos;&egrave; ricorso facile. <strong>Fai la domanda nei primi giorni</strong> dopo il licenziamento, anche se non hai ancora tutti i documenti (puoi integrare dopo).</p>
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
              <a href="/naspi" className="rc"><span className="rc-e">{'\uD83D\uDCC9'}</span><div className="rc-t">NASpI</div><div className="rc-d">Guida completa: requisiti, importo e durata.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/naspi/calcolo" className="rc"><span className="rc-e">{'\uD83E\uDDEE'}</span><div className="rc-t">Calcolo NASpI</div><div className="rc-d">Quanto ti spetta in base allo stipendio.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/dimissioni" className="rc"><span className="rc-e">{'\u270D\uFE0F'}</span><div className="rc-t">Dimissioni</div><div className="rc-d">Se ti sei dimesso per giusta causa, hai diritto alla NASpI.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>
      </div>
      <Footer variant="scheda" />
    </>
    </div>
  );
}
