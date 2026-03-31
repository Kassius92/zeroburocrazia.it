'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideBonusNidoContent({ faqItems }) {
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
            <h1>Bonus Asilo Nido 2026: Importi, Requisiti e Come Fare Domanda</h1>
            <p className="guide-hero-sub">Rimborso fino a 3.600&euro;/anno per la retta dell&apos;asilo nido. Chi ha diritto, importi per fascia ISEE e come fare domanda all&apos;INPS.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>8 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="60" width="110" height="80" rx="12" fill="#E8724A" opacity=".06" stroke="#E8724A" strokeWidth="1.5" opacity=".15"/><circle cx="80" cy="95" r="12" fill="#8B5CF6" opacity=".12"/><circle cx="105" cy="95" r="10" fill="#2D8A6E" opacity=".12"/><circle cx="125" cy="95" r="8" fill="#E8724A" opacity=".12"/><rect x="55" y="150" width="90" height="20" rx="6" fill="#2D8A6E" opacity=".1"/><text x="100" y="164" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="600">Max 3.600&euro;/anno</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; il bonus nido e come funziona il rimborso mensile</li>
                <li>Importi per ISEE: da 1.500&euro; a 3.600&euro;/anno</li>
                <li>Requisiti e come fare domanda su INPS.it</li>
                <li>Caricamento ricevute mensili: come funziona</li>
                <li>Un esempio reale: Sofia, 2.992&euro; risparmiati in un anno</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; il bonus nido</a>
              <a href="#importi">Importi per fascia ISEE</a>
              <a href="#requisiti">Requisiti</a>
              <a href="#domanda">Come fare domanda</a>
              <a href="#esempio">Esempio: il caso di Sofia</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; il <em>bonus asilo nido</em></h2>
            <p>Il bonus asilo nido &egrave; un contributo mensile che l&apos;INPS eroga per rimborsare parzialmente le rette dell&apos;asilo nido. Non &egrave; automatico: devi fare domanda e caricare le ricevute di pagamento mese per mese. L&apos;INPS le verifica e rimborsa entro 30 giorni.</p>
            <p>Vale per i bambini fino a <strong>3 anni</strong> (36 mesi), sia nidi pubblici che privati autorizzati. Include micronidi, sezioni primavera e nidi in famiglia. Esclusi centri estivi, pre-scuola e post-scuola.</p>
            <p>Dal 2026 la domanda accolta <strong>non va rinnovata ogni anno</strong>: resta valida fino ad agosto dell&apos;anno in cui il bambino compie 3 anni. Devi per&ograve; confermare le mensilit&agrave; e aggiornare l&apos;<Link href="/isee" style={{color:'var(--green)',fontWeight:600}}>ISEE</Link> ogni anno.</p>
            <div className="guide-callout warn">
              <strong>Bonus nido e detrazione IRPEF sono alternativi.</strong> Non puoi avere entrambi per lo stesso bambino nello stesso anno. Il bonus nido conviene quasi sempre perch&eacute; vale di pi&ugrave; della detrazione IRPEF del 19%.
            </div>
          </div>

          <div className="guide-section rv" id="importi">
            <div className="guide-section-label">Quanto spetta</div>
            <h2>Importi per <em>fascia ISEE</em></h2>
            <p>L&apos;importo dipende dall&apos;<strong>ISEE minorenni</strong> (non l&apos;ISEE ordinario).</p>
            <p><strong>ISEE sotto 25.001&euro;:</strong> fino a <strong>3.000&euro;/anno</strong> (272&euro;/mese, 11 mesi). Per i nati dal 2024 con un fratello under 10 nel nucleo: fino a <strong>3.600&euro;/anno</strong> (327&euro;/mese).</p>
            <p><strong>ISEE tra 25.001 e 40.000&euro;:</strong> fino a <strong>2.500&euro;/anno</strong> (227&euro;/mese).</p>
            <p><strong>ISEE sopra 40.000&euro; o senza ISEE:</strong> <strong>1.500&euro;/anno</strong> (136&euro;/mese).</p>
            <p>Il rimborso non pu&ograve; superare la spesa effettiva: se la retta &egrave; 200&euro; e il contributo spettante &egrave; 272&euro;, ricevi 200&euro;.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#F0E8FF,#e4d9f7)'}}>
              <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#8B5CF6" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">IMPORTI BONUS NIDO 2026</text>
                <rect x="16" y="50" width="308" height="32" rx="8" fill="#8B5CF6"/>
                <text x="28" y="72" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">ISEE &le; 25k + fratello under 10: 3.600&euro;/anno</text>
                <rect x="16" y="90" width="280" height="32" rx="8" fill="#2D8A6E"/>
                <text x="28" y="112" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">ISEE &le; 25.000&euro;: 3.000&euro;/anno (272&euro;/mese)</text>
                <rect x="16" y="130" width="220" height="32" rx="8" fill="#E8724A"/>
                <text x="28" y="152" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">ISEE 25-40k: 2.500&euro;/anno (227&euro;/mese)</text>
                <rect x="16" y="170" width="160" height="32" rx="8" fill="#8A857C"/>
                <text x="28" y="192" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">ISEE &gt; 40k: 1.500&euro;/anno</text>
              </svg>
            </div>

            <div className="guide-callout">
              <strong>Presenta l&apos;ISEE il prima possibile.</strong> Senza ISEE ricevi il minimo (136&euro;/mese). L&apos;adeguamento non &egrave; retroattivo: i mesi gi&agrave; pagati al minimo restano al minimo.
            </div>
          </div>

          <div className="guide-section rv" id="requisiti">
            <div className="guide-section-label">Chi ne ha diritto</div>
            <h2><em>Requisiti</em></h2>
            <p>Ha diritto chi: ha un figlio che frequenta un nido pubblico o privato autorizzato; il bambino ha meno di 3 anni; il richiedente &egrave; residente in Italia; l&apos;asilo &egrave; autorizzato dalla Regione o dal Comune.</p>
            <p>Spetta a tutti: dipendenti, autonomi, pensionati, disoccupati, stranieri con permesso di soggiorno. L&apos;ISEE cambia solo l&apos;importo, non il diritto.</p>
            <p>Per i bambini con <strong>gravi patologie croniche</strong> che non possono frequentare il nido, il bonus copre l&apos;assistenza domiciliare certificata, erogato in un&apos;unica soluzione.</p>
          </div>

          <div className="guide-section rv" id="domanda">
            <div className="guide-section-label">Procedura</div>
            <h2>Come fare <em>domanda</em></h2>

            <h3>Passo 1: Fai l&apos;ISEE minorenni</h3>
            <p>Al CAF o online su INPS con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link>. Specifica &ldquo;ISEE per prestazioni rivolte ai minorenni&rdquo;. Presentalo prima possibile.</p>

            <h3>Passo 2: Presenta la domanda su INPS.it</h3>
            <p>Accedi con SPID o CIE. Cerca &ldquo;Bonus asilo nido&rdquo;. Compila il modulo con dati del bambino, nido frequentato e IBAN per il rimborso. La domanda vale fino ai 3 anni del bambino.</p>

            <h3>Passo 3: Carica le ricevute ogni mese</h3>
            <p>Ogni mese carica la ricevuta di pagamento della retta sul portale INPS. L&apos;INPS la verifica e rimborsa entro 30 giorni. Pi&ugrave; sei puntuale, prima ricevi i soldi.</p>

            <h3>Passo 4: Aggiorna l&apos;ISEE ogni anno</h3>
            <p>L&apos;ISEE ha validit&agrave; annuale. Tra gennaio e febbraio aggiornalo per mantenere l&apos;importo corretto.</p>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Sofia</em></h2>
            <p>Sofia ha 28 anni, ha una bambina di 14 mesi al nido privato autorizzato a 380&euro;/mese. ISEE minorenni: 22.000&euro;. Ha presentato domanda a gennaio con ISEE gi&agrave; disponibile.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Spesa</strong>
                Retta nido mensile: 380&euro;<br />
                Retta annua (11 mesi): 4.180&euro;<br />
                ISEE minorenni: 22.000&euro;
              </div>
              <div className="guide-compare-item after">
                <strong>Rimborso INPS</strong>
                Contributo spettante: 272&euro;/mese<br />
                Rimborso annuo (11 mesi): 2.992&euro;<br />
                Costo netto del nido: 108&euro;/mese<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Risparmio: 2.992&euro;/anno</strong>
              </div>
            </div>
            <p>Sofia paga solo 108&euro;/mese di tasca sua invece di 380&euro;. Il rimborso arriva ogni mese sul conto corrente, entro 30 giorni dal caricamento della ricevuta.</p>
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
              <Link href="/figlio" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#F0E8FF,#e4d9f7)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Aspetto un figlio</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="92" width="140" height="5" rx="2.5" fill="#E8E0D4"/></svg>
                </div>
                <h4>Aspetto un Figlio</h4>
                <p>Tutti i bonus e i congedi quando nasce un figlio.</p>
              </Link>
              <Link href="/assegno-unico" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Assegno Unico</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="120" width="120" height="28" rx="6" fill="#8B5CF6" opacity=".12"/><text x="116" y="138" textAnchor="middle" fill="#8B5CF6" fontFamily="sans-serif" fontSize="10" fontWeight="600">Cumulabile col bonus nido</text></svg>
                </div>
                <h4>Assegno Unico</h4>
                <p>Cumulabile col bonus nido. Scopri come ottenerlo.</p>
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
