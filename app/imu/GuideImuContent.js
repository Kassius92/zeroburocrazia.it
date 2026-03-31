'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideImuContent({ faqItems }) {
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
            <h1>Come Calcolare e Pagare l&apos;IMU nel 2026: Aliquote, Esenzioni e Scadenze</h1>
            <p className="guide-hero-sub">Chi paga l&apos;IMU, chi &egrave; esente, come si calcola, le scadenze del 16 giugno e 16 dicembre e le agevolazioni per comodato, affitto e immobili inagibili.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>8 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60 120L100 80l40 40v50H60z" fill="#E8724A" opacity=".08" stroke="#E8724A" strokeWidth="1.5" opacity=".2"/><rect x="88" y="135" width="24" height="35" rx="2" fill="#E8724A" opacity=".15"/><text x="100" y="70" textAnchor="middle" fill="#E8724A" fontSize="14" fontWeight="700">IMU</text><rect x="50" y="175" width="100" height="8" rx="4" fill="#2D8A6E" opacity=".2"/></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">

          {/* KEY TAKEAWAYS */}
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Se devi pagare l&apos;IMU (spoiler: la prima casa &egrave; esente)</li>
                <li>La formula: rendita catastale &times; rivalutazione &times; moltiplicatore &times; aliquota</li>
                <li>Scadenze: 16 giugno (acconto) e 16 dicembre (saldo)</li>
                <li>Agevolazioni: comodato (-50%), cedolare (-25%), inagibilit&agrave; (-50%)</li>
                <li>Un esempio reale: Giulia, 1.059&euro; all&apos;anno per un appartamento ereditato</li>
              </ul>
            </div>
          </div>

          {/* INDICE */}
          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; l&apos;IMU e chi paga</a>
              <a href="#esenzioni">Chi NON paga</a>
              <a href="#calcolo">Come si calcola</a>
              <a href="#scadenze">Scadenze e come pagare</a>
              <a href="#agevolazioni">Agevolazioni e riduzioni</a>
              <a href="#esempio">Esempio: il caso di Giulia</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          {/* COS'È */}
          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; l&apos;<em>IMU</em> e chi la paga</h2>

            <p>L&apos;IMU (Imposta Municipale Propria) &egrave; una tassa annuale sul possesso di immobili. La <strong>buona notizia</strong>: se abiti nella tua unica casa, non paghi nulla. L&apos;abitazione principale (non di lusso) &egrave; completamente esente.</p>

            <p>Devono pagare l&apos;IMU: chi ha una <strong>seconda casa</strong> (terreno, appartamento, box, negozio), chi ha la <strong>prima casa di lusso</strong> (categorie catastali A/1, A/8, A/9), i proprietari di <strong>terreni agricoli</strong> (con eccezioni per i coltivatori diretti), e chi possiede immobili sfitti o affittati.</p>

            <h3>Le parole che devi conoscere</h3>

            <p><strong>Rendita catastale</strong> &mdash; il valore fiscale dell&apos;immobile assegnato dall&apos;Agenzia del Territorio. Lo trovi nella visura catastale, nell&apos;atto di compravendita o nelle bollette IMU degli anni precedenti.</p>
            <p><strong>Categoria catastale</strong> &mdash; la classificazione dell&apos;immobile (A/2 = appartamento civile, A/3 = economico, C/6 = garage).</p>
            <p><strong>Aliquota</strong> &mdash; la percentuale che il Comune applica. Si esprime in &ldquo;per mille&rdquo; (&permil;). Ogni Comune decide le proprie entro i limiti di legge.</p>
            <p><strong>Abitazione principale</strong> &mdash; l&apos;immobile dove hai <strong>sia</strong> la residenza anagrafica <strong>che</strong> la dimora abituale. Servono entrambi per l&apos;esenzione.</p>
            <p><strong>Pertinenza</strong> &mdash; garage (C/6), cantina (C/2), tettoia (C/7). Una pertinenza per tipo &egrave; esente insieme alla prima casa.</p>
          </div>

          {/* CHI NON PAGA */}
          <div className="guide-section rv" id="esenzioni">
            <div className="guide-section-label">Esenzioni</div>
            <h2>Chi <em>NON paga</em> l&apos;IMU</h2>

            <p>Sono <strong>completamente esenti</strong>: l&apos;abitazione principale non di lusso (con le pertinenze, una per tipo), gli immobili delle cooperative edilizie a propriet&agrave; indivisa, i terreni agricoli dei coltivatori diretti e degli IAP, gli immobili dell&apos;edilizia residenziale pubblica, gli immobili di disabili gravi (<Link href="/legge-104" style={{color:'var(--green)',fontWeight:600}}>L. 104, art. 3 comma 3</Link>) usati come abitazione principale.</p>

            <p>Dopo la sentenza della Corte Costituzionale 209/2022, <strong>due coniugi con case diverse</strong> possono avere ognuno la propria abitazione principale esente, a patto che ognuno ci risieda e dimori.</p>

            <div className="guide-callout warn">
              <strong>Residenza non basta: serve anche la dimora.</strong> Per l&apos;esenzione prima casa devi avere sia la residenza anagrafica che la dimora abituale. Se sei residente ma non ci abiti davvero, il Comune pu&ograve; contestare l&apos;esenzione.
            </div>
          </div>

          {/* CALCOLO */}
          <div className="guide-section rv" id="calcolo">
            <div className="guide-section-label">Formula</div>
            <h2>Come si <em>calcola</em></h2>

            <p>La formula &egrave;: <strong>(Rendita catastale &times; 1,05) &times; Moltiplicatore &times; Aliquota comunale</strong>.</p>

            <p>La <strong>rendita catastale</strong> si trova nella visura catastale (gratis su agenziaentrate.gov.it con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link>). Va aumentata del 5% (rivalutazione fissa).</p>

            <p>Il <strong>moltiplicatore</strong> dipende dalla categoria: abitazioni (A, escluso A/10) = 160; garage (C/6) = 140; negozi (C/1) = 55; uffici (A/10, B) = 80; capannoni (D) = 65.</p>

            <p>L&apos;<strong>aliquota</strong> &egrave; quella deliberata dal tuo Comune. L&apos;aliquota base per la seconda casa &egrave; 8,6&permil;, ma il Comune pu&ograve; portarla fino a 10,6&permil; (o 11,4&permil; con la maggiorazione).</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
              <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#E8724A" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">FORMULA IMU</text>
                <rect x="16" y="48" width="308" height="44" rx="10" fill="#E8724A"/>
                <text x="170" y="76" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="14" fontWeight="700">Rendita &times; 1,05 &times; Moltiplicatore &times; Aliquota</text>
                <text x="16" y="120" fill="#1A1A2E" fontFamily="sans-serif" fontSize="11">Esempio: 800&euro; &times; 1,05 = 840 &times; 160 = 134.400&euro; &times; 8,6&permil;</text>
                <rect x="16" y="138" width="308" height="36" rx="8" fill="#2D8A6E"/>
                <text x="170" y="162" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="14" fontWeight="700">= 1.155,84&euro;/anno</text>
              </svg>
            </div>
          </div>

          {/* SCADENZE */}
          <div className="guide-section rv" id="scadenze">
            <div className="guide-section-label">Calendario</div>
            <h2>Scadenze <em>e come pagare</em></h2>

            <p>L&apos;IMU si paga in <strong>due rate</strong>: l&apos;acconto entro il <strong>16 giugno</strong> (50% dell&apos;importo dell&apos;anno precedente) e il saldo entro il <strong>16 dicembre</strong> (conguaglio con le aliquote definitive). Se l&apos;importo totale &egrave; inferiore a 12&euro;, non si paga.</p>

            <p>Si paga con il <strong>modello F24</strong>, online sul sito dell&apos;Agenzia delle Entrate (con SPID), tramite banca, CAF, o presso tabaccherie/uffici postali abilitati.</p>

            <div className="guide-callout warn">
              <strong>Se non paghi in tempo:</strong> puoi usare il <strong>ravvedimento operoso</strong>. Entro 14 giorni: 0,1%/giorno. Entro 30 giorni: 1,25%. Entro 90 giorni: 1,67%. Oltre 1 anno: 3,75%. &Egrave; sempre meglio pagare tardi con ravvedimento che ignorare il pagamento.
            </div>
          </div>

          {/* AGEVOLAZIONI */}
          <div className="guide-section rv" id="agevolazioni">
            <div className="guide-section-label">Riduzioni</div>
            <h2>Agevolazioni <em>e riduzioni</em></h2>

            <p><strong>Comodato al figlio o al genitore:</strong> se presti la casa a un figlio o genitore che la usa come abitazione principale, la base imponibile si riduce del <strong>50%</strong>. Condizioni: contratto registrato, proprietario residente nello stesso Comune, non possedere altri immobili.</p>

            <p><strong>Immobile affittato a canone concordato:</strong> riduzione del <strong>25%</strong> sull&apos;IMU dovuta. Si applica con la <Link href="/cedolare-secca" style={{color:'var(--green)',fontWeight:600}}>cedolare secca</Link> al canone concordato.</p>

            <p><strong>Immobile inagibile o inabitabile:</strong> riduzione del <strong>50%</strong> per gli immobili dichiarati inagibili e di fatto non utilizzati.</p>

            <p><strong>Immobile di anziano/disabile in casa di cura:</strong> pu&ograve; essere considerato abitazione principale (esente) se non affittato. Dipende dal Comune.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
              <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">AGEVOLAZIONI IMU</text>
                <rect x="16" y="50" width="308" height="32" rx="8" fill="#2D8A6E"/>
                <text x="28" y="72" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Prima casa: ESENTE (100%)</text>
                <rect x="16" y="90" width="240" height="32" rx="8" fill="#E8724A"/>
                <text x="28" y="112" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Comodato a figlio/genitore: -50%</text>
                <rect x="16" y="130" width="200" height="32" rx="8" fill="#5B7EC5"/>
                <text x="28" y="152" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Canone concordato: -25%</text>
                <rect x="16" y="170" width="160" height="24" rx="6" fill="#8B6CC1"/>
                <text x="28" y="187" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Inagibile: -50%</text>
              </svg>
            </div>
          </div>

          {/* ESEMPIO */}
          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Giulia</em></h2>

            <p>Giulia ha 38 anni, vive a Milano (abitazione principale, esente IMU). Ha ereditato un appartamento a Bologna dove non abita: rendita catastale 650&euro;, categoria A/2. Il Comune di Bologna applica l&apos;aliquota di 9,7&permil; per le seconde case.</p>

            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Calcolo</strong>
                Rendita catastale rivalutata: 650&euro; &times; 1,05 = 682,50&euro;<br />
                Base imponibile: 682,50&euro; &times; 160 = 109.200&euro;<br />
                Aliquota Bologna: 9,7&permil;
              </div>
              <div className="guide-compare-item after">
                <strong>Risultato</strong>
                IMU annua: 109.200 &times; 9,7&permil; = 1.059,24&euro;<br />
                Acconto (16 giugno): 529,62&euro;<br />
                Saldo (16 dicembre): 529,62&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Totale: 1.059,24&euro;/anno</strong>
              </div>
            </div>

            <p>Se Giulia affittasse l&apos;appartamento con <Link href="/cedolare-secca" style={{color:'var(--green)',fontWeight:600}}>cedolare secca</Link> a canone concordato, l&apos;IMU scenderebbe del 25%: da 1.059&euro; a circa <strong>794&euro;</strong>. E se lo prestasse in comodato alla madre, scenderebbe del 50%: circa <strong>530&euro;</strong>.</p>
          </div>

          {/* FAQ */}
          <div className="guide-section rv" id="faq">
            <div className="guide-section-label">FAQ</div>
            <h2>Domande <em>frequenti</em></h2>
            <FAQ items={faqItems} />
          </div>

          {/* GUIDE CORRELATE */}
          <div className="guide-section rv">
            <div className="guide-section-label">Approfondimenti</div>
            <h2>Guide <em>correlate</em></h2>
            <div className="guide-related">
              <Link href="/cedolare-secca" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Cedolare Secca</text><rect x="56" y="80" width="120" height="28" rx="6" fill="#E8724A" opacity=".12"/><text x="116" y="98" textAnchor="middle" fill="#E8724A" fontFamily="sans-serif" fontSize="12" fontWeight="700">21%</text><rect x="56" y="116" width="120" height="28" rx="6" fill="#2D8A6E" opacity=".12"/><text x="116" y="134" textAnchor="middle" fill="#2D8A6E" fontFamily="sans-serif" fontSize="12" fontWeight="700">10%</text></svg>
                </div>
                <h4>Cedolare Secca</h4>
                <p>Se affitti, la cedolare riduce l&apos;IMU del 25% con canone concordato.</p>
              </Link>
              <Link href="/730" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">730 Precompilato</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="86" width="140" height="5" rx="2.5" fill="#E8E0D4"/><circle cx="240" cy="44" r="16" fill="#2D8A6E" opacity=".9"/><path d="M234 44l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h4>Faccio il 730</h4>
                <p>L&apos;IMU sugli immobili D &egrave; detraibile nel 730.</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="guide-section" style={{textAlign:'center',borderBottom:'none',paddingBottom:'0'}}>
            <Link href="/guide" className="cta-btn" style={{color:'#fff'}}>Esplora tutte le guide<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
