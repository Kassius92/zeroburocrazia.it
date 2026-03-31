'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuidePecContent({ faqItems }) {
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

            <h1>PEC: Come Attivarla, Quanto Costa e Perch&eacute; Serve</h1>

            <p className="guide-hero-sub">
              La posta elettronica certificata: come funziona, i provider migliori, quando &egrave; obbligatoria.
            </p>

            <div className="guide-hero-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                8 min di lettura
              </span>
            </div>
          </div>

          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="55" width="130" height="90" rx="8" fill="#2D8A6E" opacity=".08"/><path d="M45 65l55 35 55-35" stroke="#2D8A6E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity=".4"/><rect x="45" y="65" width="110" height="70" rx="6" stroke="#2D8A6E" strokeWidth="1.5" opacity=".3" fill="none"/></svg>
          </div>
          </div>
        </div>

        {/* BODY */}
        <div className="guide-body">

<div className="guide-section rv" id="domicilio">
            <h2>Domicilio digitale <em>su INAD</em></h2>
        <div>
          <p>Dal 2023 esiste l&apos;<strong>INAD</strong> (Indice Nazionale dei Domicili Digitali), un registro pubblico dove puoi registrare la tua PEC come domicilio digitale ufficiale. Una volta registrato, la Pubblica Amministrazione pu&ograve; inviarti comunicazioni ufficiali all&agrave; tua PEC invece che per posta cartacea: cartelle esattoriali, notifiche, atti giudiziari, comunicazioni INPS, e molto altro.</p>
          <p>Per registrarsi su INAD vai su <strong>domiciliodigitale.gov.it</strong>, accedi con SPID o CIE, e inserisci il tuo indirizzo PEC. &Egrave; completamente gratuito. Una volta registrato, le PA verificano l&apos;INAD prima di inviare corrispondenza: se trovi il tuo indirizzo, ti mandano tutto l&igrave;, risparmiando carta e accelerando i tempi.</p>
        </div>
        <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
          <p><strong>Conviene registrarsi?</strong> S&igrave;, soprattutto se hai contenziosi in corso, sei titolare di immobili, o hai rapporti frequenti con la PA. Ricevere una notifica direttamente in PEC evita il rischio di non trovare un atto in cassetta e di perdere i termini per rispondere.</p>
        </div>
      </div>

      <div className="guide-section rv" id="obblighi">
            <h2>Chi &egrave; <em>obbligato ad averla</em></h2>
        <div>
          <p>La PEC &egrave; <strong>obbligatoria</strong> per: tutte le <strong>imprese</strong> (S.r.l., S.p.A., ditte individuali iscritte al Registro Imprese), tutti i <strong>professionisti iscritti ad albi</strong> (avvocati, commercialisti, medici, ingegneri, ecc.), e la <strong>Pubblica Amministrazione</strong>.</p>
          <p>Per i <strong>privati cittadini</strong> la PEC &egrave; facoltativa, ma sempre pi&ugrave; utile. Con la diffusione dell&apos;INAD e la digitalizzazione della PA, averla ti permette di ricevere comunicazioni ufficiali in modo rapido e sicuro, inviare raccomandate digitali a costo quasi zero, e comunicare formalmente con uffici e professionisti.</p>
          <p>Se sei un imprenditore o professionista e non hai la PEC, rischi sanzioni e problemi con le comunicazioni ufficiali. Se sei un privato, non sei obbligato &mdash; ma costa pochi euro all&apos;anno e ti semplifica la vita.</p>
        </div>
        <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}>
          <p><strong>Attenzione al rinnovo.</strong> L&apos;abbonamento PEC &egrave; annuale. Se non lo rinnovi, la casella viene disattivata e dopo un periodo perdi i messaggi. Imposta un promemoria automatico prima della scadenza.</p>
        </div>
      </div>

      <div className="guide-section guide-dark rv" id="esempio">
        <div style={{background:'var(--ink)',color:'#fff',padding:'40px',borderRadius:'20px'}}><h3 style={{color:'var(--green)'}}>Luca</h3><p style={{lineHeight:'1.8',opacity:'.9'}} dangerouslySetInnerHTML={{__html: `<strong>Luca ha 31 anni</strong>, lavora come grafico freelance. Ha appena aperto la partita IVA e deve registrare la PEC obbligatoriamente. Cerca su Aruba, sceglie il piano base da 1,40\u20ac+IVA/anno, si registra in 10 minuti con SPID. Poi registra la sua PEC su INAD.`}} /></div>
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
              <Link href="/spid" className="guide-related-card"><h4>SPID</h4><p>L&apos;identit&agrave; digitale.</p></Link>
              <Link href="/cie" className="guide-related-card"><h4>CIE</h4><p>Carta d&apos;identit&agrave; elettronica.</p></Link>
              <Link href="/codice-fiscale" className="guide-related-card"><h4>Codice fiscale</h4><p>Come funziona il codice fiscale.</p></Link>
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
