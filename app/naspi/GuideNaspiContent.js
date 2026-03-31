'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideNaspiContent({ faqItems }) {
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

            <h1>Come Richiedere la NASpI nel 2026: Requisiti, Importo e Durata</h1>

            <p className="guide-hero-sub">
              Quanto ti spetta, come fare domanda entro 68 giorni, le scadenze da non perdere e gli errori che ti fanno perdere soldi.
            </p>

            <div className="guide-hero-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                12 min di lettura
              </span>
            </div>
          </div>

          <div className="guide-hero-img">
            <img src="/hero-naspi.png" alt="Guida NASpI 2026" width="400" height="400" />
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
                <li>Cos&apos;&egrave; la NASpI e chi ne ha diritto (non solo i licenziati)</li>
                <li>Quanto ti spetta e come si calcola l&apos;importo</li>
                <li>Come fare domanda entro 68 giorni e cosa succede dopo</li>
                <li>Un esempio reale: Davide, 17.500&euro; netti in 21 mesi</li>
                <li>I 5 errori che fanno perdere la NASpI</li>
              </ul>
            </div>
          </div>

          {/* INDICE */}
          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; la NASpI</a>
              <a href="#requisiti">I requisiti</a>
              <a href="#quanto">Quanto spetta</a>
              <a href="#domanda">Come fare domanda</a>
              <a href="#lavorare">Lavorare durante la NASpI</a>
              <a href="#esempio">Esempio: il caso di Davide</a>
              <a href="#errori">I 5 errori da evitare</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          {/* COS'È */}
          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; la <em>NASpI</em></h2>

            <p>Hai perso il lavoro e non &egrave; stata colpa tua? Lo Stato ti paga un assegno mensile mentre cerchi una nuova occupazione. Si chiama <strong>NASpI</strong> (Nuova Assicurazione Sociale per l&apos;Impiego) &mdash; in parole povere, &egrave; la disoccupazione.</p>

            <p>Non &egrave; un regalo: &egrave; un&apos;assicurazione che <strong>hai gi&agrave; pagato</strong> con i contributi versati durante il lavoro. Ogni mese il tuo datore di lavoro versava all&apos;INPS circa l&apos;1,61% del tuo stipendio lordo proprio per finanziare la NASpI. Se hai lavorato come dipendente e hai versato contributi, hai diritto a riaverli indietro quando ne hai bisogno.</p>

            <p>L&apos;importo dipende da quanto guadagnavi prima, e la durata da quanto a lungo hai lavorato. Il massimo &egrave; <strong>1.584,70&euro; lordi al mese</strong> per un massimo di <strong>24 mesi</strong>. Dal sesto mese l&apos;importo cala del 3% ogni mese: i primi mesi sono quelli in cui prendi di pi&ugrave;, quindi &egrave; fondamentale fare domanda subito.</p>

            <h3>Le parole che devi conoscere</h3>

            <p><strong>NASpI</strong> &mdash; Nuova Assicurazione Sociale per l&apos;Impiego. L&apos;assegno di disoccupazione per chi perde il lavoro involontariamente.</p>
            <p><strong>Disoccupazione involontaria</strong> &mdash; Hai perso il lavoro senza volerlo: licenziamento, fine contratto a termine, dimissioni per giusta causa. Le dimissioni volontarie normali NON danno diritto alla NASpI.</p>
            <p><strong>D&eacute;calage</strong> &mdash; La riduzione progressiva dell&apos;importo. Dal 6&deg; mese scende del 3% ogni mese. Per chi ha pi&ugrave; di 55 anni parte dall&apos;8&deg; mese.</p>
            <p><strong>NASpI-COM</strong> &mdash; Il modulo che <strong>devi obbligatoriamente</strong> inviare all&apos;INPS se inizi qualsiasi lavoro mentre percepisci la NASpI. Hai 30 giorni.</p>
            <p><strong>Contribuzione figurativa</strong> &mdash; Durante la NASpI, l&apos;INPS ti accredita automaticamente i contributi per la pensione. Gratuiti.</p>
            <p><strong>NASpI anticipata</strong> &mdash; Puoi ricevere tutta la NASpI residua in anticipo per aprire un&apos;attivit&agrave; autonoma. Dal 2026: 70% subito, 30% dopo.</p>

            <div className="guide-callout">
              <strong>Non &egrave; solo per i licenziati:</strong> la NASpI spetta anche a chi ha un contratto scaduto, a chi si &egrave; dimesso per giusta causa (stipendio non pagato, mobbing, molestie), e alle mamme e ai pap&agrave; che si dimettono durante il primo anno di vita del figlio.
            </div>
          </div>

          {/* REQUISITI */}
          <div className="guide-section rv" id="requisiti">
            <div className="guide-section-label">Chi ne ha diritto</div>
            <h2>I <em>requisiti</em></h2>

            <p>Per avere la NASpI devi soddisfare tutti e tre questi requisiti contemporaneamente.</p>

            <h3>1. Disoccupazione involontaria</h3>
            <p>Hai perso il lavoro senza volerlo. Rientrano: licenziamento per qualsiasi motivo, fine contratto a termine, dimissioni per giusta causa, risoluzione consensuale in sede protetta, mancato rinnovo di apprendistato.</p>

            <h3>2. Almeno 13 settimane di contributi</h3>
            <p>Devi aver versato almeno 13 settimane di contributi nei 4 anni precedenti. Equivale a circa 3 mesi di lavoro dipendente. Le settimane gi&agrave; utilizzate per una NASpI precedente non si contano.</p>

            <h3>3. Domanda entro 68 giorni</h3>
            <p>Dalla data di cessazione del rapporto di lavoro. Il termine &egrave; tassativo e non ammette proroghe. Dopo i 68 giorni il diritto decade completamente.</p>

            <p><strong>S&igrave;, hai diritto se:</strong> sei stato licenziato, il tuo contratto a termine &egrave; scaduto, ti sei dimesso per giusta causa, hai firmato una risoluzione consensuale in sede protetta, ti sei dimesso durante la maternit&agrave; o paternit&agrave; entro il primo anno di vita del figlio.</p>

            <p><strong>No, non hai diritto se:</strong> ti sei dimesso volontariamente senza giusta causa, sei un dipendente pubblico a tempo indeterminato, sei un lavoratore autonomo o con partita IVA.</p>

            <div className="guide-callout warn">
              <strong>Dimissioni volontarie = niente NASpI.</strong> Se vuoi lasciare il lavoro e avere diritto alla NASpI, devi avere una giusta causa documentabile. Se il datore non ti paga, non mandare email: manda una PEC e tieni le prove.
            </div>
          </div>

          {/* QUANTO SPETTA */}
          <div className="guide-section rv" id="quanto">
            <div className="guide-section-label">Calcolo</div>
            <h2>Quanto <em>spetta</em> nel 2026</h2>

            <h3>La formula</h3>
            <p>Si calcola sulla <strong>retribuzione media imponibile degli ultimi 4 anni</strong>. Se la media &egrave; uguale o inferiore a 1.456,72&euro;, la NASpI &egrave; il 75% di quella media. Se &egrave; superiore: 75% di 1.456,72&euro; pi&ugrave; il 25% della differenza. In ogni caso, <strong>non pu&ograve; superare 1.584,70&euro; lordi al mese</strong> (circa 1.200&ndash;1.250&euro; netti).</p>

            <h3>La riduzione progressiva (d&eacute;calage)</h3>
            <p>Dal 6&deg; mese (151&deg; giorno) si riduce del 3% ogni mese. Se hai pi&ugrave; di 55 anni, parte dall&apos;8&deg; mese. I primi 5 mesi sono quelli in cui ricevi l&apos;importo pieno: &egrave; un motivo in pi&ugrave; per fare domanda subito.</p>

            <h3>Quanto dura</h3>
            <p>La <strong>met&agrave; delle settimane lavorate negli ultimi 4 anni</strong>. 4 anni pieni = 24 mesi (massimo). 2 anni = 12 mesi. 1 anno = 6 mesi. Le settimane gi&agrave; usate per una precedente NASpI non si contano.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
              <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">IMPORTI NASpI 2026</text>
                <rect x="16" y="50" width="308" height="32" rx="8" fill="#2D8A6E"/>
                <text x="28" y="72" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Max lordo: 1.584,70&euro;/mese</text>
                <rect x="16" y="90" width="240" height="32" rx="8" fill="#E8724A"/>
                <text x="28" y="112" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Max netto: ~1.250&euro;/mese</text>
                <rect x="16" y="130" width="170" height="32" rx="8" fill="#5B7EC5"/>
                <text x="28" y="152" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Durata max: 24 mesi</text>
                <rect x="16" y="170" width="120" height="32" rx="8" fill="#8B6CC1"/>
                <text x="28" y="192" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">D&eacute;calage: -3%/mese</text>
              </svg>
            </div>
          </div>

          {/* COME FARE DOMANDA */}
          <div className="guide-section rv" id="domanda">
            <div className="guide-section-label">Procedura</div>
            <h2>Come fare <em>domanda</em></h2>

            <p>La domanda si fa solo online. Hai tre strade. Per accedere al portale INPS ti serve lo <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>SPID</Link>.</p>

            <h3>Passo 1: Scegli come farla</h3>
            <p><strong>Da solo (sito INPS):</strong> accedi con SPID o CIE a inps.it. Cerca &ldquo;NASpI&rdquo;. La procedura &egrave; guidata passo per passo.</p>
            <p><strong>Tramite patronato (gratis):</strong> vai a un patronato (CGIL, CISL, UIL, ACLI). Fanno tutto loro, &egrave; gratuito per legge. Il metodo pi&ugrave; sicuro.</p>
            <p><strong>Contact Center INPS:</strong> 803 164 (gratis da fisso) o 06 164 164 (da cellulare).</p>

            <h3>Passo 2: Prepara i documenti</h3>
            <p><strong>SPID o CIE</strong> per accedere al portale INPS (se non ce l&apos;hai, <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>fallo prima</Link> &mdash; ci vogliono 15 minuti). L&apos;<strong>ultima busta paga</strong> (non obbligatoria ma utile per verificare). L&apos;<strong>IBAN</strong> di un conto intestato a te.</p>

            <h3>Passo 3: Dopo la domanda</h3>
            <p>Entro <strong>15 giorni</strong> devi presentarti al Centro per l&apos;Impiego per firmare il Patto di Servizio Personalizzato. Il primo pagamento arriva in 30&ndash;45 giorni dalla domanda. I pagamenti successivi sono mensili.</p>

            <div className="guide-callout">
              <strong>Quando parte il pagamento:</strong> se fai domanda <strong>entro 8 giorni</strong> dalla cessazione, la NASpI parte dall&apos;8&deg; giorno. Se aspetti di pi&ugrave;, parte dal giorno dopo la domanda &mdash; e perdi i giorni in mezzo. Ogni giorno di ritardo &egrave; un giorno di NASpI perso.
            </div>
          </div>

          {/* LAVORARE DURANTE */}
          <div className="guide-section rv" id="lavorare">
            <div className="guide-section-label">Compatibilit&agrave;</div>
            <h2>Lavorare durante <em>la NASpI</em></h2>

            <p>Se trovi un lavoretto puoi continuare a percepirla, a patto di rispettare i limiti di reddito. <strong>Dipendente:</strong> max 8.500&euro;/anno. <strong>Autonomo/P.IVA:</strong> max 5.500&euro;/anno. La NASpI viene ridotta dell&apos;80% del reddito dal nuovo lavoro.</p>

            <p>Se il nuovo contratto dura <strong>meno di 6 mesi</strong>, la NASpI viene sospesa e poi riprende. Se dura <strong>pi&ugrave; di 6 mesi</strong>, puoi presentare una nuova domanda alla fine.</p>

            <div className="guide-callout warn">
              <strong>Obbligo di comunicazione assoluto.</strong> Qualsiasi lavoro inizi &mdash; anche un lavoretto da 200&euro; &mdash; devi comunicarlo con il modulo NASpI-COM entro 30 giorni. Se non comunichi, la NASpI decade completamente e retroattivamente.
            </div>
          </div>

          {/* ESEMPIO */}
          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Davide</em></h2>

            <p>Davide ha 34 anni, vive a Milano e lavorava come magazziniere con contratto a tempo indeterminato. Il suo stipendio era 1.400&euro; netti al mese, circa 1.800&euro; lordi. L&apos;azienda chiude il reparto e lo licenzia per motivi economici dopo 3 anni e mezzo di lavoro.</p>

            <p>Il giorno dopo va al patronato CGIL con la busta paga e il documento d&apos;identit&agrave;. Fanno la domanda NASpI in 20 minuti, gratis. Dopo 15 giorni firma il Patto di Servizio al Centro per l&apos;Impiego. Poi fa l&apos;<Link href="/isee" style={{color:'var(--green)',fontWeight:600}}>ISEE corrente</Link> perch&eacute; il suo reddito &egrave; calato: il suo ISEE scende da 24.000&euro; a 14.000&euro;, sbloccando bonus bollette e agevolazioni.</p>

            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Situazione</strong>
                Retribuzione media (ultimi 4 anni): ~1.750&euro;/mese<br />
                Settimane lavorate: 182 (3,5 anni)<br />
                Riduzione dal 6&deg; mese: -3%/mese
              </div>
              <div className="guide-compare-item after">
                <strong>Risultato</strong>
                NASpI mensile netta (dopo IRPEF): ~960&euro;<br />
                Durata: ~21 mesi (182 &divide; 2)<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Totale: ~17.500&euro; netti</strong>
              </div>
            </div>

            <p>Davide non ha speso un centesimo. Ha usato il patronato (gratis) e lo SPID (gratis). Ha fatto tutto in 20 minuti il giorno dopo il licenziamento.</p>
          </div>

          {/* ERRORI */}
          <div className="guide-section rv" id="errori">
            <div className="guide-section-label">Attenzione</div>
            <h2>I 5 errori che fanno <em>perdere la NASpI</em></h2>

            <div className="guide-callout warn" style={{marginTop:'0'}}>
              <strong>Fare domanda dopo 68 giorni.</strong> Il termine &egrave; tassativo e non ammette proroghe. Se lo superi anche di un solo giorno, perdi il diritto alla NASpI. Segna la data sul calendario il giorno stesso in cui perdi il lavoro.
            </div>

            <div className="guide-callout warn">
              <strong>Non comunicare un nuovo lavoro.</strong> Anche un lavoretto part-time va comunicato all&apos;INPS con NASpI-COM entro 30 giorni. Se non lo fai, la NASpI decade completamente.
            </div>

            <div className="guide-callout warn">
              <strong>Saltare il Centro per l&apos;Impiego.</strong> Hai 15 giorni dalla domanda per presentarti e firmare il Patto di Servizio. Se non ti presenti, la NASpI pu&ograve; essere sospesa.
            </div>

            <div className="guide-callout warn">
              <strong>Non aggiornare l&apos;ISEE.</strong> Quando perdi il lavoro, il tuo reddito cala. Se fai l&apos;<Link href="/isee" style={{color:'var(--green)',fontWeight:600}}>ISEE corrente</Link>, sblocchi bonus bollette, social card, agevolazioni TARI. Potrebbe valere 1.000&ndash;2.000&euro; in pi&ugrave; all&apos;anno.
            </div>

            <div className="guide-callout warn">
              <strong>Non fare il 730.</strong> La NASpI &egrave; reddito. Se nello stesso anno hai avuto sia stipendio che NASpI, il <Link href="/730" style={{color:'var(--green)',fontWeight:600}}>730</Link> &egrave; praticamente obbligatorio per ricalcolare le imposte.
            </div>
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
              <Link href="/dimissioni" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}>
                    <rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}} />
                    <rect x="56" y="36" width="80" height="8" rx="4" fill="#E8724A" opacity=".3" />
                    <text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Dimissioni</text>
                    <rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="56" y="86" width="140" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="56" y="98" width="160" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="56" y="130" width="120" height="28" rx="6" fill="#E8724A" opacity=".15" />
                    <text x="116" y="148" textAnchor="middle" fill="#E8724A" fontFamily="sans-serif" fontSize="10" fontWeight="600">Procedura online</text>
                  </svg>
                </div>
                <h4>Dimissioni Volontarie</h4>
                <p>Come dimettersi correttamente online, preavviso e cosa ti spetta.</p>
              </Link>
              <Link href="/tfr" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}>
                    <rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}} />
                    <rect x="56" y="36" width="60" height="8" rx="4" fill="#2D8A6E" opacity=".3" />
                    <text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">TFR</text>
                    <circle cx="100" cy="110" r="30" fill="#2D8A6E" opacity=".08" />
                    <text x="100" y="116" textAnchor="middle" fill="#2D8A6E" fontFamily="sans-serif" fontSize="16" fontWeight="700">&euro;</text>
                    <rect x="150" y="96" width="100" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="150" y="108" width="80" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="150" y="120" width="90" height="5" rx="2.5" fill="#E8E0D4" />
                  </svg>
                </div>
                <h4>TFR &mdash; Liquidazione</h4>
                <p>Quando perdi il lavoro ti spetta anche il TFR. Quanto e quando arriva.</p>
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
