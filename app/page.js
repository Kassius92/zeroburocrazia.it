import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HeroSearch from '@/components/HeroSearch';
import StatsCounter from '@/components/StatsCounter';
import HomeTabs from '@/components/HomeTabs';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'ZeroBurocrazia \u2014 La burocrazia italiana, finalmente zero.',
  description: 'Guide gratuite su 730, ISEE, SPID, NASpI, mutui, partita IVA e molto altro. Scritte come te le spiegherebbe un amico. Aggiornate al 2026.',
  alternates: { canonical: 'https://zeroburocrazia.it' },
  openGraph: { url: 'https://zeroburocrazia.it', images: [{ url: '/oghome.png', width: 1200, height: 630 }] },
};

const heroTags = [
  { label: 'Dichiarazione 730', href: '/730' },
  { label: 'ISEE 2026', href: '/isee' },
  { label: 'SPID', href: '/spid' },
  { label: 'NASpI', href: '/naspi' },
  { label: 'Partita IVA', href: '/piva' },
  { label: 'Bonus Nido', href: '/bonus-nido' },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const ArrowDiag = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M7 17L17 7M17 7H8M17 7v9" />
  </svg>
);

const moreGuides = [
  { href: '/naspi',              name: 'NASpI',                 desc: 'Quanto spetta, calcolo, domanda INPS entro 68 giorni.',  ic: 'ic-gold',   pill: 'pill-gold',   cat: 'Lavoro' },
  { href: '/legge-104',          name: 'Legge 104',             desc: 'Permessi, congedo 2 anni, agevolazioni auto e fiscali.', ic: 'ic-green',  pill: 'pill-green',  cat: 'Famiglia' },
  { href: '/bonus-bollette',     name: 'Bonus Bollette',        desc: 'Luce, gas, acqua. Automatico con ISEE sotto soglia.',    ic: 'ic-coral',  pill: 'pill-coral',  cat: 'Fisco' },
  { href: '/piva',               name: 'Partita IVA',           desc: 'Regime forfettario, costi, tasse, contributi INPS.',     ic: 'ic-coral',  pill: 'pill-coral',  cat: 'Fisco' },
  { href: '/dimissioni',         name: 'Dimissioni',            desc: 'Procedura online, preavviso, TFR, NASpI dopo.',          ic: 'ic-gold',   pill: 'pill-gold',   cat: 'Lavoro' },
  { href: '/bonus-nido',         name: 'Bonus Nido',            desc: 'Fino a 3.600\u20AC/anno. Domanda INPS, requisiti ISEE.', ic: 'ic-violet', pill: 'pill-violet', cat: 'Famiglia' },
  { href: '/cie',                name: 'CIE',                   desc: "Carta d\u2019identit\u00e0 elettronica: prenotazione, costi, tempi.", ic: 'ic-blue', pill: 'pill-blue', cat: 'Documenti' },
  { href: '/assegno-inclusione', name: 'Assegno di Inclusione', desc: 'Ha sostituito il RdC. Fino a 500\u20AC/mese + affitto.', ic: 'ic-gold',   pill: 'pill-gold',   cat: 'Lavoro' },
];

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-badge rv">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
          Aggiornato 2026
        </div>
        <h1 className="rv rv-d1">
          La burocrazia italiana,<br />finalmente <em>zero.</em>
        </h1>
        <p className="hero-sub rv rv-d2">
          Guide gratuite scritte in italiano vero. Passo per passo, con calcolatori ed esempi concreti.
        </p>
        <HeroSearch tags={heroTags} />
      </section>

      {/* ── STATS ── */}
      <StatsCounter />

      {/* ── FEATURED GUIDES ── */}
      <section className="features" id="guide">
        <div className="features-head rv">
          <div className="features-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            Le pi&ugrave; lette
          </div>
          <h2>Le guide che servono <em>davvero</em></h2>
          <p>Le pratiche pi&ugrave; cercate, spiegate come se avessi un amico all&apos;Agenzia delle Entrate.</p>
        </div>

        {/* 730 */}
        <div className="frow">
          <div className="ftext rv-left">
            <h3>Dichiarazione <em>730</em></h3>
            <p>Precompilata, detrazioni, scadenze, errori da evitare. Tutto quello che devi sapere per fare il 730 nel 2026 senza ansia e senza commercialista.</p>
            <Link href="/730" className="flink">Leggi la guida completa <Arrow /></Link>
          </div>
          <div className="fcard rv-right rv-d1">
            <div className="fcard-header">
              <div className="fcard-icon ic-coral">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
              </div>
              <div>
                <div className="fcard-title">Guida al 730 / 2026</div>
                <div className="fcard-sub">Fisco &middot; 15 min di lettura</div>
              </div>
            </div>
            <div className="calc-mock">
              <div className="calc-row"><span className="calc-label">Reddito lordo</span><span className="calc-val">32.000&euro;</span></div>
              <div className="calc-row"><span className="calc-label">Spese mediche</span><span className="calc-val">1.200&euro;</span></div>
              <div className="calc-row"><span className="calc-label">Interessi mutuo</span><span className="calc-val">2.400&euro;</span></div>
              <div className="calc-result"><span>Rimborso stimato</span><strong>~943&euro;</strong></div>
            </div>
          </div>
        </div>

        {/* ISEE */}
        <div className="frow reverse">
          <div className="ftext rv-right">
            <h3>Come fare <em>l&apos;ISEE</em></h3>
            <p>Documenti, procedura al CAF, simulazione online. L&apos;ISEE &egrave; la chiave per accedere a bonus, agevolazioni e servizi a costo ridotto.</p>
            <Link href="/isee" className="flink">Leggi la guida completa <Arrow /></Link>
          </div>
          <div className="fcard rv-left rv-d1">
            <div className="fcard-header">
              <div className="fcard-icon ic-coral">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
              </div>
              <div>
                <div className="fcard-title">Guida ISEE 2026</div>
                <div className="fcard-sub">Fisco &middot; 10 min di lettura</div>
              </div>
            </div>
            <div className="fstep"><div className="fstep-num">1</div><div><h4>Raccogli i documenti</h4><p>CU, saldi conti, giacenza media, visure catastali.</p></div></div>
            <div className="fstep"><div className="fstep-num">2</div><div><h4>Vai al CAF o fai da te</h4><p>DSU online su sito INPS con SPID, oppure al CAF gratis.</p></div></div>
            <div className="fstep"><div className="fstep-num">3</div><div><h4>Ricevi l&apos;attestazione</h4><p>In ~10 giorni lavorativi, via e-mail o su MyINPS.</p></div></div>
            <div className="fstep"><div className="fstep-num">4</div><div><h4>Accedi ai bonus</h4><p>Assegno unico, bonus nido, sconti mensa e molto altro.</p></div></div>
          </div>
        </div>

        {/* SPID */}
        <div className="frow">
          <div className="ftext rv-left">
            <h3>Come fare <em>lo SPID</em></h3>
            <p>Provider, costi 2026, riconoscimento gratis con CIE. L&apos;identit&agrave; digitale che serve per fare qualsiasi cosa con la PA.</p>
            <Link href="/spid" className="flink">Leggi la guida completa <Arrow /></Link>
          </div>
          <div className="fcard rv-right rv-d1">
            <div className="fcard-header">
              <div className="fcard-icon ic-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
              </div>
              <div>
                <div className="fcard-title">Guida SPID 2026</div>
                <div className="fcard-sub">Documenti &middot; 8 min di lettura</div>
              </div>
            </div>
            <div className="fstep"><div className="fstep-num">1</div><div><h4>Scegli il provider</h4><p>PosteID, Aruba, Infocert, Sielte, TIM&hellip; tutti gratuiti.</p></div></div>
            <div className="fstep"><div className="fstep-num">2</div><div><h4>Registrati online</h4><p>Email, telefono, codice fiscale, documento d&apos;identit&agrave;.</p></div></div>
            <div className="fstep"><div className="fstep-num">3</div><div><h4>Fatti riconoscere</h4><p>Con CIE + NFC &egrave; gratis e immediato. Altrimenti webcam o ufficio postale.</p></div></div>
            <div className="fstep"><div className="fstep-num">&checkmark;</div><div><h4>Pronto!</h4><p>Accedi a INPS, Agenzia Entrate, ANPR, fascicolo sanitario e 16.000+ servizi.</p></div></div>
          </div>
        </div>
      </section>

      {/* ── MORE GUIDES ── */}
      <section className="more" id="tutte">
        <div className="more-head rv">
          <h2>&hellip;e tante <em>altre</em> guide!</h2>
        </div>
        <div className="more-grid">
          {moreGuides.map((g, i) => (
            <Link key={g.href} href={g.href} className={`mcard rv rv-d${(i % 4) + 1}`}>
              <div className="mcard-arrow"><ArrowDiag /></div>
              <div className={`mcard-icon ${g.ic}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
              </div>
              <h3>{g.name}</h3>
              <p>{g.desc}</p>
              <span className={`mcard-pill ${g.pill}`}>{g.cat}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── AUDIENCE TABS ── */}
      <section className="audience" id="categorie">
        <div className="audience-inner">
          <div className="audience-head rv">
            <h2>Qualunque sia la tua <em>situazione</em></h2>
            <p>Guide pensate per la vita reale, non per gli addetti ai lavori.</p>
          </div>
          <HomeTabs />
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how" id="come">
        <div className="how-head rv">
          <h2>Come <em>funziona</em></h2>
          <p>Tre passi e hai risolto il problema. Sul serio.</p>
        </div>
        <div className="how-grid">
          <div className="how-card rv-tilt rv-d1">
            <div className="how-num">1</div>
            <h3>Cerca il tuo problema</h3>
            <p>730, ISEE, SPID, bonus, dimissioni&hellip; qualsiasi pratica burocratica italiana.</p>
          </div>
          <div className="how-card rv-tilt rv-d2">
            <div className="how-num">2</div>
            <h3>Leggi la guida</h3>
            <p>Scritta in italiano vero. Passo per passo, con esempi concreti e link ufficiali.</p>
          </div>
          <div className="how-card rv-tilt rv-d3">
            <div className="how-num">3</div>
            <h3>Risolvi il problema</h3>
            <p>Calcolatori, checklist, link diretti. Fai tutto senza impazzire.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta">
        <h2 className="rv">33 guide. Zero costi.<br /><em>Zero paroloni.</em></h2>
        <p className="rv rv-d1">La burocrazia non deve essere un incubo. Trova la guida e risolvi il problema.</p>
        <a href="#guide" className="cta-btn rv rv-d2">
          Esplora tutte le guide
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>
        <div className="cta-note rv rv-d3">Gratis per sempre. Nessuna registrazione.</div>
      </section>

      <Footer />
    </>
  );
}
