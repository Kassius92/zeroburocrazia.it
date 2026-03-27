import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import Calculator730 from '@/components/Calculator730';
import Tip from '@/components/Tip';
import Guide730Client from './Guide730Client';

export const metadata = {
  title: 'Come Fare il 730 nel 2026: Detrazioni, Scadenze e Rimborso',
  description: 'Guida completa al 730 precompilato 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze aggiornate e come ottenere il massimo rimborso. Gratis.',
  keywords: ['730', '730 2026', 'dichiarazione redditi', '730 precompilato', 'come fare 730', 'detrazioni fiscali', 'scadenza 730', 'modello 730', '730 online', 'CAF 730'],
  alternates: { canonical: 'https://zeroburocrazia.it/730' },
  openGraph: { type: 'article', title: '730 Precompilato 2026: Guida Completa Gratuita', description: 'Come fare il 730 nel 2026: detrazioni, documenti, scadenze e come ottenere il massimo rimborso.', url: 'https://zeroburocrazia.it/730', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/og730.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: '730 Precompilato 2026: Guida Completa', description: 'Detrazioni, documenti, scadenze e rimborso. Tutto sul 730 in una guida gratuita.', images: ['https://zeroburocrazia.it/og730.png'] },
};

const faqItems = [
  { q: "Se non faccio il 730, cosa succede?", a: "<strong>Non vai in prigione.</strong> Per\u00f2 perdi tutte le detrazioni a cui avresti diritto: centinaia o migliaia di euro ogni anno. Se eri obbligato e non lo fai, l\u2019Agenzia delle Entrate pu\u00f2 inviarti un avviso di accertamento con sanzioni dal 120% al 240% delle imposte dovute." },
  { q: "Posso scaricare Netflix o la palestra?", a: "<strong>Netflix no.</strong> La palestra per te nemmeno, a meno che non sia prescritta dal medico. Per\u00f2 le <strong>attivit\u00e0 sportive dei figli tra 5 e 18 anni s\u00ec</strong>: detraibili al 19% fino a 210\u20ac per figlio." },
  { q: "Il CU non mi arriva, che faccio?", a: "Il datore \u00e8 <strong>obbligato per legge</strong> a consegnartela entro il 16 marzo. Se non arriva, sollecita per iscritto. Se irreperibile, scaricala dal sito dell\u2019Agenzia delle Entrate con SPID." },
  { q: "Ho pagato in contanti, perdo la detrazione?", a: "<strong>Dipende.</strong> Dal 2025 tutte le spese detraibili al 19% servono metodi tracciabili. Eccezioni: <strong>farmaci con ricetta</strong> e <strong>prestazioni SSN</strong>." },
  { q: "Ho cambiato lavoro, devo fare due 730?", a: "<strong>No, uno solo</strong> con entrambe le CU. Attenzione: probabilmente dovrai pagare un conguaglio." },
  { q: "Posso fare il 730 congiunto con il mio partner?", a: "<strong>Solo se sposati o uniti civilmente.</strong> I conviventi no. Vantaggio: crediti e debiti si compensano." },
  { q: "Ho fatto un errore, posso correggerlo?", a: "<strong>S\u00ec.</strong> Entro il 30/9: nuovo 730. Entro il 25/10: 730 integrativo. Dopo: Modello Redditi correttivo entro il 30/11. Oltre: integrativa entro 5 anni." },
  { q: "Ho ricevuto la NASpI, devo fare il 730?", a: "<strong>S\u00ec, e ti conviene.</strong> La NASpI \u00e8 reddito. Se hai avuto sia stipendio che NASpI, il 730 \u00e8 praticamente obbligatorio." },
];

export default function Pagina730() {
  const schemas = [
    articleSchema({
      title: 'Guida completa al Modello 730 2026',
      description: 'Come fare il 730 nel 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze e come ottenere il massimo rimborso.',
      url: '/730',
      image: 'og730.png',
      datePublished: '2026-03-04',
      dateModified: '2026-03-27',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="v8">
      <SchemaOrg schemas={schemas} />
      <Guide730Client />
      <NavV8 />

      {/* ═══ 1. HERO ═══ */}
      <section className="v8-ghero" id="hero" style={{'--glow1':'rgba(232,114,74,.06)'}}>
        <div className="v8-ghero-inner">
          <div className="v8-ghero-cat fisco rv">Fisco &middot; Aggiornato marzo 2026</div>
          <h1 className="rv rv-d1">Come fare il 730 <em>nel 2026</em></h1>
          <p className="v8-ghero-sub rv rv-d2">La dichiarazione dei redditi come non te l&apos;ha mai spiegata nessuno. Detrazioni, precompilato, scadenze e rimborso.</p>
          <div className="v8-ghero-nums">
            <div className="v8-ghero-num rv-scale rv-d1"><strong>30 set</strong><span>Scadenza invio</span></div>
            <div className="v8-ghero-num rv-scale rv-d2"><strong>19%</strong><span>Detrazione mediche</span></div>
            <div className="v8-ghero-num rv-scale rv-d3"><strong>2-3 mesi</strong><span>Per il rimborso</span></div>
          </div>
        </div>
      </section>

      {/* ═══ 2. QUIZ ═══ */}
      <section className="v8-section warm" id="quiz">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Ma tu, <em>devi farlo?</em></h2>
            <p className="rv rv-d1">Rispondi a 3 domande e lo scopri subito.</p>
          </div>
          <div className="v8-quiz">
            <div className="v8-quiz-card rv-scale rv-d2" id="quizCard">
              <div className="v8-qq"><span className="v8-qq-text">Hai avuto redditi da lavoro dipendente o pensione nel 2025?</span><div className="v8-qq-btns"><button className="v8-qq-btn" data-q="1" data-v="y">S&igrave;</button><button className="v8-qq-btn" data-q="1" data-v="n">No</button></div></div>
              <div className="v8-qq"><span className="v8-qq-text">Hai spese mediche, affitto o mutuo da detrarre?</span><div className="v8-qq-btns"><button className="v8-qq-btn" data-q="2" data-v="y">S&igrave;</button><button className="v8-qq-btn" data-q="2" data-v="n">No</button></div></div>
              <div className="v8-qq"><span className="v8-qq-text">Hai avuto pi&ugrave; di un datore di lavoro nel 2025?</span><div className="v8-qq-btns"><button className="v8-qq-btn" data-q="3" data-v="y">S&igrave;</button><button className="v8-qq-btn" data-q="3" data-v="n">No</button></div></div>
              <div className="v8-quiz-res" id="qRes"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. COS'È + GLOSSARIO ═══ */}
      <section className="v8-section" id="cose">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Cos&apos;&egrave; il <em>730</em></h2>
          </div>
          <div className="v8-prose rv">
            <p>Ogni mese il tuo datore di lavoro trattiene una parte del tuo stipendio per pagare le tasse al posto tuo. Questo meccanismo si chiama <Tip t="Il meccanismo con cui il datore di lavoro trattiene le tasse dal tuo stipendio e le versa allo Stato al posto tuo.">ritenuta alla fonte</Tip>, e il datore &egrave; il tuo <Tip t="Il soggetto che paga le tasse al posto tuo: il datore di lavoro o l&apos;INPS.">sostituto d&apos;imposta</Tip>. Il problema &egrave; che lui calcola le tasse solo sullo stipendio, senza sapere nulla della tua vita privata.</p>
            <p>Il Modello 730 serve a comunicare all&apos;Agenzia delle Entrate tutte le spese che ti danno diritto a <Tip t="Una riduzione dell&apos;imposta. Se hai diritto a una detrazione del 19% su 1.000\u20ac di spese mediche, paghi 190\u20ac di tasse in meno.">detrazioni</Tip> o <Tip t="Una riduzione del reddito su cui si calcolano le tasse.">deduzioni</Tip>. Nella stragrande maggioranza dei casi, il risultato &egrave; che hai pagato pi&ugrave; tasse del dovuto e ti spetta un rimborso.</p>
            <p>Il rimborso arriva in busta paga &mdash; di solito tra luglio e agosto se presenti il 730 entro giugno.</p>
          </div>
          <div className="v8-info tip rv rv-d1">
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p>Quasi tutti hanno almeno qualche spesa detraibile. Anche un caso semplice pu&ograve; generare 200&ndash;500&euro; di rimborso. Chi ha mutuo, affitto o figli arriva facilmente a 1.000&ndash;3.000&euro;. Ogni anno che non fai il 730, quei soldi li perdi.</p></div>
          </div>
        </div>
      </section>

      {/* ═══ 4. CALCOLATORE ═══ */}
      <section className="v8-section green" id="calc">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Quanto <em>recuperi?</em></h2>
            <p className="rv rv-d1">Muovi gli slider. Il rimborso si aggiorna in tempo reale.</p>
          </div>
          <Calculator730 />
        </div>
      </section>

      {/* ═══ 5. PERCORSO ═══ */}
      <section className="v8-section" id="percorso">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Come si fa, <em>passo per passo</em></h2>
            <p className="rv rv-d1">Dal primo documento al rimborso in busta paga.</p>
          </div>
          <div className="v8-steps">
            <div className="v8-step rv rv-d1"><div className="v8-step-num">1</div><h3>Fai lo SPID</h3><p>15 minuti, gratuito. Servono documento, tessera sanitaria e smartphone.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num">2</div><h3>Raccogli i documenti</h3><p>CU + tutte le ricevute delle spese detraibili dell&apos;anno.</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num">3</div><h3>Apri la precompilata</h3><p>Dal 30 aprile su agenziaentrate.gov.it, accedi con SPID.</p></div>
            <div className="v8-step rv rv-d4"><div className="v8-step-num">4</div><h3>Controlla e invia</h3><p>Non accettare senza controllare. Aggiungi le spese mancanti.</p></div>
          </div>
          <div style={{textAlign:'center',marginTop:'32px'}}>
            <Link href="/spid" className="v8-crosslink">Fai lo SPID in 15 minuti<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{width:14,height:14}}><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          </div>
          <div className="v8-prose rv" style={{marginTop:'48px'}}>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginBottom:'16px'}}>Quanto costa</h3>
            <div className="v8-cost-grid">
              <div className="v8-cost-card hl"><div className="v8-cost-method">Da solo (precompilata)</div><div className="v8-cost-price">Gratis</div><div className="v8-cost-time">1&ndash;2 ore. Serve SPID.</div></div>
              <div className="v8-cost-card"><div className="v8-cost-method">CAF / Patronato</div><div className="v8-cost-price">30&ndash;80&euro;</div><div className="v8-cost-time">30 min + attesa.</div></div>
              <div className="v8-cost-card"><div className="v8-cost-method">Commercialista</div><div className="v8-cost-price">80&ndash;200&euro;</div><div className="v8-cost-time">15 min dal tuo lato.</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. DETRAZIONI ═══ */}
      <section className="v8-section warm" id="detr">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Cosa puoi <em>detrarre</em></h2>
            <p className="rv rv-d1">Clicca su una voce per approfondire.</p>
          </div>
          <div className="v8-detr-grid" id="detrGrid">
            <div className="v8-detr rv rv-d1" data-detr><div className="v8-detr-pct">19%</div><h4>Spese mediche</h4><p>Oltre la franchigia di 129&euro;</p><div className="v8-detr-detail">Farmaci, visite, interventi, ticket. Pagamento tracciabile obbligatorio. 800&euro; spesi = +127&euro; di rimborso.</div></div>
            <div className="v8-detr rv rv-d2" data-detr><div className="v8-detr-pct">19%</div><h4>Interessi mutuo</h4><p>Max 4.000&euro;/anno</p><div className="v8-detr-detail">Solo prima casa. 4.000&euro; di interessi = 760&euro; di risparmio massimo.</div></div>
            <div className="v8-detr rv rv-d3" data-detr><div className="v8-detr-pct">991&euro;</div><h4>Affitto</h4><p>Reddito &le; 30.987&euro;</p><div className="v8-detr-detail">Per lavoratori fuori sede o studenti fuori comune. Importo varia: 495&euro; (&le;15.493&euro;) o 247&euro; (&le;30.987&euro;).</div></div>
            <div className="v8-detr rv rv-d1" data-detr><div className="v8-detr-pct">19%</div><h4>Spese scolastiche</h4><p>Max 1.000&euro;/figlio</p><div className="v8-detr-detail">Asilo nido, scuola, universit&agrave;. Incluse mense e gite scolastiche.</div></div>
            <div className="v8-detr rv rv-d2" data-detr><div className="v8-detr-pct">19%</div><h4>Trasporto pubblico</h4><p>Max 250&euro;</p><div className="v8-detr-detail">Abbonamenti bus, metro, treno casa-lavoro o casa-scuola.</div></div>
            <div className="v8-detr rv rv-d3" data-detr><div className="v8-detr-pct">50%</div><h4>Ristrutturazione</h4><p>In 10 rate annuali</p><div className="v8-detr-detail">Serve bonifico parlante, non ordinario. Detrazione in 10 anni.</div></div>
          </div>
          <div className="v8-info warn rv" style={{marginTop:'32px'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>Le detrazioni dimenticate pi&ugrave; spesso:</strong> abbonamento trasporti, spese veterinarie, sport dei figli, spese funebri, donazioni ONLUS, badanti. Se non le inserisci, quei soldi li perdi per sempre.</p></div>
          </div>
        </div>
      </section>

      {/* ═══ 7. DOCUMENTI ═══ */}
      <section className="v8-section" id="documenti">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">I documenti <em>necessari</em></h2>
            <p className="rv rv-d1">Prepara tutto prima di sederti a compilare.</p>
          </div>
          <div className="v8-docs-grid rv">
            <div className="v8-doc-group">
              <h3>Sempre necessari</h3>
              <div className="v8-doc">CU 2026 (Certificazione Unica) &mdash; dal datore entro il 16 marzo</div>
              <div className="v8-doc">Documento d&apos;identit&agrave; + codice fiscale</div>
              <div className="v8-doc">IBAN del conto corrente</div>
              <div className="v8-doc">730 dell&apos;anno precedente (se disponibile)</div>
            </div>
            <div className="v8-doc-group">
              <h3>Per le detrazioni</h3>
              <div className="v8-doc">Ricevute spese mediche e sanitarie</div>
              <div className="v8-doc">Contratto d&apos;affitto registrato</div>
              <div className="v8-doc">Certificazione interessi mutuo</div>
              <div className="v8-doc">Ricevute spese scolastiche e universitarie</div>
              <div className="v8-doc">Sport figli 5&ndash;18 anni</div>
              <div className="v8-doc">Abbonamento trasporto pubblico</div>
              <div className="v8-doc">Ricevute spese veterinarie</div>
              <div className="v8-doc">Fatture ristrutturazione + bonifici parlanti</div>
              <div className="v8-doc">Ricevute donazioni ONLUS</div>
            </div>
          </div>
          <div className="v8-info tip rv" style={{marginTop:'24px'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Il metodo della cartellina:</strong> crea una cartellina &quot;730 2026&quot;. Ogni volta che ricevi una ricevuta detraibile, mettila dentro. A maggio avrai tutto pronto in 5 minuti.</p></div>
          </div>
        </div>
      </section>

      {/* ═══ 8. ESEMPIO ═══ */}
      <section className="v8-section dark" id="esempio">
        <div className="v8-esempio-inner">
          <h2 className="rv">L&apos;esempio di <em>Maria</em></h2>
          <div className="v8-esempio-story">
            <p className="rv rv-d1">Maria ha 26 anni, impiegata a Torino. Guadagna <strong>22.000&euro; lordi</strong>. Non ha mai fatto il 730. Quest&apos;anno ha speso 320&euro; dal dentista, paga un affitto da 500&euro;/mese come under 31 e ha un abbonamento GTT da 350&euro;.</p>
          </div>
          <div className="v8-esempio-math">
            <div className="v8-esempio-line rv rv-d1"><span>Spese mediche (320 - 129) &times; 19%</span><span>&euro; 36</span></div>
            <div className="v8-esempio-line rv rv-d2"><span>Affitto under 31</span><span>&euro; 991</span></div>
            <div className="v8-esempio-line rv rv-d3"><span>Trasporti 350 &times; 19%</span><span>&euro; 66</span></div>
            <div className="v8-esempio-line v8-esempio-total rv rv-d4"><span>Rimborso totale</span><span>&euro; 1.093</span></div>
          </div>
          <p className="rv" style={{fontSize:'15px',color:'rgba(250,250,247,.4)',marginTop:'24px',lineHeight:'1.7'}}>Maria per 4 anni non ha fatto il 730. Ha perso circa <strong style={{color:'#FAF8F4'}}>4.000&euro;</strong>. Quest&apos;anno ci ha messo un&apos;ora e mezza e ha recuperato 1.093&euro;.</p>
        </div>
      </section>

      {/* ═══ 9. SCADENZE ═══ */}
      <section className="v8-section" id="scad">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Le <em>scadenze</em></h2>
          </div>
          <div className="v8-timeline">
            <div className="v8-tl-item rv"><div className="v8-tl-dot"></div><div className="v8-tl-date">16 marzo</div><div className="v8-tl-text">I datori inviano le CU all&apos;Agenzia delle Entrate.</div></div>
            <div className="v8-tl-item hl rv rv-d1"><div className="v8-tl-dot"></div><div className="v8-tl-date">30 aprile</div><div className="v8-tl-text">Il 730 precompilato &egrave; disponibile online su agenziaentrate.gov.it.</div></div>
            <div className="v8-tl-item rv rv-d2"><div className="v8-tl-dot"></div><div className="v8-tl-date">Maggio &ndash; Giugno</div><div className="v8-tl-text">Periodo ideale: meno code al CAF, rimborso gi&agrave; a luglio.</div></div>
            <div className="v8-tl-item rv rv-d3"><div className="v8-tl-dot"></div><div className="v8-tl-date">Luglio &ndash; Agosto</div><div className="v8-tl-text">Rimborso in busta paga. Pensionati: pensione di agosto/settembre.</div></div>
            <div className="v8-tl-item hl rv rv-d4"><div className="v8-tl-dot"></div><div className="v8-tl-date">30 settembre</div><div className="v8-tl-text">Scadenza ultima. Dopo serve il Modello Redditi PF.</div></div>
          </div>
        </div>
      </section>

      {/* ═══ 10. ERRORI ═══ */}
      <section className="v8-section warm" id="errori">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Errori da <em>evitare</em></h2>
          </div>
          <div className="v8-info warn rv" style={{marginBottom:'16px'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>Accettare la precompilata senza controllarla.</strong> Le spese sportive dei figli, l&apos;affitto, le spese mediche private, gli abbonamenti: spesso mancano. Se accetti senza controllare, perdi quei rimborsi.</p></div>
          </div>
          <div className="v8-info warn rv rv-d1" style={{marginBottom:'16px'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>Pagare spese detraibili in contanti.</strong> Dal 2025 serve metodo tracciabile (carta, bonifico). Paghi cash? Perdi la detrazione. Eccezioni: farmaci con ricetta e prestazioni SSN.</p></div>
          </div>
          <div className="v8-info warn rv rv-d2">
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>Andare al CAF all&apos;ultimo momento.</strong> A settembre sono sommersi. Vai tra maggio e giugno: zero stress, rimborso anticipato.</p></div>
          </div>
        </div>
      </section>

      {/* ═══ 11. FAQ ═══ */}
      <section className="v8-section warm" id="faq" style={{paddingTop:'0'}}>
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Domande <em>frequenti</em></h2>
          </div>
          <div className="v8-faq-list" id="faqList">
            {faqItems.map((item, i) => (
              <div key={i} className="v8-faq-item" data-faq>
                <button className="v8-faq-q">{item.q}<span className="v8-faq-icon">+</span></button>
                <div className="v8-faq-a"><p dangerouslySetInnerHTML={{ __html: item.a }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 12. APPROFONDIMENTI ═══ */}
      <section className="v8-section" id="correlate">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Approfondimenti e <em>guide correlate</em></h2>
          </div>
          <div className="v8-related-grid rv">
            <Link href="/730/precompilato" className="v8-related-card">
              <h4>730 Precompilato</h4>
              <p>Come accedere, controllare e inviare il precompilato.</p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            </Link>
            <Link href="/730/detrazioni-affitto" className="v8-related-card">
              <h4>Detrazioni affitto nel 730</h4>
              <p>Quanto recuperi e come inserirle: importi e codici.</p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            </Link>
            <Link href="/isee" className="v8-related-card">
              <h4>ISEE</h4>
              <p>Bonus e agevolazioni: ti serve l&apos;ISEE.</p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            </Link>
            <Link href="/spid" className="v8-related-card">
              <h4>SPID</h4>
              <p>Per la precompilata ti serve lo SPID.</p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="v8-cta">
        <div className="v8-cta-box rv-scale">
          <h2>Ti &egrave; stata <em>utile?</em></h2>
          <p>Ne abbiamo molte altre. Trova quella che ti serve.</p>
          <Link href="/guide" className="v8-cta-btn">Esplora tutte le guide</Link>
        </div>
      </section>

      <FooterV8 />
    </div>
  );
}
