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
      <div className="guide">
        <div className="guide-hero">
          <div className="guide-hero-inner">
          <div className="guide-hero-text">
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Lavoro</span></div>
            <div className="guide-hero-top"><span className="guide-tag lavoro">Lavoro</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Come Richiedere la NASpI nel 2026: Requisiti, Importo e Durata</h1>
            <p className="guide-hero-sub">Quanto ti spetta, come fare domanda, le scadenze da non perdere e gli errori che ti fanno perdere soldi.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>12 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="120" height="140" rx="8" fill="#E8724A" opacity=".12"/><rect x="50" y="50" width="100" height="8" rx="4" fill="#2D8A6E" opacity=".5"/><rect x="50" y="66" width="80" height="8" rx="4" fill="#2D8A6E" opacity=".3"/><circle cx="100" cy="125" r="22" fill="#2D8A6E" opacity=".15"/><path d="M92 125l6 6 12-12" stroke="#2D8A6E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><text x="100" y="45" textAnchor="middle" fill="#E8724A" fontSize="14" fontWeight="700">NASpI</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <h2>Cos&apos;&egrave; la NASpI</h2>
            <p>Hai perso il lavoro e non &egrave; stata colpa tua? Lo Stato ti paga un assegno mensile mentre cerchi una nuova occupazione. Si chiama <strong>NASpI</strong> (Nuova Assicurazione Sociale per l&apos;Impiego) &mdash; in parole povere, &egrave; la disoccupazione.</p>
            <p>Non &egrave; un regalo: &egrave; un&apos;assicurazione che <strong>hai gi&agrave; pagato</strong> con i contributi versati durante il lavoro. L&apos;importo dipende da quanto guadagnavi prima, e la durata da quanto a lungo hai lavorato. Il massimo &egrave; 1.584,70&euro; lordi al mese per un massimo di 24 mesi.</p>
            <h3>Le parole che devi conoscere</h3>
            <p><strong>NASpI</strong> &mdash; L&apos;assegno di disoccupazione per chi perde il lavoro involontariamente.</p>
            <p><strong>Disoccupazione involontaria</strong> &mdash; Licenziamento, fine contratto a termine, dimissioni per giusta causa.</p>
            <p><strong>D&eacute;calage</strong> &mdash; La riduzione progressiva: dal 6&deg; mese l&apos;importo scende del 3% ogni mese.</p>
            <p><strong>NASpI-COM</strong> &mdash; Il modulo obbligatorio se inizi qualsiasi lavoro durante la NASpI. Hai 30 giorni.</p>
            <p><strong>Contribuzione figurativa</strong> &mdash; Durante la NASpI, l&apos;INPS ti accredita automaticamente i contributi per la pensione.</p>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><p><strong>Non &egrave; solo per i licenziati.</strong> Spetta anche a chi ha un contratto scaduto, a chi si &egrave; dimesso per giusta causa, e alle mamme e pap&agrave; che si dimettono durante il primo anno di vita del figlio.</p></div>
          </div>

          <div className="guide-section rv">
            <h2>I requisiti</h2>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>1. Disoccupazione involontaria</strong><br/>Licenziamento, fine contratto, dimissioni per giusta causa, risoluzione consensuale in sede protetta.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>2. Almeno 13 settimane di contributi</strong><br/>Nei 4 anni precedenti la cessazione del rapporto di lavoro (~3 mesi di lavoro).</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>3. Domanda entro 68 giorni</strong><br/>Termine tassativo. Dopo i 68 giorni il diritto decade completamente.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}><p><strong>Dimissioni volontarie = niente NASpI.</strong> Se vuoi lasciare il lavoro e avere diritto alla NASpI, devi avere una giusta causa documentabile. Manda una PEC e tieni le prove.</p></div>
          </div>

          <div className="guide-section rv">
            <h2>Quanto spetta nel 2026</h2>
            <h3>La formula del calcolo</h3>
            <p>Se la retribuzione media &egrave; <strong>uguale o inferiore a 1.456,72&euro;</strong>, la NASpI &egrave; pari al 75%. Se &egrave; superiore: 75% di 1.456,72&euro; pi&ugrave; il 25% della differenza. In ogni caso, <strong>non pu&ograve; superare 1.584,70&euro; lordi al mese</strong>.</p>
            <h3>La riduzione progressiva (d&eacute;calage)</h3>
            <p>Dal 6&deg; mese (151&deg; giorno) si riduce del 3% ogni mese. Se hai pi&ugrave; di 55 anni, parte dall&apos;8&deg; mese. I primi 5 mesi sono quelli in cui ricevi l&apos;importo pieno.</p>
            <h3>Quanto dura</h3>
            <p>La <strong>met&agrave; delle settimane lavorate negli ultimi 4 anni</strong>. 4 anni pieni = 24 mesi (massimo). 2 anni = 12 mesi. 1 anno = 6 mesi.</p>
          </div>

          <div className="guide-section rv">
            <h2>Come fare domanda</h2>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>1. Dal sito INPS (fai da te)</strong><br/>Accedi con SPID o CIE a inps.it. Procedura guidata passo per passo.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>2. Tramite patronato (gratis)</strong><br/>CGIL, CISL, UIL, ACLI. Fanno tutto loro, gratuito per legge.</div>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><strong>3. Contact Center INPS</strong><br/>803 164 (gratis da fisso) oppure 06 164 164 (da cellulare).</div>
            <p>Ti servono: <strong>SPID o CIE</strong>, l&apos;ultima busta paga (utile ma non obbligatoria) e l&apos;<strong>IBAN</strong> di un conto intestato a te.</p>
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}><p><strong>Quando parte il pagamento:</strong> se fai domanda <strong>entro 8 giorni</strong> dalla cessazione, la NASpI parte dall&apos;8&deg; giorno. Se aspetti di pi&ugrave;, parte dal giorno dopo la domanda. Primo pagamento in 30-45 giorni.</p></div>
          </div>

          <div className="guide-section rv">
            <h2>Lavorare durante la NASpI</h2>
            <p>Puoi lavorare, ma con limiti: <strong>dipendente</strong> max 8.500&euro;/anno, <strong>autonomo</strong> max 5.500&euro;/anno. La NASpI viene ridotta dell&apos;80% del reddito dal nuovo lavoro.</p>
            <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}><p><strong>Obbligo di comunicazione.</strong> Qualsiasi lavoro devi comunicarlo con il modulo NASpI-COM entro 30 giorni. Se non comunichi, la NASpI decade completamente e retroattivamente.</p></div>
          </div>

          <div className="guide-section rv">
            <h2>NASpI anticipata</h2>
            <p>Per aprire un&apos;attivit&agrave; autonoma puoi ricevere tutta la NASpI residua in anticipo. Dal 2026: <strong>70% subito + 30% dopo</strong>. Domanda entro 30 giorni dall&apos;inizio attivit&agrave;.</p>
            <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}><p><strong>Attenzione:</strong> se chiudi l&apos;attivit&agrave; entro 6 mesi, l&apos;INPS pu&ograve; chiederti di restituire la NASpI anticipata.</p></div>
          </div>

          <div className="guide-section rv" style={{background:'var(--ink)',color:'#fff',padding:'40px',borderRadius:'20px'}}>
            <h2 style={{color:'var(--green)'}}>L&apos;esempio di Davide</h2>
            <p>Davide ha 34 anni, magazziniere a Milano, licenziato dopo 3,5 anni. Stipendio 1.400&euro; netti (~1.800&euro; lordi). Va al patronato il giorno dopo: domanda fatta in 20 minuti, gratis. Fa anche l&apos;ISEE corrente e sblocca bonus bollette.</p>
            <p>Retribuzione media: ~1.750&euro;/mese. NASpI netta: ~960&euro;. Durata: ~21 mesi. <strong style={{color:'var(--green)'}}>Totale stimato: ~17.500&euro; netti</strong></p>
          </div>

          <div className="guide-section rv">
            <h2>I 5 errori che fanno perdere la NASpI</h2>
            <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}><p><strong>Fare domanda dopo 68 giorni.</strong> Termine tassativo, nessuna proroga.</p></div>
            <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}><p><strong>Non comunicare un nuovo lavoro.</strong> Anche un lavoretto va comunicato con NASpI-COM entro 30 giorni.</p></div>
            <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}><p><strong>Saltare il Centro per l&apos;Impiego.</strong> Hai 15 giorni dalla domanda per firmare il Patto di Servizio.</p></div>
            <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}><p><strong>Non aggiornare l&apos;ISEE.</strong> Con l&apos;ISEE corrente sblocchi bonus bollette, social card, agevolazioni TARI.</p></div>
            <div className="guide-callout" style={{borderLeftColor:'var(--coral)'}}><p><strong>Non fare il 730.</strong> La NASpI &egrave; reddito: se hai avuto sia stipendio che NASpI nello stesso anno, il 730 &egrave; praticamente obbligatorio.</p></div>
          </div>

          <div className="guide-section rv"><h2>Domande frequenti</h2><FAQ items={faqItems} /></div>

          <div className="guide-section rv">
            <h2>Guide correlate</h2>
            <div className="guide-related">
              <Link href="/dimissioni" className="guide-related-card"><h4>Dimissioni volontarie</h4><p>Come dimettersi correttamente online.</p></Link>
              <Link href="/tfr" className="guide-related-card"><h4>TFR</h4><p>Quando perdi il lavoro ti spetta anche il TFR.</p></Link>
              <Link href="/spid" className="guide-related-card"><h4>SPID</h4><p>Per la domanda INPS serve lo SPID.</p></Link>
            </div>
          </div>

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
