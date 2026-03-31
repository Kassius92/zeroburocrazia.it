'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideCodiceFiscaleContent({ faqItems }) {
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
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Documenti</span></div>
            <div className="guide-hero-top"><span className="guide-tag documenti">Documenti</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Codice Fiscale: Come Richiederlo, Calcolarlo e Cosa Fare se lo Perdi</h1>
            <p className="guide-hero-sub">Come funziona, dove si richiede, come calcolarlo e cosa fare in caso di smarrimento o furto.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>8 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="55" width="140" height="90" rx="8" fill="#4A90D9" opacity=".1"/><rect x="45" y="75" width="110" height="8" rx="4" fill="#4A90D9" opacity=".3"/><rect x="45" y="91" width="90" height="8" rx="4" fill="#4A90D9" opacity=".2"/><rect x="45" y="107" width="70" height="8" rx="4" fill="#4A90D9" opacity=".15"/></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; il codice fiscale e come &egrave; composto (16 caratteri)</li>
                <li>Come richiederlo: neonati, stranieri, smarrimento</li>
                <li>Come calcolare il codice fiscale al volo</li>
                <li>Tessera sanitaria: a cosa serve e cosa fare se scade</li>
                <li>Codice fiscale per stranieri e neonati</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; il codice fiscale</a>
              <a href="#struttura">Come &egrave; composto</a>
              <a href="#richiesta">Come richiederlo</a>
              <a href="#smarrimento">Smarrimento e duplicato</a>
              <a href="#tessera">La tessera sanitaria</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; il <em>codice fiscale</em></h2>
            <p>Il codice fiscale &egrave; una sequenza di <strong>16 caratteri</strong> (lettere e numeri) che identifica in modo univoco ogni persona fisica in Italia. Lo usi praticamente ovunque: contratti di lavoro, dichiarazione dei redditi, visite mediche, apertura di conti correnti, acquisto di farmaci, pratiche burocratiche di ogni tipo.</p>
            <p>Viene attribuito dall&apos;<strong>Agenzia delle Entrate</strong> alla nascita (per i nati in Italia) o al momento della registrazione (per gli stranieri). &Egrave; stampato sulla <strong>tessera sanitaria</strong>, che funge anche da tessera europea di assicurazione malattia.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>Codice fiscale</strong> &mdash; 16 caratteri alfanumerici che ti identificano. Non cambia mai, nemmeno se ti sposi o cambi residenza.</p>
            <p><strong>Tessera sanitaria (TS)</strong> &mdash; la tessera plastificata con il codice fiscale, il codice a barre e il chip. Ha una scadenza e va rinnovata.</p>
            <p><strong>Omocodia</strong> &mdash; quando due persone genererebbero lo stesso codice fiscale. L&apos;Agenzia delle Entrate lo risolve sostituendo alcune cifre con lettere.</p>
          </div>

          <div className="guide-section rv" id="struttura">
            <div className="guide-section-label">Struttura</div>
            <h2>Come &egrave; <em>composto</em></h2>
            <p>Il codice fiscale di 16 caratteri si legge cos&igrave;: le prime <strong>3 lettere</strong> derivano dal cognome, le successive <strong>3</strong> dal nome, poi <strong>2 cifre</strong> per l&apos;anno di nascita, <strong>1 lettera</strong> per il mese, <strong>2 cifre</strong> per il giorno (per le donne si aggiunge 40), <strong>4 caratteri</strong> per il codice del Comune di nascita (o Stato estero), e infine <strong>1 lettera</strong> di controllo calcolata automaticamente.</p>
            <div className="guide-img" style={{background:'linear-gradient(135deg,#ECF0FA,#dce4f5)'}}>
              <svg viewBox="0 0 340 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="170" y="30" textAnchor="middle" fill="#1A1A2E" fontFamily="monospace" fontSize="22" fontWeight="700" letterSpacing="3">RSSMRA85A01H501Z</text>
                <rect x="16" y="50" width="60" height="24" rx="4" fill="#2D8A6E" opacity=".15"/><text x="46" y="67" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="600">Cognome</text>
                <rect x="82" y="50" width="60" height="24" rx="4" fill="#E8724A" opacity=".15"/><text x="112" y="67" textAnchor="middle" fill="#E8724A" fontSize="9" fontWeight="600">Nome</text>
                <rect x="148" y="50" width="40" height="24" rx="4" fill="#5B7EC5" opacity=".15"/><text x="168" y="67" textAnchor="middle" fill="#5B7EC5" fontSize="9" fontWeight="600">Anno</text>
                <rect x="194" y="50" width="24" height="24" rx="4" fill="#8B5CF6" opacity=".15"/><text x="206" y="67" textAnchor="middle" fill="#8B5CF6" fontSize="9" fontWeight="600">Mese</text>
                <rect x="224" y="50" width="36" height="24" rx="4" fill="#C49A2A" opacity=".15"/><text x="242" y="67" textAnchor="middle" fill="#C49A2A" fontSize="9" fontWeight="600">Giorno</text>
                <rect x="266" y="50" width="50" height="24" rx="4" fill="#E8724A" opacity=".15"/><text x="291" y="67" textAnchor="middle" fill="#E8724A" fontSize="9" fontWeight="600">Comune</text>
                <rect x="322" y="50" width="12" height="24" rx="4" fill="#8A857C" opacity=".2"/><text x="328" y="67" textAnchor="middle" fill="#8A857C" fontSize="8" fontWeight="600">C</text>
                <text x="170" y="110" textAnchor="middle" fill="#8A857C" fontFamily="sans-serif" fontSize="10">RSS = Rossi &bull; MRA = Maria &bull; 85 = 1985 &bull; A = Gennaio &bull; 01 = giorno 1</text>
                <text x="170" y="130" textAnchor="middle" fill="#8A857C" fontFamily="sans-serif" fontSize="10">H501 = Roma &bull; Z = carattere di controllo</text>
              </svg>
            </div>
          </div>

          <div className="guide-section rv" id="richiesta">
            <div className="guide-section-label">Procedura</div>
            <h2>Come <em>richiederlo</em></h2>
            <h3>Neonati</h3>
            <p>Per i nati in Italia, il codice fiscale viene attribuito automaticamente dall&apos;Agenzia delle Entrate quando il Comune registra la nascita. La tessera sanitaria arriva a casa per posta entro qualche settimana.</p>
            <h3>Stranieri</h3>
            <p>Per chi arriva dall&apos;estero: presentarsi all&apos;Agenzia delle Entrate con passaporto e permesso di soggiorno. Il codice viene rilasciato subito, la tessera sanitaria arriva per posta.</p>
            <h3>Calcolo online</h3>
            <p>Puoi calcolare il tuo codice fiscale su diversi siti online (inserisci nome, cognome, data e luogo di nascita). Il risultato &egrave; attendibile ma non ufficiale: per il codice ufficiale fa fede quello dell&apos;Agenzia delle Entrate.</p>
            <div className="guide-callout">
              <strong>Il codice fiscale non cambia mai:</strong> anche se ti sposi, cambi nome, cambi residenza o cambi cittadinanza. L&apos;unico caso &egrave; un errore nell&apos;attribuzione originale, che va corretto dall&apos;Agenzia delle Entrate.
            </div>
          </div>

          <div className="guide-section rv" id="smarrimento">
            <div className="guide-section-label">Smarrimento</div>
            <h2>Smarrimento e <em>duplicato</em></h2>
            <p>Se perdi la tessera sanitaria o te la rubano: puoi richiedere il duplicato <strong>online</strong> su agenziaentrate.gov.it (con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link>), di persona all&apos;Agenzia delle Entrate (nessun appuntamento, nessun costo), oppure inviando il modello AA4/8 con copia del documento via PEC.</p>
            <p>Nel frattempo, il codice fiscale resta valido anche senza la tessera fisica. Puoi usarlo mostrando un documento d&apos;identit&agrave;. Molte farmacie e studi medici lo cercano nel sistema con il tuo nome.</p>
            <div className="guide-callout warn">
              <strong>In caso di furto:</strong> fai denuncia ai Carabinieri o alla Polizia prima di richiedere il duplicato. La denuncia ti protegge da eventuali usi fraudolenti.
            </div>
          </div>

          <div className="guide-section rv" id="tessera">
            <div className="guide-section-label">Tessera sanitaria</div>
            <h2>La <em>tessera sanitaria</em></h2>
            <p>La tessera sanitaria &egrave; la carta plastificata che contiene il codice fiscale, il codice a barre, il chip e i dati anagrafici. Ha una <strong>scadenza</strong> (stampata sulla tessera) e va rinnovata. Il rinnovo &egrave; automatico: la nuova tessera arriva a casa per posta prima della scadenza. Se non arriva, contatta la tua ASL o l&apos;Agenzia delle Entrate.</p>
            <p>La tessera sanitaria &egrave; anche la <strong>TEAM</strong> (Tessera Europea Assicurazione Malattia): la usi per ricevere assistenza sanitaria in tutti i Paesi dell&apos;Unione Europea.</p>
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
              <Link href="/cie" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#ECF0FA,#dce4f5)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">CIE</text><rect x="56" y="74" width="35" height="45" rx="4" fill="#8A857C" opacity=".15"/><rect x="100" y="78" width="80" height="5" rx="2.5" fill="#E8E0D4"/><rect x="100" y="92" width="60" height="5" rx="2.5" fill="#E8E0D4"/></svg>
                </div>
                <h4>Carta d&apos;Identit&agrave; Elettronica</h4>
                <p>Come richiederla, quanto costa, come usarla al posto dello SPID.</p>
              </Link>
              <Link href="/spid" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">SPID</text><rect x="56" y="78" width="208" height="28" rx="6" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1"/><rect x="56" y="114" width="208" height="28" rx="6" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1"/><rect x="56" y="150" width="208" height="24" rx="6" fill="#5B7EC5"/></svg>
                </div>
                <h4>SPID</h4>
                <p>L&apos;identit&agrave; digitale. 15 minuti, gratis.</p>
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
