'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideBonusBolletteContent({ faqItems }) {
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
            <div className="guide-crumb">
              <Link href="/guide">Guide</Link>
              <span className="guide-crumb-sep">&rsaquo;</span>
              <span>Casa</span>
            </div>
            <div className="guide-hero-top">
              <span className="guide-tag casa">Casa</span>
              <span className="guide-hero-date">Mar 2026</span>
            </div>
            <h1>Come Ottenere il Bonus Bollette nel 2026: Requisiti ISEE e Importi</h1>
            <p className="guide-hero-sub">Luce, gas, acqua e TARI: come ottenere lo sconto automatico in bolletta. Non serve fare domanda &mdash; basta l&apos;ISEE.</p>
            <div className="guide-hero-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                10 min di lettura
              </span>
            </div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="40" width="80" height="120" rx="8" fill="#F59E0B" opacity=".12"/><path d="M100 70v40" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round"/><circle cx="100" cy="125" r="8" fill="#F59E0B" opacity=".3"/><path d="M85 60h30M90 55h20" stroke="#2D8A6E" strokeWidth="2" strokeLinecap="round" opacity=".4"/></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">

          {/* KEY TAKEAWAYS */}
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; il bonus bollette e perch&eacute; &egrave; automatico dal 2021</li>
                <li>Le soglie ISEE 2026 (9.796&euro; e 20.000&euro;)</li>
                <li>Quanto vale: luce, gas, acqua e TARI &mdash; fino a 614&euro;/anno</li>
                <li>Un esempio reale: Marco, 614&euro; risparmiati senza fare nulla</li>
                <li>Casi particolari: affitto, gas condominiale, disagio fisico</li>
              </ul>
            </div>
          </div>

          {/* INDICE */}
          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; il bonus bollette</a>
              <a href="#chi">Chi ne ha diritto</a>
              <a href="#quanto">Quanto vale</a>
              <a href="#come">Come si ottiene</a>
              <a href="#esempio">Esempio: il caso di Marco</a>
              <a href="#casi">Casi particolari</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          {/* COS'È */}
          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; il <em>bonus bollette</em></h2>

            <p>Il bonus bollette (ufficialmente <strong>bonus sociale elettrico e gas</strong>) &egrave; uno sconto che lo Stato ti applica direttamente in bolletta se la tua famiglia ha un reddito basso. Non &egrave; un rimborso, non &egrave; un voucher &mdash; &egrave; uno sconto automatico che vedi in bolletta alla voce &ldquo;Compensazione Bonus Sociale&rdquo;.</p>

            <p>Dal 2021 <strong>non devi pi&ugrave; fare domanda</strong>. Se fai l&apos;<Link href="/isee" style={{color:'var(--green)',fontWeight:600}}>ISEE</Link> e rientri nelle soglie, il bonus si attiva da solo. L&apos;INPS manda i tuoi dati all&apos;ARERA, l&apos;ARERA li incrocia con le tue utenze e dice al fornitore di applicare lo sconto.</p>

            <p>Il bonus copre quattro servizi: <strong>luce, gas, acqua e rifiuti (TARI)</strong>. Si attivano tutti insieme con un unico ISEE sotto soglia. In totale, una famiglia di 4 persone pu&ograve; risparmiare oltre 600&euro; all&apos;anno.</p>

            <h3>Le parole che devi conoscere</h3>

            <p><strong>ARERA</strong> &mdash; l&apos;Autorit&agrave; che regola energia, gas e acqua. Decide importi e regole dei bonus sociali ogni anno.</p>
            <p><strong>DSU</strong> &mdash; Dichiarazione Sostitutiva Unica, il modulo che compili per ottenere l&apos;ISEE. Si fa gratis al CAF o online su inps.it con SPID.</p>
            <p><strong>SII</strong> &mdash; Sistema Informativo Integrato, la banca dati che incrocia i tuoi dati INPS con le tue utenze per attivare il bonus automaticamente.</p>
            <p><strong>Zona climatica</strong> &mdash; l&apos;Italia &egrave; divisa in zone (da A a F) in base al clima. Pi&ugrave; fa freddo, pi&ugrave; alto sar&agrave; il bonus gas.</p>

            <div className="guide-callout">
              <strong>Senza ISEE non c&apos;&egrave; bonus:</strong> non importa quanto guadagni poco. Se non presenti la DSU, il sistema non sa che esisti e non ti applica nessuno sconto. L&apos;ISEE si fa gratis al CAF o online con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link> in 15 minuti. Ogni mese che passa senza ISEE &egrave; un mese di bonus perso.
            </div>
          </div>

          {/* CHI NE HA DIRITTO */}
          <div className="guide-section rv" id="chi">
            <div className="guide-section-label">Requisiti</div>
            <h2>Chi ne ha <em>diritto</em></h2>

            <p><strong>Soglia ISEE 2026:</strong> fino a <strong>9.796&euro;</strong> per famiglie con massimo 3 figli a carico (salita da 9.530&euro; nel 2025). Per famiglie numerose con almeno 4 figli, la soglia sale a <strong>20.000&euro;</strong>.</p>

            <p><strong>Bolletta intestata a te:</strong> il contratto di luce e gas deve essere intestato a te o a un componente del tuo nucleo familiare ISEE. L&apos;utenza deve essere a uso domestico e la fornitura deve essere attiva.</p>

            <div className="guide-callout warn">
              <strong>Attenzione all&apos;intestatario.</strong> Questo &egrave; l&apos;errore pi&ugrave; comune. Se vivi in affitto e la bolletta &egrave; intestata al padrone di casa, non ricevi il bonus anche se il tuo ISEE &egrave; bassissimo. La soluzione: fai la voltura della bolletta a tuo nome. Costa poco e ti sblocca il bonus per sempre.
            </div>
          </div>

          {/* QUANTO VALE */}
          <div className="guide-section rv" id="quanto">
            <div className="guide-section-label">Importi</div>
            <h2>Quanto <em>vale</em></h2>

            <h3>Bonus elettrico (importi annuali 2026)</h3>
            <p>1&ndash;2 persone: circa <strong>168&euro;/anno</strong>. 3&ndash;4 persone: circa <strong>219&euro;/anno</strong>. Oltre 4 persone: circa <strong>241&euro;/anno</strong>. A questi si aggiunge il contributo straordinario del decreto bollette 2026: fino a <strong>115&euro;</strong>. Totale possibile: circa <strong>315&euro; di risparmio sulla luce</strong>.</p>

            <h3>Bonus gas</h3>
            <p>Dipende da quante persone siete, per cosa usate il gas e in quale zona climatica vivete. In media, una famiglia di 3-4 persone in zona E (Milano, Torino) con riscaldamento e cucina riceve circa <strong>140&ndash;200&euro;/anno</strong>. Lo sconto &egrave; pi&ugrave; alto nelle bollette invernali.</p>

            <h3>Bonus acqua e TARI</h3>
            <p>Con lo stesso ISEE ricevi anche il <strong>bonus idrico</strong>: 50 litri gratuiti al giorno per componente. Dal 2026 &egrave; attivo anche il <strong>bonus TARI</strong>: 25% di sconto sulla tassa rifiuti, automatico con lo stesso ISEE sotto soglia.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#FEF3C7,#fde68a)'}}>
              <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#92400E" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">RISPARMIO ANNUO (4 persone, ISEE basso)</text>
                <rect x="16" y="50" width="308" height="32" rx="8" fill="#F59E0B"/>
                <text x="28" y="72" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Bonus luce: ~219&euro; + extra 115&euro; = ~334&euro;</text>
                <rect x="16" y="90" width="240" height="32" rx="8" fill="#E8724A"/>
                <text x="28" y="112" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Bonus gas: ~150&euro;</text>
                <rect x="16" y="130" width="180" height="32" rx="8" fill="#5B7EC5"/>
                <text x="28" y="152" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Bonus acqua + TARI: ~130&euro;</text>
                <rect x="16" y="178" width="308" height="32" rx="8" fill="#2D8A6E"/>
                <text x="28" y="200" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="700">TOTALE: ~614&euro;/anno</text>
              </svg>
            </div>
          </div>

          {/* COME SI OTTIENE */}
          <div className="guide-section rv" id="come">
            <div className="guide-section-label">Procedura</div>
            <h2>Come si <em>ottiene</em></h2>

            <p>Il bonus &egrave; automatico. L&apos;unica cosa che devi fare &egrave; l&apos;ISEE.</p>

            <h3>Passo 1: Presenta la DSU</h3>
            <p>Online su inps.it con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link> (15 minuti) o gratis al CAF. Fallo il prima possibile: ogni mese di ritardo &egrave; un mese di bonus perso.</p>

            <h3>Passo 2: L&apos;INPS calcola il tuo ISEE</h3>
            <p>Entro 3-5 giorni. Se &egrave; sotto soglia, invia automaticamente i dati ad ARERA e al SII.</p>

            <h3>Passo 3: Il SII trova le tue utenze</h3>
            <p>Incrocia i tuoi dati con le bollette intestate a te. Quando trova un match, comunica al fornitore di applicare lo sconto.</p>

            <h3>Passo 4: Lo sconto compare in bolletta</h3>
            <p>Entro 3-4 mesi dalla presentazione dell&apos;ISEE. Il bonus &egrave; <strong>retroattivo al 1&deg; gennaio</strong>: se presenti l&apos;ISEE a marzo, recuperi anche gennaio e febbraio in un&apos;unica soluzione.</p>

            <div className="guide-callout">
              <strong>Fai l&apos;ISEE a gennaio.</strong> Pi&ugrave; aspetti, pi&ugrave; mesi di bonus perdi nei tempi tecnici. Se lo fai a gennaio, ricevi il primo sconto ad aprile. Se lo fai a giugno, aspetti settembre. Al CAF &egrave; gratis e ci metti mezz&apos;ora.
            </div>
          </div>

          {/* ESEMPIO */}
          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Marco</em></h2>

            <p>Marco vive a Bari (zona climatica C) con la moglie e due figli. ISEE di 8.500&euro;. Usano il gas per cucina e riscaldamento. Non ha fatto nessuna domanda: ha solo presentato l&apos;ISEE al CAF a gennaio.</p>

            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Situazione</strong>
                Zona climatica C (Bari)<br />
                4 persone nel nucleo<br />
                ISEE: 8.500&euro;<br />
                Gas per cucina + riscaldamento
              </div>
              <div className="guide-compare-item after">
                <strong>Risparmio annuo</strong>
                Bonus luce: 219&euro; + extra 115&euro;<br />
                Bonus gas (zona C): ~150&euro;<br />
                Bonus acqua + TARI: ~130&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Totale: ~614&euro;/anno</strong>
              </div>
            </div>

            <p>Marco non ha fatto <strong>nessuna domanda</strong>. Ha solo presentato l&apos;ISEE al CAF a gennaio. Tutto il resto &egrave; stato automatico. Zero costi, zero burocrazia.</p>
          </div>

          {/* CASI PARTICOLARI */}
          <div className="guide-section rv" id="casi">
            <div className="guide-section-label">Eccezioni</div>
            <h2>Casi <em>particolari</em></h2>

            <p><strong>Gas condominiale centralizzato:</strong> se il riscaldamento &egrave; centralizzato, il sistema non trova la tua utenza gas. Riceverai una lettera dall&apos;INPS per comunicare il codice PDR condominiale. Il bonus gas arriva poi come bonifico domiciliato (ritiri i soldi alle Poste).</p>

            <p><strong>Bonus disagio fisico:</strong> chi usa apparecchiature elettromedicali salvavita (ventilatori, dialisi domiciliare) ha diritto a un bonus separato <strong>senza limiti di ISEE</strong>. L&apos;importo pu&ograve; superare i 500&euro;/anno. Si richiede al Comune o al CAF con certificato ASL.</p>

            <p><strong>Se perdi il lavoro a met&agrave; anno:</strong> se il tuo ISEE ordinario &egrave; troppo alto, ma il tuo reddito &egrave; calato di almeno il 25%, puoi fare l&apos;<Link href="/isee" style={{color:'var(--green)',fontWeight:600}}>ISEE corrente</Link>. Aggiorna i redditi alla situazione attuale e ti permette di rientrare nelle soglie.</p>

            <div className="guide-callout">
              <strong>Verifica se il bonus &egrave; attivo:</strong> controlla in bolletta la voce &ldquo;Compensazione Bonus Sociale&rdquo;. Puoi anche verificare sul portale SGAte (sportellotelematicosgate.it) con SPID oppure chiamare il numero verde ARERA <strong>800.166.654</strong> (gratuito).
            </div>
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
              <Link href="/isee" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}>
                    <rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}} />
                    <rect x="56" y="36" width="60" height="8" rx="4" fill="#E8724A" opacity=".3" />
                    <text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">ISEE 2026</text>
                    <rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="56" y="86" width="140" height="5" rx="2.5" fill="#E8E0D4" />
                    <circle cx="68" cy="110" r="8" fill="#E4F3ED" />
                    <text x="68" y="113" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="bold">1</text>
                    <rect x="84" y="106" width="100" height="5" rx="2.5" fill="#E8E0D4" />
                    <circle cx="68" cy="132" r="8" fill="#E4F3ED" />
                    <text x="68" y="135" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="bold">2</text>
                    <rect x="84" y="128" width="80" height="5" rx="2.5" fill="#E8E0D4" />
                  </svg>
                </div>
                <h4>Come Fare l&apos;ISEE 2026</h4>
                <p>Senza ISEE niente bonus. Come farlo gratis in 15 minuti.</p>
              </Link>
              <Link href="/assegno-unico" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#F0E8FF,#e4d9f7)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}>
                    <rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}} />
                    <rect x="56" y="36" width="80" height="8" rx="4" fill="#8B5CF6" opacity=".3" />
                    <text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Assegno Unico</text>
                    <circle cx="80" cy="110" r="18" fill="#8B5CF6" opacity=".08" />
                    <circle cx="120" cy="110" r="18" fill="#8B5CF6" opacity=".08" />
                    <circle cx="100" cy="140" r="12" fill="#E8724A" opacity=".1" />
                    <rect x="160" y="96" width="100" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="160" y="108" width="80" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="160" y="120" width="90" height="5" rx="2.5" fill="#E8E0D4" />
                  </svg>
                </div>
                <h4>Assegno Unico Figli</h4>
                <p>Altro bonus legato all&apos;ISEE. Fino a 203&euro;/mese per figlio.</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="guide-section" style={{textAlign:'center',borderBottom:'none',paddingBottom:'0'}}>
            <Link href="/guide" className="cta-btn" style={{color:'#fff'}}>
              Esplora tutte le guide
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
