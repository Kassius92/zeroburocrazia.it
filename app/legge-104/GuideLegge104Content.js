'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideLegge104Content({ faqItems }) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('v');
        else e.target.classList.remove('v');
      }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.rv,.rv-scale,.rv-left,.rv-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Nav />

      {/* HERO */}
      <div className="guide">
        <div className="guide-hero">
          <div className="guide-hero-inner">
          <div className="guide-hero-text">
            <div className="guide-crumb">
              <Link href="/guide">Guide</Link>
              <span className="guide-crumb-sep">&rsaquo;</span>
              <span>Salute</span>
            </div>

            <div className="guide-hero-top">
              <span className="guide-tag salute">Salute</span>
              <span className="guide-hero-date">Mar 2026</span>
            </div>

            <h1>Come Richiedere la Legge 104 nel 2026: Permessi, Agevolazioni e Procedura</h1>

            <p className="guide-hero-sub">
              Riconoscimento della disabilit&agrave;, permessi dal lavoro retribuiti al 100%, congedo straordinario, agevolazioni auto e fiscali. Tutto quello che devi sapere.
            </p>

            <div className="guide-hero-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                14 min di lettura
              </span>
            </div>
          </div>

          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="25" width="130" height="150" rx="10" fill="#8B5CF6" opacity=".1"/><rect x="55" y="55" width="90" height="8" rx="4" fill="#8B5CF6" opacity=".3"/><rect x="55" y="71" width="70" height="8" rx="4" fill="#8B5CF6" opacity=".2"/><circle cx="100" cy="120" r="25" fill="#2D8A6E" opacity=".12"/><path d="M88 120h24M100 108v24" stroke="#2D8A6E" strokeWidth="3" strokeLinecap="round"/><text x="100" y="45" textAnchor="middle" fill="#8B5CF6" fontSize="13" fontWeight="700">104</text></svg>
          </div>
          </div>
        </div>

        {/* BODY */}
        <div className="guide-body">

          {/* KEY TAKEAWAYS */}
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; la Legge 104 e la differenza tra comma 1 e comma 3</li>
                <li>3 giorni di permesso al mese retribuiti al 100%</li>
                <li>Come richiedere il riconoscimento: dal medico di base al verbale</li>
                <li>Congedo straordinario fino a 2 anni retribuiti</li>
                <li>Agevolazioni auto (IVA 4%, esenzione bollo) e fiscali</li>
              </ul>
            </div>
          </div>

          {/* INDICE */}
          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; la Legge 104</a>
              <a href="#chi">Chi ne ha diritto</a>
              <a href="#come">Come richiederla</a>
              <a href="#permessi">Permessi lavorativi</a>
              <a href="#congedo">Congedo straordinario</a>
              <a href="#agevolazioni">Agevolazioni fiscali e auto</a>
              <a href="#esempio">Esempio: il caso di Anna</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          {/* COS'È */}
          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; la <em>Legge 104</em></h2>

            <p>La <strong>Legge 104/1992</strong> &egrave; la legge che tutela le persone con disabilit&agrave; e i familiari che le assistono. Non &egrave; un bonus: &egrave; un <strong>pacchetto di diritti</strong> che comprende permessi dal lavoro retribuiti al 100%, congedi fino a 2 anni, agevolazioni fiscali e priorit&agrave; nella scelta della sede lavorativa.</p>

            <p>Il requisito fondamentale &egrave; il riconoscimento dell&apos;<strong>handicap grave</strong> (articolo 3, comma 3). Questo avviene tramite una visita della commissione medica ASL, dopo aver presentato domanda all&apos;INPS. Senza il verbale che certifica l&apos;handicap grave, i benefici principali non spettano.</p>

            <p>La 104 non riguarda solo le disabilit&agrave; fisiche evidenti. Possono essere riconosciute anche disabilit&agrave; psichiche (depressione grave, disturbo bipolare), sensoriali (sordit&agrave;, cecit&agrave;), malattie degenerative (sclerosi multipla, SLA, Parkinson, Alzheimer), patologie oncologiche (con procedura accelerata), diabete di tipo 1, cardiopatie gravi, malattie rare e disabilit&agrave; intellettive.</p>

            <h3>Le parole che devi conoscere</h3>

            <p><strong>Handicap grave (art. 3 comma 3)</strong> &mdash; la condizione che d&agrave; accesso a tutti i permessi e le agevolazioni. La commissione medica la riconosce quando la disabilit&agrave; riduce l&apos;autonomia in modo da richiedere assistenza permanente. &Egrave; il riconoscimento che fa la differenza.</p>
            <p><strong>Handicap semplice (art. 3 comma 1)</strong> &mdash; d&agrave; diritto solo ad agevolazioni limitate come l&apos;IVA ridotta sugli ausili. Niente permessi lavorativi, niente congedo.</p>
            <p><strong>Commissione medica ASL</strong> &mdash; l&apos;organo che valuta la disabilit&agrave;. La visita viene richiesta tramite l&apos;INPS ma svolta dalla ASL con un medico INPS presente.</p>
            <p><strong>Referente unico</strong> &mdash; dal 2022, un solo lavoratore pu&ograve; usufruire dei permessi 104 per lo stesso familiare disabile. Eccezione: i genitori di figli disabili possono alternarsi.</p>
            <p><strong>Congedo straordinario</strong> &mdash; fino a 2 anni di congedo retribuito al 100% dello stipendio (con tetto massimo) per assistere un familiare con handicap grave.</p>

            <div className="guide-callout">
              <strong>Comma 1 vs comma 3 &mdash; la differenza &egrave; enorme:</strong> con il comma 1 (semplice) hai diritto solo ad agevolazioni fiscali su ausili e protesi. Con il comma 3 (grave) hai diritto a tutto: 3 giorni di permesso al mese, congedo 2 anni, IVA 4% auto, esenzione bollo, priorit&agrave; sede di lavoro, smart working prioritario.
            </div>
          </div>

          {/* CHI NE HA DIRITTO */}
          <div className="guide-section rv" id="chi">
            <div className="guide-section-label">Chi riguarda</div>
            <h2>Chi ne ha <em>diritto</em></h2>

            <h3>La persona con disabilit&agrave;</h3>
            <p>Qualsiasi persona con una minorazione fisica, psichica o sensoriale che provoca difficolt&agrave; nell&apos;apprendimento, nella vita di relazione o nell&apos;integrazione lavorativa. Non serve una percentuale di invalidit&agrave; specifica: conta la valutazione complessiva della commissione.</p>

            <h3>I familiari che assistono (caregiver)</h3>
            <p>I permessi lavorativi spettano al familiare lavoratore dipendente che assiste la persona con handicap grave. L&apos;ordine di priorit&agrave; &egrave;: coniuge o convivente di fatto, genitori (anche adottivi), figli, fratelli o sorelle, parenti entro il 3&deg; grado. Si passa al successivo solo se il precedente non pu&ograve; assistere.</p>

            <div className="guide-callout warn">
              <strong>Solo lavoratori dipendenti.</strong> Chi ha la partita IVA, chi &egrave; autonomo o collaboratore non ha diritto ai permessi retribuiti. Pu&ograve; per&ograve; beneficiare delle agevolazioni fiscali (auto, ausili, detrazioni).
            </div>

            <div className="guide-callout warn">
              <strong>Referente unico dal 2022.</strong> Un solo lavoratore pu&ograve; essere il referente per lo stesso familiare disabile. Non possono pi&ugrave; alternarsi pi&ugrave; familiari. Eccezione: i genitori di figli disabili possono alternarsi tra loro.
            </div>
          </div>

          {/* COME RICHIEDERLA */}
          <div className="guide-section rv" id="come">
            <div className="guide-section-label">Procedura</div>
            <h2>Come <em>richiederla</em></h2>

            <p>La procedura ha 4 passaggi. Dal primo appuntamento col medico di base al verbale finale passano mediamente 2-4 mesi, a seconda della ASL.</p>

            <h3>Passo 1: Vai dal medico di base</h3>
            <p>Il medico compila il certificato medico introduttivo online sul sito INPS. Ti rilascia il numero di certificato. Gratuito o pochi euro.</p>

            <h3>Passo 2: Presenta la domanda INPS</h3>
            <p>Entro 90 giorni dal certificato: online su inps.it con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link>, oppure tramite patronato (CGIL, CISL, UIL &mdash; gratis). Indica il numero del certificato medico.</p>

            <h3>Passo 3: Visita commissione ASL</h3>
            <p>La convocazione arriva in 30-90 giorni (<strong>15 giorni</strong> per patologie oncologiche o gravissime). Porta tutta la documentazione medica: referti, cartelle cliniche, certificati specialistici. Pi&ugrave; documentazione porti, pi&ugrave; possibilit&agrave; hai di ottenere il comma 3.</p>

            <h3>Passo 4: Ricevi il verbale</h3>
            <p>Arriva via raccomandata o online nel cassetto INPS. Indica se &egrave; riconosciuto handicap semplice (comma 1) o grave (comma 3). Con il comma 3 accedi a tutti i benefici.</p>

            <div className="guide-callout">
              <strong>Vai al patronato.</strong> La domanda 104 &egrave; delicata: il certificato medico deve essere compilato bene, la documentazione alla visita fa la differenza tra un comma 1 e un comma 3. Il patronato ti guida gratuitamente in tutto il processo.
            </div>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#F0E8FF,#e4d9f7)'}}>
              <svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#8B5CF6" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">PROCEDURA LEGGE 104</text>
                {/* Step 1 */}
                <circle cx="40" cy="66" r="16" fill="#8B5CF6" opacity=".15"/>
                <text x="40" y="71" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontWeight="700">1</text>
                <text x="66" y="62" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="700">Medico di base</text>
                <text x="66" y="78" fill="#8A857C" fontFamily="sans-serif" fontSize="10">Certificato introduttivo</text>
                {/* Step 2 */}
                <circle cx="40" cy="116" r="16" fill="#8B5CF6" opacity=".15"/>
                <text x="40" y="121" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontWeight="700">2</text>
                <text x="66" y="112" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="700">Domanda INPS</text>
                <text x="66" y="128" fill="#8A857C" fontFamily="sans-serif" fontSize="10">Online o patronato (entro 90 gg)</text>
                {/* Step 3 */}
                <circle cx="40" cy="166" r="16" fill="#8B5CF6" opacity=".15"/>
                <text x="40" y="171" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontWeight="700">3</text>
                <text x="66" y="162" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="700">Visita commissione ASL</text>
                <text x="66" y="178" fill="#8A857C" fontFamily="sans-serif" fontSize="10">30-90 giorni (15 gg oncologici)</text>
                {/* Step 4 */}
                <circle cx="40" cy="216" r="16" fill="#2D8A6E" opacity=".15"/>
                <text x="40" y="221" textAnchor="middle" fill="#2D8A6E" fontSize="12" fontWeight="700">4</text>
                <text x="66" y="212" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="700">Verbale</text>
                <text x="66" y="228" fill="#8A857C" fontFamily="sans-serif" fontSize="10">Comma 1 (semplice) o Comma 3 (grave)</text>
                {/* Connecting line */}
                <line x1="40" y1="82" x2="40" y2="100" stroke="#8B5CF6" strokeWidth="1.5" opacity=".2"/>
                <line x1="40" y1="132" x2="40" y2="150" stroke="#8B5CF6" strokeWidth="1.5" opacity=".2"/>
                <line x1="40" y1="182" x2="40" y2="200" stroke="#8B5CF6" strokeWidth="1.5" opacity=".2"/>
              </svg>
            </div>
          </div>

          {/* PERMESSI */}
          <div className="guide-section rv" id="permessi">
            <div className="guide-section-label">Diritti lavorativi</div>
            <h2>Permessi <em>lavorativi</em></h2>

            <p>Con l&apos;handicap grave (art. 3 comma 3), il lavoratore dipendente che assiste il familiare disabile ha diritto a <strong>3 giorni di permesso retribuito al mese</strong>, oppure pu&ograve; frazionarli in ore (2 ore al giorno per contratti full-time, 1 ora per part-time).</p>

            <p>I permessi sono retribuiti al 100% dall&apos;INPS, che rimborsa il datore di lavoro. Non si accumulano da un mese all&apos;altro: a fine mese, i giorni non usati si perdono. Si cumulano con ferie, permessi sindacali e altri permessi del contratto.</p>

            <p>Il datore di lavoro <strong>non pu&ograve; rifiutarli</strong>, condizionarli o penalizzarti per averli usati. Se il tuo datore ti crea problemi, rivolgiti al patronato o all&apos;Ispettorato del Lavoro.</p>

            <div className="guide-callout warn">
              <strong>L&apos;abuso &egrave; sanzionabile.</strong> I permessi 104 sono per assistere il familiare disabile. L&apos;INPS e i datori di lavoro possono fare controlli. Usarli per altri scopi pu&ograve; portare al licenziamento per giusta causa.
            </div>
          </div>

          {/* CONGEDO */}
          <div className="guide-section rv" id="congedo">
            <div className="guide-section-label">Congedo</div>
            <h2>Congedo straordinario <em>(2 anni)</em></h2>

            <p>Permette di assentarsi dal lavoro fino a <strong>2 anni nell&apos;arco della vita lavorativa</strong>, con stipendio pagato al 100% (tetto 2026: circa 40.000&euro;/anno lordi). I 2 anni possono essere frazionati: puoi prendere 6 mesi, tornare al lavoro, poi altri 6 mesi.</p>

            <p>Requisiti: verbale con <strong>art. 3 comma 3</strong> (non basta il comma 1) e <strong>obbligo di convivenza</strong> con il familiare disabile. La convivenza pu&ograve; essere instaurata anche dopo la richiesta: basta cambiare la residenza prima dell&apos;inizio del congedo.</p>

            <p>L&apos;ordine di priorit&agrave; &egrave;: coniuge/convivente, genitori, figli, fratelli/sorelle, parenti entro il 3&deg; grado. Durante il congedo maturano i contributi figurativi per la pensione.</p>
          </div>

          {/* AGEVOLAZIONI */}
          <div className="guide-section rv" id="agevolazioni">
            <div className="guide-section-label">Agevolazioni</div>
            <h2>Agevolazioni <em>fiscali e auto</em></h2>

            <h3>Auto</h3>
            <p>Con handicap grave: <strong>IVA al 4%</strong> invece del 22% su auto nuove o usate (fino a 2.000 cc benzina o 2.800 cc diesel, 1 auto ogni 4 anni). <strong>Detrazione IRPEF 19%</strong> su un tetto di 18.075,99&euro; (recuperi fino a ~3.434&euro; nel <Link href="/730" style={{color:'var(--green)',fontWeight:600}}>730</Link>). <strong>Esenzione bollo auto</strong> permanente. <strong>Esenzione passaggio di propriet&agrave;</strong>. Dal 2026 confermata anche su auto ibride ed elettriche.</p>

            <h3>Sanit&agrave;</h3>
            <p><strong>Esenzione ticket sanitario</strong> con codici C03 e C06 per visite specialistiche, esami diagnostici e prestazioni sanitarie. L&apos;esenzione si attiva automaticamente una volta che il verbale viene registrato.</p>

            <h3>Altre agevolazioni</h3>
            <p><strong>IVA 4%</strong> su ausili informatici (computer, tablet, telefoni) se prescritti per la disabilit&agrave;. <strong>Detrazione 75%</strong> su eliminazione barriere architettoniche fino a 50.000&euro;. <strong>Scelta prioritaria della sede di lavoro</strong>. <strong>Priorit&agrave; smart working</strong> per chi assiste familiari con comma 3 (novit&agrave; 2026).</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#F0E8FF,#e4d9f7)'}}>
              <svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#8B5CF6" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">BENEFICI COMMA 3</text>
                <rect x="16" y="50" width="308" height="32" rx="8" fill="#8B5CF6"/>
                <text x="28" y="72" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">3 giorni/mese retribuiti 100%</text>
                <rect x="16" y="90" width="260" height="32" rx="8" fill="#2D8A6E"/>
                <text x="28" y="112" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Congedo 2 anni retribuito</text>
                <rect x="16" y="130" width="220" height="32" rx="8" fill="#E8724A"/>
                <text x="28" y="152" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Auto: IVA 4% + esenzione bollo</text>
                <rect x="16" y="170" width="180" height="32" rx="8" fill="#5B7EC5"/>
                <text x="28" y="192" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Esenzione ticket sanitario</text>
                <rect x="16" y="210" width="140" height="24" rx="6" fill="#C49A2A"/>
                <text x="28" y="227" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Smart working priorit&agrave;</text>
              </svg>
            </div>
          </div>

          {/* ESEMPIO */}
          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Anna</em></h2>

            <p>Anna lavora full-time in un&apos;azienda. Sua madre ha la 104 comma 3 per una malattia degenerativa. Anna &egrave; il referente unico.</p>

            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Cosa ha Anna</strong>
                3 giorni di permesso retribuito al mese<br />
                Pu&ograve; frazionare: 2 ore al giorno<br />
                Priorit&agrave; sede di lavoro<br />
                Smart working prioritario
              </div>
              <div className="guide-compare-item after">
                <strong>Cosa non perde</strong>
                Lo stipendio: non cambia di un centesimo<br />
                Le ferie: non vengono toccate<br />
                I contributi pensionistici<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Costo: zero</strong>
              </div>
            </div>

            <p>Anna accompagna la madre a visite, gestisce pratiche, la assiste a casa. Non ha dovuto recuperare nemmeno un minuto. I 3 giorni al mese sono un diritto, non un favore.</p>
          </div>

          {/* FAQ */}
          <div className="guide-section rv" id="faq">
            <div className="guide-section-label">FAQ</div>
            <h2>Domande <em>frequenti</em></h2>
            <FAQ items={faqItems} />
          </div>

          {/* GUIDE CORRELATE */}
          <div className="guide-section rv">
            <div className="guide-section-label">Approfondimenti</div>
            <h2>Guide <em>correlate</em></h2>
            <div className="guide-related">
              <Link href="/isee" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}>
                    <rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}} />
                    <rect x="56" y="36" width="60" height="8" rx="4" fill="#E8724A" opacity=".3" />
                    <text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">ISEE 2026</text>
                    <rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="56" y="86" width="140" height="5" rx="2.5" fill="#E8E0D4" />
                    <circle cx="68" cy="110" r="8" fill="#E4F3ED" />
                    <text x="68" y="113" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="bold">1</text>
                    <rect x="84" y="106" width="100" height="5" rx="2.5" fill="#E8E0D4" />
                    <circle cx="68" cy="132" r="8" fill="#E4F3ED" />
                    <text x="68" y="135" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="bold">2</text>
                    <rect x="84" y="128" width="80" height="5" rx="2.5" fill="#E8E0D4" />
                  </svg>
                </div>
                <h4>Come Fare l&apos;ISEE 2026</h4>
                <p>Serve per molte agevolazioni legate alla disabilit&agrave;.</p>
              </Link>
              <Link href="/spid" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#ECF0FA,#dce4f5)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}>
                    <rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}} />
                    <rect x="56" y="36" width="60" height="8" rx="4" fill="#5B7EC5" opacity=".3" />
                    <text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Accedi con SPID</text>
                    <rect x="56" y="78" width="208" height="28" rx="6" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1" />
                    <text x="68" y="96" fill="#B5B0A8" fontFamily="sans-serif" fontSize="10">Email o username</text>
                    <rect x="56" y="114" width="208" height="28" rx="6" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1" />
                    <rect x="56" y="150" width="208" height="24" rx="6" fill="#5B7EC5" />
                    <text x="160" y="166" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="10" fontWeight="bold">Entra con SPID</text>
                  </svg>
                </div>
                <h4>Come Fare lo SPID</h4>
                <p>Per la domanda online INPS serve lo SPID. 15 minuti, gratis.</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="guide-section" style={{textAlign:'center',borderBottom:'none',paddingBottom:'0'}}>
            <Link href="/guide" className="cta-btn" style={{color:'#fff'}}>
              Esplora tutte le guide
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
