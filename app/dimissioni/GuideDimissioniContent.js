'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { FiscozenBanner, FiscozenSticky } from '@/components/FiscozenBanner';

export default function GuideDimissioniContent({ faqItems }) {
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
      <FiscozenSticky />
      <div className="guide">
        <div className="guide-hero">
          <div className="guide-hero-inner">
          <div className="guide-hero-text">
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Lavoro</span></div>
            <div className="guide-hero-top"><span className="guide-tag lavoro">Lavoro</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Come Dare le Dimissioni nel 2026: Procedura Online, Preavviso e TFR</h1>
            <p className="guide-hero-sub">Procedura telematica in 5 minuti, preavviso per CCNL, TFR, ultima busta paga, giusta causa e gli errori da evitare.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>10 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="45" width="120" height="110" rx="6" fill="#fff" stroke="#E0DBD2" strokeWidth="1.5"/><rect x="55" y="65" width="90" height="6" rx="3" fill="#C49A2A" opacity=".4"/><rect x="55" y="80" width="70" height="6" rx="3" fill="#8A857C" opacity=".2"/><line x1="55" y1="100" x2="145" y2="100" stroke="#E0DBD2" strokeWidth="1"/><rect x="80" y="115" width="40" height="25" rx="4" fill="#2D8A6E" opacity=".15"/><text x="100" y="132" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="600">INVIA</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Come funzionano le dimissioni telematiche (5 minuti con SPID)</li>
                <li>Quanti giorni di preavviso per CCNL (Commercio, Metalmeccanici)</li>
                <li>TFR, ferie non godute e ultima busta paga: cosa ti spetta</li>
                <li>Dimissioni per giusta causa: quando hai diritto alla NASpI</li>
                <li>Un esempio reale: Elena, 7.200&euro; di liquidazione finale</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Come funzionano le dimissioni</a>
              <a href="#procedura">Procedura online</a>
              <a href="#preavviso">Quanti giorni di preavviso</a>
              <a href="#soldi">TFR e ultima busta paga</a>
              <a href="#giusta-causa">Dimissioni per giusta causa</a>
              <a href="#esempio">Esempio: il caso di Elena</a>
              <a href="#errori">I 5 errori pi&ugrave; comuni</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Come funzionano <em>le dimissioni</em></h2>
            <p>Le dimissioni sono l&apos;atto con cui il lavoratore comunica al datore la volont&agrave; di <strong>terminare il rapporto di lavoro</strong>. Dal 2016 &egrave; obbligatorio farle in via telematica (per evitare le &ldquo;dimissioni in bianco&rdquo;). Ci vogliono 5 minuti.</p>
            <p>Hai <strong>7 giorni</strong> per ripensarci e revocare. Dopo, le dimissioni sono definitive. Il datore non pu&ograve; rifiutarle: le dimissioni sono un atto unilaterale.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>Preavviso</strong> &mdash; i giorni che devi lavorare tra l&apos;invio delle dimissioni e il tuo ultimo giorno. Dipende dal CCNL, dal livello e dall&apos;anzianit&agrave;.</p>
            <p><strong>Data di decorrenza</strong> &mdash; il giorno DOPO il tuo ultimo giorno di lavoro. Se il tuo ultimo giorno &egrave; il 31 marzo, la decorrenza &egrave; il 1&deg; aprile.</p>
            <p><strong>Indennit&agrave; sostitutiva del preavviso</strong> &mdash; se non rispetti il preavviso, il datore ti trattiene lo stipendio dei giorni mancanti.</p>
            <p><strong>TFR</strong> &mdash; il Trattamento di Fine Rapporto, la &ldquo;liquidazione&rdquo;. Ti spetta sempre. <Link href="/tfr" style={{color:'var(--green)',fontWeight:600}}>Guida al TFR</Link></p>
          </div>

          <div className="guide-section rv" id="procedura">
            <div className="guide-section-label">Procedura</div>
            <h2>Procedura <em>online</em></h2>
            <h3>Passo 1: Accedi con SPID</h3>
            <p>Vai su <strong>servizi.lavoro.gov.it</strong>, accedi con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link>. Cerca &ldquo;Dimissioni volontarie&rdquo;.</p>
            <h3>Passo 2: Compila il modulo</h3>
            <p>Inserisci dati del datore (codice fiscale azienda, email PEC), tipo di dimissioni (volontarie o giusta causa) e data di decorrenza.</p>
            <h3>Passo 3: Invia e scarica la ricevuta</h3>
            <p>Il sistema genera un modulo con numero di protocollo. Il datore riceve la comunicazione in automatico. Conserva la ricevuta.</p>
            <h3>Passo 4: Lavora fino all&apos;ultimo giorno</h3>
            <p>Rispetta il preavviso, fai il passaggio di consegne. Nell&apos;ultimo giorno il datore ti d&agrave; la busta paga finale + <Link href="/tfr" style={{color:'var(--green)',fontWeight:600}}>TFR</Link>.</p>
            <div className="guide-callout warn">
              <strong>Hai 7 giorni per revocare.</strong> Dopo l&apos;invio, hai esattamente 7 giorni per accedere di nuovo al portale e annullare tutto. Dopo i 7 giorni, &egrave; definitivo.
            </div>
          </div>

          <div className="guide-section rv" id="preavviso">
            <div className="guide-section-label">Preavviso</div>
            <h2>Quanti giorni di <em>preavviso</em></h2>
            <p>Dipende dal tuo CCNL, dal livello e dall&apos;anzianit&agrave;.</p>
            <h3>CCNL Commercio e Terziario</h3>
            <p>Livelli 6&deg;-7&deg; (commessi): 15 giorni fino a 5 anni, 30 giorni dopo. Livelli 4&deg;-5&deg; (impiegati): 30 giorni fino a 5 anni, 45 giorni dopo. Livelli 1&deg;-3&deg; (quadri): 45-60 giorni.</p>
            <h3>CCNL Metalmeccanici</h3>
            <p>Livello D1-D2: 10 giorni fino a 5 anni, 15 dopo. Livello C1-C3: 15-20 giorni. Livello B-A: 1-2 mesi.</p>
            <div className="guide-callout">
              <strong>Non sai quanti giorni dare?</strong> Controlla il tuo CCNL sul cedolino della <Link href="/busta-paga" style={{color:'var(--green)',fontWeight:600}}>busta paga</Link>. Se hai dubbi, vai al patronato (CGIL, CISL, ACLI &mdash; gratuito). Meglio dare un giorno in pi&ugrave; che uno in meno.
            </div>
          </div>

          <div className="guide-section rv" id="soldi">
            <div className="guide-section-label">I soldi</div>
            <h2>TFR, ultima busta paga <em>e soldi</em></h2>
            <p>Nell&apos;ultima busta paga ricevi: <strong>stipendio</strong> dei giorni lavorati, <strong>ferie e permessi non goduti</strong>, <strong>ratei di tredicesima</strong> (e quattordicesima se prevista). Il <strong>TFR</strong> arriva entro 30-45 giorni dalla cessazione (a volte nella stessa busta, a volte dopo).</p>
            <p>Il TFR &egrave; circa una mensilit&agrave; per ogni anno lavorato: dopo 5 anni sono circa 5 mensilit&agrave;. <Link href="/tfr" style={{color:'var(--green)',fontWeight:600}}>Calcola il tuo TFR</Link></p>
            <div className="guide-callout warn">
              <strong>Controlla tutto voce per voce.</strong> Ferie non pagate, ratei mancanti, TFR errato: succede pi&ugrave; spesso di quanto pensi. Se non torna, vai al sindacato.
            </div>
          </div>

          <div className="guide-section rv" id="giusta-causa">
            <div className="guide-section-label">Caso speciale</div>
            <h2>Dimissioni per <em>giusta causa</em></h2>
            <p>Le dimissioni per giusta causa sono quelle motivate da un <strong>grave inadempimento del datore</strong>: stipendio non pagato, mobbing, demansionamento, mancato versamento contributi, violazioni di sicurezza. Non devi dare preavviso e hai diritto alla <Link href="/naspi" style={{color:'var(--green)',fontWeight:600}}>NASpI</Link>.</p>
            <p>Prima di dimetterti per giusta causa, raccogli le prove: screenshot, email, <Link href="/pec" style={{color:'var(--green)',fontWeight:600}}>PEC</Link> inviate al datore, buste paga con ritardi. La giusta causa va dimostrata.</p>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Elena</em></h2>
            <p>Elena, 28 anni, impiegata CCNL Commercio livello 4&deg;, 3 anni di lavoro, stipendio netto 1.500&euro;/mese. Ha trovato un lavoro migliore e si dimette a marzo.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Preavviso</strong>
                CCNL Commercio, livello 4&deg;<br />
                Anzianit&agrave;: 3 anni (sotto 5)<br />
                Preavviso: 30 giorni di calendario
              </div>
              <div className="guide-compare-item after">
                <strong>Liquidazione finale</strong>
                Ultima busta (marzo): ~1.500&euro;<br />
                Ferie non godute (8 gg): ~550&euro;<br />
                Ratei tredicesima (3/12): ~375&euro;<br />
                TFR (3 anni): ~4.500&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Totale: ~7.200&euro;</strong>
              </div>
            </div>
          </div>

          <div className="guide-section rv" id="errori">
            <div className="guide-section-label">Attenzione</div>
            <h2>I 5 errori <em>pi&ugrave; comuni</em></h2>
            <div className="guide-callout warn" style={{marginTop:'0'}}><strong>Sbagliare la data di decorrenza.</strong> &Egrave; il giorno DOPO il tuo ultimo giorno di lavoro. Sbagliare crea trattenute o contestazioni.</div>
            <div className="guide-callout warn"><strong>Non calcolare il preavviso prima di inviare.</strong> CCNL, livello, anzianit&agrave;. Nel dubbio, patronato.</div>
            <div className="guide-callout warn"><strong>Non controllare l&apos;ultima busta paga.</strong> Ferie non pagate, ratei mancanti, TFR errato: controlla tutto voce per voce.</div>
            <div className="guide-callout warn"><strong>Pensare di avere diritto alla NASpI.</strong> Le dimissioni volontarie NON danno diritto alla NASpI. Solo giusta causa o maternit&agrave;/paternit&agrave;.</div>
            <div className="guide-callout warn"><strong>Dimettersi a voce o via email.</strong> Le dimissioni DEVONO essere telematiche (salvo periodo di prova). Altrimenti non sono valide.</div>
          </div>

          {/* FISCOZEN - per chi apre P.IVA dopo le dimissioni */}
          <div className="guide-section rv">
            <div className="guide-section-label">Apri la P.IVA?</div>
            <h2>Ti dimetti per <em>metterti in proprio?</em></h2>
            <p>Molti si dimettono per aprire la <Link href="/piva" style={{color:'var(--green)',fontWeight:600}}>partita IVA</Link>. Se &egrave; il tuo caso, un servizio di gestione della partita IVA ti aiuta a partire subito senza errori.</p>
            <FiscozenBanner />
          </div>

          <div className="guide-section rv" id="faq">
            <div className="guide-section-label">FAQ</div>
            <h2>Domande <em>frequenti</em></h2>
            <FAQ items={faqItems} />
          </div>

          <div className="guide-section rv">
            <div className="guide-section-label">Approfondimenti</div>
            <h2>Guide <em>correlate</em></h2>
            <div className="guide-related">
              <Link href="/naspi" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">NASpI</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/></svg>
                </div>
                <h4>NASpI</h4>
                <p>Se ti dimetti per giusta causa, hai diritto alla disoccupazione.</p>
              </Link>
              <Link href="/tfr" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">TFR</text><circle cx="100" cy="110" r="30" fill="#2D8A6E" opacity=".08"/><text x="100" y="116" textAnchor="middle" fill="#2D8A6E" fontFamily="sans-serif" fontSize="16" fontWeight="700">&euro;</text></svg>
                </div>
                <h4>TFR &mdash; Liquidazione</h4>
                <p>Quanto hai accantonato e quando lo ricevi.</p>
              </Link>
            </div>
          </div>

          <div className="guide-section" style={{textAlign:'center',borderBottom:'none',paddingBottom:'0'}}>
            <Link href="/guide" className="cta-btn" style={{color:'#fff'}}>Esplora tutte le guide<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
