'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideRistrutturareContent({ faqItems }) {
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
            <div className="guide-crumb"><Link href="/guide">Guide</Link><span className="guide-crumb-sep">&rsaquo;</span><span>Casa</span></div>
            <div className="guide-hero-top"><span className="guide-tag casa">Casa</span><span className="guide-hero-date">Mar 2026</span></div>
            <h1>Come Ristrutturare Casa nel 2026: Bonus, Detrazioni e Permessi</h1>
            <p className="guide-hero-sub">Bonus ristrutturazione 50%, Ecobonus, permessi comunali, bonifico parlante e tutto quello che devi sapere prima di iniziare i lavori.</p>
            <div className="guide-hero-meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>12 min di lettura</span></div>
          </div>
          <div className="guide-hero-img">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="60" width="120" height="100" rx="8" fill="#2D8A6E" opacity=".06" stroke="#2D8A6E" strokeWidth="1.5" opacity=".15"/><rect x="60" y="90" width="30" height="30" rx="4" fill="#5B7EC5" opacity=".12"/><rect x="100" y="90" width="30" height="30" rx="4" fill="#E8724A" opacity=".12"/><rect x="60" y="130" width="70" height="6" rx="3" fill="#8A857C" opacity=".15"/><text x="100" y="50" textAnchor="middle" fill="#2D8A6E" fontSize="11" fontWeight="700">Ristrutturare</text><text x="100" y="80" textAnchor="middle" fill="#E8724A" fontSize="20" fontWeight="700">50%</text></svg>
          </div>
          </div>
        </div>

        <div className="guide-body">
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>I bonus casa 2026: ristrutturazione 50% ed Ecobonus</li>
                <li>Quale bonus scegliere per ogni tipo di lavoro</li>
                <li>I permessi: CILA, SCIA, permesso di costruire o attivit&agrave; libera</li>
                <li>La procedura passo per passo e il bonifico parlante</li>
                <li>Un esempio reale: Paolo, 14.000&euro; di detrazioni su 28.000&euro; di lavori</li>
              </ul>
            </div>
          </div>

          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#bonus">I bonus casa 2026</a>
              <a href="#quale">Quale bonus scegliere</a>
              <a href="#permessi">Permessi e pratiche</a>
              <a href="#come">Come si fa, passo per passo</a>
              <a href="#esempio">Esempio: il caso di Paolo</a>
              <a href="#errori">Gli errori pi&ugrave; comuni</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          <div className="guide-section rv" id="bonus">
            <div className="guide-section-label">Le basi</div>
            <h2>I bonus casa <em>nel 2026</em></h2>

            <p>Nel 2026 i bonus per chi ristruttura si sono semplificati. Il Superbonus 110% non esiste pi&ugrave;. Rimangono due strumenti principali.</p>

            <p>Il <strong>Bonus Ristrutturazione al 50%</strong> copre manutenzione straordinaria, restauro, risanamento conservativo e ristrutturazione edilizia. Detrazione del 50% delle spese fino a <strong>96.000&euro;</strong> per unit&agrave;, in <strong>10 rate annuali</strong> nel <Link href="/730" style={{color:'var(--green)',fontWeight:600}}>730</Link>. Vale per la prima casa; per le altre unit&agrave; l&apos;aliquota &egrave; gi&agrave; al 36%.</p>

            <p>L&apos;<strong>Ecobonus</strong> copre gli interventi di efficientamento energetico: sostituzione infissi (50%), coibentazione (65%), pompe di calore (65%). Non cumulabile col bonus ristrutturazione per lo stesso intervento.</p>

            <h3>Le parole che devi conoscere</h3>
            <p><strong>Manutenzione ordinaria</strong> &mdash; tinteggiatura, sostituzione pavimenti, piccole riparazioni. Non d&agrave; diritto al bonus (salvo parti comuni condominiali).</p>
            <p><strong>Manutenzione straordinaria</strong> &mdash; rifacimento bagno, cucina, impianti, sostituzione infissi con opere murarie. D&agrave; diritto al bonus.</p>
            <p><strong>Bonifico parlante</strong> &mdash; il bonifico specifico che riporta causale con norma, codice fiscale e P.IVA dell&apos;impresa. Obbligatorio per la detrazione.</p>
            <p><strong>CILA</strong> &mdash; Comunicazione di Inizio Lavori Asseverata. La pratica pi&ugrave; comune per ristrutturazioni interne senza modifiche strutturali.</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
              <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">BONUS CASA 2026</text>
                <rect x="16" y="50" width="308" height="32" rx="8" fill="#2D8A6E"/>
                <text x="28" y="72" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Ristrutturazione: 50% (prima casa) &mdash; max 96.000&euro;</text>
                <rect x="16" y="90" width="260" height="32" rx="8" fill="#E8724A"/>
                <text x="28" y="112" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Ecobonus infissi: 50% &mdash; Coibentazione: 65%</text>
                <rect x="16" y="130" width="220" height="32" rx="8" fill="#5B7EC5"/>
                <text x="28" y="152" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="600">Pompe di calore: Ecobonus 65%</text>
                <rect x="16" y="178" width="308" height="28" rx="6" fill="#C49A2A" opacity=".8"/>
                <text x="28" y="197" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="600">Dal 2027: scende a 36% (prima casa) e 30% (altre). Conviene fare i lavori nel 2026!</text>
              </svg>
            </div>

            <div className="guide-callout warn">
              <strong>Superbonus 110%: non esiste pi&ugrave;.</strong> Dal 2025 non &egrave; pi&ugrave; disponibile, salvo casi residuali post-sisma. I lavori ora rientrano nelle aliquote ordinarie (50%/36%).
            </div>
          </div>

          <div className="guide-section rv" id="quale">
            <div className="guide-section-label">Quale scegliere</div>
            <h2>Quale bonus <em>per ogni lavoro</em></h2>
            <p><strong>Rifaccio il bagno o la cucina?</strong> Bonus ristrutturazione 50% (prima casa). Serve almeno la CILA.</p>
            <p><strong>Cambio gli infissi?</strong> Puoi scegliere tra ristrutturazione (50%) o Ecobonus (50%), se le finestre rispettano i requisiti di trasmittanza termica.</p>
            <p><strong>Installo una pompa di calore?</strong> Ecobonus al 65%. Non cumulabile col bonus ristrutturazione per lo stesso impianto.</p>
            <p><strong>Coibento il tetto o le pareti?</strong> Ecobonus al 65%. Richiede certificazione da un professionista abilitato.</p>
            <p><strong>Installo il fotovoltaico?</strong> Detrazione 50% nel quadro del bonus ristrutturazione.</p>
            <p><strong>Sostituisco la caldaia a gas?</strong> Dal 2025 le caldaie a combustibili fossili sono <strong>escluse dai bonus</strong>. Solo pompe di calore, caldaie ibride o biomassa.</p>
            <div className="guide-callout">
              <strong>Puoi cumulare pi&ugrave; bonus, ma non per lo stesso intervento.</strong> Esempio: bonus ristrutturazione per il bagno + Ecobonus per gli infissi. Per lo stesso lavoro devi sceglierne uno solo.
            </div>
          </div>

          <div className="guide-section rv" id="permessi">
            <div className="guide-section-label">Burocrazia</div>
            <h2>Permessi <em>e pratiche comunali</em></h2>

            <h3>CILA &mdash; il pi&ugrave; comune</h3>
            <p>Per manutenzione straordinaria senza modifiche strutturali: rifacimento bagno, cucina, impianti, pavimenti, porte interne. Si presenta online al Comune tramite un tecnico. Si pu&ograve; iniziare subito dopo.</p>

            <h3>SCIA &mdash; lavori pi&ugrave; complessi</h3>
            <p>Per modifiche alla distribuzione interna, cambio di destinazione d&apos;uso, interventi sulle facciate. Serve un professionista abilitato.</p>

            <h3>Permesso di costruire &mdash; interventi importanti</h3>
            <p>Solo per ampliamenti volumetrici, modifiche strutturali, nuove costruzioni. Tempi: 30-90 giorni.</p>

            <h3>Nessuna pratica (attivit&agrave; libera)</h3>
            <p>Tinteggiatura, piccole riparazioni, sostituzione infissi a misura identica, pannelli solari in zone non vincolate.</p>

            <div className="guide-callout warn">
              <strong>Senza pratica edilizia perdi la detrazione.</strong> Il bonus richiede che i lavori siano regolari. Se hai abusi edilizi non sanati, i lavori non sono detraibili.
            </div>
          </div>

          <div className="guide-section rv" id="come">
            <div className="guide-section-label">Procedura</div>
            <h2>Come si fa, <em>passo per passo</em></h2>

            <h3>Passo 1: Chiedi preventivi</h3>
            <p>Almeno 3 preventivi da imprese diverse, con computo metrico dettagliato (voce per voce, non &ldquo;a corpo&rdquo;). Un preventivo troppo basso spesso nasconde lavori in nero.</p>

            <h3>Passo 2: Presenta la pratica edilizia</h3>
            <p>Incarica un geometra, architetto o ingegnere. Costa 500-1.500&euro;. Non iniziare i lavori senza averla presentata.</p>

            <h3>Passo 3: Inizia i lavori e paga con bonifico parlante</h3>
            <p>Ogni pagamento deve avvenire con <strong>bonifico parlante</strong> (causale specifica, P.IVA impresa, norma). Se paghi in contanti o con bonifico ordinario, perdi la detrazione.</p>

            <h3>Passo 4: Conserva la documentazione</h3>
            <p>Fatture, ricevute dei bonifici, copia della pratica edilizia, eventuale asseverazione del tecnico. Conserva tutto per 5 anni dalla dichiarazione.</p>

            <h3>Passo 5: Inserisci nel 730</h3>
            <p>Le spese vanno nel Quadro E del <Link href="/730" style={{color:'var(--green)',fontWeight:600}}>730</Link> (righe da E41). La detrazione viene spalmata in 10 rate annuali.</p>
          </div>

          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Paolo</em></h2>
            <p>Paolo ha 42 anni, proprietario di 85 mq a Torino (prima casa). Vuole ristrutturare il bagno e cambiare gli infissi. Budget: 28.000&euro; (bagno 12.000&euro; + infissi 16.000&euro;).</p>
            <div className="guide-compare">
              <div className="guide-compare-item before">
                <strong>Investimento</strong>
                Bagno (ristrutturazione): 12.000&euro;<br />
                Infissi (Ecobonus): 16.000&euro;<br />
                CILA + tecnico: ~1.000&euro;<br />
                Totale: 29.000&euro;
              </div>
              <div className="guide-compare-item after">
                <strong>Detrazioni in 10 anni</strong>
                Bagno: 50% di 12.000&euro; = 6.000&euro;<br />
                Infissi: 50% di 16.000&euro; = 8.000&euro;<br />
                Detrazione annua: 1.400&euro;/anno<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>Risparmio: 14.000&euro;</strong>
              </div>
            </div>
            <p>Il costo effettivo netto di Paolo &egrave; 15.000&euro; &mdash; <strong>met&agrave; lo paga lo Stato</strong>. Se avesse aspettato il 2027, la detrazione sarebbe stata del 36% invece del 50%: 3.920&euro; in meno di risparmio.</p>
          </div>

          <div className="guide-section rv" id="errori">
            <div className="guide-section-label">Attenzione</div>
            <h2>Gli errori <em>pi&ugrave; comuni</em></h2>
            <div className="guide-callout warn" style={{marginTop:'0'}}>
              <strong>Pagare in contanti o con bonifico ordinario.</strong> Ogni pagamento DEVE essere fatto con bonifico parlante. Un bonifico normale non basta.
            </div>
            <div className="guide-callout warn">
              <strong>Comprare i mobili prima dei lavori.</strong> Per il bonus mobili, la data di inizio lavori deve essere anteriore all&apos;acquisto. Prima i lavori, poi i mobili.
            </div>
            <div className="guide-callout warn">
              <strong>Non verificare la situazione urbanistica.</strong> Abusi edilizi rendono i nuovi lavori non detraibili. Fai controllare prima di iniziare.
            </div>
            <div className="guide-callout warn">
              <strong>Perdere le detrazioni alla vendita.</strong> Se vendi, le rate residue passano al nuovo proprietario, salvo accordo scritto nel rogito di mantenerle.
            </div>
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
              <Link href="/compro-casa" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Compro Casa</text><rect x="56" y="80" width="180" height="5" rx="2.5" fill="#E8E0D4"/><rect x="56" y="92" width="140" height="5" rx="2.5" fill="#E8E0D4"/><path d="M200 90l30-20 30 20v30h-60z" fill="#2D8A6E" opacity=".06"/></svg>
                </div>
                <h4>Compro Casa</h4>
                <p>Stai comprando un immobile da ristrutturare?</p>
              </Link>
              <Link href="/730" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}><rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}}/><text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">730 Precompilato</text><rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4"/><circle cx="240" cy="44" r="16" fill="#2D8A6E" opacity=".9"/><path d="M234 44l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h4>Faccio il 730</h4>
                <p>Le spese di ristrutturazione si inseriscono nel Quadro E del 730.</p>
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
