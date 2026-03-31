'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideCodiceFiscaleContent({ faqItems }) {
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

            <h1>Codice Fiscale: Come Richiederlo, Calcolarlo e Cosa Fare se lo Perdi</h1>

            <p className="guide-hero-sub">
              Come funziona, dove si richiede, come calcolarlo e cosa fare in caso di smarrimento.
            </p>

            <div className="guide-hero-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                8 min di lettura
              </span>
            </div>
          </div>

          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="55" width="140" height="90" rx="8" fill="#4A90D9" opacity=".1"/><rect x="45" y="75" width="110" height="8" rx="4" fill="#4A90D9" opacity=".3"/><rect x="45" y="91" width="90" height="8" rx="4" fill="#4A90D9" opacity=".2"/><rect x="45" y="107" width="70" height="8" rx="4" fill="#4A90D9" opacity=".15"/></svg>
          </div>
          </div>
        </div>

        {/* BODY */}
        <div className="guide-body">

<div className="guide-section rv" id="duplicato">
            <h2>Hai perso la tessera? <em>Il duplicato &egrave; online</em></h2>
        <div>
          <p>Hai smarrito la tessera sanitaria o il tesserino del codice fiscale? Nessun problema: il duplicato si richiede in pochi minuti online, &egrave; completamente gratuito e la nuova tessera arriva a casa per posta.</p>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
              <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>1. Indica il motivo</strong><br/>Smarrimento, furto, deterioramento o mancato recapito. Per sicurezza ti chiede alcuni dati della tua ultima dichiarazione dei redditi.</div>
              <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>2. Ricevi la nuova tessera</strong><br/>Il numero della nuova tessera \u00e8 disponibile nel portale entro 24-48 ore. La tessera fisica arriva per posta entro 15-20 giorni.</div>
            </div>
        <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
          <p>Se non puoi usare il servizio online, puoi inviare il <strong>modello AA4/8</strong> con copia del documento d&apos;identit&agrave; via PEC a un ufficio dell&apos;Agenzia delle Entrate. Oppure presentarti di persona: nessun appuntamento necessario, nessun costo.</p>
        </div>
        <div style={{marginTop:'24px'}}>
          <Link href="/spid">Serve lo SPID per richiedere il duplicato online &rarr;</Link>
        </div>
      </div>

      <div className="guide-section rv" id="stranieri">
            <h2>Codice fiscale <em>per gli stranieri</em></h2>
        <div>
          <p>Se sei un cittadino straniero, il codice fiscale ti viene assegnato automaticamente in queste situazioni: durante la <strong>domanda di ingresso per lavoro o ricongiungimento</strong> (lo assegna lo Sportello Unico per l&apos;Immigrazione), al <strong>rilascio o rinnovo del permesso di soggiorno</strong> (lo assegna la Questura se non ce l&apos;hai gi&agrave;), o tramite il <strong>Consolato italiano</strong> nel tuo Paese se sei residente all&apos;estero.</p>
          <p><strong>Non devi andare all&apos;Agenzia delle Entrate</strong> &mdash; il codice viene assegnato direttamente dagli enti sopra indicati. Solo in casi eccezionali (es. omocodia) la Questura pu&ograve; inviarti all&apos;Agenzia per la risoluzione.</p>
        </div>
        <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
          <p>L&apos;Agenzia delle Entrate pubblica una <strong>guida al codice fiscale per stranieri disponibile in 17 lingue</strong> sul suo sito ufficiale. Cercala nella sezione &ldquo;Codice fiscale e tessera sanitaria&rdquo;.</p>
        </div>
      </div>

      <div className="guide-section rv" id="tessera">
            <h2>Tessera sanitaria <em>e CNS</em></h2>
        <div>
          <p>Il codice fiscale &egrave; stampato sulla <strong>tessera sanitaria</strong> &mdash; la tessera plastificata che usi dal medico e in farmacia. Se ha il <strong>microchip attivato</strong>, funziona anche come Carta Nazionale dei Servizi (CNS) e ti permette di accedere ai servizi online della PA.</p>
          <p>La tessera si <strong>rinnova automaticamente</strong>: alla scadenza (6 anni), se risulti iscritto al SSN, la nuova tessera arriva a casa senza doverla richiedere. Dal 2026 puoi visualizzare e stampare la copia digitale della tessera nell&apos;area riservata dell&apos;Agenzia delle Entrate con SPID. Per gli stranieri non iscritti al SSN, l&apos;Agenzia rilascia un semplice tesserino di codice fiscale (senza le funzionalit&agrave; sanitarie).</p>
          <p>Il <strong>codice fiscale e la tessera sanitaria non sono la stessa cosa</strong>: il codice fiscale &egrave; il numero di 16 caratteri. La tessera &egrave; il documento fisico che lo contiene. Puoi avere il codice anche senza la tessera.</p>
        </div>
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
              <Link href="/cie" className="guide-related-card"><h4>CIE</h4><p>La carta d&apos;identit&agrave; elettronica.</p></Link>
              <Link href="/spid" className="guide-related-card"><h4>SPID</h4><p>L&apos;identit&agrave; digitale.</p></Link>
              <Link href="/pec" className="guide-related-card"><h4>PEC</h4><p>La posta certificata.</p></Link>
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
