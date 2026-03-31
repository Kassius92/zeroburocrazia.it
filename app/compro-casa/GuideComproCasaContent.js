'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideComproCasaContent({ faqItems }) {
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
            <h1>Come Comprare Casa nel 2026: Mutuo, Bonus Prima Casa e Costi</h1>
            <p className="guide-hero-sub">Dal compromesso al rogito, bonus prima casa, imposte, costi nascosti e tutto quello che devi sapere sul mutuo.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>15 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 120L100 70l50 50v55H50z" fill="#2D8A6E" opacity=".06" stroke="#2D8A6E" strokeWidth="1.5" opacity=".2"/><rect x="85" y="140" width="30" height="35" rx="3" fill="#2D8A6E" opacity=".12"/><circle cx="100" cy="100" r="12" fill="#E8724A" opacity=".12"/><text x="100" y="105" textAnchor="middle" fill="#E8724A" fontSize="11" fontWeight="700">&euro;</text><text x="100" y="60" textAnchor="middle" fill="#2D8A6E" fontSize="11" fontWeight="700">Compro Casa</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Come funziona l&apos;acquisto: dalla visita al rogito, passo per passo</li>
                <li>Bonus prima casa: imposta al 2% invece del 9%</li>
                <li>Tutti i costi (notaio, agenzia, perizia, imposte, assicurazioni)</li>
                <li>Il mutuo: tasso fisso vs variabile, la regola del 30%</li>
                <li>Un esempio reale: Matteo, 63.300&euro; da avere in tasca per una casa da 250.000&euro;</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#parole">Le parole che devi conoscere</a>
              <a href="#iter">Come funziona, dall&apos;inizio alla fine</a>
              <a href="#prima-casa">Bonus prima casa</a>
              <a href="#costi">Tutti i costi</a>
              <a href="#mutuo">Il mutuo</a>
              <a href="#esempio">Esempio: il caso di Matteo</a>
              <a href="#errori">Gli errori pi&ugrave; comuni</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="parole">
            <div className="guide-section-label">Le basi</div>
            <h2>Le parole che <em>devi conoscere</em></h2>
            <p><strong>Compromesso (o preliminare)</strong> &mdash; il contratto con cui ti impegni ad acquistare. Se ti tiri indietro, perdi la caparra. Se si tira indietro il venditore, ti deve il doppio.</p>
            <p><strong>Caparra confirmatoria</strong> &mdash; la somma versata al compromesso (tipicamente 5-10% del prezzo). &Egrave; diversa dall&apos;&ldquo;acconto&rdquo;: ha conseguenze legali precise.</p>
            <p><strong>Rogito</strong> &mdash; l&apos;atto notarile definitivo. La casa passa di propriet&agrave;. Avviene dal notaio, in presenza di entrambe le parti.</p>
            <p><strong>Agevolazioni prima casa</strong> &mdash; le imposte ridotte se &egrave; la tua prima casa e rispetti i requisiti.</p>
            <p><strong>Rendita catastale</strong> &mdash; il valore fiscale dell&apos;immobile usato per calcolare le imposte. Di solito molto inferiore al prezzo di mercato.</p>
            <p><strong>Pre-delibera</strong> &mdash; la risposta preliminare della banca che conferma la disponibilit&agrave; a finanziarti. Non &egrave; ancora il contratto definitivo.</p>
          </div>

          <div className="guide-section rv" id="iter">
            <div className="guide-section-label">Procedura</div>
            <h2>Come funziona, <em>dall&apos;inizio alla fine</em></h2>

            <h3>Passo 1: Trova la casa e tratta il prezzo</h3>
            <p>Visita pi&ugrave; immobili, confronta i prezzi di mercato della zona, tratta. Non avere fretta: una casa comprata male &egrave; difficile da correggere.</p>

            <h3>Passo 2: Chiedi la pre-delibera alla banca</h3>
            <p>Prima di firmare qualsiasi cosa, vai in banca e chiedi la pre-delibera. Sapere quanto la banca &egrave; disposta a prestarti ti evita brutte sorprese.</p>

            <h3>Passo 3: Verifica l&apos;immobile</h3>
            <p>Controlla visura catastale, visura ipotecaria (niente vincoli), conformit&agrave; urbanistica (niente abusi edilizi) e APE (attestato di prestazione energetica).</p>

            <h3>Passo 4: Firma il compromesso</h3>
            <p>Con compromesso e caparra confirmatoria ci si vincola all&apos;acquisto. Aggiungi sempre la <strong>clausola sospensiva</strong> &ldquo;subordinato al mutuo&rdquo;.</p>

            <h3>Passo 5: Firma il mutuo e il rogito</h3>
            <p>Dal notaio si firma prima l&apos;atto di mutuo, poi il rogito. Il notaio verifica tutto, trascrive l&apos;atto e incassa le imposte.</p>

            <div className="guide-callout warn">
              <strong>Non firmare il compromesso prima della pre-delibera.</strong> Se la banca rifiuta il mutuo e nel compromesso non c&apos;&egrave; la clausola sospensiva, perdi la caparra. Aspetta sempre la pre-delibera prima di impegnarti.
            </div>
          </div>

          <div className="guide-section rv" id="prima-casa">
            <div className="guide-section-label">Agevolazioni</div>
            <h2>Bonus <em>prima casa</em></h2>
            <p>Con le agevolazioni, l&apos;<strong>imposta di registro</strong> &egrave; del <strong>2%</strong> sul valore catastale (non sul prezzo di vendita). Senza agevolazioni &egrave; il 9%. Se compri dal costruttore: IVA 4% (contro 10%). Le imposte ipotecaria e catastale sono fisse a 50&euro; ciascuna.</p>
            <p>Condizioni: l&apos;immobile nel Comune dove hai la residenza (o lavori), non essere proprietario esclusivo di un&apos;altra casa nello stesso Comune, non aver gi&agrave; usato le agevolazioni per un altro immobile che possiedi.</p>
            <p>Dopo il rogito hai <strong>18 mesi</strong> per trasferire la residenza nel Comune.</p>
            <div className="guide-callout">
              <strong>Esempio di risparmio:</strong> su una casa da 200.000&euro; con valore catastale di 80.000&euro; &mdash; con agevolazioni paghi 1.600&euro; (2%). Senza: 7.200&euro; (9%). Risparmio: <strong>5.600&euro;</strong>.
            </div>
          </div>

          <div className="guide-section rv" id="costi">
            <div className="guide-section-label">I numeri</div>
            <h2>Tutti i costi <em>da mettere in conto</em></h2>
            <p><strong>Imposta di registro (o IVA):</strong> 2% (prima casa da privato) o 4% (da costruttore). Senza agevolazioni: 9% o 10%.</p>
            <p><strong>Notaio:</strong> 1.500&ndash;4.000&euro;. Se c&apos;&egrave; anche il mutuo, il notaio fa due atti e il costo aumenta.</p>
            <p><strong>Agenzia immobiliare:</strong> tipicamente 2-3% del prezzo. Su 200.000&euro; sono 4.000-6.000&euro;.</p>
            <p><strong>Perizia bancaria:</strong> 200-500&euro;, obbligatoria per il mutuo.</p>
            <p><strong>Assicurazioni mutuo:</strong> incendio e scoppio (obbligatoria) + vita (facoltativa). 200-600&euro;/anno.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
              <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">COSTI SU CASA DA 200.000&euro; (prima casa)</text>
                <rect x="16" y="50" width="308" height="28" rx="6" fill="#2D8A6E"/><text x="28" y="70" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Anticipo (20%): 40.000&euro;</text>
                <rect x="16" y="84" width="200" height="28" rx="6" fill="#E8724A"/><text x="28" y="104" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Agenzia (3%): 6.000&euro;</text>
                <rect x="16" y="118" width="140" height="28" rx="6" fill="#5B7EC5"/><text x="28" y="138" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Notaio: ~3.500&euro;</text>
                <rect x="16" y="152" width="100" height="28" rx="6" fill="#8B6CC1"/><text x="28" y="172" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Imposte: ~1.800&euro;</text>
                <rect x="16" y="190" width="308" height="24" rx="6" fill="#1A1A2E"/><text x="170" y="207" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="700">Totale da avere: ~55.000&ndash;63.000&euro;</text>
              </svg>
            </div>

            <div className="guide-callout">
              <strong>La regola del 10%:</strong> prevedi di avere il <strong>20% del prezzo</strong> (anticipo) pi&ugrave; un <strong>10% aggiuntivo</strong> per le spese accessorie. Su 200.000&euro;: 40.000 + 20.000 = 60.000&euro; da avere in tasca.
            </div>
          </div>

          <div className="guide-section rv" id="mutuo">
            <div className="guide-section-label">Il mutuo</div>
            <h2>Il mutuo: <em>quello che devi sapere</em></h2>
            <p>La banca finanzia massimo l&apos;<strong>80% del valore</strong> stimato dal perito (che pu&ograve; essere inferiore al prezzo). Devi avere almeno il 20% come anticipo.</p>
            <p>Il <strong>tasso fisso</strong> &egrave; quasi sempre la scelta migliore per la prima casa: la rata resta uguale per tutta la durata. Il <strong>tasso variabile</strong> pu&ograve; convenire solo se prevedi di estinguere in meno di 10 anni.</p>
            <p>La rata non dovrebbe superare il <strong>30-35% del reddito netto mensile</strong>: questa &egrave; la soglia che le banche usano.</p>
            <div className="guide-callout">
              <strong>Confronta pi&ugrave; banche.</strong> Chiedi preventivi a 3-4 istituti e usa un comparatore online. La differenza di tasso pu&ograve; valere decine di migliaia di euro sull&apos;intera durata.
            </div>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Matteo</em></h2>
            <p>Matteo ha 34 anni, stipendio netto 2.000&euro;/mese. Trova un appartamento a Roma da 250.000&euro;. &Egrave; la prima casa.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Costi da sostenere</strong>
                Anticipo (20%): 50.000&euro;<br />
                Imposta registro (2% su ~90.000&euro;): 1.800&euro;<br />
                Notaio (compravendita + mutuo): ~3.500&euro;<br />
                Agenzia (3%): 7.500&euro;<br />
                Perizia + spese istruttoria: ~500&euro;
              </div>
              <div className="guide-compare-item after">
                <strong>Risultato</strong>
                Mutuo: 200.000&euro; in 25 anni<br />
                Rata mensile (~3% fisso): ~950&euro;<br />
                Rata/reddito: 47% (alto!)<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Totale da avere: ~63.300&euro;</strong>
              </div>
            </div>
            <p>La rata di Matteo &egrave; sopra il 30% del reddito: la banca potrebbe richiedere un garante o rifiutare. Alternativa: allungare a 30 anni (~830&euro;/mese) o cercare una casa meno costosa.</p>
          </div>

          <div className="guide-section rv" id="errori">
            <div className="guide-section-label">Attenzione</div>
            <h2>Gli errori <em>pi&ugrave; comuni</em></h2>
            <div className="guide-callout warn" style={{marginTop:'0'}}>
              <strong>Firmare il compromesso senza pre-delibera.</strong> Se la banca rifiuta il mutuo e non c&apos;&egrave; la clausola sospensiva, perdi la caparra.
            </div>
            <div className="guide-callout warn">
              <strong>Non verificare la situazione urbanistica.</strong> Abusi edilizi possono rendere l&apos;immobile impossibile da vendere in futuro. Fai controllare da un tecnico prima del compromesso.
            </div>
            <div className="guide-callout warn">
              <strong>Dimenticare di trasferire la residenza.</strong> Hai 18 mesi. Se te ne dimentichi, l&apos;Agenzia delle Entrate ti recupera la differenza d&apos;imposta con sanzioni e interessi.
            </div>
            <div className="guide-callout warn">
              <strong>Sottovalutare i costi accessori.</strong> Notaio, agenzia, perizia e imposte si aggiungono al prezzo. Prevedi sempre il 10% extra.
            </div>
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
              <Link href="/imu" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">IMU 2026</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="86" width="140" height="5" rx="2.5" fill="#E8E0D4"/><path d="M60 120L100 90l40 30v40H60z" fill="#E8724A" opacity=".06"/></svg>
                </div>
                <h4>IMU 2026</h4>
                <p>Dopo l&apos;acquisto, capisci quando dovrai pagare l&apos;IMU.</p>
              </Link>
              <Link href="/ristrutturare" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Ristrutturare</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="110" width="120" height="28" rx="6" fill="#2D8A6E" opacity=".12"/><text x="116" y="128" textAnchor="middle" fill="#2D8A6E" fontFamily="sans-serif" fontSize="10" fontWeight="600">Bonus 50%</text></svg>
                </div>
                <h4>Ristrutturare Casa</h4>
                <p>Bonus ristrutturazione 50%, Ecobonus e permessi comunali.</p>
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
