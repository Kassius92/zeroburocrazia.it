'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideBustaPagaContent({ faqItems }) {
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
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Lavoro</span></div>
            <div className="guide-hero-top"><span className="guide-tag lavoro">Lavoro</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Come Leggere la Busta Paga nel 2026: Guida Completa</h1>
            <p className="guide-hero-sub">Tutte le voci spiegate in modo semplice, dal lordo al netto, trattenute, contributi, detrazioni e novit&agrave;.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>12 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="120" height="140" rx="6" fill="#fff" stroke="#E0DBD2" strokeWidth="1.5"/><rect x="55" y="50" width="90" height="6" rx="3" fill="#2D8A6E" opacity=".4"/><rect x="55" y="64" width="70" height="6" rx="3" fill="#8A857C" opacity=".3"/><rect x="55" y="78" width="80" height="6" rx="3" fill="#8A857C" opacity=".3"/><line x1="55" y1="95" x2="145" y2="95" stroke="#E0DBD2" strokeWidth="1"/><rect x="55" y="105" width="60" height="6" rx="3" fill="#E8724A" opacity=".3"/><rect x="55" y="140" width="90" height="10" rx="4" fill="#2D8A6E" opacity=".15"/></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <h2>Cos&apos;&egrave; la busta paga</h2>
            <p>La busta paga (o <strong>cedolino</strong>) &egrave; il documento che il tuo datore di lavoro ti d&agrave; ogni mese insieme allo stipendio. Spiega, voce per voce, come si arriva dal tuo stipendio <strong>lordo</strong> al <strong>netto</strong>.</p>
            <p>La logica &egrave; semplice: <strong>Lordo &minus; Contributi INPS &minus; IRPEF &minus; Addizionali + Detrazioni = Netto</strong>.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>RAL</strong> &mdash; Retribuzione Annua Lorda. Il tuo stipendio annuo comprensivo di tredicesima/quattordicesima.</p>
            <p><strong>IRPEF</strong> &mdash; L&apos;imposta sui redditi, progressiva. Nel 2026: 23% fino a 28.000&euro;, 33% fino a 50.000&euro;, 43% oltre.</p>
            <p><strong>Contributi INPS</strong> &mdash; Circa il 9,19% del lordo, per la pensione.</p>
            <p><strong>Detrazioni</strong> &mdash; Sconti sull&apos;IRPEF per lavoro dipendente e familiari a carico.</p>
            <p><strong>TFR</strong> &mdash; Trattamento di Fine Rapporto. Quota accantonata ogni mese, ricevuta quando lasci il lavoro.</p>
          </div>

          <div className="guide-section rv">
            <h2>Le 3 parti della busta paga</h2>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>1. Intestazione</strong><br/>Dati dell&apos;azienda e tuoi dati: nome, codice fiscale, data assunzione, qualifica, livello, CCNL. Controlla che siano corretti.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>2. Competenze (il lordo)</strong><br/>Paga base, contingenza, scatti di anzianit&agrave;, superminimo, straordinari, indennit&agrave;, premi. La somma &egrave; il totale lordo del mese.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>3. Trattenute e netto</strong><br/>Contributi INPS (~9,19%), IRPEF, addizionali, detrazioni, trattamento integrativo. In fondo: il netto in busta.</div>
          </div>

          <div className="guide-section rv">
            <h2>Dal lordo al netto</h2>
            <p>Esempio con 2.000&euro; lordi: contributi INPS ~184&euro;, IRPEF lorda ~365&euro;, detrazioni ~130&euro;, addizionali ~30&euro;. <strong>Netto in busta: circa 1.551&euro;</strong>. Trattenute totali: ~22% del lordo.</p>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><p><strong>Aliquote IRPEF 2026 (3 scaglioni):</strong> 23% fino a 28.000&euro; &mdash; <strong>33%</strong> da 28.001&euro; a 50.000&euro; (era 35% nel 2024) &mdash; 43% oltre 50.000&euro;.</p></div>
          </div>

          <div className="guide-section rv">
            <h2>Novit&agrave; in busta paga 2026</h2>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><p><strong>2&deg; scaglione IRPEF: dal 35% al 33%.</strong> Circa 20-40&euro; in pi&ugrave; al mese per redditi tra 28.000 e 50.000&euro;.</p></div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><p><strong>Taglio del cuneo fiscale strutturale.</strong> Per redditi fino a ~35.000&euro;, i contributi INPS sono ridotti.</p></div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><p><strong>Bonus fino a 960&euro; per redditi sotto 20.000&euro;.</strong> Importo variabile escluso dalla base imponibile.</p></div>
          </div>

          <div className="guide-section rv">
            <h2>Le voci da controllare ogni mese</h2>
            <p><strong>Paga base + contingenza</strong> &mdash; Il minimo previsto dal tuo CCNL per il tuo livello.</p>
            <p><strong>Superminimo</strong> &mdash; La parte concordata individualmente. Pu&ograve; essere assorbibile o non assorbibile.</p>
            <p><strong>Straordinari</strong> &mdash; Ore oltre l&apos;orario contrattuale. Maggiorate dal +15% al +50%.</p>
            <p><strong>Ferie e ROL</strong> &mdash; Ferie maturate, godute e residue. Controlla ogni mese.</p>
            <p><strong>Trattamento integrativo</strong> &mdash; Fino a 100&euro;/mese per redditi sotto 15.000&euro;.</p>
            <p><strong>TFR maturato</strong> &mdash; Circa 1/13,5 del lordo. Si accumula fino alla fine del rapporto.</p>
            <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}><p><strong>Conserva tutte le buste paga.</strong> Tieni una copia digitale per almeno 5 anni. Servono per il 730, l&apos;ISEE e in caso di contenzioso.</p></div>
          </div>

          <div className="guide-section rv" style={{background:'var(--ink)',color:'#fff',padding:'40px',borderRadius:'20px'}}>
            <h2 style={{color:'var(--green)'}}>L&apos;esempio di Laura</h2>
            <p><strong style={{color:'#FAF8F4'}}>Laura</strong> &egrave; impiegata, CCNL Commercio livello 4. RAL 28.000&euro;, 14 mensilit&agrave;. Single.</p>
            <p>Paga base + contingenza + superminimo: 2.000&euro; lordi. Contributi INPS: &minus;184&euro;. IRPEF &minus; detrazioni + addizionali: &minus;265&euro;. TFR maturato nel mese: ~148&euro;. <strong style={{color:'var(--green)'}}>Netto in busta: ~1.551&euro;</strong></p>
          </div>

          <div className="guide-section rv"><h2>Domande frequenti</h2><FAQ items={faqItems} /></div>

          <div className="guide-section rv">
            <h2>Guide correlate</h2>
            <div className="guide-related">
              <Link href="/730" className="guide-related-card"><h4>730</h4><p>Recupera le detrazioni che non vedi in busta.</p></Link>
              <Link href="/tfr" className="guide-related-card"><h4>TFR</h4><p>Quanto hai accantonato di liquidazione.</p></Link>
              <Link href="/spese-mediche" className="guide-related-card"><h4>Spese mediche</h4><p>Le detrazioni sanitarie nel 730.</p></Link>
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
