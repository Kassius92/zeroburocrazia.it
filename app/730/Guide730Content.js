'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function Guide730Content({ faqItems }) {
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

      {/* HERO — Buffer article style */}
      <div className="guide">
        <div className="guide-hero">
          <div className="guide-hero-inner">
          <div className="guide-hero-text">
            {/* Breadcrumb */}
            <div className="guide-crumb">
              <Link href="/guide">Guide</Link>
              <span className="guide-crumb-sep">&rsaquo;</span>
              <span>Fisco</span>
            </div>

            {/* Tag + Date */}
            <div className="guide-hero-top">
              <span className="guide-tag fisco">Fisco</span>
              <span className="guide-hero-date">Mar 2026</span>
            </div>

            {/* Title */}
            <h1>Come Fare il 730 nel 2026: Detrazioni, Scadenze e Rimborso</h1>

            <p className="guide-hero-sub">
              La dichiarazione dei redditi come non te l&apos;ha mai spiegata nessuno. Detrazioni, precompilato, scadenze e rimborso. Tutto gratis.
            </p>

            <div className="guide-hero-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                15 min di lettura
              </span>
            </div>
          </div>

          {/* Hero image */}
          <div className="guide-hero-img">
            <img src="/hero-730.png" alt="Guida al 730 2026: documento, calcolatrice, scadenza 30 settembre" style={{width:'100%',height:'100%',objectFit:'contain',padding:'16px'}} />
          </div>
          </div>
        </div>

        {/* BODY */}
        <div className="guide-body">

          {/* KEY TAKEAWAYS */}
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; il 730 e perch&eacute; conviene farlo anche se non sei obbligato</li>
                <li>Tutte le detrazioni a cui hai diritto (e quelle che tutti dimenticano)</li>
                <li>Come fare il 730 da solo, al CAF o col commercialista</li>
                <li>Un esempio reale con calcolo del rimborso</li>
                <li>Le scadenze 2026 e gli errori da evitare</li>
              </ul>
            </div>
          </div>

          {/* TABLE OF CONTENTS */}
          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; il 730</a>
              <a href="#chi-deve">Chi deve farlo</a>
              <a href="#detrazioni">Quanto puoi recuperare</a>
              <a href="#come-si-fa">Come si fa, passo per passo</a>
              <a href="#documenti">I documenti necessari</a>
              <a href="#esempio">Esempio: il caso di Maria</a>
              <a href="#scadenze">Le scadenze 2026</a>
              <a href="#errori">Gli errori pi&ugrave; comuni</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          {/* ═══ COS'È IL 730 ═══ */}
          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; il <em>730</em></h2>

            <p>Ogni mese il tuo datore di lavoro trattiene una parte del tuo stipendio per pagare le tasse al posto tuo. Il problema &egrave; che lui calcola le tasse basandosi solo sullo stipendio, senza sapere nulla della tua vita privata: non sa se paghi un affitto, se hai il mutuo, se vai dal dentista, se i tuoi figli fanno sport.</p>

            <p>Il Modello 730 serve esattamente a questo: &egrave; il documento con cui comunichi all&apos;Agenzia delle Entrate tutte le spese sostenute durante l&apos;anno che ti danno diritto a <strong>detrazioni</strong> (rimborsi parziali) o <strong>deduzioni</strong> (riduzioni del reddito imponibile). Nella stragrande maggioranza dei casi, il risultato &egrave; che hai pagato pi&ugrave; tasse del dovuto e ti spetta un rimborso.</p>

            <p>Il rimborso arriva direttamente in busta paga &mdash; di solito tra luglio e agosto se presenti il 730 entro giugno. Se sei pensionato, il rimborso arriva con la pensione di agosto o settembre.</p>

            <h3>Le parole che devi conoscere</h3>

            <p><strong>CU (Certificazione Unica)</strong> &mdash; il documento che il datore di lavoro ti consegna entro il 16 marzo. Riporta quanto hai guadagnato nell&apos;anno e quante tasse sono gi&agrave; state versate.</p>
            <p><strong>IRPEF</strong> &mdash; l&apos;Imposta sul Reddito delle Persone Fisiche. Si calcola per scaglioni: pi&ugrave; guadagni, pi&ugrave; alta &egrave; la percentuale.</p>
            <p><strong>Detrazione</strong> &mdash; una riduzione dell&apos;imposta. Se hai diritto a una detrazione del 19% su 1.000&euro; di spese mediche, paghi 190&euro; di tasse in meno.</p>
            <p><strong>Deduzione</strong> &mdash; una riduzione del reddito su cui si calcolano le tasse. Se guadagni 25.000&euro; e hai 3.000&euro; di deduzioni, le tasse si calcolano su 22.000&euro;.</p>
            <p><strong>Precompilata</strong> &mdash; il 730 che l&apos;Agenzia delle Entrate prepara per te, gi&agrave; parzialmente compilato con i dati in suo possesso.</p>

            <div className="guide-callout">
              <strong>Perch&eacute; conviene anche se non sei obbligato:</strong> quasi tutti hanno almeno qualche spesa detraibile. Anche un caso semplice pu&ograve; generare 200&ndash;500&euro; di rimborso. Chi ha mutuo, affitto o figli arriva facilmente a 1.000&ndash;3.000&euro;. Ogni anno che non fai il 730, quei soldi li perdi definitivamente.
            </div>
          </div>

          {/* ═══ CHI DEVE FARLO ═══ */}
          <div className="guide-section rv" id="chi-deve">
            <div className="guide-section-label">Chi riguarda</div>
            <h2>Chi deve fare <em>il 730</em></h2>

            <p><strong>Devi farlo se</strong> sei un lavoratore dipendente o pensionato che ha percepito redditi nel 2025.</p>
            <p><strong>&Egrave; obbligatorio se</strong> hai cambiato lavoro nel 2025 (due CU), hai percepito sia stipendio che NASpI, oppure hai redditi da pi&ugrave; fonti.</p>
            <p><strong>Ti conviene se</strong> hai un solo lavoro e almeno una spesa da scaricare: dentista, affitto, mutuo, trasporti, sport dei figli.</p>
            <p><strong>Non puoi farlo se</strong> hai la partita IVA (devi usare il Modello Redditi PF) oppure hai redditi d&apos;impresa.</p>

            <div className="guide-callout">
              <strong>La regola pratica:</strong> se durante l&apos;anno hai speso soldi per salute, casa, figli, trasporti o animali domestici &mdash; fai il 730. Quasi sicuramente ti spetta un rimborso.
            </div>
          </div>

          {/* ═══ DETRAZIONI ═══ */}
          <div className="guide-section rv" id="detrazioni">
            <div className="guide-section-label">Quanto risparmi</div>
            <h2>Quanto puoi <em>recuperare</em></h2>

            <p>Lo Stato rimborsa una percentuale delle spese sostenute. Per la maggior parte &egrave; il 19%, ma ci sono eccezioni importanti.</p>

            <h3>Spese mediche &mdash; 19%</h3>
            <p>Farmaci, visite specialistiche, interventi, ticket sanitari. Oltre la franchigia di 129&euro;. Serve pagamento tracciabile. Esempio: 800&euro; spesi in visite = 127&euro; di rimborso. Inclusi anche psicologo, fisioterapista, occhiali e apparecchi acustici.</p>

            <h3>Interessi mutuo &mdash; 19%</h3>
            <p>Solo prima casa. Detrai il 19% degli interessi pagati alla banca, fino a un massimo di 4.000&euro; annui. Significa un risparmio massimo di 760&euro; all&apos;anno.</p>

            <h3>Affitto &mdash; fino a 991&euro;</h3>
            <p>Per lavoratori fuori sede o studenti fuori comune. L&apos;importo varia in base al reddito. Per gli under 31 la detrazione pu&ograve; arrivare a 991&euro;.</p>

            <h3>Spese scolastiche &mdash; 19%</h3>
            <p>Asilo nido, scuola materna, elementari, medie, superiori, universit&agrave;. Incluse mense scolastiche, gite e trasporto scolastico. Max 1.000&euro; per studente.</p>

            <h3>Trasporto pubblico &mdash; 19%</h3>
            <p>Abbonamenti bus, metro, treno per tragitto casa-lavoro o casa-scuola. Tetto 250&euro;.</p>

            <h3>Sport figli 5-18 anni &mdash; 19%</h3>
            <p>Nuoto, calcio, danza, arti marziali. Max 210&euro; per figlio.</p>

            <h3>Ristrutturazione &mdash; 50%</h3>
            <p>In 10 rate annuali. Serve il bonifico parlante (non ordinario).</p>

            <h3>Donazioni ONLUS &mdash; 26%</h3>
            <p>La percentuale pi&ugrave; alta tra le detrazioni ordinarie. Nessun tetto massimo.</p>

            <div className="guide-callout warn">
              <strong>Le detrazioni dimenticate pi&ugrave; spesso:</strong> abbonamento ai trasporti pubblici, spese veterinarie, sport dei figli, spese funebri, donazioni a ONLUS. Se non le inserisci nel 730, quei soldi li perdi per sempre.
            </div>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
              <svg viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">DETRAZIONI PRINCIPALI</text>
                <rect x="16" y="50" width="308" height="36" rx="10" fill="#2D8A6E"/>
                <text x="28" y="74" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Affitto under 31 &mdash; fino a 991&euro;</text>
                <rect x="16" y="94" width="252" height="36" rx="10" fill="#E8724A"/>
                <text x="28" y="118" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Interessi mutuo &mdash; max 760&euro;</text>
                <rect x="16" y="138" width="196" height="36" rx="10" fill="#5B7EC5"/>
                <text x="28" y="162" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Ristrutturazione 50%</text>
                <rect x="16" y="182" width="156" height="36" rx="10" fill="#8B6CC1"/>
                <text x="28" y="206" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Spese mediche 19%</text>
                <rect x="16" y="226" width="116" height="36" rx="10" fill="#C49A2A"/>
                <text x="28" y="250" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Trasporti 19%</text>
              </svg>
            </div>
          </div>

          {/* ═══ COME SI FA ═══ */}
          <div className="guide-section rv" id="come-si-fa">
            <div className="guide-section-label">Procedura</div>
            <h2>Come si fa, <em>passo per passo</em></h2>

            <p>Hai tre strade. Una &egrave; completamente gratuita. Per accedere alla precompilata online ti serve lo SPID. Se non ce l&apos;hai, <Link href="/guide" style={{color:'var(--green)',fontWeight:600}}>fallo prima</Link> &mdash; ci vogliono 15 minuti e non costa niente.</p>

            <h3>Passo 1: Fai lo SPID</h3>
            <p>15 minuti, gratuito. Servono un documento d&apos;identit&agrave;, la tessera sanitaria e uno smartphone.</p>

            <h3>Passo 2: Raccogli i documenti</h3>
            <p>CU + tutte le ricevute delle spese detraibili dell&apos;anno. Mettile in una cartellina.</p>

            <h3>Passo 3: Apri la precompilata</h3>
            <p>Dal 30 aprile su agenziaentrate.gov.it. Accedi con SPID. Troverai redditi, spese mediche e interessi mutuo gi&agrave; inseriti.</p>

            <h3>Passo 4: Controlla e invia</h3>
            <p><strong>Non accettare senza controllare.</strong> Le voci che mancano pi&ugrave; spesso: sport dei figli, affitto, spese mediche private, abbonamenti trasporti.</p>

            <h3>Quanto costa farlo</h3>
            <p><strong>Da solo (precompilata):</strong> gratis, 1-2 ore. Serve SPID.</p>
            <p><strong>CAF / Patronato:</strong> 30-80&euro;, 30 minuti. Se sei iscritto al sindacato, spesso &egrave; gratuito.</p>
            <p><strong>Commercialista:</strong> 80-200&euro;, 15 minuti dal tuo lato. Ideale per situazioni complesse.</p>

            <div className="guide-callout">
              <strong>Un lavoro + poche spese</strong> &rarr; fallo da solo. <strong>Mutuo, cambio lavoro, figli</strong> &rarr; vai al CAF. <strong>Cripto, redditi esteri, affitti</strong> &rarr; commercialista.
            </div>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#FBF5E6,#f5edd4)'}}>
              <svg viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="324" height="284" rx="16" fill="white" stroke="#E8E0D4" strokeWidth="2"/>
                <rect x="8" y="8" width="324" height="44" rx="16" fill="#F0EBE3"/>
                <rect x="8" y="36" width="324" height="16" fill="#F0EBE3"/>
                <circle cx="32" cy="30" r="7" fill="#E8724A" opacity=".6"/>
                <circle cx="52" cy="30" r="7" fill="#C49A2A" opacity=".6"/>
                <circle cx="72" cy="30" r="7" fill="#2D8A6E" opacity=".6"/>
                <rect x="120" y="22" width="140" height="16" rx="8" fill="white" opacity=".7"/>
                <text x="28" y="80" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="18" fontWeight="bold">730 Precompilato 2026</text>
                <rect x="28" y="92" width="180" height="6" rx="3" fill="#E8E0D4"/>
                <rect x="28" y="116" width="140" height="44" rx="10" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1.5"/>
                <text x="40" y="144" fill="#8A857C" fontFamily="sans-serif" fontSize="13">Reddito lordo</text>
                <rect x="180" y="116" width="120" height="44" rx="10" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1.5"/>
                <text x="192" y="144" fill="#1A1A2E" fontFamily="sans-serif" fontSize="14" fontWeight="700">32.000 &euro;</text>
                <rect x="28" y="172" width="140" height="44" rx="10" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1.5"/>
                <text x="40" y="200" fill="#8A857C" fontFamily="sans-serif" fontSize="13">Spese mediche</text>
                <rect x="180" y="172" width="120" height="44" rx="10" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1.5"/>
                <text x="192" y="200" fill="#1A1A2E" fontFamily="sans-serif" fontSize="14" fontWeight="700">1.200 &euro;</text>
                <rect x="28" y="236" width="200" height="44" rx="12" fill="#2D8A6E"/>
                <text x="46" y="264" fill="white" fontFamily="sans-serif" fontSize="14" fontWeight="700">Rimborso: ~943&euro;</text>
                <circle cx="280" cy="190" r="28" fill="#E4F3ED"/>
                <path d="M266 190l10 10 18-18" stroke="#2D8A6E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* ═══ DOCUMENTI ═══ */}
          <div className="guide-section rv" id="documenti">
            <div className="guide-section-label">Checklist</div>
            <h2>I documenti <em>necessari</em></h2>

            <h3>Sempre necessari</h3>
            <p><strong>CU 2026</strong> &mdash; la ricevi dal datore entro il 16 marzo. Se non arriva, la scarichi dal sito AdE con SPID.</p>
            <p><strong>Documento d&apos;identit&agrave;</strong> + codice fiscale validi.</p>
            <p><strong>IBAN</strong> del conto corrente per il rimborso.</p>
            <p><strong>730 dell&apos;anno precedente</strong> &mdash; aiuta a non dimenticare voci.</p>

            <h3>Per le detrazioni (porta quelli che hai)</h3>
            <p><strong>Ricevute spese mediche</strong> &mdash; dentista, visite, farmaci, psicologo, occhiali.</p>
            <p><strong>Contratto d&apos;affitto</strong> registrato all&apos;Agenzia delle Entrate.</p>
            <p><strong>Certificazione interessi mutuo</strong> &mdash; la banca te la invia ogni anno.</p>
            <p><strong>Ricevute spese scolastiche</strong> &mdash; rette, mensa, gite. Max 1.000&euro; per studente.</p>
            <p><strong>Sport figli</strong> (5-18 anni) &mdash; max 210&euro; per figlio.</p>
            <p><strong>Abbonamento trasporto</strong> &mdash; metro, bus, treno. Tetto 250&euro;.</p>
            <p><strong>Spese veterinarie</strong> &mdash; tetto 550&euro;.</p>
            <p><strong>Fatture ristrutturazione</strong> + bonifici parlanti.</p>
            <p><strong>Donazioni ONLUS</strong> &mdash; detraibili al 26%.</p>

            <div className="guide-callout">
              <strong>Il metodo della cartellina:</strong> crea una cartellina &quot;730 2026&quot;. Ogni volta che ricevi una ricevuta detraibile, mettila dentro. A maggio avrai tutto pronto in 5 minuti.
            </div>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#ECF0FA,#dce4f5)'}}>
              <svg viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#5B7EC5" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">CHECKLIST DOCUMENTI</text>
                
                <rect x="16" y="50" width="150" height="50" rx="12" fill="white"/>
                <circle cx="44" cy="75" r="14" fill="#E4F3ED"/>
                <path d="M37 75l5 5 10-10" stroke="#2D8A6E" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="66" y="80" fill="#1A1A2E" fontFamily="sans-serif" fontSize="13" fontWeight="600">CU 2026</text>
                
                <rect x="16" y="108" width="150" height="50" rx="12" fill="white"/>
                <circle cx="44" cy="133" r="14" fill="#E4F3ED"/>
                <path d="M37 133l5 5 10-10" stroke="#2D8A6E" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="66" y="129" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Documento</text>
                <text x="66" y="144" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">d&apos;identit&agrave;</text>
                
                <rect x="16" y="166" width="150" height="50" rx="12" fill="white"/>
                <circle cx="44" cy="191" r="14" fill="#E4F3ED"/>
                <path d="M37 191l5 5 10-10" stroke="#2D8A6E" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="66" y="187" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">IBAN conto</text>
                <text x="66" y="202" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">corrente</text>
                
                <rect x="16" y="224" width="150" height="50" rx="12" fill="white"/>
                <circle cx="44" cy="249" r="14" fill="#FBF5E6"/>
                <rect x="36" y="245" width="16" height="8" rx="2" fill="#C49A2A" opacity=".5"/>
                <text x="66" y="245" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12">730 anno</text>
                <text x="66" y="260" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12">precedente</text>
                
                <rect x="174" y="50" width="150" height="50" rx="12" fill="white"/>
                <circle cx="202" cy="75" r="14" fill="#FDF0EB"/>
                <text x="224" y="72" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Ricevute</text>
                <text x="224" y="87" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">mediche</text>
                
                <rect x="174" y="108" width="150" height="50" rx="12" fill="white"/>
                <circle cx="202" cy="133" r="14" fill="#FDF0EB"/>
                <text x="224" y="129" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Contratto</text>
                <text x="224" y="144" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">affitto</text>
                
                <rect x="174" y="166" width="150" height="50" rx="12" fill="white"/>
                <circle cx="202" cy="191" r="14" fill="#FDF0EB"/>
                <text x="224" y="187" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Interessi</text>
                <text x="224" y="202" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">mutuo</text>
                
                <rect x="174" y="224" width="150" height="50" rx="12" fill="white"/>
                <circle cx="202" cy="249" r="14" fill="#FDF0EB"/>
                <text x="224" y="245" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Spese</text>
                <text x="224" y="260" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">scolastiche</text>
              </svg>
            </div>
            </div>
          </div>

          {/* ═══ ESEMPIO ═══ */}
          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Maria</em></h2>

            <p><strong>Maria ha 26 anni</strong>, impiegata a Torino, 22.000&euro; lordi annui. Non ha mai fatto il 730. Quest&apos;anno ha speso 320&euro; dal dentista, paga un affitto da 500&euro;/mese come lavoratrice under 31 e ha un abbonamento annuale GTT da 350&euro;.</p>

            <p>A maggio apre la precompilata con SPID. Il dentista risulta gi&agrave; inserito. Manca l&apos;abbonamento GTT: lo aggiunge manualmente. Controlla ogni voce, clicca Invia.</p>

            <div className="guide-compare" style={{marginTop:'24px'}}>
              <div className="guide-compare-item before">
                <strong>Spesa</strong>
                Spese mediche: 320&euro;<br />
                Affitto under 31: annuale<br />
                Trasporti GTT: 350&euro;
              </div>
              <div className="guide-compare-item after">
                <strong>Rimborso</strong>
                Mediche: (320 - 129) &times; 19% = 36&euro;<br />
                Affitto under 31: 991&euro;<br />
                Trasporti: 350 &times; 19% = 66&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Totale: 1.093&euro;</strong>
              </div>
            </div>

            <p>Nella busta paga di luglio Maria trova <strong>1.093&euro; in pi&ugrave;</strong>. Zero euro di costo, circa un&apos;ora e mezza di tempo. Per 4 anni non ha fatto il 730 e ha perso circa 4.000&euro;.</p>
          </div>

          {/* ═══ SCADENZE ═══ */}
          <div className="guide-section rv" id="scadenze">
            <div className="guide-section-label">Calendario</div>
            <h2>Le <em>scadenze</em> 2026</h2>

            <p><strong>Entro il 16 marzo</strong> &mdash; il datore di lavoro ti consegna la CU. Se non arriva, sollecita per iscritto.</p>
            <p><strong>30 aprile</strong> &mdash; l&apos;Agenzia delle Entrate pubblica la precompilata online. Accedi con SPID.</p>
            <p><strong>Maggio &ndash; Giugno</strong> &mdash; il periodo ideale per presentare il 730. Meno code al CAF, rimborso gi&agrave; a luglio.</p>
            <p><strong>Luglio &ndash; Agosto</strong> &mdash; rimborso in busta paga. Pensionati: con la pensione di agosto o settembre.</p>
            <p><strong>30 settembre 2026</strong> &mdash; scadenza ultima per l&apos;invio del 730. Dopo serve il Modello Redditi PF.</p>
          </div>

          {/* ═══ ERRORI ═══ */}
          <div className="guide-section rv" id="errori">
            <div className="guide-section-label">Attenzione</div>
            <h2>Gli errori pi&ugrave; <em>comuni</em></h2>

            <div className="guide-callout warn" style={{marginTop:'0'}}>
              <strong>Accettare la precompilata senza controllarla.</strong> Le spese sportive dei figli, l&apos;affitto, le spese mediche private, gli abbonamenti ai trasporti: spesso mancano. Se accetti senza controllare, perdi quei rimborsi.
            </div>

            <div className="guide-callout warn">
              <strong>Non fare il 730 perch&eacute; &quot;tanto non cambia nulla&quot;.</strong> Anche una situazione semplice genera 200&ndash;400&euro; di rimborso. Ogni anno. Per tutta la vita lavorativa.
            </div>

            <div className="guide-callout warn">
              <strong>Pagare spese detraibili in contanti.</strong> Dal 2025 tutte le spese detraibili al 19% devono essere pagate con metodi tracciabili. Paghi in contanti? Perdi la detrazione. Eccezioni: farmaci con ricetta e prestazioni SSN.
            </div>

            <div className="guide-callout warn">
              <strong>Andare al CAF all&apos;ultimo momento.</strong> A settembre i CAF sono sommersi. Vai tra maggio e giugno: zero stress, rimborso anticipato.
            </div>
          </div>

          {/* ═══ FAQ ═══ */}
          <div className="guide-section rv" id="faq">
            <div className="guide-section-label">FAQ</div>
            <h2>Domande <em>frequenti</em></h2>
            <FAQ items={faqItems} />
          </div>

          {/* ═══ GUIDE CORRELATE ═══ */}
          <div className="guide-section rv">
            <div className="guide-section-label">Approfondimenti</div>
            <h2>Guide <em>correlate</em></h2>
            <div className="guide-related">
              <Link href="/guide" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}>
                    {/* ISEE card mockup */}
                    <rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}} />
                    <rect x="56" y="36" width="60" height="8" rx="4" fill="#E8724A" opacity=".3" />
                    <text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">ISEE 2026</text>
                    <rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="56" y="86" width="140" height="5" rx="2.5" fill="#E8E0D4" />
                    {/* Steps */}
                    <circle cx="68" cy="110" r="8" fill="#E4F3ED" />
                    <text x="68" y="113" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="bold">1</text>
                    <rect x="84" y="106" width="100" height="5" rx="2.5" fill="#E8E0D4" />
                    <circle cx="68" cy="132" r="8" fill="#E4F3ED" />
                    <text x="68" y="135" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="bold">2</text>
                    <rect x="84" y="128" width="80" height="5" rx="2.5" fill="#E8E0D4" />
                    <circle cx="68" cy="154" r="8" fill="#E4F3ED" />
                    <text x="68" y="157" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="bold">3</text>
                    <rect x="84" y="150" width="120" height="5" rx="2.5" fill="#E8E0D4" />
                    {/* Badge */}
                    <circle cx="240" cy="44" r="16" fill="#2D8A6E" opacity=".9" />
                    <path d="M234 44l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h4>Come Fare l&apos;ISEE 2026</h4>
                <p>Per bonus e agevolazioni ti serve l&apos;ISEE. Documenti, procedura al CAF, simulazione online.</p>
              </Link>
              <Link href="/guide" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#ECF0FA,#dce4f5)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}>
                    {/* SPID card mockup */}
                    <rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}} />
                    {/* Login form */}
                    <rect x="56" y="36" width="60" height="8" rx="4" fill="#5B7EC5" opacity=".3" />
                    <text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Accedi con SPID</text>
                    {/* Input fields */}
                    <rect x="56" y="78" width="208" height="28" rx="6" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1" />
                    <text x="68" y="96" fill="#B5B0A8" fontFamily="sans-serif" fontSize="10">Email o username</text>
                    <rect x="56" y="114" width="208" height="28" rx="6" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1" />
                    <text x="68" y="132" fill="#B5B0A8" fontFamily="sans-serif" fontSize="10">Password</text>
                    {/* Button */}
                    <rect x="56" y="150" width="208" height="24" rx="6" fill="#5B7EC5" />
                    <text x="160" y="166" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="10" fontWeight="bold">Entra con SPID</text>
                    {/* Shield icon */}
                    <circle cx="240" cy="44" r="16" fill="#5B7EC5" opacity=".9" />
                    <path d="M240 35v10l-5 4 5 4 5-4v-10z" fill="none" stroke="white" strokeWidth="1.5" />
                  </svg>
                </div>
                <h4>Come Fare lo SPID in 15 Minuti</h4>
                <p>Per la precompilata online ti serve lo SPID. Gratis con CIE, immediato.</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="guide-section" style={{textAlign:'center',borderBottom:'none',paddingBottom:'0'}}>
            <Link href="/guide" className="cta-btn" style={{color:'#fff'}}>
              Esplora tutte le guide
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
