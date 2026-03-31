'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideBonusMobiliContent({ faqItems }) {
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
            <h1>Come Ottenere il Bonus Mobili nel 2026: Detrazione 50% e Cosa Comprare</h1>
            <p className="guide-hero-sub">Detrazione 50% su mobili e grandi elettrodomestici (max 5.000&euro;) per chi ha lavori di ristrutturazione in corso.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>8 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="70" width="70" height="50" rx="4" fill="#5B7EC5" opacity=".1" stroke="#5B7EC5" strokeWidth="1" opacity=".2"/><rect x="50" y="80" width="50" height="30" rx="2" fill="#5B7EC5" opacity=".08"/><rect x="100" y="55" width="55" height="75" rx="6" fill="#2D8A6E" opacity=".08" stroke="#2D8A6E" strokeWidth="1" opacity=".15"/><rect x="110" y="65" width="35" height="25" rx="2" fill="#2D8A6E" opacity=".1"/><text x="100" y="160" textAnchor="middle" fill="#E8724A" fontSize="18" fontWeight="700">50%</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; il bonus mobili e perch&eacute; &egrave; collegato alla ristrutturazione</li>
                <li>Cosa puoi comprare: mobili, cucine, elettrodomestici (classi minime)</li>
                <li>I 4 requisiti per ottenerlo</li>
                <li>Come pagare (non serve il bonifico parlante!)</li>
                <li>Un esempio reale: Francesca, 2.500&euro; risparmiati sulla cucina nuova</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; il bonus mobili</a>
              <a href="#cosa">Cosa si pu&ograve; comprare</a>
              <a href="#requisiti">I 4 requisiti</a>
              <a href="#pagare">Come pagare</a>
              <a href="#esempio">Esempio: il caso di Francesca</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; il <em>bonus mobili</em></h2>
            <p>Il bonus mobili &egrave; una detrazione IRPEF del <strong>50%</strong> sulle spese per mobili e grandi elettrodomestici di classe energetica elevata, in 10 rate annuali. Il tetto massimo &egrave; <strong>5.000&euro;</strong> per unit&agrave; immobiliare, quindi la detrazione massima &egrave; 2.500&euro; (250&euro;/anno per 10 anni).</p>
            <p>Il bonus &egrave; <strong>collegato al bonus ristrutturazione</strong>: puoi ottenerlo solo se stai facendo (o hai fatto) lavori di manutenzione straordinaria sull&apos;immobile. Senza <Link href="/ristrutturare" style={{color:'var(--green)',fontWeight:600}}>ristrutturazione</Link>, non esiste. Vale sia per la prima che per la seconda casa.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>Bonifico ordinario</strong> &mdash; per il bonus mobili non serve il bonifico parlante: va bene un bonifico ordinario, purch&eacute; tracciabile.</p>
            <p><strong>Classe energetica</strong> &mdash; forni almeno classe A, lavatrici/lavastoviglie almeno classe E, frigoriferi almeno classe F.</p>
            <p><strong>Data di inizio lavori</strong> &mdash; la ristrutturazione deve essere iniziata <em>prima</em> dell&apos;acquisto dei mobili. Non il contrario.</p>
          </div>

          <div className="guide-section rv" id="cosa">
            <div className="guide-section-label">Cosa comprare</div>
            <h2>Cosa si pu&ograve; <em>comprare</em></h2>
            <p><strong>Mobili detraibili:</strong> letti, armadi, cassettiere, librerie, scrivanie, tavoli, sedie, comodini, divani, poltrone, credenze. Anche le cucine componibili complete. Non sono detraibili porte, pavimenti, tende e tendaggi.</p>
            <p><strong>Grandi elettrodomestici:</strong> frigoriferi (classe min. F), lavatrici/lavasciuga (classe min. E), lavastoviglie (classe min. E), forni (classe min. A), piani cottura elettrici, condizionatori, aspirapolvere robot. Esclusi i piccoli elettrodomestici.</p>
            <p><strong>Dove collocarli:</strong> in qualsiasi stanza dell&apos;immobile ristrutturato, non per forza nella stanza dei lavori. Ristrutturi il bagno? Puoi comprare il divano per il soggiorno.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#ECF0FA,#dce4f5)'}}>
              <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#5B7EC5" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">BONUS MOBILI 2026</text>
                <rect x="16" y="48" width="308" height="32" rx="8" fill="#2D8A6E"/><text x="28" y="70" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Detrazione: 50% in 10 rate annuali</text>
                <rect x="16" y="88" width="240" height="32" rx="8" fill="#E8724A"/><text x="28" y="110" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Tetto massimo: 5.000&euro; per immobile</text>
                <rect x="16" y="128" width="180" height="32" rx="8" fill="#5B7EC5"/><text x="28" y="150" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Detrazione massima: 2.500&euro;</text>
                <text x="16" y="185" fill="#8A857C" fontFamily="sans-serif" fontSize="10">Requisito: lavori di ristrutturazione in corso o conclusi sull&apos;immobile</text>
              </svg>
            </div>

            <div className="guide-callout">
              <strong>Il limite &egrave; per immobile.</strong> Se possiedi due appartamenti e li ristrutturi entrambi, puoi avere 5.000&euro; di bonus mobili per ognuno, quindi 10.000&euro; totali.
            </div>
          </div>

          <div className="guide-section rv" id="requisiti">
            <div className="guide-section-label">Requisiti</div>
            <h2>I 4 <em>requisiti</em></h2>
            <h3>1. Ristrutturazione in corso o fatta</h3>
            <p>Almeno manutenzione straordinaria: rifacimento bagno, cucina, impianti, apertura porte. La manutenzione ordinaria non basta (tranne parti comuni condominiali).</p>
            <h3>2. La ristrutturazione deve precedere l&apos;acquisto</h3>
            <p>La data di inizio lavori (o di presentazione della pratica edilizia) deve essere anteriore a quella dell&apos;acquisto dei mobili.</p>
            <h3>3. Pagamento tracciabile</h3>
            <p>Carta di credito, bancomat, bonifico ordinario. No contanti. <strong>Non serve il bonifico parlante</strong> (a differenza dei lavori edilizi).</p>
            <h3>4. Stessa unit&agrave; immobiliare</h3>
            <p>I mobili devono essere destinati all&apos;immobile oggetto della ristrutturazione.</p>
          </div>

          <div className="guide-section rv" id="pagare">
            <div className="guide-section-label">Pagamento</div>
            <h2>Come <em>pagare</em></h2>
            <p>A differenza dei lavori di ristrutturazione, per il bonus mobili puoi pagare con: <strong>carta di credito, carta di debito, bonifico bancario ordinario</strong>. Niente contanti, niente assegni.</p>
            <p>Se paghi a rate con la carta, la spesa si considera sostenuta al momento dell&apos;addebito. Se acquisti online, la ricevuta digitale &egrave; valida. Stampa e conserva.</p>
            <p>Il bonus si dichiara nel <strong>Quadro E del <Link href="/730" style={{color:'var(--green)',fontWeight:600}}>730</Link></strong> (riga E57). La detrazione &egrave; del 50% in 10 rate annuali.</p>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Francesca</em></h2>
            <p>Francesca ha 35 anni, ha appena ristrutturato la cucina del suo appartamento (prima casa) spendendo 15.000&euro;. Compra una cucina componibile nuova da 4.400&euro; e una lavatrice classe A da 600&euro;. Totale: 5.000&euro; (tetto massimo).</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Spesa</strong>
                Cucina componibile: 4.400&euro;<br />
                Lavatrice classe A: 600&euro;<br />
                Totale: 5.000&euro; (tetto max)
              </div>
              <div className="guide-compare-item after">
                <strong>Detrazione</strong>
                50% di 5.000&euro; = 2.500&euro;<br />
                250&euro;/anno per 10 anni nel 730<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Costo netto: 2.500&euro;</strong>
              </div>
            </div>
            <p>Francesca paga la met&agrave;. Ha usato la carta di credito (non serve il bonifico parlante) e conserva scontrini e fatture per 5 anni.</p>
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
              <Link href="/ristrutturare" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Ristrutturare</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="110" width="120" height="28" rx="6" fill="#2D8A6E" opacity=".12"/><text x="116" y="128" textAnchor="middle" fill="#2D8A6E" fontFamily="sans-serif" fontSize="10" fontWeight="600">Bonus 50%</text></svg>
                </div>
                <h4>Ristrutturare Casa</h4>
                <p>Il bonus mobili esiste solo con ristrutturazione in corso.</p>
              </Link>
              <Link href="/730" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">730 Precompilato</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><circle cx="240" cy="44" r="16" fill="#2D8A6E" opacity=".9"/><path d="M234 44l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h4>Faccio il 730</h4>
                <p>Il bonus mobili si inserisce nel Quadro E, riga E57.</p>
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
