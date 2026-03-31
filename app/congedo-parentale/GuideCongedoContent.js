'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideCongedoContent({ faqItems }) {
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
            <h1>Congedo Parentale nel 2026: Quanti Mesi, Quanto Pagano e Come Fare Domanda</h1>
            <p className="guide-hero-sub">Quanti mesi spettano, quanto ti paga l&apos;INPS, le novit&agrave; 2026 (80% per 3 mesi a testa) e come fare domanda online.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>10 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="75" cy="85" r="18" fill="#8B5CF6" opacity=".1"/><circle cx="125" cy="85" r="18" fill="#8B5CF6" opacity=".1"/><circle cx="100" cy="120" r="12" fill="#E8724A" opacity=".12"/><rect x="50" y="148" width="100" height="24" rx="6" fill="#2D8A6E" opacity=".1"/><text x="100" y="164" textAnchor="middle" fill="#2D8A6E" fontSize="10" fontWeight="600">3+3 mesi 80%</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Differenza tra congedo obbligatorio e congedo parentale</li>
                <li>Quanti mesi spettano: 6 a testa, 10-11 totali per la coppia</li>
                <li>Quanto ti pagano: 80%, 30% o nulla a seconda dei mesi</li>
                <li>Novit&agrave; 2026: 3 mesi all&apos;80% per ciascun genitore</li>
                <li>Un esempio reale: Anna e Luca, 11.220&euro; di indennit&agrave; in 9 mesi</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; il congedo parentale</a>
              <a href="#durata">Quanti mesi spettano</a>
              <a href="#indennita">Quanto ti paga l&apos;INPS</a>
              <a href="#novita">Novit&agrave; 2026</a>
              <a href="#come">Come fare domanda</a>
              <a href="#esempio">Esempio: Anna e Luca</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; il <em>congedo parentale</em></h2>
            <p>Il congedo parentale &egrave; quello che viene <strong>dopo</strong> il congedo obbligatorio (maternit&agrave; e paternit&agrave;): un periodo facoltativo in cui mamma o pap&agrave; possono assentarsi dal lavoro per stare con il bambino. Lo Stato ti paga una parte dello stipendio e il tuo posto &egrave; protetto.</p>
            <p>Non va confuso con il congedo obbligatorio: quello &egrave; imposto per legge (5 mesi alla mamma, 10 giorni al pap&agrave;). Il congedo parentale &egrave; una scelta: puoi prenderlo tutto, in parte, o non prenderlo. Puoi prendere giorni interi o anche solo ore.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>Congedo obbligatorio</strong> &mdash; maternit&agrave; (5 mesi, 80%) e paternit&agrave; (10 giorni, 100%). Non puoi rinunciarci.</p>
            <p><strong>Congedo parentale</strong> &mdash; l&apos;astensione facoltativa aggiuntiva. Fino a 10-11 mesi per la coppia, pagata dal 30% all&apos;80%.</p>
            <p><strong>Indennit&agrave;</strong> &mdash; la percentuale dello stipendio che l&apos;INPS ti paga durante il congedo.</p>
            <p><strong>Contribuzione figurativa</strong> &mdash; durante il congedo, l&apos;INPS accredita i contributi per la pensione. Non perdi anzianit&agrave; contributiva.</p>
          </div>

          <div className="guide-section rv" id="durata">
            <div className="guide-section-label">Durata</div>
            <h2>Quanti mesi <em>spettano</em></h2>
            <p>Ogni genitore ha diritto a un massimo di <strong>6 mesi</strong> individuali. I genitori insieme: massimo <strong>10 mesi totali</strong> (11 se il pap&agrave; prende almeno 3 mesi). Per i <strong>genitori single</strong>: limite di 11 mesi.</p>
            <p>Il congedo pu&ograve; essere usato fino ai <strong>12 anni del bambino</strong> (14 anni dal 2026 per i mesi indennizzati). Non deve essere continuativo: puoi prenderlo a spezzoni, a giorni o anche a ore. Spetta anche in caso di adozione o affidamento.</p>
            <div className="guide-callout">
              <strong>Puoi prenderlo a ore.</strong> Lavorare mezza giornata e stare con il bambino l&apos;altra met&agrave; &egrave; legittimo. Verifica le modalit&agrave; nel tuo CCNL.
            </div>
          </div>

          <div className="guide-section rv" id="indennita">
            <div className="guide-section-label">Quanto pagano</div>
            <h2>Quanto ti <em>paga l&apos;INPS</em></h2>
            <p>I <strong>primi 3 mesi</strong> (non trasferibili, per ciascun genitore): <strong>80%</strong> della retribuzione. Sono i mesi pi&ugrave; vantaggiosi: usali il prima possibile.</p>
            <p>I <strong>successivi 3 mesi</strong> (fino al sesto mese, entro i 6 anni): <strong>30%</strong> della retribuzione.</p>
            <p>I <strong>mesi rimanenti</strong> (tra 6 e 14 anni): non indennizzati dall&apos;INPS, salvo integrazione CCNL.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#F0E8FF,#e4d9f7)'}}>
              <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#8B5CF6" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">INDENNIT&Agrave; CONGEDO PARENTALE 2026</text>
                <rect x="16" y="50" width="308" height="36" rx="8" fill="#8B5CF6"/>
                <text x="28" y="74" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Primi 3 mesi: 80% dello stipendio</text>
                <rect x="16" y="94" width="220" height="36" rx="8" fill="#E8724A"/>
                <text x="28" y="118" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Successivi 3 mesi: 30%</text>
                <rect x="16" y="138" width="140" height="36" rx="8" fill="#8A857C"/>
                <text x="28" y="162" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Oltre: non indennizzati</text>
              </svg>
            </div>

            <div className="guide-callout warn">
              <strong>I 3 mesi all&apos;80% non sono trasferibili.</strong> Se uno dei due genitori non li usa, si perdono. Non possono passare all&apos;altro. Sono pensati per incentivare entrambi a prendersi cura del figlio.
            </div>
          </div>

          <div className="guide-section rv" id="novita">
            <div className="guide-section-label">Aggiornamenti</div>
            <h2>Novit&agrave; <em>2026</em></h2>
            <p>Dal 2026 il congedo parentale all&apos;<strong>80%</strong> sale a <strong>3 mesi per ciascun genitore</strong> (prima erano 2). Vale per chi termina il congedo di maternit&agrave; obbligatorio dal 1&deg; gennaio 2025 in poi.</p>
            <p>Il limite di et&agrave; per i mesi indennizzati &egrave; stato esteso a <strong>14 anni</strong> (era 12). I mesi pagati al 30% si possono usare fino ai 14 anni del bambino.</p>
            <p>Il congedo per <strong>malattia del figlio</strong> dal 2026 &egrave; illimitato sotto i 3 anni, e fino a 10 giorni per genitore all&apos;anno tra i 3 e i 14 anni. Non retribuito ma coperto da contribuzione figurativa.</p>
          </div>

          <div className="guide-section rv" id="come">
            <div className="guide-section-label">Procedura</div>
            <h2>Come fare <em>domanda</em></h2>

            <h3>Passo 1: Avvisa il datore di lavoro</h3>
            <p>Comunica per iscritto le date del congedo con almeno 5 giorni di preavviso (2 giorni se congedo a ore).</p>

            <h3>Passo 2: Fai domanda all&apos;INPS</h3>
            <p>Su inps.it con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link> o CIE. Cerca &ldquo;Congedo parentale&rdquo;. Compila il modulo indicando tipo di congedo, date e figlio.</p>

            <h3>Passo 3: Allega la documentazione</h3>
            <p>Certificato di nascita (gi&agrave; in possesso INPS se nato in Italia) o documentazione adozione/affido.</p>

            <h3>Passo 4: Ricevi l&apos;indennit&agrave;</h3>
            <p>L&apos;INPS paga direttamente o tramite il datore che anticipa e si rifonde. Dipende dall&apos;accordo col tuo datore.</p>

            <div className="guide-callout">
              <strong>Fai domanda in anticipo.</strong> L&apos;INPS pu&ograve; impiegare qualche settimana. Presentala almeno 2 settimane prima per evitare ritardi nel pagamento.
            </div>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Anna e Luca</em></h2>
            <p>Anna e Luca hanno un figlio di 8 mesi. Anna ha terminato il congedo di maternit&agrave; a settembre 2025. Entrambi vogliono stare con il bambino a turni.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Congedi presi</strong>
                Anna: 3 mesi all&apos;80% (1.800&euro;/mese)<br />
                Luca: 3 mesi all&apos;80% (2.200&euro;/mese)<br />
                Anna: 3 mesi al 30%
              </div>
              <div className="guide-compare-item after">
                <strong>Indennit&agrave; INPS</strong>
                Anna (80%): 4.320&euro;<br />
                Luca (80%): 5.280&euro;<br />
                Anna (30%): 1.620&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Totale: 11.220&euro; in 9 mesi</strong>
              </div>
            </div>
            <p>Il bambino non &egrave; mai stato solo: Anna e Luca si sono alternati a turni. Il posto di lavoro di entrambi &egrave; protetto. I contributi pensionistici sono stati accreditati dall&apos;INPS per tutti i 9 mesi.</p>
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
                <p>Tutti i bonus, congedi e documenti quando nasce un figlio.</p>
              </Link>
              <Link href="/assegno-unico" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Assegno Unico</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="120" width="120" height="28" rx="6" fill="#8B5CF6" opacity=".12"/><text x="116" y="138" textAnchor="middle" fill="#8B5CF6" fontFamily="sans-serif" fontSize="10" fontWeight="600">~200&euro;/mese</text></svg>
                </div>
                <h4>Assegno Unico</h4>
                <p>Il contributo mensile per ogni figlio a carico.</p>
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
