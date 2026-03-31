'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideFiglioContent({ faqItems }) {
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
            <h1>Come Prepararsi a un Figlio nel 2026: Bonus, Congedo e Documenti</h1>
            <p className="guide-hero-sub">Tutto quello che ti spetta quando diventi genitore: congedi maternit&agrave; e paternit&agrave;, assegno unico, bonus nuovi nati, bonus nido e documenti da fare.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>12 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="80" cy="85" r="22" fill="#8B5CF6" opacity=".1"/><circle cx="120" cy="85" r="22" fill="#8B5CF6" opacity=".1"/><circle cx="100" cy="125" r="15" fill="#E8724A" opacity=".12"/><rect x="55" y="155" width="90" height="20" rx="6" fill="#2D8A6E" opacity=".1"/><text x="100" y="169" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="600">Bonus 2026</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Congedo maternit&agrave; (5 mesi, 80%) e paternit&agrave; (10 giorni, 100%)</li>
                <li>Congedo parentale: 3 mesi all&apos;80% per ciascun genitore nel 2026</li>
                <li>Tutti i bonus: assegno unico, nuovi nati 1.000&euro;, bonus nido</li>
                <li>I documenti da fare dopo la nascita</li>
                <li>Un esempio reale: Chiara e Marco, ~12.340&euro; il primo anno</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#quadro">Il quadro completo</a>
              <a href="#congedi">I congedi</a>
              <a href="#bonus">Tutti i bonus</a>
              <a href="#documenti">Documenti da fare</a>
              <a href="#esempio">Esempio: Chiara e Marco</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="quadro">
            <div className="guide-section-label">Le basi</div>
            <h2>Il quadro completo: <em>cosa ti spetta</em></h2>
            <p>Quando aspetti un figlio in Italia, hai diritto a una serie di tutele e aiuti economici. Il problema &egrave; che nessuno te li spiega tutti insieme: sono sparsi tra INPS, Comune, datore di lavoro e Agenzia delle Entrate. Questa guida li mette in fila.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>Congedo di maternit&agrave;</strong> &mdash; 5 mesi obbligatori, pagati all&apos;80% dall&apos;INPS.</p>
            <p><strong>Congedo di paternit&agrave;</strong> &mdash; 10 giorni obbligatori, pagati al 100%. Il datore non pu&ograve; rifiutarli.</p>
            <p><strong>Congedo parentale</strong> &mdash; periodo facoltativo aggiuntivo per entrambi i genitori (fino a 10-11 mesi totali).</p>
            <p><strong>Assegno unico</strong> &mdash; contributo mensile per ogni figlio a carico fino a 21 anni. Dipende dall&apos;<Link href="/isee" style={{color:'var(--green)',fontWeight:600}}>ISEE</Link>.</p>
            <div className="guide-callout">
              <strong>Fai l&apos;ISEE prima possibile.</strong> La maggior parte dei bonus per i figli (assegno unico, bonus nido, bonus nuovi nati) dipende dall&apos;ISEE. Pi&ugrave; &egrave; basso, pi&ugrave; ricevi. Fallo anche durante la gravidanza.
            </div>
          </div>

          <div className="guide-section rv" id="congedi">
            <div className="guide-section-label">Congedi</div>
            <h2>Quanto puoi <em>stare a casa</em></h2>

            <h3>Congedo di maternit&agrave; (obbligatorio)</h3>
            <p><strong>5 mesi totali</strong>, pagati all&apos;80% dello stipendio dall&apos;INPS. Formula standard: 2 mesi prima del parto e 3 dopo. Puoi scegliere 1+4 oppure, con certificato medico, 0+5 (lavori fino all&apos;ultimo giorno). Spetta a tutte le lavoratrici dipendenti. Le autonome hanno diritto alle stesse tutele con modalit&agrave; diverse.</p>

            <h3>Congedo di paternit&agrave; (obbligatorio)</h3>
            <p>Il pap&agrave; ha <strong>10 giorni retribuiti al 100%</strong>, da usare entro 5 mesi dalla nascita. Sono obbligatori: il datore non pu&ograve; rifiutarli. Si possono prendere anche non consecutivi. Spetta anche in caso di adozione e affido.</p>

            <h3>Congedo parentale (facoltativo)</h3>
            <p>Dopo il congedo obbligatorio, entrambi i genitori possono prendere un periodo aggiuntivo fino ai 12 anni del bambino. Nel 2026: <strong>3 mesi all&apos;80%</strong> per ciascun genitore (non trasferibili), pi&ugrave; altri mesi al 30%. In totale la coppia pu&ograve; avere fino a 10 mesi, di cui 6 totali all&apos;80%.</p>

            <div className="guide-callout warn">
              <strong>I 3 mesi all&apos;80% si perdono se non si usano.</strong> Spettano individualmente a ciascun genitore e non sono trasferibili. Se uno dei due non li usa, si perdono. Usateli il prima possibile.
            </div>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#F0E8FF,#e4d9f7)'}}>
              <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#8B5CF6" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">CONGEDI 2026</text>
                <rect x="16" y="50" width="308" height="32" rx="8" fill="#8B5CF6"/>
                <text x="28" y="72" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Maternit&agrave;: 5 mesi obbligatori, 80% stipendio</text>
                <rect x="16" y="90" width="240" height="32" rx="8" fill="#2D8A6E"/>
                <text x="28" y="112" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Paternit&agrave;: 10 giorni obbligatori, 100%</text>
                <rect x="16" y="130" width="200" height="32" rx="8" fill="#E8724A"/>
                <text x="28" y="152" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Parentale: 3 mesi all&apos;80% a testa</text>
                <text x="16" y="190" fill="#8B5CF6" fontFamily="sans-serif" fontSize="11" fontWeight="600">Totale coppia: fino a ~12 mesi retribuiti al 30-100%</text>
              </svg>
            </div>
          </div>

          <div className="guide-section rv" id="bonus">
            <div className="guide-section-label">Aiuti economici</div>
            <h2>Tutti i bonus <em>per chi diventa genitore</em></h2>

            <h3>1. Assegno unico universale</h3>
            <p>Contributo mensile per ogni figlio fino a 21 anni. Con ISEE fino a 17.468&euro;: circa <strong>200&euro;/mese per figlio</strong>. Senza ISEE: minimo 58&euro;/mese. Si chiede all&apos;INPS entro febbraio per averlo da marzo. <Link href="/assegno-unico" style={{color:'var(--green)',fontWeight:600}}>Guida completa</Link></p>

            <h3>2. Bonus nuovi nati (1.000&euro;)</h3>
            <p>Una tantum di <strong>1.000&euro;</strong> per ogni bambino nato o adottato dal 2025. Domanda INPS entro 120 giorni dalla nascita con SPID. Requisiti: ISEE inferiore a 40.000&euro; e residenza in Italia.</p>

            <h3>3. Bonus asilo nido</h3>
            <p>Rimborso rette nido fino a <strong>3.000&euro;/anno</strong> (ISEE fino a 25.000&euro;) o <strong>2.500&euro;/anno</strong> (ISEE fino a 40.000&euro;). Si chiede all&apos;INPS ogni anno inviando le ricevute. Bambini fino a 36 mesi.</p>

            <h3>4. Assegno di maternit&agrave; dei Comuni</h3>
            <p>Bonus aggiuntivo erogato dal Comune (in media 400-600&euro;). Si chiede al Comune entro 6 mesi dalla nascita. Requisiti variabili.</p>
          </div>

          <div className="guide-section rv" id="documenti">
            <div className="guide-section-label">Pratiche</div>
            <h2>Documenti <em>da fare</em></h2>
            <p><strong>Dichiarazione di nascita</strong> &mdash; in ospedale o al Comune entro 10 giorni. Il codice fiscale viene assegnato automaticamente.</p>
            <p><strong>Scelta del pediatra</strong> &mdash; entro 15 giorni, sul portale della tua ASL (con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link>).</p>
            <p><strong>Assegno unico INPS</strong> &mdash; domanda online su inps.it con SPID.</p>
            <p><strong>Bonus nuovi nati</strong> &mdash; domanda entro 120 giorni dalla nascita. Serve ISEE gi&agrave; disponibile.</p>
            <p><strong>Congedo maternit&agrave;/paternit&agrave;</strong> &mdash; la mamma comunica al datore almeno 2 mesi prima. Il pap&agrave; con almeno 5 giorni di preavviso.</p>
            <p><strong>ISEE</strong> &mdash; fallo subito se non ce l&apos;hai: serve per quasi tutti i bonus. Gratis al CAF.</p>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Chiara e Marco</em></h2>
            <p>Chiara e Marco aspettano il primo figlio per maggio 2026. Chiara &egrave; dipendente (RAL 26.000&euro;), Marco &egrave; dipendente (RAL 32.000&euro;). ISEE familiare: 28.000&euro;.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Congedi</strong>
                Maternit&agrave; Chiara (5 mesi, 80%): ~8.667&euro;<br />
                Paternit&agrave; Marco (10 giorni, 100%): ~1.231&euro;<br />
                Parentale Chiara (3 mesi, 80%): ~5.200&euro;
              </div>
              <div className="guide-compare-item after">
                <strong>Bonus</strong>
                Bonus nuovi nati (ISEE sotto 40k): 1.000&euro;<br />
                Assegno unico (ISEE 28k): ~120&euro;/mese<br />
                Assegno Comune: ~500&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Primo anno: ~18.000&euro;</strong>
              </div>
            </div>
            <p>Chiara e Marco non hanno speso un centesimo per ottenere tutto questo. Hanno usato il CAF (gratis) per l&apos;ISEE e il <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link> (gratis) per le domande INPS.</p>
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
              <Link href="/assegno-unico" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#F0E8FF,#e4d9f7)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Assegno Unico</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="92" width="140" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="120" width="120" height="28" rx="6" fill="#8B5CF6" opacity=".12"/><text x="116" y="138" textAnchor="middle" fill="#8B5CF6" fontFamily="sans-serif" fontSize="10" fontWeight="600">~200&euro;/mese per figlio</text></svg>
                </div>
                <h4>Assegno Unico</h4>
                <p>Importi, domanda e quando arriva.</p>
              </Link>
              <Link href="/isee" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">ISEE 2026</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="86" width="140" height="5" rx="2.5" fill="#E8E0D4"/><circle cx="240" cy="44" r="16" fill="#2D8A6E" opacity=".9"/><path d="M234 44l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h4>Faccio l&apos;ISEE</h4>
                <p>Serve per quasi tutti i bonus. Come ottenerlo gratis.</p>
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
