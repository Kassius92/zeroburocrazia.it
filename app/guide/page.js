import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Tutte le Guide \u2014 ZeroBurocrazia',
  description: 'Tutte le guide gratuite sulla burocrazia italiana: 730, ISEE, SPID, NASpI, mutui, bonus, partita IVA e molto altro. Aggiornate al 2026.',
  alternates: { canonical: 'https://zeroburocrazia.it/guide' },
};

export default function GuidePage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      <div className="gl-container">

        {/* HEADER */}
        <div className="gl-header rv">
          <h1>Tutte le <em>guide</em></h1>
          <p>La burocrazia italiana spiegata in modo semplice. Scegli un argomento e risolvi il problema.</p>
        </div>

        {/* ═══ TOP: 1 big + 4 compact ═══ */}
        <section className="gl-top">
          <h2 className="gl-section-title rv">Le pi&ugrave; lette</h2>
          <div className="gl-top-grid">
            <Link href="/730" className="gl-big rv-left">
              <div className="gl-big-img gl-bg-coral"><img src="/hero-730.png" alt="Guida 730 2026" /></div>
              <div className="gl-big-body">
                <span className="gl-tag gl-t-coral">Fisco</span>
                <h3>Come Fare il 730 nel 2026: Detrazioni, Scadenze e Rimborso</h3>
                <p>La dichiarazione dei redditi come non te l&apos;ha mai spiegata nessuno. Detrazioni, precompilato, scadenze e rimborso.</p>
                <div className="gl-meta">15 min di lettura &middot; Aggiornato mar 2026</div>
              </div>
            </Link>
            <div className="gl-compact-list rv-right">
              <Link href="/spid" className="gl-compact">
                <span className="gl-compact-tag gl-c-blue">Documenti</span>
                <h3>Come Fare lo SPID nel 2026: Gratis con CIE</h3>
                <span className="gl-meta">8 min &middot; Aggiornato mar 2026</span>
              </Link>
              <Link href="/isee" className="gl-compact">
                <span className="gl-compact-tag gl-c-coral">Fisco</span>
                <h3>Come Fare l&apos;ISEE 2026: Documenti e Procedura</h3>
                <span className="gl-meta">10 min &middot; Aggiornato mar 2026</span>
              </Link>
              <Link href="/naspi" className="gl-compact">
                <span className="gl-compact-tag gl-c-gold">Lavoro</span>
                <h3>NASpI: Quanto Spetta e Come Fare Domanda</h3>
                <span className="gl-meta">10 min &middot; Aggiornato mar 2026</span>
              </Link>
              <Link href="/legge-104" className="gl-compact">
                <span className="gl-compact-tag gl-c-violet">Famiglia</span>
                <h3>Legge 104: Permessi, Congedo e Agevolazioni</h3>
                <span className="gl-meta">15 min &middot; Aggiornato mar 2026</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ LATEST: 3 image + 3 text ═══ */}
        <section className="gl-latest">
          <h2 className="gl-section-title rv">Aggiornate di recente</h2>
          <div className="gl-img-grid">
            <Link href="/bonus-bollette" className="gl-icard rv rv-d1">
              <div className="gl-icard-img gl-bg-coral"><span>Bonus<br /><em>Bollette</em></span></div>
              <div className="gl-icard-body">
                <span className="gl-tag gl-t-coral">Fisco</span>
                <h3>Bonus Bollette 2026: Luce, Gas e Acqua</h3>
                <p>Sconto automatico con ISEE. Come funziona, chi ne ha diritto, quanto vale.</p>
                <div className="gl-meta">8 min &middot; Aggiornato mar 2026</div>
              </div>
            </Link>
            <Link href="/dimissioni" className="gl-icard rv rv-d2">
              <div className="gl-icard-img gl-bg-gold"><span>Come dare le<br /><em>Dimissioni</em></span></div>
              <div className="gl-icard-body">
                <span className="gl-tag gl-t-gold">Lavoro</span>
                <h3>Come Dare le Dimissioni nel 2026</h3>
                <p>Procedura telematica, preavviso per CCNL, TFR e ultima busta paga.</p>
                <div className="gl-meta">10 min &middot; Aggiornato mar 2026</div>
              </div>
            </Link>
            <Link href="/assegno-unico" className="gl-icard rv rv-d3">
              <div className="gl-icard-img gl-bg-violet"><span>Assegno<br /><em>Unico</em></span></div>
              <div className="gl-icard-body">
                <span className="gl-tag gl-t-violet">Famiglia</span>
                <h3>Assegno Unico 2026: Importi e Domanda</h3>
                <p>Quanto spetta per figlio, tabella importi per ISEE, come fare domanda.</p>
                <div className="gl-meta">10 min &middot; Aggiornato mar 2026</div>
              </div>
            </Link>
          </div>
          <div className="gl-text-row">
            <Link href="/piva" className="gl-tcard rv rv-d1">
              <span className="gl-compact-tag gl-c-coral">Fisco</span>
              <h3>Partita IVA 2026: Costi, Tasse e Forfettario</h3>
              <span className="gl-meta">12 min &middot; Aggiornato mar 2026</span>
            </Link>
            <Link href="/regime-forfettario" className="gl-tcard rv rv-d2">
              <span className="gl-compact-tag gl-c-coral">Fisco</span>
              <h3>Regime Forfettario 2026: Requisiti e Tasse</h3>
              <span className="gl-meta">10 min &middot; Aggiornato mar 2026</span>
            </Link>
            <Link href="/cie" className="gl-tcard rv rv-d3">
              <span className="gl-compact-tag gl-c-blue">Documenti</span>
              <h3>CIE: Carta d&apos;Identit&agrave; Elettronica</h3>
              <span className="gl-meta">6 min &middot; Aggiornato mar 2026</span>
            </Link>
          </div>
        </section>

        {/* ═══ BROWSE BY TOPIC ═══ */}
        <section className="gl-browse rv">
          <h2 className="gl-browse-title">Cerca per argomento</h2>
          <div className="gl-browse-tags">
            <span className="gl-browse-tag">Fisco <span className="gl-browse-count">10</span></span>
            <span className="gl-browse-tag">Documenti <span className="gl-browse-count">5</span></span>
            <span className="gl-browse-tag">Lavoro <span className="gl-browse-count">4</span></span>
            <span className="gl-browse-tag">Casa <span className="gl-browse-count">5</span></span>
            <span className="gl-browse-tag">Famiglia <span className="gl-browse-count">6</span></span>
            <span className="gl-browse-tag">Salute <span className="gl-browse-count">3</span></span>
            <span className="gl-browse-tag">730</span>
            <span className="gl-browse-tag">ISEE</span>
            <span className="gl-browse-tag">SPID</span>
            <span className="gl-browse-tag">NASpI</span>
            <span className="gl-browse-tag">Mutuo</span>
            <span className="gl-browse-tag">Bonus</span>
            <span className="gl-browse-tag">Detrazioni</span>
            <span className="gl-browse-tag">Contributi INPS</span>
          </div>
        </section>

        {/* ═══ FISCO — hz featured + small grid ═══ */}
        <section className="gl-cat">
          <div className="gl-cat-header"><span className="gl-cat-name gl-c-coral">Fisco e soldi <span className="gl-cat-count gl-t-coral">10</span></span></div>
          <Link href="/spese-mediche" className="gl-hz rv">
            <div className="gl-hz-img gl-bg-coral"><span>Spese<br /><em>Mediche</em></span></div>
            <div className="gl-hz-body">
              <h3>Detrazioni Spese Mediche 2026: Cosa Puoi Scaricare</h3>
              <p>Come scaricare farmaci, visite, dentista, occhiali nel 730. Pagamenti tracciabili e franchigia 129&euro;.</p>
              <div className="gl-meta">8 min &middot; Aggiornato mar 2026</div>
            </div>
          </Link>
          <div className="gl-sm-grid">
            <Link href="/fattura-elettronica" className="gl-sm rv rv-d1"><h4>Fattura Elettronica 2026</h4><p>Come fare, software gratuiti, obblighi e conservazione.</p><div className="gl-meta">8 min</div></Link>
            <Link href="/cedolare-secca" className="gl-sm rv rv-d2"><h4>Cedolare Secca: Tassazione Affitti</h4><p>Aliquota 21% o 10%, quando conviene, come si applica.</p><div className="gl-meta">8 min</div></Link>
            <Link href="/imu" className="gl-sm rv rv-d3"><h4>IMU 2026: Calcolo e Scadenze</h4><p>Chi paga, come si calcola, esenzione prima casa.</p><div className="gl-meta">8 min</div></Link>
            <Link href="/assegno-inclusione" className="gl-sm rv rv-d4"><h4>Assegno di Inclusione</h4><p>Ex RdC. Fino a 500&euro;/mese + 303&euro; di affitto.</p><div className="gl-meta">10 min</div></Link>
          </div>
        </section>

        {/* ═══ DOCUMENTI — 3 image cards ═══ */}
        <section className="gl-cat">
          <div className="gl-cat-header"><span className="gl-cat-name gl-c-blue">Documenti <span className="gl-cat-count gl-t-blue">5</span></span></div>
          <div className="gl-img-grid">
            <Link href="/pec" className="gl-icard rv rv-d1">
              <div className="gl-icard-img gl-bg-blue"><span>PEC<br /><em>2026</em></span></div>
              <div className="gl-icard-body"><h3>PEC: Posta Elettronica Certificata</h3><p>Cos&apos;&egrave;, a cosa serve, provider migliori e come attivarla.</p><div className="gl-meta">6 min</div></div>
            </Link>
            <Link href="/codice-fiscale" className="gl-icard rv rv-d2">
              <div className="gl-icard-img gl-bg-blue"><span>Codice<br /><em>Fiscale</em></span></div>
              <div className="gl-icard-body"><h3>Codice Fiscale: Richiesta e Duplicato</h3><p>Come richiederlo, duplicato online, tessera sanitaria.</p><div className="gl-meta">5 min</div></div>
            </Link>
            <Link href="/cambio-residenza" className="gl-icard rv rv-d3">
              <div className="gl-icard-img gl-bg-blue"><span>Cambio<br /><em>Residenza</em></span></div>
              <div className="gl-icard-body"><h3>Cambio Residenza: Procedura Completa</h3><p>Online su ANPR, tempi, documenti e verifiche.</p><div className="gl-meta">6 min</div></div>
            </Link>
          </div>
        </section>

        {/* ═══ LAVORO — hz + text ═══ */}
        <section className="gl-cat">
          <div className="gl-cat-header"><span className="gl-cat-name gl-c-gold">Lavoro <span className="gl-cat-count gl-t-gold">4</span></span></div>
          <Link href="/busta-paga" className="gl-hz rv">
            <div className="gl-hz-img gl-bg-gold"><span>Busta<br /><em>Paga</em></span></div>
            <div className="gl-hz-body">
              <h3>Come Leggere la Busta Paga: Ogni Voce Spiegata</h3>
              <p>Lordo, netto, INPS, IRPEF, TFR, addizionali. Tutto quello che vedi nel cedolino, spiegato in modo semplice.</p>
              <div className="gl-meta">10 min &middot; Aggiornato mar 2026</div>
            </div>
          </Link>
          <div className="gl-text-row">
            <Link href="/tfr" className="gl-tcard rv rv-d1"><h3>TFR: Cos&apos;&egrave; e Come Si Calcola</h3><span className="gl-meta">8 min</span></Link>
          </div>
        </section>

        {/* ═══ CASA — 3 image + 2 text ═══ */}
        <section className="gl-cat">
          <div className="gl-cat-header"><span className="gl-cat-name gl-c-green">Casa <span className="gl-cat-count gl-t-green">5</span></span></div>
          <div className="gl-img-grid">
            <Link href="/compro-casa" className="gl-icard rv rv-d1">
              <div className="gl-icard-img gl-bg-green"><span>Comprare<br /><em>Casa</em></span></div>
              <div className="gl-icard-body"><h3>Comprare Casa nel 2026: Guida Completa</h3><p>Mutuo, notaio, imposte, agevolazioni prima casa.</p><div className="gl-meta">15 min</div></div>
            </Link>
            <Link href="/mutuo" className="gl-icard rv rv-d2">
              <div className="gl-icard-img gl-bg-green"><span>Mutuo<br /><em>2026</em></span></div>
              <div className="gl-icard-body"><h3>Mutuo Casa: Calcola la Rata</h3><p>Tasso fisso vs variabile, simulazione, documenti.</p><div className="gl-meta">12 min</div></div>
            </Link>
            <Link href="/ristrutturare" className="gl-icard rv rv-d3">
              <div className="gl-icard-img gl-bg-green"><span>Bonus<br /><em>Ristrutturazione</em></span></div>
              <div className="gl-icard-body"><h3>Ristrutturare Casa: Bonus 50%</h3><p>Come funziona, documenti, bonifico parlante.</p><div className="gl-meta">10 min</div></div>
            </Link>
          </div>
          <div className="gl-text-row" style={{marginTop:'20px'}}>
            <Link href="/bonus-mobili" className="gl-tcard rv rv-d1"><h3>Bonus Mobili 2026</h3><span className="gl-meta">8 min</span></Link>
          </div>
        </section>

        {/* ═══ FAMIGLIA — hz + small grid ═══ */}
        <section className="gl-cat">
          <div className="gl-cat-header"><span className="gl-cat-name gl-c-violet">Famiglia <span className="gl-cat-count gl-t-violet">6</span></span></div>
          <Link href="/figlio" className="gl-hz rv">
            <div className="gl-hz-img gl-bg-violet"><span>Aspetto un<br /><em>Figlio</em></span></div>
            <div className="gl-hz-body">
              <h3>Aspetto un Figlio: Tutto dalla A alla Z</h3>
              <p>Congedo maternit&agrave;, assegno unico, bonus nido, certificati. La guida completa per i futuri genitori.</p>
              <div className="gl-meta">12 min &middot; Aggiornato mar 2026</div>
            </div>
          </Link>
          <div className="gl-sm-grid">
            <Link href="/congedo-parentale" className="gl-sm rv rv-d1"><h4>Congedo Parentale</h4><p>Durata, retribuzione e come richiederlo.</p><div className="gl-meta">8 min</div></Link>
            <Link href="/mi-sposo" className="gl-sm rv rv-d2"><h4>Mi Sposo: Documenti e Procedura</h4><p>Tutto quello che serve per sposarsi in Italia.</p><div className="gl-meta">8 min</div></Link>
            <Link href="/successione" className="gl-sm rv rv-d3"><h4>Successione</h4><p>Eredit&agrave;, dichiarazione e scadenze.</p><div className="gl-meta">10 min</div></Link>
          </div>
        </section>

        {/* ═══ SALUTE — image cards ═══ */}
        <section className="gl-cat">
          <div className="gl-cat-header"><span className="gl-cat-name gl-c-green">Salute <span className="gl-cat-count gl-t-green">3</span></span></div>
          <div className="gl-img-grid">
            <Link href="/esenzione-ticket" className="gl-icard rv rv-d1">
              <div className="gl-icard-img gl-bg-green"><span>Esenzione<br /><em>Ticket</em></span></div>
              <div className="gl-icard-body"><h3>Esenzione Ticket: Chi Non Paga</h3><p>Per reddito, per patologia, per et&agrave;. Come richiederla.</p><div className="gl-meta">6 min</div></div>
            </Link>
            <Link href="/bonus-psicologo" className="gl-icard rv rv-d2">
              <div className="gl-icard-img gl-bg-green"><span>Bonus<br /><em>Psicologo</em></span></div>
              <div className="gl-icard-body"><h3>Bonus Psicologo 2026: Fino a 1.500&euro;</h3><p>Requisiti ISEE, domanda INPS, come usarlo.</p><div className="gl-meta">6 min</div></div>
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
