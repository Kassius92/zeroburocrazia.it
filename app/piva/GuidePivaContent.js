'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { FiscozenBanner, FiscozenSticky } from '@/components/FiscozenBanner';

export default function GuidePivaContent({ faqItems }) {
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
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Fisco</span></div>
            <div className="guide-hero-top"><span className="guide-tag fisco">Fisco</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Come Aprire la Partita IVA nel 2026: Costi, Tasse e Forfettario</h1>
            <p className="guide-hero-sub">Regime forfettario o ordinario, costi reali, tasse, contributi INPS, codice ATECO e procedura online. La guida che avrei voluto leggere prima di aprire la mia.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>15 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="120" height="120" rx="12" fill="#E8724A" opacity=".06"/><text x="100" y="90" textAnchor="middle" fill="#E8724A" fontSize="28" fontWeight="700" opacity=".3">P.IVA</text><text x="100" y="120" textAnchor="middle" fill="#2D8A6E" fontSize="16" fontWeight="600">5-15%</text><text x="100" y="140" textAnchor="middle" fill="#8A857C" fontSize="10">forfettario</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; la P.IVA e quando serve davvero</li>
                <li>Forfettario vs ordinario: perch&eacute; il forfettario vince quasi sempre</li>
                <li>Quanto paghi davvero: esempio con numeri reali (Sara, 75% in tasca)</li>
                <li>Come si apre in 4 passi + contributi INPS</li>
                <li>Un esempio reale: Giulia, da 16.800&euro; dipendente a 36.400&euro; freelance</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; la partita IVA</a>
              <a href="#quanto">Quanto paghi davvero</a>
              <a href="#forfettario">Forfettario o ordinario</a>
              <a href="#come">Come si apre</a>
              <a href="#contributi">Contributi INPS</a>
              <a href="#costi">Costi di gestione</a>
              <a href="#esempio">Esempio: il caso di Giulia</a>
              <a href="#errori">Errori che costano caro</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; la <em>partita IVA</em></h2>
            <p>La partita IVA &egrave; un numero di 11 cifre che ti identifica come lavoratore autonomo. Se vuoi lavorare in proprio &mdash; freelance, consulente, artigiano, commerciante &mdash; ti serve per emettere fatture, pagare le tasse e versare i contributi INPS.</p>
            <p>La paura &egrave; spesso ingiustificata. Con il <strong>regime forfettario</strong> paghi tra il 5% e il 15% di tasse (contro il 23-43% dell&apos;IRPEF da dipendente), non gestisci l&apos;IVA, e la contabilit&agrave; &egrave; minima. Un freelance con 30.000&euro; di ricavi tiene in tasca circa il <strong>75%</strong> di quello che fattura.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>Regime forfettario</strong> &mdash; il regime agevolato per chi fattura fino a 85.000&euro;/anno. Tassa al 5% per i primi 5 anni (poi 15%), niente IVA, contabilit&agrave; minima.</p>
            <p><strong>Codice ATECO</strong> &mdash; il codice che identifica la tua attivit&agrave;. Determina il coefficiente di redditivit&agrave; (quante tasse paghi) e l&apos;ente previdenziale. Sceglierlo male pu&ograve; costarti migliaia di euro.</p>
            <p><strong>Coefficiente di redditivit&agrave;</strong> &mdash; la percentuale del fatturato su cui paghi le tasse nel forfettario. Coefficiente 78% su 30.000&euro; = paghi su 23.400&euro;.</p>
            <p><strong>Contributi INPS</strong> &mdash; contributi pensionistici obbligatori. Gestione Separata: 26,23% del reddito. Artigiani/commercianti: minimale fisso ~4.500&euro;/anno.</p>
            <p><strong>Fatturazione elettronica</strong> &mdash; obbligatoria per tutti dal 2024. Formato XML via Sistema di Interscambio. Si pu&ograve; usare il servizio gratuito dell&apos;Agenzia delle Entrate. <Link href="/fattura-elettronica" style={{color:'var(--green)',fontWeight:600}}>Guida completa</Link></p>
            <div className="guide-callout">
              <strong>Quando serve davvero:</strong> se l&apos;attivit&agrave; &egrave; continuativa e abituale. Per un lavoro una tantum puoi usare la prestazione occasionale fino a 5.000&euro;/anno. Oltre, o se lavori regolarmente, ti serve la P.IVA.
            </div>
          </div>

          <div className="guide-section rv" id="quanto">
            <div className="guide-section-label">I numeri</div>
            <h2>Quanto paghi <em>davvero</em></h2>
            <p>Sara, graphic designer, 30.000&euro; di ricavi. Regime forfettario, primi 5 anni, Gestione Separata INPS, coefficiente 78%.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Calcolo</strong>
                Ricavi annui: 30.000&euro;<br />
                Reddito imponibile (78%): 23.400&euro;<br />
                Contributi INPS (26,23%): &minus;6.138&euro;<br />
                Imposta sostitutiva (5%): &minus;863&euro;
              </div>
              <div className="guide-compare-item after">
                <strong>Risultato</strong>
                Servizio gestione P.IVA: &minus;400&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Netto in tasca: ~22.600&euro;</strong>
                <span style={{fontSize:'13px',color:'var(--soft)'}}>= 75% del fatturato</span>
              </div>
            </div>
            <p>La regola d&apos;oro: <strong>metti da parte il 30% di ogni incasso</strong> fin dal primo giorno.</p>
            <div className="guide-callout warn">
              <strong>Attenzione al secondo anno.</strong> Il primo anno paghi poco (solo il saldo). Ma a giugno dell&apos;anno dopo arrivano saldo + primo acconto insieme: per Sara sarebbero ~12.000&euro; in un colpo. Apri un conto separato e versa il 30% ad ogni fattura.
            </div>
          </div>

          <div className="guide-section rv" id="forfettario">
            <div className="guide-section-label">La scelta</div>
            <h2>Forfettario o <em>ordinario?</em></h2>
            <div className="guide-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
              <svg viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">CONFRONTO REGIMI FISCALI</text>
                <rect x="16" y="50" width="308" height="36" rx="8" fill="#2D8A6E"/>
                <text x="28" y="74" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Forfettario: 5-15% &bull; niente IVA &bull; fino a 85k&euro;</text>
                <rect x="16" y="94" width="308" height="36" rx="8" fill="#E8724A"/>
                <text x="28" y="118" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Ordinario: 23-43% &bull; IVA da gestire &bull; senza limiti</text>
                <text x="16" y="160" fill="#2D8A6E" fontFamily="sans-serif" fontSize="11" fontWeight="600">Per la grande maggioranza di chi inizia: forfettario.</text>
              </svg>
            </div>
            <h3>I 7 requisiti per il forfettario nel 2026</h3>
            <p>Ricavi sotto 85.000&euro;/anno. Spese per dipendenti sotto 20.000&euro;. Redditi da lavoro dipendente sotto 35.000&euro;. Non fatturare pi&ugrave; del 50% all&apos;ex datore (nei primi 2 anni). Non avere partecipazioni in societ&agrave; di persone. Non avere prevalenza di redditi di capitale. Non operare in regime speciale IVA. <Link href="/regime-forfettario" style={{color:'var(--green)',fontWeight:600}}>Guida completa al forfettario</Link></p>
          </div>

          <div className="guide-section rv" id="come">
            <div className="guide-section-label">Procedura</div>
            <h2>Come si apre, <em>in pratica</em></h2>
            <h3>Passo 1: Scegli il codice ATECO</h3>
            <p>Il codice che identifica la tua attivit&agrave;. Determina quante tasse paghi. Non indovinare: un servizio di gestione P.IVA per questa scelta ti risparmia migliaia di euro.</p>
            <h3>Passo 2: Scegli il regime fiscale</h3>
            <p>Forfettario (5-15%, semplice) o ordinario (23-43%, complesso). Per la maggior parte: forfettario.</p>
            <h3>Passo 3: Compila il modello AA9/12</h3>
            <p>Online su agenziaentrate.gov.it con <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link>, oppure il professionista lo fa per te. Il numero P.IVA arriva in poche ore.</p>
            <h3>Passo 4: Iscrizione INPS e Camera di Commercio</h3>
            <p>Professionista: Gestione Separata (online, gratis). Artigiano/commerciante: Camera di Commercio + INPS artigiani/commercianti.</p>
            <div className="guide-callout">
              <strong>Quanto tempo ci vuole?</strong> Con un servizio di gestione P.IVA, in 24-48 ore sei operativo.
            </div>
          </div>

          <div className="guide-section rv" id="contributi">
            <div className="guide-section-label">Previdenza</div>
            <h2>Contributi <em>INPS</em></h2>
            <p><strong>Professionisti (Gestione Separata):</strong> 26,23% del reddito imponibile. Nessun contributo minimo: se non fatturi, non paghi. Tipico per consulenti, designer, sviluppatori, formatori.</p>
            <p><strong>Artigiani e commercianti:</strong> circa 24-24,48% del reddito, con un minimo fisso di ~4.500&euro;/anno anche a reddito zero. In forfettario puoi chiedere la riduzione del 35% (scende a ~3.100&euro;/anno) ma devi fare domanda all&apos;INPS entro il 28 febbraio.</p>
            <p><strong>Professionisti con cassa:</strong> avvocati, medici, ingegneri, architetti versano alla propria cassa professionale.</p>
          </div>

          <div className="guide-section rv" id="costi">
            <div className="guide-section-label">Gestione</div>
            <h2>Costi di <em>gestione</em></h2>
            <p>Aprire la P.IVA &egrave; gratis. Gestirla costa qualcosa.</p>
            <p><strong>Da solo (servizi AE):</strong> 0&euro;. Fatturazione gratuita dell&apos;Agenzia delle Entrate, dichiarazione fai-da-te. Richiede tempo e conoscenze fiscali.</p>
            <p><strong>Servizio di gestione P.IVA:</strong> abbonamento annuale. Apertura, dichiarazione, F24, fatturazione, consulenza illimitata. Tutto gestito, zero pensieri.</p>
            <div className="guide-callout">
              <strong>Consiglio onesto:</strong> se sei in forfettario con un&apos;attivit&agrave; semplice (freelance, consulente, artigiano), un servizio di gestione della partita IVA ti fa risparmiare tempo e ti evita errori costosi.
            </div>
            <div style={{marginTop:'32px'}}>
              <FiscozenBanner />
            </div>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Giulia</em></h2>
            <p>Giulia ha 27 anni, vive a Bologna, lavorava come social media manager da dipendente a 1.400&euro; netti al mese. Un&apos;azienda le offre un progetto freelance da 2.500&euro;/mese, poi un&apos;altra 1.500&euro;/mese. Totale potenziale: 4.000&euro;/mese.</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Da dipendente</strong>
                Stipendio netto: 1.400&euro;/mese<br />
                Annuo netto: 16.800&euro;<br />
                Crescita: limitata
              </div>
              <div className="guide-compare-item after">
                <strong>Con P.IVA forfettaria</strong>
                Ricavi: 48.000&euro;/anno<br />
                INPS + tasse: &minus;11.203&euro;<br />
                Gestione P.IVA: &minus;400&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Netto: ~36.400&euro;/anno</strong>
              </div>
            </div>
            <p>Pi&ugrave; del doppio. In 48 ore aveva il numero di partita IVA e poteva fatturare. Lavora da casa, sceglie i suoi orari.</p>
          </div>

          <div className="guide-section rv" id="errori">
            <div className="guide-section-label">Attenzione</div>
            <h2>Errori che <em>costano caro</em></h2>
            <div className="guide-callout warn" style={{marginTop:'0'}}><strong>Non mettere da parte i soldi per le tasse.</strong> A giugno del secondo anno arriva saldo + acconto insieme. Apri un conto separato e versa il 30% ad ogni fattura.</div>
            <div className="guide-callout warn"><strong>Scegliere il codice ATECO a caso.</strong> Un codice sbagliato pu&ograve; significare un coefficiente pi&ugrave; alto (= pi&ugrave; tasse) o un inquadramento previdenziale errato con minimali da 4.500&euro;/anno.</div>
            <div className="guide-callout warn"><strong>Fatturare pi&ugrave; del 50% all&apos;ex datore.</strong> Perdi il diritto al 5% e passi al 15%. Triplichi le tasse.</div>
            <div className="guide-callout warn"><strong>Non chiedere la riduzione INPS.</strong> Per artigiani/commercianti in forfettario: la riduzione 35% non &egrave; automatica. Domanda INPS entro il 28 febbraio.</div>
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
              <Link href="/regime-forfettario" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Regime Forfettario</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="110" width="80" height="28" rx="6" fill="#2D8A6E" opacity=".12"/><text x="96" y="128" textAnchor="middle" fill="#2D8A6E" fontFamily="sans-serif" fontSize="12" fontWeight="700">5-15%</text></svg>
                </div>
                <h4>Regime Forfettario</h4>
                <p>Requisiti 2026, tetto 85k, coefficienti e limiti.</p>
              </Link>
              <Link href="/fattura-elettronica" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Fattura Elettronica</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/></svg>
                </div>
                <h4>Fattura Elettronica</h4>
                <p>Come emettere, software e obblighi.</p>
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
