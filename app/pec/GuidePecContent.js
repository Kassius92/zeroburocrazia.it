'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuidePecContent({ faqItems }) {
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
            <h1>PEC: Come Attivarla, Quanto Costa e Perch&eacute; Serve</h1>
            <p className="guide-hero-sub">La posta elettronica certificata: come funziona, i provider migliori, quando &egrave; obbligatoria e come usarla per difenderti.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>8 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="55" width="130" height="90" rx="8" fill="#2D8A6E" opacity=".08"/><path d="M45 65l55 35 55-35" stroke="#2D8A6E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity=".4"/><rect x="45" y="65" width="110" height="70" rx="6" stroke="#2D8A6E" strokeWidth="1.5" opacity=".3" fill="none"/><circle cx="140" cy="65" r="12" fill="#E8724A" opacity=".2"/><path d="M135 65l4 4 7-7" stroke="#E8724A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; la PEC e perch&eacute; ha valore legale (come una raccomandata)</li>
                <li>I provider migliori: Aruba, Legalmail, Register &mdash; confronto e prezzi</li>
                <li>Quando &egrave; obbligatoria e quando ti conviene anche se non lo &egrave;</li>
                <li>Come attivare una PEC in 10 minuti</li>
                <li>La PEC gratuita per i cittadini (INAD)</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; la PEC</a>
              <a href="#chi">Chi &egrave; obbligato</a>
              <a href="#provider">I provider migliori</a>
              <a href="#come">Come attivarla</a>
              <a href="#quando">Quando usarla</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; la <em>PEC</em></h2>
            <p>La PEC (Posta Elettronica Certificata) &egrave; un&apos;email con <strong>valore legale</strong>. Quando mandi una PEC, ricevi una ricevuta di invio e una ricevuta di consegna che certificano data, ora e contenuto del messaggio. Ha lo stesso valore di una raccomandata con ricevuta di ritorno, ma costa meno, arriva in tempo reale e non devi andare alle Poste.</p>
            <p>Funziona come una normale email: hai un indirizzo (es. mario.rossi@pec.it), mandi e ricevi messaggi da qualsiasi dispositivo. La differenza &egrave; che il provider certifica ogni invio e consegna con firma digitale.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>PEC</strong> &mdash; Posta Elettronica Certificata. Email con valore legale equivalente alla raccomandata A/R.</p>
            <p><strong>Ricevuta di accettazione</strong> &mdash; il provider certifica che hai inviato il messaggio. Con data e ora esatte.</p>
            <p><strong>Ricevuta di consegna</strong> &mdash; il provider del destinatario certifica che il messaggio &egrave; stato recapitato nella casella PEC. Non serve che il destinatario lo legga: la consegna ha gi&agrave; valore legale.</p>
            <p><strong>INAD</strong> &mdash; Indice Nazionale dei Domicili Digitali. Il registro dove i cittadini possono inserire gratuitamente il proprio indirizzo PEC come domicilio digitale ufficiale.</p>
            <div className="guide-callout">
              <strong>La PEC vale in tribunale:</strong> una PEC pu&ograve; essere usata come prova in un procedimento legale. La ricevuta di consegna dimostra che il destinatario ha ricevuto il messaggio, anche se non lo ha letto. Per questo &egrave; fondamentale per diffide, reclami, disdette e comunicazioni importanti.
            </div>
          </div>

          <div className="guide-section rv" id="chi">
            <div className="guide-section-label">Obblighi</div>
            <h2>Chi &egrave; <em>obbligato</em></h2>
            <p><strong>Obbligatoria per:</strong> tutte le imprese iscritte al Registro Imprese, tutti i professionisti iscritti ad albi (avvocati, commercialisti, medici, ingegneri, architetti), le pubbliche amministrazioni.</p>
            <p><strong>Facoltativa ma fortemente consigliata per:</strong> tutti i cittadini. Dal 2025 puoi registrare il tuo indirizzo PEC su INAD come domicilio digitale: la PA ti mander&agrave; le comunicazioni l&igrave; invece che per raccomandata.</p>
            <div className="guide-callout warn">
              <strong>Senza PEC perdi soldi e tempo.</strong> Ogni diffida inviata per raccomandata costa 6-8&euro; e richiede una visita alle Poste. Una PEC costa pochi centesimi e la mandi dal divano. Se devi contestare una bolletta, un operatore telefonico, un datore di lavoro &mdash; con la PEC hai la prova certa e immediata.
            </div>
          </div>

          <div className="guide-section rv" id="provider">
            <div className="guide-section-label">Confronto</div>
            <h2>I provider <em>migliori</em></h2>
            <p><strong>Aruba PEC</strong> &mdash; il pi&ugrave; diffuso in Italia. Da 1&euro;+IVA il primo anno, poi ~5-8&euro;/anno. 1 GB di spazio. Interfaccia semplice.</p>
            <p><strong>Legalmail (InfoCert)</strong> &mdash; il pi&ugrave; professionale. ~25&euro;/anno con pi&ugrave; spazio e funzionalit&agrave;. Usato da molti professionisti e aziende.</p>
            <p><strong>Register.it PEC</strong> &mdash; buon rapporto qualit&agrave;/prezzo. ~5-10&euro;/anno. 2 GB di spazio.</p>
            <p><strong>PEC gratuita (INAD)</strong> &mdash; dal 2025, ogni cittadino pu&ograve; registrare un indirizzo PEC gratuito come domicilio digitale. Non &egrave; un provider: registri la tua PEC esistente su inad.gov.it.</p>
            <div className="guide-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
              <svg viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">CONFRONTO PROVIDER PEC</text>
                <rect x="16" y="48" width="308" height="32" rx="8" fill="#2D8A6E"/>
                <text x="28" y="70" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Aruba: ~5&euro;/anno &bull; 1 GB &bull; il pi&ugrave; usato</text>
                <rect x="16" y="88" width="260" height="32" rx="8" fill="#E8724A"/>
                <text x="28" y="110" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Legalmail: ~25&euro;/anno &bull; professionale</text>
                <rect x="16" y="128" width="220" height="32" rx="8" fill="#5B7EC5"/>
                <text x="28" y="150" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Register.it: ~8&euro;/anno &bull; 2 GB</text>
              </svg>
            </div>
          </div>

          <div className="guide-section rv" id="come">
            <div className="guide-section-label">Procedura</div>
            <h2>Come <em>attivarla</em></h2>
            <h3>Passo 1: Scegli il provider</h3>
            <p>Per un cittadino privato, Aruba PEC a ~5&euro;/anno &egrave; la scelta pi&ugrave; pratica. Per un professionista, valuta Legalmail per le funzionalit&agrave; aggiuntive.</p>
            <h3>Passo 2: Registrati online</h3>
            <p>Vai sul sito del provider, scegli il piano, inserisci i tuoi dati anagrafici e paga. Tempo: <strong>5-10 minuti</strong>.</p>
            <h3>Passo 3: Verifica l&apos;identit&agrave;</h3>
            <p>Con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link>, <Link href="/cie" style={{color:'var(--green)',fontWeight:600}}>CIE</Link> o firma digitale. Alcuni provider accettano anche webcam o bonifico da conto intestato.</p>
            <h3>Passo 4: Attiva e registra su INAD</h3>
            <p>La PEC &egrave; subito operativa. Registrala su inad.gov.it come domicilio digitale: la PA ti mander&agrave; le comunicazioni l&igrave;.</p>
          </div>

          <div className="guide-section rv" id="quando">
            <div className="guide-section-label">Quando usarla</div>
            <h2>Quando <em>usare la PEC</em></h2>
            <p><strong>Diffide e reclami</strong> &mdash; contestare una bolletta sbagliata, un servizio non erogato, un prodotto difettoso. La PEC &egrave; la prova che hai reclamato.</p>
            <p><strong>Disdette</strong> &mdash; contratti telefonici, abbonamenti, assicurazioni. La PEC ha data certa e valore legale.</p>
            <p><strong>Comunicazioni al datore di lavoro</strong> &mdash; malattia, permessi, contestazioni. La PEC protegge in caso di controversia.</p>
            <p><strong>Comunicazioni con la PA</strong> &mdash; Comune, Agenzia delle Entrate, INPS, ASL. Molti enti rispondono pi&ugrave; velocemente via PEC.</p>
            <p><strong>NASpI e giusta causa</strong> &mdash; se il datore non ti paga lo stipendio, la PEC &egrave; la prova documentale della giusta causa per le <Link href="/dimissioni" style={{color:'var(--green)',fontWeight:600}}>dimissioni</Link>.</p>
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
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">SPID</text><rect x="56" y="78" width="208" height="28" rx="6" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1"/><rect x="56" y="150" width="208" height="24" rx="6" fill="#5B7EC5"/><text x="160" y="166" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="10" fontWeight="bold">Entra con SPID</text></svg>
                </div>
                <h4>SPID</h4>
                <p>Per attivare la PEC con verifica identit&agrave; immediata.</p>
              </Link>
              <Link href="/cie" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">CIE</text><rect x="56" y="74" width="35" height="45" rx="4" fill="#8A857C" opacity=".15"/><rect x="100" y="78" width="80" height="5" rx="2.5" fill="#E8E0D4"/><rect x="100" y="92" width="60" height="5" rx="2.5" fill="#E8E0D4"/></svg>
                </div>
                <h4>CIE</h4>
                <p>Alternativa allo SPID per la verifica identit&agrave;.</p>
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
