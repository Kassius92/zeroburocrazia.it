'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuidePassaportoContent({ faqItems }) {
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
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Documenti</span></div>
            <div className="guide-hero-top"><span className="guide-tag documenti">Documenti</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Come Fare il Passaporto nel 2026: Costi, Documenti e Tempi</h1>
            <p className="guide-hero-sub">Prenotazione online, documenti necessari, costo totale 116&euro;, tempi di rilascio, cosa fare se non trovi appuntamenti e novit&agrave; PagoPA.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>12 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="35" width="100" height="130" rx="8" fill="#1A1A2E" opacity=".06" stroke="#1A1A2E" strokeWidth="1.5" opacity=".15"/><text x="100" y="75" textAnchor="middle" fill="#1A1A2E" fontSize="11" fontWeight="700" opacity=".3">REPUBBLICA</text><text x="100" y="90" textAnchor="middle" fill="#1A1A2E" fontSize="11" fontWeight="700" opacity=".3">ITALIANA</text><circle cx="100" cy="115" r="18" fill="#2D8A6E" opacity=".08"/><text x="100" y="120" textAnchor="middle" fill="#2D8A6E" fontSize="10" fontWeight="600">CHIP</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; il passaporto elettronico e quando serve</li>
                <li>Costo totale: 116,20&euro; (contributo + marca da bollo)</li>
                <li>Come prenotare l&apos;appuntamento online (e cosa fare se non trovi slot)</li>
                <li>Documenti necessari, passaporto per minori, smarrimento</li>
                <li>Un esempio reale: Francesco, dal booking al viaggio a New York</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; e quando serve</a>
              <a href="#costi">Quanto costa</a>
              <a href="#documenti">Documenti necessari</a>
              <a href="#come">Come prenotare e richiedere</a>
              <a href="#tempi">Tempi e urgenze</a>
              <a href="#minori">Passaporto per minori</a>
              <a href="#esempio">Esempio: il caso di Francesco</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; il passaporto <em>e quando serve</em></h2>
            <p>Il passaporto &egrave; il documento che ti permette di viaggiare <strong>fuori dall&apos;Unione Europea</strong>. Dentro l&apos;UE basta la <Link href="/cie" style={{color:'var(--green)',fontWeight:600}}>CIE</Link>, ma per USA, UK, Giappone, Thailandia, Australia serve il passaporto.</p>
            <p>&Egrave; un libretto di 48 pagine con un microchip che contiene i dati biometrici (foto e impronte). Tutti i passaporti italiani dal 2006 sono elettronici.</p>
            <p>Il passaporto <strong>non si &ldquo;rinnova&rdquo;</strong> pi&ugrave;: quando scade, ne fai uno nuovo da zero. Stessa procedura, stessi costi.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>Contributo amministrativo</strong> &mdash; i 42,70&euro; che paghi allo Stato. Dal 2026 solo via PagoPA.</p>
            <p><strong>Contrassegno telematico</strong> &mdash; la &ldquo;marca da bollo&rdquo; da 73,50&euro;. In tabaccheria.</p>
            <p><strong>Agenda Passaporti</strong> &mdash; il portale della Polizia di Stato dove prenoti l&apos;appuntamento in Questura.</p>
            <p><strong>Progetto Polis</strong> &mdash; l&apos;iniziativa di Poste Italiane: passaporto negli uffici postali (comuni sotto 15.000 abitanti).</p>
            <div className="guide-callout warn">
              <strong>Regola dei 6 mesi.</strong> Molti Paesi (USA, Thailandia, Brasile) richiedono che il passaporto sia valido per almeno <strong>6 mesi dalla data di ingresso</strong>. Controlla sempre su viaggiaresicuri.it.
            </div>
          </div>

          <div className="guide-section rv" id="costi">
            <div className="guide-section-label">I soldi</div>
            <h2>Quanto <em>costa</em></h2>
            <div className="guide-img" style={{background:'linear-gradient(135deg,#ECF0FA,#dce4f5)'}}>
              <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#5B7EC5" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">COSTI PASSAPORTO 2026</text>
                <rect x="16" y="50" width="240" height="28" rx="6" fill="#5B7EC5"/><text x="28" y="70" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Contributo PagoPA: 42,70&euro;</text>
                <rect x="16" y="84" width="260" height="28" rx="6" fill="#E8724A"/><text x="28" y="104" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Marca da bollo: 73,50&euro;</text>
                <rect x="16" y="118" width="140" height="28" rx="6" fill="#8A857C"/><text x="28" y="138" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Foto tessera: ~6&euro;</text>
                <rect x="16" y="160" width="308" height="28" rx="6" fill="#2D8A6E"/><text x="170" y="180" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="700">Totale: ~122&euro; (+ 9,53&euro; se spedizione a casa)</text>
              </svg>
            </div>
            <div className="guide-callout">
              <strong>Novit&agrave; 2026: pagamento solo PagoPA.</strong> I 42,70&euro; si pagano solo tramite PagoPA: in posta, online o con app. I vecchi bollettini postali non sono pi&ugrave; accettati.
            </div>
          </div>

          <div className="guide-section rv" id="documenti">
            <div className="guide-section-label">Checklist</div>
            <h2>Documenti <em>necessari</em></h2>
            <p><strong>Modulo di richiesta</strong> &mdash; lo scarichi dal portale dopo la prenotazione.</p>
            <p><strong>Documento di identit&agrave;</strong> &mdash; CIE o carta valida, in originale + fotocopia.</p>
            <p><strong>2 fototessera</strong> &mdash; formato ICAO (35&times;45mm), sfondo bianco, viso frontale.</p>
            <p><strong>Ricevuta PagoPA 42,70&euro;</strong></p>
            <p><strong>Marca da bollo 73,50&euro;</strong> (in tabaccheria)</p>
            <p><strong>Vecchio passaporto</strong> (se ne hai uno). Se smarrito/rubato: denuncia.</p>
          </div>

          <div className="guide-section rv" id="come">
            <div className="guide-section-label">Procedura</div>
            <h2>Come prenotare <em>e richiedere</em></h2>
            <h3>Passo 1: Prenota l&apos;appuntamento online</h3>
            <p>Su <strong>passaportonline.poliziadistato.it</strong> con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link> o CIE. Scegli la Questura, seleziona giorno e ora. Nei comuni piccoli puoi prenotare anche in Posta.</p>
            <h3>Passo 2: Prepara documenti e pagamenti</h3>
            <p>Marca da bollo 73,50&euro; + PagoPA 42,70&euro; + 2 fototessera + modulo compilato.</p>
            <h3>Passo 3: Presentati in Questura</h3>
            <p>Consegna documenti, rilascio impronte digitali, firma. Ricevi una ricevuta con il numero della pratica.</p>
            <h3>Passo 4: Ritira il passaporto</h3>
            <p>Dopo <strong>10-15 giorni lavorativi</strong> in Questura (con ricevuta) oppure a casa con &ldquo;Passaporto a domicilio&rdquo; (9,53&euro; extra).</p>
          </div>

          <div className="guide-section rv" id="tempi">
            <div className="guide-section-label">Tempistiche</div>
            <h2>Tempi e <em>urgenze</em></h2>
            <p>Trovare appuntamento: da 1 giorno a diversi mesi (nelle grandi citt&agrave;). Rilascio: <strong>10-15 giorni lavorativi</strong>. Periodi di punta: fino a 3-4 settimane. Consiglio: prenota almeno <strong>2-3 mesi prima</strong> del viaggio.</p>
            <div className="guide-callout">
              <strong>Procedure d&apos;urgenza:</strong> se parti entro pochi giorni e hai documentazione (biglietto aereo, lettera del datore, certificato medico), puoi accedere all&apos;<strong>Agenda Prioritaria</strong> o presentarti direttamente in Questura. Non trovi slot? Collegati alle <strong>6-8 del mattino</strong>: &egrave; quando escono i nuovi appuntamenti.
            </div>
          </div>

          <div className="guide-section rv" id="minori">
            <div className="guide-section-label">Bambini e ragazzi</div>
            <h2>Passaporto per <em>minori</em></h2>
            <p>Ogni minore deve avere il <strong>proprio passaporto individuale</strong>. Servono <strong>entrambi i genitori</strong> presenti allo sportello (o autorizzazione del giudice). Validit&agrave;: 3 anni (sotto i 3 anni), 5 anni (3-18 anni). Costo: identico agli adulti (116,20&euro;).</p>
            <div className="guide-callout warn">
              <strong>Minori che viaggiano con un solo genitore:</strong> porta una dichiarazione di accompagnamento firmata dall&apos;altro genitore. Alcuni Paesi la richiedono tassativamente alla frontiera.
            </div>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Francesco</em></h2>
            <p>Francesco, 30 anni, ha prenotato un volo per New York a giugno. Non ha il passaporto.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Timeline</strong>
                Marzo: prenota su passaportonline<br />
                Stessa settimana: marca + PagoPA + foto<br />
                Aprile: appuntamento in Questura<br />
                +12 giorni: passaporto arriva a casa
              </div>
              <div className="guide-compare-item after">
                <strong>Costi</strong>
                Contributo PagoPA: 42,70&euro;<br />
                Marca da bollo: 73,50&euro;<br />
                Foto tessera: 6&euro;<br />
                Spedizione a domicilio: 9,53&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Totale: 131,73&euro;</strong>
              </div>
            </div>
            <p>Francesco ha prenotato 3 mesi prima del viaggio. Se avesse aspettato maggio, non avrebbe trovato appuntamento in tempo.</p>
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
              <Link href="/cie" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#ECF0FA,#dce4f5)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">CIE</text><rect x="56" y="74" width="35" height="45" rx="4" fill="#8A857C" opacity=".15"/><rect x="100" y="78" width="80" height="5" rx="2.5" fill="#E8E0D4"/></svg>
                </div>
                <h4>Carta d&apos;Identit&agrave;</h4>
                <p>Per viaggiare in UE basta la CIE. Come richiederla.</p>
              </Link>
              <Link href="/spid" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">SPID</text><rect x="56" y="78" width="208" height="28" rx="6" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1"/><rect x="56" y="150" width="208" height="24" rx="6" fill="#5B7EC5"/></svg>
                </div>
                <h4>SPID</h4>
                <p>Serve per prenotare l&apos;appuntamento online.</p>
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
