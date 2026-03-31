'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideCambioResidenzaContent({ faqItems }) {
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
            <h1>Come Fare il Cambio di Residenza nel 2026: Procedura Online e Documenti</h1>
            <p className="guide-hero-sub">Procedura online su ANPR, documenti necessari, tempi e cosa succede ad auto, patente e documenti dopo il trasferimento.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>8 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="55" width="60" height="70" rx="6" fill="#5B7EC5" opacity=".08" stroke="#5B7EC5" strokeWidth="1.5" opacity=".15"/><rect x="110" y="55" width="60" height="70" rx="6" fill="#2D8A6E" opacity=".08" stroke="#2D8A6E" strokeWidth="1.5" opacity=".15"/><path d="M90 90h20" stroke="#E8724A" strokeWidth="2.5" strokeLinecap="round"/><path d="M104 84l6 6-6 6" stroke="#E8724A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><text x="60" y="145" textAnchor="middle" fill="#5B7EC5" fontSize="9" fontWeight="600">Vecchio</text><text x="140" y="145" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="600">Nuovo</text><text x="100" y="170" textAnchor="middle" fill="#E8724A" fontSize="11" fontWeight="700">0&euro;</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Come funziona il cambio di residenza (gratuito, da casa, in 7 minuti)</li>
                <li>Procedura online su ANPR con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link> o <Link href="/cie" style={{color:'var(--green)',fontWeight:600}}>CIE</Link></li>
                <li>Cosa succede dopo: patente, auto, medico, utenze</li>
                <li>Attenzione ai 18 mesi per la prima casa</li>
                <li>Un esempio reale: Giulia, da Bologna a Milano in 7 minuti</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Come funziona</a>
              <a href="#online">Procedura online su ANPR</a>
              <a href="#documenti">Documenti necessari</a>
              <a href="#dopo">Cosa succede dopo</a>
              <a href="#esempio">Esempio: il caso di Giulia</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Come funziona il <em>cambio residenza</em></h2>
            <p>Il cambio di residenza &egrave; la <strong>dichiarazione ufficiale all&apos;anagrafe</strong> che sei andato ad abitare in un nuovo indirizzo. Va fatto entro 20 giorni dal trasferimento effettivo. &Egrave; <strong>completamente gratuito</strong> e puoi farlo online da casa in pochi minuti tramite ANPR.</p>
            <p>La residenza non &egrave; il domicilio (dove stai temporaneamente), ma dove abiti <strong>stabilmente</strong>. Ha effetti concreti su: agevolazioni prima casa, accesso ai servizi del Comune (asilo, mensa, trasporti), patente, libretto auto, <Link href="/isee" style={{color:'var(--green)',fontWeight:600}}>ISEE</Link>.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>Residenza</strong> &mdash; il luogo dove abiti stabilmente. Ha valore legale e amministrativo.</p>
            <p><strong>ANPR</strong> &mdash; Anagrafe Nazionale della Popolazione Residente. Il portale digitale dove si fa il cambio online.</p>
            <p><strong>Decorrenza</strong> &mdash; la residenza decorre dalla data in cui presenti la dichiarazione, non dalla conferma del Comune.</p>
            <div className="guide-callout warn">
              <strong>Dichiarare il falso sulla residenza &egrave; reato</strong> (falso in atto pubblico). Il Comune manda i vigili a verificare. Se la verifica fallisce, la pratica viene annullata.
            </div>
          </div>

          <div className="guide-section rv" id="online">
            <div className="guide-section-label">Procedura</div>
            <h2>Procedura online <em>su ANPR</em></h2>

            <h3>Passo 1: Accedi ad ANPR</h3>
            <p>Vai su <strong>anagrafenazionale.interno.it</strong> e accedi con SPID o CIE. Cerca &ldquo;Cambio di residenza&rdquo; o &ldquo;Cambio di indirizzo&rdquo;.</p>

            <h3>Passo 2: Compila la dichiarazione</h3>
            <p>Inserisci il nuovo indirizzo completo, il motivo e la data del trasferimento. Puoi dichiarare anche per i familiari conviventi.</p>

            <h3>Passo 3: Allega i documenti</h3>
            <p>Documento di identit&agrave; e codice fiscale (per tutti quelli che si trasferiscono). Se hai un contratto di affitto o atto di propriet&agrave;, allegalo: velocizza la verifica.</p>

            <h3>Passo 4: Invia e attendi la conferma</h3>
            <p>Il Comune ha <strong>2 giorni lavorativi</strong> per confermare. I vigili passano entro 45 giorni a verificare che abiti davvero l&igrave;.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#ECF0FA,#dce4f5)'}}>
              <svg viewBox="0 0 340 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#5B7EC5" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">CAMBIO RESIDENZA ONLINE</text>
                <rect x="16" y="50" width="308" height="28" rx="6" fill="#2D8A6E"/><text x="28" y="70" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Costo: 0&euro; (completamente gratuito)</text>
                <rect x="16" y="84" width="240" height="28" rx="6" fill="#5B7EC5"/><text x="28" y="104" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Tempo: ~7 minuti da casa</text>
                <rect x="16" y="118" width="200" height="28" rx="6" fill="#E8724A"/><text x="28" y="138" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Conferma: entro 2 giorni lavorativi</text>
              </svg>
            </div>

            <div className="guide-callout">
              <strong>Puoi farlo anche allo sportello.</strong> Se non hai SPID o CIE, vai all&apos;Ufficio Anagrafe del nuovo Comune con documento e codice fiscale. Nessun appuntamento, nessun costo.
            </div>
          </div>

          <div className="guide-section rv" id="documenti">
            <div className="guide-section-label">Cosa serve</div>
            <h2>Documenti <em>necessari</em></h2>
            <p><strong>Documento di identit&agrave; valido</strong> (CIE, carta, passaporto, patente) e <strong><Link href="/codice-fiscale" style={{color:'var(--green)',fontWeight:600}}>codice fiscale</Link></strong> di tutti i componenti che si trasferiscono.</p>
            <p><strong>Contratto di affitto registrato</strong> o <strong>atto di propriet&agrave;</strong>: non obbligatorio ma consigliato. Velocizza la verifica dei vigili.</p>
            <p>Se stai in casa di un familiare/amico: una dichiarazione scritta del proprietario che conferma la tua presenza.</p>
            <p><strong>Cittadini extracomunitari:</strong> anche copia del permesso di soggiorno valido.</p>
          </div>

          <div className="guide-section rv" id="dopo">
            <div className="guide-section-label">Cosa cambia</div>
            <h2>Cosa succede <em>dopo il cambio</em></h2>

            <h3>Si aggiorna automaticamente</h3>
            <p><strong>Patente:</strong> si aggiorna negli archivi della Motorizzazione. Il documento fisico resta valido. Puoi scaricare un&apos;attestazione dal Portale dell&apos;Automobilista.</p>
            <p><strong>Libretto auto:</strong> aggiornamento automatico negli archivi digitali ANV e PRA. Non serve il vecchio tagliandino adesivo.</p>
            <p><strong>Tessera sanitaria:</strong> si aggiorna automaticamente.</p>

            <h3>Devi aggiornare tu</h3>
            <p><strong>Medico di base:</strong> iscriviti alla nuova ASL entro 30 giorni e scegli un nuovo medico.</p>
            <p><strong>Banche, assicurazioni, datore di lavoro, utenze:</strong> comunica tu il nuovo indirizzo.</p>

            <div className="guide-callout warn">
              <strong>Prima casa: attenzione ai tempi.</strong> Se hai comprato casa con le agevolazioni prima casa, devi trasferire la residenza entro <strong>18 mesi</strong> dall&apos;acquisto. Se non lo fai, perdi le agevolazioni e devi restituire le imposte con sanzioni. <Link href="/compro-casa" style={{color:'var(--green)',fontWeight:600}}>Guida acquisto casa</Link>
            </div>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Giulia</em></h2>
            <p>Giulia ha 27 anni, si &egrave; trasferita da Bologna a Milano per lavoro. Affitta un bilocale con contratto regolare. Vuole accedere ai servizi del Comune di Milano e non perdere l&apos;agevolazione prima casa.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Procedura</strong>
                Accesso ANPR con SPID: 2 minuti<br />
                Compilazione + allegati: 5 minuti<br />
                Costo totale: 0&euro;
              </div>
              <div className="guide-compare-item after">
                <strong>Risultato</strong>
                Conferma Comune: 2 giorni lavorativi<br />
                Vigili: entro 45 giorni<br />
                Residenza decorre da: data della domanda<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>7 minuti, 0&euro;</strong>
              </div>
            </div>
            <p>Giulia ha fatto tutto dal divano, un luned&igrave; sera. Patente e libretto si sono aggiornati da soli. Ha dovuto solo scegliere un nuovo medico di base alla ASL di Milano.</p>
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
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">SPID</text><rect x="56" y="78" width="208" height="28" rx="6" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1"/><rect x="56" y="150" width="208" height="24" rx="6" fill="#5B7EC5"/></svg>
                </div>
                <h4>SPID</h4>
                <p>Serve per fare il cambio di residenza online su ANPR.</p>
              </Link>
              <Link href="/compro-casa" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Compro Casa</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/><path d="M200 90l30-20 30 20v30h-60z" fill="#2D8A6E" opacity=".06"/></svg>
                </div>
                <h4>Compro Casa</h4>
                <p>Hai 18 mesi per trasferire la residenza dopo l&apos;acquisto.</p>
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
