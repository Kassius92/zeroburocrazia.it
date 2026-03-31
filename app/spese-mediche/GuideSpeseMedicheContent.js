'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideSpeseMedicheContent({ faqItems }) {
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
              <span>Fisco</span>
            </div>

            <div className="guide-hero-top">
              <span className="guide-tag fisco">Fisco</span>
              <span className="guide-hero-date">Mar 2026</span>
            </div>

            <h1>Spese Mediche Detraibili nel 2026: Elenco e Come Scaricarle</h1>

            <p className="guide-hero-sub">
              Quali spese puoi scaricare nel 730, come pagarle, cosa conservare e quanto recuperi.
            </p>

            <div className="guide-hero-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                10 min di lettura
              </span>
            </div>
          </div>

          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="40" width="100" height="120" rx="8" fill="#2D8A6E" opacity=".08"/><path d="M100 70v30M85 85h30" stroke="#2D8A6E" strokeWidth="4" strokeLinecap="round"/><rect x="60" y="125" width="80" height="8" rx="4" fill="#E8724A" opacity=".2"/><rect x="70" y="140" width="60" height="8" rx="4" fill="#E8724A" opacity=".15"/></svg>
          </div>
          </div>
        </div>

        {/* BODY */}
        <div className="guide-body">

<div className="guide-section rv" id="errori">
            <h2>Gli errori <em>che fanno tutti</em></h2>
        <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}>
          <p><strong>Pagare in contanti il dentista.</strong> Il dentista privato non &egrave; una struttura SSN. Se lo paghi in contanti, <strong>perdi tutta la detrazione</strong>. Anche con la fattura perfetta.</p>
        </div>
        <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}>
          <p><strong>Detrarre gli integratori.</strong> Gli integratori alimentari <strong>non sono farmaci</strong> e non sono detraibili. Lo scontrino deve riportare &ldquo;farmaco&rdquo;, non &ldquo;parafarmaco&rdquo; o &ldquo;integratore&rdquo;.</p>
        </div>
        <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}>
          <p><strong>Non controllare il precompilato.</strong> Il 730 precompilato contiene gi&agrave; molte spese mediche, ma non tutte. Se non aggiungi quelle mancanti, perdi la detrazione.</p>
        </div>
        <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}>
          <p><strong>Buttare gli scontrini.</strong> L&apos;Agenzia delle Entrate pu&ograve; chiederti i documenti fino a <strong>5 anni dopo</strong>. Conserva tutto in una busta o cartella digitale, anno per anno.</p>
        </div>
      </div>

      <div className="guide-section guide-dark rv" id="esempio">
        <div style={{background:'var(--ink)',color:'#fff',padding:'40px',borderRadius:'20px'}}><h3 style={{color:'var(--green)'}}>Giulia</h3><p style={{lineHeight:'1.8',opacity:'.9'}} dangerouslySetInnerHTML={{__html: `<strong>Giulia ha 34 anni</strong>, vive a Verona e lavora come impiegata (RAL 28.000&euro;). Nel 2025: farmaci 340&euro;, dentista (pagato con carta) 480&euro;, occhiali 320&euro;, visita dermatologica privata (carta) 120&euro;, psicologa 10 sedute (bonifico) 550&euro;. Totale: 1.810&euro;.`}} /></div>
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
              <Link href="/730" className="guide-related-card"><h4>730</h4><p>Dove inserire le spese mediche.</p></Link>
              <Link href="/isee" className="guide-related-card"><h4>ISEE</h4><p>Per le esenzioni ticket sanitario.</p></Link>
              <Link href="/codice-fiscale" className="guide-related-card"><h4>Codice fiscale</h4><p>Serve per lo scontrino parlante.</p></Link>
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
