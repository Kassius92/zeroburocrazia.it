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
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Casa</span></div>
            <div className="guide-hero-top"><span className="guide-tag casa">Casa</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Come Ottenere il Bonus Bollette nel 2026: Requisiti ISEE e Importi</h1>
            <p className="guide-hero-sub">Chi ne ha diritto, quanto vale, come si ottiene. Bonus luce, gas e acqua con tutti gli importi ARERA.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>10 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="40" width="80" height="120" rx="8" fill="#F59E0B" opacity=".12"/><path d="M100 70v40" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round"/><circle cx="100" cy="125" r="8" fill="#F59E0B" opacity=".3"/></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <h2>Cos&apos;&egrave; il bonus bollette</h2>
            <p>Il bonus bollette (ufficialmente <strong>bonus sociale elettrico e gas</strong>) &egrave; uno sconto che lo Stato ti applica direttamente in bolletta se la tua famiglia ha un reddito basso. Non &egrave; un rimborso, non &egrave; un voucher &mdash; &egrave; uno sconto automatico che vedi in bolletta alla voce &ldquo;Compensazione Bonus Sociale&rdquo;.</p>
            <p>Dal 2021 <strong>non devi pi&ugrave; fare domanda</strong>. Se fai l&apos;ISEE e rientri nelle soglie, il bonus si attiva da solo. L&apos;INPS manda i tuoi dati all&apos;ARERA, l&apos;ARERA li incrocia con le tue utenze e dice al fornitore di applicare lo sconto.</p>
            <p>Il bonus copre quattro servizi: <strong>luce, gas, acqua e rifiuti (TARI)</strong>. Si attivano tutti insieme con un unico ISEE sotto soglia.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>ARERA</strong> &mdash; l&apos;Autorit&agrave; che regola energia, gas e acqua in Italia. Decide importi e regole dei bonus sociali ogni anno.</p>
            <p><strong>DSU</strong> &mdash; Dichiarazione Sostitutiva Unica, il modulo che compili per ottenere l&apos;ISEE. Si fa gratis al CAF o online su inps.it con SPID.</p>
            <p><strong>SII</strong> &mdash; Sistema Informativo Integrato, la banca dati che incrocia i tuoi dati INPS con le tue utenze per attivare il bonus automaticamente.</p>
            <p><strong>Zona climatica</strong> &mdash; l&apos;Italia &egrave; divisa in zone (da A a F) in base al clima. Pi&ugrave; fa freddo, pi&ugrave; alto sar&agrave; il bonus gas.</p>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><p><strong>Senza ISEE non c&apos;&egrave; bonus.</strong> Se non presenti la DSU, il sistema non sa che esisti. L&apos;ISEE si fa gratis al CAF o online con SPID in 15 minuti.</p></div>
          </div>

          <div className="guide-section rv">
            <h2>Chi ne ha diritto</h2>
            <p><strong>Soglia ISEE 2026:</strong> fino a <strong>9.796&euro;</strong> per famiglie con massimo 3 figli a carico. Per famiglie con almeno 4 figli, la soglia sale a <strong>20.000&euro;</strong>.</p>
            <p><strong>Bolletta intestata a te:</strong> il contratto di luce e gas deve essere intestato a te o a un componente del tuo nucleo familiare ISEE.</p>
            <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}><p><strong>Attenzione all&apos;intestatario.</strong> Se vivi in affitto e la bolletta &egrave; intestata al padrone di casa, non ricevi il bonus. Fai la voltura: costa poco e ti sblocca il bonus per sempre.</p></div>
          </div>

          <div className="guide-section rv">
            <h2>Quanto vale</h2>
            <h3>Bonus elettrico (importi annuali 2026)</h3>
            <p>1&ndash;2 persone: circa <strong>168&euro;/anno</strong>. 3&ndash;4 persone: circa <strong>219&euro;/anno</strong>. Oltre 4: circa <strong>241&euro;/anno</strong>. Con il contributo straordinario decreto 2026 (+115&euro;), il totale pu&ograve; arrivare a circa <strong>315&euro; di risparmio sulla luce</strong>.</p>
            <h3>Bonus gas</h3>
            <p>Dipende dalla zona climatica e dall&apos;uso. Una famiglia di 3-4 persone in zona E (Milano, Torino) con riscaldamento e cucina riceve circa <strong>140&ndash;200&euro;/anno</strong>.</p>
            <h3>Bonus acqua e TARI</h3>
            <p>Con lo stesso ISEE ricevi anche il <strong>bonus idrico</strong> (50 litri gratuiti al giorno per persona) e dal 2026 il <strong>bonus TARI</strong> (25% di sconto sulla tassa rifiuti).</p>
          </div>

          <div className="guide-section rv" style={{background:'var(--ink)',color:'#fff',padding:'40px',borderRadius:'20px'}}>
            <h2 style={{color:'var(--green)'}}>L&apos;esempio di Marco</h2>
            <p><strong style={{color:'#FAF8F4'}}>Marco vive a Bari</strong> (zona C) con la moglie e due figli. ISEE di 8.500&euro;. Ha solo presentato l&apos;ISEE al CAF a gennaio.</p>
            <p>Bonus luce: &euro;219 + extra &euro;115. Bonus gas: ~&euro;150. Acqua + TARI: ~&euro;130. <strong style={{color:'var(--green)'}}>Totale: ~&euro;614/anno</strong></p>
            <p style={{opacity:'.6',fontSize:'14px'}}>Non ha fatto nessuna domanda. Solo l&apos;ISEE al CAF.</p>
          </div>

          <div className="guide-section rv">
            <h2>Come si ottiene</h2>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>1. Presenta la DSU</strong><br/>Online su inps.it con SPID (15 min) o gratis al CAF.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>2. L&apos;INPS calcola il tuo ISEE</strong><br/>Entro 3-5 giorni. Se &egrave; sotto soglia, invia i dati ad ARERA.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>3. Il SII trova le tue utenze</strong><br/>Incrocia i tuoi dati con le bollette intestate a te.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>4. Lo sconto compare in bolletta</strong><br/>Entro 3-4 mesi. Il bonus &egrave; retroattivo al 1&deg; gennaio.</div>
          </div>

          <div className="guide-section rv">
            <h2>Casi particolari</h2>
            <p><strong>Gas condominiale centralizzato:</strong> il bonus gas arriva come bonifico domiciliato (ritiri i soldi alle Poste).</p>
            <p><strong>Bonus disagio fisico:</strong> chi usa apparecchiature elettromedicali salvavita ha diritto a un bonus separato <strong>senza limiti di ISEE</strong>, fino a oltre 500&euro;/anno.</p>
            <p><strong>Se perdi il lavoro:</strong> puoi fare l&apos;ISEE corrente per aggiornare i redditi alla situazione attuale e rientrare nelle soglie.</p>
          </div>

          <div className="guide-section rv"><h2>Domande frequenti</h2><FAQ items={faqItems} /></div>

          <div className="guide-section rv">
            <h2>Guide correlate</h2>
            <div className="guide-related">
              <Link href="/isee" className="guide-related-card"><h4>ISEE</h4><p>Serve per attivare il bonus automaticamente.</p></Link>
              <Link href="/assegno-unico" className="guide-related-card"><h4>Assegno Unico</h4><p>Altro bonus legato all&apos;ISEE.</p></Link>
              <Link href="/730" className="guide-related-card"><h4>730</h4><p>Anche il bonus bollette va nel 730.</p></Link>
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
