'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { FiscozenBanner, FiscozenSticky } from '@/components/FiscozenBanner';

export default function GuideFatturaContent({ faqItems }) {
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
            <h1>Come Fare la Fattura Elettronica nel 2026: Guida Completa</h1>
            <p className="guide-hero-sub">Come funziona, software gratuiti, dati obbligatori, marca da bollo, conservazione 10 anni. Obbligatoria per tutti dal 2024.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>8 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="130" height="130" rx="8" fill="#E8724A" opacity=".06"/><rect x="55" y="55" width="90" height="110" rx="6" fill="#fff" stroke="#E0DBD2" strokeWidth="1.5"/><rect x="65" y="70" width="70" height="5" rx="2.5" fill="#2D8A6E" opacity=".4"/><rect x="65" y="82" width="50" height="5" rx="2.5" fill="#8A857C" opacity=".2"/><rect x="65" y="94" width="60" height="5" rx="2.5" fill="#8A857C" opacity=".2"/><line x1="65" y1="110" x2="135" y2="110" stroke="#E0DBD2" strokeWidth="1"/><rect x="65" y="120" width="40" height="5" rx="2.5" fill="#E8724A" opacity=".3"/><rect x="65" y="140" width="70" height="14" rx="4" fill="#2D8A6E" opacity=".12"/><text x="100" y="150" textAnchor="middle" fill="#2D8A6E" fontSize="8" fontWeight="600">INVIA SdI</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; la fattura elettronica e come funziona il SdI</li>
                <li>Come si fa una fattura in 4 passi</li>
                <li>Quale software usare (gratis o a pagamento)</li>
                <li>Dati obbligatori, marca da bollo e conservazione</li>
                <li>Un esempio reale: Luca, da 15 minuti a 30 secondi per fattura</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; la fattura elettronica</a>
              <a href="#come">Come si fa una fattura</a>
              <a href="#strumenti">Quale software usare</a>
              <a href="#dati">Dati obbligatori</a>
              <a href="#esempio">Esempio: il caso di Luca</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; la <em>fattura elettronica</em></h2>
            <p>La fattura elettronica &egrave; una fattura in formato <strong>XML</strong> che viene inviata attraverso il Sistema di Interscambio (SdI) dell&apos;Agenzia delle Entrate. Non &egrave; un PDF: &egrave; un file strutturato che il sistema legge automaticamente. Tu lo crei con un software, il software lo invia al SdI, il SdI lo controlla e lo recapita al destinatario.</p>
            <p>Dal 2024 &egrave; <strong>obbligatoria per tutti</strong>, compresi i forfettari. Non ci sono pi&ugrave; esenzioni. Ogni fattura deve essere elettronica e passare dal SdI.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>SdI</strong> &mdash; Sistema di Interscambio. Il sistema dell&apos;Agenzia delle Entrate che riceve, controlla e recapita le fatture. &Egrave; l&apos;intermediario obbligatorio.</p>
            <p><strong>XML</strong> &mdash; il formato tecnico della fattura. Non lo vedi mai: il software lo genera automaticamente.</p>
            <p><strong>Codice destinatario</strong> &mdash; il codice di 7 cifre del software del tuo cliente. Per privati senza P.IVA: 0000000 (sette zeri).</p>
            <p><strong><Link href="/pec" style={{color:'var(--green)',fontWeight:600}}>PEC</Link></strong> &mdash; canale alternativo se il cliente non ha il codice destinatario.</p>
            <p><strong>Conservazione sostitutiva</strong> &mdash; obbligo di conservare le fatture digitalmente per 10 anni. Il servizio gratuito dell&apos;AE la include.</p>
            <p><strong>Marca da bollo virtuale</strong> &mdash; per i forfettari, tutte le fatture sopra 77,47&euro; richiedono 2&euro; di bollo. Si paga a fine trimestre tramite F24.</p>
          </div>

          <div className="guide-section rv" id="come">
            <div className="guide-section-label">Procedura</div>
            <h2>Come si fa <em>una fattura</em></h2>
            <h3>Passo 1: Scegli lo strumento</h3>
            <p>Portale gratuito dell&apos;Agenzia delle Entrate (Fatture e Corrispettivi) oppure un servizio di gestione P.IVA con fatturazione integrata.</p>
            <h3>Passo 2: Inserisci i dati</h3>
            <p>I tuoi dati (P.IVA, regime fiscale), i dati del cliente (P.IVA o codice fiscale, codice destinatario o PEC), la descrizione del servizio e l&apos;importo.</p>
            <h3>Passo 3: Il software genera l&apos;XML e lo invia al SdI</h3>
            <p>Il SdI controlla il file e lo recapita al destinatario. Se c&apos;&egrave; un errore, ti manda una notifica di scarto.</p>
            <h3>Passo 4: Conserva la fattura</h3>
            <p>La fattura va conservata 10 anni in formato digitale. Con il portale dell&apos;AE la conservazione &egrave; automatica e gratuita.</p>
          </div>

          <div className="guide-section rv" id="strumenti">
            <div className="guide-section-label">Software</div>
            <h2>Quale software <em>usare</em></h2>
            <p><strong>Portale AE (gratuito):</strong> 0&euro;. Poche fatture al mese, interfaccia basica. Accedi con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link>.</p>
            <p><strong>Servizio gestione P.IVA:</strong> abbonamento annuale. Fatturazione + consulenza + dichiarazione. Tutto incluso.</p>
            <p><strong>Software autonomo:</strong> 5&ndash;25&euro;/mese. Solo fatturazione, senza gestione fiscale.</p>
            <div className="guide-callout">
              <strong>Consiglio onesto:</strong> se sei forfettario con pochi clienti, il portale gratuito dell&apos;Agenzia funziona. Se fai pi&ugrave; di 10 fatture al mese o vuoi la gestione automatica (scadenze, incassi, F24), un servizio di gestione della partita IVA ti semplifica la vita.
            </div>
            <div style={{marginTop:'32px'}}>
              <FiscozenBanner />
            </div>
          </div>

          <div className="guide-section rv" id="dati">
            <div className="guide-section-label">Checklist</div>
            <h2>Dati <em>obbligatori</em> in fattura</h2>
            <p><strong>I tuoi dati:</strong> ragione sociale o nome/cognome, numero di partita IVA, indirizzo sede legale, regime fiscale (forfettario: RF19).</p>
            <p><strong>Dati del cliente:</strong> P.IVA o codice fiscale, codice destinatario o PEC.</p>
            <p><strong>Dati della fattura:</strong> numero e data fattura (progressivo), descrizione del servizio/prodotto, importo + eventuale marca da bollo.</p>
            <div className="guide-callout warn">
              <strong>Dicitura obbligatoria per forfettari:</strong> &ldquo;Operazione effettuata ai sensi dell&apos;art. 1, commi 54-89, L. 190/2014&rdquo;. Non applichi l&apos;IVA (codice natura N2.2). Per fatture sopra 77,47&euro; indica la marca da bollo di 2&euro;.
            </div>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Luca</em></h2>
            <p>Luca &egrave; un web designer forfettario. All&apos;inizio usava il portale gratuito dell&apos;Agenzia delle Entrate. Funzionava, ma ogni fattura gli costava 15 minuti: cercare codici fiscali, riscrivere descrizioni, calcolare il bollo a mano.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Prima (portale AE)</strong>
                15 minuti per fattura<br />
                Dati clienti da riscrivere ogni volta<br />
                Bollo da calcolare a mano<br />
                Costo: 0&euro;
              </div>
              <div className="guide-compare-item after">
                <strong>Dopo (servizio gestione P.IVA)</strong>
                30 secondi per fattura<br />
                Clienti abituali gi&agrave; salvati<br />
                Bollo calcolato in automatico<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>+ consulenza inclusa</strong>
              </div>
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
                <p>Costi, tasse, forfettario e procedura.</p>
              </Link>
              <Link href="/regime-forfettario" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Regime Forfettario</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/></svg>
                </div>
                <h4>Regime Forfettario</h4>
                <p>Requisiti, tetto 85k, coefficienti e obblighi.</p>
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
