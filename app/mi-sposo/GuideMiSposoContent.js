'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideMiSposoContent({ faqItems }) {
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
            <h1>Come Sposarsi nel 2026: Documenti, Costi e Procedura Completa</h1>
            <p className="guide-hero-sub">Documenti necessari, pubblicazioni, costi burocratici, comunione o separazione dei beni, congedo matrimoniale e tutto il resto.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>10 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="80" cy="90" r="20" fill="#8B5CF6" opacity=".08"/><circle cx="120" cy="90" r="20" fill="#8B5CF6" opacity=".08"/><path d="M80 75c0-8 20-18 20 0M120 75c0-8-20-18-20 0" stroke="#E8724A" strokeWidth="1.5" strokeLinecap="round" opacity=".3"/><rect x="55" y="130" width="90" height="30" rx="8" fill="#2D8A6E" opacity=".08"/><text x="100" y="150" textAnchor="middle" fill="#2D8A6E" fontSize="10" fontWeight="600">15 gg congedo</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Come funziona il matrimonio civile e concordatario in Italia</li>
                <li>Documenti necessari e pubblicazioni (8+3 giorni)</li>
                <li>Costi burocratici: marche da bollo, Comune, eventuale notaio</li>
                <li>Comunione o separazione dei beni: la scelta importante</li>
                <li>Un esempio reale: Marco e Sara, dal Comune all&apos;altare a Bologna</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Come funziona il matrimonio</a>
              <a href="#documenti">Documenti necessari</a>
              <a href="#pubblicazioni">Le pubblicazioni</a>
              <a href="#costi">Quanto costa</a>
              <a href="#beni">Comunione o separazione dei beni</a>
              <a href="#esempio">Esempio: Marco e Sara</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Come funziona <em>il matrimonio</em> in Italia</h2>
            <p>In Italia esistono due tipi di matrimonio con valore legale: il <strong>matrimonio civile</strong> (in Comune, davanti al sindaco) e il <strong>matrimonio concordatario</strong> (in chiesa, con effetti civili automatici). In entrambi i casi, la procedura burocratica &egrave; la stessa: documenti, pubblicazioni, cerimonia.</p>
            <p>Il matrimonio civile si celebra nella sala del Comune (o in una sede distaccata). Il matrimonio concordatario si celebra in chiesa e il parroco trasmette l&apos;atto al Comune. Anche alcune confessioni religiose riconosciute (valdesi, ebrei) hanno effetti civili diretti.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>Pubblicazioni</strong> &mdash; l&apos;affissione in Comune dell&apos;intenzione di sposarvi. Dura 8 giorni + 3 giorni di attesa. Obbligatoria.</p>
            <p><strong>Nulla osta</strong> &mdash; il certificato che dichiara che non ci sono impedimenti al matrimonio. Serve per gli stranieri.</p>
            <p><strong>Comunione dei beni</strong> &mdash; il regime patrimoniale di default: tutto ci&ograve; che comprate dopo il matrimonio &egrave; di entrambi al 50%.</p>
            <p><strong>Separazione dei beni</strong> &mdash; regime alternativo: ognuno resta proprietario di ci&ograve; che compra.</p>
            <p><strong>Congedo matrimoniale</strong> &mdash; 15 giorni di calendario retribuiti al 100%, da usare entro 30 giorni dal matrimonio.</p>
          </div>

          <div className="guide-section rv" id="documenti">
            <div className="guide-section-label">Cosa serve</div>
            <h2>Documenti <em>necessari</em></h2>
            <p><strong>Entrambi gli sposi:</strong> documento di identit&agrave; valido (<Link href="/cie" style={{color:'var(--green)',fontWeight:600}}>CIE</Link> o carta), <Link href="/codice-fiscale" style={{color:'var(--green)',fontWeight:600}}>codice fiscale</Link>, certificato di nascita (lo richiede il Comune stesso), certificato di residenza e stato libero.</p>
            <p><strong>Se uno dei due &egrave; straniero:</strong> nulla osta al matrimonio rilasciato dal proprio Paese (tradotto e apostillato). I tempi si allungano.</p>
            <p><strong>Se uno dei due &egrave; divorziato:</strong> sentenza di divorzio passata in giudicato.</p>
            <p><strong>Per il matrimonio religioso:</strong> i documenti civili pi&ugrave; quelli richiesti dalla parrocchia (corso prematrimoniale, certificato di battesimo, ecc.).</p>
          </div>

          <div className="guide-section rv" id="pubblicazioni">
            <div className="guide-section-label">La procedura</div>
            <h2>Le <em>pubblicazioni</em></h2>
            <p>Prendete appuntamento all&apos;Ufficio di Stato Civile del Comune di residenza (di uno dei due). Portate i documenti. L&apos;ufficiale verifica che non ci siano impedimenti e affigge le pubblicazioni all&apos;albo pretorio per <strong>8 giorni</strong>. Dopo altri <strong>3 giorni</strong> di attesa, siete liberi di sposarvi.</p>
            <p>Le pubblicazioni scadono dopo <strong>180 giorni</strong>: se non vi sposate entro quella data, dovete rifarle.</p>
            <div className="guide-callout">
              <strong>Inizia le pratiche almeno 2-3 mesi prima.</strong> Tra raccolta documenti, appuntamento in Comune e pubblicazioni, servono almeno 3-4 settimane. Se uno dei due &egrave; straniero, anche di pi&ugrave;.
            </div>
          </div>

          <div className="guide-section rv" id="costi">
            <div className="guide-section-label">I soldi</div>
            <h2>Quanto costa sposarsi <em>(la parte burocratica)</em></h2>
            <p>La cerimonia civile in Comune &egrave; <strong>gratuita</strong> per i residenti (nella maggior parte dei Comuni). Se scegli una sede distaccata (villa comunale, sala eventi), il costo varia da 100 a 1.000&euro; a seconda del Comune.</p>
            <p><strong>Marche da bollo:</strong> 2 marche da 16&euro; per le pubblicazioni = 32&euro;. Eventuali diritti di segreteria: 10-50&euro; a seconda del Comune.</p>
            <p><strong>Se serve il notaio:</strong> per la convenzione di separazione dei beni (se non la fate al momento del matrimonio) o per accordi patrimoniali: 500-1.000&euro;.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#F0E8FF,#e4d9f7)'}}>
              <svg viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#8B5CF6" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">COSTI BUROCRATICI MATRIMONIO</text>
                <rect x="16" y="50" width="308" height="28" rx="6" fill="#2D8A6E"/><text x="28" y="70" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Cerimonia in Comune: gratuita (per residenti)</text>
                <rect x="16" y="84" width="200" height="28" rx="6" fill="#E8724A"/><text x="28" y="104" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Marche da bollo: ~32&euro;</text>
                <rect x="16" y="118" width="160" height="28" rx="6" fill="#8A857C"/><text x="28" y="138" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Diritti segreteria: 10-50&euro;</text>
                <text x="16" y="170" fill="#8B5CF6" fontFamily="sans-serif" fontSize="10" fontWeight="600">Totale burocrazia: ~50-100&euro; (senza sede distaccata o notaio)</text>
              </svg>
            </div>
          </div>

          <div className="guide-section rv" id="beni">
            <div className="guide-section-label">La scelta importante</div>
            <h2>Comunione o <em>separazione dei beni?</em></h2>
            <p>Al momento del matrimonio, l&apos;ufficiale vi chiede: &ldquo;comunione o separazione dei beni?&rdquo;. Se non dite nulla, scatta automaticamente la <strong>comunione</strong>.</p>
            <p><strong>Comunione dei beni:</strong> tutto ci&ograve; che comprate dopo il matrimonio &egrave; di entrambi al 50%, anche se paga uno solo. Debiti compresi. I beni acquistati prima del matrimonio restano individuali.</p>
            <p><strong>Separazione dei beni:</strong> ognuno resta proprietario di ci&ograve; che compra con i propri soldi. Nessuna condivisione automatica.</p>
            <div className="guide-callout">
              <strong>Si pu&ograve; cambiare dopo.</strong> La scelta non &egrave; definitiva: potete passare da comunione a separazione (o viceversa) in qualsiasi momento, con atto notarile (500-1.000&euro;). Molte coppie scelgono la separazione per proteggere il patrimonio familiare da eventuali debiti di un coniuge.
            </div>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Marco e Sara</em></h2>
            <p>Marco (31 anni) e Sara (29 anni) vivono a Bologna, entrambi dipendenti. Vogliono sposarsi in Comune a maggio 2026. Ecco la timeline.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Timeline</strong>
                Febbraio: raccolta documenti<br />
                Marzo: appuntamento Comune + pubblicazioni<br />
                +8 gg affissione + 3 gg attesa<br />
                Maggio: cerimonia in Comune
              </div>
              <div className="guide-compare-item after">
                <strong>Costi</strong>
                Marche da bollo: 32&euro;<br />
                Diritti segreteria: 30&euro;<br />
                Cerimonia: gratuita (residenti)<br />
                Congedo: 15 gg retribuiti a testa<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Totale burocrazia: 62&euro;</strong>
              </div>
            </div>
            <p>Marco e Sara hanno scelto la separazione dei beni (Sara ha un&apos;attivit&agrave; freelance). Il congedo matrimoniale di 15 giorni &egrave; stato usato per il viaggio di nozze. Dopo il matrimonio, Sara ha aggiornato il <Link href="/codice-fiscale" style={{color:'var(--green)',fontWeight:600}}>codice fiscale</Link> e l&apos;<Link href="/isee" style={{color:'var(--green)',fontWeight:600}}>ISEE</Link>.</p>
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
              <Link href="/730" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">730 Precompilato</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><circle cx="240" cy="44" r="16" fill="#2D8A6E" opacity=".9"/><path d="M234 44l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h4>Faccio il 730</h4>
                <p>730 congiunto e detrazioni per coniuge a carico.</p>
              </Link>
              <Link href="/isee" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">ISEE 2026</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="86" width="140" height="5" rx="2.5" fill="#E8E0D4"/></svg>
                </div>
                <h4>ISEE</h4>
                <p>Dopo il matrimonio, l&apos;ISEE cambia: il nucleo familiare si allarga.</p>
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
