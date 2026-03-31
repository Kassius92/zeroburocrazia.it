'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideAssegnoUnicoContent({ faqItems }) {
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
              <span>Famiglia</span>
            </div>
            <div className="guide-hero-top">
              <span className="guide-tag famiglia">Famiglia</span>
              <span className="guide-hero-date">Mar 2026</span>
            </div>
            <h1>Assegno Unico 2026: Importi, Requisiti e Come Richiederlo</h1>
            <p className="guide-hero-sub">Quanto spetta per ogni figlio, come fare domanda INPS, maggiorazioni e novit&agrave; 2026. Spetta a tutti &mdash; anche senza ISEE.</p>
            <div className="guide-hero-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                12 min di lettura
              </span>
            </div>
          </div>
          <div className="guide-hero-img">
            <img src="/hero-assegno-unico.png" alt="Guida Assegno Unico 2026" width="400" height="400" />
          </div>
          </div>
        </div>

        <div className="guide-body">

          {/* KEY TAKEAWAYS */}
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; l&apos;Assegno Unico e perch&eacute; spetta a tutti (anche senza ISEE)</li>
                <li>Importi 2026: da 58&euro; a 203&euro; al mese per figlio</li>
                <li>Le maggiorazioni che si cumulano: neonati, disabilit&agrave;, famiglie numerose</li>
                <li>Un esempio reale: Sara e Luca, 6.100&euro; all&apos;anno per 2 figli</li>
                <li>Scadenza 30 giugno per gli arretrati</li>
              </ul>
            </div>
          </div>

          {/* INDICE */}
          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Come funziona</a>
              <a href="#importi">Importi 2026</a>
              <a href="#domanda">Come fare domanda</a>
              <a href="#esempio">Esempio: Sara e Luca</a>
              <a href="#errori">Gli errori da evitare</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          {/* COS'È */}
          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Come funziona <em>l&apos;Assegno Unico</em></h2>

            <p>L&apos;Assegno Unico e Universale &egrave; un contributo mensile che lo Stato paga a tutte le famiglie con figli a carico. &ldquo;Unico&rdquo; perch&eacute; ha sostituito tutti i vecchi bonus (assegni familiari, detrazioni per figli, bonus beb&egrave;). &ldquo;Universale&rdquo; perch&eacute; spetta a tutti &mdash; dipendenti, autonomi, disoccupati, incapienti. Nessuno escluso.</p>

            <p>Quanto prendi dipende dal tuo <Link href="/isee" style={{color:'var(--green)',fontWeight:600}}>ISEE</Link> e dall&apos;et&agrave; dei figli. Con ISEE sotto 17.468&euro; prendi <strong>203,80&euro; al mese</strong> per figlio minorenne. Senza ISEE ricevi il minimo garantito: 58,30&euro;. La differenza &egrave; enorme &mdash; quasi 4 volte tanto.</p>

            <p>L&apos;Assegno Unico non &egrave; tassato: non fa reddito ai fini IRPEF e non devi dichiararlo nel <Link href="/730" style={{color:'var(--green)',fontWeight:600}}>730</Link>. Parte dal <strong>7&deg; mese di gravidanza</strong> e dura fino ai <strong>21 anni</strong>. Per i figli con disabilit&agrave; non c&apos;&egrave; limite di et&agrave;.</p>

            <h3>Le parole che devi conoscere</h3>

            <p><strong>AUU</strong> &mdash; Assegno Unico Universale. Si chiede all&apos;INPS online o tramite patronato.</p>
            <p><strong>ISEE</strong> &mdash; determina l&apos;importo dell&apos;assegno: ISEE basso = importo alto. Si fa gratis al CAF.</p>
            <p><strong>Maggiorazione</strong> &mdash; importo aggiuntivo che si somma all&apos;assegno base in situazioni particolari: figli piccoli, disabilit&agrave;, famiglie numerose, genitori giovani o entrambi lavoratori.</p>
            <p><strong>Conguaglio</strong> &mdash; ricalcolo INPS quando arriva il tuo ISEE aggiornato. Se nei primi mesi hai preso il minimo e poi presenti un ISEE basso, ti pagano la differenza arretrata.</p>

            <div className="guide-callout">
              <strong>Novit&agrave; 2026:</strong> l&apos;Assegno Unico &egrave; <strong>escluso dal calcolo dell&apos;ISEE</strong>. Riceverlo non alza pi&ugrave; il tuo ISEE e non ti fa perdere altri bonus. Inoltre la franchigia sulla prima casa &egrave; salita a 91.500&euro; di valore catastale &mdash; molte famiglie avranno un ISEE pi&ugrave; basso e quindi un assegno pi&ugrave; alto.
            </div>
          </div>

          {/* IMPORTI */}
          <div className="guide-section rv" id="importi">
            <div className="guide-section-label">Quanto spetta</div>
            <h2>Importi <em>2026</em></h2>

            <p>Rivalutati del +1,4% rispetto al 2025 per adeguamento all&apos;inflazione.</p>

            <h3>Figli minorenni (0&ndash;17 anni)</h3>
            <p>ISEE fino a 17.468&euro;: <strong>203,80&euro;/mese</strong> per figlio (importo massimo). ISEE tra 17.468&euro; e 46.582&euro;: scala gradualmente. ISEE oltre 46.582&euro; o senza ISEE: <strong>58,30&euro;/mese</strong> (minimo garantito).</p>

            <h3>Figli maggiorenni (18&ndash;21 anni)</h3>
            <p>ISEE fino a 17.468&euro;: <strong>99,10&euro;/mese</strong>. ISEE oltre 46.582&euro;: 29,10&euro;/mese. Il figlio deve studiare, cercare lavoro, fare servizio civile o guadagnare meno di 8.000&euro;/anno.</p>

            <h3>Maggiorazioni (si sommano all&apos;importo base)</h3>
            <p>Figlio sotto 1 anno: <strong>+50%</strong> dell&apos;importo base. Figlio 1&ndash;3 anni (ISEE sotto 45.574&euro;): <strong>+88,80&euro;</strong>. 3 figli: +96,90&euro;. 4+ figli: <strong>+153&euro;</strong>. Madre sotto 21 anni: +20&euro;. Entrambi i genitori lavoratori: +30&euro;. Figlio con disabilit&agrave;: da +96,90&euro; a +122,80&euro; in base alla gravit&agrave;.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#F0E8FF,#e4d9f7)'}}>
              <svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#8B5CF6" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">IMPORTI PER FIGLIO MINORENNE</text>
                <rect x="16" y="50" width="308" height="32" rx="8" fill="#8B5CF6"/>
                <text x="28" y="72" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">ISEE &le; 17.468&euro;: 203,80&euro;/mese</text>
                <rect x="16" y="90" width="220" height="32" rx="8" fill="#E8724A"/>
                <text x="28" y="112" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">ISEE ~25.000&euro;: ~150&euro;/mese</text>
                <rect x="16" y="130" width="160" height="32" rx="8" fill="#5B7EC5"/>
                <text x="28" y="152" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">ISEE ~35.000&euro;: ~100&euro;/mese</text>
                <rect x="16" y="170" width="100" height="32" rx="8" fill="#8A857C"/>
                <text x="28" y="192" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Senza ISEE: 58&euro;</text>
                <text x="16" y="225" fill="#8B5CF6" fontFamily="sans-serif" fontSize="11" fontWeight="600">+ maggiorazioni: neonato +50%, under 3 +88&euro;, 3+ figli +96&euro;, disabilit&agrave; fino a +122&euro;</text>
              </svg>
            </div>

            <div className="guide-callout">
              <strong>Le maggiorazioni si cumulano tutte.</strong> Un neonato in una famiglia con 3 figli dove entrambi i genitori lavorano prende: importo base + 50% neonato + 88,80&euro; under 3 + 96,90&euro; terzo figlio + 30&euro; entrambi lavoratori. I numeri si sommano tutti.
            </div>
          </div>

          {/* COME FARE DOMANDA */}
          <div className="guide-section rv" id="domanda">
            <div className="guide-section-label">Procedura</div>
            <h2>Come fare <em>domanda</em></h2>

            <p>Se hai gi&agrave; una domanda attiva degli anni precedenti, si rinnova in automatico. Devi solo aggiornare l&apos;ISEE ogni anno.</p>

            <h3>Passo 1: Fai l&apos;ISEE</h3>
            <p>Al CAF (gratis) o online su inps.it con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link>. Senza ISEE prendi il minimo: 58,30&euro;/mese per figlio invece di 203,80&euro;.</p>

            <h3>Passo 2: Accedi al portale INPS</h3>
            <p>Con SPID, CIE o CNS. Cerca &ldquo;Assegno unico e universale&rdquo;.</p>

            <h3>Passo 3: Compila la domanda</h3>
            <p>Inserisci codice fiscale e data di nascita di ogni figlio. Per nascituri dal 7&deg; mese, allega il certificato medico. Indica l&apos;IBAN.</p>

            <h3>Passo 4: Aspetta il pagamento</h3>
            <p>L&apos;INPS accredita ogni mese, di solito tra il 17 e il 20. Per le nuove domande il primo pagamento arriva entro fine mese successivo.</p>

            <div className="guide-callout warn">
              <strong>Scadenza 30 giugno 2026.</strong> Se presenti la domanda entro il 30 giugno, hai diritto agli arretrati da marzo. Dopo il 30 giugno, l&apos;assegno parte dal mese della domanda e perdi i mesi precedenti. Non aspettare.
            </div>

            <div className="guide-callout">
              <strong>Non riesci col sito?</strong> Puoi fare domanda al patronato (ACLI, CGIL, CISL &mdash; gratis) oppure chiamando il contact center INPS al numero 803.164 (da fisso, gratuito) o 06.164.164 (da cellulare).
            </div>
          </div>

          {/* ESEMPIO */}
          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Sara e Luca</em></h2>

            <p>Sara e Luca vivono a Roma con 2 figli: Giulia (5 anni) e Matteo (2 anni). Sara lavora part-time (1.100&euro;/mese), Luca &egrave; impiegato (1.600&euro;/mese). Il loro ISEE &egrave; 19.000&euro;. Entrambi lavorano.</p>

            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Con ISEE (19.000&euro;)</strong>
                Base Giulia (5 anni): ~180&euro;/mese<br />
                Base Matteo (2 anni): ~180&euro;/mese<br />
                Maggiorazione under 3: +88,80&euro;<br />
                Entrambi lavoratori (&times;2): +60&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>~508&euro;/mese (~6.100&euro;/anno)</strong>
              </div>
              <div className="guide-compare-item after">
                <strong>Senza ISEE</strong>
                Base Giulia: 58,30&euro;/mese<br />
                Base Matteo: 58,30&euro;/mese<br />
                Nessuna maggiorazione under 3<br />
                Entrambi lavoratori: +30&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>~146&euro;/mese (~1.752&euro;/anno)</strong>
              </div>
            </div>

            <p>La differenza &egrave; di quasi <strong>4.350&euro; all&apos;anno</strong>. L&apos;ISEE si fa gratis al CAF in 30 minuti. Non c&apos;&egrave; motivo per non farlo.</p>
          </div>

          {/* ERRORI */}
          <div className="guide-section rv" id="errori">
            <div className="guide-section-label">Attenzione</div>
            <h2>Gli errori da <em>evitare</em></h2>

            <div className="guide-callout warn" style={{marginTop:'0'}}>
              <strong>Non presentare l&apos;ISEE.</strong> La differenza su un anno per un figlio &egrave; di 1.746&euro;. Per due figli, 3.492&euro;. L&apos;ISEE si fa gratis al CAF in 30 minuti.
            </div>

            <div className="guide-callout warn">
              <strong>Aggiornare l&apos;ISEE in ritardo.</strong> Se presenti l&apos;ISEE dopo febbraio, per i mesi senza ISEE aggiornato ricevi il minimo. Puoi recuperare gli arretrati solo se presenti entro il 30 giugno. Il consiglio: aggiorna l&apos;ISEE a gennaio, ogni anno.
            </div>

            <div className="guide-callout warn">
              <strong>Non sapere che spetta in gravidanza.</strong> Dal 7&deg; mese di gravidanza hai gi&agrave; diritto all&apos;assegno. Molti genitori lo scoprono solo dopo la nascita e perdono 2-3 mesi di pagamento.
            </div>

            <div className="guide-callout warn">
              <strong>Dimenticare le maggiorazioni.</strong> Molte famiglie non sanno che le maggiorazioni si cumulano. Verifica nella tua area INPS che tutte siano state applicate.
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
                    <circle cx="240" cy="44" r="16" fill="#2D8A6E" opacity=".9" />
                    <path d="M234 44l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h4>Come Fare l&apos;ISEE 2026</h4>
                <p>Senza ISEE prendi il minimo. Come farlo gratis in 15 minuti.</p>
              </Link>
              <Link href="/bonus-bollette" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FEF3C7,#fde68a)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}>
                    <rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}} />
                    <rect x="56" y="36" width="80" height="8" rx="4" fill="#F59E0B" opacity=".3" />
                    <text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Bonus Bollette</text>
                    <rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="56" y="92" width="140" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="56" y="120" width="150" height="28" rx="6" fill="#F59E0B" opacity=".12" />
                    <text x="131" y="138" textAnchor="middle" fill="#92400E" fontFamily="sans-serif" fontSize="10" fontWeight="600">~614&euro;/anno risparmiati</text>
                  </svg>
                </div>
                <h4>Bonus Bollette 2026</h4>
                <p>Altro bonus automatico con ISEE. Luce, gas, acqua e TARI.</p>
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
