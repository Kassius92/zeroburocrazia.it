'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideAssegnoInclusioneContent({ faqItems }) {
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
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Fisco</span></div>
            <div className="guide-hero-top"><span className="guide-tag fisco">Fisco</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Assegno di Inclusione 2026: Requisiti, Importi e Come Fare Domanda</h1>
            <p className="guide-hero-sub">L&apos;ADI ha sostituito il Reddito di Cittadinanza. Chi pu&ograve; richiederlo, quanto spetta, come fare domanda e gli obblighi da rispettare.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>10 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="55" width="120" height="90" rx="10" fill="#E8724A" opacity=".06" stroke="#E8724A" strokeWidth="1.5" opacity=".15"/><rect x="60" y="75" width="80" height="12" rx="6" fill="#2D8A6E" opacity=".15"/><rect x="60" y="95" width="60" height="12" rx="6" fill="#E8724A" opacity=".12"/><rect x="60" y="115" width="70" height="12" rx="6" fill="#5B7EC5" opacity=".12"/><text x="100" y="165" textAnchor="middle" fill="#1A1A2E" fontSize="10" fontWeight="600">Carta ADI</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; l&apos;ADI e chi pu&ograve; richiederlo (serve un &ldquo;componente fragile&rdquo;)</li>
                <li>Requisiti ISEE (max 9.360&euro;) e reddito (max 6.000&euro;)</li>
                <li>Quanto spetta: base 500&euro;/mese + contributo affitto fino a 280&euro;</li>
                <li>Come fare domanda e gli obblighi da rispettare</li>
                <li>Un esempio reale: Maria, 780&euro;/mese per 18 mesi</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; l&apos;Assegno di Inclusione</a>
              <a href="#chi">Requisiti</a>
              <a href="#importi">Quanto spetta</a>
              <a href="#domanda">Come fare domanda</a>
              <a href="#obblighi">Obblighi</a>
              <a href="#esempio">Esempio: il caso di Maria</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; <em>l&apos;Assegno di Inclusione</em></h2>
            <p>L&apos;Assegno di Inclusione (ADI) &egrave; la misura di sostegno al reddito che dal 2024 ha sostituito il Reddito di Cittadinanza. Ha requisiti pi&ugrave; selettivi: pu&ograve; richiederlo solo chi ha nel nucleo almeno un componente <strong>&ldquo;fragile&rdquo;</strong> &mdash; disabile, minorenne, over 60 o in carico ai servizi sociali.</p>
            <p>Gli adulti abili tra 18 e 59 anni senza componenti fragili possono richiedere il <strong>Supporto Formazione e Lavoro (SFL)</strong>: 350&euro;/mese per chi partecipa a percorsi di formazione o tirocinio.</p>
            <p>L&apos;ADI viene erogato tramite una <strong>Carta ADI</strong>: una carta prepagata ricaricata mensilmente, con restrizioni sugli acquisti (no giochi, scommesse, alcolici).</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>Componente fragile</strong> &mdash; disabile, minorenne, over 60, o adulto in carico ai servizi sociali. Almeno uno nel nucleo &egrave; obbligatorio.</p>
            <p><strong>PAD</strong> &mdash; Patto di Attivazione Digitale. Va firmato su SIISL dopo l&apos;accoglimento. Senza firma, l&apos;ADI non parte.</p>
            <p><strong>SIISL</strong> &mdash; Sistema Informativo per l&apos;Inclusione Sociale e Lavorativa. La piattaforma dove si gestisce l&apos;ADI.</p>
            <p><strong>ISEE per l&apos;inclusione</strong> &mdash; l&apos;ISEE specifico per l&apos;ADI. Ha franchigie pi&ugrave; alte sulla prima casa (91.500&euro;). Chiedi al CAF questa tipologia.</p>
          </div>

          <div className="guide-section rv" id="chi">
            <div className="guide-section-label">Chi ne ha diritto</div>
            <h2><em>Requisiti</em></h2>
            <p><strong>Nucleo:</strong> almeno un componente fragile (disabile, minorenne, over 60, o adulto in carico ai servizi sociali).</p>
            <p><strong>Reddito e patrimonio:</strong> <Link href="/isee" style={{color:'var(--green)',fontWeight:600}}>ISEE</Link> non superiore a <strong>9.360&euro;</strong>; reddito familiare non superiore a <strong>6.000&euro;</strong>/anno (moltiplicato per la scala di equivalenza); patrimonio immobiliare (esclusa prima casa) non superiore a 30.000&euro;; patrimonio mobiliare non superiore a 10.000&euro;.</p>
            <p><strong>Residenza:</strong> cittadino italiano, UE o con permesso di lungo periodo; residente da almeno 5 anni (ultimi 2 continuativi).</p>
            <div className="guide-callout warn">
              <strong>Se ti dimetti volontariamente, perdi l&apos;ADI per 12 mesi.</strong> Le dimissioni senza giusta causa comportano la decadenza. Le dimissioni per giusta causa non la comportano.
            </div>
          </div>

          <div className="guide-section rv" id="importi">
            <div className="guide-section-label">Quanto spetta</div>
            <h2>Quanto <em>spetta</em></h2>
            <p>L&apos;importo &egrave; un&apos;<strong>integrazione al reddito</strong>. Soglia base: <strong>6.000&euro;/anno</strong> (500&euro;/mese) per un single. Per ogni componente aggiuntivo si applica la scala di equivalenza: coniuge +0,4 (200&euro;), figlio minore +0,4, figlio disabile +0,5.</p>
            <p>In affitto si aggiunge un contributo fino a <strong>280&euro;/mese</strong> (150&euro; in comodato).</p>
            <p>Durata: massimo <strong>18 mesi</strong>, rinnovabile per altri 12 con nuova domanda.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
              <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#E8724A" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">IMPORTI ADI 2026</text>
                <rect x="16" y="50" width="308" height="32" rx="8" fill="#2D8A6E"/>
                <text x="28" y="72" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Base single: 500&euro;/mese (6.000&euro;/anno)</text>
                <rect x="16" y="90" width="240" height="32" rx="8" fill="#E8724A"/>
                <text x="28" y="112" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">+ Contributo affitto: fino a 280&euro;/mese</text>
                <rect x="16" y="130" width="200" height="32" rx="8" fill="#5B7EC5"/>
                <text x="28" y="152" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">+ Scala equivalenza per nucleo</text>
                <text x="16" y="190" fill="#E8724A" fontFamily="sans-serif" fontSize="11" fontWeight="600">Durata: 18 mesi, rinnovabile per altri 12</text>
              </svg>
            </div>
          </div>

          <div className="guide-section rv" id="domanda">
            <div className="guide-section-label">Procedura</div>
            <h2>Come fare <em>domanda</em></h2>
            <h3>Passo 1: Fai l&apos;ISEE specifico per l&apos;ADI</h3>
            <p>Al CAF, specifica &ldquo;ISEE per prestazioni familiari e per l&apos;inclusione&rdquo;. Ha franchigie diverse. Con l&apos;ISEE ordinario potresti risultare non eligibile anche se hai diritto.</p>
            <h3>Passo 2: Presenta la domanda</h3>
            <p>Su inps.it con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link>/CIE, oppure al CAF (gratuito). Valutazione entro 30 giorni.</p>
            <h3>Passo 3: Firma il PAD su SIISL</h3>
            <p>Accedi a siisl.anpal.gov.it con SPID e firma il Patto di Attivazione Digitale. Senza firma, l&apos;ADI non parte.</p>
            <h3>Passo 4: Ritira la Carta ADI</h3>
            <p>Arriva per posta. Il primo accredito avviene il mese successivo alla firma del PAD.</p>
          </div>

          <div className="guide-section rv" id="obblighi">
            <div className="guide-section-label">Regole</div>
            <h2>Gli obblighi <em>da rispettare</em></h2>
            <p>I componenti abili al lavoro (18-59 anni) devono: <strong>iscriversi al SIISL</strong>, aderire ai percorsi formativi, accettare offerte di lavoro congrue.</p>
            <p>Ogni variazione va comunicata all&apos;INPS subito. I primi 3.000&euro; lordi annui da lavoro non riducono l&apos;ADI; oltre, l&apos;importo viene ricalcolato.</p>
            <div className="guide-callout warn">
              <strong>Aggiorna subito l&apos;INPS se cambia qualcosa.</strong> Reddito, lavoro, nucleo: comunica entro il giorno prima dell&apos;evento. La mancata comunicazione &egrave; considerata frode e comporta revoca e recupero delle somme.
            </div>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Maria</em></h2>
            <p>Maria ha 58 anni, vive sola in affitto (400&euro;/mese), disoccupata da 8 mesi, ISEE per l&apos;inclusione di 6.500&euro;. Over 57 = componente fragile. Reddito: 0.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Situazione</strong>
                Single, over 57 (fragile)<br />
                ISEE: 6.500&euro; (sotto 9.360&euro;)<br />
                Reddito: 0&euro;<br />
                Affitto: 400&euro;/mese
              </div>
              <div className="guide-compare-item after">
                <strong>ADI mensile</strong>
                Base single: 500&euro;<br />
                Contributo affitto (max 280&euro;): 280&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Totale: 780&euro;/mese</strong>
              </div>
            </div>
            <p>Maria riceve 780&euro;/mese sulla Carta ADI per 18 mesi. Ha anche diritto automatico al <Link href="/bonus-bollette" style={{color:'var(--green)',fontWeight:600}}>bonus bollette</Link> e all&apos;esenzione ticket.</p>
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
              <Link href="/isee" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">ISEE 2026</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><circle cx="240" cy="44" r="16" fill="#2D8A6E" opacity=".9"/><path d="M234 44l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h4>Faccio l&apos;ISEE</h4>
                <p>L&apos;ISEE per l&apos;inclusione determina il diritto e l&apos;importo.</p>
              </Link>
              <Link href="/naspi" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">NASpI</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="92" width="140" height="5" rx="2.5" fill="#E8E0D4"/></svg>
                </div>
                <h4>NASpI</h4>
                <p>Se hai perso il lavoro, verifica prima se hai diritto alla NASpI.</p>
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
