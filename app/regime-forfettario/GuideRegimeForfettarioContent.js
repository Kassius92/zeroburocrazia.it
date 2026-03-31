'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { FiscozenBanner, FiscozenSticky } from '@/components/FiscozenBanner';

export default function GuideRegimeForfettarioContent({ faqItems }) {
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
      <FiscozenSticky />
      <div className="guide">
        <div className="guide-hero">
          <div className="guide-hero-inner">
          <div className="guide-hero-text">
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Fisco</span></div>
            <div className="guide-hero-top"><span className="guide-tag fisco">Fisco</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Regime Forfettario 2026: Requisiti, Tasse e Coefficienti</h1>
            <p className="guide-hero-sub">Tetto 85.000&euro;, imposta 5-15%, coefficienti di redditivit&agrave;, obblighi e quando conviene rispetto all&apos;ordinario.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>10 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="40" width="130" height="120" rx="10" fill="#2D8A6E" opacity=".06"/><text x="100" y="85" textAnchor="middle" fill="#2D8A6E" fontSize="32" fontWeight="700" opacity=".25">5%</text><text x="100" y="115" textAnchor="middle" fill="#E8724A" fontSize="18" fontWeight="600" opacity=".3">15%</text><text x="100" y="145" textAnchor="middle" fill="#8A857C" fontSize="10">imposta sostitutiva</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; il regime forfettario e perch&eacute; conviene quasi sempre</li>
                <li>I 7 requisiti per accedervi nel 2026</li>
                <li>Coefficienti di redditivit&agrave; per attivit&agrave; comuni</li>
                <li>Obblighi: fatturazione elettronica, marca da bollo, dichiarazione</li>
                <li>Quando esci dal forfettario (soglia 85k e 100k)</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; il regime forfettario</a>
              <a href="#requisiti">I 7 requisiti nel 2026</a>
              <a href="#quanto">Quanto paghi davvero</a>
              <a href="#obblighi">Obblighi e adempimenti</a>
              <a href="#conviene">Quando conviene</a>
              <a href="#uscita">Quando esci dal forfettario</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; il regime <em>forfettario</em></h2>
            <p>Il regime forfettario &egrave; il regime fiscale agevolato per le partite IVA che fatturano fino a 85.000&euro;/anno. &ldquo;Forfettario&rdquo; perch&eacute; le tasse non si calcolano sulle spese reali ma applicando un coefficiente forfettario ai ricavi. Questo rende la gestione fiscale molto pi&ugrave; semplice.</p>
            <p>I vantaggi sono enormi: paghi un&apos;imposta sostitutiva del <strong>5% per i primi 5 anni</strong> (poi 15%), non devi gestire l&apos;IVA, e la contabilit&agrave; &egrave; minima. Per la grande maggioranza di chi apre <Link href="/piva" style={{color:'var(--green)',fontWeight:600}}>partita IVA</Link> in Italia, il forfettario &egrave; la scelta migliore.</p>
            <p>Lo svantaggio: non puoi dedurre le spese reali (tranne i contributi INPS). Se hai molti costi (ufficio, dipendenti, attrezzature), l&apos;ordinario potrebbe convenirti. Ma per freelance, consulenti e professionisti con poche spese, il forfettario &egrave; imbattibile.</p>
          </div>

          <div className="guide-section rv" id="requisiti">
            <div className="guide-section-label">Requisiti</div>
            <h2>I 7 requisiti <em>nel 2026</em></h2>
            <p><strong>1. Ricavi sotto 85.000&euro;/anno.</strong> Sopra 85k ma sotto 100k: esci dall&apos;anno successivo. Sopra 100k: esci immediatamente.</p>
            <p><strong>2. Spese per dipendenti sotto 20.000&euro;/anno.</strong></p>
            <p><strong>3. Redditi da lavoro dipendente sotto 35.000&euro;/anno</strong> (se hai anche un lavoro dipendente).</p>
            <p><strong>4. Non fatturare pi&ugrave; del 50% al tuo ex datore</strong> (se eri dipendente nei 2 anni precedenti).</p>
            <p><strong>5. Non avere partecipazioni in societ&agrave; di persone</strong> (SNC, SAS) o in SRL con attivit&agrave; correlata.</p>
            <p><strong>6. Non avere prevalenza di redditi di capitale.</strong></p>
            <p><strong>7. Non operare in regime speciale IVA</strong> (tabaccherie, editoria, ecc.).</p>
          </div>

          <div className="guide-section rv" id="quanto">
            <div className="guide-section-label">I numeri</div>
            <h2>Quanto paghi <em>davvero</em></h2>
            <p>Reddito imponibile = <strong>ricavi &times; coefficiente di redditivit&agrave;</strong>. Su quel reddito paghi l&apos;imposta sostitutiva (5% o 15%) e i contributi INPS.</p>
            <h3>Coefficienti per attivit&agrave; comuni</h3>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
              <svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">COEFFICIENTI DI REDDITIVIT&Agrave;</text>
                <rect x="16" y="48" width="308" height="28" rx="6" fill="#2D8A6E"/><text x="28" y="68" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Costruzioni: 86%</text>
                <rect x="16" y="82" width="280" height="28" rx="6" fill="#E8724A"/><text x="28" y="102" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Consulenti, designer, sviluppatori: 78%</text>
                <rect x="16" y="116" width="230" height="28" rx="6" fill="#5B7EC5"/><text x="28" y="136" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Altre attivit&agrave; economiche: 67%</text>
                <rect x="16" y="150" width="200" height="28" rx="6" fill="#8B6CC1"/><text x="28" y="170" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Intermediari commercio: 62%</text>
                <rect x="16" y="184" width="160" height="28" rx="6" fill="#C49A2A"/><text x="28" y="204" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Commercio, ristorazione: 40%</text>
              </svg>
            </div>

            <p>Con coefficiente 78%, su 30.000&euro; di ricavi paghi le tasse su 23.400&euro;. Con coefficiente 40%, su 30.000&euro; paghi su soli 12.000&euro;.</p>

            <div className="guide-callout warn">
              <strong>Non indovinare il codice ATECO.</strong> Un codice sbagliato pu&ograve; significare un coefficiente pi&ugrave; alto (= pi&ugrave; tasse) o un inquadramento INPS errato con contributi minimi da 4.500&euro;/anno. Un servizio di gestione della partita IVA per questa scelta ti risparmia migliaia di euro.
            </div>
          </div>

          <div className="guide-section rv" id="obblighi">
            <div className="guide-section-label">Adempimenti</div>
            <h2>Obblighi e <em>adempimenti</em></h2>
            <p><strong><Link href="/fattura-elettronica" style={{color:'var(--green)',fontWeight:600}}>Fatturazione elettronica</Link>:</strong> obbligatoria dal 2024 per tutti. In fattura scrivi la dicitura: &ldquo;Operazione effettuata ai sensi dell&apos;art. 1, commi 54-89, L. 190/2014&rdquo;. Non applichi l&apos;IVA (codice N2.2).</p>
            <p><strong>Marca da bollo:</strong> obbligatoria su tutte le fatture sopra 77,47&euro;. Il bollo &egrave; virtuale (2&euro;): si paga a fine trimestre.</p>
            <p><strong>Dichiarazione dei redditi:</strong> una volta all&apos;anno con il Modello Redditi PF (non il 730).</p>
            <p><strong>Contributi INPS:</strong> 4 rate trimestrali + saldo a giugno. Per artigiani/commercianti c&apos;&egrave; il minimale fisso anche a reddito zero.</p>
            <div className="guide-callout">
              <strong>Cosa NON devi fare:</strong> niente registri IVA, niente liquidazioni IVA trimestrali, niente IRAP, niente studi di settore. La semplicit&agrave; &egrave; il vero vantaggio del forfettario.
            </div>
          </div>

          <div className="guide-section rv" id="conviene">
            <div className="guide-section-label">Confronto</div>
            <h2>Quando <em>conviene</em></h2>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Forfettario conviene se</strong>
                Fatturi sotto 85k/anno<br />
                Poche spese deducibili<br />
                Lavori da solo (freelance, consulente)<br />
                Tasse: 5-15%
              </div>
              <div className="guide-compare-item after">
                <strong>Meglio l&apos;ordinario se</strong>
                Tanti costi reali (ufficio, dipendenti)<br />
                I costi superano il coefficiente<br />
                Fatturo a soggetti con P.IVA<br />
                Tasse: 23-43% ma scarichi tutto
              </div>
            </div>
            <p>Il forfettario &egrave; semplice ma non banale. Un servizio di gestione della partita IVA ti aiuta con codice ATECO, scadenze, contributi e dichiarazione.</p>
            <div style={{marginTop:'32px'}}>
              <FiscozenBanner />
            </div>
          </div>

          <div className="guide-section rv" id="uscita">
            <div className="guide-section-label">Limiti</div>
            <h2>Quando esci <em>dal forfettario</em></h2>
            <p>Ricavi tra <strong>85.000 e 100.000&euro;</strong>: esci dall&apos;anno successivo. Hai tempo per prepararti.</p>
            <p>Ricavi sopra <strong>100.000&euro;</strong>: esci <strong>immediatamente</strong> e devi applicare l&apos;IVA da quel momento. Questo &egrave; il caso critico.</p>
            <p>Per rientrare dopo esserne uscito: devi stare sotto 85.000&euro; per <strong>due anni consecutivi</strong>.</p>
            <div className="guide-callout warn">
              <strong>Monitora il fatturato durante l&apos;anno.</strong> Se ti avvicini a 85k, valuta se rallentare o prepararti al passaggio all&apos;ordinario. Superare 100k senza accorgersene crea problemi seri.
            </div>
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
              <Link href="/piva" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Partita IVA</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="110" width="80" height="28" rx="6" fill="#2D8A6E" opacity=".12"/><text x="96" y="128" textAnchor="middle" fill="#2D8A6E" fontFamily="sans-serif" fontSize="12" fontWeight="700">5-15%</text></svg>
                </div>
                <h4>Aprire P.IVA</h4>
                <p>Costi, tasse, procedura e codice ATECO.</p>
              </Link>
              <Link href="/fattura-elettronica" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Fattura Elettronica</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/></svg>
                </div>
                <h4>Fattura Elettronica</h4>
                <p>Come emettere, software e obblighi.</p>
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
