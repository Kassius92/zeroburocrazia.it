'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideTfrContent({ faqItems }) {
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
              <span>Lavoro</span>
            </div>

            <div className="guide-hero-top">
              <span className="guide-tag lavoro">Lavoro</span>
              <span className="guide-hero-date">Mar 2026</span>
            </div>

            <h1>TFR nel 2026: Come si Calcola, Tassazione e Quando lo Ricevi</h1>

            <p className="guide-hero-sub">
              La liquidazione spiegata semplice. Quanto ti spetta, come si calcola, tassazione e la scelta tra azienda e fondo pensione.
            </p>

            <div className="guide-hero-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                10 min di lettura
              </span>
            </div>
          </div>

          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="50" width="110" height="100" rx="8" fill="#2D8A6E" opacity=".1"/><circle cx="100" cy="90" r="25" fill="#E8724A" opacity=".12"/><text x="100" y="96" textAnchor="middle" fill="#E8724A" fontSize="18" fontWeight="700">&euro;</text><rect x="60" y="130" width="80" height="8" rx="4" fill="#2D8A6E" opacity=".3"/></svg>
          </div>
          </div>
        </div>

        {/* BODY */}
        <div className="guide-body">

<div className="guide-section rv" id="fondo">
            <h2>TFR in azienda <em>o fondo pensione?</em></h2>
            <p style={{color:'var(--soft)',marginBottom:'24px'}}>La scelta pi&ugrave; importante che fai nei primi 60 giorni dall'assunzione.</p>
        <div>
          <p>Quando vieni assunto, hai <strong>60 giorni</strong> per decidere dove mandare il TFR. Se non scegli, scatta il <strong>silenzio-assenso</strong>: il TFR va automaticamente al fondo pensione di categoria.</p>
          <p>Tenere il TFR <strong>in azienda</strong> significa tassazione al ~23%, rivalutazione garantita (75% inflazione + 1,5%) e anticipo possibile dopo 8 anni fino al 70%. I soldi sono al sicuro anche in caso di fallimento grazie al Fondo di Garanzia INPS, e li ricevi subito alla cessazione del rapporto.</p>
          <p>Versare il TFR in un <strong>fondo pensione</strong> significa tassazione dal 15% al 9% (un risparmio enorme sul lungo periodo), possibilit&agrave; di dedurre ulteriori contributi fino a 5.300&euro;/anno, anticipo fino al 75% dopo 8 anni. Il contro: i soldi sono bloccati fino alla pensione (con alcune eccezioni) e c&apos;&egrave; un rischio di mercato.</p>
        </div>
        <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
          <p>Se sei <strong>giovane e hai un orizzonte lungo</strong> (20+ anni alla pensione), il fondo pensione conviene quasi sempre &mdash; risparmi dal 6% al 14% di tasse e accumuli una pensione integrativa. Se sei <strong>vicino alla pensione o cambi spesso lavoro</strong>, il TFR in azienda ti d&agrave; pi&ugrave; liquidit&agrave; immediata.</p>
        </div>
      </div>

      <div className="guide-section guide-dark rv" id="esempio">
        <div style={{background:'var(--ink)',color:'#fff',padding:'40px',borderRadius:'20px'}}><h3 style={{color:'var(--green)'}}>Davide</h3><p style={{lineHeight:'1.8',opacity:'.9'}} dangerouslySetInnerHTML={{__html: `<strong>Davide ha 38 anni</strong>, tecnico informatico a Milano, 12 anni nella stessa azienda. RAL 32.000&euro;. Ha deciso di cambiare lavoro &mdash; si &egrave; gi&agrave; dimesso. Il TFR non &egrave; mai stato spostato nel fondo pensione. Non ha idea di quanto sia &mdash; pensa &ldquo;saranno un paio di migliaia di euro&rdquo;.`}} /></div>
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
              <Link href="/dimissioni" className="guide-related-card"><h4>Dimissioni</h4><p>Come dimettersi e cosa ti spetta.</p></Link>
              <Link href="/naspi" className="guide-related-card"><h4>NASpI</h4><p>Se hai perso il lavoro, la disoccupazione.</p></Link>
              <Link href="/busta-paga" className="guide-related-card"><h4>Busta paga</h4><p>Dove trovare il TFR nel cedolino.</p></Link>
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
