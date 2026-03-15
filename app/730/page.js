import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import GuideEnhancer from '@/components/GuideEnhancer';
import WiseSection from '@/components/WiseSection';
import FAQ from '@/components/FAQ';
import Calculator730 from '@/components/Calculator730';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import './wise730.css';

export const metadata = {
  title: '730 Precompilato 2026: Come Farlo, Detrazioni, Scadenze e Rimborso',
  description: '730 precompilato 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze e come ottenere il massimo rimborso. Guida gratuita passo per passo.',
  keywords: ['730', '730 2026', 'dichiarazione redditi', '730 precompilato', 'come fare 730', 'detrazioni fiscali', 'scadenza 730'],
  alternates: { canonical: 'https://zeroburocrazia.it/730' },
  openGraph: { type: 'article', title: '730 Precompilato 2026: Guida Completa', description: '730 precompilato 2026: chi deve farlo, tutte le detrazioni, documenti e scadenze.', url: 'https://zeroburocrazia.it/730', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/og-730.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary', title: '730 Precompilato 2026: Guida Completa', description: '730 precompilato 2026: chi deve farlo, tutte le detrazioni, documenti e scadenze.', images: ['https://zeroburocrazia.it/og-730.png'] },
};

const faqItems = [
  { q: 'Se non faccio il 730, cosa succede?', a: '<strong>Non vai in prigione.</strong> Ma perdi le detrazioni: centinaia o migliaia di euro ogni anno. Se eri obbligato e non lo fai, rischi sanzioni dal 120% al 240% delle imposte dovute.' },
  { q: 'Posso scaricare Netflix o la palestra?', a: '<strong>Netflix no.</strong> Palestra per i figli 5–18 anni: s\u00ec, detraibile al 19% fino a 210\u20ac. Per adulti: solo se prescritta dal medico come riabilitativa.' },
  { q: 'Il CU non mi arriva, che faccio?', a: 'Il datore \u00e8 <strong>obbligato per legge</strong> a consegnartela entro il 16 marzo. Sollecita per iscritto. Puoi anche scaricarla dal sito dell\'Agenzia delle Entrate con SPID.' },
  { q: 'Ho pagato in contanti, perdo la detrazione?', a: '<strong>Dipende.</strong> Dal 2025 anche i farmaci da banco richiedono pagamento tracciabile. Ancora OK in contanti: farmaci <strong>con ricetta medica</strong> e visite mediche.' },
  { q: 'Ho cambiato lavoro, devo fare due 730?', a: '<strong>No, un solo 730</strong> con entrambe le CU. Probabilmente dovrai pagare un conguaglio perch\u00e9 ogni datore ha applicato le detrazioni come se fossi stato l\u00ec tutto l\'anno.' },
  { q: '730 congiunto con il partner?', a: '<strong>Solo se sposati o uniti civilmente.</strong> Il vantaggio: crediti e debiti si compensano. Conviventi non possono farlo.' },
  { q: 'Ho fatto un errore, posso correggerlo?', a: '<strong>S\u00ec.</strong> Entro il 30 settembre: 730 integrativo. Dopo: Modello Redditi correttivo entro il 30 novembre, o dichiarazione integrativa entro 5 anni.' },
  { q: 'NASpI o cassa integrazione, devo farlo?', a: '<strong>S\u00ec, e ti conviene.</strong> NASpI e CIG sono redditi. Se hai avuto sia stipendio che NASpI, il 730 \u00e8 praticamente obbligatorio.' },
];

export default function Pagina730() {
  const schemas = [
    articleSchema({ title: 'Guida completa al 730 2026', description: 'Come fare il 730: detrazioni, documenti, scadenze e rimborso.', url: '/730', image: 'og730.png' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-fisco page-730">
      <Nav variant="scheda" />
      <ScrollReveal />
      <GuideEnhancer />
      <SchemaOrg schemas={schemas} />

      {/* ════════ HERO ════════ */}
      <section className="ws ws--teal" style={{ paddingTop: '90px', paddingBottom: '36px' }}>
        <div className="cat-badge" style={{ background: 'rgba(255,255,255,.12)', marginBottom: 14 }}>
          {'💰'} Fisco e soldi
        </div>
        <h1 style={{ fontSize: 'clamp(28px,7vw,42px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 10, fontFamily: 'var(--font-playfair),serif' }}>
          Faccio il <em style={{ color: 'var(--tc)' }}>730</em>
        </h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', lineHeight: 1.6, marginBottom: 16, maxWidth: 480 }}>
          Come ottenere il rimborso pi&ugrave; alto possibile dalla dichiarazione dei redditi. Guida gratuita aggiornata al 2026.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['🕐 15 min di lettura', '⏰ Scade 30/9/2026', '✓ Aggiornata marzo 2026'].map((p, i) => (
            <span key={i} className="pill" style={{ background: 'rgba(255,255,255,.12)', color: 'rgba(255,255,255,.85)', border: 'none' }}>{p}</span>
          ))}
        </div>
      </section>

      {/* ════════ STATS ════════ */}
      <div className="ws-stats">
        <div><div className="ws-stat-num" style={{ color: 'var(--sage)' }}>0&euro;</div><div className="ws-stat-label">da solo online</div></div>
        <div><div className="ws-stat-num" style={{ color: 'var(--tc)' }}>30/9</div><div className="ws-stat-label">scadenza</div></div>
        <div><div className="ws-stat-num" style={{ color: 'var(--teal)' }}>~760&euro;</div><div className="ws-stat-label">rimborso medio</div></div>
      </div>

      {/* ════════ 1. COS'È ════════ */}
      <section className="ws ws--gray" id="cose">
        <div className="ws-eyebrow">Le basi</div>
        <h2>Cos&apos;&egrave; il 730</h2>
        <p className="ws-sub">In 30 secondi</p>
        <WiseSection
          visual={<>
            <div className="ws-grid">
              <div className="ws-card"><div className="ws-card-emoji">{'💼'}</div><div className="ws-card-title">Tu lavori</div><div className="ws-card-note">Il datore toglie le tasse &quot;a occhio&quot;</div></div>
              <div className="ws-card"><div className="ws-card-emoji">{'🧾'}</div><div className="ws-card-title">Fai il 730</div><div className="ws-card-note">Dici allo Stato le tue spese</div></div>
            </div>
            <div className="ws-arrow">&darr;</div>
            <div className="ws-result"><strong>{'💸'} Rimborso</strong><span>In busta paga tra luglio e agosto</span></div>
          </>}
          detail={<>
            <p>Quando lavori come dipendente, il tuo datore di lavoro (il <strong>sostituto d&apos;imposta</strong>) ti toglie le tasse dallo stipendio ogni mese. Il problema &egrave; che lui non sa tutto di te: non sa se paghi l&apos;affitto, se vai dal dentista, se hai figli che fanno sport.</p>
            <p>Il 730 serve a dire allo Stato: <strong>&quot;Ehi, ho speso questi soldi durante l&apos;anno. Ridammene un po&apos; indietro.&quot;</strong> Nella maggior parte dei casi, durante l&apos;anno hai pagato pi&ugrave; tasse del dovuto. Il 730 ti fa riottenere la differenza.</p>
            <div className="ws-box ws-box--tip"><div className="ws-box-title">{'💡'} Conviene anche se non sei obbligato</div><p>Dentista + metro + sport + affitto fanno facilmente 500–1.500&euro; di rimborso. Ogni anno. Se non fai il 730, quei soldi li regali allo Stato. &Egrave; come avere un buono sconto che scade ogni anno: se non lo usi, lo perdi.</p></div>
            <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--t1)', marginBottom: 8 }}>{'📖'} Glossario</p>
            <div className="ws-glossary">
              <div className="ws-gl"><b>CU</b> &mdash; il foglio che il datore ti d&agrave; entro marzo. Dice quanto hai guadagnato e quante tasse hai pagato.</div>
              <div className="ws-gl"><b>IRPEF</b> &mdash; la tassa principale sui redditi. Quella che paghi ogni mese in busta paga.</div>
              <div className="ws-gl"><b>Detrazione</b> &mdash; una spesa che lo Stato ti rimborsa in parte (di solito il 19%).</div>
              <div className="ws-gl"><b>Franchigia</b> &mdash; soglia sotto la quale non ti rimborsano. Per le spese mediche &egrave; 129,11&euro;.</div>
              <div className="ws-gl"><b>Precompilata</b> &mdash; il 730 che l&apos;Agenzia delle Entrate prepara per te, gi&agrave; parzialmente compilato.</div>
              <div className="ws-gl"><b>Conguaglio</b> &mdash; il conto finale. Se hai pagato troppe tasse, ti ridanno soldi. Se poche, devi saldare.</div>
            </div>
          </>}
        />
      </section>

      {/* ════════ 2. QUANTO PERDI ════════ */}
      <section className="ws ws--teal" id="quanto-perdi">
        <div className="ws-eyebrow">Il conto che nessuno ti fa</div>
        <h2>Quanto perdi senza il 730</h2>
        <div className="ws-hero-num"><strong>1.178&euro;</strong><span>persi ogni anno da Marco, 28 anni, dipendente</span></div>
        <WiseSection
          visual={
            <div className="ws-grid">
              <div className="ws-card"><div className="ws-card-emoji">{'🦷'}</div><div className="ws-card-value">+89&euro;</div><div className="ws-card-title">Dentista</div></div>
              <div className="ws-card"><div className="ws-card-emoji">{'🚇'}</div><div className="ws-card-value">+47&euro;</div><div className="ws-card-title">Metro</div></div>
              <div className="ws-card"><div className="ws-card-emoji">{'🏠'}</div><div className="ws-card-value">+991&euro;</div><div className="ws-card-title">Affitto</div></div>
              <div className="ws-card"><div className="ws-card-emoji">{'🐕'}</div><div className="ws-card-value">+51&euro;</div><div className="ws-card-title">Veterinario</div></div>
            </div>
          }
          label="Vedi il calcolo completo"
          detail={<>
            <p>Marco ha 28 anni, lavora come dipendente e guadagna 14.000&euro; lordi. Non ha mai fatto il 730 perch&eacute; pensava &quot;non cambia nulla&quot;.</p>
            <p><strong>Spese mediche:</strong> 600&euro; &minus; 129&euro; franchigia = 471&euro; &times; 19% = <strong>89&euro;</strong></p>
            <p><strong>Abbonamento metro:</strong> 250&euro; &times; 19% = <strong>47&euro;</strong></p>
            <p><strong>Affitto under 31:</strong> detrazione fissa fino a <strong>991&euro;</strong></p>
            <p><strong>Veterinario:</strong> 400&euro; &minus; 129&euro; = 271&euro; &times; 19% = <strong>51&euro;</strong></p>
            <p>E Marco ha una situazione semplice. Chi ha un <strong>mutuo</strong>, <strong>figli</strong>, o ha fatto <strong>lavori in casa</strong> pu&ograve; recuperare 2.000–4.000&euro;/anno. In 5 anni sono quasi <strong>6.000&euro; regalati</strong>.</p>
          </>}
        />
      </section>

      {/* ════════ 3. NOVITÀ 2026 ════════ */}
      <section className="ws ws--white" id="novita">
        <div className="ws-eyebrow">Aggiornamenti</div>
        <h2>Novit&agrave; 2026</h2>
        <p className="ws-sub">Le regole cambiano ogni anno. Ecco cosa sapere.</p>
        <div className="ws-box ws-box--tip"><div className="ws-box-title">{'💡'} Tre scaglioni IRPEF definitivi</div><p>Fino a 28.000&euro;: 23%. Da 28.001 a 50.000&euro;: 33% (era 35%). Oltre 50.000&euro;: 43%. Chi guadagna tra 28.000 e 50.000&euro; risparmia circa 440&euro;.</p></div>
        <div className="ws-box ws-box--warn"><div className="ws-box-title">{'⚠️'} Reddito sopra 75.000&euro;? Detrazioni ridotte</div><p>Le detrazioni al 19% vengono tagliate progressivamente fino ad azzerarsi a 100.000&euro;. Eccezione: spese sanitarie e interessi su mutui stipulati entro il 2024.</p></div>
        <div className="ws-box ws-box--warn"><div className="ws-box-title">{'⚠️'} Figli a carico: limite dei 30 anni</div><p>I figli possono essere considerati a carico solo fino ai 30 anni (prima non c&apos;era limite). Oltre i 30 anni, non detraibili salvo disabilit&agrave;.</p></div>
        <div className="ws-box ws-box--money"><div className="ws-box-title">{'💶'} Detrazione lavoro dipendente aumentata</div><p>Se guadagni meno di 15.000&euro; all&apos;anno, la detrazione sale da 1.880&euro; a 1.955&euro;.</p></div>
        <div className="ws-box ws-box--tip"><div className="ws-box-title">{'💡'} Spese scolastiche: sale il tetto</div><p>Il tetto massimo sale da 800&euro; a 1.000&euro; per studente. Il risparmio massimo passa da 152&euro; a 190&euro; per figlio.</p></div>
      </section>

      {/* ════════ 4. DETRAZIONI ════════ */}
      <section className="ws ws--gray" id="detrazioni">
        <div className="ws-eyebrow">Rimborsi</div>
        <h2>Quanto recuperi</h2>
        <p className="ws-sub">Lo Stato ti rimborsa il 19% su queste spese</p>
        <WiseSection
          visual={
            <div className="ws-grid">
              <div className="ws-card"><div className="ws-card-emoji">{'🦷'}</div><div className="ws-card-title">Dentista</div><div className="ws-card-value">+127&euro;</div><div className="ws-card-note">su 800&euro; spesi</div></div>
              <div className="ws-card"><div className="ws-card-emoji">{'🏠'}</div><div className="ws-card-title">Mutuo</div><div className="ws-card-value">+760&euro;</div><div className="ws-card-note">su 4.000&euro; interessi</div></div>
              <div className="ws-card"><div className="ws-card-emoji">{'🚇'}</div><div className="ws-card-title">Trasporti</div><div className="ws-card-value">+47&euro;</div><div className="ws-card-note">su 250&euro;</div></div>
              <div className="ws-card"><div className="ws-card-emoji">{'👶'}</div><div className="ws-card-title">Sport figli</div><div className="ws-card-value">+40&euro;</div><div className="ws-card-note">su 500&euro;</div></div>
              <div className="ws-card"><div className="ws-card-emoji">{'🐕'}</div><div className="ws-card-title">Veterinario</div><div className="ws-card-value">+51&euro;</div><div className="ws-card-note">su 400&euro;</div></div>
              <div className="ws-card"><div className="ws-card-emoji">{'🏫'}</div><div className="ws-card-title">Scuola</div><div className="ws-card-value">+190&euro;</div><div className="ws-card-note">su 1.000&euro;</div></div>
            </div>
          }
          detail={<>
            <p>Le <strong>detrazioni</strong> sono spese che lo Stato ti rimborsa in parte. Una singola detrazione sembra poco, ma sommandole: dentista + metro + sport + veterinario + affitto fanno facilmente <strong>500–1.500&euro; di rimborso</strong>. Ogni anno.</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--t1)', marginBottom: 8 }}>Tabella completa</p>
            <div className="ws-table">
              {[['Spese mediche','19%'],['Interessi mutuo','19%'],['Affitto','300–991€'],['Spese scolastiche','19%'],['Sport figli 5–18','19%'],['Trasporto pubblico','19%'],['Veterinario','19%'],['Assicurazione vita','19%'],['Donazioni ONLUS','26%'],['Ristrutturazione','50%'],['Ecobonus','50–65%'],['Bonus mobili','50%']].map((r, i) => (
                <div className="ws-row" key={i}><div className="ws-row-name">{r[0]}</div><div className="ws-row-val">{r[1]}</div></div>
              ))}
            </div>
            <div className="ws-box ws-box--warn"><div className="ws-box-title">{'⚠️'} Le detrazioni che la gente dimentica sempre</div><p>Abbonamento trasporti, veterinario, sport dei figli, spese funebri, donazioni ONLUS, badanti, bonus mobili. Se non le inserisci, quei soldi li perdi per sempre.</p></div>
          </>}
        />
      </section>

      {/* ════════ 5. CHI DEVE FARLO ════════ */}
      <section className="ws ws--white" id="chi-deve">
        <div className="ws-eyebrow">Obblighi</div>
        <h2>Chi deve fare il 730</h2>
        <p className="ws-sub">Tre casi: obbligatorio, consigliato, impossibile</p>
        <WiseSection
          visual={
            <div className="ws-status">
              <div className="ws-status-card" style={{ background: '#f0f8f5', border: '1px solid rgba(42,157,143,.2)' }}><div style={{ fontSize: 14, fontWeight: 700, color: 'var(--sage)' }}>{'✅'} Devi farlo se</div><div style={{ fontSize: 14, color: 'var(--t2)', marginTop: 4 }}>Sei dipendente o pensionato con redditi nel 2025</div></div>
              <div className="ws-status-card" style={{ background: '#FFF0E0', border: '1px solid rgba(227,100,20,.15)' }}><div style={{ fontSize: 14, fontWeight: 700, color: '#b34e0e' }}>{'⚠️'} Praticamente obbligatorio se</div><div style={{ fontSize: 14, color: 'var(--t2)', marginTop: 4 }}>Hai cambiato lavoro (due CU) o avuto stipendio + NASpI</div></div>
              <div className="ws-status-card" style={{ background: '#f3f7fb', border: '1px solid rgba(15,76,92,.12)' }}><div style={{ fontSize: 14, fontWeight: 700, color: 'var(--teal)' }}>{'💡'} Ti conviene se</div><div style={{ fontSize: 14, color: 'var(--t2)', marginTop: 4 }}>Un lavoro tutto l&apos;anno + spese da scaricare (dentista, affitto, mutuo...)</div></div>
              <div className="ws-status-card" style={{ background: '#f5f5f2' }}><div style={{ fontSize: 14, fontWeight: 700, color: 'var(--t3)' }}>{'🚫'} Non puoi farlo se</div><div style={{ fontSize: 14, color: 'var(--t2)', marginTop: 4 }}>Hai la partita IVA &mdash; serve il Modello Redditi (ex Unico)</div></div>
            </div>
          }
          detail={<>
            <p><strong>Due datori di lavoro = 730 praticamente obbligatorio.</strong> Ogni datore ti ha tolto le tasse come se fossi stato l&igrave; tutto l&apos;anno. Risultato: hai pagato meno tasse del dovuto e senza il 730 l&apos;Agenzia delle Entrate ti manda un avviso con interessi e sanzioni.</p>
            <div className="ws-box ws-box--tip"><div className="ws-box-title">{'💡'} La regola semplice</div><p>Se durante l&apos;anno hai speso soldi per salute, casa, figli, trasporti o animali domestici &mdash; fai il 730. Quasi sicuramente ti spetta un rimborso.</p></div>
          </>}
        />
      </section>

      {/* ════════ 6. COME SI FA ════════ */}
      <section className="ws ws--white" id="come">
        <div className="ws-eyebrow">Passo per passo</div>
        <h2>Come si fa il 730</h2>
        <p className="ws-sub">5 passi dal divano di casa</p>
        <WiseSection
          visual={
            <div className="ws-flow">
              {[['🔐','Fai lo SPID','15 minuti, gratis'],['📄','Raccogli i documenti','CU + ricevute spese'],['💻','Apri la precompilata','agenziaentrate.gov.it'],['✅','Controlla e invia','Entro il 30 settembre'],['💸','Ricevi il rimborso','In busta paga a luglio']].map((s, i) => (
                <div key={i}>
                  <div className="ws-flow-step"><div className="ws-flow-icon">{s[0]}</div><div className="ws-flow-text"><strong>{s[1]}</strong><span>{s[2]}</span></div><div className="ws-flow-num">{i + 1}</div></div>
                  {i < 4 && <div className="ws-flow-line" />}
                </div>
              ))}
            </div>
          }
          detail={<>
            <p><strong>Passo 0 &mdash; Hai lo SPID?</strong> Per fare il 730 online da solo ti serve lo SPID (l&apos;identit&agrave; digitale). Se non ce l&apos;hai, <Link href="/spid" style={{ color: 'var(--tc)', fontWeight: 600 }}>ci vogliono 15 minuti per farlo</Link>. Se vai al CAF, lo SPID non ti serve.</p>
            <p><strong>Passo 1 &mdash; Raccogli i documenti.</strong> Il pi&ugrave; importante &egrave; la CU (Certificazione Unica): te la d&agrave; il datore di lavoro entro il 16 marzo. Poi raccogli tutte le ricevute delle spese: mediche, affitto, mutuo, scuola, trasporti, veterinario.</p>
            <p><strong>Passo 2 &mdash; Decidi come farlo.</strong> Da solo online &rarr; gratis, 1–2 ore, serve SPID. Al CAF &rarr; 30–80&euro;, 30 minuti. Dal commercialista &rarr; 80–200&euro;, per situazioni complesse.</p>
            <p><strong>Passo 3 &mdash; Controlla la precompilata.</strong> Dal 30 aprile l&apos;Agenzia delle Entrate pubblica il tuo 730 gi&agrave; parzialmente compilato. <strong>Non accettarlo senza controllare.</strong> Mancano quasi sempre: spese sportive dei figli, affitto, spese mediche private, abbonamenti trasporti.</p>
            <p><strong>Passo 4 &mdash; Invia entro il 30 settembre.</strong> Consiglio: fallo tra maggio e giugno. Prima lo fai, prima arriva il rimborso.</p>
            <p><strong>Passo 5 &mdash; Ricevi il rimborso.</strong> Se ti spetta un rimborso, lo trovi in busta paga tra luglio e agosto. Pensionati: agosto o settembre. Se devi pagare (perch&eacute; hai avuto due lavori), il datore te lo trattiene dalla busta paga.</p>
          </>}
        />
      </section>

      {/* ════════ 7. QUANTO COSTA ════════ */}
      <section className="ws ws--gray" id="costi">
        <div className="ws-eyebrow">Confronto</div>
        <h2>Quanto costa farlo</h2>
        <p className="ws-sub">Tre opzioni, un solo vincitore</p>
        <div className="ws-compare">
          <div className="ws-cmp ws-cmp--best"><div className="ws-cmp-badge">Consigliato</div><div className="ws-cmp-info"><div className="ws-cmp-name">Da solo online</div><div className="ws-cmp-sub">1–2 ore &middot; Serve SPID &middot; Ideale per un lavoro e poche spese</div></div><div className="ws-cmp-price">0&euro;</div></div>
          <div className="ws-cmp"><div className="ws-cmp-info"><div className="ws-cmp-name">Al CAF / Patronato</div><div className="ws-cmp-sub">30 min + attesa &middot; Chi ha cambiato lavoro o ha l&apos;affitto</div></div><div className="ws-cmp-price">30–80&euro;</div></div>
          <div className="ws-cmp"><div className="ws-cmp-info"><div className="ws-cmp-name">Commercialista</div><div className="ws-cmp-sub">15 min tu &middot; Immobili, redditi esteri, criptovalute</div></div><div className="ws-cmp-price">80–200&euro;</div></div>
        </div>
        <div className="ws-box ws-box--money"><div className="ws-box-title">{'💶'} Il consiglio onesto di ZeroBurocrazia</div><p><strong>Un solo lavoro + poche spese</strong> &rarr; fallo da solo con la precompilata. <strong>Mutuo, cambio lavoro, figli</strong> &rarr; vai al CAF. <strong>Immobili, cripto, redditi esteri</strong> &rarr; commercialista.</p></div>
      </section>

      {/* ════════ 8. DOCUMENTI ════════ */}
      <section className="ws ws--white" id="documenti">
        <div className="ws-eyebrow">Checklist</div>
        <h2>Cosa ti serve</h2>
        <WiseSection
          visual={
            <div className="ws-checks">
              <div className="ws-check-label">Obbligatori</div>
              <div className="ws-check"><span className="ws-check-emoji">{'📄'}</span><span className="ws-check-text">CU 2026 (Certificazione Unica)</span><span className="ws-check-ok">{'✓'}</span></div>
              <div className="ws-check"><span className="ws-check-emoji">{'🪪'}</span><span className="ws-check-text">Documento d&apos;identit&agrave; + codice fiscale</span><span className="ws-check-ok">{'✓'}</span></div>
              <div className="ws-check"><span className="ws-check-emoji">{'🏦'}</span><span className="ws-check-text">IBAN per il rimborso</span><span className="ws-check-ok">{'✓'}</span></div>
              <div className="ws-check-label">Per le detrazioni</div>
              {[['🦷','Ricevute spese mediche'],['🏠','Contratto d\'affitto registrato'],['🏦','Certificazione interessi mutuo'],['🏫','Ricevute spese scolastiche'],['⚽','Ricevute sport figli (5–18 anni)'],['🚇','Abbonamento trasporto pubblico'],['🐕','Ricevute spese veterinarie'],['🔨','Fatture ristrutturazione + bonifici parlanti']].map((d, i) => (
                <div className="ws-check" key={i}><span className="ws-check-emoji">{d[0]}</span><span className="ws-check-text">{d[1]}</span><span className="ws-check-empty" /></div>
              ))}
            </div>
          }
          detail={<>
            <p><strong>CU (Certificazione Unica)</strong> &mdash; il foglio che il datore ti d&agrave; entro marzo. Dice quanto hai guadagnato e quante tasse hai pagato. Senza questo non puoi fare il 730.</p>
            <p><strong>Ricevute spese mediche</strong> &mdash; farmaci, visite, esami, dentista, psicologo, occhiali. Tieni tutto.</p>
            <p><strong>Contratto d&apos;affitto registrato</strong> &mdash; serve per la detrazione affitto.</p>
            <p><strong>Certificazione interessi mutuo</strong> &mdash; te la manda la banca tra febbraio e marzo.</p>
            <p><strong>Fatture ristrutturazione</strong> &mdash; servono i bonifici parlanti. Senza quelli, perdi la detrazione.</p>
            <div className="ws-box ws-box--tip"><div className="ws-box-title">{'💡'} Metti tutto in una cartellina</div><p>Quando ricevi una ricevuta, mettila subito nella cartellina &quot;730&quot;. A maggio avrai tutto pronto in 5 minuti invece di impazzire a cercare scontrini.</p></div>
          </>}
        />
      </section>

      {/* ════════ 9. ERRORI ════════ */}
      <section className="ws ws--warm" id="errori">
        <div className="ws-eyebrow">Attenzione</div>
        <h2>Errori da evitare</h2>
        <p className="ws-sub">I 4 pi&ugrave; comuni</p>
        <div className="ws-warnings">
          <div className="ws-wcard"><span className="ws-wcard-emoji">{'⚠️'}</span><div><div className="ws-wcard-title">Accettare la precompilata senza controllarla</div><div className="ws-wcard-desc">Sport figli, affitto, spese mediche private spesso mancano. Controlla sempre voce per voce.</div></div></div>
          <div className="ws-wcard"><span className="ws-wcard-emoji">{'⚠️'}</span><div><div className="ws-wcard-title">Non fare il 730 perch&eacute; &quot;tanto non cambia&quot;</div><div className="ws-wcard-desc">Anche con poche spese mediche e un abbonamento puoi recuperare 200–400&euro;. Ogni anno. Per sempre.</div></div></div>
          <div className="ws-wcard"><span className="ws-wcard-emoji">{'⚠️'}</span><div><div className="ws-wcard-title">Pagare spese detraibili in contanti</div><div className="ws-wcard-desc">Dal 2025 anche i farmaci da banco richiedono pagamento tracciabile. Carta, bancomat o bonifico.</div></div></div>
          <div className="ws-wcard"><span className="ws-wcard-emoji">{'⚠️'}</span><div><div className="ws-wcard-title">Andare al CAF all&apos;ultimo momento</div><div className="ws-wcard-desc">A settembre i CAF sono in ginocchio. Vai tra maggio e giugno: zero stress, tempo per errori.</div></div></div>
        </div>
      </section>

      {/* ════════ 10. CALENDARIO ════════ */}
      <section className="ws ws--white" id="calendario">
        <div className="ws-eyebrow">Scadenze</div>
        <h2>Calendario 2026</h2>
        <div className="ws-timeline">
          <div className="ws-tl ws-tl--active"><div className="ws-tl-dot" /><div className="ws-tl-date">16 Marzo</div><div className="ws-tl-title">Ricevi la CU</div><div className="ws-tl-desc">Dal datore di lavoro o dall&apos;INPS</div></div>
          <div className="ws-tl"><div className="ws-tl-dot" /><div className="ws-tl-date">30 Aprile</div><div className="ws-tl-title">Online la precompilata</div><div className="ws-tl-desc">Accedi con SPID su agenziaentrate.gov.it</div></div>
          <div className="ws-tl"><div className="ws-tl-dot" /><div className="ws-tl-date">Maggio – Giugno</div><div className="ws-tl-title">Il periodo ideale per fare il 730</div><div className="ws-tl-desc">Meno code al CAF, rimborso a luglio</div></div>
          <div className="ws-tl"><div className="ws-tl-dot" /><div className="ws-tl-date">Luglio – Agosto</div><div className="ws-tl-title">Arriva il rimborso in busta paga</div><div className="ws-tl-desc">Se hai inviato entro giugno</div></div>
          <div className="ws-tl"><div className="ws-tl-dot" /><div className="ws-tl-date">30 Settembre</div><div className="ws-tl-title">Scadenza invio 730</div><div className="ws-tl-desc">Dopo questa data devi fare il Modello Redditi</div></div>
        </div>
      </section>

      {/* ════════ 11. CALCOLATORE ════════ */}
      <section className="ws ws--gray" id="calcolatore">
        <div className="ws-eyebrow">Stimatore</div>
        <h2>Calcola il tuo rimborso</h2>
        <p className="ws-sub">Muovi i cursori per stimare quanto recuperi</p>
        <Calculator730 />
      </section>

      {/* ════════ 12. ESEMPIO MARIA ════════ */}
      <section className="ws ws--white" id="esempio">
        <div className="ws-eyebrow">Esempio pratico</div>
        <h2>Maria fa il 730 per la prima volta</h2>
        <p className="ws-sub">26 anni, impiegata a Torino, 22.000&euro; lordi</p>
        <div className="ws-flow">
          {[['📄','Marzo: raccoglie i documenti','CU via email + ricevute dentista (320€) + GTT (350€) + contratto affitto'],['💻','Maggio: apre la precompilata','Su agenziaentrate.gov.it con SPID. Dentista c\'è, manca GTT — lo aggiunge'],['🔍','Controlla tutto','Affitto OK. Mediche: 36€ + affitto 991€ + trasporti 66€ = totale 1.093€'],['✅','Invia e aspetta','A luglio trova 1.093€ in più in busta. Costo: 0€. Tempo: 1 ora e mezza']].map((s, i) => (
            <div key={i}>
              <div className="ws-flow-step"><div className="ws-flow-icon">{s[0]}</div><div className="ws-flow-text"><strong>{s[1]}</strong><span>{s[2]}</span></div></div>
              {i < 3 && <div className="ws-flow-line" />}
            </div>
          ))}
        </div>
        <div className="ws-box ws-box--money"><div className="ws-box-title">{'💶'} Morale della storia</div><p>Maria per 4 anni non ha fatto il 730. Ha perso circa 4.000&euro;. Quest&apos;anno ci ha messo un&apos;ora e mezza e ha recuperato 1.093&euro;. Il prossimo anno sar&agrave; ancora pi&ugrave; veloce.</p></div>
      </section>

      {/* ════════ 13. SE SEI IN RITARDO ════════ */}
      <section className="ws ws--warm" id="ritardo">
        <div className="ws-eyebrow">Ritardi e sanzioni</div>
        <h2>Se sei in ritardo</h2>
        <p className="ws-sub">La scadenza &egrave; il 30 settembre. Ecco cosa fare se l&apos;hai saltata.</p>
        <WiseSection
          visual={
            <div className="ws-warnings">
              <div className="ws-wcard"><span className="ws-wcard-emoji">{'📅'}</span><div><div className="ws-wcard-title">Entro il 25 ottobre</div><div className="ws-wcard-desc">730 integrativo. Nessuna sanzione.</div></div></div>
              <div className="ws-wcard"><span className="ws-wcard-emoji">{'📅'}</span><div><div className="ws-wcard-title">Entro il 30 novembre</div><div className="ws-wcard-desc">Modello Redditi correttivo. Pi&ugrave; complicato, meglio con il CAF.</div></div></div>
              <div className="ws-wcard"><span className="ws-wcard-emoji">{'📅'}</span><div><div className="ws-wcard-title">Dopo il 30 novembre</div><div className="ws-wcard-desc">Dichiarazione tardiva entro 90 giorni. Sanzione: 25&euro; o 1–10% dell&apos;imposta.</div></div></div>
            </div>
          }
          detail={
            <div className="ws-box ws-box--tip"><div className="ws-box-title">{'💡'} Hai dimenticato anni fa?</div><p>Puoi presentare una dichiarazione integrativa entro 5 anni. Se ti spettava un rimborso, puoi ancora recuperarlo. Se ti presenti spontaneamente (&quot;ravvedimento operoso&quot;), le sanzioni sono ridotte.</p></div>
          }
        />
      </section>

      {/* ════════ 14. FAQ ════════ */}
      <section className="ws ws--teal" id="faq">
        <div className="ws-eyebrow">FAQ</div>
        <h2>Domande frequenti</h2>
        <FAQ items={faqItems} />
      </section>

      {/* ════════ CTA ════════ */}
      <section className="ws ws--white" style={{ paddingBottom: 48 }}>
        <div className="ws-cta">
          <div style={{ fontSize: 28, marginBottom: 8 }}>{'📬'}</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--t1)', marginBottom: 6 }}>Non perderti la scadenza</div>
          <div style={{ fontSize: 13, color: 'var(--t3)', marginBottom: 16 }}>Ti avvisiamo prima del 30 settembre con tutto quello che ti serve.</div>
        </div>
        <BrevoForm pageName="730" />
      </section>

      <Footer />
    </div>
  );
}
