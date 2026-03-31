'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideLegge104Content({ faqItems }) {
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
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Salute</span></div>
            <div className="guide-hero-top"><span className="guide-tag salute">Salute</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Come Richiedere la Legge 104 nel 2026: Permessi, Agevolazioni e Procedura</h1>
            <p className="guide-hero-sub">Riconoscimento della disabilit&agrave;, permessi dal lavoro, congedo straordinario, agevolazioni auto e fiscali.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>14 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="25" width="130" height="150" rx="10" fill="#8B5CF6" opacity=".1"/><rect x="55" y="55" width="90" height="8" rx="4" fill="#8B5CF6" opacity=".3"/><rect x="55" y="71" width="70" height="8" rx="4" fill="#8B5CF6" opacity=".2"/><circle cx="100" cy="120" r="25" fill="#2D8A6E" opacity=".12"/><path d="M88 120h24M100 108v24" stroke="#2D8A6E" strokeWidth="3" strokeLinecap="round"/><text x="100" y="45" textAnchor="middle" fill="#8B5CF6" fontSize="13" fontWeight="700">104</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <h2>Cos&apos;&egrave; la Legge 104</h2>
            <p>La <strong>Legge 104/1992</strong> &egrave; la legge che tutela le persone con disabilit&agrave; e i familiari che le assistono. Non &egrave; un bonus: &egrave; un <strong>pacchetto di diritti</strong> che comprende permessi dal lavoro retribuiti al 100%, congedi fino a 2 anni, agevolazioni fiscali e priorit&agrave; nella scelta della sede lavorativa.</p>
            <p>Il requisito fondamentale &egrave; il riconoscimento dell&apos;<strong>handicap grave</strong> (articolo 3, comma 3). Questo riconoscimento avviene tramite una visita della commissione medica ASL, dopo aver presentato domanda all&apos;INPS.</p>
            <p>La 104 non riguarda solo le disabilit&agrave; fisiche evidenti. Possono essere riconosciute anche disabilit&agrave; psichiche, sensoriali, malattie degenerative, patologie oncologiche (con procedura accelerata), diabete di tipo 1, cardiopatie gravi, malattie rare e disabilit&agrave; intellettive.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>Handicap grave (art. 3 comma 3)</strong> &mdash; la condizione che d&agrave; accesso a tutti i permessi e le agevolazioni. &Egrave; il riconoscimento che fa la differenza.</p>
            <p><strong>Commissione medica ASL</strong> &mdash; l&apos;organo che valuta la disabilit&agrave;. La visita viene richiesta tramite l&apos;INPS.</p>
            <p><strong>Verbale di handicap</strong> &mdash; il documento ufficiale. Pu&ograve; riconoscere handicap semplice (comma 1) o grave (comma 3).</p>
            <p><strong>Referente unico</strong> &mdash; dal 2022, un solo lavoratore pu&ograve; usufruire dei permessi 104 per lo stesso familiare disabile.</p>
            <p><strong>Congedo straordinario</strong> &mdash; fino a 2 anni di congedo retribuito al 100% per assistere un familiare con handicap grave.</p>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><p><strong>Comma 1 vs comma 3:</strong> con il comma 1 (semplice) hai diritto solo ad agevolazioni fiscali su ausili. Con il comma 3 (grave) hai diritto a tutto: 3 giorni di permesso al mese, congedo 2 anni, IVA 4% auto, esenzione bollo, priorit&agrave; sede di lavoro.</p></div>
          </div>

          <div className="guide-section rv">
            <h2>Chi ne ha diritto</h2>
            <h3>La persona con disabilit&agrave;</h3>
            <p>Qualsiasi persona con una minorazione fisica, psichica o sensoriale che provoca difficolt&agrave; nell&apos;apprendimento, nella vita di relazione o nell&apos;integrazione lavorativa pu&ograve; richiedere il riconoscimento.</p>
            <h3>I familiari che assistono (caregiver)</h3>
            <p>I permessi spettano al familiare lavoratore dipendente che assiste la persona con handicap grave. L&apos;ordine di priorit&agrave; &egrave;: coniuge o convivente, genitori, figli, fratelli o sorelle, parenti entro il 3&deg; grado.</p>
            <p>I permessi 104 spettano solo ai <strong>lavoratori dipendenti</strong>. Chi ha la partita IVA o &egrave; autonomo non ha diritto ai permessi retribuiti, ma pu&ograve; beneficiare delle agevolazioni fiscali.</p>
            <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}><p><strong>Referente unico dal 2022.</strong> Un solo lavoratore pu&ograve; essere il referente per l&apos;assistenza a un familiare. Eccezione: i genitori di figli disabili possono alternarsi tra loro.</p></div>
          </div>

          <div className="guide-section rv">
            <h2>Come richiederla</h2>
            <p style={{color:'var(--soft)',marginBottom:'16px'}}>La procedura ha 4 passaggi. Dal primo appuntamento al verbale: 2-4 mesi.</p>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>1. Vai dal medico di base</strong><br/>Compila il certificato medico introduttivo online sul sito INPS. Ti rilascia il numero di certificato. Gratuito o pochi euro.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>2. Presenta la domanda INPS</strong><br/>Entro 90 giorni dal certificato: online su inps.it con SPID, oppure tramite patronato (gratis).</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>3. Visita commissione ASL</strong><br/>Convocazione in 30-90 giorni (15 giorni per patologie oncologiche). Porta tutta la documentazione medica.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>4. Ricevi il verbale</strong><br/>Via raccomandata o online nel cassetto INPS. Indica se &egrave; riconosciuto comma 1 o comma 3.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><p><strong>Vai al patronato.</strong> La domanda 104 &egrave; delicata: il certificato medico deve essere compilato bene, la documentazione alla visita fa la differenza tra comma 1 e comma 3. Il patronato ti guida gratuitamente.</p></div>
          </div>

          <div className="guide-section rv">
            <h2>Permessi lavorativi</h2>
            <p>Con l&apos;handicap grave (comma 3), il lavoratore dipendente ha diritto a <strong>3 giorni di permesso retribuito al mese</strong>, oppure 2 ore al giorno. Retribuiti al 100% dall&apos;INPS. Non si accumulano da un mese all&apos;altro.</p>
            <p>Il datore di lavoro <strong>non pu&ograve; rifiutarli</strong>. Se il tuo datore ti crea problemi, rivolgiti al patronato o all&apos;Ispettorato del Lavoro.</p>
          </div>

          <div className="guide-section rv" style={{background:'var(--ink)',color:'#fff',padding:'40px',borderRadius:'20px'}}>
            <h2 style={{color:'var(--green)'}}>L&apos;esempio di Anna</h2>
            <p>Anna lavora full-time. Sua madre ha la <strong style={{color:'#FAF8F4'}}>104 comma 3</strong>. Anna &egrave; il referente unico. Ogni mese prende 3 giorni di permesso retribuito. Lo stipendio non cambia di un centesimo. Se preferisce, pu&ograve; frazionare: 2 ore al giorno.</p>
          </div>

          <div className="guide-section rv">
            <h2>Congedo straordinario (2 anni)</h2>
            <p>Permette di assentarsi dal lavoro fino a <strong>2 anni nell&apos;arco della vita lavorativa</strong>, con stipendio pagato al 100% (tetto 2026: circa 40.000&euro;/anno lordi). I 2 anni possono essere frazionati.</p>
            <p>Requisiti: verbale <strong>art. 3 comma 3</strong> e <strong>obbligo di convivenza</strong> con il familiare disabile. La convivenza pu&ograve; essere instaurata anche dopo la richiesta.</p>
          </div>

          <div className="guide-section rv">
            <h2>Agevolazioni fiscali e auto</h2>
            <h3>Agevolazioni auto</h3>
            <p>Con handicap grave: <strong>IVA al 4%</strong> invece del 22% su auto nuove o usate (1 auto ogni 4 anni). <strong>Detrazione IRPEF 19%</strong> su un tetto di 18.075&euro;. <strong>Esenzione bollo auto</strong> permanente. <strong>Esenzione passaggio di propriet&agrave;</strong>. Dal 2026 confermata anche su auto ibride ed elettriche.</p>
            <h3>Altre agevolazioni</h3>
            <p><strong>Esenzione ticket sanitario</strong> con codici C03 e C06. <strong>IVA 4%</strong> su ausili informatici. <strong>Detrazione 75%</strong> su eliminazione barriere architettoniche fino a 50.000&euro;. <strong>Scelta prioritaria della sede di lavoro</strong>. <strong>Priorit&agrave; smart working</strong> (novit&agrave; 2026).</p>
          </div>

          <div className="guide-section rv">
            <h2>104 e invalidit&agrave; civile</h2>
            <p>Sono due cose diverse ma si richiedono spesso insieme. La 104 d&agrave; permessi e agevolazioni. L&apos;invalidit&agrave; civile d&agrave; prestazioni economiche (pensione, indennit&agrave; di accompagnamento). Si possono richiedere contemporaneamente nella stessa domanda INPS.</p>
          </div>

          <div className="guide-section rv"><h2>Domande frequenti</h2><FAQ items={faqItems} /></div>

          <div className="guide-section rv">
            <h2>Guide correlate</h2>
            <div className="guide-related">
              <Link href="/isee" className="guide-related-card"><h4>ISEE</h4><p>Serve per molte agevolazioni legate alla disabilit&agrave;.</p></Link>
              <Link href="/spid" className="guide-related-card"><h4>SPID</h4><p>Per la domanda online INPS serve lo SPID.</p></Link>
              <Link href="/spese-mediche" className="guide-related-card"><h4>Spese mediche</h4><p>Detrazioni sanitarie e esenzioni.</p></Link>
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
