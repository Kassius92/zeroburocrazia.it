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
            <p className="guide-hero-sub">La liquidazione spiegata come te la spiegherebbe un amico. Quanto ti spetta, come si calcola, tassazione e la scelta tra azienda e fondo pensione.</p>
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

        <div className="guide-body">

          {/* KEY TAKEAWAYS */}
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; il TFR e perch&eacute; sono soldi tuoi (non un regalo)</li>
                <li>Come si calcola: RAL &divide; 13,5 ogni anno</li>
                <li>Tassazione: la differenza tra 23% (azienda) e 9-15% (fondo pensione)</li>
                <li>Un esempio reale: Davide, 20.271&euro; netti dopo 12 anni</li>
                <li>La scelta pi&ugrave; importante: azienda o fondo pensione?</li>
              </ul>
            </div>
          </div>

          {/* INDICE */}
          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; il TFR</a>
              <a href="#calcolo">Come si calcola</a>
              <a href="#tassazione">Come viene tassato</a>
              <a href="#quando">Quando lo ricevi</a>
              <a href="#fondo">Azienda o fondo pensione?</a>
              <a href="#esempio">Esempio: il caso di Davide</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          {/* COS'È */}
          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; il <em>TFR</em></h2>

            <p>Immagina che ogni mese il tuo datore di lavoro, invece di darti tutto lo stipendio, ne metta un pezzetto da parte in un salvadanaio. Mese dopo mese, anno dopo anno, quel salvadanaio cresce. Quando il rapporto di lavoro finisce &mdash; per qualsiasi motivo &mdash; il datore rompe il salvadanaio e ti d&agrave; tutto quello che c&apos;&egrave; dentro. Quello &egrave; il TFR.</p>

            <p>In numeri: ogni anno il datore accantona circa il <strong>6,91%</strong> della tua RAL &mdash; che corrisponde pi&ugrave; o meno a <strong>una mensilit&agrave; di stipendio</strong>. Dopo 10 anni hai accumulato circa 10 mensilit&agrave;. Quel gruzzolo nel frattempo cresce grazie alla rivalutazione annua: 75% dell&apos;inflazione ISTAT pi&ugrave; un 1,5% fisso.</p>

            <h3>Le parole che devi conoscere</h3>

            <p><strong>TFR (Trattamento di Fine Rapporto)</strong> &mdash; il nome ufficiale della &ldquo;liquidazione&rdquo;. Regolato dall&apos;art. 2120 del Codice Civile.</p>
            <p><strong>RAL</strong> &mdash; Retribuzione Annua Lorda. Il TFR si calcola sulla RAL: ogni anno viene accantonato il 6,91% (RAL &divide; 13,5).</p>
            <p><strong>Rivalutazione</strong> &mdash; l&apos;aumento annuo del TFR: 75% inflazione + 1,5% fisso. Sulla rivalutazione si paga il 17% di imposta ogni anno.</p>
            <p><strong>Tassazione separata</strong> &mdash; il TFR non si somma al reddito dell&apos;anno. Viene tassato con un&apos;aliquota media calcolata sugli ultimi anni.</p>
            <p><strong>Fondo pensione</strong> &mdash; alternativa all&apos;azienda per il TFR. Tassazione pi&ugrave; bassa (15-9% contro ~23%) ma soldi bloccati fino alla pensione.</p>
            <p><strong>Fondo di Garanzia INPS</strong> &mdash; se l&apos;azienda fallisce e non pu&ograve; pagarti il TFR, interviene questo fondo.</p>

            <div className="guide-callout">
              <strong>Non &egrave; un regalo del datore:</strong> il TFR &egrave; retribuzione differita &mdash; sono soldi tuoi, guadagnati mese per mese, pagati dopo invece che subito. Ti spettano <strong>sempre</strong>: dimissioni, licenziamento, pensione, fine contratto. Anche in caso di morte del lavoratore, il TFR va agli eredi.
            </div>
          </div>

          {/* CALCOLO */}
          <div className="guide-section rv" id="calcolo">
            <div className="guide-section-label">Formula</div>
            <h2>Come si <em>calcola</em></h2>

            <p>Ogni anno si accantona <strong>RAL &divide; 13,5</strong>. Con una RAL di 25.000&euro;, la quota &egrave; circa 1.851&euro;/anno. A questa si sottrae il contributo INPS dello 0,5% (125&euro;), quindi la quota netta accantonata &egrave; circa 1.726&euro;/anno.</p>

            <p>Il TFR gi&agrave; accantonato viene rivalutato ogni anno del <strong>75% dell&apos;inflazione ISTAT + 1,5% fisso</strong>. Con inflazione al 2%, la rivalutazione &egrave; del 3%. Sulla rivalutazione si paga il 17% di imposta ogni anno.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
              <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">FORMULA TFR</text>
                <rect x="16" y="48" width="308" height="44" rx="10" fill="#2D8A6E"/>
                <text x="170" y="76" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="15" fontWeight="700">RAL &divide; 13,5 = quota annua TFR</text>
                <rect x="16" y="108" width="308" height="32" rx="8" fill="#E8724A" opacity=".9"/>
                <text x="28" y="130" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Rivalutazione: 75% inflazione + 1,5% fisso</text>
                <rect x="16" y="150" width="308" height="32" rx="8" fill="#5B7EC5" opacity=".9"/>
                <text x="28" y="172" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Imposta rivalutazione: 17% ogni anno</text>
              </svg>
            </div>
          </div>

          {/* TASSAZIONE */}
          <div className="guide-section rv" id="tassazione">
            <div className="guide-section-label">Tasse</div>
            <h2>Come viene <em>tassato</em></h2>

            <p>Il TFR ha una <strong>tassazione separata</strong>: non si somma al reddito dell&apos;anno in cui lo ricevi. Se fosse tassato insieme, finiresti in uno scaglione altissimo. La tassazione separata evita questo problema.</p>

            <p>Se il TFR resta <strong>in azienda</strong>, la tassazione &egrave; circa il <strong>23%</strong> (aliquota media IRPEF calcolata sugli ultimi 5 anni). Se invece hai versato il TFR in un <strong>fondo pensione</strong>, la tassazione scende dal <strong>15% al 9%</strong> &mdash; si riduce di 0,3 punti per ogni anno di partecipazione oltre il quindicesimo.</p>

            <div className="guide-callout warn">
              <strong>La differenza &egrave; concreta.</strong> Su un TFR di 20.000&euro; lordi parliamo di <strong>1.600-2.800&euro; in pi&ugrave; in tasca</strong> se scegli il fondo pensione. Su 40.000&euro; il risparmio raddoppia. Sono soldi veri.
            </div>
          </div>

          {/* QUANDO LO RICEVI */}
          <div className="guide-section rv" id="quando">
            <div className="guide-section-label">Tempistiche</div>
            <h2>Quando ricevi <em>il TFR</em></h2>

            <p>Il TFR viene pagato alla fine del rapporto di lavoro, qualunque sia il motivo. Nel <strong>privato</strong> la prassi &egrave; 30-45 giorni dalla cessazione. Nel <strong>pubblico</strong> i tempi sono molto pi&ugrave; lunghi: 12 mesi pi&ugrave; 90 giorni per chi va in pensione, 24 mesi pi&ugrave; 90 giorni per chi si dimette.</p>

            <h3>Anticipo del TFR</h3>
            <p>Non devi aspettare la fine del rapporto, ma ci sono condizioni precise: almeno <strong>8 anni di servizio</strong> continuativi, massimo <strong>70% del maturato</strong>, e si pu&ograve; chiedere <strong>una sola volta</strong>. Motivi ammessi: acquisto prima casa, spese sanitarie straordinarie, congedi parentali o formativi.</p>

            <div className="guide-callout warn">
              <strong>Se il datore non paga:</strong> manda una diffida scritta (raccomandata o PEC). Hai <strong>5 anni</strong> dalla cessazione per far valere il diritto. Se l&apos;azienda &egrave; insolvente o fallita, interviene il <strong>Fondo di Garanzia INPS</strong> &mdash; domanda online con il modulo SR52.
            </div>
          </div>

          {/* AZIENDA O FONDO */}
          <div className="guide-section rv" id="fondo">
            <div className="guide-section-label">La scelta</div>
            <h2>TFR in azienda <em>o fondo pensione?</em></h2>

            <p>Quando vieni assunto, hai <strong>60 giorni</strong> per decidere dove mandare il TFR. Se non scegli, scatta il silenzio-assenso: il TFR va automaticamente al fondo pensione di categoria.</p>

            <p><strong>In azienda:</strong> tassazione ~23%, rivalutazione garantita (75% inflazione + 1,5%), anticipo possibile dopo 8 anni fino al 70%. Soldi sicuri anche in caso di fallimento (Fondo di Garanzia INPS). Li ricevi subito alla cessazione.</p>

            <p><strong>In fondo pensione:</strong> tassazione dal 15% al 9% (risparmio enorme sul lungo periodo), possibilit&agrave; di dedurre ulteriori contributi fino a 5.300&euro;/anno, anticipo fino al 75% dopo 8 anni. Ma i soldi sono bloccati fino alla pensione e c&apos;&egrave; rischio di mercato.</p>

            <div className="guide-callout">
              <strong>La regola pratica:</strong> se sei giovane con un orizzonte lungo (20+ anni alla pensione), il fondo pensione conviene quasi sempre &mdash; risparmi dal 6% al 14% di tasse e accumuli una pensione integrativa. Se sei vicino alla pensione o cambi spesso lavoro, il TFR in azienda ti d&agrave; pi&ugrave; liquidit&agrave; immediata.
            </div>
          </div>

          {/* ESEMPIO */}
          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Davide</em></h2>

            <p>Davide ha 38 anni, tecnico informatico a Milano, 12 anni nella stessa azienda. RAL 32.000&euro;. Ha deciso di cambiare lavoro &mdash; si &egrave; gi&agrave; dimesso. Il TFR non &egrave; mai stato spostato nel fondo pensione. Non ha idea di quanto sia &mdash; pensa &ldquo;saranno un paio di migliaia di euro&rdquo;.</p>

            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Calcolo</strong>
                TFR accantonato (12 anni, RAL media 28.000&euro;): ~23.200&euro;<br />
                Rivalutazione accumulata: +2.900&euro;<br />
                Imposta rivalutazione (17%): -493&euro;
              </div>
              <div className="guide-compare-item after">
                <strong>Risultato</strong>
                TFR lordo: ~25.607&euro;<br />
                Tassazione separata (~23%): -5.336&euro;<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>TFR netto in tasca: ~20.271&euro;</strong>
              </div>
            </div>

            <p>Davide pensava di ricevere 2.000&euro;. Ne ha ricevuti <strong>20.271&euro;</strong>. Se avesse scelto il fondo pensione 12 anni fa, con la tassazione al 15% avrebbe risparmiato circa 1.900&euro; di tasse in pi&ugrave;.</p>
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
                    <rect x="56" y="130" width="120" height="28" rx="6" fill="#E8724A" opacity=".15" />
                    <text x="116" y="148" textAnchor="middle" fill="#E8724A" fontFamily="sans-serif" fontSize="10" fontWeight="600">Procedura online</text>
                  </svg>
                </div>
                <h4>Dimissioni Volontarie</h4>
                <p>Come dimettersi e cosa ti spetta. Preavviso, procedura e TFR.</p>
              </Link>
              <Link href="/busta-paga" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}>
                    <rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}} />
                    <rect x="56" y="36" width="60" height="8" rx="4" fill="#2D8A6E" opacity=".3" />
                    <text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Busta paga</text>
                    <rect x="56" y="80" width="208" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="56" y="92" width="160" height="5" rx="2.5" fill="#E8E0D4" />
                    <line x1="56" y1="110" x2="264" y2="110" stroke="#E8E0D4" strokeWidth="1"/>
                    <rect x="56" y="120" width="120" height="5" rx="2.5" fill="#E8724A" opacity=".3" />
                    <rect x="56" y="150" width="208" height="20" rx="4" fill="#2D8A6E" opacity=".1" />
                    <text x="160" y="164" textAnchor="middle" fill="#2D8A6E" fontFamily="sans-serif" fontSize="9" fontWeight="600">NETTO IN BUSTA</text>
                  </svg>
                </div>
                <h4>Busta Paga</h4>
                <p>Dove trovare il TFR accantonato ogni mese nel cedolino.</p>
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
