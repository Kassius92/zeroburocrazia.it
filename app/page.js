import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import HeroSearch from '@/components/redesign/HeroSearch';
import HomeStatsCounter from '@/components/redesign/HomeStatsCounter';
import HomeTabs from '@/components/redesign/HomeTabs';
import SchemaOrg from '@/components/SchemaOrg';
import icons from '@/components/redesign/guideIcons';
import HomeAnimations from './HomeAnimations';

export const metadata = {
  title: 'ZeroBurocrazia \u2014 La burocrazia italiana, finalmente zero.',
  description: 'Guide gratuite su 730, ISEE, SPID, NASpI, mutui, partita IVA e molto altro. Scritte come te le spiegherebbe un amico. Aggiornate al 2026.',
  alternates: { canonical: 'https://zeroburocrazia.it' },
  openGraph: { url: 'https://zeroburocrazia.it', images: [{ url: '/oghome.png', width: 1200, height: 630 }] },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ZeroBurocrazia',
  url: 'https://zeroburocrazia.it',
  description: 'Guide gratuite sulla burocrazia italiana: 730, ISEE, SPID, NASpI, mutui, P.IVA e molto altro.',
  inLanguage: 'it-IT',
  publisher: {
    '@type': 'Organization',
    name: 'ZeroBurocrazia',
    url: 'https://zeroburocrazia.it',
    email: 'info.zeroburocrazia@gmail.com',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://zeroburocrazia.it/guide?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

/* Hero quick tags */
const heroTags = [
  { label: 'Dichiarazione 730', href: '/730' },
  { label: 'ISEE 2026', href: '/isee' },
  { label: 'SPID', href: '/spid' },
  { label: 'NASpI', href: '/naspi' },
  { label: 'Partita IVA', href: '/piva' },
  { label: 'Bonus Nido', href: '/bonus-nido' },
];

/* Arrow SVGs */
const ArrowSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M7 17L17 7M17 7H8M17 7v9" />
  </svg>
);
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* "More guides" data */
const moreGuides = [
  { href: '/naspi',              name: 'NASpI',                 desc: 'Quanto spetta, calcolo, domanda INPS entro 68 giorni.',  ic: 'v8-ic-gold',   pill: 'v8-pill-gold',   catLabel: 'Lavoro',    stroke: '#C49A2A' },
  { href: '/legge-104',          name: 'Legge 104',             desc: 'Permessi, congedo 2 anni, agevolazioni auto e fiscali.', ic: 'v8-ic-green',  pill: 'v8-pill-green',  catLabel: 'Famiglia',  stroke: '#2D8A6E' },
  { href: '/bonus-bollette',     name: 'Bonus Bollette',        desc: 'Luce, gas, acqua. Automatico con ISEE sotto soglia.',    ic: 'v8-ic-coral',  pill: 'v8-pill-coral',  catLabel: 'Fisco',     stroke: '#E8724A' },
  { href: '/piva',               name: 'Partita IVA',           desc: 'Regime forfettario, costi, tasse, contributi INPS.',     ic: 'v8-ic-coral',  pill: 'v8-pill-coral',  catLabel: 'Fisco',     stroke: '#E8724A' },
  { href: '/dimissioni',         name: 'Dimissioni',            desc: 'Procedura online, preavviso, TFR, NASpI dopo.',          ic: 'v8-ic-gold',   pill: 'v8-pill-gold',   catLabel: 'Lavoro',    stroke: '#C49A2A' },
  { href: '/bonus-nido',         name: 'Bonus Nido',            desc: 'Fino a 3.600\u20AC/anno. Domanda INPS, requisiti ISEE.', ic: 'v8-ic-violet', pill: 'v8-pill-violet', catLabel: 'Famiglia',  stroke: '#8B6CC1' },
  { href: '/cie',                name: 'CIE',                   desc: "Carta d\u2019identit\u00e0 elettronica: prenotazione, costi, tempi.", ic: 'v8-ic-blue', pill: 'v8-pill-blue', catLabel: 'Documenti', stroke: '#5B7EC5' },
  { href: '/assegno-inclusione', name: 'Assegno di Inclusione', desc: 'Ha sostituito il RdC. Fino a 500\u20AC/mese + affitto.', ic: 'v8-ic-gold',   pill: 'v8-pill-gold',   catLabel: 'Lavoro',    stroke: '#C49A2A' },
];

export default function HomePage() {
  return (
    <div className="v8">
      <SchemaOrg schemas={[websiteSchema]} />
      <HomeAnimations />

      <NavV8 />

      {/* HERO */}
      <section className="v8-hero">
        <div className="v8-hero-badge rv">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
          Aggiornato 2026
        </div>
        <h1 className="rv rv-d1">
          La burocrazia italiana,<br />finalmente <em>zero.</em>
        </h1>
        <p className="v8-hero-sub rv rv-d2">
          Guide gratuite scritte in italiano vero. Passo per passo, con calcolatori ed esempi concreti.
        </p>
        <HeroSearch tags={heroTags} />
      </section>

      {/* STATS BAR */}
      <HomeStatsCounter />

      {/* FEATURED GUIDES — large alternating rows */}
      <section className="hp-features" id="guide">
        <div className="hp-features-head rv">
          <div className="hp-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            Le pi&ugrave; lette
          </div>
          <h2>Le guide che servono <em>davvero</em></h2>
          <p>Le pratiche pi&ugrave; cercate, spiegate come se avessi un amico all&apos;Agenzia delle Entrate.</p>
        </div>

        {/* 730 */}
        <div className="hp-frow">
          <div className="hp-ftext rv-left">
            <h3>Dichiarazione <em>730</em></h3>
            <p>Precompilata, detrazioni, scadenze, errori da evitare. Tutto quello che devi sapere per fare il 730 nel 2026 senza ansia e senza commercialista.</p>
            <Link href="/730" className="hp-flink">
              Leggi la guida completa
              <ArrowRight />
            </Link>
          </div>
          <div className="hp-fcard rv-right rv-d1">
            <div className="hp-fcard-header">
              <div className="hp-fcard-icon v8-ic-coral" style={{ color: '#E8724A' }}>
                {icons['/730'] || null}
              </div>
              <div>
                <div className="hp-fcard-title">Guida al 730 / 2026</div>
                <div className="hp-fcard-sub">Fisco &middot; 15 min di lettura</div>
              </div>
            </div>
            <div className="hp-calc">
              <div className="hp-calc-row">
                <span className="hp-calc-label">Reddito lordo</span>
                <span className="hp-calc-val">32.000&euro;</span>
              </div>
              <div className="hp-calc-row">
                <span className="hp-calc-label">Spese mediche</span>
                <span className="hp-calc-val">1.200&euro;</span>
              </div>
              <div className="hp-calc-row">
                <span className="hp-calc-label">Interessi mutuo</span>
                <span className="hp-calc-val">2.400&euro;</span>
              </div>
              <div className="hp-calc-result">
                <span>Rimborso stimato</span>
                <strong>~943&euro;</strong>
              </div>
            </div>
          </div>
        </div>

        {/* ISEE */}
        <div className="hp-frow reverse">
          <div className="hp-ftext rv-right">
            <h3>Come fare <em>l&apos;ISEE</em></h3>
            <p>Documenti, procedura al CAF, simulazione online. L&apos;ISEE &egrave; la chiave per accedere a bonus, agevolazioni e servizi a costo ridotto.</p>
            <Link href="/isee" className="hp-flink">
              Leggi la guida completa
              <ArrowRight />
            </Link>
          </div>
          <div className="hp-fcard rv-left rv-d1">
            <div className="hp-fcard-header">
              <div className="hp-fcard-icon v8-ic-coral" style={{ color: '#E8724A' }}>
                {icons['/isee'] || null}
              </div>
              <div>
                <div className="hp-fcard-title">Guida ISEE 2026</div>
                <div className="hp-fcard-sub">Fisco &middot; 10 min di lettura</div>
              </div>
            </div>
            <div className="hp-fstep">
              <div className="hp-fstep-n">1</div>
              <div><h4>Raccogli i documenti</h4><p>CU, saldi conti, giacenza media, visure catastali.</p></div>
            </div>
            <div className="hp-fstep">
              <div className="hp-fstep-n">2</div>
              <div><h4>Vai al CAF o fai da te</h4><p>DSU online su sito INPS con SPID, oppure al CAF gratis.</p></div>
            </div>
            <div className="hp-fstep">
              <div className="hp-fstep-n">3</div>
              <div><h4>Ricevi l&apos;attestazione</h4><p>In ~10 giorni lavorativi, via e-mail o su MyINPS.</p></div>
            </div>
            <div className="hp-fstep">
              <div className="hp-fstep-n">4</div>
              <div><h4>Accedi ai bonus</h4><p>Assegno unico, bonus nido, sconti mensa e molto altro.</p></div>
            </div>
          </div>
        </div>

        {/* SPID */}
        <div className="hp-frow">
          <div className="hp-ftext rv-left">
            <h3>Come fare <em>lo SPID</em></h3>
            <p>Provider, costi 2026, riconoscimento gratis con CIE. L&apos;identit&agrave; digitale che serve per fare qualsiasi cosa con la PA.</p>
            <Link href="/spid" className="hp-flink">
              Leggi la guida completa
              <ArrowRight />
            </Link>
          </div>
          <div className="hp-fcard rv-right rv-d1">
            <div className="hp-fcard-header">
              <div className="hp-fcard-icon v8-ic-blue" style={{ color: '#5B7EC5' }}>
                {icons['/spid'] || null}
              </div>
              <div>
                <div className="hp-fcard-title">Guida SPID 2026</div>
                <div className="hp-fcard-sub">Documenti &middot; 8 min di lettura</div>
              </div>
            </div>
            <div className="hp-fstep">
              <div className="hp-fstep-n">1</div>
              <div><h4>Scegli il provider</h4><p>PosteID, Aruba, Infocert, Sielte, TIM&hellip; tutti gratuiti.</p></div>
            </div>
            <div className="hp-fstep">
              <div className="hp-fstep-n">2</div>
              <div><h4>Registrati online</h4><p>Email, telefono, codice fiscale, documento d&apos;identit&agrave;.</p></div>
            </div>
            <div className="hp-fstep">
              <div className="hp-fstep-n">3</div>
              <div><h4>Fatti riconoscere</h4><p>Con CIE + NFC &egrave; gratis e immediato. Altrimenti webcam o ufficio postale.</p></div>
            </div>
            <div className="hp-fstep">
              <div className="hp-fstep-n">&checkmark;</div>
              <div><h4>Pronto!</h4><p>Accedi a INPS, Agenzia Entrate, ANPR, fascicolo sanitario e 16.000+ servizi.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE GUIDES 4-COL */}
      <section className="hp-more" id="tutte">
        <div className="hp-more-head rv">
          <h2>&hellip;e tante <em>altre</em> guide!</h2>
        </div>
        <div className="hp-more-grid">
          {moreGuides.map((g, i) => {
            const icon = icons[g.href];
            return (
              <Link key={g.href} href={g.href} className={`hp-mcard rv rv-d${(i % 4) + 1}`}>
                <div className="hp-mcard-arrow"><ArrowSvg /></div>
                <div className={`hp-mcard-icon ${g.ic}`} style={{ color: g.stroke }}>
                  {icon || null}
                </div>
                <h3>{g.name}</h3>
                <p>{g.desc}</p>
                <span className={`hp-mcard-pill ${g.pill}`}>{g.catLabel}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* AUDIENCE TABS */}
      <section className="hp-audience">
        <div className="hp-audience-inner">
          <div className="hp-audience-head rv">
            <h2>Qualunque sia la tua <em>situazione</em></h2>
            <p>Guide pensate per la vita reale, non per gli addetti ai lavori.</p>
          </div>
          <HomeTabs />
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="v8-how" id="come">
        <div className="v8-how-inner">
          <div className="v8-how-head">
            <h2 className="rv-left">Come <em>funziona</em></h2>
            <p className="rv rv-d1">Tre passi e hai risolto il problema. Sul serio.</p>
          </div>
          <div className="v8-how-grid">
            <div className="v8-how-card rv-tilt rv-d1">
              <div className="v8-how-num">1</div>
              <h3>Cerca il tuo problema</h3>
              <p>730, ISEE, SPID, bonus, dimissioni&hellip; qualsiasi pratica burocratica italiana.</p>
            </div>
            <div className="v8-how-card rv-tilt rv-d2">
              <div className="v8-how-num">2</div>
              <h3>Leggi la guida</h3>
              <p>Scritta in italiano vero. Passo per passo, con esempi concreti e link ufficiali.</p>
            </div>
            <div className="v8-how-card rv-tilt rv-d3">
              <div className="v8-how-num">3</div>
              <h3>Risolvi il problema</h3>
              <p>Calcolatori, checklist, link diretti. Fai tutto senza impazzire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hp-cta">
        <h2 className="rv">33 guide. Zero costi.<br /><em>Zero paroloni.</em></h2>
        <p className="rv rv-d1">La burocrazia non deve essere un incubo. Trova la guida e risolvi il problema.</p>
        <a href="#guide" className="hp-cta-btn rv rv-d2">
          Esplora tutte le guide
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>
        <div className="hp-cta-note rv rv-d3">Gratis per sempre. Nessuna registrazione.</div>
      </section>

      <FooterV8 />
    </div>
  );
}
