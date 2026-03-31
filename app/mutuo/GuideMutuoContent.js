'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideMutuoContent({ faqItems }) {
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
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Casa</span></div>
            <div className="guide-hero-top"><span className="guide-tag casa">Casa</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Come Richiedere il Mutuo Prima Casa nel 2026: Requisiti, Tassi e Garanzia</h1>
            <p className="guide-hero-sub">Come funziona, requisiti, garanzia Consap under 36, tasso fisso vs variabile, quanto puoi chiedere e gli errori da evitare.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>12 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 130L100 80l50 50v40H50z" fill="#2D8A6E" opacity=".06"/><rect x="85" y="140" width="30" height="30" rx="3" fill="#2D8A6E" opacity=".1"/><circle cx="100" cy="60" r="18" fill="#E8724A" opacity=".1"/><text x="100" y="66" textAnchor="middle" fill="#E8724A" fontSize="14" fontWeight="700">&euro;</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; un mutuo e come funziona (ipoteca, rata, interessi)</li>
                <li>Requisiti: reddito, contratto, LTV, regola del 30%</li>
                <li>Garanzia Consap: mutuo al 100% per under 36</li>
                <li>Tasso fisso vs variabile: come scegliere nel 2026</li>
                <li>Un esempio reale: Marco, 29 anni, primo mutuo da 180.000&euro;</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; un mutuo</a>
              <a href="#requisiti">Requisiti</a>
              <a href="#consap">Garanzia Consap</a>
              <a href="#tassi">Tasso fisso o variabile</a>
              <a href="#come">Come richiedere il mutuo</a>
              <a href="#esempio">Esempio: il caso di Marco</a>
              <a href="#errori">Errori comuni</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; un <em>mutuo</em></h2>
            <p>Un mutuo &egrave; un <strong>prestito a lungo termine</strong> che la banca ti d&agrave; per comprare casa. Restituisci i soldi un po&apos; alla volta, ogni mese, per 15-30 anni. Ogni rata &egrave; composta da capitale (debito) e interessi (costo del prestito).</p>
            <p>La banca mette un&apos;<strong>ipoteca</strong> sulla casa: se non paghi, pu&ograve; prenderla e venderla. Il mutuo &ldquo;prima casa&rdquo; ha vantaggi fiscali: imposta di registro al 2%, detrazione interessi al 19%, accesso alla garanzia Consap.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>LTV (Loan to Value)</strong> &mdash; rapporto tra importo mutuo e valore casa. Casa da 200.000&euro;, mutuo 160.000&euro; = LTV 80%. Pi&ugrave; &egrave; alto, pi&ugrave; rischio per la banca.</p>
            <p><strong>TAN</strong> &mdash; Tasso Annuo Nominale, il tasso &ldquo;puro&rdquo; del mutuo.</p>
            <p><strong>TAEG</strong> &mdash; Tasso Annuo Effettivo Globale. Include TAN + tutti i costi. Il numero vero da confrontare.</p>
            <p><strong>Spread</strong> &mdash; il margine che la banca aggiunge al tasso di riferimento. &Egrave; il guadagno della banca.</p>
            <p><strong>Consap</strong> &mdash; Concessionaria Servizi Assicurativi Pubblici. Gestisce il Fondo di Garanzia Prima Casa.</p>
            <p><strong>Surroga</strong> &mdash; trasferimento del mutuo a un&apos;altra banca per condizioni migliori. Gratuita per legge.</p>
          </div>

          <div className="guide-section rv" id="requisiti">
            <div className="guide-section-label">Chi pu&ograve; chiederlo</div>
            <h2><em>Requisiti</em></h2>
            <p><strong>Reddito stabile:</strong> la rata non deve superare il <strong>30-35% del reddito netto</strong>. Con 2.000&euro;/mese netti, rata massima 600-700&euro;.</p>
            <p><strong>Contratto:</strong> tempo indeterminato &egrave; l&apos;ideale. Il determinato &egrave; pi&ugrave; difficile ma non impossibile (Consap aiuta).</p>
            <p><strong>Anticipo:</strong> la banca finanzia massimo l&apos;80% (LTV 80%). Devi avere almeno il 20%. Con Consap under 36, puoi arrivare al 100%.</p>
            <p><strong>Et&agrave;:</strong> alla scadenza del mutuo non devi superare i 75-80 anni (regola interna delle banche).</p>
            <div className="guide-callout">
              <strong>Confronta almeno 3-4 banche.</strong> La differenza di tasso pu&ograve; valere <strong>decine di migliaia di euro</strong> sull&apos;intera durata. Usa un comparatore online (MutuiOnline, Segugio.it) e chiedi preventivi scritti.
            </div>
          </div>

          <div className="guide-section rv" id="consap">
            <div className="guide-section-label">La garanzia statale</div>
            <h2>Garanzia <em>Consap</em></h2>
            <p>Il Fondo di Garanzia Prima Casa &egrave; la cosa pi&ugrave; importante per i giovani. Lo Stato <strong>garantisce fino all&apos;80%</strong> del mutuo, rendendo possibile ottenere un finanziamento al <strong>100% senza anticipo</strong>. Le banche accettano chi altrimenti rifiuterebbero.</p>
            <p><strong>Chi ne ha diritto:</strong> under 36, giovani coppie, famiglie numerose, inquilini di case popolari. ISEE non superiore a <strong>40.000&euro;</strong>. L&apos;immobile non deve essere di lusso (no A/1, A/8, A/9).</p>
            <p><strong>Come funziona:</strong> la domanda si fa tramite la banca stessa. La banca invia la pratica a Consap, che risponde entro 20 giorni. Se approvata, la garanzia &egrave; automatica.</p>
            <div className="guide-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
              <svg viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">GARANZIA CONSAP 2026</text>
                <rect x="16" y="50" width="308" height="32" rx="8" fill="#2D8A6E"/><text x="28" y="72" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Under 36 + ISEE &le; 40k: garanzia fino all&apos;80%</text>
                <rect x="16" y="90" width="260" height="32" rx="8" fill="#E8724A"/><text x="28" y="112" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Mutuo possibile al 100% (zero anticipo)</text>
                <rect x="16" y="130" width="220" height="32" rx="8" fill="#5B7EC5"/><text x="28" y="152" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Tasso calmierato: max TEGM al momento</text>
              </svg>
            </div>
          </div>

          <div className="guide-section rv" id="tassi">
            <div className="guide-section-label">La scelta</div>
            <h2>Tasso fisso <em>o variabile?</em></h2>
            <p><strong>Tasso fisso (~2,8-3,1% nel 2026):</strong> la rata resta uguale per tutta la durata. Sai esattamente quanto paghi. &Egrave; la scelta della maggioranza.</p>
            <p><strong>Tasso variabile (~2,3-2,8%):</strong> parte pi&ugrave; basso ma sale (o scende) con l&apos;Euribor. Pu&ograve; convenire se prevedi di estinguere in meno di 10 anni.</p>
            <div className="guide-callout">
              <strong>Regola pratica:</strong> se non puoi permetterti che la rata aumenti di 200-300&euro;/mese, vai sul fisso. Il variabile &egrave; per chi ha margine finanziario o orizzonte breve.
            </div>
          </div>

          <div className="guide-section rv" id="come">
            <div className="guide-section-label">Procedura</div>
            <h2>Come richiedere <em>il mutuo</em></h2>
            <h3>Passo 1: Pre-delibera</h3>
            <p>Vai in banca (o da un broker) e chiedi la pre-delibera. Sapere quanto ti prestano <strong>prima</strong> di firmare il compromesso.</p>
            <h3>Passo 2: Trova la casa e firma il compromesso</h3>
            <p>Con clausola sospensiva &ldquo;subordinato al mutuo&rdquo;. <Link href="/compro-casa" style={{color:'var(--green)',fontWeight:600}}>Guida acquisto casa</Link></p>
            <h3>Passo 3: Domanda formale</h3>
            <p>La banca avvia l&apos;istruttoria: verifica redditi, manda il perito a valutare l&apos;immobile. Con Consap, invia anche la pratica al Fondo.</p>
            <h3>Passo 4: Delibera e rogito</h3>
            <p>La banca delibera, il notaio prepara l&apos;atto di mutuo e l&apos;atto di compravendita. Si firmano insieme. I fondi vengono erogati al venditore.</p>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Marco</em></h2>
            <p>Marco ha 29 anni, dipendente a tempo indeterminato con RAL 28.000&euro; (netto ~1.900&euro;/mese). ISEE 22.000&euro;. Vuole comprare un appartamento a Bologna da 220.000&euro;.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Senza Consap</strong>
                Anticipo 20%: 44.000&euro;<br />
                Mutuo: 176.000&euro; in 25 anni<br />
                Tasso fisso 3%: rata ~835&euro;<br />
                Rata/reddito: 44% (troppo alto!)
              </div>
              <div className="guide-compare-item after">
                <strong>Con Consap</strong>
                Anticipo: 0&euro;<br />
                Mutuo: 220.000&euro; in 30 anni<br />
                Tasso calmierato ~2,7%: rata ~890&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Rata/reddito: 47% (alto, ma fattibile)</strong>
              </div>
            </div>
            <p>Senza Consap, Marco dovrebbe avere 44.000&euro; + spese (~55.000&euro; totali). Con Consap, parte da zero ma la rata &egrave; alta. Potrebbe cercare una casa a 180.000&euro; per avere una rata di ~730&euro; (38% del reddito, pi&ugrave; sostenibile).</p>
          </div>

          <div className="guide-section rv" id="errori">
            <div className="guide-section-label">Attenzione</div>
            <h2>Errori <em>comuni</em></h2>
            <div className="guide-callout warn" style={{marginTop:'0'}}><strong>Non chiedere la pre-delibera prima del compromesso.</strong> Se la banca rifiuta, perdi la caparra.</div>
            <div className="guide-callout warn"><strong>Guardare solo il TAN.</strong> Il TAEG include tutti i costi. Due mutui con lo stesso TAN possono avere TAEG molto diversi.</div>
            <div className="guide-callout warn"><strong>Sottovalutare i costi accessori.</strong> Notaio, perizia, assicurazione, istruttoria: 5.000-10.000&euro; extra oltre all&apos;anticipo.</div>
            <div className="guide-callout warn"><strong>Rata troppo alta.</strong> La regola del 30% esiste per un motivo. Se perdi il lavoro o nasce un figlio, devi poter ancora pagare.</div>
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
              <Link href="/compro-casa" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Compro Casa</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/><path d="M200 90l30-20 30 20v30h-60z" fill="#2D8A6E" opacity=".06"/></svg>
                </div>
                <h4>Compro Casa</h4>
                <p>Dal compromesso al rogito, bonus prima casa e costi.</p>
              </Link>
              <Link href="/730" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">730 Precompilato</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><circle cx="240" cy="44" r="16" fill="#2D8A6E" opacity=".9"/><path d="M234 44l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h4>Faccio il 730</h4>
                <p>Gli interessi del mutuo prima casa sono detraibili al 19%.</p>
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
