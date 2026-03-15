import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import GuideEnhancer from '@/components/GuideEnhancer';
import GuideExpand from '@/components/GuideExpand';
import FAQ from '@/components/FAQ';
import Calculator730 from '@/components/Calculator730';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import '@/app/guide.css';

export const metadata = {
  title: '730 Precompilato 2026: Come Farlo, Detrazioni, Scadenze e Rimborso',
  description: '730 precompilato 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze e come ottenere il massimo rimborso. Guida gratuita passo per passo.',
  keywords: ['730', '730 2026', 'dichiarazione redditi', '730 precompilato', 'come fare 730', 'detrazioni fiscali', 'scadenza 730'],
  alternates: { canonical: 'https://zeroburocrazia.it/730' },
  openGraph: { type: 'article', title: '730 Precompilato 2026: Guida Completa', description: 'Come fare il 730 nel 2026: detrazioni, documenti, scadenze e rimborso.', url: 'https://zeroburocrazia.it/730', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/og-730.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary', title: '730 Precompilato 2026: Guida Completa', images: ['https://zeroburocrazia.it/og-730.png'] },
};

const faqItems = [
  { q: "Se non faccio il 730, cosa succede?", a: "<strong>Non vai in prigione.</strong> Ma perdi le detrazioni: centinaia o migliaia di euro ogni anno. Se eri obbligato e non lo fai, rischi sanzioni dal 120% al 240% delle imposte dovute." },
  { q: "Posso scaricare Netflix o la palestra?", a: "<strong>Netflix no.</strong> Palestra per i figli 5\u201318 anni: s\u00ec, detraibile al 19% fino a 210\u20ac. Per adulti: solo se prescritta dal medico." },
  { q: "Il CU non mi arriva, che faccio?", a: "Il datore \u00e8 <strong>obbligato per legge</strong> a consegnartela entro il 16 marzo. Sollecita per iscritto. Puoi anche scaricarla dal sito dell\u2019Agenzia delle Entrate con SPID." },
  { q: "Ho pagato in contanti, perdo la detrazione?", a: "<strong>Dipende.</strong> Dal 2025 anche i farmaci da banco richiedono pagamento tracciabile. Ancora OK in contanti: farmaci <strong>con ricetta medica</strong> e visite." },
  { q: "Ho cambiato lavoro, devo fare due 730?", a: "<strong>No, un solo 730</strong> con entrambe le CU. Probabilmente dovrai pagare un conguaglio." },
  { q: "730 congiunto con il partner?", a: "<strong>Solo se sposati o uniti civilmente.</strong> Il vantaggio: crediti e debiti si compensano. Conviventi non possono farlo." },
  { q: "Ho fatto un errore, posso correggerlo?", a: "<strong>S\u00ec.</strong> Entro il 30/9: 730 integrativo. Dopo: Modello Redditi correttivo entro il 30/11, o dichiarazione integrativa entro 5 anni." },
  { q: "NASpI o cassa integrazione, devo farlo?", a: "<strong>S\u00ec, e ti conviene.</strong> NASpI e CIG sono redditi. Se hai avuto stipendio + NASpI, il 730 \u00e8 praticamente obbligatorio." },
];

const stepData = [
  ["\uD83D\uDD10", "Fai lo SPID", "15 minuti, gratis"],
  ["\uD83D\uDCC4", "Raccogli i documenti", "CU + ricevute spese"],
  ["\uD83D\uDCBB", "Apri la precompilata", "agenziaentrate.gov.it"],
  ["\u2705", "Controlla e invia", "Entro il 30 settembre"],
  ["\uD83D\uDCB8", "Ricevi il rimborso", "In busta paga a luglio"],
];

const detrazioniCards = [
  ["\uD83E\uDDB7", "Dentista", "+127\u20ac", "su 800\u20ac"],
  ["\uD83C\uDFE0", "Mutuo", "+760\u20ac", "su 4.000\u20ac"],
  ["\uD83D\uDE87", "Trasporti", "+47\u20ac", "su 250\u20ac"],
  ["\uD83D\uDC76", "Sport figli", "+40\u20ac", "su 500\u20ac"],
  ["\uD83D\uDC15", "Veterinario", "+51\u20ac", "su 400\u20ac"],
  ["\uD83C\uDFEB", "Scuola", "+190\u20ac", "su 1.000\u20ac"],
];

const tabellaDetrazioni = [
  ["Spese mediche", "19%"],
  ["Interessi mutuo", "19%"],
  ["Affitto", "300\u2013991\u20ac"],
  ["Spese scolastiche", "19%"],
  ["Sport figli 5\u201318", "19%"],
  ["Trasporto pubblico", "19%"],
  ["Veterinario", "19%"],
  ["Assicurazione vita", "19%"],
  ["Donazioni ONLUS", "26%"],
  ["Ristrutturazione", "50%"],
  ["Ecobonus", "50\u201365%"],
  ["Bonus mobili", "50%"],
];

const documentiObbligatori = [
  ["\uD83D\uDCC4", "CU 2026 (Certificazione Unica)"],
  ["\uD83E\uDEAA", "Documento d'identit\u00e0 + codice fiscale"],
  ["\uD83C\uDFE6", "IBAN per il rimborso"],
];

const documentiDetrazioni = [
  ["\uD83E\uDDB7", "Ricevute spese mediche"],
  ["\uD83C\uDFE0", "Contratto d'affitto registrato"],
  ["\uD83C\uDFE6", "Certificazione interessi mutuo"],
  ["\uD83C\uDFEB", "Ricevute spese scolastiche"],
  ["\u26BD", "Ricevute sport figli (5\u201318 anni)"],
  ["\uD83D\uDE87", "Abbonamento trasporto pubblico"],
  ["\uD83D\uDC15", "Ricevute spese veterinarie"],
  ["\uD83D\uDD28", "Fatture ristrutturazione + bonifici parlanti"],
];

const mariaSteps = [
  ["\uD83D\uDCC4", "Marzo: raccoglie i documenti", "CU via email + dentista (320\u20ac) + GTT (350\u20ac) + affitto"],
  ["\uD83D\uDCBB", "Maggio: apre la precompilata", "Dentista c'\u00e8, manca GTT \u2014 lo aggiunge a mano"],
  ["\uD83D\uDD0D", "Controlla tutto", "Mediche 36\u20ac + affitto 991\u20ac + trasporti 66\u20ac = 1.093\u20ac"],
  ["\u2705", "Invia e aspetta", "A luglio: 1.093\u20ac in pi\u00f9. Costo: 0\u20ac. Tempo: 1h30"],
];

export default function Pagina730() {
  const schemas = [
    articleSchema({ title: "Guida completa al 730 2026", description: "Come fare il 730: detrazioni, documenti, scadenze e rimborso.", url: "/730", image: "og730.png" }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-fisco page-guida">
      <Nav variant="scheda" />
      <ScrollReveal />
      <GuideEnhancer />
      <SchemaOrg schemas={schemas} />

      {/* ════════ HERO ════════ */}
      <section className="g-sec g-sec--hero">
        <div className="cat-badge" style={{ background: 'rgba(255,255,255,.12)', marginBottom: 14 }}>{"\uD83D\uDCB0"} Fisco e soldi</div>
        <h1 style={{ fontSize: 'clamp(28px,7vw,42px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 10, fontFamily: 'var(--font-playfair),serif' }}>
          Faccio il <em style={{ color: '#fff', opacity: 0.7 }}>730</em>
        </h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', lineHeight: 1.6, marginBottom: 16, maxWidth: 480 }}>
          Come ottenere il rimborso pi&ugrave; alto possibile dalla dichiarazione dei redditi. Guida gratuita aggiornata al 2026.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {["\uD83D\uDD50 15 min di lettura", "\u23F0 Scade 30/9/2026", "\u2713 Aggiornata marzo 2026"].map((p, i) => (
            <span key={i} style={{ fontSize: 11, fontWeight: 600, padding: '5px 12px', borderRadius: 100, background: 'rgba(255,255,255,.12)', color: 'rgba(255,255,255,.85)' }}>{p}</span>
          ))}
        </div>
      </section>

      {/* ════════ NUMERI CHIAVE ════════ */}
      <div className="g-stats">
        <div><div className="g-stat-num" style={{ color: 'var(--sage)' }}>0&euro;</div><div className="g-stat-label">da solo online</div></div>
        <div><div className="g-stat-num" style={{ color: 'var(--cat)' }}>30/9</div><div className="g-stat-label">scadenza</div></div>
        <div><div className="g-stat-num" style={{ color: 'var(--teal)' }}>~760&euro;</div><div className="g-stat-label">rimborso medio</div></div>
      </div>

      {/* ════════ COS'È ════════ */}
      <section className="g-sec g-sec--gray" id="cose">
        <div className="g-eyebrow">Le basi</div>
        <h2>Cos&apos;&egrave; il 730</h2>
        <p className="g-sub">In 30 secondi</p>
        <GuideExpand
          visual={<>
            <div className="g-grid">
              <div className="g-card"><div className="g-card-emoji">{"\uD83D\uDCBC"}</div><div className="g-card-title">Tu lavori</div><div className="g-card-note">Il datore toglie le tasse &quot;a occhio&quot;</div></div>
              <div className="g-card"><div className="g-card-emoji">{"\uD83E\uDDFE"}</div><div className="g-card-title">Fai il 730</div><div className="g-card-note">Dici allo Stato le tue spese</div></div>
            </div>
            <div className="g-arrow">{"\u2193"}</div>
            <div className="g-result"><strong>{"\uD83D\uDCB8"} Rimborso</strong><span>In busta paga tra luglio e agosto</span></div>
          </>}
          detail={<>
            <p>Quando lavori come dipendente, il tuo datore di lavoro ti toglie le tasse dallo stipendio ogni mese. Il problema &egrave; che lui non sa tutto di te: non sa se paghi l&apos;affitto, se vai dal dentista, se hai figli che fanno sport. Lui toglie le tasse &quot;a occhio&quot;, basandosi solo sullo stipendio.</p>
            <p>Il 730 serve a dire allo Stato: <strong>&quot;Ehi, ho speso questi soldi durante l&apos;anno. Ridammene un po&apos; indietro.&quot;</strong> Nella maggior parte dei casi hai pagato pi&ugrave; tasse del dovuto. Il rimborso arriva in busta paga tra luglio e agosto.</p>
            <div className="g-box g-box--tip"><div className="g-box-title">{"\uD83D\uDCA1"} Conviene anche se non sei obbligato</div><p>Dentista + metro + sport + affitto fanno facilmente 500&ndash;1.500&euro; di rimborso. Ogni anno. Se non fai il 730, quei soldi li regali allo Stato.</p></div>
            <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--t1)', marginBottom: 8 }}>{"\uD83D\uDCD6"} Glossario</p>
            <div className="g-glossary">
              <div className="g-gl"><b>CU</b> &mdash; il foglio che il datore ti d&agrave; entro marzo. Dice quanto hai guadagnato e quante tasse hai pagato.</div>
              <div className="g-gl"><b>IRPEF</b> &mdash; la tassa principale sui redditi. Quella che paghi ogni mese in busta paga.</div>
              <div className="g-gl"><b>Detrazione</b> &mdash; una spesa che lo Stato ti rimborsa in parte (di solito il 19%).</div>
              <div className="g-gl"><b>Franchigia</b> &mdash; soglia sotto la quale non ti rimborsano. Per le mediche: 129,11&euro;.</div>
              <div className="g-gl"><b>Precompilata</b> &mdash; il 730 che l&apos;Agenzia delle Entrate prepara per te, gi&agrave; compilato in parte.</div>
              <div className="g-gl"><b>Conguaglio</b> &mdash; il conto finale. Troppe tasse pagate = rimborso. Poche = devi saldare.</div>
            </div>
          </>}
        />
      </section>

      {/* ════════ QUANTO PERDI ════════ */}
      <section className="g-sec g-sec--dark" id="quanto-perdi">
        <div className="g-eyebrow">Il conto che nessuno ti fa</div>
        <h2>Quanto perdi senza il 730</h2>
        <div className="g-bignum"><strong>1.178&euro;</strong><span>persi ogni anno da Marco, 28 anni, dipendente</span></div>
        <GuideExpand
          visual={
            <div className="g-grid">
              <div className="g-card"><div className="g-card-emoji">{"\uD83E\uDDB7"}</div><div className="g-card-value">+89&euro;</div><div className="g-card-title">Dentista</div></div>
              <div className="g-card"><div className="g-card-emoji">{"\uD83D\uDE87"}</div><div className="g-card-value">+47&euro;</div><div className="g-card-title">Metro</div></div>
              <div className="g-card"><div className="g-card-emoji">{"\uD83C\uDFE0"}</div><div className="g-card-value">+991&euro;</div><div className="g-card-title">Affitto</div></div>
              <div className="g-card"><div className="g-card-emoji">{"\uD83D\uDC15"}</div><div className="g-card-value">+51&euro;</div><div className="g-card-title">Veterinario</div></div>
            </div>
          }
          label="Vedi il calcolo completo"
          detail={<>
            <p>Marco ha 28 anni, lavora come dipendente e guadagna 14.000&euro; lordi. Non ha mai fatto il 730.</p>
            <p><strong>Spese mediche:</strong> 600&euro; &minus; 129&euro; franchigia = 471&euro; &times; 19% = <strong>89&euro;</strong></p>
            <p><strong>Abbonamento metro:</strong> 250&euro; &times; 19% = <strong>47&euro;</strong></p>
            <p><strong>Affitto under 31:</strong> detrazione fissa fino a <strong>991&euro;</strong></p>
            <p><strong>Veterinario:</strong> 400&euro; &minus; 129&euro; = 271&euro; &times; 19% = <strong>51&euro;</strong></p>
            <p>Con mutuo, figli o ristrutturazione si recuperano 2.000&ndash;4.000&euro;/anno. In 5 anni sono quasi <strong>6.000&euro;</strong> regalati.</p>
          </>}
        />
      </section>

      {/* ════════ NOVITÀ 2026 ════════ */}
      <section className="g-sec g-sec--white" id="novita">
        <div className="g-eyebrow">Aggiornamenti</div>
        <h2>Novit&agrave; 2026</h2>
        <p className="g-sub">Le regole cambiano ogni anno. Ecco cosa sapere.</p>
        <div className="g-box g-box--tip"><div className="g-box-title">{"\uD83D\uDCA1"} Tre scaglioni IRPEF definitivi</div><p>Fino a 28.000&euro;: 23%. Da 28.001 a 50.000&euro;: 33% (era 35%). Oltre 50.000&euro;: 43%. Risparmio circa 440&euro;.</p></div>
        <div className="g-box g-box--warn"><div className="g-box-title">{"\u26A0\uFE0F"} Reddito sopra 75.000&euro;? Detrazioni ridotte</div><p>Le detrazioni al 19% vengono tagliate fino ad azzerarsi a 100.000&euro;. Eccezione: spese sanitarie e mutui stipulati entro il 2024.</p></div>
        <div className="g-box g-box--warn"><div className="g-box-title">{"\u26A0\uFE0F"} Figli a carico: limite dei 30 anni</div><p>I figli possono essere considerati a carico solo fino ai 30 anni. Prima non c&apos;era limite di et&agrave;. Oltre i 30: non detraibili (salvo disabilit&agrave;).</p></div>
        <div className="g-box g-box--money"><div className="g-box-title">{"\uD83D\uDCB6"} Detrazione lavoro dipendente aumentata</div><p>Se guadagni meno di 15.000&euro;: la detrazione sale da 1.880&euro; a 1.955&euro;.</p></div>
        <div className="g-box g-box--tip"><div className="g-box-title">{"\uD83D\uDCA1"} Spese scolastiche: sale il tetto</div><p>Il tetto sale da 800&euro; a 1.000&euro; per studente. Risparmio massimo da 152&euro; a 190&euro; per figlio.</p></div>
      </section>

      {/* ════════ DETRAZIONI ════════ */}
      <section className="g-sec g-sec--gray" id="detrazioni">
        <div className="g-eyebrow">Rimborsi</div>
        <h2>Quanto recuperi</h2>
        <p className="g-sub">Lo Stato ti rimborsa il 19% su queste spese</p>
        <GuideExpand
          visual={
            <div className="g-grid">
              {detrazioniCards.map((d, i) => (
                <div className="g-card" key={i}><div className="g-card-emoji">{d[0]}</div><div className="g-card-title">{d[1]}</div><div className="g-card-value">{d[2]}</div><div className="g-card-note">{d[3]}</div></div>
              ))}
            </div>
          }
          detail={<>
            <p>Una singola detrazione sembra poco. Ma sommandole: dentista + metro + sport + veterinario + affitto fanno facilmente <strong>500&ndash;1.500&euro; di rimborso</strong>. Ogni anno.</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--t1)', marginBottom: 8 }}>Tabella completa</p>
            <div className="g-table">
              {tabellaDetrazioni.map((r, i) => (
                <div className="g-row" key={i}><div className="g-row-name">{r[0]}</div><div className="g-row-val">{r[1]}</div></div>
              ))}
            </div>
            <div className="g-box g-box--warn"><div className="g-box-title">{"\u26A0\uFE0F"} Le detrazioni dimenticate</div><p>Trasporti, veterinario, sport figli, funebri, donazioni ONLUS, badanti, bonus mobili. Se non le inserisci, li perdi per sempre.</p></div>
          </>}
        />
      </section>

      {/* ════════ CHI DEVE FARLO ════════ */}
      <section className="g-sec g-sec--white" id="chi-deve">
        <div className="g-eyebrow">Obblighi</div>
        <h2>Chi deve fare il 730</h2>
        <p className="g-sub">Tre casi: obbligatorio, consigliato, impossibile</p>
        <GuideExpand
          visual={
            <div className="g-status">
              <div className="g-status-card" style={{ background: '#f0f8f5', border: '1px solid rgba(42,157,143,.2)' }}><div className="g-status-title" style={{ color: 'var(--sage)' }}>{"\u2705"} Devi farlo se</div><div className="g-status-desc">Sei dipendente o pensionato con redditi nel 2025</div></div>
              <div className="g-status-card" style={{ background: '#FFF0E0', border: '1px solid rgba(227,100,20,.15)' }}><div className="g-status-title" style={{ color: '#b34e0e' }}>{"\u26A0\uFE0F"} Praticamente obbligatorio se</div><div className="g-status-desc">Hai cambiato lavoro (due CU) o avuto stipendio + NASpI</div></div>
              <div className="g-status-card" style={{ background: '#f3f7fb', border: '1px solid rgba(15,76,92,.12)' }}><div className="g-status-title" style={{ color: 'var(--teal)' }}>{"\uD83D\uDCA1"} Ti conviene se</div><div className="g-status-desc">Un lavoro tutto l&apos;anno + spese da scaricare (dentista, affitto, mutuo...)</div></div>
              <div className="g-status-card" style={{ background: '#f5f5f2' }}><div className="g-status-title" style={{ color: 'var(--t3)' }}>{"\uD83D\uDEAB"} Non puoi farlo se</div><div className="g-status-desc">Hai la partita IVA &mdash; serve il Modello Redditi</div></div>
            </div>
          }
          detail={<>
            <p><strong>Due datori = 730 praticamente obbligatorio.</strong> Ogni datore ti ha tolto le tasse come se fossi stato l&igrave; tutto l&apos;anno. Senza 730: l&apos;Agenzia se ne accorge e ti manda un avviso con sanzioni.</p>
            <div className="g-box g-box--tip"><div className="g-box-title">{"\uD83D\uDCA1"} La regola semplice</div><p>Se durante l&apos;anno hai speso soldi per salute, casa, figli, trasporti o animali domestici &mdash; fai il 730. Quasi sicuramente ti spetta un rimborso.</p></div>
          </>}
        />
      </section>

      {/* ════════ COME SI FA ════════ */}
      <section className="g-sec g-sec--white" id="come">
        <div className="g-eyebrow">Passo per passo</div>
        <h2>Come si fa il 730</h2>
        <p className="g-sub">5 passi dal divano di casa</p>
        <GuideExpand
          visual={
            <div className="g-flow">
              {stepData.map((s, i) => (
                <div key={i}>
                  <div className="g-step">
                    <div className="g-step-icon">{s[0]}</div>
                    <div className="g-step-text"><strong>{s[1]}</strong><span>{s[2]}</span></div>
                    <div className="g-step-num">{i + 1}</div>
                  </div>
                  {i < stepData.length - 1 && <div className="g-step-line" />}
                </div>
              ))}
            </div>
          }
          detail={<>
            <p><strong>Passo 0 &mdash; SPID.</strong> Per la precompilata serve lo SPID. <Link href="/spid" style={{ color: 'var(--cat)', fontWeight: 600 }}>Ci vogliono 15 minuti</Link>. Se vai al CAF, non serve.</p>
            <p><strong>Passo 1 &mdash; Documenti.</strong> Il pi&ugrave; importante &egrave; la CU: te la d&agrave; il datore entro il 16 marzo. Poi ricevute mediche, affitto, mutuo, scuola, trasporti.</p>
            <p><strong>Passo 2 &mdash; Decidi come.</strong> Da solo online: gratis, 1&ndash;2 ore. Al CAF: 30&ndash;80&euro;, 30 min. Commercialista: 80&ndash;200&euro;.</p>
            <p><strong>Passo 3 &mdash; Precompilata.</strong> Dal 30 aprile su agenziaentrate.gov.it. <strong>Non accettarla senza controllare.</strong> Mancano quasi sempre: sport figli, affitto, spese private.</p>
            <p><strong>Passo 4 &mdash; Invia.</strong> Fallo tra maggio e giugno. Prima lo fai, prima arriva il rimborso.</p>
            <p><strong>Passo 5 &mdash; Rimborso.</strong> In busta paga tra luglio e agosto. Pensionati: agosto&ndash;settembre.</p>
          </>}
        />
      </section>

      {/* ════════ QUANTO COSTA ════════ */}
      <section className="g-sec g-sec--gray" id="costi">
        <div className="g-eyebrow">Confronto</div>
        <h2>Quanto costa farlo</h2>
        <p className="g-sub">Tre opzioni, un solo vincitore</p>
        <div className="g-compare">
          <div className="g-cmp g-cmp--best"><div className="g-cmp-badge">Consigliato</div><div className="g-cmp-info"><div className="g-cmp-name">Da solo online</div><div className="g-cmp-sub">1&ndash;2 ore &middot; Serve SPID &middot; Un lavoro e poche spese</div></div><div className="g-cmp-price">0&euro;</div></div>
          <div className="g-cmp"><div className="g-cmp-info"><div className="g-cmp-name">Al CAF / Patronato</div><div className="g-cmp-sub">30 min + attesa &middot; Cambiato lavoro o affitto</div></div><div className="g-cmp-price">30&ndash;80&euro;</div></div>
          <div className="g-cmp"><div className="g-cmp-info"><div className="g-cmp-name">Commercialista</div><div className="g-cmp-sub">15 min tu &middot; Immobili, redditi esteri, cripto</div></div><div className="g-cmp-price">80&ndash;200&euro;</div></div>
        </div>
        <div className="g-box g-box--money"><div className="g-box-title">{"\uD83D\uDCB6"} Il consiglio di ZeroBurocrazia</div><p><strong>Un lavoro + poche spese</strong> &rarr; fallo da solo. <strong>Mutuo o cambio lavoro</strong> &rarr; CAF. <strong>Immobili, cripto, redditi esteri</strong> &rarr; commercialista.</p></div>
      </section>

      {/* ════════ DOCUMENTI ════════ */}
      <section className="g-sec g-sec--white" id="documenti">
        <div className="g-eyebrow">Checklist</div>
        <h2>Cosa ti serve</h2>
        <GuideExpand
          visual={
            <div className="g-checks">
              <div className="g-check-label">Obbligatori</div>
              {documentiObbligatori.map((d, i) => (
                <div className="g-check" key={i}><span className="g-check-emoji">{d[0]}</span><span className="g-check-text">{d[1]}</span><span className="g-check-ok">{"\u2713"}</span></div>
              ))}
              <div className="g-check-label">Per le detrazioni</div>
              {documentiDetrazioni.map((d, i) => (
                <div className="g-check" key={i}><span className="g-check-emoji">{d[0]}</span><span className="g-check-text">{d[1]}</span><span className="g-check-empty" /></div>
              ))}
            </div>
          }
          detail={<>
            <p><strong>CU</strong> &mdash; il foglio dal datore. Dice quanto hai guadagnato. Senza questo non puoi fare nulla.</p>
            <p><strong>Ricevute mediche</strong> &mdash; farmaci, visite, esami, dentista, psicologo, occhiali. Tieni tutto.</p>
            <p><strong>Contratto affitto</strong> &mdash; deve essere registrato per la detrazione.</p>
            <p><strong>Interessi mutuo</strong> &mdash; li manda la banca tra febbraio e marzo.</p>
            <p><strong>Fatture ristrutturazione</strong> &mdash; servono i bonifici parlanti. Senza quelli, perdi la detrazione.</p>
            <div className="g-box g-box--tip"><div className="g-box-title">{"\uD83D\uDCA1"} Metti tutto in una cartellina</div><p>Quando ricevi una ricevuta, mettila nella cartellina &quot;730&quot;. A maggio avrai tutto pronto in 5 minuti.</p></div>
          </>}
        />
      </section>

      {/* ════════ ERRORI ════════ */}
      <section className="g-sec g-sec--warm" id="errori">
        <div className="g-eyebrow">Attenzione</div>
        <h2>Errori da evitare</h2>
        <p className="g-sub">I 4 pi&ugrave; comuni</p>
        <div className="g-warnings">
          <div className="g-wcard"><span className="g-wcard-emoji">{"\u26A0\uFE0F"}</span><div><div className="g-wcard-title">Accettare la precompilata senza controllarla</div><div className="g-wcard-desc">Sport figli, affitto, spese mediche private spesso mancano. Controlla sempre.</div></div></div>
          <div className="g-wcard"><span className="g-wcard-emoji">{"\u26A0\uFE0F"}</span><div><div className="g-wcard-title">Non fare il 730 perch&eacute; &quot;tanto non cambia&quot;</div><div className="g-wcard-desc">Anche con poche spese puoi recuperare 200&ndash;400&euro;. Ogni anno.</div></div></div>
          <div className="g-wcard"><span className="g-wcard-emoji">{"\u26A0\uFE0F"}</span><div><div className="g-wcard-title">Pagare spese detraibili in contanti</div><div className="g-wcard-desc">Dal 2025 anche i farmaci da banco richiedono pagamento tracciabile.</div></div></div>
          <div className="g-wcard"><span className="g-wcard-emoji">{"\u26A0\uFE0F"}</span><div><div className="g-wcard-title">Andare al CAF a settembre</div><div className="g-wcard-desc">Vai tra maggio e giugno: zero code, tempo per correggere errori.</div></div></div>
        </div>
      </section>

      {/* ════════ CALENDARIO ════════ */}
      <section className="g-sec g-sec--white" id="calendario">
        <div className="g-eyebrow">Scadenze</div>
        <h2>Calendario 2026</h2>
        <div className="g-timeline">
          <div className="g-tl g-tl--on"><div className="g-tl-dot" /><div className="g-tl-date">16 Marzo</div><div className="g-tl-title">Ricevi la CU</div><div className="g-tl-desc">Dal datore di lavoro o dall&apos;INPS</div></div>
          <div className="g-tl"><div className="g-tl-dot" /><div className="g-tl-date">30 Aprile</div><div className="g-tl-title">Online la precompilata</div><div className="g-tl-desc">Accedi con SPID su agenziaentrate.gov.it</div></div>
          <div className="g-tl"><div className="g-tl-dot" /><div className="g-tl-date">Maggio &ndash; Giugno</div><div className="g-tl-title">Periodo ideale per fare il 730</div><div className="g-tl-desc">Meno code al CAF, rimborso a luglio</div></div>
          <div className="g-tl"><div className="g-tl-dot" /><div className="g-tl-date">Luglio &ndash; Agosto</div><div className="g-tl-title">Arriva il rimborso in busta paga</div><div className="g-tl-desc">Se hai inviato entro giugno</div></div>
          <div className="g-tl"><div className="g-tl-dot" /><div className="g-tl-date">30 Settembre</div><div className="g-tl-title">Scadenza invio 730</div><div className="g-tl-desc">Dopo questa data serve il Modello Redditi</div></div>
        </div>
      </section>

      {/* ════════ CALCOLATORE ════════ */}
      <section className="g-sec g-sec--gray" id="calcolatore">
        <div className="g-eyebrow">Stimatore</div>
        <h2>Calcola il tuo rimborso</h2>
        <p className="g-sub">Muovi i cursori per stimare quanto recuperi</p>
        <Calculator730 />
      </section>

      {/* ════════ ESEMPIO MARIA ════════ */}
      <section className="g-sec g-sec--white" id="esempio">
        <div className="g-eyebrow">Esempio pratico</div>
        <h2>Maria fa il 730 per la prima volta</h2>
        <p className="g-sub">26 anni, impiegata a Torino, 22.000&euro; lordi</p>
        <div className="g-flow">
          {mariaSteps.map((s, i) => (
            <div key={i}>
              <div className="g-step">
                <div className="g-step-icon">{s[0]}</div>
                <div className="g-step-text"><strong>{s[1]}</strong><span>{s[2]}</span></div>
              </div>
              {i < mariaSteps.length - 1 && <div className="g-step-line" />}
            </div>
          ))}
        </div>
        <div className="g-box g-box--money"><div className="g-box-title">{"\uD83D\uDCB6"} Morale della storia</div><p>Maria per 4 anni non ha fatto il 730. Ha perso circa 4.000&euro;. Quest&apos;anno ha recuperato 1.093&euro; in un&apos;ora e mezza.</p></div>
      </section>

      {/* ════════ SE SEI IN RITARDO ════════ */}
      <section className="g-sec g-sec--warm" id="ritardo">
        <div className="g-eyebrow">Ritardi e sanzioni</div>
        <h2>Se sei in ritardo</h2>
        <p className="g-sub">La scadenza &egrave; il 30 settembre. Ecco cosa fare.</p>
        <GuideExpand
          visual={
            <div className="g-warnings">
              <div className="g-wcard"><span className="g-wcard-emoji">{"\uD83D\uDCC5"}</span><div><div className="g-wcard-title">Entro il 25 ottobre</div><div className="g-wcard-desc">730 integrativo. Nessuna sanzione.</div></div></div>
              <div className="g-wcard"><span className="g-wcard-emoji">{"\uD83D\uDCC5"}</span><div><div className="g-wcard-title">Entro il 30 novembre</div><div className="g-wcard-desc">Modello Redditi correttivo. Pi&ugrave; complicato, meglio al CAF.</div></div></div>
              <div className="g-wcard"><span className="g-wcard-emoji">{"\uD83D\uDCC5"}</span><div><div className="g-wcard-title">Dopo il 30 novembre</div><div className="g-wcard-desc">Dichiarazione tardiva entro 90 giorni. Sanzione: 25&euro; o 1&ndash;10%.</div></div></div>
            </div>
          }
          detail={
            <div className="g-box g-box--tip"><div className="g-box-title">{"\uD83D\uDCA1"} Hai dimenticato anni fa?</div><p>Puoi presentare una dichiarazione integrativa entro 5 anni. Se ti spettava un rimborso, puoi ancora recuperarlo. Il &quot;ravvedimento operoso&quot; riduce le sanzioni.</p></div>
          }
        />
      </section>

      {/* ════════ FAQ ════════ */}
      <section className="g-sec g-sec--dark" id="faq">
        <div className="g-eyebrow">FAQ</div>
        <h2>Domande frequenti</h2>
        <FAQ items={faqItems} />
      </section>

      {/* ════════ CTA ════════ */}
      <section className="g-sec g-sec--white" style={{ paddingBottom: 48 }}>
        <div className="g-cta">
          <div style={{ fontSize: 28, marginBottom: 8 }}>{"\uD83D\uDCEC"}</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--t1)', marginBottom: 6 }}>Non perderti la scadenza</div>
          <div style={{ fontSize: 13, color: 'var(--t3)', marginBottom: 16 }}>Ti avvisiamo prima del 30 settembre con tutto quello che ti serve.</div>
        </div>
        <BrevoForm pageName="730" />
      </section>

      <Footer />
    </div>
  );
}
