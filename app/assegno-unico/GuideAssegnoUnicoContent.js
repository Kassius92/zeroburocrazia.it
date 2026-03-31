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
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Famiglia</span></div>
            <div className="guide-hero-top"><span className="guide-tag famiglia">Famiglia</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Assegno Unico 2026: Importi, Requisiti e Come Richiederlo</h1>
            <p className="guide-hero-sub">Quanto spetta per ogni figlio, come fare domanda INPS, maggiorazioni e novit&agrave; 2026.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>12 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="80" cy="80" r="20" fill="#8B5CF6" opacity=".12"/><circle cx="120" cy="80" r="20" fill="#8B5CF6" opacity=".12"/><circle cx="100" cy="120" r="14" fill="#E8724A" opacity=".15"/><rect x="50" y="145" width="100" height="25" rx="6" fill="#2D8A6E" opacity=".1"/></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <h2>Come funziona l&apos;Assegno Unico</h2>
            <p>L&apos;Assegno Unico e Universale &egrave; un contributo mensile che lo Stato paga a tutte le famiglie con figli a carico. &ldquo;Unico&rdquo; perch&eacute; ha sostituito tutti i vecchi bonus (assegni familiari, detrazioni per figli, bonus beb&egrave;). &ldquo;Universale&rdquo; perch&eacute; spetta a tutti &mdash; dipendenti, autonomi, disoccupati, incapienti.</p>
            <p>Quanto prendi dipende dal tuo <Link href="/isee">ISEE</Link> e dall&apos;et&agrave; dei figli. Pi&ugrave; l&apos;ISEE &egrave; basso, pi&ugrave; alto &egrave; l&apos;importo. Con ISEE sotto 17.468&euro; prendi <strong>203,80&euro; al mese</strong> per figlio minorenne. Senza ISEE ricevi il minimo: 58,30&euro;.</p>
            <p>L&apos;Assegno Unico non &egrave; tassato e dal 2026 &egrave; escluso dal calcolo dell&apos;ISEE. Parte dal <strong>7&deg; mese di gravidanza</strong> e dura fino ai <strong>21 anni</strong>. Per i figli con disabilit&agrave; non c&apos;&egrave; limite di et&agrave;.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>AUU</strong> &mdash; Assegno Unico Universale. Si chiede all&apos;INPS online o tramite patronato.</p>
            <p><strong>ISEE</strong> &mdash; determina l&apos;importo: ISEE basso = importo alto. Si fa al CAF gratis.</p>
            <p><strong>Maggiorazione</strong> &mdash; importo aggiuntivo per figli piccoli, disabilit&agrave;, famiglie numerose, genitori giovani o entrambi lavoratori.</p>
            <p><strong>Conguaglio</strong> &mdash; ricalcolo INPS quando arriva il tuo ISEE aggiornato. Recuperi gli arretrati.</p>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><p><strong>Novit&agrave; 2026:</strong> l&apos;Assegno Unico &egrave; <strong>escluso dal calcolo dell&apos;ISEE</strong>. Riceverlo non alza pi&ugrave; il tuo ISEE e non ti fa perdere altri bonus.</p></div>
          </div>

          <div className="guide-section rv">
            <h2>Importi 2026</h2>
            <p style={{color:'var(--soft)',marginBottom:'16px'}}>Rivalutati del +1,4% rispetto al 2025.</p>
            <h3>Figli minorenni (0&ndash;17 anni)</h3>
            <p>ISEE fino a 17.468&euro;: <strong>203,80&euro;/mese</strong> per figlio. ISEE tra 17.468 e 46.582&euro;: scala gradualmente. ISEE oltre 46.582&euro; o senza ISEE: <strong>58,30&euro;/mese</strong> (minimo garantito).</p>
            <h3>Figli maggiorenni (18&ndash;21 anni)</h3>
            <p>ISEE fino a 17.468&euro;: <strong>99,10&euro;/mese</strong>. ISEE oltre 46.582&euro;: 29,10&euro;/mese. Il figlio deve studiare, cercare lavoro o guadagnare meno di 8.000&euro;/anno.</p>
            <h3>Maggiorazioni (si sommano all&apos;importo base)</h3>
            <p>Figlio sotto 1 anno: <strong>+50%</strong>. Figlio 1&ndash;3 anni (ISEE sotto 45.574&euro;): <strong>+88,80&euro;</strong>. 3 figli: +96,90&euro;. 4+ figli: <strong>+153&euro;</strong>. Madre sotto 21 anni: +20&euro;. Entrambi lavoratori: +30&euro;. Figlio con disabilit&agrave;: da +96,90&euro; a +122,80&euro;.</p>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><p><strong>Le maggiorazioni si cumulano tutte.</strong> Un neonato in una famiglia con 3+ figli dove entrambi i genitori lavorano accumula tutte le maggiorazioni contemporaneamente.</p></div>
          </div>

          <div className="guide-section rv" style={{background:'var(--ink)',color:'#fff',padding:'40px',borderRadius:'20px'}}>
            <h2 style={{color:'var(--green)'}}>L&apos;esempio di Sara e Luca</h2>
            <p><strong style={{color:'#FAF8F4'}}>Sara e Luca</strong> vivono a Roma con 2 figli: Giulia (5 anni) e Matteo (2 anni). ISEE 19.000&euro;. Entrambi lavorano.</p>
            <p>Base Giulia: ~180&euro;/mese. Base Matteo: ~180&euro;/mese. Maggiorazione Matteo under 3: +88,80&euro;. Entrambi lavoratori (&times;2): +60&euro;. <strong style={{color:'var(--green)'}}>Totale: ~508&euro;/mese (~6.100&euro;/anno)</strong></p>
            <p style={{opacity:'.6',fontSize:'14px'}}>Senza ISEE prenderebbero solo 116,60&euro;/mese: una differenza di quasi 4.700&euro; all&apos;anno.</p>
          </div>

          <div className="guide-section rv">
            <h2>Come fare domanda</h2>
            <p style={{color:'var(--soft)',marginBottom:'16px'}}>Se hai gi&agrave; una domanda attiva, si rinnova in automatico. Devi solo aggiornare l&apos;ISEE.</p>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>1. Fai l&apos;ISEE</strong><br/>Al CAF (gratis) o online su inps.it con SPID. Senza ISEE prendi il minimo.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>2. Accedi al portale INPS</strong><br/>Con SPID, CIE o CNS. Cerca &ldquo;Assegno unico e universale&rdquo;.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>3. Compila la domanda</strong><br/>Codice fiscale e data di nascita di ogni figlio. Per nascituri dal 7&deg; mese, allega il certificato medico. Indica l&apos;IBAN.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>4. Aspetta il pagamento</strong><br/>L&apos;INPS accredita ogni mese, di solito tra il 17 e il 20.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}><p><strong>Scadenza 30 giugno 2026.</strong> Se presenti la domanda entro il 30 giugno, hai diritto agli arretrati da marzo. Dopo il 30 giugno, perdi i mesi precedenti.</p></div>
          </div>

          <div className="guide-section rv">
            <h2>Errori da evitare</h2>
            <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}><p><strong>Non presentare l&apos;ISEE.</strong> La differenza su un anno per un figlio &egrave; di 1.746&euro;. L&apos;ISEE si fa gratis al CAF in 30 minuti.</p></div>
            <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}><p><strong>Aggiornare l&apos;ISEE in ritardo.</strong> Aggiorna l&apos;ISEE a gennaio, ogni anno. Dopo il 30 giugno, i mesi persi sono persi.</p></div>
            <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}><p><strong>Non sapere che spetta in gravidanza.</strong> Dal 7&deg; mese hai gi&agrave; diritto all&apos;assegno. Fai domanda appena entri nel settimo mese.</p></div>
          </div>

          <div className="guide-section rv"><h2>Domande frequenti</h2><FAQ items={faqItems} /></div>

          <div className="guide-section rv">
            <h2>Guide correlate</h2>
            <div className="guide-related">
              <Link href="/isee" className="guide-related-card"><h4>ISEE</h4><p>Senza ISEE l&apos;assegno &egrave; al minimo.</p></Link>
              <Link href="/bonus-bollette" className="guide-related-card"><h4>Bonus Bollette</h4><p>Altro bonus automatico con ISEE.</p></Link>
              <Link href="/730" className="guide-related-card"><h4>730</h4><p>Dove recuperare le detrazioni.</p></Link>
            </div>
          </div>

          <div className="guide-section rv" style={{textAlign:'center',padding:'48px 0'}}>
            <h2>Ti &egrave; stata utile?</h2>
            <p style={{color:'var(--soft)',marginBottom:'24px'}}>Ne abbiamo molte altre. Trova quella che ti serve.</p>
            <Link href="/guide" className="btn-primary">Esplora tutte le guide</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
