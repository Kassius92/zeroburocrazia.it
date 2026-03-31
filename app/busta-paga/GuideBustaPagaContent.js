'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideBustaPagaContent({ faqItems }) {
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
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Lavoro</span></div>
            <div className="guide-hero-top"><span className="guide-tag lavoro">Lavoro</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Come Leggere la Busta Paga nel 2026: Guida Completa</h1>
            <p className="guide-hero-sub">Tutte le voci spiegate in modo semplice, dal lordo al netto, trattenute, contributi, detrazioni e novit&agrave; 2026.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>12 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="120" height="140" rx="6" fill="#fff" stroke="#E0DBD2" strokeWidth="1.5"/><rect x="55" y="50" width="90" height="6" rx="3" fill="#2D8A6E" opacity=".4"/><rect x="55" y="64" width="70" height="6" rx="3" fill="#8A857C" opacity=".3"/><rect x="55" y="78" width="80" height="6" rx="3" fill="#8A857C" opacity=".3"/><line x1="55" y1="95" x2="145" y2="95" stroke="#E0DBD2" strokeWidth="1"/><rect x="55" y="105" width="60" height="6" rx="3" fill="#E8724A" opacity=".3"/><rect x="55" y="140" width="90" height="10" rx="4" fill="#2D8A6E" opacity=".15"/></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Come &egrave; strutturata la busta paga: le 3 parti</li>
                <li>La formula dal lordo al netto, passo per passo</li>
                <li>Aliquote IRPEF 2026 (novit&agrave;: 2&deg; scaglione al 33%)</li>
                <li>Le voci da controllare ogni mese</li>
                <li>Un esempio reale: Laura, da 2.000&euro; lordi a 1.551&euro; netti</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; la busta paga</a>
              <a href="#parti">Le 3 parti</a>
              <a href="#lordo-netto">Dal lordo al netto</a>
              <a href="#novita">Novit&agrave; 2026</a>
              <a href="#voci">Le voci da controllare</a>
              <a href="#esempio">Esempio: il caso di Laura</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; la <em>busta paga</em></h2>
            <p>La busta paga (o <strong>cedolino</strong>) &egrave; il documento che il tuo datore di lavoro ti d&agrave; ogni mese insieme allo stipendio. Spiega, voce per voce, come si arriva dal tuo stipendio <strong>lordo</strong> (quello scritto nel contratto) al <strong>netto</strong> (quello che trovi sul conto).</p>
            <p>La logica &egrave; semplice: <strong>Lordo &minus; Contributi INPS &minus; IRPEF &minus; Addizionali + Detrazioni = Netto</strong>. &Egrave; un documento obbligatorio per legge: il datore deve consegnartelo ogni mese. Conservalo: ti serve per il <Link href="/730" style={{color:'var(--green)',fontWeight:600}}>730</Link>, per chiedere un mutuo, per l&apos;<Link href="/isee" style={{color:'var(--green)',fontWeight:600}}>ISEE</Link> e per verificare che tutto sia corretto.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>RAL</strong> &mdash; Retribuzione Annua Lorda. Il tuo stipendio annuo comprensivo di tredicesima/quattordicesima.</p>
            <p><strong>IRPEF</strong> &mdash; l&apos;imposta sui redditi, progressiva. Nel 2026: 23% fino a 28.000&euro;, 33% fino a 50.000&euro;, 43% oltre.</p>
            <p><strong>Contributi INPS</strong> &mdash; circa il 9,19% del lordo, per la pensione e le tutele.</p>
            <p><strong>Imponibile fiscale</strong> &mdash; il lordo meno i contributi INPS. Base su cui si calcola l&apos;IRPEF.</p>
            <p><strong>Detrazioni</strong> &mdash; sconti sull&apos;IRPEF per lavoro dipendente e familiari a carico.</p>
            <p><strong>TFR</strong> &mdash; quota accantonata ogni mese che ricevi quando lasci il lavoro. <Link href="/tfr" style={{color:'var(--green)',fontWeight:600}}>Guida al TFR</Link></p>
          </div>

          <div className="guide-section rv" id="parti">
            <div className="guide-section-label">Struttura</div>
            <h2>Le <em>3 parti</em> della busta paga</h2>
            <h3>1. Intestazione</h3>
            <p>In alto: dati dell&apos;azienda (nome, P.IVA, posizione INPS/INAIL) e i tuoi dati (nome, codice fiscale, data assunzione, qualifica, livello, CCNL). Controlla che siano corretti: un livello sbagliato significa uno stipendio sbagliato.</p>
            <h3>2. Competenze (il lordo)</h3>
            <p>Tutte le voci che formano il lordo: paga base, contingenza, scatti di anzianit&agrave;, superminimo, straordinari, indennit&agrave;, premi, ferie godute, malattia, permessi. La somma &egrave; il totale lordo del mese.</p>
            <h3>3. Trattenute e netto</h3>
            <p>Qui si passa dal lordo al netto: contributi INPS (~9,19%), IRPEF, addizionali regionali e comunali, eventuali detrazioni e il trattamento integrativo. In fondo: il netto in busta e i dati riepilogativi (TFR, ferie residue).</p>
          </div>

          <div className="guide-section rv" id="lordo-netto">
            <div className="guide-section-label">Formula</div>
            <h2>Dal lordo <em>al netto</em></h2>
            <p>Esempio concreto con 2.000&euro; lordi: prima si sottraggono i <strong>contributi INPS</strong> (~9,19%), circa 184&euro;. Si ottiene l&apos;imponibile fiscale di 1.816&euro;. Su questo si calcola l&apos;<strong>IRPEF lorda</strong> per scaglioni, circa 365&euro;. Poi si aggiungono le <strong>detrazioni</strong> per lavoro dipendente (~130&euro;) e si tolgono le <strong>addizionali</strong> (~30&euro;). Risultato: <strong>netto ~1.551&euro;</strong>.</p>
            <p>Le trattenute totali sono circa 449&euro;, pari al 22% del lordo. Chi guadagna di pi&ugrave; paga una percentuale maggiore, perch&eacute; l&apos;IRPEF &egrave; progressiva.</p>
            <div className="guide-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
              <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">IRPEF 2026 &mdash; 3 SCAGLIONI</text>
                <rect x="16" y="50" width="308" height="36" rx="8" fill="#2D8A6E"/>
                <text x="28" y="74" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Fino a 28.000&euro;: 23%</text>
                <rect x="16" y="94" width="240" height="36" rx="8" fill="#E8724A"/>
                <text x="28" y="118" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">28.001 &ndash; 50.000&euro;: 33% (era 35%!)</text>
                <rect x="16" y="138" width="170" height="36" rx="8" fill="#5B7EC5"/>
                <text x="28" y="162" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Oltre 50.000&euro;: 43%</text>
                <text x="16" y="200" fill="#2D8A6E" fontFamily="sans-serif" fontSize="11" fontWeight="600">Novit&agrave; 2026: il 2&deg; scaglione scende dal 35% al 33% = ~20-40&euro;/mese in pi&ugrave;</text>
              </svg>
            </div>
          </div>

          <div className="guide-section rv" id="novita">
            <div className="guide-section-label">Aggiornamenti</div>
            <h2>Novit&agrave; <em>2026</em></h2>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong>2&deg; scaglione IRPEF: dal 35% al 33%.</strong> Per i redditi tra 28.001&euro; e 50.000&euro;, l&apos;aliquota scende di 2 punti. Impatto: circa <strong>20-40&euro; in pi&ugrave; al mese</strong>.
            </div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong>Taglio del cuneo fiscale strutturale.</strong> Per redditi fino a ~35.000&euro;, i contributi INPS a carico del lavoratore sono ridotti, aumentando il netto.
            </div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong>Bonus fino a 960&euro; per redditi sotto 20.000&euro;.</strong> Importo variabile escluso dalla base imponibile. Lo troverai come voce specifica nel cedolino.
            </div>
          </div>

          <div className="guide-section rv" id="voci">
            <div className="guide-section-label">Cosa controllare</div>
            <h2>Le voci da <em>controllare</em> ogni mese</h2>
            <p><strong>Paga base + contingenza</strong> &mdash; il minimo previsto dal tuo CCNL per il tuo livello. Se il tuo stipendio &egrave; sotto questo importo, c&apos;&egrave; un problema.</p>
            <p><strong>Superminimo</strong> &mdash; la parte concordata individualmente. Pu&ograve; essere &ldquo;assorbibile&rdquo; (sparisce con gli aumenti CCNL) o &ldquo;non assorbibile&rdquo; (resta fisso).</p>
            <p><strong>Straordinari</strong> &mdash; ore oltre l&apos;orario contrattuale. Maggiorate dal +15% al +50% a seconda del CCNL.</p>
            <p><strong>Ferie e ROL</strong> &mdash; ferie maturate, godute e residue. I ROL sono i permessi retribuiti. Controlla ogni mese.</p>
            <p><strong>Trattamento integrativo</strong> &mdash; l&apos;ex &ldquo;bonus Renzi&rdquo;. Fino a 100&euro;/mese per redditi sotto 15.000&euro;.</p>
            <p><strong>TFR maturato</strong> &mdash; circa 1/13,5 del lordo. Si accumula fino alla fine del rapporto.</p>
            <div className="guide-callout warn">
              <strong>Conserva tutte le buste paga.</strong> Tieni una copia digitale per almeno 5 anni. Servono per il 730, per la CU e in caso di contenzioso col datore.
            </div>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Laura</em></h2>
            <p>Laura lavora come impiegata con CCNL Commercio, livello 4. RAL 28.000&euro;, 14 mensilit&agrave;. Single, nessun figlio a carico.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Lordo</strong>
                Paga base + contingenza + superminimo<br />
                Totale lordo mensile: 2.000&euro;<br />
                TFR maturato nel mese: ~148&euro;
              </div>
              <div className="guide-compare-item after">
                <strong>Trattenute e netto</strong>
                Contributi INPS (9,19%): &minus;184&euro;<br />
                IRPEF &minus; detrazioni + addizionali: &minus;265&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Netto in busta: ~1.551&euro;</strong>
              </div>
            </div>
            <p>Su 2.000&euro; lordi, le trattenute sono circa 449&euro; (22%). Annuo netto: circa 21.700&euro;.</p>
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
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">730 Precompilato</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="86" width="140" height="5" rx="2.5" fill="#E8E0D4"/><circle cx="240" cy="44" r="16" fill="#2D8A6E" opacity=".9"/><path d="M234 44l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h4>Faccio il 730</h4>
                <p>Recupera le detrazioni che non vedi in busta paga.</p>
              </Link>
              <Link href="/tfr" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">TFR</text><circle cx="100" cy="110" r="30" fill="#2D8A6E" opacity=".08"/><text x="100" y="116" textAnchor="middle" fill="#2D8A6E" fontFamily="sans-serif" fontSize="16" fontWeight="700">&euro;</text></svg>
                </div>
                <h4>TFR &mdash; Liquidazione</h4>
                <p>Quanto hai accantonato e come funziona.</p>
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
