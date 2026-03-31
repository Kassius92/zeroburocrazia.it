'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideEsenzioneTicketContent({ faqItems }) {
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
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Salute</span></div>
            <div className="guide-hero-top"><span className="guide-tag salute">Salute</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Esenzione Ticket Sanitario nel 2026: Chi Non Paga e Come Ottenerla</h1>
            <p className="guide-hero-sub">Chi non paga il ticket: esenzioni per reddito, patologie croniche, et&agrave; e invalidit&agrave;. Codici esenzione, come richiederla e quanto dura.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>10 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="120" height="80" rx="8" fill="#2D8A6E" opacity=".06" stroke="#2D8A6E" strokeWidth="1.5" opacity=".15"/><path d="M100 70v30M85 85h30" stroke="#2D8A6E" strokeWidth="3" strokeLinecap="round" opacity=".3"/><rect x="55" y="145" width="90" height="24" rx="6" fill="#E8724A" opacity=".1"/><text x="100" y="161" textAnchor="middle" fill="#E8724A" fontSize="10" fontWeight="600">Ticket: 0&euro;</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; il ticket sanitario e quando si paga</li>
                <li>Esenzione per reddito: codici E01, E02, E03, E04</li>
                <li>Esenzione per patologia cronica (diabete, ipertensione, tumori...)</li>
                <li>Esenzione per invalidit&agrave; e <Link href="/legge-104" style={{color:'var(--green)',fontWeight:600}}>Legge 104</Link></li>
                <li>Come verificare e ottenere l&apos;esenzione</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; il ticket</a>
              <a href="#reddito">Esenzione per reddito</a>
              <a href="#patologia">Esenzione per patologia</a>
              <a href="#invalidita">Per invalidit&agrave;</a>
              <a href="#come">Come ottenerla</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; il <em>ticket sanitario</em></h2>
            <p>Il ticket sanitario &egrave; la quota che il cittadino paga per le prestazioni del Servizio Sanitario Nazionale: visite specialistiche, esami diagnostici (sangue, ecografie, radiografie), farmaci di fascia A. Chi &egrave; esente non paga nulla.</p>
            <p>Le esenzioni si dividono in tre categorie: esenzione per <strong>reddito o condizione lavorativa</strong> (codici E01-E04), esenzione per <strong>patologia cronica</strong> (codici numerici), esenzione per <strong>invalidit&agrave; o condizione speciale</strong>.</p>
            <p>Il codice di esenzione compare sulla ricetta del medico di base. Se hai diritto all&apos;esenzione e il medico non la indica, fallo presente: &egrave; suo compito inserirla.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>Ticket</strong> &mdash; la quota a carico del cittadino per prestazioni SSN. Varia per tipo di prestazione e Regione.</p>
            <p><strong>Codice di esenzione</strong> &mdash; il codice alfanumerico che il medico scrive sulla ricetta. Determina per quali prestazioni non paghi.</p>
            <p><strong>Reddito complessivo del nucleo</strong> &mdash; il reddito lordo di tutti i componenti del nucleo familiare. Non &egrave; l&apos;ISEE: sono cose diverse.</p>
          </div>

          <div className="guide-section rv" id="reddito">
            <div className="guide-section-label">Per reddito</div>
            <h2>Esenzione per <em>reddito ed et&agrave;</em></h2>

            <p><strong>E01</strong> &mdash; Reddito familiare non superiore a 36.151,98&euro; + titolare di pensione minima con et&agrave; superiore a 60 anni. <strong>Automatica.</strong></p>

            <p><strong>E02</strong> &mdash; Disoccupato con reddito familiare non superiore a 8.263,31&euro; (+516&euro; per coniuge e per ogni figlio). <strong>Non automatica:</strong> serve autocertificazione alla ASL entro il 31 marzo di ogni anno.</p>

            <p><strong>E03</strong> &mdash; Titolare di assegno (ex pensione) sociale. <strong>Automatica.</strong></p>

            <p><strong>E04</strong> &mdash; Titolare di pensione al minimo con et&agrave; inferiore a 60 anni, reddito familiare non superiore a 8.263,31&euro;. <strong>Automatica.</strong></p>

            <p><strong>Under 6 e over 65:</strong> i bambini sotto i 6 anni e gli anziani sopra i 65 anni con reddito familiare sotto 36.151,98&euro; sono esenti. Automatico.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
              <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">CODICI ESENZIONE PER REDDITO</text>
                <rect x="16" y="50" width="308" height="28" rx="6" fill="#2D8A6E"/><text x="28" y="70" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">E01: pensionati &gt;60 anni, reddito &le; 36.151&euro; (automatica)</text>
                <rect x="16" y="84" width="308" height="28" rx="6" fill="#E8724A"/><text x="28" y="104" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">E02: disoccupati, reddito &le; 8.263&euro; (autocertificazione ASL)</text>
                <rect x="16" y="118" width="240" height="28" rx="6" fill="#5B7EC5"/><text x="28" y="138" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">E03: titolari assegno sociale (automatica)</text>
                <rect x="16" y="152" width="240" height="28" rx="6" fill="#8B6CC1"/><text x="28" y="172" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">E04: pensione minima &lt;60 anni (automatica)</text>
                <text x="16" y="205" fill="#2D8A6E" fontFamily="sans-serif" fontSize="10" fontWeight="600">Under 6 e over 65 con reddito basso: automatica via Sistema Tessera Sanitaria</text>
              </svg>
            </div>

            <div className="guide-callout">
              <strong>Per E01, E03, E04 non devi fare nulla.</strong> Il Sistema Tessera Sanitaria verifica automaticamente. Se hai diritto, l&apos;esenzione compare gi&agrave; nella ricetta del medico. Per E02 (disoccupati) serve la tua autocertificazione alla ASL.
            </div>
          </div>

          <div className="guide-section rv" id="patologia">
            <div className="guide-section-label">Per patologia</div>
            <h2>Esenzione per <em>patologia cronica</em></h2>
            <p>Chi soffre di una patologia cronica o rara ha diritto all&apos;esenzione per le prestazioni necessarie alla diagnosi, cura e monitoraggio della condizione. L&apos;esenzione non vale per tutte le prestazioni, ma solo per quelle correlate alla patologia.</p>
            <p>Esempi comuni: diabete mellito (<strong>013</strong>), ipertensione grave (<strong>031</strong>), asma (<strong>007</strong>), patologie cardiache (<strong>022</strong>), tumori (<strong>048</strong>), HIV (<strong>054</strong>), sclerosi multipla (<strong>049</strong>), celiachia (<strong>009</strong>).</p>
            <p>Per ottenerla: fatti rilasciare una <strong>certificazione da uno specialista</strong> di struttura pubblica o accreditata, portala alla ASL con la tessera sanitaria, la ASL rilascia l&apos;attestato con il codice.</p>
            <div className="guide-callout warn">
              <strong>L&apos;esenzione per patologia &egrave; parziale.</strong> Se hai il codice 013 (diabete), sei esente solo per le prestazioni correlate al diabete. Per una visita dermatologica non correlata, paghi normalmente (a meno che tu non abbia anche un&apos;esenzione per reddito).
            </div>
          </div>

          <div className="guide-section rv" id="invalidita">
            <div className="guide-section-label">Per invalidit&agrave;</div>
            <h2>Esenzione per <em>invalidit&agrave;</em></h2>
            <p>Sono esenti per <strong>tutte le prestazioni</strong>: grandi invalidi di guerra, soggetti con invalidit&agrave; civile al 100% (o al 67% con reddito basso), ciechi civili, sordi, soggetti con <Link href="/legge-104" style={{color:'var(--green)',fontWeight:600}}>Legge 104 art. 3 comma 3</Link>.</p>
            <p>Sono esenti <strong>solo per prestazioni correlate</strong>: soggetti in attesa di trapianto, donatori di organi, vittime di violenza, donne in gravidanza (per le prestazioni previste dai LEA per la maternit&agrave;).</p>
            <p>Per ottenere queste esenzioni: porta il verbale INPS o il documento che certifica la tua condizione alla ASL. La ASL aggiorna il tuo fascicolo sanitario.</p>
          </div>

          <div className="guide-section rv" id="come">
            <div className="guide-section-label">Procedura</div>
            <h2>Come verificare e <em>ottenere l&apos;esenzione</em></h2>

            <h3>1. Chiedi al tuo medico di base</h3>
            <p>Il modo pi&ugrave; veloce. Il medico vede i tuoi codici esenzione nel sistema quando scrive la ricetta. Se non li applica, segnalalo.</p>

            <h3>2. Verifica online</h3>
            <p>Accedi al Fascicolo Sanitario Elettronico della tua Regione (con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link>) o al portale del Sistema Tessera Sanitaria. Vedi i tuoi codici di esenzione attivi.</p>

            <h3>3. Per patologia cronica: specialista + ASL</h3>
            <p>Certificazione da specialista di struttura pubblica, poi porta tutto alla ASL con la tessera sanitaria.</p>

            <h3>4. Per E02 (disoccupati): autocertificazione alla ASL</h3>
            <p>Entro il 31 marzo di ogni anno. Non &egrave; automatica: se non la presenti, perdi l&apos;esenzione.</p>
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
              <Link href="/legge-104" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#F0E8FF,#e4d9f7)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Legge 104</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="92" width="140" height="5" rx="2.5" fill="#E8E0D4"/></svg>
                </div>
                <h4>Legge 104</h4>
                <p>Con il comma 3 hai l&apos;esenzione ticket totale.</p>
              </Link>
              <Link href="/spese-mediche" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Spese Mediche</text><path d="M56 110v20M46 120h20" stroke="#2D8A6E" strokeWidth="3" strokeLinecap="round" opacity=".3"/></svg>
                </div>
                <h4>Spese Mediche</h4>
                <p>Anche con l&apos;esenzione, alcune spese si detraggono nel 730.</p>
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
