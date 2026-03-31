'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideSpeseMedicheContent({ faqItems }) {
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
            <h1>Spese Mediche Detraibili nel 2026: Elenco Completo e Come Scaricarle</h1>
            <p className="guide-hero-sub">Quali spese puoi scaricare nel 730, come pagarle, cosa conservare e quanto recuperi. Con l&apos;elenco completo aggiornato.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>10 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="40" width="100" height="120" rx="8" fill="#2D8A6E" opacity=".08"/><path d="M100 70v30M85 85h30" stroke="#2D8A6E" strokeWidth="4" strokeLinecap="round"/><rect x="60" y="125" width="80" height="8" rx="4" fill="#E8724A" opacity=".2"/><rect x="70" y="140" width="60" height="8" rx="4" fill="#E8724A" opacity=".15"/></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Come funziona la detrazione del 19% e la franchigia di 129&euro;</li>
                <li>L&apos;elenco completo: farmaci, dentista, occhiali, psicologo, fisioterapia</li>
                <li>La regola del pagamento tracciabile (e le eccezioni)</li>
                <li>Un esempio reale: Giulia, 146&euro; di rimborso</li>
                <li>I documenti da conservare per 5 anni</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Come funziona la detrazione</a>
              <a href="#elenco">Cosa puoi detrarre</a>
              <a href="#pagamento">La regola del pagamento tracciabile</a>
              <a href="#esempio">Esempio: il caso di Giulia</a>
              <a href="#documenti">Documenti da conservare</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Come funziona <em>la detrazione</em></h2>
            <p>Ogni volta che vai dal dottore, compri un farmaco, fai un esame o porti i bambini dal dentista, lo Stato ti permette di <strong>recuperare il 19%</strong> di queste spese nella dichiarazione dei redditi. In pratica ti restituisce quasi un quinto di quello che hai speso.</p>
            <p>Per&ograve; c&apos;&egrave; una soglia minima: i primi <strong>129,11&euro;</strong> restano a tuo carico. La franchigia funziona cos&igrave;: se in un anno spendi 500&euro;, il 19% si calcola su 370,89&euro; (500 &minus; 129,11), per circa <strong>70&euro; di rimborso</strong>.</p>
            <p>Questo rimborso ti arriva come minor IRPEF da pagare, oppure come soldi in pi&ugrave; nella busta paga di luglio dopo il conguaglio del <Link href="/730" style={{color:'var(--green)',fontWeight:600}}>730</Link>.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>Detrazione</strong> &mdash; uno sconto diretto sulle tasse. Se hai 100&euro; di detrazione, paghi 100&euro; di IRPEF in meno.</p>
            <p><strong>Franchigia</strong> &mdash; i primi 129,11&euro; restano a tuo carico. Il 19% si calcola solo sulla parte eccedente.</p>
            <p><strong>Scontrino parlante</strong> &mdash; lo scontrino della farmacia con: natura del prodotto, codice AIC e il tuo codice fiscale.</p>
            <p><strong>Pagamento tracciabile</strong> &mdash; carta, bancomat, bonifico o assegno. Obbligatorio per quasi tutte le spese mediche private dal 2020.</p>
            <div className="guide-callout">
              <strong>Le spese mediche sono &ldquo;intoccabili&rdquo;:</strong> a differenza di altre detrazioni, <strong>non sono soggette al tetto per i redditi alti</strong> introdotto dalla Legge di Bilancio 2025. Anche se guadagni pi&ugrave; di 75.000&euro;, puoi detrarle per intero.
            </div>
          </div>

          <div className="guide-section rv" id="elenco">
            <div className="guide-section-label">Cosa scaricare</div>
            <h2>Cosa puoi <em>detrarre</em></h2>
            <h3>Farmaci e medicinali</h3>
            <p><strong>Con ricetta medica</strong> &mdash; scontrino parlante. Pagamento anche in contanti. <strong>Da banco (senza ricetta)</strong> &mdash; scontrino parlante, pagamento tracciabile dal 2025. <strong>Omeopatici classificati come medicinali</strong> &mdash; con dicitura sullo scontrino. <strong>Integratori e parafarmaci</strong> &mdash; NON detraibili.</p>
            <h3>Visite e prestazioni sanitarie</h3>
            <p><strong>Visite mediche</strong> generiche e specialistiche. <strong>Esami diagnostici</strong> (sangue, ecografie, TAC, risonanze). <strong>Cure odontoiatriche</strong> (no sbiancamento estetico). <strong>Fisioterapia, logopedia, riabilitazione</strong> da professionisti abilitati. <strong>Psicologo e psicoterapeuta</strong> iscritto all&apos;albo. <strong>Ticket SSN</strong> per visite ed esami.</p>
            <h3>Dispositivi medici</h3>
            <p><strong>Occhiali da vista e lenti a contatto</strong> con marcatura CE. <strong>Apparecchi acustici, misuratori di pressione, aerosol</strong>. <strong>Plantari, protesi, ausili ortopedici</strong> su prescrizione medica.</p>
            <div className="guide-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
              <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">SPESE DETRAIBILI AL 19%</text>
                <rect x="16" y="48" width="308" height="28" rx="6" fill="#2D8A6E"/><text x="28" y="68" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Visite specialistiche, esami, ticket SSN</text>
                <rect x="16" y="82" width="260" height="28" rx="6" fill="#E8724A"/><text x="28" y="102" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Dentista, fisioterapista, psicologo</text>
                <rect x="16" y="116" width="220" height="28" rx="6" fill="#5B7EC5"/><text x="28" y="136" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Farmaci con ricetta e da banco</text>
                <rect x="16" y="150" width="180" height="28" rx="6" fill="#8B6CC1"/><text x="28" y="170" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Occhiali, lenti, apparecchi acustici</text>
              </svg>
            </div>
          </div>

          <div className="guide-section rv" id="pagamento">
            <div className="guide-section-label">Come pagare</div>
            <h2>La regola del <em>pagamento tracciabile</em></h2>
            <p>In <strong>farmacia</strong> puoi pagare in contanti i farmaci con ricetta e le prestazioni in strutture pubbliche o accreditate SSN. <strong>Tutto il resto</strong> &mdash; visite private, dentista, fisioterapista, psicologo, occhiali &mdash; deve essere pagato con carta, bancomat o bonifico. Se paghi in contanti una visita privata, <strong>perdi tutta la detrazione</strong>.</p>
            <div className="guide-callout warn">
              <strong>Attenzione al dentista.</strong> Il dentista privato non &egrave; una struttura SSN. Se lo paghi in contanti, perdi tutta la detrazione. Questo errore costa centinaia di euro a migliaia di italiani ogni anno.
            </div>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Giulia</em></h2>
            <p>Giulia &egrave; impiegata, ha speso 900&euro; in spese mediche nel 2025: 200&euro; di ticket SSN, 400&euro; di dentista, 150&euro; di farmaci, 150&euro; di fisioterapia. Ha pagato tutto con carta tranne i ticket (contanti, consentito).</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Spese</strong>
                Ticket SSN: 200&euro;<br />
                Dentista: 400&euro;<br />
                Farmaci: 150&euro;<br />
                Fisioterapia: 150&euro;<br />
                Totale: 900&euro;
              </div>
              <div className="guide-compare-item after">
                <strong>Rimborso nel 730</strong>
                900&euro; &minus; 129&euro; (franchigia) = 771&euro;<br />
                771&euro; &times; 19% = <br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>146&euro; di rimborso</strong>
              </div>
            </div>
            <p>Giulia riceve 146&euro; in pi&ugrave; nella busta paga di luglio. Se avesse pagato il dentista in contanti, avrebbe perso 76&euro; di rimborso (400&euro; non sarebbero stati detraibili).</p>
          </div>

          <div className="guide-section rv" id="documenti">
            <div className="guide-section-label">Cosa conservare</div>
            <h2>Documenti da <em>conservare</em></h2>
            <p>Tieni tutto per <strong>5 anni</strong> dalla dichiarazione. Scontrini parlanti della farmacia (con codice fiscale), fatture di visite e prestazioni, ricevute di pagamento tracciabile, prescrizioni mediche per dispositivi. Il consiglio: scansiona tutto e conserva una copia digitale.</p>
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
                <p>Dove inserire le spese mediche per il rimborso.</p>
              </Link>
              <Link href="/isee" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">ISEE 2026</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="86" width="140" height="5" rx="2.5" fill="#E8E0D4"/></svg>
                </div>
                <h4>ISEE</h4>
                <p>Per le esenzioni ticket sanitario.</p>
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
