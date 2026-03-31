'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideCieContent({ faqItems }) {
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

      {/* HERO */}
      <div className="guide">
        <div className="guide-hero">
          <div className="guide-hero-inner">
          <div className="guide-hero-text">
            <div className="guide-crumb">
              <Link href="/guide">Guide</Link>
              <span className="guide-crumb-sep">&rsaquo;</span>
              <span>Documenti</span>
            </div>

            <div className="guide-hero-top">
              <span className="guide-tag documenti">Documenti</span>
              <span className="guide-hero-date">Mar 2026</span>
            </div>

            <h1>Carta d'Identit&agrave; Elettronica (CIE): Come Richiederla nel 2026</h1>

            <p className="guide-hero-sub">
              Quanto costa, documenti, tempi di rilascio, come usarla al posto dello SPID.
            </p>

            <div className="guide-hero-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                8 min di lettura
              </span>
            </div>
          </div>

          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="140" height="100" rx="10" fill="#4A90D9" opacity=".1"/><rect x="45" y="70" width="35" height="45" rx="4" fill="#8A857C" opacity=".15"/><rect x="90" y="75" width="65" height="6" rx="3" fill="#1A1A2E" opacity=".2"/><rect x="90" y="89" width="50" height="6" rx="3" fill="#1A1A2E" opacity=".15"/><circle cx="63" cy="87" r="10" fill="#8A857C" opacity=".2"/></svg>
          </div>
          </div>
        </div>

        {/* BODY */}
        <div className="guide-body">

<div className="guide-section rv" id="digitale">
            <h2>La CIE come <em>identit&agrave; digitale</em></h2>
            <p style={{color:'var(--soft)',marginBottom:'24px'}}>Con l'app CieID sostituisce lo SPID per accedere a tutti i servizi PA.</p>
        <div>
          <p>La CIE non &egrave; solo un documento fisico: con l&apos;app <strong>CieID</strong> diventa la tua identit&agrave; digitale. Puoi accedere a tutti i servizi della PA senza SPID: INPS, Agenzia delle Entrate, ANPR, Comuni, fascicolo sanitario e migliaia di altri. Funziona avvicinando la CIE al telefono (NFC) e inserendo il PIN.</p>
          <p>Rispetto allo SPID ha alcuni vantaggi concreti: non ha costi annuali, non scade (dura come la CIE, 10 anni), e non richiede un account con username e password da ricordare. Lo svantaggio: hai bisogno di uno smartphone con NFC e devi avere entrambe le met&agrave; del PIN. Per questo conviene avere <strong>entrambi</strong>: CieID come identit&agrave; principale, SPID come backup.</p>
        </div>
        <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
          <p><strong>Come attivare CieID:</strong> scarica l&apos;app CieID (iOS o Android), avvicina la CIE al telefono, inserisci il PIN completo (le due met&agrave; unite). Fatto: da quel momento puoi accedere a tutti i servizi PA con la CIE.</p>
        </div>
      </div>

      <div className="guide-section rv" id="validita">
            <h2>Validit&agrave; <em>e quando rinnovare</em></h2>
        <div>
          <p>La CIE per i <strong>maggiorenni</strong> ha una validit&agrave; di <strong>10 anni</strong>. Per i <strong>minorenni tra 3 e 18 anni</strong> vale 5 anni, per i <strong>bambini sotto i 3 anni</strong> vale 3 anni (i tratti del viso cambiano rapidamente). Dal 30 luglio 2026, gli <strong>over 70</strong> riceveranno una CIE a durata illimitata.</p>
          <p>Puoi richiedere il rinnovo <strong>a partire da 180 giorni prima della scadenza</strong>. Non aspettare l&apos;ultimo momento. Se la CIE viene smarrita, rubata o deteriorata, puoi richiederne una nuova in qualsiasi momento allo stesso costo (22,21&euro;), presentando la denuncia per smarrimento o furto.</p>
          <p>Se <strong>cambi residenza</strong>, la CIE rimane valida: l&apos;indirizzo non &egrave; riportato sul documento. Se invece cambi <strong>cognome</strong> (matrimonio, divorzio), devi richiedere una nuova CIE.</p>
        </div>
        <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}>
          <p><strong>CIE per minorenni:</strong> servono <strong>entrambi i genitori</strong> presenti allo sportello. Se uno non pu&ograve; venire, deve firmare un atto di assenso con copia del documento. Le impronte digitali si acquisiscono solo dai 12 anni in su.</p>
        </div>
      </div>

      <div className="guide-section guide-dark rv" id="esempio">
        <div style={{background:'var(--ink)',color:'#fff',padding:'40px',borderRadius:'20px'}}><h3 style={{color:'var(--green)'}}>Sara</h3><p style={{lineHeight:'1.8',opacity:'.9'}} dangerouslySetInnerHTML={{__html: `<strong>Sara ha 32 anni</strong>, ha ancora la carta d&apos;identit&agrave; cartacea che scade a ottobre 2026. Vuole andare in Grecia ad agosto con le amiche. Capisce a marzo che dal 3 agosto la cartacea non vale pi&ugrave; per l&apos;espatrio.`}} /></div>
      </div>

          {/* FAQ */}
          <div className="guide-section rv">
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          {/* CORRELATE */}
          <div className="guide-section rv">
            <h2>Guide correlate</h2>
            <div className="guide-related">
              <Link href="/spid" className="guide-related-card"><h4>SPID</h4><p>L&apos;alternativa digitale alla CIE.</p></Link>
              <Link href="/codice-fiscale" className="guide-related-card"><h4>Codice fiscale</h4><p>Come richiederlo o ricalcolarlo.</p></Link>
              <Link href="/pec" className="guide-related-card"><h4>PEC</h4><p>La posta elettronica certificata.</p></Link>
            </div>
          </div>

          {/* CTA */}
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
