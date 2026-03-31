'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideCieContent({ faqItems }) {
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
            <h1>Carta d&apos;Identit&agrave; Elettronica (CIE): Come Richiederla nel 2026</h1>
            <p className="guide-hero-sub">Quanto costa, documenti necessari, tempi di rilascio e come usarla al posto dello SPID per accedere ai servizi online.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>8 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="140" height="100" rx="10" fill="#4A90D9" opacity=".1"/><rect x="45" y="70" width="35" height="45" rx="4" fill="#8A857C" opacity=".15"/><rect x="90" y="75" width="65" height="6" rx="3" fill="#1A1A2E" opacity=".2"/><rect x="90" y="89" width="50" height="6" rx="3" fill="#1A1A2E" opacity=".15"/><rect x="90" y="103" width="55" height="6" rx="3" fill="#1A1A2E" opacity=".1"/><circle cx="63" cy="87" r="10" fill="#8A857C" opacity=".2"/></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; la CIE e perch&eacute; sostituisce la carta d&apos;identit&agrave; cartacea</li>
                <li>Come prenotare l&apos;appuntamento al Comune</li>
                <li>Quanto costa (22,21&euro;) e quanto tempo ci vuole</li>
                <li>Come usare la CIE al posto dello SPID per accedere ai servizi online</li>
                <li>Cosa fare in caso di smarrimento o furto</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; la CIE</a>
              <a href="#come">Come richiederla</a>
              <a href="#online">CIE per i servizi online</a>
              <a href="#smarrimento">Smarrimento e furto</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; la <em>CIE</em></h2>
            <p>La Carta d&apos;Identit&agrave; Elettronica &egrave; il documento di identit&agrave; che ha sostituito la vecchia carta cartacea. &Egrave; una tessera in policarbonato con un <strong>chip NFC</strong> che contiene i tuoi dati biometrici (foto e impronte digitali), ha un <strong>codice QR</strong> e un <strong>numero CIE</strong> univoco.</p>
            <p>Oltre a identificarti fisicamente, la CIE &egrave; anche un&apos;<strong>identit&agrave; digitale</strong>: puoi usarla per accedere a tutti i servizi della pubblica amministrazione online (INPS, Agenzia delle Entrate, ANPR) esattamente come faresti con lo <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link>.</p>
            <p>La CIE dura <strong>10 anni</strong> per gli adulti (3 anni per i minori sotto i 3 anni, 5 anni tra 3 e 18 anni). &Egrave; valida come documento di viaggio in tutti i Paesi dell&apos;Unione Europea e in alcuni Paesi extra-UE.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>CIE</strong> &mdash; Carta d&apos;Identit&agrave; Elettronica. Documento di identit&agrave; con chip NFC. Costo: 22,21&euro;.</p>
            <p><strong>PIN CIE</strong> &mdash; il codice numerico di 8 cifre. Le prime 4 le ricevi alla richiesta, le altre 4 con la carta. Serve per l&apos;accesso online.</p>
            <p><strong>CIEid</strong> &mdash; l&apos;app ufficiale per usare la CIE come identit&agrave; digitale dallo smartphone.</p>
            <p><strong>NFC</strong> &mdash; la tecnologia che permette di leggere il chip della CIE con lo smartphone semplicemente avvicinandolo.</p>
          </div>

          <div className="guide-section rv" id="come">
            <div className="guide-section-label">Procedura</div>
            <h2>Come <em>richiederla</em></h2>

            <h3>Passo 1: Prenota l&apos;appuntamento</h3>
            <p>Online su <strong>prenotazionicie.interno.gov.it</strong> oppure chiamando il tuo Comune. Alcuni Comuni permettono anche di presentarsi senza appuntamento.</p>

            <h3>Passo 2: Presentati al Comune</h3>
            <p>Porta: la vecchia carta d&apos;identit&agrave; (se scaduta va bene, se smarrita serve la denuncia), il <Link href="/codice-fiscale" style={{color:'var(--green)',fontWeight:600}}>codice fiscale</Link> o tessera sanitaria, una fototessera recente (molti Comuni la scattano sul posto). Costo: <strong>22,21&euro;</strong> (pagamento in contanti o carta, dipende dal Comune).</p>

            <h3>Passo 3: Ricevi le prime 4 cifre del PIN</h3>
            <p>Ti vengono consegnate subito al momento della richiesta. Conservale: servono per attivare l&apos;accesso online.</p>

            <h3>Passo 4: Ricevi la CIE a casa</h3>
            <p>La CIE arriva per posta all&apos;indirizzo di residenza entro <strong>6 giorni lavorativi</strong>. Nella busta trovi anche le seconde 4 cifre del PIN e il PUK.</p>

            <div className="guide-callout">
              <strong>Rinnovo:</strong> puoi richiedere la nuova CIE a partire da <strong>180 giorni prima della scadenza</strong>. Non aspettare che scada: prenota con anticipo per evitare di restare senza documento valido.
            </div>
          </div>

          <div className="guide-section rv" id="online">
            <div className="guide-section-label">Accesso online</div>
            <h2>CIE per <em>i servizi online</em></h2>
            <p>La CIE funziona come identit&agrave; digitale di livello 3 (il pi&ugrave; alto). Per usarla online:</p>
            <p><strong>Con smartphone NFC:</strong> scarica l&apos;app <strong>CIEid</strong>, registra la CIE avvicinandola al telefono, inserisci il PIN di 8 cifre. Da quel momento puoi accedere a tutti i siti della PA (INPS, Agenzia delle Entrate, ANPR) selezionando &ldquo;Entra con CIE&rdquo;.</p>
            <p><strong>Con lettore NFC per PC:</strong> colleghi un lettore al computer, installi il software CIE e accedi allo stesso modo.</p>
            <div className="guide-callout">
              <strong>CIE vs SPID:</strong> entrambi danno accesso agli stessi servizi online. La CIE &egrave; pi&ugrave; sicura (livello 3) e non scade come le credenziali SPID. Lo SPID &egrave; pi&ugrave; comodo (non serve avvicinare la carta ogni volta). Molti usano entrambi.
            </div>
          </div>

          <div className="guide-section rv" id="smarrimento">
            <div className="guide-section-label">Smarrimento</div>
            <h2>Smarrimento e <em>furto</em></h2>
            <p>In caso di smarrimento o furto: <strong>fai denuncia</strong> ai Carabinieri o alla Polizia. Poi richiedi la nuova CIE al Comune portando la denuncia. Costo: sempre 22,21&euro;. Il vecchio documento viene bloccato automaticamente.</p>
            <div className="guide-callout warn">
              <strong>Blocca subito la CIE digitale.</strong> Se ti rubano la CIE, il ladro potrebbe usarla per accedere ai servizi online. Chiama il numero verde <strong>800.263.336</strong> per bloccare la funzionalit&agrave; digitale immediatamente.
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
              <Link href="/spid" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#ECF0FA,#dce4f5)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">SPID</text><rect x="56" y="78" width="208" height="28" rx="6" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1"/><rect x="56" y="114" width="208" height="28" rx="6" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1"/><rect x="56" y="150" width="208" height="24" rx="6" fill="#5B7EC5"/><text x="160" y="166" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="10" fontWeight="bold">Entra con SPID</text></svg>
                </div>
                <h4>SPID</h4>
                <p>L&apos;alternativa digitale alla CIE. 15 minuti, gratis.</p>
              </Link>
              <Link href="/codice-fiscale" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Codice Fiscale</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="95" width="140" height="5" rx="2.5" fill="#E8E0D4"/></svg>
                </div>
                <h4>Codice Fiscale</h4>
                <p>Come richiederlo o ricalcolarlo.</p>
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
