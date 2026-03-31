'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideSuccessioneContent({ faqItems }) {
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
      <div className="guide">
        <div className="guide-hero">
          <div className="guide-hero-inner">
          <div className="guide-hero-text">
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Famiglia</span></div>
            <div className="guide-hero-top"><span className="guide-tag famiglia">Famiglia</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Come Fare la Successione nel 2026: Documenti, Costi, Imposte e Procedura</h1>
            <p className="guide-hero-sub">Quando va presentata, documenti necessari, imposte e franchigie, costi del CAF e procedura telematica passo per passo.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>12 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="45" width="120" height="110" rx="6" fill="#fff" stroke="#E0DBD2" strokeWidth="1.5"/><rect x="55" y="65" width="90" height="6" rx="3" fill="#8B5CF6" opacity=".3"/><rect x="55" y="80" width="70" height="6" rx="3" fill="#8A857C" opacity=".2"/><line x1="55" y1="100" x2="145" y2="100" stroke="#E0DBD2" strokeWidth="1"/><rect x="55" y="110" width="50" height="6" rx="3" fill="#E8724A" opacity=".2"/><rect x="55" y="125" width="80" height="6" rx="3" fill="#2D8A6E" opacity=".2"/><rect x="55" y="140" width="60" height="6" rx="3" fill="#2D8A6E" opacity=".15"/></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; la dichiarazione di successione e quando &egrave; obbligatoria</li>
                <li>Imposte e franchigie: figli/coniuge 0&euro; sotto 1 milione</li>
                <li>Documenti necessari e costi (CAF 500-800&euro;, notaio 1.000-3.000&euro;)</li>
                <li>Procedura telematica con autoliquidazione 2025</li>
                <li>Un esempio reale: Marco eredita dal padre, costo totale ~1.000&euro;</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; la dichiarazione di successione</a>
              <a href="#quando">Quando va presentata</a>
              <a href="#imposte">Imposte e franchigie</a>
              <a href="#documenti">Documenti necessari</a>
              <a href="#come">Come si fa</a>
              <a href="#costi">Costi</a>
              <a href="#esempio">Esempio: il caso di Marco</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; la <em>dichiarazione di successione</em></h2>
            <p>Quando una persona muore, i suoi beni (casa, soldi, investimenti) devono essere trasferiti agli eredi. La dichiarazione di successione &egrave; il <strong>documento fiscale</strong> che rende ufficiale questo passaggio davanti allo Stato.</p>
            <p>Non &egrave; un atto notarile: &egrave; una dichiarazione all&apos;Agenzia delle Entrate che elenca chi sono gli eredi, quali beni ci sono e quanto valgono. Serve per <strong>sbloccare i conti correnti</strong>, <strong>trasferire la propriet&agrave; degli immobili</strong> e pagare le eventuali imposte.</p>
            <p>Dal 2025 funziona con il sistema di <strong>autoliquidazione</strong>: sei tu (o il professionista) a calcolare e pagare le imposte al momento dell&apos;invio.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>Dichiarazione di successione</strong> &mdash; il documento telematico da inviare all&apos;Agenzia delle Entrate entro 12 mesi dal decesso.</p>
            <p><strong>Franchigia</strong> &mdash; la soglia sotto la quale non paghi imposta di successione. Per figli e coniuge: 1 milione di euro ciascuno.</p>
            <p><strong>Autoliquidazione</strong> &mdash; dal 2025, le imposte si calcolano e pagano subito, senza aspettare l&apos;avviso dall&apos;Agenzia.</p>
            <p><strong>Rinuncia all&apos;eredit&agrave;</strong> &mdash; puoi rifiutare l&apos;eredit&agrave; se i debiti superano i beni. In Tribunale o dal notaio.</p>
            <div className="guide-callout">
              <strong>Non sempre serve la dichiarazione.</strong> Se l&apos;eredit&agrave; va al coniuge e/o ai figli, il valore &egrave; sotto <strong>100.000&euro;</strong> e non include immobili, la dichiarazione non &egrave; obbligatoria. Per&ograve; la banca potrebbe chiederla comunque per sbloccare il conto.
            </div>
          </div>

          <div className="guide-section rv" id="quando">
            <div className="guide-section-label">Scadenze</div>
            <h2>Quando va <em>presentata</em></h2>
            <p>Entro <strong>12 mesi</strong> dalla data del decesso. Dopo scattano sanzioni dal 120% al 240% dell&apos;imposta dovuta, pi&ugrave; interessi. Sono obbligati a presentarla: gli eredi, i chiamati all&apos;eredit&agrave;, i legatari, i loro rappresentanti legali.</p>
            <div className="guide-callout warn">
              <strong>Non aspettare l&apos;ultimo mese.</strong> La successione richiede tempo per raccogliere documenti (visure, estratti conto, certificati). Inizia entro 2-3 mesi dal decesso.
            </div>
          </div>

          <div className="guide-section rv" id="imposte">
            <div className="guide-section-label">Quanto si paga</div>
            <h2>Imposte e <em>franchigie</em></h2>
            <p>Le imposte dipendono dal <strong>grado di parentela</strong> e dal <strong>valore dei beni</strong>. Per figli e coniuge, sotto 1 milione <strong>non si paga nulla</strong>.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#F0E8FF,#e4d9f7)'}}>
              <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#8B5CF6" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">IMPOSTE DI SUCCESSIONE</text>
                <rect x="16" y="50" width="308" height="32" rx="8" fill="#2D8A6E"/>
                <text x="28" y="72" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Coniuge/figli: 4% oltre 1.000.000&euro; ciascuno</text>
                <rect x="16" y="90" width="260" height="32" rx="8" fill="#E8724A"/>
                <text x="28" y="112" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Fratelli/sorelle: 6% oltre 100.000&euro; ciascuno</text>
                <rect x="16" y="130" width="220" height="32" rx="8" fill="#5B7EC5"/>
                <text x="28" y="152" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Altri parenti (fino al 4&deg;): 6% senza franchigia</text>
                <rect x="16" y="170" width="180" height="32" rx="8" fill="#8A857C"/>
                <text x="28" y="192" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Non parenti: 8% senza franchigia</text>
              </svg>
            </div>

            <h3>Imposte sugli immobili (aggiuntive)</h3>
            <p>Se nell&apos;eredit&agrave; ci sono immobili: <strong>imposta ipotecaria</strong> (2% del valore catastale, minimo 200&euro;) + <strong>imposta catastale</strong> (1%, minimo 200&euro;). Se &egrave; prima casa per l&apos;erede: importo fisso <strong>200+200&euro; = 400&euro;</strong>.</p>
          </div>

          <div className="guide-section rv" id="documenti">
            <div className="guide-section-label">Checklist</div>
            <h2>Documenti <em>necessari</em></h2>
            <p><strong>Certificato di morte</strong> &mdash; rilasciato dal Comune.</p>
            <p><strong>Dichiarazione sostitutiva di atto notorio</strong> &mdash; con l&apos;elenco degli eredi. Si fa al Comune o dal notaio.</p>
            <p><strong>Codici fiscali</strong> &mdash; del defunto e di tutti gli eredi.</p>
            <p><strong>Visure catastali</strong> &mdash; di tutti gli immobili del defunto (gratis su agenziaentrate.gov.it con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link>).</p>
            <p><strong>Estratti conto bancari</strong> &mdash; alla data del decesso. Chiedi alla banca il &ldquo;saldo alla data del decesso&rdquo;.</p>
            <p><strong>Ultimo 730 o dichiarazione redditi</strong> &mdash; del defunto.</p>
            <p><strong>Eventuale testamento</strong> &mdash; se esiste, copia conforme.</p>
          </div>

          <div className="guide-section rv" id="come">
            <div className="guide-section-label">Procedura</div>
            <h2>Come <em>si fa</em></h2>
            <h3>Passo 1: Raccogli i documenti</h3>
            <p>Inizia subito: certificato di morte, visure catastali, estratti conto, elenco eredi. Questo &egrave; il passo pi&ugrave; lungo.</p>
            <h3>Passo 2: Vai al CAF o dal commercialista</h3>
            <p>La dichiarazione va presentata telematicamente tramite SuccessioniOnLine. Non puoi farla da solo: serve un intermediario abilitato.</p>
            <h3>Passo 3: Calcolo imposte e invio</h3>
            <p>Il professionista calcola le imposte (autoliquidazione dal 2025), compila la dichiarazione e la invia telematicamente all&apos;Agenzia delle Entrate.</p>
            <h3>Passo 4: Voltura catastale</h3>
            <p>Dopo l&apos;invio, la voltura catastale (passaggio degli immobili agli eredi) &egrave; automatica. Verifica sul sito dell&apos;Agenzia che sia stata eseguita.</p>
          </div>

          <div className="guide-section rv" id="costi">
            <div className="guide-section-label">I soldi</div>
            <h2><em>Costi</em> della successione</h2>
            <p><strong>CAF:</strong> 500-800&euro; per una successione standard (coniuge + figli, qualche immobile).</p>
            <p><strong>Commercialista:</strong> 800-1.500&euro;, a seconda della complessit&agrave;.</p>
            <p><strong>Notaio:</strong> 1.000-3.000&euro;+. Necessario solo se c&apos;&egrave; anche la pubblicazione del testamento o la rinuncia all&apos;eredit&agrave;.</p>
            <p><strong>Imposte fisse:</strong> bolli e tributi speciali ~85&euro;. Pi&ugrave; le eventuali imposte ipotecarie/catastali sugli immobili.</p>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Marco</em></h2>
            <p>Il padre di Marco muore. Marco &egrave; figlio unico. Eredita: un appartamento (valore catastale 120.000&euro;) + conto corrente 35.000&euro;. Totale: 155.000&euro;.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Calcolo</strong>
                Franchigia figli: 1.000.000&euro;<br />
                Eredit&agrave; totale: 155.000&euro;<br />
                Imposta di successione: 0&euro;<br />
                Imposte immobiliari (prima casa): 200+200&euro;
              </div>
              <div className="guide-compare-item after">
                <strong>Costi</strong>
                Imposta successione: 0&euro;<br />
                Imposte ipotecaria + catastale: 400&euro;<br />
                Parcella CAF: ~600&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Totale: ~1.000&euro;</strong>
              </div>
            </div>
            <p>Marco &egrave; ampiamente sotto la franchigia di 1 milione. L&apos;imposta di successione &egrave; zero. Paga solo le imposte fisse sugli immobili e il CAF. Se l&apos;appartamento fosse seconda casa, le imposte immobiliari sarebbero circa 3.600&euro; (2%+1% del valore catastale).</p>
          </div>

          <div className="guide-section rv" id="faq">
            <div className="guide-section-label">FAQ</div>
            <h2>Domande <em>frequenti</em></h2>
            <FAQ items={faqItems} />
          </div>

          <div className="guide-section rv">
            <div className="guide-section-label">Approfondimenti</div>
            <h2>Guide <em>correlate</em></h2>
            <div className="guide-related">
              <Link href="/imu" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">IMU 2026</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><path d="M200 90l30-20 30 20v30h-60z" fill="#E8724A" opacity=".06"/></svg>
                </div>
                <h4>IMU</h4>
                <p>Se erediti un immobile, dovrai pagare l&apos;IMU se non &egrave; prima casa.</p>
              </Link>
              <Link href="/730" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">730 Precompilato</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><circle cx="240" cy="44" r="16" fill="#2D8A6E" opacity=".9"/><path d="M234 44l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h4>Faccio il 730</h4>
                <p>L&apos;ultimo 730 del defunto va presentato dagli eredi.</p>
              </Link>
            </div>
          </div>

          <div className="guide-section" style={{textAlign:'center',borderBottom:'none',paddingBottom:'0'}}>
            <Link href="/guide" className="cta-btn" style={{color:'#fff'}}>Esplora tutte le guide<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
