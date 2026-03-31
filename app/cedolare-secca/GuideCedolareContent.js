'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideCedolareContent({ faqItems }) {
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
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Fisco</span></div>
            <div className="guide-hero-top"><span className="guide-tag fisco">Fisco</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Come Funziona la Cedolare Secca nel 2026: Aliquote, Calcolo e Quando Conviene</h1>
            <p className="guide-hero-sub">Tassa piatta sugli affitti al 21% o 10%. Come funziona, quando conviene rispetto all&apos;IRPEF, come si sceglie e le novit&agrave; sugli affitti brevi 2026.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>10 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="120" height="80" rx="8" fill="#E8724A" opacity=".08"/><rect x="40" y="40" width="120" height="80" rx="8" stroke="#E8724A" strokeWidth="1.5" opacity=".2"/><text x="100" y="72" textAnchor="middle" fill="#E8724A" fontSize="22" fontWeight="700">21%</text><text x="100" y="92" textAnchor="middle" fill="#8A857C" fontSize="10">cedolare secca</text><rect x="55" y="140" width="40" height="28" rx="6" fill="#2D8A6E" opacity=".12"/><text x="75" y="159" textAnchor="middle" fill="#2D8A6E" fontSize="11" fontWeight="700">10%</text><rect x="105" y="140" width="40" height="28" rx="6" fill="#5B7EC5" opacity=".12"/><text x="125" y="159" textAnchor="middle" fill="#5B7EC5" fontSize="11" fontWeight="700">26%</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">

          {/* KEY TAKEAWAYS */}
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; la cedolare secca e come funziona (tassa piatta al 21% o 10%)</li>
                <li>Le tre aliquote: 21% ordinaria, 10% concordata, 26% affitti brevi</li>
                <li>Quando conviene rispetto all&apos;IRPEF ordinaria</li>
                <li>Come si sceglie e come si paga con F24</li>
                <li>Un esempio reale: Marco, 1.323&euro; risparmiati ogni anno</li>
              </ul>
            </div>
          </div>

          {/* INDICE */}
          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; la cedolare secca</a>
              <a href="#chi">Chi pu&ograve; sceglierla</a>
              <a href="#aliquote">Aliquote: 21%, 10% e 26%</a>
              <a href="#conviene">Quando conviene</a>
              <a href="#come">Come si sceglie e si paga</a>
              <a href="#brevi">Affitti brevi 2026</a>
              <a href="#esempio">Esempio: il caso di Marco</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          {/* COS'È */}
          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; la <em>cedolare secca</em></h2>

            <p>La cedolare secca &egrave; un&apos;<strong>imposta sostitutiva piatta sugli affitti</strong>. Invece di sommare il canone di affitto al tuo reddito e pagare l&apos;IRPEF progressiva (23-43%), paghi un&apos;imposta fissa del 21% (o 10% in certi casi) direttamente sul canone. In pi&ugrave;, non paghi l&apos;imposta di registro (2% del canone annuo) e il bollo sul contratto.</p>

            <p>Pu&ograve; sceglierla solo chi affitta come <strong>persona fisica</strong>, fuori dall&apos;attivit&agrave; d&apos;impresa, un immobile a uso abitativo. L&apos;inquilino pu&ograve; anche essere una societ&agrave;, purch&eacute; usi l&apos;immobile come abitazione (Cassazione 12395/2024).</p>

            <h3>Le parole che devi conoscere</h3>

            <p><strong>Cedolare secca</strong> &mdash; imposta sostitutiva fissa (21% o 10%) sul canone di affitto. Sostituisce IRPEF, registro e bollo.</p>
            <p><strong>Canone concordato</strong> &mdash; affitto calcolato secondo accordi territoriali tra associazioni di inquilini e proprietari. D&agrave; accesso all&apos;aliquota ridotta del 10%.</p>
            <p><strong>Modello RLI</strong> &mdash; il modulo dell&apos;Agenzia delle Entrate per registrare, prorogare o risolvere contratti di locazione. Si usa anche per scegliere la cedolare.</p>
            <p><strong>Locazione breve</strong> &mdash; affitto non superiore a 30 giorni tra privati. Aliquota cedolare: 21% (primo immobile) o 26% (dal secondo).</p>
            <p><strong>Imposta di registro</strong> &mdash; tassa del 2% del canone annuo (minimo 67&euro;) dovuta alla registrazione. Con la cedolare non si paga.</p>
          </div>

          {/* CHI PUÒ */}
          <div className="guide-section rv" id="chi">
            <div className="guide-section-label">Chi riguarda</div>
            <h2>Chi pu&ograve; <em>sceglierla</em></h2>

            <p><strong>Possono scegliere la cedolare:</strong> le persone fisiche proprietarie di immobili ad uso abitativo che affittano fuori dall&apos;attivit&agrave; d&apos;impresa. Funziona anche in compropriet&agrave; (ognuno sceglie per la propria quota) e anche se l&apos;inquilino &egrave; una societ&agrave;.</p>

            <p><strong>Non possono sceglierla:</strong> le societ&agrave;, chi affitta immobili a uso commerciale (uffici, negozi, capannoni), chi affitta nell&apos;esercizio di un&apos;impresa o arte professionale.</p>

            <div className="guide-callout warn">
              <strong>Rinuncia all&apos;adeguamento ISTAT obbligatoria.</strong> Scegliendo la cedolare, rinunci automaticamente ad aggiornare il canone in base all&apos;inflazione per tutta la durata dell&apos;opzione. Devi comunicarlo all&apos;inquilino con raccomandata prima di optare.
            </div>
          </div>

          {/* ALIQUOTE */}
          <div className="guide-section rv" id="aliquote">
            <div className="guide-section-label">Le percentuali</div>
            <h2>Aliquote: <em>21%, 10% e 26%</em></h2>

            <h3>21% &mdash; ordinaria</h3>
            <p>Si applica a tutti i contratti liberi (4+4), ai contratti transitori (1-18 mesi) e alle locazioni brevi per il primo immobile. Si paga sul canone lordo senza deduzioni.</p>

            <h3>10% &mdash; canone concordato</h3>
            <p>Si applica ai contratti a <strong>canone concordato</strong>, calcolati secondo gli accordi territoriali. Anche i contratti per studenti universitari e i transitori nelle zone con accordi locali possono beneficiarne.</p>

            <h3>26% &mdash; affitti brevi (dal secondo immobile)</h3>
            <p>Dal 2024, il secondo immobile in locazione breve paga il 26%. Il primo mantiene il 21%. Dal 2026 il limite massimo &egrave; sceso da 4 a <strong>2 immobili</strong>: dal terzo serve la partita IVA.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
              <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#E8724A" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">ALIQUOTE CEDOLARE SECCA 2026</text>
                <rect x="16" y="50" width="308" height="36" rx="8" fill="#2D8A6E"/>
                <text x="28" y="74" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">10% &mdash; Canone concordato (la pi&ugrave; vantaggiosa)</text>
                <rect x="16" y="94" width="260" height="36" rx="8" fill="#E8724A"/>
                <text x="28" y="118" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">21% &mdash; Contratti liberi e 1&deg; immobile breve</text>
                <rect x="16" y="138" width="200" height="36" rx="8" fill="#5B7EC5"/>
                <text x="28" y="162" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">26% &mdash; Affitti brevi (dal 2&deg; immobile)</text>
              </svg>
            </div>

            <div className="guide-callout">
              <strong>Il canone concordato conviene quasi sempre.</strong> Su un canone di 800&euro;/mese: con cedolare ordinaria paghi 2.016&euro;/anno, con cedolare concordata paghi 960&euro;/anno. Il risparmio &egrave; di <strong>1.056&euro; l&apos;anno</strong>, ogni anno.
            </div>
          </div>

          {/* QUANDO CONVIENE */}
          <div className="guide-section rv" id="conviene">
            <div className="guide-section-label">Confronto</div>
            <h2>Quando <em>conviene</em></h2>

            <p>La cedolare al 21% conviene rispetto all&apos;IRPEF quando il tuo reddito complessivo supera i <strong>28.000&euro;</strong>, perch&eacute; in quella fascia l&apos;IRPEF &egrave; al 33% (e sale al 43% oltre 50.000&euro;).</p>

            <p>Con il regime ordinario IRPEF, il canone viene ridotto del 5% (deduzione forfettaria), quindi si tassa il 95% all&apos;aliquota marginale. Con un reddito tra 15.000 e 28.000&euro; (IRPEF 23%), il regime ordinario costa circa il 21,85% effettivo. La cedolare al 21% &egrave; quasi identica, ma fa risparmiare registro e bollo.</p>

            <p>L&apos;unica eccezione &egrave; chi ha redditi molto bassi (sotto 15.000&euro;) e non paga IRPEF per effetto delle detrazioni: in quel caso il reddito da affitto potrebbe non essere tassato affatto.</p>

            <div className="guide-callout">
              <strong>In pratica:</strong> la cedolare conviene quasi sempre. L&apos;unico caso in cui non conviene &egrave; se il tuo reddito &egrave; cos&igrave; basso da non pagare IRPEF.
            </div>
          </div>

          {/* COME SI SCEGLIE */}
          <div className="guide-section rv" id="come">
            <div className="guide-section-label">Procedura</div>
            <h2>Come si sceglie <em>e come si paga</em></h2>

            <h3>Passo 1: Scegli al momento della registrazione</h3>
            <p>Quando registri il contratto all&apos;Agenzia delle Entrate (modello RLI online o allo sportello), seleziona l&apos;opzione cedolare secca. Se non la scegli subito, puoi optare nelle annualit&agrave; successive entro 30 giorni dalla scadenza.</p>

            <h3>Passo 2: Comunica all&apos;inquilino</h3>
            <p>Invia una raccomandata in cui comunichi la scelta e la rinuncia all&apos;adeguamento ISTAT. &Egrave; un requisito formale obbligatorio.</p>

            <h3>Passo 3: Paga con F24</h3>
            <p>Si paga in acconto (giugno/novembre) e a saldo (giugno successivo), come l&apos;IRPEF. Se l&apos;imposta annua &egrave; sotto 257,52&euro;, si paga tutta a giugno.</p>

            <h3>Passo 4: Dichiara nel 730</h3>
            <p>La cedolare va dichiarata nel Quadro B del <Link href="/730" style={{color:'var(--green)',fontWeight:600}}>730</Link>. Il canone percepito e l&apos;imposta pagata si inseriscono nelle apposite caselle.</p>
          </div>

          {/* AFFITTI BREVI */}
          <div className="guide-section rv" id="brevi">
            <div className="guide-section-label">Novit&agrave; 2026</div>
            <h2>Affitti brevi: <em>novit&agrave; 2026</em></h2>

            <p>Dal 2026, chi affitta tramite piattaforme (Airbnb, Booking, Vrbo) pu&ograve; usare la cedolare secca solo fino a <strong>2 immobili</strong>. Dal terzo l&apos;attivit&agrave; &egrave; considerata imprenditoriale: serve la partita IVA e l&apos;iscrizione alla Camera di Commercio.</p>

            <p>Per i primi due immobili: <strong>21%</strong> per il primo, <strong>26%</strong> per il secondo. Le piattaforme trattengono il 21% direttamente e lo versano all&apos;Agenzia delle Entrate.</p>

            <div className="guide-callout warn">
              <strong>CIN obbligatorio dal 2024.</strong> Per gli affitti brevi &egrave; obbligatorio il Codice Identificativo Nazionale, da esporre nell&apos;annuncio e sulla porta dell&apos;immobile. Senza CIN, sanzioni da 800 a 8.000&euro;. Si ottiene sul portale del Ministero del Turismo.
            </div>
          </div>

          {/* ESEMPIO */}
          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Marco</em></h2>

            <p>Marco ha 45 anni, lavora come dipendente con RAL 38.000&euro;. Ha ereditato un bilocale a Milano che affitta con contratto 4+4 a 900&euro;/mese (10.800&euro;/anno). Deve scegliere: cedolare secca o IRPEF ordinaria?</p>

            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Con IRPEF ordinaria</strong>
                Canone: 10.800&euro; &times; 95% = 10.260&euro;<br />
                Aliquota marginale: 33%<br />
                IRPEF: 3.386&euro;<br />
                Imposta di registro: 216&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Totale: 3.602&euro;</strong>
              </div>
              <div className="guide-compare-item after">
                <strong>Con cedolare secca 21%</strong>
                Canone: 10.800&euro; &times; 21%<br />
                Nessun registro<br />
                Nessun bollo<br />
                <br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Totale: 2.268&euro;</strong>
              </div>
            </div>

            <p>Marco risparmia <strong>1.334&euro; all&apos;anno</strong> con la cedolare secca. In 10 anni sono oltre 13.000&euro;. E se usasse il canone concordato al 10%, il risparmio sarebbe ancora maggiore.</p>
          </div>

          {/* FAQ */}
          <div className="guide-section rv" id="faq">
            <div className="guide-section-label">FAQ</div>
            <h2>Domande <em>frequenti</em></h2>
            <FAQ items={faqItems} />
          </div>

          {/* GUIDE CORRELATE */}
          <div className="guide-section rv">
            <div className="guide-section-label">Approfondimenti</div>
            <h2>Guide <em>correlate</em></h2>
            <div className="guide-related">
              <Link href="/imu" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">IMU 2026</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="86" width="140" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="110" width="120" height="28" rx="6" fill="#2D8A6E" opacity=".12"/><text x="116" y="128" textAnchor="middle" fill="#2D8A6E" fontFamily="sans-serif" fontSize="10" fontWeight="600">-25% con cedolare</text></svg>
                </div>
                <h4>IMU 2026</h4>
                <p>Se affitti con cedolare, l&apos;IMU sulla seconda casa si riduce del 25%.</p>
              </Link>
              <Link href="/730" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">730 Precompilato</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="86" width="140" height="5" rx="2.5" fill="#E8E0D4"/><circle cx="240" cy="44" r="16" fill="#2D8A6E" opacity=".9"/><path d="M234 44l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h4>Faccio il 730</h4>
                <p>La cedolare va dichiarata nel Quadro B del 730.</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="guide-section" style={{textAlign:'center',borderBottom:'none',paddingBottom:'0'}}>
            <Link href="/guide" className="cta-btn" style={{color:'#fff'}}>Esplora tutte le guide<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
