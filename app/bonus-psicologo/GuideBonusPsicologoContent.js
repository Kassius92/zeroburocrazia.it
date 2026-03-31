'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideBonusPsicologoContent({ faqItems }) {
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
            <h1>Bonus Psicologo 2026: Importi, Requisiti e Come Fare Domanda</h1>
            <p className="guide-hero-sub">Contributo fino a 1.500&euro; per sedute di psicoterapia. Chi pu&ograve; richiederlo, gli importi per ISEE e come fare domanda all&apos;INPS.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>8 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="85" r="30" fill="#8B5CF6" opacity=".08" stroke="#8B5CF6" strokeWidth="1.5" opacity=".15"/><path d="M90 80c0-6 4-10 10-10s10 4 10 10" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" opacity=".3"/><circle cx="92" cy="85" r="2" fill="#8B5CF6" opacity=".3"/><circle cx="108" cy="85" r="2" fill="#8B5CF6" opacity=".3"/><path d="M93 95c3 3 11 3 14 0" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" opacity=".3"/><rect x="55" y="135" width="90" height="28" rx="8" fill="#2D8A6E" opacity=".1"/><text x="100" y="153" textAnchor="middle" fill="#2D8A6E" fontSize="10" fontWeight="600">Max 1.500&euro;</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; il bonus psicologo e come funziona il voucher INPS</li>
                <li>Importi per ISEE: da 500&euro; a 1.500&euro; (max 50&euro; per seduta)</li>
                <li>Non serve una diagnosi: basta dichiarare un disagio</li>
                <li>Come fare domanda quando aprono le iscrizioni</li>
                <li>Un esempio reale: Luca, 20 sedute coperte dal bonus</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; il bonus psicologo</a>
              <a href="#importi">Importi per fascia ISEE</a>
              <a href="#requisiti">Requisiti</a>
              <a href="#domanda">Come fare domanda</a>
              <a href="#esempio">Esempio: il caso di Luca</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; il <em>bonus psicologo</em></h2>
            <p>Il bonus psicologo &egrave; un contributo statale per sostenere le spese di psicoterapia. Viene erogato dall&apos;INPS sotto forma di <strong>voucher</strong> da usare con professionisti che hanno aderito all&apos;iniziativa. Il contributo &egrave; di massimo <strong>50&euro; per seduta</strong>, fino al tetto massimo per la tua fascia ISEE.</p>
            <p>Non &egrave; un trasferimento di denaro: ricevi un codice da fornire allo psicologo, che poi lo riscuote direttamente dall&apos;INPS. Se la tariffa &egrave; superiore a 50&euro;, la differenza &egrave; a tuo carico (e la puoi detrarre nel <Link href="/730" style={{color:'var(--green)',fontWeight:600}}>730</Link> come <Link href="/spese-mediche" style={{color:'var(--green)',fontWeight:600}}>spesa medica</Link>).</p>
            <p>La domanda si presenta a finestre annuali. Per il 2026 si attende il decreto attuativo. <strong>Monitora inps.it</strong> e il sito del Consiglio Nazionale Ordine Psicologi (cnop.it).</p>
            <div className="guide-callout">
              <strong>Non serve una diagnosi.</strong> Non devi avere una diagnosi psichiatrica. Basta dichiarare un disagio psicologico (ansia, stress, depressione, fragilit&agrave; emotiva) e avere un ISEE valido.
            </div>
          </div>

          <div className="guide-section rv" id="importi">
            <div className="guide-section-label">Quanto spetta</div>
            <h2>Importi per <em>fascia ISEE</em></h2>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#F0E8FF,#e4d9f7)'}}>
              <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#8B5CF6" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">IMPORTI BONUS PSICOLOGO</text>
                <rect x="16" y="50" width="308" height="32" rx="8" fill="#8B5CF6"/>
                <text x="28" y="72" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">ISEE &le; 15.000&euro;: fino a 1.500&euro; (~30 sedute)</text>
                <rect x="16" y="90" width="240" height="32" rx="8" fill="#2D8A6E"/>
                <text x="28" y="112" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">ISEE 15-30k: fino a 1.000&euro; (~20 sedute)</text>
                <rect x="16" y="130" width="180" height="32" rx="8" fill="#E8724A"/>
                <text x="28" y="152" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">ISEE 30-50k: fino a 500&euro; (~10 sedute)</text>
                <rect x="16" y="170" width="120" height="32" rx="8" fill="#8A857C"/>
                <text x="28" y="192" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">ISEE &gt; 50k: escluso</text>
              </svg>
            </div>

            <p>Hai <strong>270 giorni</strong> dall&apos;ammissione per usare tutto l&apos;importo. Devi fare almeno una seduta entro i primi <strong>60 giorni</strong>, altrimenti il bonus decade.</p>
          </div>

          <div className="guide-section rv" id="requisiti">
            <div className="guide-section-label">Chi ne ha diritto</div>
            <h2><em>Requisiti</em></h2>
            <p>Possono fare domanda: i <strong>maggiorenni</strong> residenti in Italia con ISEE non superiore a 50.000&euro;. I minori tramite il genitore o tutore legale. Non &egrave; richiesta una diagnosi: basta l&apos;autocertificazione di un disagio psicologico.</p>
            <p>Lo psicologo deve essere <strong>iscritto all&apos;Albo</strong> e aver aderito all&apos;iniziativa INPS. L&apos;elenco degli aderenti &egrave; su inps.it e cnop.it. Vale anche per sedute online.</p>
            <p>Il bonus &egrave; compatibile con l&apos;assegno unico e altri sussidi, ma <strong>non si cumula</strong> con le detrazioni IRPEF per le stesse sedute (puoi detrarre solo la parte non coperta).</p>
          </div>

          <div className="guide-section rv" id="domanda">
            <div className="guide-section-label">Procedura</div>
            <h2>Come fare <em>domanda</em></h2>

            <h3>Passo 1: Monitora l&apos;apertura delle iscrizioni</h3>
            <p>L&apos;INPS pubblica il bando annuale (tipicamente in autunno). La finestra dura circa 2 mesi. C&apos;&egrave; una graduatoria per ISEE crescente: prima fai domanda, meglio &egrave;.</p>

            <h3>Passo 2: Fai l&apos;<Link href="/isee" style={{color:'var(--green)',fontWeight:600}}>ISEE</Link></h3>
            <p>Serve per determinare l&apos;importo. Senza ISEE non rientri nelle fasce agevolate.</p>

            <h3>Passo 3: Presenta la domanda su INPS.it</h3>
            <p>Con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link> o CIE. Cerca &ldquo;Bonus psicologo&rdquo;. Compila dichiarando il disagio psicologico e il tuo ISEE.</p>

            <h3>Passo 4: Scegli lo psicologo aderente</h3>
            <p>Una volta ammesso, ricevi un codice univoco. Cerca uno psicologo aderente nel tuo Comune e comunicagli il codice.</p>

            <div className="guide-callout warn">
              <strong>Usa almeno una seduta entro 60 giorni.</strong> Se sei ammesso ma non prenoti nulla entro 60 giorni, perdi il bonus e vieni rimpiazzato dalla lista d&apos;attesa.
            </div>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Luca</em></h2>
            <p>Luca ha 29 anni, lavora come precario e sta attraversando un periodo di forte ansia. ISEE 18.000&euro;. Fa domanda appena aprono le iscrizioni e viene ammesso con 1.000&euro;.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Situazione</strong>
                ISEE: 18.000&euro; (fascia 15-30k)<br />
                Contributo assegnato: 1.000&euro;<br />
                Tariffa psicologo: 70&euro;/seduta
              </div>
              <div className="guide-compare-item after">
                <strong>Risultato</strong>
                INPS copre: 50&euro;/seduta<br />
                A carico di Luca: 20&euro;/seduta<br />
                (detraibili al 19% nel 730)<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>20 sedute coperte</strong>
              </div>
            </div>
            <p>Luca paga solo 20&euro; a seduta invece di 70&euro;. In un anno risparmia <strong>1.000&euro;</strong>. I 20&euro; a seduta che paga di tasca li recupera parzialmente nel <Link href="/730" style={{color:'var(--green)',fontWeight:600}}>730</Link>.</p>
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
              <Link href="/spese-mediche" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Spese Mediche</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/><path d="M56 110v20M46 120h20" stroke="#2D8A6E" strokeWidth="3" strokeLinecap="round" opacity=".3"/></svg>
                </div>
                <h4>Spese Mediche</h4>
                <p>La quota non coperta dal bonus &egrave; detraibile al 19% nel 730.</p>
              </Link>
              <Link href="/isee" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">ISEE 2026</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><circle cx="240" cy="44" r="16" fill="#2D8A6E" opacity=".9"/><path d="M234 44l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h4>Faccio l&apos;ISEE</h4>
                <p>L&apos;ISEE determina l&apos;importo: fino a 1.500&euro; con ISEE basso.</p>
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
